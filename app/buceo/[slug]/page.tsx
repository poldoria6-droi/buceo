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
import { IATI_AFFILIATE_URL } from "@/lib/affiliate";
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

          <nav className="destination-jump-nav" aria-label={`Secciones sobre buceo en ${destination.name}`}>
            {seoData.featuredActivities.length > 0 && (
              <a href="#actividades" className="button button-primary" style={{ padding: "10px 18px", borderRadius: "999px", fontSize: "0.86rem" }}>
                Ver ofertas ({seoData.totalCount}) ↓
              </a>
            )}
            <a href="#guia" className="destination-jump-link">
              📖 Guía práctica
            </a>
            <a href="#inmersiones" className="destination-jump-link">
              📍 Inmersiones ({sites.length})
            </a>
            {seoData.matchedCenters.length > 0 && (
              <a href="#escuelas" className="destination-jump-link">
                🏫 Escuelas ({seoData.matchedCenters.length})
              </a>
            )}
            <a href="#faq" className="destination-jump-link">
              ❓ Preguntas frecuentes
            </a>
          </nav>
        </div>
      </section>

      {seoData.featuredActivities.length > 0 && (
        <section id="actividades" className="section section-soft destination-section-anchor">
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
              {seoData.featuredActivities.slice(0, 6).map((activity) => (
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

      <section id="guia" className="section destination-section-anchor">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">GUÍA PRÁCTICA DE BUCEO</span>
              <h2>Todo lo que necesitas saber para bucear en {destination.name}</h2>
            </div>
            <a href="#inmersiones" className="text-link">
              Saltar a los {sites.length} puntos de inmersión ↓
            </a>
          </div>

          <div className="destination-guide-grid">
            {seoData.localLongTail && (
              <article className="destination-guide-card destination-guide-card--highlight">
                <span className="eyebrow">🧭 ZONAS CLAVE Y RECOMENDACIONES LOCALES</span>
                <h3>{seoData.localLongTail.heading}</h3>
                {seoData.localLongTail.paragraphs.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
                {destination.slug === "el-hierro" && (
                  <p>
                    👉 Si estás cuadrando aviones o ferry interinsular, alojamiento y bonos de inmersión, te hemos preparado una{" "}
                    <Link href="/guias/viaje-de-buceo-a-el-hierro" className="text-link">
                      guía paso a paso para organizar tu viaje de buceo a El Hierro (La Restinga) →
                    </Link>
                  </p>
                )}
              </article>
            )}

            <article className="destination-guide-card">
              <span className="eyebrow">🌊 FONDOS Y VIDA MARINA</span>
              <h3>
                {destination.slug === "madrid"
                  ? `Cómo funcionan los cursos y bautismos en ${destination.name}`
                  : `Cómo son los fondos de ${destination.name} y qué nivel necesitas`}
              </h3>
              <p>
                El entorno de <strong>{destination.name}</strong> ({destination.region}) destaca por{" "}
                {seoData.climate.marineEnvironment}. Tanto si te estrenas bajo el agua con un{" "}
                <Link href="/guias/bautismo-de-buceo-en-espana" className="text-link">
                  bautismo de buceo guiado
                </Link>{" "}
                como si ya tienes tu carnet Open Water o{" "}
                <Link href="/guias/curso-advanced-open-water-espana" className="text-link">
                  Advanced
                </Link>
                , tienes puntos muy variados en {sites.map((s) => s.name).slice(0, 3).join(", ")}.
              </p>
              <p>
                {destination.slug === "madrid" ? (
                  <>
                    Tras completar las clases en piscina climatizada o foso en {destination.name}, las salidas a mar abierto se organizan en Murcia, Alicante o la Costa Brava, donde verás especies como{" "}
                    <strong>{animals.join(", ")}</strong>. Revisa antes los{" "}
                  </>
                ) : (
                  <>
                    <strong>Fauna habitual bajo el agua:</strong> en estas inmersiones es frecuente cruzarse con{" "}
                    <strong>{animals.join(", ")}</strong>. Antes de salir, echa un vistazo a los{" "}
                  </>
                )}
                <Link href="/guias/requisitos-para-bucear-en-espana" className="text-link">
                  requisitos de seguridad
                </Link>.
              </p>
              {matchedSpecies.length > 0 && (
                <div className="hero-tags" style={{ marginTop: "0.5rem" }}>
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
            </article>

            <article className="destination-guide-card">
              <span className="eyebrow">💰 TARIFAS ORIENTATIVAS</span>
              <h3>Precios de bautismos, cursos e inmersiones en {destination.name}</h3>
              <p>
                Lo que pagas en {destination.name} varía según si la salida es desde cala o en barco y si incluyes alquiler de equipo o tasas (<Link href="/guias/padi-vs-ssi-diferencias" className="text-link">PADI o SSI</Link>):
              </p>
              <div style={{ overflowX: "auto" }}>
                <table>
                  <thead>
                    <tr>
                      <th>Modalidad</th>
                      <th>Nivel</th>
                      <th>Tarifa habitual</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Bautismo de buceo</strong></td>
                      <td>Sin experiencia</td>
                      <td>
                        {seoData.baptismFrom ? `Desde ${seoData.baptismFrom} €` : "60 € – 95 €"} (equipo y seguro incl.)
                      </td>
                    </tr>
                    <tr>
                      <td><strong>Salida guiada</strong></td>
                      <td>Con carnet</td>
                      <td>
                        {seoData.diveFrom ? `Desde ${seoData.diveFrom} €` : "38 € – 65 €"} (según barco y equipo)
                      </td>
                    </tr>
                    <tr>
                      <td><strong>Curso Open Water</strong></td>
                      <td>Certificación</td>
                      <td>
                        {seoData.courseFrom ? `Desde ${seoData.courseFrom} €` : "350 € – 490 €"} (teoría, mar y título)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </article>

            <article className="destination-guide-card destination-guide-card--full">
              <span className="eyebrow">🌡️ MEJOR ÉPOCA, TEMPERATURA DEL AGUA Y NEOPRENO</span>
              <h3>Cuándo ir a bucear a {destination.name} y qué traje llevar</h3>
              <ul>
                <li>
                  <strong>Mejores meses para bucear:</strong> {seoData.climate.bestMonths}.
                </li>
                <li>
                  <strong>Temperatura del agua:</strong> entre <strong>{seoData.climate.waterTempWinter}</strong> en los meses más frescos y <strong>{seoData.climate.waterTempSummer}</strong> en verano y principio de otoño.
                </li>
                <li>
                  <strong>Neopreno recomendado:</strong> {seoData.climate.wetsuitAdvice}
                </li>
              </ul>
              <p>
                👉 Puedes comparar todas las costas mes a mes en nuestro{" "}
                <Link href="/guias/mejor-epoca-para-bucear-en-espana" className="text-link">
                  calendario de temperatura del agua en España →
                </Link>
              </p>
              {(destCommunity === "Canarias" || destCommunity === "Baleares") && (
                <div className="editorial-tip" style={{ marginTop: "1rem", marginBottom: 0 }}>
                  <p>
                    ✈️ <strong>Si vuelas a {destination.name} para bucear:</strong> deja al menos 18–24 h sin bucear antes de tu vuelo de regreso. Si vas a hacer una sola salida suelta puedes sacarte el seguro diario en el propio centro, pero si viajas en avión con tu equipo o quieres llevar cubiertos vuelos, equipaje deportivo y buceo en una misma póliza, tienes un{" "}
                    <a
                      href={IATI_AFFILIATE_URL}
                      target="_blank"
                      rel="sponsored noopener noreferrer"
                      className="text-link"
                    >
                      5 % de descuento en IATI Seguros desde aquí ↗
                    </a>
                    .
                  </p>
                </div>
              )}
            </article>
          </div>
        </div>
      </section>

      <section id="inmersiones" className="section section-soft destination-section-anchor">
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
        <section id="escuelas" className="section destination-section-anchor">
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

      <section id="faq" className="section section-soft destination-section-anchor">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">DUDAS HABITUALES</span>
              <h2>Preguntas frecuentes sobre bucear en {destination.name}</h2>
            </div>
          </div>
          <div style={{ display: "grid", gap: "0.75rem", maxWidth: "880px" }}>
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
