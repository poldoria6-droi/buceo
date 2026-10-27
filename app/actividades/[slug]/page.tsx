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

function humanizeIncluded(item: string): string {
  return item
    .replace(/^Acompañamiento de personal de la actividad$/i, "Instructor o guía titulado")
    .replace(/^Material para la actividad \(consultar componentes\)$/i, "Equipo de buceo para la actividad")
    .replace(/^Cobertura de seguro \(consultar condiciones\)$/i, "Seguro durante la actividad")
    .replace(/^Uso de embarcación$/i, "Salida en barco")
    .replace(/^Práctica en agua confinada$/i, "Prácticas en aguas confinadas")
    .replace(/^Práctica en el mar$/i, "Inmersiones en mar abierto");
}

function humanizeExcluded(item: string): string {
  return item
    .replace(/\s*no incluido en esta oferta$/i, "")
    .replace(/\s*\(consultar si lo necesitas\)$/i, "");
}

function humanizeFact(fact: { label: string; value: string }): { label: string; value: string } {
  const label = fact.label
    .replace(/^Plazas anunciadas$/i, "Grupo")
    .replace(/^Duración indicada por el proveedor$/i, "Duración aproximada");
  const value = fact.value
    .replace(/\s*Confirma la composición del grupo para tu fecha\.?/i, "")
    .replace(/\s*Consulta el reparto de sesiones y el tiempo de inmersión\.?/i, "")
    .trim();
  return { label, value };
}

function buildHumanSummary(
  activity: (typeof activities)[number],
  centerName?: string
): string {
  if (
    activity.notes &&
    !/^Experiencia de buceo disponible|^Actividad organizada por /i.test(activity.notes)
  ) {
    return activity.notes;
  }
  const byCenter = centerName ? ` con el equipo de ${centerName}` : "";
  const hasRealDuration = activity.duration && activity.duration !== "Consultar disponibilidad";
  const durText = hasRealDuration ? ` Tiene una duración aproximada de ${activity.duration.toLowerCase()}.` : "";

  if (activity.type === "Bautismo") {
    return `Primera toma de contacto con el buceo en ${activity.destination} (${activity.region})${byCenter}. Comienza con una explicación práctica fuera del agua y continúa con una inmersión guiada a poca profundidad, pensada para disfrutar del fondo marino con calma y sin necesidad de experiencia previa.${durText}`;
  }
  if (activity.type === "Curso") {
    return `Formación práctica y teórica en ${activity.destination} (${activity.region})${byCenter} para aprender o perfeccionar tus técnicas de inmersión y obtener tu certificación.${durText}`;
  }
  if (activity.type === "Snorkel") {
    return `Recorrido guiado de snorkel en aguas de ${activity.destination} (${activity.region})${byCenter}, ideal para observar la vida marina desde superficie sin necesidad de titulación previa.${durText}`;
  }
  if (activity.type === "Pecio") {
    return `Salida de inmersión en ${activity.destination} (${activity.region})${byCenter} orientada a buceadores acreditados que buscan explorar fondos profundos o barcos hundidos de la zona.${durText}`;
  }
  return `Salida de inmersión guiada en ${activity.destination} (${activity.region})${byCenter} para descubrir los fondos y la vida marina de la zona.${durText}`;
}
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
            <div className="activity-detail-badges" style={{ marginTop: "1rem" }}>
              <span>Nivel {activity.level}</span>
              {activity.duration && activity.duration !== "Consultar disponibilidad" && (
                <span>{activity.duration}</span>
              )}
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
            {lowest && (
              <div className="activity-hero-price-summary">
                <small>Precio desde</small>
                <strong>{formatOfferPrice(lowest)}</strong>
                <span>por persona</span>
              </div>
            )}
            <BookingOptions activity={activity} officialUrl={center?.officialUrl} />
          </div>
        </div>

        <div className="activity-detail-grid">
          <div className="activity-detail-main">
            <section className="notice-card">
              <h2>Descripción de la experiencia</h2>
              <p>{buildHumanSummary(activity, center?.name)}</p>
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
                  <span key={item}>✓ {humanizeIncluded(item)}</span>
                ))}
              </div>
            ) : (
              <p>El equipamiento y los servicios incluidos se detallan al seleccionar tu fecha en la reserva.</p>
            )}

            {detail?.excluded.length ? (
              <section className="notice-card">
                <h2>No incluido en la tarifa base</h2>
                <ul>
                  {detail.excluded.map((item) => (
                    <li key={item}>{humanizeExcluded(item)}</li>
                  ))}
                </ul>
              </section>
            ) : null}

            {detail?.facts.length ? (
              <section>
                <h2>Detalles operativos</h2>
                <div className="guide-grid">
                  {detail.facts.map((rawFact) => {
                    const fact = humanizeFact(rawFact);
                    return (
                      <article className="guide-card" key={rawFact.label}>
                        <h3>{fact.label}</h3>
                        <p>{fact.value}</p>
                      </article>
                    );
                  })}
                </div>
              </section>
            ) : null}

            {(activity.maxDepth || activity.minAge || activity.cancellation || activity.meetingPoint) && (
              <>
                <h2>Requisitos y condiciones</h2>
                <div className="guide-grid">
                  {activity.maxDepth && (
                    <article className="guide-card">
                      <span className="eyebrow">PROFUNDIDAD MÁXIMA</span>
                      <h3>{activity.maxDepth}</h3>
                    </article>
                  )}
                  {activity.minAge && (
                    <article className="guide-card">
                      <span className="eyebrow">EDAD MÍNIMA</span>
                      <h3>Desde {activity.minAge} años</h3>
                    </article>
                  )}
                  {activity.cancellation && (
                    <article className="guide-card">
                      <span className="eyebrow">CANCELACIÓN</span>
                      <h3>Condiciones</h3>
                      <p>{activity.cancellation}</p>
                    </article>
                  )}
                  {activity.meetingPoint && (
                    <article className="guide-card">
                      <span className="eyebrow">PUNTO DE ENCUENTRO</span>
                      <h3>{activity.meetingPoint}</h3>
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
                  <span className="eyebrow">RESERVA ONLINE</span>
                  <h2>Consulta fechas y disponibilidad en {activity.destination}</h2>
                  <p>
                    Elige tu día en el calendario de disponibilidad y completa tu reserva online en unos minutos.
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
                        Nivel {rel.level}
                        {rel.duration && rel.duration !== "Consultar disponibilidad" ? ` · ${rel.duration}` : ""}
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
              <small>Reserva online · {(lowest || offers[0]).provider}</small>
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
