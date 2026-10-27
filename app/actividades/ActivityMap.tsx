"use client";

import Link from "next/link";
import { formatOfferPrice } from "@/lib/affiliate";
import { useEffect, useRef, useMemo } from "react";
import { CircleMarker, MapContainer, Popup, TileLayer, useMap } from "react-leaflet";
import type { SlimActivity, SlimSite } from "@/lib/slim";
import type { CircleMarker as LeafletCircleMarker } from "leaflet";

type PendingFocusWindow = Window & { __pendingFocusSite?: number };

function FocusController({ markerRefs }: { markerRefs: React.MutableRefObject<Record<number, LeafletCircleMarker | null>> }) {
  const map = useMap();
  useEffect(() => {
    const focusSite = (siteId: number) => {
      const marker = markerRefs.current[siteId];
      if (marker) {
        map.flyTo(marker.getLatLng(), Math.max(map.getZoom(), 9), { duration: 0.65 });
        marker.openPopup();
        return true;
      }
      return false;
    };
    const handler = (event: Event) => {
      const custom = event as CustomEvent<number>;
      focusSite(custom.detail);
    };
    window.addEventListener("focus-activity-site", handler);

    // El mapa se monta bajo demanda: si el usuario pidió enfocar un punto antes de que existiera, se aplica ahora.
    const pending = (window as PendingFocusWindow).__pendingFocusSite;
    let timer: ReturnType<typeof setTimeout> | undefined;
    if (typeof pending === "number") {
      let attempts = 0;
      const tryFocus = () => {
        attempts += 1;
        if (focusSite(pending) || attempts > 10) {
          delete (window as PendingFocusWindow).__pendingFocusSite;
        } else {
          timer = setTimeout(tryFocus, 150);
        }
      };
      timer = setTimeout(tryFocus, 150);
    }
    return () => {
      window.removeEventListener("focus-activity-site", handler);
      if (timer) clearTimeout(timer);
    };
  }, [map, markerRefs]);
  return null;
}

export default function ActivityMap({ sites, activities }: { sites: SlimSite[]; activities: SlimActivity[] }) {
  const markerRefs = useRef<Record<number, LeafletCircleMarker | null>>({});
  const levels = useMemo(() => ({ Inicial: "#18c5dc", Intermedio: "#0aa4c7", Avanzado: "#075a98" }), []);

  return (
    <MapContainer center={[40.2, -3.5]} zoom={5} scrollWheelZoom className="leaflet-map activity-leaflet-map">
      <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <FocusController markerRefs={markerRefs} />
      {sites.map(site => {
        const related = activities.filter(a => a.siteSlugs.includes(site.slug));
        return (
          <CircleMarker key={site.id} center={[site.lat, site.lng]} radius={10} pathOptions={{ color: "#fff", weight: 3, fillColor: levels[site.level], fillOpacity: 0.98 }} ref={instance => { markerRefs.current[site.id] = instance; }}>
            <Popup>
              <div className="activity-popup">
                <span className="popup-kicker">{site.region} · {site.level}</span>
                <strong>{site.name}</strong>
                <span>{site.destination}</span>
                <div className="activity-popup-meta"><span>◉ {site.depth}</span><span>◈ {site.type}</span></div>
                <div className="activity-popup-offers">
                  <b>{related.length ? "Experiencias relacionadas" : "Sin experiencia conectada todavía"}</b>
                  {related.map(activity => (
                    <div className="activity-popup-offer" key={activity.id}>
                      <Link href={"/actividades/" + activity.slug}>
                        <strong>{activity.title}</strong>
                        <small>{activity.type} · {activity.level} · {activity.duration}</small>
                      </Link>
                      {activity.offers.map(booking => (
                        <div className="activity-popup-booking" key={booking.id}>
                          <span>{booking.priceFrom !== undefined ? <>Desde <b>{formatOfferPrice(booking)}</b></> : <>Precio por confirmar</>} · {booking.provider}</span>
                          <a href={booking.href} target="_blank" rel="sponsored noopener noreferrer" data-affiliate-provider={booking.provider} data-activity-id={activity.id}>Reservar ↗</a>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                <Link href={"/actividades/#site=" + encodeURIComponent(site.slug)} className="popup-action">Ver todas las actividades de este punto →</Link>
              </div>
            </Popup>
          </CircleMarker>
        );
      })}
    </MapContainer>
  );
}
