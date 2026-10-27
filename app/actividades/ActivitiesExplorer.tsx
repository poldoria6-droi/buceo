"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { formatOfferPrice, getLowestPricedOffer } from "@/lib/affiliate";
import { useCallback, useEffect, useMemo, useRef, useState, useTransition } from "react";
import { communityFor, destinationsFor } from "@/lib/activity-filters";
import type { Species } from "@/data/species";
import type { SlimActivity, SlimSite } from "@/lib/slim";

// Los mapas (Leaflet) y los datos de fauna solo se descargan cuando hacen falta.
const ActivityMap = dynamic(() => import("@/app/actividades/ActivityMap"), { ssr: false });
const SpeciesMap = dynamic(() => import("@/app/actividades/SpeciesMap"), { ssr: false });

const PAGE_SIZE = 24;

type PendingFocusWindow = Window & { __pendingFocusSite?: number };

type ExplorerCatalog = {
  activities: SlimActivity[];
  sites: SlimSite[];
  centerByActivity: Record<string, { name: string; slug: string }>;
};

let catalogPromise: Promise<ExplorerCatalog> | null = null;
function fetchExplorerCatalog(): Promise<ExplorerCatalog> {
  if (!catalogPromise) {
    catalogPromise = fetch("/data/activities-explorer.json").then((res) => {
      if (!res.ok) throw new Error("Failed to load catalog");
      return res.json() as Promise<ExplorerCatalog>;
    });
  }
  return catalogPromise;
}

type Props = {
  activities: SlimActivity[];
  centerByActivity?: Record<string, { name: string; slug: string }>;
  sites: SlimSite[];
  totalCount?: number;
  totalSitesCount?: number;
  initialDestinations?: string[];
  regions: string[];
  types: string[];
  initial?: { type?: string; region?: string; destination?: string; level?: string; site?: string; species?: string };
};

/**
 * Monta el mapa solo cuando está cerca del viewport (o si se pide enfocar un punto),
 * reservando la altura final para evitar saltos de maquetación (CLS).
 */
function MapSlot({ children, onVisible }: { children: React.ReactNode; onVisible?: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const open = () => {
      onVisible?.();
      setShow(true);
    };
    window.addEventListener("focus-activity-site", open);
    let io: IntersectionObserver | undefined;
    if (typeof IntersectionObserver === "undefined") {
      open();
    } else {
      io = new IntersectionObserver(
        (entries) => {
          if (entries.some((entry) => entry.isIntersecting)) {
            open();
            io?.disconnect();
          }
        },
        { rootMargin: "400px 0px" }
      );
      io.observe(el);
    }
    return () => {
      io?.disconnect();
      window.removeEventListener("focus-activity-site", open);
    };
  }, [onVisible]);

  return (
    <div ref={ref}>
      {show ? (
        children
      ) : (
        <div className="leaflet-map activity-leaflet-map map-placeholder" role="status" aria-busy="true">
          <span>Cargando mapa interactivo…</span>
        </div>
      )}
    </div>
  );
}

export function ActivitiesExplorer({
  activities: initialActivities,
  sites: initialSites,
  totalCount,
  totalSitesCount,
  initialDestinations,
  regions,
  types,
  centerByActivity: initialCenters = {},
  initial = {},
}: Props) {
  const initType = initial.type || "Todos";
  const initRegion = initial.region || "Todos";
  const initDestination = initial.destination || "Todos";
  const initSite = initial.site || "Todos";
  const initLevel = initial.level || "Todos";
  const initSpecies = initial.species;

  const [catalog, setCatalog] = useState<ExplorerCatalog>({
    activities: initialActivities,
    sites: initialSites,
    centerByActivity: initialCenters,
  });
  const [fullCatalogLoaded, setFullCatalogLoaded] = useState(
    !totalCount || initialActivities.length >= totalCount
  );

  const ensureCatalog = useCallback(() => {
    if (fullCatalogLoaded) return Promise.resolve();
    return fetchExplorerCatalog()
      .then((data) => {
        setCatalog(data);
        setFullCatalogLoaded(true);
      })
      .catch(() => {});
  }, [fullCatalogLoaded]);

  const activities = catalog.activities;
  const sites = catalog.sites;
  const centerByActivity = catalog.centerByActivity;

  const [speciesList, setSpeciesList] = useState<Species[]>([]);
  const [mapMode, setMapMode] = useState(initSpecies ? "species" : "experiences");
  const [speciesSlug, setSpeciesSlug] = useState(initSpecies || "all");
  const totalSpeciesOccurrences = useMemo(
    () => speciesList.reduce((acc, s) => acc + s.occurrences.length, 0),
    [speciesList]
  );
  const selectedSpecies = speciesSlug === "all" ? undefined : speciesList.find((s) => s.slug === speciesSlug);

  const [type, setType] = useState(initType);
  const [region, setRegion] = useState(communityFor(initRegion));
  const [destination, setDestination] = useState(() =>
    destinationsFor(activities, initRegion).includes(initDestination) ? initDestination : "Todos"
  );
  const [siteSlug, setSiteSlug] = useState(initSite);
  const [level, setLevel] = useState(initLevel);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [, startTransition] = useTransition();

  // Filtros iniciales desde la URL (#type=Bautismo&region=Canarias o ?type=...). Solo en cliente:
  // así la página se pre-renderiza con contenido real y sin saltos de diseño.
  useEffect(() => {
    const applyUrlParams = () => {
      const rawHash = window.location.hash.replace(/^#/, "");
      const params = new URLSearchParams(window.location.search);
      if (rawHash && rawHash !== "mapa") {
        new URLSearchParams(rawHash).forEach((value, key) => params.set(key, value));
      }
      const hType = params.get("type");
      const hRegion = params.get("region");
      const hDest = params.get("destination");
      const hSite = params.get("site");
      const hLevel = params.get("level");
      const hSpecies = params.get("species");
      if (!hType && !hRegion && !hDest && !hSite && !hLevel && !hSpecies && !params.has("mapa")) return;

      ensureCatalog().then(() => {
        if (hType) setType(hType);
        if (hRegion) setRegion(communityFor(hRegion));
        if (hDest) setDestination(hDest);
        if (hSite) setSiteSlug(hSite);
        if (hLevel) setLevel(hLevel);
        if (hSpecies) {
          setMapMode("species");
          setSpeciesSlug(hSpecies);
        }
        if (params.has("mapa") || hSite || hSpecies) {
          setTimeout(() => {
            document.getElementById("mapa")?.scrollIntoView({ behavior: "smooth" });
          }, 150);
        }
      });
    };

    applyUrlParams();
    window.addEventListener("hashchange", applyUrlParams);
    return () => window.removeEventListener("hashchange", applyUrlParams);
  }, [ensureCatalog]);

  // Carga el catálogo completo ante la primera interacción del usuario.
  useEffect(() => {
    if (fullCatalogLoaded) return;
    const onInteract = () => {
      ensureCatalog();
    };
    window.addEventListener("pointerdown", onInteract, { once: true, passive: true });
    window.addEventListener("keydown", onInteract, { once: true, passive: true });
    window.addEventListener("touchstart", onInteract, { once: true, passive: true });
    window.addEventListener("scroll", onInteract, { once: true, passive: true });
    return () => {
      window.removeEventListener("pointerdown", onInteract);
      window.removeEventListener("keydown", onInteract);
      window.removeEventListener("touchstart", onInteract);
      window.removeEventListener("scroll", onInteract);
    };
  }, [fullCatalogLoaded, ensureCatalog]);

  // Datos de fauna: se cargan solo al abrir el modo "Registros de fauna".
  useEffect(() => {
    if (mapMode !== "species" || speciesList.length) return;
    let alive = true;
    import("@/data/species").then((mod) => {
      if (alive) setSpeciesList(mod.species.filter((s) => s.occurrences.length > 0));
    });
    return () => {
      alive = false;
    };
  }, [mapMode, speciesList.length]);

  const isUnfiltered =
    type === "Todos" &&
    region === "Todos" &&
    destination === "Todos" &&
    siteSlug === "Todos" &&
    level === "Todos";

  const destinations = useMemo(() => {
    if (!fullCatalogLoaded && region === "Todos" && initialDestinations?.length) {
      return initialDestinations;
    }
    return destinationsFor(activities, region);
  }, [activities, region, fullCatalogLoaded, initialDestinations]);
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

  const displayTotalCount = !fullCatalogLoaded && isUnfiltered && totalCount ? totalCount : filtered.length;
  const visibleItems = useMemo(() => filtered.slice(0, visibleCount), [filtered, visibleCount]);
  const filteredIds = useMemo(() => new Set(filtered.flatMap((a) => a.siteSlugs)), [filtered]);
  const matchingSites = useMemo(() => sites.filter((site) => filteredIds.has(site.slug)), [sites, filteredIds]);
  const displaySitesCount =
    !fullCatalogLoaded && isUnfiltered && totalSitesCount ? totalSitesCount : matchingSites.length;

  const updateFilter = (fn: () => void) => {
    ensureCatalog().then(() => {
      startTransition(() => {
        fn();
        setVisibleCount(PAGE_SIZE);
      });
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
              <h2>{displayTotalCount} experiencias</h2>
            </div>
            <a href="#mapa" className="activity-detail-link" style={{ whiteSpace: "nowrap" }}>
              🗺️ Ver mapa ({displaySitesCount})
            </a>
          </div>
          <p className="activity-map-hint">
            Selecciona una experiencia para ver qué incluye o continúa al proveedor para consultar disponibilidad en tus fechas.
          </p>
          <div className="activity-results-scroll">
            {visibleItems.map((a) => {
              const site = sites.find((s) => a.siteSlugs.includes(s.slug));
              const center = centerByActivity[a.slug];
              const offers = a.offers;
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
                          <>✓ Reserva online · {offers[0].provider}</>
                        ) : (
                          <>✓ Disponible en: {offers.map((offer) => offer.provider).join(" · ")}</>
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
                        onClick={() => {
                          setMapMode("experiences");
                          (window as PendingFocusWindow).__pendingFocusSite = site.id;
                          window.dispatchEvent(new CustomEvent("focus-activity-site", { detail: site.id }));
                          document.getElementById("mapa")?.scrollIntoView({ behavior: "smooth" });
                        }}
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
                        href={offer.href}
                        target="_blank"
                        rel="sponsored noopener noreferrer"
                        className="activity-book-link"
                        title={`Consultar fechas y reservar en ${offer.provider} (enlace de afiliado)`}
                        data-affiliate-provider={offer.provider}
                        data-activity-id={a.id}
                      >
                        Ver fechas y reservar ↗
                      </a>
                    ))}
                  </div>
                </article>
              );
            })}

            {visibleCount < displayTotalCount && (
              <div style={{ padding: "14px", textAlign: "center" }}>
                <button
                  type="button"
                  className="button button-primary"
                  style={{ width: "100%" }}
                  onClick={() => {
                    ensureCatalog().then(() => {
                      setVisibleCount((c) => c + PAGE_SIZE);
                    });
                  }}
                >
                  Mostrar más experiencias ({displayTotalCount - visibleCount} restantes)
                </button>
              </div>
            )}

            {!displayTotalCount && (
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
            {mapMode === "species" && speciesList.length > 0 && (
              <label>
                Especie{" "}
                <select value={speciesSlug} onChange={(e) => setSpeciesSlug(e.target.value)}>
                  <option value="all">Todas las especies ({totalSpeciesOccurrences})</option>
                  {speciesList.map((s) => (
                    <option key={s.slug} value={s.slug}>
                      {s.name} ({s.occurrences.length})
                    </option>
                  ))}
                </select>
              </label>
            )}
          </div>
          {mapMode === "experiences" ? (
            <MapSlot onVisible={ensureCatalog}>
              <ActivityMap sites={matchingSites} activities={filtered} />
            </MapSlot>
          ) : speciesList.length === 0 ? (
            <div className="leaflet-map activity-leaflet-map map-placeholder" role="status" aria-busy="true">
              <span>Cargando registros de fauna…</span>
            </div>
          ) : (
            <>
              <SpeciesMap item={selectedSpecies} allSpecies={speciesList} />
              <p className="data-note">
                {selectedSpecies ? (
                  <>
                    {selectedSpecies.occurrences.length} zonas documentadas en España para {selectedSpecies.name}.{" "}
                    <Link href={`/fauna/${selectedSpecies.slug}`}>Ver ficha de la especie →</Link>
                  </>
                ) : (
                  <>
                    {totalSpeciesOccurrences} registros documentados en España de {speciesList.length} especies marinas.{" "}
                    <Link href="/fauna">Ver guía de fauna marina →</Link>
                  </>
                )}
              </p>
            </>
          )}
          {mapMode === "experiences" && (
            <div className="activity-map-caption">
              <span>◉ {displaySitesCount} puntos de inmersión con actividades</span>
              <span>Pulsa en un marcador para ver las opciones</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
