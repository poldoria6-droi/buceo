import { BookingOptions } from "@/components/BookingOptions";
import Link from "next/link";
import { buildAffiliateUrl, formatOfferPrice, formatPriceCheckedAt, getBookingOffers, getLowestPricedOffer } from "@/lib/affiliate";
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
  const offers=getBookingOffers(activity);
  const lowest=getLowestPricedOffer(offers);

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
            {lowest&&<span className="price-badge">Desde {formatOfferPrice(lowest)}</span>}
          </div>
        </div>
        <div className="activity-detail-provider">
          <span className="eyebrow">OPCIONES DE RESERVA</span>
          <BookingOptions activity={activity}/>
        </div>
      </div>

      <div className="activity-detail-grid">
        <main>
          <section className="notice-card" aria-label="Centro u organizador">
            <h2>Centro / organizador</h2>
            {activity.operator ? <><h3>{activity.operator.name}</h3>{activity.operator.location&&<p>{activity.operator.location}</p>}<p>Organizador identificado en la oferta del proveedor.</p><a className="text-link" href={activity.operator.sourceUrl} target="_blank" rel="noopener noreferrer">Ver la oferta en {activity.provider} ↗</a></> : <p>El centro u organizador no está documentado todavía en Atlas. Consulta la identidad indicada por el proveedor antes de reservar.</p>}
          </section>

          <h2>Información de la actividad</h2>
          <div className="notice-card">
            <p><strong>Para quién:</strong> {activity.audience}</p>
            {activity.notes&&<p><strong>Información de la oferta:</strong> {activity.notes}</p>}
            {activity.tags.length>0&&<p><strong>Características:</strong> {activity.tags.join(" · ")}</p>}
          </div>

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
            <div className="cta-panel activity-booking-cta">
              <div><span className="eyebrow">SIGUIENTE PASO</span><h2>Compara y reserva</h2><p>Consulta el precio final, la disponibilidad y las condiciones directamente con cada proveedor.</p></div>
              <div className="activity-booking-cta-actions">
                {offers.map(offer=>(
                  <a key={offer.id} href={buildAffiliateUrl(offer)} target="_blank" rel="sponsored noopener noreferrer" className="button button-primary">{offer.provider} ↗</a>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>

      <p className="data-note">Los precios son orientativos y se muestran como “desde” cuando están registrados en Atlas. Pueden cambiar según fecha, número de personas, modalidad y disponibilidad. Comprueba siempre el importe final en el proveedor antes de reservar.</p>
    </div>
  </section>;
}

