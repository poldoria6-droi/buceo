"use client";

import { useEffect, useMemo, useRef } from "react";
import { CircleMarker, MapContainer, Popup, TileLayer, useMap } from "react-leaflet";
import type { DiveSite } from "@/data/dive-sites";
type LeafletMarker = import("leaflet").CircleMarker;

function FocusController({markerRefs}:{markerRefs:React.MutableRefObject<Record<number,LeafletMarker|null>>}){
  const map=useMap();
  useEffect(()=>{
    const handler=(event:Event)=>{
      const custom=event as CustomEvent<number>;
      const marker=markerRefs.current[custom.detail];
      if(marker){ map.flyTo(marker.getLatLng(),Math.max(map.getZoom(),9),{duration:.7}); marker.openPopup(); }
    };
    window.addEventListener("focus-dive-site",handler);
    return ()=>window.removeEventListener("focus-dive-site",handler);
  },[map,markerRefs]);
  return null;
}

export default function DiveMap({sites}:{sites:DiveSite[]}){
  const markerRefs=useRef<Record<number,LeafletMarker|null>>({});
  const levels=useMemo(()=>({Inicial:"#58d6d0",Intermedio:"#27b2ce",Avanzado:"#1675b7"}),[]);
  return <MapContainer center={[39,-3.7]} zoom={5} scrollWheelZoom className="leaflet-map">
    <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
    <FocusController markerRefs={markerRefs}/>
    {sites.map(site=><CircleMarker key={site.id} center={[site.lat,site.lng]} radius={8}
      pathOptions={{color:"#082d45",weight:2,fillColor:levels[site.level],fillOpacity:.92}}
      ref={instance=>{markerRefs.current[site.id]=instance;}}>
      <Popup><div className="popup"><span className="popup-kicker">{site.region} · {site.level}</span><strong>{site.name}</strong><span>{site.destination}</span><p>{site.highlight}</p><div className="popup-tags">{site.animals.map(animal=><span key={animal}>{animal}</span>)}</div><small>{site.type} · {site.depth}</small></div></Popup>
    </CircleMarker>)}
  </MapContainer>;
}