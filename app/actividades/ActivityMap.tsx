"use client";

import Link from "next/link";
import { buildAffiliateUrl, formatOfferPrice, getBookingOffers } from "@/lib/affiliate";
import { useEffect, useRef, useMemo } from "react";
import { CircleMarker, MapContainer, Popup, TileLayer, useMap } from "react-leaflet";
import type { DiveSite } from "@/data/dive-sites";
import type { Activity } from "@/data/types";
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
          <CircleMarker key={site.id} center={[site.lat, site.lng]} radius={10} pathOptions={{ color: "#fff", weight: 3, fillColor: levels[site.level], fillOpacity: 0.98 }} ref={instance => { markerRefs.current[site.id] = instance; }}>
            <Popup>
              <div className="activity-popup">
                <span className="popup-kicker">{site.region} · {site.level}</span>
                <strong>{site.name}</strong>
                <span>{site.destination}</span>
                <div className="activity-popup-meta"><span>◉ {site.depth}</span><span>◈ {site.type}</span></div>
                <div className="activity-popup-offers">
                  <b>{offers.length ? "Experiencias relacionadas" : "Sin experiencia conectada todavía"}</b>
                  {offers.map(offer => {
                    const bookingOffers=getBookingOffers(offer);
                    return (
                      <div className="activity-popup-offer" key={offer.id}>
                        <Link href={"/actividades/" + offer.slug}>
                          <strong>{offer.title}</strong>
                          <small>{offer.type} · {offer.level} · {offer.duration}</small>
                        </Link>
                        {bookingOffers.map(booking=>(
                          <div className="activity-popup-booking" key={booking.id}>
                            <span>{booking.priceFrom!==undefined ? <>Desde <b>{formatOfferPrice(booking)}</b></> : <>Precio por confirmar</>} · {booking.provider}</span>
                            <a href={buildAffiliateUrl(booking)} target="_blank" rel="sponsored noopener noreferrer" data-affiliate-provider={booking.provider} data-activity-id={offer.id}>Reservar ↗</a>
                          </div>
                        ))}
                      </div>
                    );
                  })}
                </div>
                <Link href={"/actividades?site=" + encodeURIComponent(site.slug)} className="popup-action">Ver todas las actividades de este punto →</Link>
              </div>
            </Popup>
          </CircleMarker>
        );
      })}
    </MapContainer>
  );
}

