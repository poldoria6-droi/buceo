const fs = require("fs");
const path = require("path");
const Module = require("module");

const ROOT = path.resolve(__dirname, "..", "..");

function installTsLoader() {
  if (require.extensions[".ts"]) return;
  const ts = require(path.join(ROOT, "node_modules", "typescript"));
  require.extensions[".ts"] = (module, filename) => {
    const out = ts.transpileModule(fs.readFileSync(filename, "utf8"), {
      compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2019, esModuleInterop: true },
    }).outputText;
    module._compile(out, filename);
  };
}

/** Carga el catálogo real (data/activities.ts y sus lotes) tal y como lo ve Next.js. */
function loadActivities() {
  installTsLoader();
  const file = path.join(ROOT, "data", "activities.ts");
  delete require.cache[file];
  return require(file).activities;
}

module.exports = { ROOT, installTsLoader, loadActivities };
