"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { DiveSite } from "@/data/dive-sites";
import type { Activity } from "@/data/activities";

const ActivityMap = dynamic(() => import("@/app/actividades/ActivityMap"), { ssr: false });

type Props = {
  activities: Activity[];
  sites: DiveSite[];
  regions: string[];
  types: string[];
  initial?: { type?: string; region?: string; destination?: string; level?: string; site?: string };
};

export function ActivitiesExplorer({ activities, sites, regions, types, initial = {} }: Props) {
  const [type, setType] = useState(initial.type || "Todos");
  const [region, setRegion] = useState(initial.region || "Todos");
  const [destination, setDestination] = useState(initial.destination || "Todos");
  const [siteSlug, setSiteSlug] = useState(initial.site || "Todos");
  const [level, setLevel] = useState(initial.level || "Todos");

  const destinations = useMemo(() => Array.from(new Set(activities.map(a => a.destination))).sort(), [activities]);
  const availableSites = useMemo(
    () => sites.filter(site => activities.some(activity => activity.siteSlugs.includes(site.slug))).sort((a, b) => a.name.localeCompare(b.name)),
    [activities, sites]
  );

  const filtered = useMemo(() => activities.filter(a =>
    (type === "Todos" || a.type === type) &&
    (region === "Todos" || a.region === region) &&
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
          <label><span>Actividad</span><select value={type} onChange={e => setType(e.target.value)}><option value="Todos">¿Qué quieres hacer?</option>{types.map(t => <option key={t}>{t}</option>)}</select></label>
          <label><span>Zona</span><select value={region} onChange={e => setRegion(e.target.value)}><option value="Todos">Toda España</option>{regions.map(r => <option key={r}>{r}</option>)}</select></label>
          <label><span>Destino</span><select value={destination} onChange={e => setDestination(e.target.value)}><option value="Todos">Cualquier destino</option>{destinations.map(d => <option key={d}>{d}</option>)}</select></label>
          <label><span>Punto de buceo</span><select value={siteSlug} onChange={e => setSiteSlug(e.target.value)}><option value="Todos">Cualquier punto</option>{availableSites.map(site => <option key={site.slug} value={site.slug}>{site.name}</option>)}</select></label>
          <label><span>Nivel</span><select value={level} onChange={e => setLevel(e.target.value)}><option value="Todos">Todos los niveles</option><option>Inicial</option><option>Intermedio</option><option>Avanzado</option></select></label>
        </div>
        <div className="activity-intents">
          {types.map(t => <button key={t} type="button" className={type === t ? "active" : ""} onClick={() => setType(type === t ? "Todos" : t)}>{t}</button>)}
        </div>
      </div>

      <div className="activity-results-layout">
        <aside className="activity-results-panel">
          <div className="activity-results-heading">
            <div><span className="eyebrow">OPCIONES REALES</span><h2>{filtered.length} experiencias</h2></div>
            <span>{matchingSites.length} puntos</span>
          </div>
          <p className="activity-map-hint">Estas fichas parten de ofertas públicas de proveedores. El precio y la disponibilidad final deben comprobarse en la página del proveedor.</p>
          <div className="activity-results-scroll">
            {filtered.map(a => {
              const site = sites.find(s => a.siteSlugs.includes(s.slug));
              return (
                <article key={a.id} className="activity-result-card">
                  <button type="button" className="activity-result-main" onClick={() => site && window.dispatchEvent(new CustomEvent("focus-activity-site", { detail: site.id }))}>
                    <span className="activity-result-type">{a.type === "Pecio" ? "⚓" : a.type === "Fauna" ? "🐢" : a.type === "Curso" ? "🎓" : a.type === "Fun Dive" ? "🐠" : "🤿"}</span>
                    <span>
                      <strong>{a.title}</strong>
                      <small>{a.destination} · {site?.name || "Punto por confirmar"} · {a.level} · {a.duration}</small>
                      <span className="result-price">{a.priceFrom ? <>Desde <b>{a.priceFrom} {a.priceCurrency || "€"}</b></> : <><b>Consultar precio</b></>}</span>
                      <span className="activity-provider">Proveedor: {a.provider}</span>
                    </span>
                    <span className="activity-result-arrow">→</span>
                  </button>
                  <div className="activity-result-actions">
                    <Link href={"/actividades/" + a.slug} className="activity-detail-link">Ver ficha</Link>
                    <a href={a.providerUrl} target="_blank" rel="sponsored noopener noreferrer" className="activity-book-link">Comprobar / reservar ↗</a>
                  </div>
                </article>
              );
            })}
            {!filtered.length && <div className="activity-empty"><strong>No hay experiencias con estos filtros.</strong><span>Prueba otra combinación y vuelve a explorar el mapa.</span></div>}
          </div>
        </aside>

        <div className="activity-map-panel">
          <ActivityMap sites={matchingSites} activities={filtered} />
          <div className="activity-map-caption"><span>◉ {matchingSites.length} puntos con experiencias</span><span>Selecciona un punto para ver la oferta</span></div>
        </div>
      </div>

      <p className="data-note activity-note">Las fichas muestran datos consultados en páginas públicas de proveedores. La disponibilidad y el precio final pueden cambiar; el enlace actual lleva a la ficha pública del proveedor. Los enlaces afiliados se activarán cuando el programa correspondiente esté aprobado.</p>
    </div>
  );
}
