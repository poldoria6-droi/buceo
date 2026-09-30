"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef } from "react";
import { CircleMarker, MapContainer, Popup, TileLayer, useMap } from "react-leaflet";
import type { DiveSite } from "@/data/dive-sites";
import type { Activity } from "@/data/activities";
import type { CircleMarker as LeafletCircleMarker } from "leaflet";

function FocusController({ markerRefs }: { markerRefs: React.MutableRefObject<Record<number, LeafletCircleMarker | null>> }) {
  const map = useMap();
  useEffect(() => {
    const handler = (event: Event) => {
      const custom = event as CustomEvent<number>;
      const marker = markerRefs.current[custom.detail];
      if (marker) {
        map.flyTo(marker.getLatLng(), Math.max(map.getZoom(), 9), { duration: 0.65 });
        marker.openPopup();
      }
    };
    window.addEventListener("focus-activity-site", handler);
    return () => window.removeEventListener("focus-activity-site", handler);
  }, [map, markerRefs]);
  return null;
}

export default function ActivityMap({ sites, activities }: { sites: DiveSite[]; activities: Activity[] }) {
  const markerRefs = useRef<Record<number, LeafletCircleMarker | null>>({});
  const levels = useMemo(() => ({ Inicial: "#18c5dc", Intermedio: "#0aa4c7", Avanzado: "#075a98" }), []);

  return (
    <MapContainer center={[40.2, -3.5]} zoom={5} scrollWheelZoom className="leaflet-map activity-leaflet-map">
      <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <FocusController markerRefs={markerRefs} />
      {sites.map(site => {
        const offers = activities.filter(a => a.siteSlugs.includes(site.slug));
        return (
          <CircleMarker
            key={site.id}
            center={[site.lat, site.lng]}
            radius={10}
            pathOptions={{ color: "#fff", weight: 3, fillColor: levels[site.level], fillOpacity: 0.98 }}
            ref={instance => { markerRefs.current[site.id] = instance; }}
          >
            <Popup>
              <div className="activity-popup">
                <span className="popup-kicker">{site.region} · {site.level}</span>
                <strong>{site.name}</strong>
                <span>{site.destination}</span>
                <div className="activity-popup-meta">
                  <span>◉ {site.depth}</span>
                  <span>◈ {site.type}</span>
                </div>
                <div className="popup-fauna-title">Fauna potencial</div>
                <div className="popup-tags">{site.animals.map(animal => <span key={animal}>{animal}</span>)}</div>
                <div className="activity-popup-offers">
                  <b>Experiencias disponibles</b>
                  {offers.map(offer => (
                    <div className="activity-popup-offer" key={offer.id}>
                      <strong>{offer.title}</strong>
                      <small>{offer.type} · {offer.level} · {offer.duration}</small>
                      <span>{offer.priceFrom ? <>Desde <b>{offer.priceFrom} €</b></> : <>Precio por confirmar</>}</span>
                    </div>
                  ))}
                </div>
                <Link href={"/actividades?destination=" + encodeURIComponent(site.destination)} className="popup-action">Ver opciones de {site.destination} →</Link>
              </div>
            </Popup>
          </CircleMarker>
        );
      })}
    </MapContainer>
  );
}
