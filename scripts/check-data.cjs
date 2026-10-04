const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const ts = require('typescript');

const root = path.resolve(__dirname, '..');
const cache = new Map();

function load(file) {
  file = path.resolve(file);
  if (cache.has(file)) return cache.get(file).exports;

  const module = { exports: {} };
  cache.set(file, module);

  const compiled = ts.transpileModule(fs.readFileSync(file, 'utf8'), {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
    },
  }).outputText;

  const requireLocal = request => {
    const clean = request.replace(/^@\//, '');
    const base = request.startsWith('@/') ? root : path.dirname(file);
    return load(path.resolve(base, clean) + '.ts');
  };

  vm.runInNewContext(
    compiled,
    {
      module,
      exports: module.exports,
      require: requireLocal,
      URL,
      Intl,
      Date,
      process: { env: {
        NEXT_PUBLIC_YUMPING_PARTNER_ID: 'test-partner',
        NEXT_PUBLIC_CIVITATIS_AID: 'test-aid',
      }},
    },
    { filename: file }
  );

  return module.exports;
}

const { activities } = load(path.join(root, 'data/activities.ts'));
const { getBookingOffers, buildAffiliateUrl } = load(path.join(root, 'lib/affiliate.ts'));

assert.ok(Array.isArray(activities), 'El catálogo debe exportar un array de actividades.');
assert.equal(activities.length, 391, 'El recuento de actividades ha cambiado inesperadamente; revisar antes de publicar.');

for (const activity of activities) {
  assert.ok(activity && Number.isInteger(activity.id), 'Todas las actividades deben tener un ID numérico.');
  assert.ok(activity.slug, 'Todas las actividades deben tener slug.');
  assert.ok(activity.title, 'Todas las actividades deben tener título.');
  assert.ok(activity.destination, 'Todas las actividades deben tener destino.');
  assert.ok(activity.provider, 'Todas las actividades deben tener proveedor.');
  assert.ok(activity.sourceUrl, 'Todas las actividades deben tener sourceUrl.');

  const offers = getBookingOffers(activity);
  for (const offer of offers) {
    assert.ok(/^https?:$/i.test(new URL(offer.url).protocol), 'Oferta con URL inválida.');
    if (offer.provider.trim().toLowerCase() === 'yumping') {
      assert.ok(/--o\d+/i.test(offer.url), 'Oferta Yumping sin identificador de oferta en la URL.');
      const affiliate = new URL(buildAffiliateUrl(offer));
      assert.equal(affiliate.searchParams.get('id_partner'), 'test-partner', 'Yumping no conserva el partner ID.');
      assert.equal(affiliate.searchParams.get('placement'), 'button-cta', 'Yumping no conserva el placement esperado.');
      assert.equal(affiliate.pathname, new URL(offer.url).pathname, 'La transformación afiliada no debe cambiar la ruta de la oferta.');
    }
  }
}

assert.equal(new Set(activities.map(a => a.id)).size, activities.length, 'IDs duplicados.');
assert.equal(new Set(activities.map(a => a.slug)).size, activities.length, 'Slugs duplicados.');

const yumpingOfferIds = new Set();
let civitatisActivities = 0;
let yumpingActivities = 0;
for (const activity of activities) {
  const provider = activity.provider.trim().toLowerCase();
  if (provider === 'yumping') {
    yumpingActivities += 1;
    const match = activity.providerUrl.match(/--o(\d+)/i);
    if (match) yumpingOfferIds.add(match[1]);
  }
  if (provider === 'civitatis') civitatisActivities += 1;
}

assert.equal(yumpingOfferIds.size, 384, 'El número de ofertas Yumping únicas ha cambiado inesperadamente.');
assert.equal(civitatisActivities, 7, 'El número de actividades Civitatis ha cambiado inesperadamente.');

console.log(`OK: ${activities.length} actividades, ${yumpingOfferIds.size} ofertas Yumping únicas y ${civitatisActivities} actividades Civitatis. Sin IDs/slugs duplicados y enlaces de reserva válidos.`);
