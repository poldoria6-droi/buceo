"use client";

import { species } from "@/data/species";
import dynamic from "next/dynamic";
import Link from "next/link";
import { buildAffiliateUrl, formatOfferPrice, getBookingOffers, getLowestPricedOffer } from "@/lib/affiliate";
import { useMemo, useState } from "react";
import type { DiveSite } from "@/data/dive-sites";
import { communityFor, destinationsFor } from "@/lib/activity-filters";
import type { Activity } from "@/data/types";

const ActivityMap = dynamic(() => import("@/app/actividades/ActivityMap"), { ssr: false });

const SpeciesMap = dynamic(() => import("@/app/actividades/SpeciesMap"), {ssr:false});

type Props = {
  activities: Activity[];
  centerByActivity?: Record<string, {name:string;slug:string}>;
  sites: DiveSite[];
  regions: string[];
  types: string[];
  initial?: { type?: string; region?: string; destination?: string; level?: string; site?: string; species?:string };
};

export function ActivitiesExplorer({ activities, sites, regions, types, centerByActivity = {}, initial = {} }: Props) {
  const [mapMode, setMapMode] = useState(initial.species ? "species" : "experiences");
  const [speciesSlug, setSpeciesSlug] = useState(initial.species || species[0]?.slug || "");
  const selectedSpecies = species.find(s => s.slug === speciesSlug);
  const [type, setType] = useState(initial.type || "Todos");
  const [region, setRegion] = useState(communityFor(initial.region || "Todos"));
  const [destination, setDestination] = useState(() => destinationsFor(activities, initial.region || "Todos").includes(initial.destination || "") ? initial.destination! : "Todos");
  const [siteSlug, setSiteSlug] = useState(initial.site || "Todos");
  const [level, setLevel] = useState(initial.level || "Todos");

  const destinations = useMemo(() => destinationsFor(activities, region), [activities, region]);
  const communities = useMemo(() => Array.from(new Set(regions.map(communityFor))).sort((a,b) => a.localeCompare(b, "es")), [regions]);
  const visibleTypes = types.filter(t => t !== "Fauna");

  const filtered = useMemo(() => activities.filter(a =>
    (type === "Todos" || a.type === type) &&
    (region === "Todos" || communityFor(a.region) === region) &&
    (destination === "Todos" || a.destination === destination) &&
    (siteSlug === "Todos" || a.siteSlugs.includes(siteSlug)) &&
    (level === "Todos" || a.level === level)
  ), [activities, type, region, destination, siteSlug, level]);

  const filteredIds = useMemo(() => new Set(filtered.flatMap(a => a.siteSlugs)), [filtered]);
  const matchingSites = useMemo(() => sites.filter(site => filteredIds.has(site.slug)), [sites, filteredIds]);

  const clear = () => {
    setType("Todos");
    setRegion("Todos");
    setDestination("Todos");
    setSiteSlug("Todos");
    setLevel("Todos");
  };

  return (
    <div className="activities-explorer">
      <div className="activities-filter-bar">
        <div className="activities-filter-title">
          <div>
            <span className="eyebrow">ENCUENTRA Y RESERVA</span>
            <strong>¿Qué quieres hacer y dónde?</strong>
          </div>
          <button type="button" className="reset-button" onClick={clear}>Limpiar</button>
        </div>
        <div className="activities-filter-grid">
          <label><span>Actividad</span><select value={type} onChange={e => setType(e.target.value)}><option value="Todos">¿Qué quieres hacer?</option>{visibleTypes.map(t => <option key={t}>{t}</option>)}</select></label>
          <label><span>Comunidad autónoma</span><select value={region} onChange={e => { setRegion(e.target.value); setDestination("Todos"); setSiteSlug("Todos"); }}><option value="Todos">Toda España</option>{communities.map(r => <option key={r}>{r}</option>)}</select></label>
          <label><span>Ciudad o destino</span><select value={destination} onChange={e => { setDestination(e.target.value); setSiteSlug("Todos"); }}><option value="Todos">Cualquier destino</option>{destinations.map(d => <option key={d}>{d}</option>)}</select></label>
          <label><span>Nivel</span><select value={level} onChange={e => setLevel(e.target.value)}><option value="Todos">Todos los niveles</option><option>Inicial</option><option>Intermedio</option><option>Avanzado</option></select></label>
        </div>
        {siteSlug !== "Todos" && <p>Filtro del mapa: {sites.find(s => s.slug === siteSlug)?.name || siteSlug} <button type="button" className="reset-button" onClick={() => setSiteSlug("Todos")}>Quitar filtro del mapa</button></p>}
        <div className="activity-intents">
          {visibleTypes.map(t => <button key={t} type="button" className={type === t ? "active" : ""} onClick={() => setType(type === t ? "Todos" : t)}>{t}</button>)}
        </div>
      </div>

      <div className="activity-results-layout">
        <aside className="activity-results-panel">
          <div className="activity-results-heading">
            <div><span className="eyebrow">OPCIONES REALES</span><h2>{filtered.length} experiencias</h2></div>
            <span>{matchingSites.length} puntos</span>
          </div>
          <p className="activity-map-hint">Mostramos el precio desde cuando está registrado y distinguimos cada proveedor. Antes de reservar, comprueba siempre el precio final y la disponibilidad.</p>
          <div className="activity-results-scroll">
            {filtered.map(a => {
              const site = sites.find(s => a.siteSlugs.includes(s.slug));
              const center = centerByActivity[a.slug];
              const offers = getBookingOffers(a);
              const lowest = getLowestPricedOffer(offers);
              return (
                <article key={a.id} className="activity-result-card">
                  <Link className="activity-result-main" href={"/actividades/" + a.slug}>
                    <span className="activity-result-type">{a.type === "Pecio" ? "⚓" : a.type === "Fauna" ? "🐢" : a.type === "Curso" ? "🎓" : a.type === "Fun Dive" ? "🐠" : "🤿"}</span>
                    <span>
                      <strong>{a.title}</strong>
                      <small>{a.destination} · {site?.name || "Punto por confirmar"} · {a.level} · {a.duration}</small>
                      <span className="result-price">{lowest ? <>Desde <b>{formatOfferPrice(lowest)}</b>{offers.length > 1 && <small> · {offers.length} proveedores</small>}</> : <b>Precio por confirmar</b>}</span>
                      <span className="activity-provider">{offers.length === 1 ? <>Proveedor: {offers[0].provider}</> : <>Proveedores: {offers.map(offer => offer.provider).join(" · ")}</>}</span>
                    </span>
                    <span className="activity-result-arrow">→</span>
                  </Link>
                  {center && <p className="activity-school-link">Escuela: <Link href={"/centros/" + center.slug}>{center.name}</Link></p>}
                  <div className="activity-result-actions">
                    {site && <button type="button" className="activity-detail-link" onClick={() => window.dispatchEvent(new CustomEvent("focus-activity-site", {detail:site.id}))}>Ver en el mapa</button>}
                    <Link href={"/actividades/" + a.slug} className="activity-detail-link">Ver ficha</Link>
                    {offers.map(offer => (
                      <a
                        key={offer.id}
                        href={buildAffiliateUrl(offer)}
                        target="_blank"
                        rel="sponsored noopener noreferrer"
                        className="activity-book-link"
                        data-affiliate-provider={offer.provider}
                        data-activity-id={a.id}
                      >
                        Reservar {offer.provider} ↗
                      </a>
                    ))}
                  </div>
                </article>
              );
            })}
            {!filtered.length && <div className="activity-empty"><strong>No hay experiencias con estos filtros.</strong><span>Prueba otra combinación y vuelve a explorar el mapa.</span></div>}
          </div>
        </aside>

        <div className="activity-map-panel" id="mapa">
          <div className="map-mode-controls"><span>Explorar mapa por</span><button type="button" aria-pressed={mapMode==="experiences"} onClick={()=>setMapMode("experiences")}>Experiencias</button><button type="button" aria-pressed={mapMode==="species"} onClick={()=>setMapMode("species")}>Especies</button>{mapMode==="species"&&<label>Especie <select value={speciesSlug} onChange={e=>setSpeciesSlug(e.target.value)}>{species.map(s=><option key={s.slug} value={s.slug}>{s.name}</option>)}</select></label>}</div>
          {mapMode==="experiences" ? <ActivityMap sites={matchingSites} activities={filtered} /> : <><SpeciesMap item={selectedSpecies}/><p className="data-note">{selectedSpecies?.occurrences.length||0} registros documentados. Círculo grande: zona aproximada; pequeño: punto identificado. No garantiza avistamientos. <Link href={`/fauna/${speciesSlug}`}>Leer ficha y fuentes →</Link></p>{!selectedSpecies?.occurrences.length&&<p>No hay puntos contrastados publicados para esta especie. No se añaden marcadores por coincidencia regional.</p>}</>}
          {mapMode==="experiences"&&<div className="activity-map-caption"><span>◉ {matchingSites.length} puntos con experiencias</span><span>Selecciona un punto para ver la oferta</span></div>}
        </div>
      </div>

      <p className="data-note activity-note">El mapa muestra puntos de inmersión relacionados, no la ubicación exacta de cada escuela. Las actividades sin punto confirmado también aparecen en la lista. Algunos enlaces son de afiliación.</p>
    </div>
  );
}

