import Link from "next/link";
import { notFound } from "next/navigation";
import { destinations, diveSites } from "@/data/dive-sites";
import { SiteCard } from "@/components/SiteCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildDestinationJsonLd } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return destinations.map((destination) => ({ slug: destination.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const destination = destinations.find((item) => item.slug === slug);
  if (!destination) return {};

  return {
    title: `Buceo en ${destination.name}: Puntos de Inmersión, Escuelas y Guía`,
    description: `Guía de buceo en ${destination.name} (${destination.region}). Descubre sus mejores puntos de inmersión, niveles, fauna marina y actividades para reservar.`,
    alternates: {
      canonical: `/buceo/${slug}`,
    },
    openGraph: {
      title: `Buceo en ${destination.name} | Buceo Atlas`,
      description: `Puntos de inmersión y experiencias de buceo en ${destination.name} (${destination.region}).`,
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

  const animals = Array.from(new Set(sites.flatMap((site) => site.animals)));
  const destinationJsonLd = buildDestinationJsonLd(destination, sites.length);

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
            {destination.region} · {sites.length} puntos de inmersión
          </span>
          <h1>Buceo en {destination.name}</h1>
          <p>
            Explora los puntos de inmersión más destacados de {destination.name}, sus rangos de profundidad, tipo de fondo, nivel recomendado y especies habituales.
          </p>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginTop: "1.25rem" }}>
            <Link
              href={`/actividades?region=${encodeURIComponent(destination.region)}`}
              className="button button-primary"
            >
              Ver actividades en {destination.region} →
            </Link>
            <Link
              href={`/centros?q=${encodeURIComponent(destination.name)}`}
              className="button button-ghost-dark"
            >
              Buscar escuelas en la zona
            </Link>
          </div>
          <div className="hero-tags">
            {animals.slice(0, 8).map((animal) => (
              <span key={animal}>{animal}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">PUNTOS DE INMERSIÓN</span>
              <h2>Dónde bucear en {destination.name}</h2>
            </div>
            <Link href={`/mapa?region=${encodeURIComponent(destination.region)}`} className="text-link">
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

      <section className="section section-soft">
        <div className="container editorial-grid">
          <div>
            <span className="eyebrow">BIODIVERSIDAD SUBMARINA</span>
            <h2>Fauna marina característica</h2>
            <p>
              Especies representativas de los fondos de {destination.name}. La observación de fauna en libertad varía según la época del año, la temperatura del agua y la cota de inmersión.
            </p>
            <p style={{ marginTop: "1rem" }}>
              <Link href="/fauna" className="text-link">
                Consultar el catálogo completo de fauna marina →
              </Link>
            </p>
          </div>
          <div className="fauna-cloud">
            {animals.map((animal) => (
              <span key={animal}>{animal}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
