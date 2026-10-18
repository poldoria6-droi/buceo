"use client";

import { useState, useDeferredValue } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { centers } from "@/data/centers";
import { getCenterActivities } from "@/lib/centers";

export function CentersList() {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");
  const deferredQuery = useDeferredValue(query);

  const normalize = (value: string) =>
    value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  const q = deferredQuery.trim();
  const matches = centers.filter((center) =>
    normalize(`${center.name} ${center.location} ${center.region}`).includes(normalize(q))
  );

  return (
    <>
      <form className="center-search" action="/centros" onSubmit={(e) => e.preventDefault()}>
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
        {matches.map((center) => {
          const count = getCenterActivities(center.id).length;
          return (
            <article className="guide-card" key={center.id}>
              <span className="eyebrow">
                {center.location} · {center.region}
              </span>
              <h2>{center.name}</h2>
              <p>
                {count} {count === 1 ? "actividad vinculada" : "actividades vinculadas"}
              </p>
              <Link className="button button-primary" href={`/centros/${center.slug}`}>
                Ver centro y actividades →
              </Link>
            </article>
          );
        })}
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
