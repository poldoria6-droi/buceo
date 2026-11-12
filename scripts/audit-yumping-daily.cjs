const fs = require("fs");
const path = require("path");
const { spawn } = require("child_process");

const rootDir = path.resolve(__dirname, "..");
const outDir = path.join(rootDir, "out");
const explorerPath = path.join(rootDir, "public", "data", "activities-explorer.json");

const exp = JSON.parse(fs.readFileSync(explorerPath, "utf8"));

// Group activities by clean Yumping offer URL so we only fetch each unique offer once
const offerMap = new Map();
for (const a of exp.activities) {
  for (const o of a.offers || []) {
    const u = new URL(o.href);
    u.searchParams.delete("id_partner");
    u.searchParams.delete("placement");
    const cleanUrl = u.toString();
    const offerId = (cleanUrl.match(/--o(\d+)/) || [])[1] || "";
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
    });
  }
}

const uniqueOffers = [...offerMap.values()];

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

  console.log("=== DAILY YUMPING & SITE INTEGRITY REPORT ===");
  console.log(`Total activities: ${exp.activities.length}`);
  console.log(`Unique Yumping offers checked: ${results.length}`);
  console.log(`Healthy Yumping offers: ${results.length - unhealthyOffers.length}`);
  console.log(`Unhealthy / fallen Yumping offers: ${unhealthyOffers.length}`);

  if (unhealthyOffers.length > 0) {
    console.log("\n--- FALLEN OFFERS NEEDING REPLACEMENT ---");
    for (const u of unhealthyOffers) {
      console.log(
        `Offer --o${u.offerId} (${u.url}) -> HTTP ${u.code}, idChanged=${u.offerIdChanged}, bookable=${u.hasAddOferta}, withdrawn=${u.hasWithdrawnText}`
      );
      for (const act of u.activities) {
        console.log(`  - Activity ID ${act.id} [${act.slug}] (zone: ${act.zone}, region: ${act.region}, type: ${act.type})`);
      }
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
    (staticCheck.exists && (staticCheck.bookingEmpty.length > 0 || staticCheck.brokenLinks.length > 0))
  ) {
    process.exitCode = 1;
  }
}

run();
