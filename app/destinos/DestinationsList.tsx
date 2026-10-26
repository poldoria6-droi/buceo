"use client";

import { useDeferredValue, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export type EnrichedDestinationItem = {
  slug: string;
  name: string;
  region: string;
  community: string;
  sites: number;
  animals: string[];
  activitiesCount: number;
  lowestPrice?: number;
};

type Props = {
  items: EnrichedDestinationItem[];
  communities: string[];
};

export function DestinationsList({ items, communities }: Props) {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") ?? "");
  const [selectedCommunity, setSelectedCommunity] = useState(
    searchParams.get("region") ?? "Todas"
  );

  const deferredQuery = useDeferredValue(query);

  const filtered = useMemo(() => {
    const q = deferredQuery.trim().toLowerCase();
    return items.filter((d) => {
      const matchesCommunity =
        selectedCommunity === "Todas" ||
        d.community === selectedCommunity ||
        d.region === selectedCommunity;
      if (!matchesCommunity) return false;
      if (!q) return true;
      return (
        d.name.toLowerCase().includes(q) ||
        d.region.toLowerCase().includes(q) ||
        d.community.toLowerCase().includes(q) ||
        d.animals.some((a) => a.toLowerCase().includes(q))
      );
    });
  }, [items, deferredQuery, selectedCommunity]);

  return (
    <>
      <div className="activities-filter-bar" style={{ marginTop: "1.5rem", marginBottom: "1.75rem" }}>
        <div className="search-box" style={{ marginBottom: "0.85rem" }}>
          <span aria-hidden="true">⌕</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar destino, isla, provincia o fauna (ej. Tenerife, Barcelona, Cabo de Palos, Mero...)"
            aria-label="Buscar destino de buceo"
          />
          {(query || selectedCommunity !== "Todas") && (
            <button
              type="button"
              className="reset-button"
              onClick={() => {
                setQuery("");
                setSelectedCommunity("Todas");
              }}
            >
              Limpiar
            </button>
          )}
        </div>

        <div
          className="activity-intents"
          role="tablist"
          aria-label="Filtrar destinos por comunidad o región"
          style={{ margin: 0, overflowX: "auto", flexWrap: "nowrap", paddingBottom: "4px" }}
        >
          <button
            type="button"
            className={selectedCommunity === "Todas" ? "active" : ""}
            onClick={() => setSelectedCommunity("Todas")}
          >
            Todas ({items.length})
          </button>
          {communities.map((comm) => {
            const count = items.filter((d) => d.community === comm).length;
            return (
              <button
                key={comm}
                type="button"
                className={selectedCommunity === comm ? "active" : ""}
                onClick={() => setSelectedCommunity(comm)}
              >
                {comm} ({count})
              </button>
            );
          })}
        </div>
      </div>

      <p style={{ color: "var(--ink-soft)", fontSize: "0.9rem", marginBottom: "1rem" }}>
        Mostrando <strong>{filtered.length}</strong> de {items.length} destinos de buceo en España
        {selectedCommunity !== "Todas" ? ` en ${selectedCommunity}` : ""}.
      </p>

      <div className="destination-grid" style={{ marginTop: "1rem" }}>
        {filtered.map((destination) => (
          <article className="destination-card" key={destination.slug}>
            <div className="destination-visual">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                <span>◌</span>
                {destination.lowestPrice && (
                  <strong
                    style={{
                      background: "rgba(4, 35, 58, 0.78)",
                      color: "#7bf0f8",
                      padding: "5px 11px",
                      borderRadius: "999px",
                      fontSize: "0.78rem",
                      fontWeight: 800,
                    }}
                  >
                    Desde {destination.lowestPrice} €
                  </strong>
                )}
              </div>
              <small>{destination.region} · {destination.community}</small>
            </div>
            <div className="destination-card-body">
              <span className="eyebrow">
                {destination.sites} puntos · {destination.activitiesCount} actividades
              </span>
              <h2>
                <Link href={`/buceo/${destination.slug}`}>Buceo en {destination.name}</Link>
              </h2>
              <p>
                {destination.slug === "madrid"
                  ? `Piscina climatizada y salidas a costa (${destination.animals.join(", ")}).`
                  : `Fauna habitual: ${destination.animals.join(", ")}.`}
              </p>
              <div className="card-actions">
                <Link
                  href={`/buceo/${destination.slug}`}
                  className="button button-primary button-small"
                >
                  Ver guía y ofertas →
                </Link>
                <Link
                  href={`/actividades/#mapa&region=${encodeURIComponent(destination.community)}`}
                  className="text-link"
                >
                  Mapa →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="notice-card" style={{ textAlign: "center" }}>
          <strong>No hemos encontrado destinos con ese filtro</strong>
          <p style={{ marginTop: "0.5rem" }}>
            Prueba a buscar otra localidad o provincia o pulsa en «Todas» para ver los {items.length} destinos.
          </p>
        </div>
      )}
    </>
  );
}
