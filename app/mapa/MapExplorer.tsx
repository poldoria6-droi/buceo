"use client";
import dynamic from "next/dynamic";
import { useEffect, useMemo, useState } from "react";
import type { DiveSite } from "@/data/dive-sites";
const DiveMap=dynamic(()=>import("@/components/DiveMap"),{ssr:false});
type Props={sites:DiveSite[];regions:string[];fauna:string[]};
export function MapExplorer({sites,regions,fauna}:Props){
  const [region,setRegion]=useState("Todos"),[level,setLevel]=useState("Todos"),[type,setType]=useState("Todos"),[animal,setAnimal]=useState("Todos"),[query,setQuery]=useState("");
  useEffect(()=>{const p=new URLSearchParams(window.location.search);setRegion(p.get("region")||"Todos");setLevel(p.get("level")||"Todos");setType(p.get("type")||"Todos");setAnimal(p.get("fauna")||"Todos");},[]);
  const filtered=useMemo(()=>{const q=query.trim().toLowerCase();return sites.filter(site=>(region==="Todos"||site.region===region)&&(level==="Todos"||site.level===level)&&(type==="Todos"||site.type===type)&&(animal==="Todos"||site.animals.includes(animal))&&(!q||`${site.name} ${site.destination} ${site.region}`.toLowerCase().includes(q)));},[sites,region,level,type,animal,query]);
  const reset=()=>{setRegion("Todos");setLevel("Todos");setType("Todos");setAnimal("Todos");setQuery("");history.replaceState(null,"","/mapa");};
  return <div className="map-shell"><div className="filter-panel"><div className="filter-top"><div><strong>Encuentra un punto</strong><span>{filtered.length} resultados</span></div><button className="reset-button" onClick={reset}>Limpiar</button></div>
    <label className="search-box"><span>⌕</span><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Busca lugar, destino o costa..."/></label>
    <div className="filter-grid">
      <label><span>Zona</span><select value={region} onChange={e=>setRegion(e.target.value)}><option>Todos</option>{regions.map(item=><option key={item}>{item}</option>)}</select></label>
      <label><span>Nivel</span><select value={level} onChange={e=>setLevel(e.target.value)}><option>Todos</option><option>Inicial</option><option>Intermedio</option><option>Avanzado</option></select></label>
      <label><span>Tipo</span><select value={type} onChange={e=>setType(e.target.value)}><option>Todos</option><option>Arrecife</option><option>Pared</option><option>Pecio</option><option>Cala</option><option>Reserva</option><option>Cueva</option></select></label>
      <label><span>Fauna</span><select value={animal} onChange={e=>setAnimal(e.target.value)}><option>Todos</option>{fauna.map(item=><option key={item}>{item}</option>)}</select></label>
    </div></div>
    <div className="map-layout"><div className="map-canvas"><DiveMap sites={filtered}/></div><aside className="map-results"><div className="results-heading"><strong>Lugares</strong><span>{filtered.length}</span></div><div className="results-scroll">{filtered.slice(0,14).map(site=><button key={site.id} className="map-result-card" onClick={()=>window.dispatchEvent(new CustomEvent("focus-dive-site",{detail:site.id}))}><span className="map-result-dot"/><span><strong>{site.name}</strong><small>{site.destination} · {site.type}</small></span><span className="map-result-arrow">↗</span></button>)}</div>{filtered.length>14&&<p className="map-note">Mostrando 14 resultados en el panel; el resto sigue visible en el mapa.</p>}</aside></div>
    <p className="data-note">Nota editorial: esta primera base contiene coordenadas aproximadas y fauna potencial/representativa. No implica disponibilidad, avistamiento garantizado ni precio actual.</p>
  </div>;
}