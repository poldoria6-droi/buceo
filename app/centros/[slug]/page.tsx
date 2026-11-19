import Link from "next/link";
import { notFound } from "next/navigation";
import { centers } from "@/data/centers";
import { diveSites } from "@/data/dive-sites";
import { getCenterActivities } from "@/lib/centers";
import { formatOfferPrice, getBookingOffers, getLowestPricedOffer } from "@/lib/affiliate";
import { getBlackFridayInfoForUrl } from "@/data/black-friday";
import { BookingOptions } from "@/components/BookingOptions";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildCenterJsonLd } from "@/lib/seo";
import { buildActivityCardSummary, communityFor } from "@/lib/activity-filters";
import { getDestinationsForCenter, rotateSlice } from "@/lib/internal-links";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return centers.map((center) => ({ slug: center.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const center = centers.find((item) => item.slug === slug);
  if (!center) return {};

  const activities = getCenterActivities(center.id);
  const allOffers = activities.flatMap((a) => getBookingOffers(a));
  const lowestOffer = getLowestPricedOffer(allOffers);
  const shortLoc = center.location.split(",")[0].split("·")[0].replace(/\(.*?\)/g, "").trim();
  const hasLocationInName = center.name.toLowerCase().includes(shortLoc.toLowerCase());
  const nameWithLoc = hasLocationInName ? center.name : `${center.name} (${shortLoc})`;
  const priceTitle = lowestOffer ? ` desde ${formatOfferPrice(lowestOffer)}` : "";
  const priceDesc = lowestOffer ? ` desde ${formatOfferPrice(lowestOffer)}` : "";
  const pageTitle = lowestOffer
    ? nameWithLoc.length > 32
      ? `${nameWithLoc} · Precios${priceTitle} y Cursos`
      : `${nameWithLoc}: Precios${priceTitle}, Bautismos y Cursos`
    : `${nameWithLoc} · Centro de Buceo y Cursos`;
  const actSnippet =
    activities.length === 1
      ? `su actividad reservable${priceDesc}`
      : activities.length > 1
      ? `sus ${activities.length} bautismos, cursos e inmersiones${priceDesc}`
      : "cursos, salidas de buceo y servicios";

  return {
    title: pageTitle,
    description: `Precios, bautismos y cursos en ${center.name} (${center.location}, ${center.region}): compara ${actSnippet}, opiniones y reserva online.`,
    alternates: {
      canonical: `/centros/${slug}`,
    },
    openGraph: {
      title: `${pageTitle} | Buceo Atlas`,
      description: `Centro de buceo ${center.name} en ${center.location}. Compara ${actSnippet} y reserva online.`,
      url: `/centros/${slug}`,
      type: "website",
    },
  };
}

export default async function CenterPage({ params }: Props) {
  const { slug } = await params;
  const center = centers.find((item) => item.slug === slug);
  if (!center) notFound();

  const activities = getCenterActivities(center.id);
  const sites = diveSites.filter((site) => center.siteSlugs.includes(site.slug));
  const centerJsonLd = buildCenterJsonLd(center, activities.length);
  const allOffers = activities.flatMap((a) => getBookingOffers(a));
  const lowestOffer = getLowestPricedOffer(allOffers);
  const maxBfPct = allOffers.reduce((max, o) => {
    const bf = getBlackFridayInfoForUrl(o.url, o.priceFrom);
    return bf && bf.pct > max ? bf.pct : max;
  }, 0);
  const centerIdx = Math.max(0, centers.findIndex((c) => c.slug === center.slug));
  const matchedDestinations = getDestinationsForCenter(center, centerIdx);
  const centerComm = communityFor(center.region);
  const sameRegionCenters = centers.filter(
    (c) => c.slug !== center.slug && communityFor(c.region) === centerComm
  );
  const relatedCenters = rotateSlice(sameRegionCenters, centerIdx, 3);

  return (
    <section className="section">
      <div className="container">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(centerJsonLd) }}
        />
        <Breadcrumbs
          items={[
            { name: "Escuelas", path: "/centros" },
            { name: center.name, path: `/centros/${center.slug}` },
          ]}
        />
        <span className="eyebrow">CENTRO DE BUCEO · {center.region}</span>
        <h1>{center.name}</h1>
        <p className="lead">{center.location}</p>

        <div className="activity-detail-badges" style={{ marginBottom: "1rem" }}>
          {maxBfPct > 0 && (
            <span className="bf-discount-badge">
              🔥 OFERTAS BLACK FRIDAY HASTA −{maxBfPct} %
            </span>
          )}
          {activities.length > 0 && (
            <span>
              {activities.length === 1
                ? "1 experiencia reservable"
                : `${activities.length} experiencias reservables`}
            </span>
          )}
          {lowestOffer && <span className="price-badge">Desde {formatOfferPrice(lowestOffer)}</span>}
          {center.rating && (
            <span>
              ★ {center.rating.value}/{center.rating.scale} · {center.rating.count} opiniones verificadas
            </span>
          )}
        </div>

        <p>{center.description}</p>

        <section id="actividades" className="center-activities">
          <h2>Actividades, precios y reserva online en {center.name}</h2>
          <div className="guide-grid">
            {activities.map((activity) => (
              <article className="guide-card" key={activity.slug}>
                <span className="eyebrow">{activity.type} · {activity.destination}</span>
                <h3>
                  <Link href={`/actividades/${activity.slug}`}>{activity.title}</Link>
                </h3>
                <p>{buildActivityCardSummary(activity)}</p>
                <BookingOptions activity={activity} officialUrl={center.officialUrl} placement="center-card" />
              </article>
            ))}
          </div>

          {!activities.length && (
            <>
              <p>Consulta las actividades disponibles directamente con el centro o explora otras opciones en la zona.</p>
              {center.officialUrl && /^https?:\/\//i.test(center.officialUrl) && (
                <a href={center.officialUrl} target="_blank" rel="noopener noreferrer" className="text-link">
                  Visitar web del centro ↗
                </a>
              )}
            </>
          )}
        </section>

        <h2>Servicios e instalaciones</h2>
        <div className="check-grid">
          {center.services.map((service) => (
            <span key={service}>✓ {service}</span>
          ))}
        </div>

        {sites.length > 0 && (
          <>
            <h2>Puntos de inmersión en su zona</h2>
            <div className="guide-grid">
              {sites.map((site) => (
                <article className="guide-card" key={site.slug}>
                  <span className="eyebrow">{site.region} · {site.depth}</span>
                  <h3>{site.name}</h3>
                  <p>{site.highlight}</p>
                </article>
              ))}
            </div>
          </>
        )}

        {matchedDestinations.length > 0 && (
          <section style={{ marginBottom: "2.5rem" }}>
            <h2>Guías de buceo en la zona de {center.name}</h2>
            <div className="guide-grid">
              {matchedDestinations.map((dest) => (
                <article className="guide-card" key={dest.slug}>
                  <span className="eyebrow">
                    {dest.region} · {dest.sites} {dest.sites === 1 ? "punto" : "puntos"}
                  </span>
                  <h3>Buceo en {dest.name}</h3>
                  <p>Especies habituales: {dest.animals.slice(0, 4).join(", ")}.</p>
                  <Link href={`/buceo/${dest.slug}`} className="text-link">
                    Ver guía y precios en {dest.name} →
                  </Link>
                </article>
              ))}
            </div>
          </section>
        )}

        {relatedCenters.length > 0 && (
          <section style={{ marginBottom: "2rem" }}>
            <h2>Otras escuelas de buceo en {centerComm}</h2>
            <div className="guide-grid">
              {relatedCenters.map((rel) => (
                <article className="guide-card" key={rel.slug}>
                  <span className="eyebrow">{rel.location} · {rel.region}</span>
                  <h3>{rel.name}</h3>
                  <p>{rel.services.slice(0, 3).join(" · ")}</p>
                  <Link href={`/centros/${rel.slug}`} className="text-link">
                    Ver escuela {rel.name} →
                  </Link>
                </article>
              ))}
            </div>
          </section>
        )}

        {activities.length > 0 && (
          <div className="mobile-sticky-booking" role="region" aria-label="Ofertas de esta escuela en móvil">
            <div className="mobile-sticky-booking-price">
              <small>
                {activities.length === 1
                  ? `1 experiencia en ${center.name}`
                  : `${activities.length} experiencias en ${center.name}`}
              </small>
              <strong>{lowestOffer ? `Desde ${formatOfferPrice(lowestOffer)}` : "Ver precios"}</strong>
            </div>
            <a href="#actividades" className="button button-primary mobile-sticky-booking-btn">
              Ver precios y reservar ↑
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
