const fs = require("fs");
const path = require("path");
const { spawn } = require("child_process");

const rootDir = path.resolve(__dirname, "..");
const outDir = path.join(rootDir, "out");
const publicDir = path.join(rootDir, "public");
const explorerPath = path.join(publicDir, "data", "activities-explorer.json");
const centersPath = path.join(rootDir, "data", "centers.ts");
const curlBin = process.platform === "win32" ? "curl.exe" : "curl";

const YUMPING_PARTNER_ID = "449fb0b2d23ef85c3ee63f78b6e90eae";
const IATI_AFFILIATE_ID = "37531501737322";
const MAX_IMAGE_BYTES = 350 * 1024; // 350 KB CWV threshold
const MAX_EXPLORER_JSON_BYTES = 620 * 1024; // 620 KB payload threshold

const exp = JSON.parse(fs.readFileSync(explorerPath, "utf8"));
const activeActivitySlugs = new Set(exp.activities.map((a) => a.slug));

// Group activities by clean Yumping offer URL so we only fetch each unique offer once
const offerMap = new Map();
const knownOfferIds = new Set([
  "60480", "19837", "37279", "203", "37275", "33854",
  "31018", "31017", "31016", "31019", "36445", "89332",
  "27576", "14122", "16491", "23978", "37319", "21358",
]);

for (const a of exp.activities) {
  for (const o of a.offers || []) {
    const u = new URL(o.href);
    u.searchParams.delete("id_partner");
    u.searchParams.delete("placement");
    const cleanUrl = u.toString();
    const offerId = (cleanUrl.match(/--o(\d+)/) || [])[1] || "";
    if (offerId) knownOfferIds.add(offerId);
    if (!offerMap.has(cleanUrl)) {
      offerMap.set(cleanUrl, {
        url: cleanUrl,
        offerId,
        provider: o.provider,
        priceFrom: o.priceFrom,
        activities: [],
      });
    }
    offerMap.get(cleanUrl).activities.push({
      id: a.id,
      slug: a.slug,
      title: a.title,
      zone: a.zone,
      region: a.region,
      type: a.type,
      priceFrom: o.priceFrom,
      isGenericHubActivity: a.id <= 218,
    });
  }
}

const uniqueOffers = [...offerMap.values()];

function decodeHtml(str) {
  if (!str) return "";
  return str
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&euro;/g, "€")
    .replace(/&aacute;/g, "á")
    .replace(/&eacute;/g, "é")
    .replace(/&iacute;/g, "í")
    .replace(/&oacute;/g, "ó")
    .replace(/&uacute;/g, "ú")
    .replace(/&Aacute;/g, "Á")
    .replace(/&Eacute;/g, "É")
    .replace(/&Iacute;/g, "Í")
    .replace(/&Oacute;/g, "Ó")
    .replace(/&Uacute;/g, "Ú")
    .replace(/&ntilde;/g, "ñ")
    .replace(/&Ntilde;/g, "Ñ")
    .replace(/&uuml;/g, "ü")
    .replace(/&ccedil;/g, "ç")
    .replace(/\s+/g, " ")
    .trim();
}

function curlFetchHtml(url, postBody = null) {
  return new Promise((resolve) => {
    const args = [
      "-s",
      "-L",
      "--max-time", "14",
      "-A", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
    ];
    if (postBody) {
      args.push("-X", "POST", "-H", "Content-Type: application/x-www-form-urlencoded", "-d", postBody);
    }
    args.push(url);
    const proc = spawn(curlBin, args);
    const chunks = [];
    proc.stdout.on("data", (d) => chunks.push(d));
    proc.on("close", () => resolve(Buffer.concat(chunks).toString("utf8")));
    proc.on("error", () => resolve(""));
  });
}

function curlCheckStatus(url) {
  return new Promise((resolve) => {
    const args = ["-s", "-L", "--max-time", "12", "-o", "NUL", "-w", "%{http_code}", url];
    const proc = spawn(curlBin, args);
    let out = "";
    proc.stdout.on("data", (d) => (out += d.toString()));
    proc.on("close", () => resolve(parseInt(out.trim(), 10) || 0));
    proc.on("error", () => resolve(0));
  });
}

function parseCatalogCards(html, candidateMap) {
  const parts = html.split(/<li\s+id=["']esl_/i);
  for (let i = 1; i < parts.length; i++) {
    const chunk = parts[i].split("</li>")[0];
    const idMatch = chunk.match(/^(\d+)["']/);
    if (!idMatch) continue;
    const offerId = idMatch[1];
    if (knownOfferIds.has(offerId) || candidateMap.has(offerId)) continue;

    const linkMatch =
      chunk.match(/id=["']app_lnkEmp_\d+["'][^>]*title=["']([^"']+)["'][^>]*href=["']([^"']+)["']/i) ||
      chunk.match(/id=["']app_lnkEmp_\d+["'][^>]*href=["']([^"']+)["'][^>]*title=["']([^"']+)["']/i) ||
      chunk.match(/href=["'](https:\/\/www\.yumping\.com\/ofertas\/buceo\/[^"']+--o\d+)["'][^>]*>\s*([^<]+)<\/a>/i);
    if (!linkMatch) continue;

    let title = "";
    let url = "";
    if (linkMatch[1].startsWith("http")) {
      url = linkMatch[1].trim();
      title = decodeHtml(linkMatch[2]);
    } else {
      title = decodeHtml(linkMatch[1]);
      url = linkMatch[2].trim();
    }

    const provMatch = url.match(/https:\/\/www\.yumping\.com\/ofertas\/buceo\/([^/]+)\/[^"'\s]+--o(\d+)/);
    if (!provMatch) continue;
    const provinceSlug = provMatch[1];

    let locality = "";
    const locMatch = chunk.match(/data-icon=["']map-marker["'][\s\S]*?<\/svg>\s*([^<]+)<\/div>/i);
    if (locMatch) locality = decodeHtml(locMatch[1]);

    let priceFrom = undefined;
    const preMatch = chunk.match(/data-des=["']([\d.]+)["']/) || chunk.match(/data-pre=["']([\d.]+)["']/);
    if (preMatch && Number(preMatch[1]) > 0) {
      priceFrom = Math.round(Number(preMatch[1]) * 100) / 100;
    }

    candidateMap.set(offerId, {
      offerId,
      url,
      provinceSlug,
      title,
      locality,
      priceFrom,
    });
  }
}

async function discoverNewYumpingOffers() {
  const candidateMap = new Map();
  const firstHtml = await curlFetchHtml("https://www.yumping.com/buceo/espana");
  if (!firstHtml) return [];
  parseCatalogCards(firstHtml, candidateMap);
  const totalMatch = firstHtml.match(/de un total de\s+(\d+)\s+ofertas/i);
  const totalOffers = totalMatch ? Number(totalMatch[1]) : 900;
  const totalPages = Math.min(60, Math.ceil(totalOffers / 20));

  const pages = [];
  for (let p = 2; p <= totalPages; p++) pages.push(p);

  let idx = 0;
  async function pageWorker() {
    while (idx < pages.length) {
      const p = pages[idx++];
      const html = await curlFetchHtml("https://www.yumping.com/buceo/espana", `npage=${p}&paginado_ofertas=1`);
      if (html) parseCatalogCards(html, candidateMap);
    }
  }
  await Promise.all(Array.from({ length: 12 }, () => pageWorker()));

  const candidates = [...candidateMap.values()];
  const verifiedNew = [];
  for (const c of candidates) {
    const check = await inspectOffer(c);
    if (check.isHealthy && c.priceFrom > 0) {
      verifiedNew.push(c);
    }
  }
  return verifiedNew;
}

function inspectOffer(item) {
  return new Promise((resolve) => {
    const args = [
      "-s",
      "-L",
      "--max-time", "14",
      "-w", "\n__CURL_META__:%{http_code}|%{url_effective}|%{num_redirects}",
      "-A", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
      item.url,
    ];
    const proc = spawn(curlBin, args);
    const chunks = [];
    proc.stdout.on("data", (d) => chunks.push(d));
    proc.on("close", () => {
      const full = Buffer.concat(chunks).toString("utf8");
      const metaIdx = full.lastIndexOf("\n__CURL_META__:");
      const html = metaIdx >= 0 ? full.slice(0, metaIdx) : full;
      const meta = metaIdx >= 0 ? full.slice(metaIdx + 15).trim() : "0||0";
      const [codeStr, finalUrl = "", redirStr = "0"] = meta.split("|");
      const code = parseInt(codeStr, 10) || 0;
      const redirects = parseInt(redirStr, 10) || 0;

      const finalOfferId = (finalUrl.match(/--o(\d+)/) || [])[1] || "";
      const offerIdChanged = Boolean(item.offerId && finalOfferId !== item.offerId);
      const hasAddOferta = /AddOferta\s*\(|btn-ficha-compra|id="reservar-btn"|class="[^"]*a-button--primary/i.test(html);
      const hasWithdrawnText = /oferta retirada|oferta no disponible|temporalmente no disponible|actividad no disponible|esta oferta ha caducado/i.test(html);

      // Extract live Yumping prices (both base price and promo/title price)
      const validPrices = new Set();
      const titlePriceM = html.match(/<title>[^<]*?desde\s+([\d.,]+)\s*€/i);
      if (titlePriceM) {
        const p = Number(titlePriceM[1].replace(",", "."));
        if (p > 0) validPrices.add(Math.round(p));
      }
      for (const m of html.matchAll(/data-(?:des|pre)=["']([\d.]+)["']/g)) {
        const p = Number(m[1]);
        if (p > 0) validPrices.add(Math.round(p));
      }
      for (const m of html.matchAll(/"price":\s*"?([\d.]+)"?/g)) {
        const p = Number(m[1]);
        if (p > 0) validPrices.add(Math.round(p));
      }

      const currentPrice = Math.round(Number(item.priceFrom) || 0);
      const priceMatchesLive =
        validPrices.size === 0 ||
        [...validPrices].some((lp) => Math.abs(lp - currentPrice) <= 2);
      const liveRecommendedPrice = titlePriceM
        ? Math.round(Number(titlePriceM[1].replace(",", ".")))
        : [...validPrices][0] || currentPrice;

      resolve({
        ...item,
        code,
        finalUrl,
        redirects,
        finalOfferId,
        offerIdChanged,
        hasAddOferta,
        hasWithdrawnText,
        priceMatchesLive,
        liveRecommendedPrice,
        isHealthy: code === 200 && !offerIdChanged && hasAddOferta && !hasWithdrawnText,
      });
    });
    proc.on("error", () => {
      resolve({
        ...item,
        code: 0,
        finalUrl: "",
        redirects: 0,
        finalOfferId: "",
        offerIdChanged: false,
        hasAddOferta: false,
        hasWithdrawnText: false,
        priceMatchesLive: true,
        liveRecommendedPrice: item.priceFrom,
        isHealthy: false,
      });
    });
  });
}

function checkCentersIntegrity() {
  const src = fs.readFileSync(centersPath, "utf8");
  const missingActivityRefs = [];
  const blockRegex = /slug:\s*"([^"]+)"[\s\S]*?activitySlugs:\s*\[([\s\S]*?)\]/g;
  for (const m of src.matchAll(blockRegex)) {
    const centerSlug = m[1];
    const slugsRaw = m[2];
    const slugs = [...slugsRaw.matchAll(/"([^"]+)"/g)].map((s) => s[1]);
    for (const s of slugs) {
      if (!activeActivitySlugs.has(s)) {
        missingActivityRefs.push({ centerSlug, missingActivitySlug: s });
      }
    }
  }
  return { missingActivityRefs };
}

function checkCwvAssets() {
  const oversizedImages = [];
  function walkImg(dir) {
    if (!fs.existsSync(dir)) return;
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) walkImg(p);
      else if (/\.(jpe?g|png|webp|avif)$/i.test(e.name)) {
        const size = fs.statSync(p).size;
        if (size > MAX_IMAGE_BYTES) {
          oversizedImages.push({ file: path.relative(publicDir, p).replace(/\\/g, "/"), kb: Math.round(size / 1024) });
        }
      }
    }
  }
  walkImg(path.join(publicDir, "images"));
  const explorerBytes = fs.statSync(explorerPath).size;
  return {
    oversizedImages,
    explorerKb: Math.round(explorerBytes / 1024),
    explorerOversized: explorerBytes > MAX_EXPLORER_JSON_BYTES,
  };
}

function checkStaticOut() {
  if (!fs.existsSync(outDir)) {
    return { exists: false };
  }
  function walk(d, o = []) {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      const p = path.join(d, e.name);
      e.isDirectory() ? walk(p, o) : e.name.endsWith(".html") && o.push(p);
    }
    return o;
  }
  const files = walk(outDir);
  const sitemapXml = fs.readFileSync(path.join(outDir, "sitemap.xml"), "utf8");
  const sitemapSet = new Set([...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]));

  const routes = new Set();
  for (const f of files) {
    const rel = path.relative(outDir, f).replace(/\\/g, "/");
    routes.add(rel === "index.html" ? "/" : "/" + rel.replace(/index\.html$/, ""));
  }

  let pages = 0;
  const bookingEmpty = [];
  const brokenLinks = [];
  const noindex = [];
  const canonicalMismatch = [];
  const notInSitemap = [];
  const dupTitles = [];
  const dupDescs = [];
  const untaggedAffiliateLinks = [];
  const imgsMissingDimensions = [];
  const schemaPriceZero = [];

  const titles = new Map();
  const descs = new Map();

  for (const f of files) {
    const rel = path.relative(outDir, f).replace(/\\/g, "/");
    if (/^(404|_not-found)/.test(rel)) continue;
    pages++;
    const html = fs.readFileSync(f, "utf8");
    const expectedUrl = rel === "index.html" ? "https://buceoatlas.es/" : "https://buceoatlas.es/" + rel.replace(/index\.html$/, "");

    if (html.includes("booking-empty")) bookingEmpty.push(rel);
    if (html.includes('content="noindex')) noindex.push(rel);

    const canM = html.match(/<link rel="canonical" href="([^"]+)"/);
    if (!canM || canM[1] !== expectedUrl) canonicalMismatch.push(`${rel} -> ${canM ? canM[1] : "MISSING"}`);
    if (!sitemapSet.has(expectedUrl)) notInSitemap.push(rel);

    const t = (html.match(/<title>([^<]+)<\/title>/) || [])[1];
    if (t) {
      if (titles.has(t)) dupTitles.push(`${rel} == ${titles.get(t)}`);
      else titles.set(t, rel);
    }
    const d = (html.match(/<meta name="description" content="([^"]+)"/) || [])[1];
    if (d) {
      if (descs.has(d)) dupDescs.push(`${rel} == ${descs.get(d)}`);
      else descs.set(d, rel);
    }

    // Internal links check
    for (const m of html.matchAll(/href="(\/[^"#?]*)"/g)) {
      const h = m[1];
      if (/^\/(_next|images|favicon|logo|apple)/.test(h)) continue;
      if (!routes.has(h)) brokenLinks.push(`${h} in ${rel}`);
    }

    // Affiliate tag protection check
    for (const m of html.matchAll(/href="(https:\/\/www\.yumping\.com\/ofertas\/[^"]+)"/g)) {
      if (!m[1].includes(`id_partner=${YUMPING_PARTNER_ID}`)) {
        untaggedAffiliateLinks.push(`Yumping missing id_partner in ${rel}: ${m[1]}`);
      }
    }
    for (const m of html.matchAll(/href="(https:\/\/www\.iatiseguros\.com\/[^"]+)"/g)) {
      if (!m[1].includes(`r=${IATI_AFFILIATE_ID}`)) {
        untaggedAffiliateLinks.push(`IATI missing affiliate code in ${rel}: ${m[1]}`);
      }
    }

    // CWV CLS check: ensure <img> tags have width and height
    for (const m of html.matchAll(/<img\b[^>]*>/gi)) {
      const tag = m[0];
      if (!/\bwidth=/i.test(tag) || !/\bheight=/i.test(tag)) {
        imgsMissingDimensions.push(`${rel}: ${tag.slice(0, 80)}`);
      }
    }

    // JSON-LD price > 0 check
    for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
      try {
        const j = JSON.parse(m[1]);
        for (const e of j["@graph"] || [j]) {
          for (const o of [e.offers, ...(e.offers?.offers || [])].filter(Boolean)) {
            if (o.price === 0 || o.lowPrice === 0) schemaPriceZero.push(rel);
          }
        }
      } catch {}
    }
  }

  return {
    exists: true,
    pages,
    bookingEmpty,
    brokenLinks: [...new Set(brokenLinks)],
    noindex,
    canonicalMismatch,
    notInSitemap,
    dupTitles,
    dupDescs,
    untaggedAffiliateLinks,
    imgsMissingDimensions,
    schemaPriceZero,
  };
}

async function run() {
  console.log(`1. Checking ${uniqueOffers.length} unique Yumping offers across ${exp.activities.length} activities...`);
  const results = [];
  const concurrency = 35;
  let idx = 0;

  async function worker() {
    while (idx < uniqueOffers.length) {
      const cur = idx++;
      const res = await inspectOffer(uniqueOffers[cur]);
      results.push(res);
    }
  }

  await Promise.all(Array.from({ length: concurrency }, () => worker()));

  const unhealthyOffers = results.filter((r) => !r.isHealthy);
  const priceDriftOffers = results.filter((r) => r.isHealthy && !r.priceMatchesLive);

  console.log("2. Scanning Yumping Spain catalog for newly published diving offers...");
  const newOffers = await discoverNewYumpingOffers();

  console.log("3. Checking centers integrity, Core Web Vitals assets, SEO & affiliate tags...");
  const centersCheck = checkCentersIntegrity();
  const cwvCheck = checkCwvAssets();
  const staticCheck = checkStaticOut();

  console.log("4. Checking live production domain https://buceoatlas.es/ and sitemap.xml...");
  const [prodHomeCode, prodSitemapCode] = await Promise.all([
    curlCheckStatus("https://buceoatlas.es/"),
    curlCheckStatus("https://buceoatlas.es/sitemap.xml"),
  ]);

  console.log("\n=== DAILY YUMPING, SEO, CWV & SITE INTEGRITY REPORT ===");
  console.log(`Production https://buceoatlas.es/ HTTP status: ${prodHomeCode} | sitemap.xml: ${prodSitemapCode}`);
  console.log(`Total activities: ${exp.activities.length}`);
  console.log(`Unique Yumping offers checked: ${results.length}`);
  console.log(`Healthy Yumping offers: ${results.length - unhealthyOffers.length}`);
  console.log(`Unhealthy / fallen Yumping offers: ${unhealthyOffers.length}`);
  console.log(`Offers with live price changes on Yumping: ${priceDriftOffers.length}`);
  console.log(`Brand-new active Yumping offers discovered: ${newOffers.length}`);
  console.log(`Broken activity references in data/centers.ts: ${centersCheck.missingActivityRefs.length}`);
  console.log(`CWV oversized images (>350KB): ${cwvCheck.oversizedImages.length} | activities-explorer.json: ${cwvCheck.explorerKb}KB`);

  if (unhealthyOffers.length > 0) {
    console.log("\n--- FALLEN OFFERS NEEDING ACTION ---");
    for (const u of unhealthyOffers) {
      console.log(
        `Offer --o${u.offerId} (${u.url}) -> HTTP ${u.code}, idChanged=${u.offerIdChanged}, bookable=${u.hasAddOferta}, withdrawn=${u.hasWithdrawnText}`
      );
      for (const act of u.activities) {
        const actionType = act.isGenericHubActivity
          ? "ACTION: REPLACE_OFFER (Generic destination page ID <= 218: keep URL, update offer & priceFrom to active offer in same zone/type)"
          : "ACTION: REMOVE_AND_301 (Specific Yumping offer page ID >= 219: remove retired activity + clean data/centers.ts + add 301 redirect in public/_redirects)";
        console.log(`  - Activity ID ${act.id} [${act.slug}] (zone: ${act.zone}, type: ${act.type}) -> ${actionType}`);
      }
    }
  }

  if (priceDriftOffers.length > 0) {
    console.log("\n--- OFFERS WITH PRICE CHANGES ON YUMPING (PRICE DRIFT) ---");
    for (const p of priceDriftOffers) {
      console.log(`  ~ Offer --o${p.offerId}: our priceFrom=${p.priceFrom}€ -> live Yumping price=${p.liveRecommendedPrice}€ (${p.url})`);
    }
    if (process.argv.includes("--auto-fix")) {
      const actPath = path.join(rootDir, "data", "activities.ts");
      let actSrc = fs.readFileSync(actPath, "utf8");
      for (const p of priceDriftOffers) {
        const oid = p.offerId;
        const newPrice = p.liveRecommendedPrice;
        if (!oid || !newPrice) continue;
        for (const act of exp.activities) {
          for (const o of act.offers || []) {
            if ((o.href || "").includes(`--o${oid}`)) {
              o.priceFrom = newPrice;
            }
          }
          const validPrices = (act.offers || []).map((o) => o.priceFrom).filter((v) => typeof v === "number");
          if (validPrices.length > 0) act.lowestPrice = Math.min(...validPrices);
        }
        const r1 = new RegExp(`(--o${oid}(?:["'?][^\\n]*?priceFrom:\\s*))(\\d+(?:\\.\\d+)?)`, "g");
        actSrc = actSrc.replace(r1, `$1${newPrice}`);
        const r2 = new RegExp(`(priceFrom:\\s*)(\\d+(?:\\.\\d+)?)((?:(?!\\bid:\\s*\\d)[\\s\\S]){1,450}?--o${oid}\\b)`, "g");
        actSrc = actSrc.replace(r2, `$1${newPrice}$3`);
        const r3 = new RegExp(`(--o${oid}\\b(?:(?!\\bid:\\s*\\d)[\\s\\S]){1,350}?priceFrom:\\s*)(\\d+(?:\\.\\d+)?)`, "g");
        actSrc = actSrc.replace(r3, `$1${newPrice}`);
      }
      fs.writeFileSync(explorerPath, JSON.stringify(exp, null, 2) + "\n", "utf8");
      fs.writeFileSync(actPath, actSrc, "utf8");
      console.log(`  [AUTO-FIX] Automatically updated ${priceDriftOffers.length} prices in data/activities.ts and activities-explorer.json.`);
    }
  }

  if (newOffers.length > 0) {
    console.log("\n--- NEW ACTIVE YUMPING OFFERS TO ADD TO PORTAL ---");
    for (const n of newOffers) {
      console.log(`  + --o${n.offerId} | ${n.title} | ${n.locality} (${n.provinceSlug}) | ${n.priceFrom}€ | ${n.url}`);
    }
  }

  if (centersCheck.missingActivityRefs.length > 0) {
    console.log("\n--- BROKEN ACTIVITY SLUGS IN data/centers.ts ---");
    for (const c of centersCheck.missingActivityRefs) {
      console.log(`  ! Center [${c.centerSlug}] references missing activity [${c.missingActivitySlug}]`);
    }
  }

  if (staticCheck.exists) {
    console.log(`\nStatic build pages: ${staticCheck.pages}`);
    console.log(`Pages with empty booking box (booking-empty): ${staticCheck.bookingEmpty.length}`);
    console.log(`Broken internal links: ${staticCheck.brokenLinks.length}`);
    console.log(`Untagged Yumping/IATI affiliate links: ${staticCheck.untaggedAffiliateLinks.length}`);
    console.log(`Canonical/Sitemap mismatches: ${staticCheck.canonicalMismatch.length + staticCheck.notInSitemap.length}`);
    console.log(`Duplicate titles/descriptions: ${staticCheck.dupTitles.length + staticCheck.dupDescs.length}`);
    console.log(`CWV <img> missing width/height (CLS risk): ${staticCheck.imgsMissingDimensions.length}`);
    console.log(`JSON-LD Schema price=0 errors: ${staticCheck.schemaPriceZero.length}`);
    console.log(`Noindex pages: ${staticCheck.noindex.length}`);
  } else {
    console.log("\nStatic build directory out/ does not exist yet.");
  }

  const hasIssues =
    prodHomeCode !== 200 ||
    prodSitemapCode !== 200 ||
    unhealthyOffers.length > 0 ||
    newOffers.length > 0 ||
    centersCheck.missingActivityRefs.length > 0 ||
    cwvCheck.oversizedImages.length > 0 ||
    cwvCheck.explorerOversized ||
    (staticCheck.exists &&
      (staticCheck.bookingEmpty.length > 0 ||
        staticCheck.brokenLinks.length > 0 ||
        staticCheck.untaggedAffiliateLinks.length > 0 ||
        staticCheck.canonicalMismatch.length > 0 ||
        staticCheck.notInSitemap.length > 0 ||
        staticCheck.dupTitles.length > 0 ||
        staticCheck.dupDescs.length > 0 ||
        staticCheck.imgsMissingDimensions.length > 0 ||
        staticCheck.schemaPriceZero.length > 0));

  if (hasIssues) {
    process.exitCode = 1;
  }
}

run();
