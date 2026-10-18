"use client";
import Link from "next/link";
import { useEffect, useMemo } from "react";
import { MapContainer, TileLayer, CircleMarker, Popup, useMap } from "react-leaflet";
import type { Species } from "@/data/species";

function Bounds({ points }: { points: [number, number][] }) {
  const map = useMap();
  useEffect(() => {
    if (points.length) {
      map.fitBounds(points, { padding: [40, 40], maxZoom: 9 });
    } else {
      map.setView([38.5, -3.5], 5);
    }
  }, [map, points]);
  return null;
}

export default function SpeciesMap({ item, allSpecies }: { item?: Species; allSpecies?: Species[] }) {
  const groupedZones = useMemo(() => {
    if (item || !allSpecies?.length) return [];
    const map = new Map<
      string,
      {
        name: string;
        region: string;
        basin: string;
        lat: number;
        lng: number;
        precision: "Zona" | "Punto";
        speciesList: { slug: string; name: string; scientificName: string }[];
      }
    >();
    for (const s of allSpecies) {
      for (const o of s.occurrences) {
        const key = `${o.lat.toFixed(3)},${o.lng.toFixed(3)}`;
        const existing = map.get(key);
        if (existing) {
          if (!existing.speciesList.some((sp) => sp.slug === s.slug)) {
            existing.speciesList.push({ slug: s.slug, name: s.name, scientificName: s.scientificName });
          }
        } else {
          map.set(key, {
            name: o.name,
            region: o.region,
            basin: o.basin,
            lat: o.lat,
            lng: o.lng,
            precision: o.precision,
            speciesList: [{ slug: s.slug, name: s.name, scientificName: s.scientificName }],
          });
        }
      }
    }
    return Array.from(map.values());
  }, [item, allSpecies]);

  const points = useMemo<[number, number][]>(() => {
    if (item) {
      return item.occurrences.map((o) => [o.lat, o.lng]);
    }
    return groupedZones.map((z) => [z.lat, z.lng]);
  }, [item, groupedZones]);

  return (
    <MapContainer center={[38.5, -3.5]} zoom={5} className="leaflet-map activity-leaflet-map">
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Bounds points={points} />
      {item
        ? item.occurrences.map((o) => (
            <CircleMarker
              key={`${item.slug}-${o.name}`}
              center={[o.lat, o.lng]}
              radius={o.precision === "Zona" ? 12 : 9}
              pathOptions={{ color: "#fff", fillColor: "#06798a", fillOpacity: 0.85 }}
            >
              <Popup>
                <strong>
                  {item.name} · {o.name}
                </strong>
                <p>
                  {o.precision} documentada · {o.region} ({o.basin})
                </p>
                <p>{o.note}</p>
                <a href={o.sourceUrl} target="_blank" rel="noopener noreferrer">
                  Fuente de referencia ↗
                </a>
                <p>
                  <Link href={`/fauna/${item.slug}`}>Ver ficha de {item.name} →</Link>
                </p>
              </Popup>
            </CircleMarker>
          ))
        : groupedZones.map((z) => (
            <CircleMarker
              key={z.name}
              center={[z.lat, z.lng]}
              radius={Math.min(16, 8 + Math.floor(z.speciesList.length / 4))}
              pathOptions={{ color: "#fff", fillColor: "#06798a", fillOpacity: 0.85 }}
            >
              <Popup>
                <strong>{z.name}</strong>
                <p>
                  {z.region} · {z.basin} · {z.speciesList.length} especies documentadas
                </p>
                <p style={{ maxHeight: "130px", overflowY: "auto", margin: "6px 0" }}>
                  {z.speciesList.map((sp, i) => (
                    <span key={sp.slug}>
                      {i > 0 ? " · " : ""}
                      <Link href={`/fauna/${sp.slug}`}>{sp.name}</Link>
                    </span>
                  ))}
                </p>
                <p>
                  <Link href="/fauna">Ver guía completa de fauna marina →</Link>
                </p>
              </Popup>
            </CircleMarker>
          ))}
    </MapContainer>
  );
}
