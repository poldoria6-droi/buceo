"use client";
import Link from "next/link";
import { useEffect, useMemo, useRef } from "react";
import { CircleMarker, MapContainer, Popup, TileLayer, useMap } from "react-leaflet";
import type { DiveSite } from "@/data/dive-sites";
type LeafletMarker = import("leaflet").CircleMarker;
function FocusController({markerRefs}:{markerRefs:React.MutableRefObject<Record<number,LeafletMarker|null>>}){
  const map=useMap();
  useEffect(()=>{const handler=(event:Event)=>{const custom=event as CustomEvent<number>;const marker=markerRefs.current[custom.detail];if(marker){map.flyTo(marker.getLatLng(),Math.max(map.getZoom(),8),{duration:.7});marker.openPopup();}};window.addEventListener("focus-dive-site",handler);return()=>window.removeEventListener("focus-dive-site",handler);},[map,markerRefs]);
  return null;
}
export default function DiveMap({sites}:{sites:DiveSite[]}){
  const markerRefs=useRef<Record<number,LeafletMarker|null>>({});
  const levels=useMemo(()=>({Inicial:"#18c5dc",Intermedio:"#0aa4c7",Avanzado:"#075a98"}),[]);
  return <MapContainer center={[40.2,-3.5]} zoom={5} scrollWheelZoom className="leaflet-map">
    <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
    <FocusController markerRefs={markerRefs}/>
    {sites.map(site=><CircleMarker key={site.id} center={[site.lat,site.lng]} radius={9} pathOptions={{color:"#fff",weight:3,fillColor:levels[site.level],fillOpacity:.98}} ref={instance=>{markerRefs.current[site.id]=instance;}}>
      <Popup><div className="popup"><span className="popup-kicker">{site.region} · {site.level}</span><strong>{site.name}</strong><span>{site.destination}</span><p>{site.highlight}</p><div className="popup-tags">{site.animals.map(animal=><span key={animal}>{animal}</span>)}</div><small>{site.type} · {site.depth}</small><Link href={`/actividades?q=${encodeURIComponent(site.destination)}`} className="popup-action">Ver actividades aquí →</Link></div></Popup>
    </CircleMarker>)}
  </MapContainer>;
}