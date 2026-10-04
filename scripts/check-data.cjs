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

const yumpingFiles = [
  'data/yumping-bulk-20261001.ts',
  'data/yumping-batch-5.ts',
  'data/yumping-batch-4.ts',
  'data/yumping-batch-3.ts',
  'data/yumping-batch-2.ts',
];
const importedYumpingIds = yumpingFiles.flatMap(relativePath => {
  const text = fs.readFileSync(path.join(root, relativePath), 'utf8');
  return [...text.matchAll(/\\bid:(\\d+),siteSlugs:/g)].map(m => Number(m[1]));
});
const totalActivityIds = numericActivityIds.length + importedYumpingIds.length;
assert.equal(totalActivityIds, 471, 'El número de actividades ha cambiado inesperadamente; revisar antes de publicar.');
const allActivityIds = [...numericActivityIds, ...importedYumpingIds];
assert.equal(new Set(allActivityIds).size, allActivityIds.length, 'Hay IDs de actividad duplicados.');
assert.equal(new Set(activitySlugs).size, activitySlugs.length, 'Hay slugs duplicados.');
const importedYumpingCount = importedYumpingIds.length;
assert.equal(yumpingActivities + importedYumpingCount, 464, 'El número de actividades Yumping ha cambiado inesperadamente.');
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
