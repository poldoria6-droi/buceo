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
  return <div className="map-shell reference-map-shell"><div className="map-layout">
    <aside className="map-results reference-results">
      <div className="map-panel-head"><div className="map-title-line"><span className="map-pin-icon">⌖</span><div><strong>Mapa interactivo de buceo</strong><small>Explora <b>{filtered.length}</b> lugares increíbles en España</small></div></div></div>
      <label className="search-box"><span>⌕</span><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Buscar lugar o destino..."/></label>
      <div className="filter-chips"><button className={region==="Todos"?"selected":""} onClick={()=>setRegion("Todos")}>Todos</button><select value={region} onChange={e=>setRegion(e.target.value)}><option>Zona</option>{regions.map(item=><option key={item}>{item}</option>)}</select><select value={level} onChange={e=>setLevel(e.target.value)}><option>Nivel</option><option>Inicial</option><option>Intermedio</option><option>Avanzado</option></select><select value={type} onChange={e=>setType(e.target.value)}><option>Tipo</option><option>Arrecife</option><option>Pared</option><option>Pecio</option><option>Cala</option><option>Reserva</option><option>Cueva</option></select><select value={animal} onChange={e=>setAnimal(e.target.value)}><option>Fauna</option>{fauna.map(item=><option key={item}>{item}</option>)}</select></div>
      <div className="results-heading reference-heading"><strong>{filtered.length} puntos</strong><button className="reset-button" onClick={reset}>Limpiar</button></div>
      <div className="results-scroll">{filtered.slice(0,12).map(site=><button key={site.id} className="map-result-card reference-result" onClick={()=>window.dispatchEvent(new CustomEvent("focus-dive-site",{detail:site.id}))}><span className="site-thumb" aria-hidden="true">{site.type==="Pecio"?"⚓":site.animals.includes("Tortuga marina")?"🐢":site.animals.includes("Raya")?"🐟":"🐠"}</span><span><strong>{site.name}</strong><small>⌖ {site.destination}</small><span className="result-pills"><i>{site.level}</i><i>{site.type}</i></span></span><span className="result-heart">♡</span></button>)}</div>
    </aside>
    <div className="map-canvas"><DiveMap sites={filtered}/><div className="map-fauna-legend"><span>🦈 Tiburones</span><span>🔵 Mantas</span><span>🐢 Tortugas</span><span>◈ Rayas</span><span>⚓ Pecios</span><span>🪸 Macro vida</span></div></div>
  </div><p className="data-note">Base inicial España · coordenadas aproximadas · fauna potencial/representativa.</p></div>;
}