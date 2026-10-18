"use client";

import { species } from "@/data/species";
import dynamic from "next/dynamic";
import Link from "next/link";
import { buildAffiliateUrl, formatOfferPrice, getBookingOffers, getLowestPricedOffer } from "@/lib/affiliate";
import { useMemo, useState, useTransition } from "react";
import { useSearchParams } from "next/navigation";
import type { DiveSite } from "@/data/dive-sites";
import { communityFor, destinationsFor } from "@/lib/activity-filters";
import type { Activity } from "@/data/types";

const ActivityMap = dynamic(() => import("@/app/actividades/ActivityMap"), { ssr: false });
const SpeciesMap = dynamic(() => import("@/app/actividades/SpeciesMap"), { ssr: false });

const PAGE_SIZE = 24;

type Props = {
  activities: Activity[];
  centerByActivity?: Record<string, { name: string; slug: string }>;
  sites: DiveSite[];
  regions: string[];
  types: string[];
  initial?: { type?: string; region?: string; destination?: string; level?: string; site?: string; species?: string };
};

export function ActivitiesExplorer({ activities, sites, regions, types, centerByActivity = {}, initial = {} }: Props) {
  const searchParams = useSearchParams();
  const initType = searchParams.get("type") || initial.type || "Todos";
  const initRegion = searchParams.get("region") || initial.region || "Todos";
  const initDestination = searchParams.get("destination") || initial.destination || "Todos";
  const initSite = searchParams.get("site") || initial.site || "Todos";
  const initLevel = searchParams.get("level") || initial.level || "Todos";
  const initSpecies = searchParams.get("species") || initial.species;

  const speciesWithPoints = useMemo(() => species.filter((s) => s.occurrences.length > 0), []);
  const [mapMode, setMapMode] = useState(initSpecies ? "species" : "experiences");
  const [speciesSlug, setSpeciesSlug] = useState(initSpecies || speciesWithPoints[0]?.slug || species[0]?.slug || "");
  const selectedSpecies = species.find((s) => s.slug === speciesSlug);

  const [type, setType] = useState(initType);
  const [region, setRegion] = useState(communityFor(initRegion));
  const [destination, setDestination] = useState(() =>
    destinationsFor(activities, initRegion).includes(initDestination) ? initDestination : "Todos"
  );
  const [siteSlug, setSiteSlug] = useState(initSite);
  const [level, setLevel] = useState(initLevel);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [, startTransition] = useTransition();

  const destinations = useMemo(() => destinationsFor(activities, region), [activities, region]);
  const communities = useMemo(
    () => Array.from(new Set(regions.map(communityFor))).sort((a, b) => a.localeCompare(b, "es")),
    [regions]
  );
  const visibleTypes = types.filter((t) => t !== "Fauna");

  const filtered = useMemo(
    () =>
      activities.filter(
        (a) =>
          (type === "Todos" || a.type === type) &&
          (region === "Todos" || communityFor(a.region) === region) &&
          (destination === "Todos" || a.destination === destination) &&
          (siteSlug === "Todos" || a.siteSlugs.includes(siteSlug)) &&
          (level === "Todos" || a.level === level)
      ),
    [activities, type, region, destination, siteSlug, level]
  );

  const visibleItems = useMemo(() => filtered.slice(0, visibleCount), [filtered, visibleCount]);
  const filteredIds = useMemo(() => new Set(filtered.flatMap((a) => a.siteSlugs)), [filtered]);
  const matchingSites = useMemo(() => sites.filter((site) => filteredIds.has(site.slug)), [sites, filteredIds]);

  const updateFilter = (fn: () => void) => {
    startTransition(() => {
      fn();
      setVisibleCount(PAGE_SIZE);
    });
  };

  const clear = () => {
    updateFilter(() => {
      setType("Todos");
      setRegion("Todos");
      setDestination("Todos");
      setSiteSlug("Todos");
      setLevel("Todos");
    });
  };

  return (
    <div className="activities-explorer">
      <div className="activities-filter-bar">
        <div className="activities-filter-title">
          <div>
            <span className="eyebrow">FILTRAR EXPERIENCIAS</span>
            <strong>¿Qué quieres hacer y dónde?</strong>
          </div>
          <button type="button" className="reset-button" onClick={clear}>
            Restablecer filtros
          </button>
        </div>
        <div className="activities-filter-grid">
          <label>
            <span>Actividad</span>
            <select value={type} onChange={(e) => updateFilter(() => setType(e.target.value))}>
              <option value="Todos">Todas las modalidades</option>
              {visibleTypes.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </label>
          <label>
            <span>Comunidad autónoma</span>
            <select
              value={region}
              onChange={(e) =>
                updateFilter(() => {
                  setRegion(e.target.value);
                  setDestination("Todos");
                  setSiteSlug("Todos");
                })
              }
            >
              <option value="Todos">Toda España</option>
              {communities.map((r) => (
                <option key={r}>{r}</option>
              ))}
            </select>
          </label>
          <label>
            <span>Localidad o zona</span>
            <select
              value={destination}
              onChange={(e) =>
                updateFilter(() => {
                  setDestination(e.target.value);
                  setSiteSlug("Todos");
                })
              }
            >
              <option value="Todos">Cualquier destino</option>
              {destinations.map((d) => (
                <option key={d}>{d}</option>
              ))}
            </select>
          </label>
          <label>
            <span>Nivel</span>
            <select value={level} onChange={(e) => updateFilter(() => setLevel(e.target.value))}>
              <option value="Todos">Todos los niveles</option>
              <option>Inicial</option>
              <option>Intermedio</option>
              <option>Avanzado</option>
            </select>
          </label>
        </div>
        {siteSlug !== "Todos" && (
          <p>
            Punto seleccionado: <strong>{sites.find((s) => s.slug === siteSlug)?.name || siteSlug}</strong>{" "}
            <button type="button" className="reset-button" onClick={() => updateFilter(() => setSiteSlug("Todos"))}>
              Ver todos los puntos
            </button>
          </p>
        )}
        <div className="activity-intents">
          {visibleTypes.map((t) => (
            <button
              key={t}
              type="button"
              className={type === t ? "active" : ""}
              onClick={() => updateFilter(() => setType(type === t ? "Todos" : t))}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="activity-results-layout">
        <aside className="activity-results-panel">
          <div className="activity-results-heading">
            <div>
              <span className="eyebrow">RESULTADOS</span>
              <h2>{filtered.length} experiencias</h2>
            </div>
            <span>{matchingSites.length} puntos en mapa</span>
          </div>
          <p className="activity-map-hint">
            Selecciona una experiencia para ver qué incluye o continúa al proveedor para consultar disponibilidad en tus fechas.
          </p>
          <div className="activity-results-scroll">
            {visibleItems.map((a) => {
              const site = sites.find((s) => a.siteSlugs.includes(s.slug));
              const center = centerByActivity[a.slug];
              const offers = getBookingOffers(a);
              const lowest = getLowestPricedOffer(offers);
              return (
                <article key={a.id} className="activity-result-card">
                  <Link className="activity-result-main" href={"/actividades/" + a.slug}>
                    <span className="activity-result-type">
                      {a.type === "Pecio"
                        ? "⚓"
                        : a.type === "Fauna"
                        ? "🐢"
                        : a.type === "Curso"
                        ? "🎓"
                        : a.type === "Fun Dive"
                        ? "🐠"
                        : "🤿"}
                    </span>
                    <span>
                      <strong>{a.title}</strong>
                      <small>
                        {a.destination} · {site?.name || a.region} · {a.level} · {a.duration}
                      </small>
                      <span className="result-price">
                        {lowest ? (
                          <>
                            Desde <b>{formatOfferPrice(lowest)}</b>
                            {offers.length > 1 && <small> · {offers.length} opciones</small>}
                          </>
                        ) : (
                          <b>Consultar precio</b>
                        )}
                      </span>
                      <span className="activity-provider">
                        {offers.length === 1 ? (
                          <>Reserva en: {offers[0].provider}</>
                        ) : (
                          <>Disponible en: {offers.map((offer) => offer.provider).join(" · ")}</>
                        )}
                      </span>
                    </span>
                    <span className="activity-result-arrow">→</span>
                  </Link>
                  {center && (
                    <p className="activity-school-link">
                      Escuela: <Link href={"/centros/" + center.slug}>{center.name}</Link>
                    </p>
                  )}
                  <div className="activity-result-actions">
                    {site && (
                      <button
                        type="button"
                        className="activity-detail-link"
                        onClick={() => window.dispatchEvent(new CustomEvent("focus-activity-site", { detail: site.id }))}
                      >
                        📍 Mapa
                      </button>
                    )}
                    <Link href={"/actividades/" + a.slug} className="activity-detail-link">
                      Ver detalles
                    </Link>
                    {offers.map((offer) => (
                      <a
                        key={offer.id}
                        href={buildAffiliateUrl(offer)}
                        target="_blank"
                        rel="sponsored noopener noreferrer"
                        className="activity-book-link"
                        title={`Reservar en ${offer.provider} (enlace de afiliado)`}
                        data-affiliate-provider={offer.provider}
                        data-activity-id={a.id}
                      >
                        Reservar con {offer.provider} ↗
                      </a>
                    ))}
                  </div>
                </article>
              );
            })}

            {visibleCount < filtered.length && (
              <div style={{ padding: "14px", textAlign: "center" }}>
                <button
                  type="button"
                  className="button button-primary"
                  style={{ width: "100%" }}
                  onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
                >
                  Mostrar más experiencias ({filtered.length - visibleCount} restantes)
                </button>
              </div>
            )}

            {!filtered.length && (
              <div className="activity-empty">
                <strong>No hay experiencias con estos filtros.</strong>
                <span>Prueba otra combinación de actividad, región o nivel.</span>
              </div>
            )}
          </div>
        </aside>

        <div className="activity-map-panel" id="mapa">
          <div className="map-mode-controls">
            <span>Ver en el mapa:</span>
            <button
              type="button"
              aria-pressed={mapMode === "experiences"}
              onClick={() => setMapMode("experiences")}
            >
              Puntos y experiencias
            </button>
            <button
              type="button"
              aria-pressed={mapMode === "species"}
              onClick={() => setMapMode("species")}
            >
              Registros de fauna
            </button>
            {mapMode === "species" && (
              <label>
                Especie{" "}
                <select value={speciesSlug} onChange={(e) => setSpeciesSlug(e.target.value)}>
                  {speciesWithPoints.map((s) => (
                    <option key={s.slug} value={s.slug}>
                      {s.name} ({s.occurrences.length})
                    </option>
                  ))}
                </select>
              </label>
            )}
          </div>
          {mapMode === "experiences" ? (
            <ActivityMap sites={matchingSites} activities={filtered} />
          ) : (
            <>
              <SpeciesMap item={selectedSpecies} />
              <p className="data-note">
                {selectedSpecies?.occurrences.length || 0} registros documentados para {selectedSpecies?.name}.{" "}
                <Link href={`/fauna/${speciesSlug}`}>Ver ficha de la especie →</Link>
              </p>
            </>
          )}
          {mapMode === "experiences" && (
            <div className="activity-map-caption">
              <span>◉ {matchingSites.length} puntos de inmersión con actividades</span>
              <span>Pulsa en un marcador para ver las opciones</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
