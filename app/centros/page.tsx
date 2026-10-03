import Link from "next/link";
import { centers } from "@/data/centers";
import { getCenterActivities } from "@/lib/centers";

export const metadata = { title: "Centros de buceo y sus actividades | Buceo Atlas" };
export default async function CentersPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const params = await searchParams;
  const normalize = (value: string) => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  const q = typeof params.q === "string" ? params.q.trim() : "";
  const matches = centers.filter(center => normalize(`${center.name} ${center.location} ${center.region}`).includes(normalize(q)));
  return <section className="section"><div className="container"><h1>Centros de buceo</h1><p>Conoce quién organiza tu experiencia y encuentra sus actividades y opciones de reserva.</p>
    <form className="center-search" action="/centros"><label htmlFor="center-query">Centro o localidad</label><input id="center-query" name="q" defaultValue={q} placeholder="Nombre del centro o destino"/><button className="button button-primary" type="submit">Buscar centros</button>{q && <Link href="/centros">Limpiar búsqueda</Link>}</form>
    <p>{matches.length} centros · Catálogo en ampliación</p><div className="guide-grid">{matches.map(center => <article className="guide-card" key={center.id}><span className="eyebrow">{center.location}</span><h2>{center.name}</h2><p>{getCenterActivities(center.id).length} actividades vinculadas</p><Link className="button button-primary" href={`/centros/${center.slug}`}>Ver centro y actividades →</Link></article>)}</div>
    {!matches.length && <p>No hay centros publicados que coincidan. Puedes <Link href="/actividades">explorar todas las actividades</Link>.</p>}
  </div></section>;
}
