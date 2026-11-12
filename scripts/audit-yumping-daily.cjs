const fs = require("fs");
const path = require("path");
const { spawn } = require("child_process");

const rootDir = path.resolve(__dirname, "..");
const outDir = path.join(rootDir, "out");
const explorerPath = path.join(rootDir, "public", "data", "activities-explorer.json");

const exp = JSON.parse(fs.readFileSync(explorerPath, "utf8"));

// Group activities by clean Yumping offer URL so we only fetch each unique offer once
const offerMap = new Map();
const knownOfferIds = new Set();

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
    const proc = spawn("curl.exe", args);
    const chunks = [];
    proc.stdout.on("data", (d) => chunks.push(d));
    proc.on("close", () => resolve(Buffer.concat(chunks).toString("utf8")));
    proc.on("error", () => resolve(""));
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

  // Verify each candidate is genuinely active and bookable (not a retired stub)
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
    const proc = spawn("curl.exe", args);
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

      resolve({
        ...item,
        code,
        finalUrl,
        redirects,
        finalOfferId,
        offerIdChanged,
        hasAddOferta,
        hasWithdrawnText,
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
        isHealthy: false,
      });
    });
  });
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
  const routes = new Set();
  for (const f of files) {
    const rel = path.relative(outDir, f).replace(/\\/g, "/");
    routes.add(rel === "index.html" ? "/" : "/" + rel.replace(/index\.html$/, ""));
  }
  let pages = 0;
  const bookingEmpty = [];
  const brokenLinks = [];
  const noindex = [];

  for (const f of files) {
    const rel = path.relative(outDir, f).replace(/\\/g, "/");
    if (/^(404|_not-found)/.test(rel)) continue;
    pages++;
    const html = fs.readFileSync(f, "utf8");
    if (html.includes("booking-empty")) bookingEmpty.push(rel);
    if (html.includes('content="noindex')) noindex.push(rel);
    for (const m of html.matchAll(/href="(\/[^"#?]*)"/g)) {
      const h = m[1];
      if (/^\/(_next|images|favicon|logo|apple)/.test(h)) continue;
      if (!routes.has(h)) brokenLinks.push(`${h} in ${rel}`);
    }
  }
  return {
    exists: true,
    pages,
    bookingEmpty,
    brokenLinks: [...new Set(brokenLinks)],
    noindex,
  };
}

async function run() {
  console.log(`Checking ${uniqueOffers.length} unique Yumping offers across ${exp.activities.length} activities...`);
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
  const staticCheck = checkStaticOut();

  console.log("Scanning Yumping Spain catalog for newly published diving offers...");
  const newOffers = await discoverNewYumpingOffers();

  console.log("=== DAILY YUMPING & SITE INTEGRITY REPORT ===");
  console.log(`Total activities: ${exp.activities.length}`);
  console.log(`Unique Yumping offers checked: ${results.length}`);
  console.log(`Healthy Yumping offers: ${results.length - unhealthyOffers.length}`);
  console.log(`Unhealthy / fallen Yumping offers: ${unhealthyOffers.length}`);
  console.log(`Brand-new active Yumping offers discovered: ${newOffers.length}`);

  if (unhealthyOffers.length > 0) {
    console.log("\n--- FALLEN OFFERS NEEDING ACTION ---");
    for (const u of unhealthyOffers) {
      console.log(
        `Offer --o${u.offerId} (${u.url}) -> HTTP ${u.code}, idChanged=${u.offerIdChanged}, bookable=${u.hasAddOferta}, withdrawn=${u.hasWithdrawnText}`
      );
      for (const act of u.activities) {
        const actionType = act.isGenericHubActivity
          ? "ACTION: REPLACE_OFFER (Generic destination page ID <= 218: keep URL, update offer & priceFrom to active offer in same zone/type)"
          : "ACTION: REMOVE_AND_301 (Specific Yumping offer page ID >= 219: remove retired activity + add 301 redirect in public/_redirects to equivalent active activity or /buceo/{zone}/)";
        console.log(`  - Activity ID ${act.id} [${act.slug}] (zone: ${act.zone}, type: ${act.type}) -> ${actionType}`);
      }
    }
  }

  if (newOffers.length > 0) {
    console.log("\n--- NEW ACTIVE YUMPING OFFERS TO ADD TO PORTAL ---");
    for (const n of newOffers) {
      console.log(`  + --o${n.offerId} | ${n.title} | ${n.locality} (${n.provinceSlug}) | ${n.priceFrom}€ | ${n.url}`);
    }
  }

  if (staticCheck.exists) {
    console.log(`\nStatic build pages: ${staticCheck.pages}`);
    console.log(`Pages with empty booking box (booking-empty): ${staticCheck.bookingEmpty.length}`);
    console.log(`Broken internal links: ${staticCheck.brokenLinks.length}`);
    console.log(`Noindex pages: ${staticCheck.noindex.length}`);
  } else {
    console.log("\nStatic build directory out/ does not exist yet.");
  }

  if (
    unhealthyOffers.length > 0 ||
    newOffers.length > 0 ||
    (staticCheck.exists && (staticCheck.bookingEmpty.length > 0 || staticCheck.brokenLinks.length > 0))
  ) {
    process.exitCode = 1;
  }
}

run();
