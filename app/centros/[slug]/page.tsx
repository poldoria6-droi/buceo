import Link from "next/link";
import { notFound } from "next/navigation";
import { centers } from "@/data/centers";
import { diveSites } from "@/data/dive-sites";
import { getCenterActivities } from "@/lib/centers";
import { BookingOptions } from "@/components/BookingOptions";

type Props = { params: Promise<{ slug: string }>; searchParams: Promise<{type?:string}> };
export function generateStaticParams() { return centers.map(center => ({ slug: center.slug })); }
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const center = centers.find(item => item.slug === slug);
  return center ? { title: `${center.name} · Actividades y reservas | Buceo Atlas`, description: `Descubre las actividades de ${center.name} en ${center.location} y consulta sus opciones de reserva.` } : {};
}

export default async function CenterPage({ params, searchParams }: Props) {
  const { slug } = await params;
  const center = centers.find(item => item.slug === slug);
  if (!center) notFound();
  const activities = getCenterActivities(center.id);
  const selectedType = (await searchParams).type;
  const types = Array.from(new Set(activities.map(a => a.type))).sort();
  const visibleActivities = selectedType ? activities.filter(a => a.type === selectedType) : activities;
  const sites = diveSites.filter(site => center.siteSlugs.includes(site.slug));
  return <section className="section"><div className="container">
    <Link className="back-link" href="/centros">← Todos los centros</Link>
    <span className="eyebrow">CENTRO DE BUCEO · {center.region}</span>
    <h1>{center.name}</h1><p className="lead">{center.location}</p>
    {center.rating && <p>★ {center.rating.value}/{center.rating.scale} · {center.rating.count} opiniones · <a href={center.rating.sourceUrl} target="_blank" rel="noopener noreferrer">Fuente de la valoración</a></p>}
    <p>{center.description}</p>
    <a className="button button-primary" href="#actividades">Ver sus {activities.length} actividades ↓</a>
    <h2>Qué ofrece el centro</h2><div className="check-grid">{center.services.map(service => <span key={service}>✓ {service}</span>)}</div>
    <h2>Puntos de buceo donde opera</h2>
    {sites.length ? <ul>{sites.map(site => <li key={site.slug}><Link href={`/mapa?q=${encodeURIComponent(site.name)}`}>{site.name}</Link></li>)}</ul> : <p>Consulta el punto de encuentro y la zona de la actividad en cada oferta. Aún no tenemos puntos de inmersión confirmados para este centro.</p>}
    <section id="actividades" className="center-activities"><h2>Actividades y opciones de reserva</h2>
      <p>Elige una experiencia. La disponibilidad para tus fechas y el pago se confirman en el proveedor externo.</p>
      <nav className="activity-intents" aria-label="Tipo de actividad de la escuela"><Link href={`/centros/${center.slug}#actividades`}>Todas ({activities.length})</Link>{types.map(type=><Link key={type} href={`/centros/${center.slug}?type=${encodeURIComponent(type)}#actividades`}>{type}</Link>)}</nav>
      <div className="guide-grid">{visibleActivities.map(activity => <article className="guide-card" key={activity.slug}>
        <span className="eyebrow">{activity.type}</span><h3><Link href={`/actividades/${activity.slug}`}>{activity.title}</Link></h3>
        <p>{activity.audience} · {activity.level}</p><p>{activity.duration} · {activity.destination}</p>
        <Link className="text-link" href={`/actividades/${activity.slug}`}>Ver actividad →</Link>
        <BookingOptions activity={activity} officialUrl={center.officialUrl}/>
      </article>)}</div>
      {!visibleActivities.length && <><p>Este centro todavía no tiene actividades publicadas en Atlas.</p>{center.officialUrl && /^https?:\/\//i.test(center.officialUrl) && <a href={center.officialUrl} target="_blank" rel="noopener noreferrer">Visitar web del centro ↗</a>}</>}
    </section>
    <p className="data-note">Algunas reservas pueden generar una comisión para Atlas. Los precios «desde» corresponden a cada oferta y pueden cambiar.</p>
    <details><summary>Fuentes de información · revisado {center.checkedAt}</summary><ul>{center.sources.map((source, i) => <li key={source}><a href={source} target="_blank" rel="noopener noreferrer">Fuente {i + 1}</a></li>)}</ul></details>
  </div></section>;
}
