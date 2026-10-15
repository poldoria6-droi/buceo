"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { species } from "@/data/species";
import { SpeciesCard } from "@/components/SpeciesCard";

export function FaunaList() {
  const [category, setCategory] = useState("");
  const [region, setRegion] = useState("");
  const [depth, setDepth] = useState("");

  const categories = useMemo(() => Array.from(new Set(species.map((s) => s.category))).sort(), []);
  const regions = useMemo(() => Array.from(new Set(species.flatMap((s) => s.occurrences.map((o) => o.region)))).sort(), []);

  const filtered = useMemo(() => {
    return species.filter((s) => {
      if (category && s.category !== category) return false;
      if (region && !s.occurrences.some((o) => o.region === region)) return false;
      if (depth === "known" && !s.depth) return false;
      if (depth === "unknown" && s.depth) return false;
      return true;
    });
  }, [category, region, depth]);

  const clear = () => {
    setCategory("");
    setRegion("");
    setDepth("");
  };

  return (
    <div>
      <div className="center-search">
        <label>
          Categoría
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">Todas</option>
            {categories.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </label>
        <label>
          Zona documentada
          <select value={region} onChange={(e) => setRegion(e.target.value)}>
            <option value="">Todas</option>
            {regions.map((r) => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>
        </label>
        <label>
          Profundidad
          <select value={depth} onChange={(e) => setDepth(e.target.value)}>
            <option value="">Todos los registros</option>
            <option value="known">Con rango biológico documentado</option>
            <option value="unknown">Sin rango publicado en Atlas</option>
          </select>
        </label>
        {(category || region || depth) && (
          <button type="button" className="reset-button" onClick={clear}>
            Limpiar filtros
          </button>
        )}
      </div>

      <p>{filtered.length} especies · Primera selección contrastada; catálogo en ampliación.</p>
      <div className="guide-grid">
        {filtered.map((item) => (
          <SpeciesCard key={item.slug} item={item} />
        ))}
      </div>
      {!filtered.length && <p>No hay fichas con esta combinación de filtros.</p>}
    </div>
  );
}
