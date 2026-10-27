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
import { communityFor } from "@/lib/activity-filters";
import {
  getDestinationsForActivity,
  getGuidesForActivity,
  getSpeciesForActivity,
  rotateSlice,
} from "@/lib/internal-links";

type Props = { params: Promise<{ slug: string }> };

// Títulos que se repiten entre ofertas distintas (mismo nombre comercial en el proveedor):
// se desambiguan con la referencia interna para que cada URL tenga un <title> único.
const titleCounts = activities.reduce<Record<string, number>>((acc, item) => {
  acc[item.title] = (acc[item.title] || 0) + 1;
  return acc;
}, {});

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
  const isDuplicatedTitle = titleCounts[activity.title] > 1;
  const uniqueTitle = isDuplicatedTitle ? `${activity.title} (ref. ${activity.id})` : activity.title;
  return {
    title: `${uniqueTitle} · Precios y Reserva`,
    description: `${activity.title} en ${activity.destination} (${activity.region}). Nivel: ${activity.level}, duración: ${activity.duration}. Precios${priceSnippet}, qué incluye y opciones de reserva online.${isDuplicatedTitle ? ` Ref. ${activity.id}.` : ""}`,
    alternates: {
      canonical: `/actividades/${slug}`,
    },
    openGraph: {
      title: `${uniqueTitle} | Buceo Atlas`,
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

  const actCommunity = communityFor(activity.region);
  const sameAreaActivities = activities.filter(
    (item) =>
      item.destination === activity.destination ||
      item.region === activity.region ||
      communityFor(item.region) === actCommunity
  );
  const areaIndex = Math.max(0, sameAreaActivities.findIndex((item) => item.slug === activity.slug));
  const relatedActivities = rotateSlice(
    sameAreaActivities.filter((item) => item.slug !== activity.slug),
    areaIndex,
    6
  );

  const matchedDestinations = getDestinationsForActivity(activity);
  const matchedSpecies = getSpeciesForActivity(activity);
  const recommendedGuides = getGuidesForActivity(activity);

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
            <span className="eyebrow">RESERVA ONLINE GARANTIZADA</span>
            {lowest && (
              <div className="activity-hero-price-summary">
                <small>Tarifa oficial desde</small>
                <strong>{formatOfferPrice(lowest)}</strong>
                <span>por persona · sin comisiones añadidas</span>
              </div>
            )}
            <ul className="booking-trust-list">
              <li>✓ Mismo precio que reservando en el centro</li>
              <li>✓ Instructor certificado y seguro incluidos</li>
              <li>✓ Consulta fechas disponibles antes de pagar</li>
            </ul>
            <BookingOptions activity={activity} officialUrl={center?.officialUrl} />
          </div>
        </div>

        <div className="activity-detail-grid">
          <div className="activity-detail-main">
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
                      <Link href={`/actividades/#mapa&site=${encodeURIComponent(site.slug)}`} className="text-link">
                        Ver punto en el mapa →
                      </Link>
                    </article>
                  ))}
                </div>
              </>
            )}

            <div className="cta-section" style={{ paddingBottom: relatedActivities.length ? "2rem" : undefined }}>
              <div className="cta-panel activity-booking-cta">
                <div>
                  <span className="eyebrow">RESERVA ONLINE · PRECIO OFICIAL</span>
                  <h2>Consulta fechas y disponibilidad en {activity.destination}</h2>
                  <p>
                    Elige tu día en el calendario oficial de la escuela (vía {(lowest || offers[0])?.provider || "proveedor autorizado"}), sin comisiones adicionales.
                  </p>
                </div>
                <div className="activity-booking-cta-actions">
                  {offers.map((offer) => (
                    <a
                      key={offer.id}
                      href={buildAffiliateUrl(offer)}
                      target="_blank"
                      rel="sponsored noopener noreferrer"
                      title={`Consultar fechas y reservar en ${offer.provider} (enlace de afiliado)`}
                      data-affiliate-provider={offer.provider}
                      data-activity-id={activity.id}
                      className="button button-primary"
                    >
                      Ver fechas y reservar {offer.priceFrom ? `(desde ${formatOfferPrice(offer)})` : ""} ↗
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {relatedActivities.length > 0 && (
              <section style={{ marginBottom: "2.5rem" }}>
                <h2>Otras experiencias recomendadas en {activity.destination} y {actCommunity}</h2>
                <div className="guide-grid">
                  {relatedActivities.map((rel) => (
                    <article className="guide-card" key={rel.slug}>
                      <span className="eyebrow">
                        {rel.type} · {rel.destination}
                      </span>
                      <h3>
                        <Link href={`/actividades/${rel.slug}`}>{rel.title}</Link>
                      </h3>
                      <p>
                        Nivel {rel.level} · {rel.duration}
                      </p>
                      <Link className="text-link" href={`/actividades/${rel.slug}`}>
                        Ver detalles y qué incluye →
                      </Link>
                      <BookingOptions activity={rel} />
                    </article>
                  ))}
                </div>
              </section>
            )}

            {matchedDestinations.length > 0 && (
              <section style={{ marginBottom: "2.5rem" }}>
                <h2>Guías de destino y zonas de buceo cercanas</h2>
                <div className="guide-grid">
                  {matchedDestinations.map((dest) => (
                    <article className="guide-card" key={dest.slug}>
                      <span className="eyebrow">{dest.region} · {dest.sites} puntos</span>
                      <h3>
                        <Link href={`/buceo/${dest.slug}`}>Buceo en {dest.name}</Link>
                      </h3>
                      <p>Especies habituales: {dest.animals.slice(0, 4).join(", ")}.</p>
                      <Link href={`/buceo/${dest.slug}`} className="text-link">
                        Ver guía de buceo y precios en {dest.name} →
                      </Link>
                    </article>
                  ))}
                </div>
              </section>
            )}

            {matchedSpecies.length > 0 && (
              <section style={{ marginBottom: "2.5rem" }}>
                <h2>Fauna marina habitual en las inmersiones de la zona</h2>
                <div className="hero-tags" style={{ marginTop: "0.75rem" }}>
                  {matchedSpecies.map((sp) => (
                    <Link key={sp.slug} href={`/fauna/${sp.slug}`} style={{ textDecoration: "none" }}>
                      <span>🐠 {sp.name} ({sp.scientificName}) →</span>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {recommendedGuides.length > 0 && (
              <section style={{ marginBottom: "2rem" }}>
                <h2>Guías prácticas antes de tu inmersión</h2>
                <div className="guide-grid">
                  {recommendedGuides.map((g) => (
                    <article className="guide-card" key={g.slug}>
                      <span className="eyebrow">{g.tag}</span>
                      <h3>
                        <Link href={`/guias/${g.slug}`}>{g.title}</Link>
                      </h3>
                      <p>{g.description}</p>
                      <Link href={`/guias/${g.slug}`} className="text-link">
                        {g.ctaLabel}
                      </Link>
                    </article>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>

        <p className="data-note">
          Los precios «desde» son orientativos y pueden variar según temporada, modalidad o número de participantes. Confirma siempre el importe final y las condiciones antes de completar tu reserva.
        </p>

        {offers.length > 0 && (
          <div className="mobile-sticky-booking" role="region" aria-label="Reserva rápida en móvil">
            <div className="mobile-sticky-booking-price">
              <small>Precio oficial · Vía {(lowest || offers[0]).provider}</small>
              <strong>{lowest ? `Desde ${formatOfferPrice(lowest)}` : "Consultar"}</strong>
            </div>
            <a
              href={buildAffiliateUrl(lowest || offers[0])}
              target="_blank"
              rel="sponsored noopener noreferrer"
              title={`Consultar fechas y reservar en ${(lowest || offers[0]).provider} (enlace de afiliado)`}
              data-affiliate-provider={(lowest || offers[0]).provider}
              data-activity-id={activity.id}
              className="button button-primary mobile-sticky-booking-btn"
            >
              Ver fechas y reservar ↗
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
