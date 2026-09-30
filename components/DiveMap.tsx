"use client";
import Link from "next/link";
import { useEffect, useMemo, useRef } from "react";
import { CircleMarker, MapContainer, Popup, TileLayer, useMap } from "react-leaflet";
import type { DiveSite } from "@/data/dive-sites";
import type { Activity } from "@/data/activities";

type LeafletMarker = import("leaflet").CircleMarker;

function FocusController({markerRefs}:{markerRefs:React.MutableRefObject<Record<number,LeafletMarker|null>>}){
  const map=useMap();
  useEffect(()=>{
    const handler=(event:Event)=>{
      const custom=event as CustomEvent<number>;
      const marker=markerRefs.current[custom.detail];
      if(marker){
        map.flyTo(marker.getLatLng(),Math.max(map.getZoom(),8),{duration:.7});
        marker.openPopup();
      }
    };
    window.addEventListener("focus-dive-site",handler);
    return()=>window.removeEventListener("focus-dive-site",handler);
  },[map,markerRefs]);
  return null;
}

export default function DiveMap({sites,activities}:{sites:DiveSite[];activities:Activity[]}){
  const markerRefs=useRef<Record<number,LeafletMarker|null>>({});
  const levels=useMemo(()=>({Inicial:"#18c5dc",Intermedio:"#0aa4c7",Avanzado:"#075a98"}),[]);

  return <MapContainer center={[40.2,-3.5]} zoom={5} scrollWheelZoom className="leaflet-map">
    <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
    <FocusController markerRefs={markerRefs}/>
    {sites.map(site=>{
      const linkedActivities=activities.filter(activity=>activity.siteSlugs.includes(site.slug));
      return <CircleMarker key={site.id} center={[site.lat,site.lng]} radius={9} pathOptions={{color:"#fff",weight:3,fillColor:levels[site.level],fillOpacity:.98}} ref={instance=>{markerRefs.current[site.id]=instance;}}>
        <Popup>
          <div className="popup">
            <span className="popup-kicker">{site.region} · {site.level}</span>
            <strong>{site.name}</strong>
            <span>{site.destination}</span>
            <p>{site.highlight}</p>
            <div className="popup-fauna-title">Fauna potencial</div>
            <div className="popup-tags">{site.animals.map(animal=><span key={animal}>{animal}</span>)}</div>
            <div className="popup-meta"><small>{site.type}</small><small>{site.depth}</small></div>
            <div className="activity-popup-offers">
              <b>{linkedActivities.length ? "Experiencias conectadas" : "Sin actividad conectada todavía"}</b>
              {linkedActivities.map(activity=><Link key={activity.id} className="activity-popup-offer" href={"/actividades?site="+encodeURIComponent(site.slug)+"&type="+encodeURIComponent(activity.type)}>
                <strong>{activity.title}</strong>
                <small>{activity.type} · {activity.level} · {activity.duration}</small>
                <span>{activity.priceFrom ? <>Desde <b>{activity.priceFrom} €</b></> : <>Precio por confirmar</>}</span>
              </Link>)}
            </div>
            <Link href={"/actividades?site="+encodeURIComponent(site.slug)} className="popup-action">Ver actividades de este punto →</Link>
          </div>
        </Popup>
      </CircleMarker>;
    })}
  </MapContainer>;
}
