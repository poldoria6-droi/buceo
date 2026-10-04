"use client";
import Link from "next/link";
import { useEffect } from "react";
import { MapContainer, TileLayer, CircleMarker, Popup, useMap } from "react-leaflet";
import type { Species } from "@/data/species";
function Bounds({item}:{item?:Species}){const map=useMap();useEffect(()=>{if(item?.occurrences.length)map.fitBounds(item.occurrences.map(o=>[o.lat,o.lng] as [number,number]),{padding:[40,40],maxZoom:10});else map.setView([40.2,-3.5],5);},[map,item]);return null;}
export default function SpeciesMap({item}:{item?:Species}){return <MapContainer center={[40.2,-3.5]} zoom={5} className="leaflet-map activity-leaflet-map"><TileLayer attribution='&copy; OpenStreetMap contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/><Bounds item={item}/>{item?.occurrences.map(o=><CircleMarker key={o.name} center={[o.lat,o.lng]} radius={o.precision==="Zona"?14:8} pathOptions={{color:"#fff",fillColor:"#06798a",fillOpacity:.8}}><Popup><strong>{item.name} · {o.name}</strong><p>{o.precision} documentada · {o.region}</p><p>{o.note}</p><a href={o.sourceUrl} target="_blank" rel="noopener noreferrer">Ver evidencia</a><p><Link href={`/fauna/${item.slug}`}>Ver ficha de la especie →</Link></p></Popup></CircleMarker>)}</MapContainer>;}
