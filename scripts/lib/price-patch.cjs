/**
 * Parcheador único de precios del catálogo.
 *
 * El catálogo vive repartido en data/activities.ts y los lotes data/yumping-*.ts
 * (unos con claves JS `priceFrom:` y otro con claves JSON `"priceFrom":`).
 * El JSON del buscador (public/data/activities-explorer.json) NO es fuente de verdad:
 * lo regenera `next build` desde estos ficheros.
 *
 * Reglas:
 *  - cada actividad tiene exactamente una oferta de Yumping, así que el precio de la
 *    oferta y el precio a nivel de actividad (si existe) deben coincidir siempre;
 *  - se conservan los saltos de línea originales de cada fichero (CRLF/LF).
 */
const fs = require("fs");
const path = require("path");
const { ROOT, loadActivities } = require("./catalog.cjs");

const DATA_DIR = path.join(ROOT, "data");

const OFFER_PATTERNS = [
  { re: /(id:\s*"yumping-o(\d+)"[^{}]*?priceFrom:\s*)(\d+(?:\.\d+)?)/g, act: /(\bpriceFrom:\s*)(\d+(?:\.\d+)?)/ },
  { re: /("id":\s*"yumping-o(\d+)"[^{}]*?"priceFrom":\s*)(\d+(?:\.\d+)?)/g, act: /("priceFrom":\s*)(\d+(?:\.\d+)?)/ },
];
const NEXT_ACTIVITY = /\{\s*"?id"?\s*:\s*\d+\s*,\s*"?siteSlugs"?/g;

function targetFiles() {
  return fs
    .readdirSync(DATA_DIR)
    .filter((f) => /^(activities|yumping-.*)\.ts$/.test(f))
    .map((f) => path.join(DATA_DIR, f));
}

function patchSource(src, prices) {
  const edits = [];
  for (const { re, act } of OFFER_PATTERNS) {
    re.lastIndex = 0;
    let m;
    while ((m = re.exec(src))) {
      const id = m[2];
      if (!Object.prototype.hasOwnProperty.call(prices, id)) continue;
      const next = String(prices[id]);
      const priceStart = m.index + m[1].length;
      const priceEnd = priceStart + m[3].length;
      if (m[3] !== next) edits.push({ start: priceStart, end: priceEnd, text: next, id, kind: "offer", old: m[3] });

      // Precio a nivel de actividad: primer `priceFrom` tras cerrar el array offers y antes de la siguiente actividad.
      const arrEnd = src.indexOf("]", priceEnd);
      if (arrEnd < 0) continue;
      NEXT_ACTIVITY.lastIndex = arrEnd;
      const nx = NEXT_ACTIVITY.exec(src);
      const limit = Math.min(nx ? nx.index : src.length, arrEnd + 2500);
      const window = src.slice(arrEnd, limit);
      const am = act.exec(window);
      if (am) {
        const aStart = arrEnd + am.index + am[1].length;
        const aEnd = aStart + am[2].length;
        if (am[2] !== next) edits.push({ start: aStart, end: aEnd, text: next, id, kind: "activity", old: am[2] });
      }
    }
  }
  edits.sort((a, b) => b.start - a.start);
  let out = src;
  for (const e of edits) out = out.slice(0, e.start) + e.text + out.slice(e.end);
  return { out, edits };
}

/** @param {Record<string, number>} prices  { offerId: precioNuevo } */
function applyPrices(prices) {
  const report = { files: [], offerEdits: 0, activityEdits: 0 };
  for (const file of targetFiles()) {
    const src = fs.readFileSync(file, "utf8");
    const { out, edits } = patchSource(src, prices);
    if (edits.length) {
      fs.writeFileSync(file, out, "utf8");
      report.files.push(path.basename(file));
      report.offerEdits += edits.filter((e) => e.kind === "offer").length;
      report.activityEdits += edits.filter((e) => e.kind === "activity").length;
    }
  }
  return report;
}

function clearDataCache() {
  for (const k of Object.keys(require.cache)) {
    if (k.startsWith(DATA_DIR)) delete require.cache[k];
  }
}

/** Comprueba sobre el catálogo real que oferta y actividad tienen el precio esperado. */
function verifyPrices(prices) {
  clearDataCache();
  const acts = loadActivities();
  const problems = [];
  const seen = new Set();
  for (const a of acts) {
    for (const o of a.offers || []) {
      const id = (o.url.match(/--o(\d+)/) || [])[1];
      if (!id || !Object.prototype.hasOwnProperty.call(prices, id)) continue;
      seen.add(id);
      if (o.priceFrom !== prices[id]) problems.push(`oferta o${id} (actividad ${a.id}): ${o.priceFrom} != ${prices[id]}`);
      if (typeof a.priceFrom === "number" && a.priceFrom !== prices[id]) {
        problems.push(`actividad ${a.id} (o${id}): priceFrom ${a.priceFrom} != ${prices[id]}`);
      }
    }
  }
  return { problems, checked: seen.size };
}

module.exports = { applyPrices, verifyPrices, patchSource, targetFiles };
