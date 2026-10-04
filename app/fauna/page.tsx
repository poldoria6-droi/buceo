import Link from "next/link";
import { species } from "@/data/species";
import { SpeciesCard } from "@/components/SpeciesCard";
export const metadata={title:"Fauna marina de España | Buceo Atlas",description:"Conoce especies marinas, hábitats y registros documentados. Fichas con fuentes e imágenes atribuidas."};
export default async function FaunaPage({searchParams}:{searchParams:Promise<{category?:string;region?:string;depth?:string}>}) {
  const params=await searchParams;
  const categories=Array.from(new Set(species.map(s=>s.category))).sort();
  const regions=Array.from(new Set(species.flatMap(s=>s.occurrences.map(o=>o.region)))).sort();
  const filtered=species.filter(s=>(!params.category||s.category===params.category)&&(!params.region||s.occurrences.some(o=>o.region===params.region))&&(!params.depth||(params.depth==="known"?!!s.depth:!s.depth)));
  return <section className="section"><div className="container"><span className="eyebrow">EXPLORAR Y APRENDER</span><h1>Fauna marina</h1><p className="lead">Conoce las especies y observa el mar con respeto. La reserva de experiencias sigue en <Link href="/actividades">Encuentra tu actividad</Link>.</p>
    <form className="center-search" action="/fauna"><label>Categoría <select name="category" defaultValue={params.category||""}><option value="">Todas</option>{categories.map(c=><option key={c}>{c}</option>)}</select></label><label>Zona documentada <select name="region" defaultValue={params.region||""}><option value="">Todas</option>{regions.map(c=><option key={c}>{c}</option>)}</select></label><label>Profundidad <select name="depth" defaultValue={params.depth||""}><option value="">Todos los registros</option><option value="known">Con rango biológico documentado</option><option value="unknown">Sin rango publicado en Atlas</option></select></label><button className="button button-primary">Filtrar</button><Link href="/fauna">Limpiar</Link></form>
    <p>{filtered.length} especies · Primera selección contrastada; catálogo en ampliación.</p><div className="guide-grid">{filtered.map(item=><SpeciesCard key={item.slug} item={item}/>)}</div>{!filtered.length&&<p>No hay fichas con esta combinación de filtros.</p>}
    <p className="data-note">Los registros históricos no garantizan avistamientos. No atribuimos una especie a todos los puntos de una comunidad autónoma. Los rangos biológicos no indican la profundidad recomendada para bucear.</p><Link className="button button-primary" href="/actividades#mapa">Explorar experiencias y especies en el mapa →</Link>
  </div></section>;
}
