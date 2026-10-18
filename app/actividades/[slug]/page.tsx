import { activityDetails } from "@/data/activity-details";
import { getActivityCenter } from "@/lib/centers";
import { BookingOptions } from "@/components/BookingOptions";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildActivityJsonLd } from "@/lib/seo";
import Link from "next/link";
import { buildAffiliateUrl, formatOfferPrice, getBookingOffers, getLowestPricedOffer } from "@/lib/affiliate";
import { notFound } from "next/navigation";
import { activities } from "@/data/activities";
import { diveSites } from "@/data/dive-sites";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return activities.map((activity) => ({ slug: activity.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const activity = activities.find((item) => item.slug === slug);
  if (!activity) return {};
  const offers = getBookingOffers(activity);
  const lowest = getLowestPricedOffer(offers);
  const priceSnippet = lowest ? ` desde ${formatOfferPrice(lowest)}` : "";
  return {
    title: `${activity.title} · Precios y Reserva`,
    description: `${activity.title} en ${activity.destination} (${activity.region}). Nivel: ${activity.level}, duración: ${activity.duration}. Precios${priceSnippet}, qué incluye y opciones de reserva online.`,
    alternates: {
      canonical: `/actividades/${slug}`,
    },
    openGraph: {
      title: `${activity.title} | Buceo Atlas`,
      description: `${activity.title} en ${activity.destination}. Consulta opciones de reserva, qué incluye y centro organizador.`,
      url: `/actividades/${slug}`,
      type: "website",
    },
  };
}

export default async function ActivityPage({ params }: Props) {
  const { slug } = await params;
  const activity = activities.find((item) => item.slug === slug);
  if (!activity) notFound();

  const detail = activityDetails[activity.slug];
  const center = getActivityCenter(activity);
  const linkedSites = diveSites.filter((site) => activity.siteSlugs.includes(site.slug));
  const offers = getBookingOffers(activity);
  const lowest = getLowestPricedOffer(offers);
  const activityJsonLd = buildActivityJsonLd(activity, offers, center);

  return (
    <section className="section">
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
            <span className="eyebrow">
              {activity.type} · {activity.destination} ({activity.region})
            </span>
            <h1>{activity.title}</h1>
            <p className="lead">
              Consulta qué incluye esta experiencia en {activity.destination}, los requisitos de participación, el centro organizador y las opciones de reserva disponibles.
            </p>
            <div className="activity-detail-badges">
              <span>Nivel {activity.level}</span>
              <span>{activity.duration}</span>
              {activity.rating && (
                <span>
                  ★ {activity.rating} · {activity.reviewCount || 0} opiniones
                </span>
              )}
              {lowest && <span className="price-badge">Desde {formatOfferPrice(lowest)}</span>}
            </div>
          </div>
          <div className="activity-detail-provider">
            <span className="eyebrow">OPCIONES DE RESERVA</span>
            <BookingOptions activity={activity} officialUrl={center?.officialUrl} />
          </div>
        </div>

        <div className="activity-detail-grid">
          <main>
            <section className="notice-card">
              <h2>Descripción de la experiencia</h2>
              <p>{detail?.summary || activity.notes || activity.title}</p>
            </section>

            {center && (
              <section className="notice-card" aria-label="Centro organizador">
                <h2>Escuela o centro organizador</h2>
                <h3>{center.name}</h3>
                <p>{center.location} · {center.region}</p>
                <div style={{ marginTop: "0.85rem" }}>
                  <Link className="button button-primary" href={`/centros/${center.slug}`}>
                    Ver ficha de la escuela y sus actividades →
                  </Link>
                </div>
              </section>
            )}

            <h2>Qué incluye</h2>
            {(detail ? detail.included : activity.included)?.length ? (
              <div className="check-grid">
                {(detail ? detail.included : activity.included)!.map((item) => (
                  <span key={item}>✓ {item}</span>
                ))}
              </div>
            ) : (
              <p>Consulta el desglose detallado de servicios incluidos directamente en la ficha de reserva del proveedor.</p>
            )}

            {detail?.excluded.length ? (
              <section className="notice-card">
                <h2>No incluido en la tarifa base</h2>
                <ul>
                  {detail.excluded.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            ) : null}

            {detail?.facts.length ? (
              <section>
                <h2>Detalles operativos</h2>
                <div className="guide-grid">
                  {detail.facts.map((fact) => (
                    <article className="guide-card" key={fact.label}>
                      <h3>{fact.label}</h3>
                      <p>{fact.value}</p>
                    </article>
                  ))}
                </div>
              </section>
            ) : null}

            {(activity.maxDepth || activity.minAge || activity.cancellation || activity.meetingPoint) && (
              <>
                <h2>Requisitos y condiciones</h2>
                <div className="guide-grid">
                  {activity.maxDepth && (
                    <article className="guide-card">
                      <span className="eyebrow">PROFUNDIDAD</span>
                      <h3>{activity.maxDepth}</h3>
                      <p>Cota máxima orientativa indicada para esta actividad.</p>
                    </article>
                  )}
                  {activity.minAge && (
                    <article className="guide-card">
                      <span className="eyebrow">EDAD MÍNIMA</span>
                      <h3>Desde {activity.minAge} años</h3>
                      <p>Edad mínima habitual requerida por el operador.</p>
                    </article>
                  )}
                  {activity.cancellation && (
                    <article className="guide-card">
                      <span className="eyebrow">CANCELACIÓN</span>
                      <h3>Política aplicable</h3>
                      <p>{activity.cancellation}</p>
                    </article>
                  )}
                  {activity.meetingPoint && (
                    <article className="guide-card">
                      <span className="eyebrow">ENCUENTRO</span>
                      <h3>{activity.meetingPoint}</h3>
                      <p>Zona o punto de encuentro habitual de la actividad.</p>
                    </article>
                  )}
                </div>
              </>
            )}

            {linkedSites.length > 0 && (
              <>
                <h2>Puntos de inmersión en la zona</h2>
                <div className="guide-grid">
                  {linkedSites.map((site) => (
                    <article className="guide-card" key={site.slug}>
                      <span className="eyebrow">{site.region}</span>
                      <h3>{site.name}</h3>
                      <p>{site.highlight}</p>
                      <Link href={`/actividades?site=${encodeURIComponent(site.slug)}#mapa`} className="text-link">
                        Ver punto en el mapa →
                      </Link>
                    </article>
                  ))}
                </div>
              </>
            )}

            <div className="cta-section">
              <div className="cta-panel activity-booking-cta">
                <div>
                  <span className="eyebrow">RESERVA ONLINE</span>
                  <h2>Consulta disponibilidad y precios</h2>
                  <p>
                    Selecciona tu fecha y completa la reserva directamente en la plataforma del proveedor.
                  </p>
                </div>
                <div className="activity-booking-cta-actions">
                  {offers.map((offer) => (
                    <a
                      key={offer.id}
                      href={buildAffiliateUrl(offer)}
                      target="_blank"
                      rel="sponsored noopener noreferrer"
                      title={`Reservar en ${offer.provider} (enlace de afiliado)`}
                      className="button button-primary"
                    >
                      Reservar con {offer.provider} ↗
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </main>
        </div>

        <p className="data-note">
          Los precios «desde» son orientativos y pueden variar según temporada, modalidad o número de participantes. Confirma siempre el importe final y las condiciones antes de completar tu reserva.
        </p>
      </div>
    </section>
  );
}
