import { activityDetails } from "@/data/activity-details";
import { getActivityCenter } from "@/lib/centers";
import { BookingOptions } from "@/components/BookingOptions";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildActivityJsonLd } from "@/lib/seo";
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
  const offers=getBookingOffers(activity);
  const lowest=getLowestPricedOffer(offers);
  const priceSnippet=lowest ? ` desde ${formatOfferPrice(lowest)}` : "";
  return{
    title:`${activity.title} · Precios y Reserva`,
    description:`${activity.title} en ${activity.destination} (${activity.region}). Nivel: ${activity.level}, duración: ${activity.duration}. Precios${priceSnippet}, qué incluye y reserva online con proveedor oficial.`,
    alternates:{
      canonical:`/actividades/${slug}`,
    },
    openGraph:{
      title:`${activity.title} | Buceo Atlas`,
      description:`${activity.title} en ${activity.destination}. Consulta opciones de reserva, qué incluye y centros organizadores.`,
      url:`/actividades/${slug}`,
      type:"website",
    }
  };
}

export default async function ActivityPage({params}:Props){
  const {slug}=await params;
  const activity=activities.find(item=>item.slug===slug);
  if(!activity)notFound();

  const detail = activityDetails[activity.slug];
  const center = getActivityCenter(activity);
  const linkedSites=diveSites.filter(site=>activity.siteSlugs.includes(site.slug));
  const offers=getBookingOffers(activity);
  const lowest=getLowestPricedOffer(offers);
  const activityJsonLd = buildActivityJsonLd(activity, offers, center);

  return <section className="section">
    <div className="container">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(activityJsonLd) }}
      />
      <Breadcrumbs
        items={[
          { name: "Actividades", path: "/actividades" },
          { name: activity.title, path: `/actividades/${activity.slug}` },
        ]}
      />
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
          <BookingOptions activity={activity} officialUrl={center?.officialUrl}/>
        </div>
      </div>

      <div className="activity-detail-grid">
        <main>
          <section className="notice-card"><h2>Sobre esta actividad</h2><p>{detail?.summary || activity.notes || activity.title}</p>{detail && <p className="data-note">Organizador y datos contrastados con la oferta el {detail.checkedAt}. <a href={detail.sourceUrl} target="_blank" rel="noopener noreferrer">Consultar la fuente</a></p>}</section>
          <section className="notice-card" aria-label="Centro organizador">
            <h2>Centro que ofrece esta actividad</h2>
            {center ? <><h3>{center.name}</h3><p>{center.location}</p><Link className="button button-primary" href={`/centros/${center.slug}`}>Ver centro y todas sus actividades →</Link></> : <p>Centro organizador pendiente de confirmar en Atlas. Consulta su identidad en la oferta del proveedor.</p>}
          </section>
          <h2>Qué incluye</h2>
          {(detail ? detail.included : activity.included)?.length ? <><div className="check-grid">{(detail ? detail.included : activity.included)!.map(item=><span key={item}>✓ {item}</span>)}</div><p className="data-note">Resumen de servicios identificados. Revisa en la oferta el alcance exacto y los posibles suplementos.</p></> : <p>Consulta el desglose de esta oferta en el proveedor; todavía no hemos completado su resumen en Atlas.</p>}
          {detail?.excluded.length ? <section className="notice-card"><h2>No incluido en la oferta</h2><ul>{detail.excluded.map(item=><li key={item}>{item}</li>)}</ul><p>Comprueba con la escuela cómo obtenerlo y si supone un coste adicional.</p></section> : null}
          {detail?.needsInclusionReview && <p>La oferta contiene excepciones o extras. Consulta su desglose completo antes de reservar.</p>}
          {detail?.facts.length ? <section><h2>Información de la oferta</h2><div className="guide-grid">{detail.facts.map(fact=><article className="guide-card" key={fact.label}><h3>{fact.label}</h3><p>{fact.value}</p></article>)}</div></section> : null}

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

