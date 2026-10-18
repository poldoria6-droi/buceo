import Link from "next/link";
import { destinations } from "@/data/dive-sites";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { communityFor } from "@/lib/activity-filters";

export const metadata = {
  title: "Destinos de Buceo en España · Guía de Zonas, Precios y Puntos",
  description:
    "Guía completa de 87 destinos de buceo en España: Tenerife, Lanzarote, Gran Canaria, Barcelona, Costa Brava, Baleares, Cabo de Palos, Málaga, Cádiz y más.",
  alternates: {
    canonical: "/destinos",
  },
  openGraph: {
    title: "Destinos de Buceo en España | Buceo Atlas",
    description: "Explora los 87 destinos, provincias e islas de buceo en España con precios, escuelas y puntos de inmersión.",
    url: "/destinos",
    type: "website",
  },
};

export default function DestinationsPage() {
  return (
    <section className="section destinations-page">
      <div className="container">
        <Breadcrumbs items={[{ name: "Destinos", path: "/destinos" }]} />
        <span className="eyebrow">GUÍA DE DESTINOS EN ESPAÑA ({destinations.length} ZONAS)</span>
        <h1>Destinos y provincias donde bucear en España</h1>
        <p className="lead">
          Explora las mejores zonas, islas y provincias de buceo en España: cada guía reúne precios orientativos, bautismos, cursos PADI/SSI, escuelas verificadas, puntos de inmersión y fauna marina.
        </p>
        <div className="destination-grid">
          {destinations.map((destination) => (
            <article className="destination-card" key={destination.slug}>
              <div className="destination-visual">
                <span>◌</span>
                <small>{destination.region}</small>
              </div>
              <div className="destination-card-body">
                <span className="eyebrow">{destination.sites} puntos · {destination.region}</span>
                <h2>Buceo en {destination.name}</h2>
                <p>Fauna habitual: {destination.animals.join(", ")}.</p>
                <div className="card-actions">
                  <Link
                    href={`/buceo/${destination.slug}`}
                    className="button button-primary button-small"
                  >
                    Ver guía y ofertas
                  </Link>
                  <Link
                    href={`/actividades?region=${encodeURIComponent(communityFor(destination.region))}#mapa`}
                    className="text-link"
                  >
                    Mapa →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}