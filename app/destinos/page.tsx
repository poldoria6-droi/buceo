import Link from "next/link";
import { destinations } from "@/data/dive-sites";

export const metadata = {
  title: "Destinos de Buceo en España · Guía de Zonas y Puntos",
  description:
    "Guía completa de destinos de buceo en España: Costa Brava, Baleares, Canarias, Murcia, Cabo de Palos y más. Puntos de inmersión, niveles y fauna marina.",
  alternates: {
    canonical: "/destinos",
  },
  openGraph: {
    title: "Destinos de Buceo en España | Buceo Atlas",
    description: "Explora los mejores destinos y zonas de inmersión en España.",
    url: "/destinos",
    type: "website",
  },
};

export default function DestinationsPage() {
  return (
    <section className="section destinations-page">
      <div className="container">
        <span className="eyebrow">GUÍA DE DESTINOS</span>
        <h1>Destinos donde empezar a explorar</h1>
        <p className="lead">
          Una estructura pensada para descubrir las mejores zonas de buceo en España: cada destino reúne centros, puntos de inmersión, especies y opciones de reserva.
        </p>
        <div className="destination-grid">
          {destinations.map((destination) => (
            <article className="destination-card" key={destination.slug}>
              <div className="destination-visual">
                <span>◌</span>
                <small>{destination.region}</small>
              </div>
              <div className="destination-card-body">
                <span className="eyebrow">{destination.sites} puntos</span>
                <h2>{destination.name}</h2>
                <p>Fauna a buscar: {destination.animals.join(", ")}.</p>
                <div className="card-actions">
                  <Link
                    href={`/buceo/${destination.slug}`}
                    className="button button-primary button-small"
                  >
                    Ver destino
                  </Link>
                  <Link
                    href={`/mapa?region=${encodeURIComponent(destination.region)}`}
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