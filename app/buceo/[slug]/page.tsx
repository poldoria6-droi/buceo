import Link from "next/link";
import { notFound } from "next/navigation";
import { destinations, diveSites } from "@/data/dive-sites";
import { SiteCard } from "@/components/SiteCard";
type Props={params:Promise<{slug:string}>};
export function generateStaticParams(){return destinations.map(destination=>({slug:destination.slug}));}
export async function generateMetadata({params}:Props){const {slug}=await params;const destination=destinations.find(item=>item.slug===slug);if(!destination)return{};return{title:`Buceo en ${destination.name}`,description:`Puntos de buceo, fauna y lugares destacados de ${destination.name}. Explora el mapa y descubre el destino.`};}
export default async function DestinationPage({params}:Props){const {slug}=await params;const destination=destinations.find(item=>item.slug===slug);const sites=diveSites.filter(site=>site.destinationSlug===slug);if(!destination||sites.length===0)notFound();const animals=Array.from(new Set(sites.flatMap(site=>site.animals)));return <>
<section className="destination-hero"><div className="container"><Link href="/destinos" className="back-link">← Todos los destinos</Link><span className="eyebrow">{destination.region} · {sites.length} puntos</span><h1>Buceo en {destination.name}</h1><p>Descubre puntos de inmersión, niveles, tipo de fondo y fauna que puedes buscar. Esta V1 es una base editorial inicial y se irá reforzando con datos verificados de centros y proveedores.</p><div className="hero-tags">{animals.slice(0,8).map(animal=><span key={animal}>{animal}</span>)}</div></div></section>
<section className="section"><div className="container"><div className="section-heading"><div><span className="eyebrow">PUNTOS</span><h2>Dónde bucear</h2></div><Link href="/mapa" className="text-link">Abrir mapa completo →</Link></div><div className="cards-grid">{sites.map(site=><SiteCard key={site.id} site={site}/>)}</div></div></section>
<section className="section section-soft"><div className="container editorial-grid"><div><span className="eyebrow">FAUNA</span><h2>Qué puedes buscar bajo el agua</h2><p>La fauna es indicativa y puede variar según zona, temporada, condiciones y profundidad. En la versión comercial, esta información se validará con operadores y fuentes primarias.</p></div><div className="fauna-cloud">{animals.map(animal=><span key={animal}>{animal}</span>)}</div></div></section>

</>;}
