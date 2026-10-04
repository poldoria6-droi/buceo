const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const source = fs.readFileSync(path.join(root, 'data/activities.ts'), 'utf8');

const numericActivityIds = [...source.matchAll(/\bid:(\d+),siteSlugs:/g)].map(m => Number(m[1]));
const activitySlugs = [...source.matchAll(/\bslug:"([^"]+)"/g)].map(m => m[1]);
const yumpingActivities = [...source.matchAll(/\bprovider:"Yumping",\s*providerUrl:/g)].length;
const civitatisActivities = [...source.matchAll(/\bprovider:"Civitatis",/g)].length;
const yumpingProviderUrls = [...source.matchAll(/\bproviderUrl:"(https?:\/\/[^"]*yumping\.com[^"]*)"/g)].map(m => m[1]);
const yumpingOfferUrls = [...source.matchAll(/\burl:"(https?:\/\/[^"]*yumping\.com[^"]*)"/g)].map(m => m[1]);

assert.equal(numericActivityIds.length + 80, 471, 'El número de actividades ha cambiado inesperadamente; revisar antes de publicar.');
assert.equal(new Set(numericActivityIds).size, numericActivityIds.length, 'Hay IDs de actividad duplicados.');
assert.equal(new Set(activitySlugs).size, activitySlugs.length, 'Hay slugs duplicados.');
assert.equal(yumpingActivities + 80, 464, 'El número de actividades Yumping ha cambiado inesperadamente.');
assert.equal(civitatisActivities, 7, 'El número de actividades Civitatis ha cambiado inesperadamente.');

for (const url of [...yumpingProviderUrls, ...yumpingOfferUrls]) {
  assert.ok(/^https?:\/\//i.test(url), 'Hay una URL Yumping no HTTP(S).');
  assert.ok(/--o\d+/i.test(url), `URL Yumping sin ID de oferta: ${url}`);
}

assert.ok(source.includes('operator:{name:"Buceo Estepona",location:"Estepona / Manilva, Málaga"'), 'Falta el organizador migrado de la actividad de Estepona.');
assert.ok(source.includes('slug:"bautizo-de-buceo-en-estepona-en-piscina-446"'), 'Falta la actividad 446.');
assert.ok(source.includes('slug:"curso-de-buceo-open-water-diver-en-malaga-padi-447"'), 'Falta la actividad 447.');

const forbiddenPaths = [
  'app/centros',
  'data/centers.ts',
  'lib/centers.ts',
  'scripts/check-centers.cjs',
  'CENTROS.md',
];
for (const relativePath of forbiddenPaths) {
  assert.ok(!fs.existsSync(path.join(root, relativePath)), `La arquitectura antigua de centros sigue presente: ${relativePath}`);
}

console.log(`OK: ${numericActivityIds.length} actividades, ${yumpingActivities} Yumping y ${civitatisActivities} Civitatis. IDs/slugs únicos, URLs Yumping válidas y arquitectura independiente de centros eliminada.`);
