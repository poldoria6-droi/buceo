"use client";

import { useEffect, useState, useDeferredValue } from "react";
import Link from "next/link";
import type { SlimCenter } from "@/lib/slim";

const normalize = (value: string) =>
  value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

export function CentersList({ items }: { items: SlimCenter[] }) {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);

  // Búsqueda inicial desde ?q=... (solo cliente, para que la página se pre-renderice completa).
  useEffect(() => {
    const initial = new URLSearchParams(window.location.search).get("q");
    if (initial) setQuery(initial);
  }, []);

  const q = normalize(deferredQuery.trim());
  const matches = q
    ? items.filter((center) => normalize(`${center.name} ${center.location} ${center.region}`).includes(q))
    : items;

  return (
    <>
      <form className="center-search" action="/centros/" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="center-query">Centro, localidad o región</label>
        <input
          id="center-query"
          name="q"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ej. L'Estartit, Cabo de Palos, Lanzarote, Tarifa..."
        />
        {query && (
          <button type="button" className="reset-button" onClick={() => setQuery("")}>
            Limpiar búsqueda
          </button>
        )}
      </form>
      <p>
        <strong>{matches.length}</strong> centros y escuelas de buceo en el directorio.
      </p>
      <div className="guide-grid">
        {matches.map((center) => (
          <article className="guide-card" key={center.id}>
            <span className="eyebrow">
              {center.location} · {center.region}
            </span>
            <h2>{center.name}</h2>
            <p>
              {center.count} {center.count === 1 ? "actividad vinculada" : "actividades vinculadas"}
            </p>
            <Link className="button button-primary" href={`/centros/${center.slug}`}>
              Ver centro y actividades →
            </Link>
          </article>
        ))}
      </div>
      {!matches.length && (
        <p>
          No hay escuelas que coincidan con «{query}». Puedes{" "}
          <Link href="/actividades" className="text-link">
            explorar todas las actividades
          </Link>
          .
        </p>
      )}
    </>
  );
}
