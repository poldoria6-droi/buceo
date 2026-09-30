import Link from "next/link";
import { notFound } from "next/navigation";
import { activities } from "@/data/activities";
import { diveSites } from "@/data/dive-sites";

type Props={params:Promise<{slug:string}>};

export function generateStaticParams(){return activities.map(activity=>({slug:activity.slug}));}

export async function generateMetadata({params}:Props){
  const {slug}=await params;
  const activity=activities.find(item=>item.slug===slug);
  if(!activity)return{};
  return{
    title:`${activity.title} | Buceo Atlas`,
    description:`${activity.title}. Consulta duración, nivel, qué incluye, cancelación y proveedor antes de reservar.`
  };
}

export default async function ActivityPage({params}:Props){
  const {slug}=await params;
  const activity=activities.find(item=>item.slug===slug);
  if(!activity)notFound();

  const linkedSites=diveSites.filter(site=>activity.siteSlugs.includes(site.slug));

  return <section className="section">
    <div className="container">
      <Link href="/actividades" className="back-link">← Todas las actividades</Link>
      <div className="activity-detail-hero">
        <div>
          <span className="eyebrow">{activity.type} · {activity.destination}</span>
          <h1>{activity.title}</h1>
          <p className="lead">Ficha de una actividad publicada por un proveedor externo. Atlas reúne la información de decisión y te lleva al proveedor para comprobar precio, disponibilidad y reservar.</p>
          <div className="activity-detail-badges">
            <span>{activity.level}</span><span>{activity.duration}</span>{activity.rating&&<span>★ {activity.rating} · {activity.reviewCount||0} opiniones</span>}
          </div>
        </div>
        <div className="activity-detail-provider">
          <span className="eyebrow">PROVEEDOR</span>
          <strong>{activity.provider}</strong>
          <a href={activity.providerUrl} target="_blank" rel="sponsored noopener noreferrer" className="button button-primary">Comprobar disponibilidad ↗</a>
        </div>
      </div>

      <div className="activity-detail-grid">
        <main>
          {activity.notes&&<div className="notice-card"><strong>Sobre esta actividad</strong><p>{activity.notes}</p></div>}
          <h2>Qué incluye</h2>
          {activity.included?.length ? <div className="check-grid">{activity.included.map(item=><span key={item}>✓ {item}</span>)}</div> : <p>Consulta el detalle actualizado en el proveedor antes de reservar.</p>}

          <h2>Datos de decisión</h2>
          <div className="guide-grid">
            {activity.maxDepth&&<article className="guide-card"><span className="eyebrow">PROFUNDIDAD</span><h3>{activity.maxDepth}</h3><p>Profundidad máxima indicada en la ficha pública consultada.</p></article>}
            {activity.minAge&&<article className="guide-card"><span className="eyebrow">EDAD MÍNIMA</span><h3>Desde {activity.minAge} años</h3><p>Comprueba las condiciones actuales del proveedor.</p></article>}
            {activity.cancellation&&<article className="guide-card"><span className="eyebrow">CANCELACIÓN</span><h3>Condiciones del proveedor</h3><p>{activity.cancellation}</p></article>}
            {activity.meetingPoint&&<article className="guide-card"><span className="eyebrow">PUNTO DE ENCUENTRO</span><h3>{activity.meetingPoint}</h3><p>Confirma la dirección y hora indicada para tu fecha.</p></article>}
          </div>

          <h2>Relacionado con el mapa de Atlas</h2>
          <div className="guide-grid">
            {linkedSites.map(site=><article className="guide-card" key={site.slug}>
              <span className="eyebrow">{site.region}</span><h3>{site.name}</h3><p>{site.highlight}</p>
              <Link href={"/mapa?q="+encodeURIComponent(site.name)} className="text-link">Ver punto en el mapa →</Link>
            </article>)}
          </div>

          <div className="cta-section">
            <div className="cta-panel">
              <div><span className="eyebrow">SIGUIENTE PASO</span><h2>Comprueba precio y plazas</h2><p>La disponibilidad y el precio final se consultan directamente en el proveedor.</p></div>
              <a href={activity.providerUrl} target="_blank" rel="sponsored noopener noreferrer" className="button button-primary">Ir a {activity.provider} ↗</a>
            </div>
          </div>
        </main>
      </div>

      <p className="data-note">Fuente: página pública del proveedor consultada el 30/09/2026. Los datos comerciales pueden cambiar; comprueba siempre las condiciones finales antes de reservar.</p>
    </div>
  </section>;
}
