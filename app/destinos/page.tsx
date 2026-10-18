import { Suspense } from "react";
import Link from "next/link";
import { destinations, diveSites } from "@/data/dive-sites";
import { activities } from "@/data/activities";
import { centers } from "@/data/centers";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { communityFor } from "@/lib/activity-filters";
import { getDestinationSeoData } from "@/lib/destination-seo";
import { DestinationsList, type EnrichedDestinationItem } from "@/app/destinos/DestinationsList";

export const metadata = {
  title: "Destinos de Buceo en España · Guía de Zonas, Precios y Puntos",
  description:
    "Buscador y guía completa de 87 destinos de buceo en España: Tenerife, Lanzarote, Gran Canaria, Barcelona, Costa Brava, Baleares, Cabo de Palos, Málaga, Cádiz y más.",
  alternates: {
    canonical: "/destinos",
  },
  openGraph: {
    title: "Destinos de Buceo en España | Buceo Atlas",
    description:
      "Explora y filtra los 87 destinos, provincias e islas de buceo en España con precios, escuelas y puntos de inmersión.",
    url: "/destinos",
    type: "website",
  },
};

export default function DestinationsPage() {
  const enrichedItems: EnrichedDestinationItem[] = destinations.map((dest) => {
    const sites = diveSites.filter((s) => s.destinationSlug === dest.slug);
    const seo = getDestinationSeoData(dest, sites, activities, centers);
    return {
      slug: dest.slug,
      name: dest.name,
      region: dest.region,
      community: communityFor(dest.region),
      sites: dest.sites,
      animals: dest.animals,
      activitiesCount: seo.totalCount,
      lowestPrice: seo.lowestPrice,
    };
  });

  const communities = Array.from(
    new Set(enrichedItems.map((item) => item.community))
  ).sort((a, b) => {
    const countDiff =
      enrichedItems.filter((x) => x.community === b).length -
      enrichedItems.filter((x) => x.community === a).length;
    return countDiff !== 0 ? countDiff : a.localeCompare(b, "es");
  });

  return (
    <section className="section destinations-page">
      <div className="container">
        <Breadcrumbs items={[{ name: "Destinos", path: "/destinos" }]} />
        <span className="eyebrow">
          GUÍA DE DESTINOS EN ESPAÑA ({destinations.length} ZONAS)
        </span>
        <h1>Destinos y provincias donde bucear en España</h1>
        <p className="lead" style={{ marginBottom: "1rem" }}>
          Filtra por comunidad autónoma o busca tu destino, isla o provincia: cada guía reúne precios orientativos, bautismos, cursos PADI/SSI, escuelas verificadas, puntos de inmersión y fauna marina.
        </p>

        <Suspense
          fallback={
            <div className="destination-grid">
              {enrichedItems.map((destination) => (
                <article className="destination-card" key={destination.slug}>
                  <div className="destination-visual">
                    <span>◌</span>
                    <small>{destination.region}</small>
                  </div>
                  <div className="destination-card-body">
                    <span className="eyebrow">
                      {destination.sites} puntos · {destination.activitiesCount} actividades
                    </span>
                    <h2>
                      <Link href={`/buceo/${destination.slug}`}>Buceo en {destination.name}</Link>
                    </h2>
                    <p>Fauna habitual: {destination.animals.join(", ")}.</p>
                    <div className="card-actions">
                      <Link
                        href={`/buceo/${destination.slug}`}
                        className="button button-primary button-small"
                      >
                        Ver guía y ofertas →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          }
        >
          <DestinationsList items={enrichedItems} communities={communities} />
        </Suspense>
      </div>
    </section>
  );
}