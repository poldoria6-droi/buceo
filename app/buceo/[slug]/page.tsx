import Link from "next/link";
import { notFound } from "next/navigation";
import { destinations, diveSites } from "@/data/dive-sites";
import { activities } from "@/data/activities";
import { centers } from "@/data/centers";
import { species } from "@/data/species";
import { SiteCard } from "@/components/SiteCard";
import { BookingOptions } from "@/components/BookingOptions";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildDestinationJsonLd } from "@/lib/seo";
import { getDestinationSeoData } from "@/lib/destination-seo";
import { buildActivityCardSummary, communityFor } from "@/lib/activity-filters";
import { rotateSlice } from "@/lib/internal-links";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return destinations.map((destination) => ({ slug: destination.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const destination = destinations.find((item) => item.slug === slug);
  const sites = diveSites.filter((site) => site.destinationSlug === slug);
  if (!destination || sites.length === 0) return {};

  const seoData = getDestinationSeoData(destination, sites, activities, centers);
  const priceSnippet = seoData.lowestPrice ? ` desde ${seoData.lowestPrice} €` : "";
  const titlePrice = seoData.lowestPrice ? ` (desde ${seoData.lowestPrice} €)` : "";

  return {
    title: `Buceo en ${destination.name}: Precios${titlePrice}, Zonas y Centros`,
    description: `Buceo en ${destination.name} (${destination.region}): compara ${seoData.totalCount} bautismos, cursos e inmersiones${priceSnippet}, ${sites.length} puntos de inmersión, centros de buceo y mejor época.`,
    alternates: {
      canonical: `/buceo/${slug}`,
    },
    openGraph: {
      title: `Buceo en ${destination.name}: Precios${titlePrice}, Zonas y Centros | Buceo Atlas`,
      description: `Compara bautismos, cursos PADI/SSI, puntos de inmersión y centros de buceo en ${destination.name}${priceSnippet}.`,
      url: `/buceo/${slug}`,
      type: "website",
    },
  };
}

export default async function DestinationPage({ params }: Props) {
  const { slug } = await params;
  const destination = destinations.find((item) => item.slug === slug);
  const sites = diveSites.filter((site) => site.destinationSlug === slug);
  if (!destination || sites.length === 0) notFound();

  const seoData = getDestinationSeoData(destination, sites, activities, centers);
  const animals = Array.from(new Set(sites.flatMap((site) => site.animals)));
  const destCommunity = communityFor(destination.region);
  const destIndex = Math.max(0, destinations.findIndex((item) => item.slug === slug));

  const directSpecies = species.filter((sp) =>
    animals.some(
      (an) =>
        sp.name.toLowerCase().includes(an.toLowerCase()) ||
        an.toLowerCase().includes(sp.name.split(" ")[0].toLowerCase())
    )
  );
  const regionalSpecies = species.filter(
    (sp) =>
      !directSpecies.includes(sp) &&
      sp.occurrences.some((occ) => communityFor(occ.region) === destCommunity)
  );
  const matchedSpecies = rotateSlice(
    [...directSpecies, ...regionalSpecies, ...species],
    destIndex * 3,
    8
  );

  const sameCommunityDests = destinations.filter((d) => communityFor(d.region) === destCommunity);
  const commIndex = Math.max(0, sameCommunityDests.findIndex((d) => d.slug === destination.slug));
  const relatedDestinations = rotateSlice(
    sameCommunityDests.filter((d) => d.slug !== destination.slug),
    commIndex,
    8
  );

  const destinationJsonLd = buildDestinationJsonLd(
    destination,
    sites.length,
    seoData.faqs,
    seoData.lowestPrice
  );

  return (
    <>
      <section className="destination-hero">
        <div className="container">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(destinationJsonLd) }}
          />
          <Breadcrumbs
            items={[
              { name: "Destinos", path: "/destinos" },
              { name: `Buceo en ${destination.name}`, path: `/buceo/${destination.slug}` },
            ]}
          />
          <span className="eyebrow">
            GUÍA Y COMPARADOR · {destination.region.toUpperCase()}
          </span>
          <h1>Buceo en {destination.name}: precios, mejores zonas, bautismos y centros</h1>
          <p>
            Descubre dónde bucear en {destination.name} ({destination.region}): comparativa de{" "}
            <strong>{seoData.totalCount} experiencias reservables</strong>{" "}
            {seoData.lowestPrice ? `desde ${seoData.lowestPrice} €` : ""},{" "}
            <strong>{sites.length} puntos de inmersión</strong> documentados, escuelas verificadas y recomendaciones según tu nivel.
          </p>

          <div className="hero-tags" style={{ marginTop: "1rem" }}>
            {seoData.lowestPrice && <span>Desde {seoData.lowestPrice} €</span>}
            <span>{seoData.totalCount} actividades en la zona</span>
            <span>{sites.length} puntos de inmersión</span>
            <span>Agua: {seoData.climate.waterTempWinter} / {seoData.climate.waterTempSummer}</span>
          </div>

          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginTop: "1.25rem" }}>
            <a href="#actividades" className="button button-primary">
              Ver ofertas y precios en {destination.name} ↓
            </a>
            <Link
              href={`/actividades/#mapa&region=${encodeURIComponent(destCommunity)}`}
              className="button button-ghost-dark"
            >
              Abrir en el mapa interactivo →
            </Link>
            {seoData.matchedCenters.length > 0 && (
              <a href="#escuelas" className="button button-ghost-dark">
                Ver escuelas ({seoData.matchedCenters.length})
              </a>
            )}
          </div>
        </div>
      </section>

      {seoData.featuredActivities.length > 0 && (
        <section id="actividades" className="section section-soft">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="eyebrow">RESERVA ONLINE CON PRECIO MÍNIMO</span>
                <h2>Bautismos, cursos y salidas de buceo en {destination.name}</h2>
              </div>
              <Link
                href={`/actividades/#region=${encodeURIComponent(destCommunity)}`}
                className="text-link"
              >
                Ver las {seoData.totalCount} actividades en {destCommunity} →
              </Link>
            </div>
            <div className="guide-grid">
              {seoData.featuredActivities.map((activity) => (
                <article className="guide-card" key={activity.slug}>
                  <span className="eyebrow">
                    {activity.type} · {activity.destination}
                  </span>
                  <h3>
                    <Link href={`/actividades/${activity.slug}`}>{activity.title}</Link>
                  </h3>
                  <p>{buildActivityCardSummary(activity)}</p>
                  <Link className="text-link" href={`/actividades/${activity.slug}`}>
                    Ver qué incluye y requisitos →
                  </Link>
                  <BookingOptions activity={activity} />
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">PUNTOS DE INMERSIÓN</span>
              <h2>Dónde bucear en {destination.name}: mejores inmersiones</h2>
            </div>
            <Link
              href={`/actividades/#mapa&region=${encodeURIComponent(destCommunity)}`}
              className="text-link"
            >
              Ver en el mapa interactivo →
            </Link>
          </div>
          <div className="cards-grid">
            {sites.map((site) => (
              <SiteCard key={site.id} site={site} />
            ))}
          </div>
        </div>
      </section>

      {seoData.matchedCenters.length > 0 && (
        <section id="escuelas" className="section section-soft">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="eyebrow">DIRECTORIO DE CENTROS</span>
                <h2>Escuelas y centros de buceo en {destination.name} y entorno</h2>
              </div>
              <Link href="/centros" className="text-link">
                Ver todas las escuelas de España →
              </Link>
            </div>
            <div className="guide-grid">
              {seoData.matchedCenters.map((center) => (
                <article className="guide-card" key={center.slug}>
                  <span className="eyebrow">{center.location}</span>
                  <h3>
                    <Link href={`/centros/${center.slug}`}>{center.name}</Link>
                  </h3>
                  {center.rating && (
                    <p>
                      ★ {center.rating.value}/{center.rating.scale} ({center.rating.count} opiniones)
                    </p>
                  )}
                  <p>{center.services.slice(0, 3).join(" · ")}</p>
                  <Link href={`/centros/${center.slug}`} className="text-link">
                    Ver ficha de la escuela y sus ofertas →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section">
        <div className="container">
          <div className="guide-article">
            <span className="eyebrow">GUÍA PRÁCTICA DE BUCEO</span>
            <h2>Todo lo que necesitas saber para bucear en {destination.name}</h2>

            <h3>
              {destination.slug === "madrid"
                ? `1. Cómo funcionan los cursos y bautismos de buceo en ${destination.name}`
                : `1. Cómo son los fondos submarinos de ${destination.name} y qué nivel necesitas`}
            </h3>
            <p>
              El entorno de <strong>{destination.name}</strong> ({destination.region}) se caracteriza por{" "}
              {seoData.climate.marineEnvironment}. Tanto si buscas tu primera toma de contacto bajo el agua mediante un{" "}
              <Link href="/guias/bautismo-de-buceo-en-espana" className="text-link">
                bautismo de buceo guiado
              </Link>{" "}
              como si cuentas con titulación Open Water, Advanced o superior, encontrarás opciones adaptadas a tu experiencia en{" "}
              {sites.map((s) => s.name).slice(0, 3).join(", ")}.
            </p>

            <h3>2. Precios de bautismos, cursos e inmersiones en {destination.name}</h3>
            <p>
              Los precios de las actividades subacuáticas en {destination.name} varían según la modalidad, la duración y si incluyen el alquiler completo del equipo o las tasas de certificación oficial (<Link href="/guias/padi-vs-ssi-diferencias" className="text-link">PADI o SSI</Link>):
            </p>
            <div style={{ overflowX: "auto", margin: "1.25rem 0 1.75rem" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
                <thead>
                  <tr style={{ borderBottom: "2px solid var(--line, #cbd5e1)" }}>
                    <th style={{ padding: "0.75rem" }}>Modalidad en {destination.name}</th>
                    <th style={{ padding: "0.75rem" }}>Nivel requerido</th>
                    <th style={{ padding: "0.75rem" }}>Precio orientativo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: "1px solid var(--line, #e2e8f0)" }}>
                    <td style={{ padding: "0.75rem" }}><strong>Bautismo de buceo (Discover Scuba)</strong></td>
                    <td style={{ padding: "0.75rem" }}>Sin experiencia previa (Inicial)</td>
                    <td style={{ padding: "0.75rem" }}>
                      {seoData.baptismFrom ? `Desde ${seoData.baptismFrom} €` : "Entre 60 € y 95 €"} (equipo e instructor incluidos)
                    </td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid var(--line, #e2e8f0)" }}>
                    <td style={{ padding: "0.75rem" }}><strong>Salidas e inmersiones guiadas</strong></td>
                    <td style={{ padding: "0.75rem" }}>Buceadores titulados (Open Water / Advanced)</td>
                    <td style={{ padding: "0.75rem" }}>
                      {seoData.diveFrom ? `Desde ${seoData.diveFrom} €` : "Entre 38 € y 65 €"} (según número de inmersiones y equipo)
                    </td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid var(--line, #e2e8f0)" }}>
                    <td style={{ padding: "0.75rem" }}><strong>Cursos de certificación (Open Water / Especialidades)</strong></td>
                    <td style={{ padding: "0.75rem" }}>Inicial o progresión técnica</td>
                    <td style={{ padding: "0.75rem" }}>
                      {seoData.courseFrom ? `Desde ${seoData.courseFrom} €` : "Entre 350 € y 490 €"} (teoría, prácticas y certificación)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>3. Mejor época para bucear en {destination.name} y temperatura del agua</h3>
            <ul>
              <li>
                <strong>Temporada recomendada:</strong> {seoData.climate.bestMonths}.
              </li>
              <li>
                <strong>Temperatura del agua:</strong> entre <strong>{seoData.climate.waterTempWinter}</strong> en invierno/primavera y <strong>{seoData.climate.waterTempSummer}</strong> en los meses cálidos.
              </li>
              <li>
                <strong>Protección térmica habitual:</strong> {seoData.climate.wetsuitAdvice}
              </li>
            </ul>
            <p>
              👉 Consulta también nuestro{" "}
              <Link href="/guias/mejor-epoca-para-bucear-en-espana" className="text-link">
                calendario anual de temperatura del agua en España →
              </Link>
            </p>

            <h3>
              {destination.slug === "madrid"
                ? `4. Inmersiones en mar abierto y fauna marina en las salidas desde ${destination.name}`
                : `4. Biodiversidad y fauna marina habitual en ${destination.name}`}
            </h3>
            <p>
              {destination.slug === "madrid" ? (
                <>
                  Tras completar la teoría y los ejercicios en aguas confinadas (piscina climatizada o foso) en {destination.name}, las inmersiones de certificación en aguas abiertas se realizan en destinos costeros como Murcia, Alicante o la Costa Brava, donde es habitual observar especies como{" "}
                  <strong>{animals.join(", ")}</strong>. Consulta siempre los{" "}
                </>
              ) : (
                <>
                  En los fondos de {destination.name} es frecuente observar especies habituales de la zona como{" "}
                  <strong>{animals.join(", ")}</strong>. Antes de planificar tu salida, revisa los{" "}
                </>
              )}
              <Link href="/guias/requisitos-para-bucear-en-espana" className="text-link">
                requisitos de seguridad y conservación
              </Link>.
            </p>
            {matchedSpecies.length > 0 && (
              <div className="hero-tags" style={{ marginTop: "0.75rem", marginBottom: "1.75rem" }}>
                {matchedSpecies.map((sp) => (
                  <Link
                    key={sp.slug}
                    href={`/fauna/${sp.slug}`}
                    style={{ textDecoration: "none" }}
                  >
                    <span>🐠 {sp.name} →</span>
                  </Link>
                ))}
              </div>
            )}

            <h2>Preguntas frecuentes sobre bucear en {destination.name}</h2>
            <div style={{ display: "grid", gap: "0.75rem", marginTop: "1rem" }}>
              {seoData.faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="notice-card"
                  style={{ margin: 0, cursor: "pointer" }}
                >
                  <summary style={{ fontWeight: 700, fontSize: "1.05rem" }}>
                    {faq.question}
                  </summary>
                  <p style={{ marginTop: "0.65rem", marginBottom: 0 }}>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {relatedDestinations.length > 0 && (
        <section className="section section-soft">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="eyebrow">EXPLORA LA REGIÓN</span>
                <h2>Otras zonas de buceo en {destCommunity}</h2>
              </div>
              <Link href="/destinos" className="text-link">
                Ver los {destinations.length} destinos de España →
              </Link>
            </div>
            <div className="guide-grid">
              {relatedDestinations.map((rel) => (
                <article className="guide-card" key={rel.slug}>
                  <span className="eyebrow">
                    {rel.region} · {rel.sites} puntos
                  </span>
                  <h3>
                    <Link href={`/buceo/${rel.slug}`}>Buceo en {rel.name}</Link>
                  </h3>
                  <p>Especies habituales: {rel.animals.slice(0, 4).join(", ")}.</p>
                  <Link href={`/buceo/${rel.slug}`} className="text-link">
                    Ver guía y precios en {rel.name} →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {seoData.featuredActivities.length > 0 && (
        <div className="mobile-sticky-booking" role="region" aria-label="Ofertas en este destino">
          <div className="mobile-sticky-booking-price">
            <small>{seoData.totalCount} actividades en {destination.name}</small>
            <strong>{seoData.lowestPrice ? `Desde ${seoData.lowestPrice} €` : "Ver disponibilidad"}</strong>
          </div>
          <a href="#actividades" className="button button-primary mobile-sticky-booking-btn">
            Ver ofertas y reservar ↑
          </a>
        </div>
      )}
    </>
  );
}
