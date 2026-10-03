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
  const module = { exports: {} }; cache.set(file, module);
  const compiled = ts.transpileModule(fs.readFileSync(file, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText;
  const requireLocal = request => load(path.resolve(request.startsWith('@/') ? root : path.dirname(file), request.replace(/^@\//, '')) + '.ts');
  vm.runInNewContext(compiled, { module, exports: module.exports, require: requireLocal, URL, Intl, Date, process: { env: { NEXT_PUBLIC_YUMPING_PARTNER_ID: 'test-partner', NEXT_PUBLIC_CIVITATIS_AID: 'test-aid' } } }, { filename: file });
  return module.exports;
}
const { activities } = load(path.join(root, 'data/activities.ts'));
const { centers, centerActivityLinks } = load(path.join(root, 'data/centers.ts'));
const { getActivityCenter, getCenterActivities } = load(path.join(root, 'lib/centers.ts'));
const { getBookingOffers, buildAffiliateUrl } = load(path.join(root, 'lib/affiliate.ts'));
for (const activity of activities) assert.ok(activity?.slug, 'El catálogo no puede contener huecos');
assert.equal(new Set(activities.map(a => a.slug)).size, activities.length, 'Slugs duplicados');
assert.equal(new Set(activities.map(a => a.id)).size, activities.length, 'IDs duplicados');
assert.equal(new Set(centerActivityLinks.map(l => l.activitySlug)).size, centerActivityLinks.length, 'Una actividad no puede atribuirse a dos organizadores');
for (const link of centerActivityLinks) {
  const activity = activities.find(a => a.slug === link.activitySlug);
  assert.ok(activity, 'Relación sin actividad');
  assert.ok(centers.some(c => c.id === link.centerId), 'Relación sin centro');
  assert.ok(/^https:\/\//.test(link.sourceUrl) && link.checkedAt, 'Relación sin fuente');
  assert.equal(getActivityCenter(activity)?.id, link.centerId);
  assert.ok(getCenterActivities(link.centerId).some(a => a.slug === activity.slug));
}
assert.equal(getActivityCenter({ ...activities[0], slug: 'sin-identidad-confirmada', destination: 'Estepona' }), undefined);
const sample = { ...activities[0], bookingStatus: 'Disponible', offers: [
  { id: 'one', provider: 'Yumping', url: 'https://www.yumping.com/ofertas/buceo/prueba--o1' },
  { id: 'two', provider: 'Civitatis', url: 'https://www.civitatis.com/es/prueba/actividad/' },
  { id: 'three', provider: 'Otro', url: 'javascript:alert(1)' },
  { id: 'four', provider: 'Otro', url: 'https://example.com/offer', status: 'paused' }
] };
const offers = getBookingOffers(sample);
assert.equal(offers.length, 2);
assert.equal(new URL(buildAffiliateUrl(offers[0])).searchParams.get('id_partner'), 'test-partner');
assert.equal(new URL(buildAffiliateUrl(offers[1])).searchParams.get('aid'), 'test-aid');
assert.equal(new URL(buildAffiliateUrl(offers[0])).pathname, new URL(offers[0].url).pathname);
assert.equal(getBookingOffers({ ...sample, bookingStatus: 'Próximamente' }).length, 0);
console.log(`OK: ${activities.length} actividades, ${centers.length} centros, ${centerActivityLinks.length} relaciones verificadas. ${activities.length - centerActivityLinks.length} actividades pendientes de asignar a un centro.`);
