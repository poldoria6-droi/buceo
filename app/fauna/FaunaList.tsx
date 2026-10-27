"use client";

import { useState, useMemo, useDeferredValue } from "react";
import { SpeciesCard, type SpeciesCardData } from "@/components/SpeciesCard";

export function FaunaList({ species }: { species: SpeciesCardData[] }) {
  const [category, setCategory] = useState("");
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);

  const categories = useMemo(
    () => Array.from(new Set(species.map((s) => s.category))).sort((a, b) => a.localeCompare(b, "es")),
    [species]
  );

  const normalize = (value: string) =>
    value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

  const filtered = useMemo(() => {
    const q = normalize(deferredQuery.trim());
    return species.filter((s) => {
      if (category && s.category !== category) return false;
      if (q && !normalize(`${s.name} ${s.scientificName} ${s.category} ${s.description}`).includes(q)) {
        return false;
      }
      return true;
    });
  }, [species, category, deferredQuery]);

  const clear = () => {
    setCategory("");
    setQuery("");
  };

  return (
    <div>
      <div className="center-search">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar especie por nombre común, científico o hábitat..."
          aria-label="Buscar especie marina"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          aria-label="Filtrar por categoría"
        >
          <option value="">Todas las categorías ({species.length})</option>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        {(category || query) && (
          <button type="button" className="reset-button" onClick={clear}>
            Limpiar filtros
          </button>
        )}
      </div>

      <div className="activity-intents" style={{ margin: "0 0 1.5rem" }}>
        <button
          type="button"
          className={category === "" ? "active" : ""}
          onClick={() => setCategory("")}
        >
          Todas ({species.length})
        </button>
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            className={category === c ? "active" : ""}
            onClick={() => setCategory(category === c ? "" : c)}
          >
            {c}
          </button>
        ))}
      </div>

      <p>
        <strong>{filtered.length}</strong> {filtered.length === 1 ? "especie" : "especies"} en el catálogo.
      </p>
      <div className="guide-grid">
        {filtered.map((item) => (
          <SpeciesCard key={item.slug} item={item} />
        ))}
      </div>
      {!filtered.length && (
        <p>No hay especies que coincidan con tu búsqueda. Prueba con otro término o categoría.</p>
      )}
    </div>
  );
}
