import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildArticleJsonLd } from "@/lib/seo";

export const metadata = {
  title: "¿Cuánto cuesta un bautismo de buceo en España? Precios y Guía",
  description:
    "Descubre cuánto cuesta un bautismo de buceo en España, qué factores influyen en el precio, qué incluye y cómo comparar ofertas antes de reservar.",
  alternates: {
    canonical: "/guias/cuanto-cuesta-un-bautismo-de-buceo",
  },
  openGraph: {
    title: "¿Cuánto cuesta un bautismo de buceo en España? | Buceo Atlas",
    description:
      "Precios reales de bautismos de buceo en España y qué factores influyen en el coste.",
    url: "/guias/cuanto-cuesta-un-bautismo-de-buceo",
    type: "article",
  },
};

export default function BaptismPriceGuidePage() {
  const articleJsonLd = buildArticleJsonLd({
    title: "¿Cuánto cuesta un bautismo de buceo en España?",
    description:
      "Qué factores influyen en el precio de un bautismo de buceo en España y qué debes comparar antes de reservar.",
    path: "/guias/cuanto-cuesta-un-bautismo-de-buceo",
  });

  return (
    <section className="section">
      <div className="container">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        />
        <Breadcrumbs
          items={[
            { name: "Guías", path: "/guias" },
            {
              name: "¿Cuánto cuesta un bautismo?",
              path: "/guias/cuanto-cuesta-un-bautismo-de-buceo",
            },
          ]}
        />
        <span className="eyebrow">PRECIOS · PRINCIPIANTES</span>
        <h1>¿Cuánto cuesta un bautismo de buceo?</h1>
        <p className="lead">
          No existe un precio único: la cifra depende del destino, el formato de la actividad y de lo que incluya el centro.
        </p>

        <div className="guide-article">
          <h2>Qué hace variar el precio</h2>
          <div className="guide-grid">
            <article className="guide-card">
              <span className="eyebrow">01</span>
              <h3>Equipo incluido</h3>
              <p>Comprueba si el traje, regulador, chaleco, botella, lastre y resto del material están incluidos.</p>
            </article>
            <article className="guide-card">
              <span className="eyebrow">02</span>
              <h3>Desde costa o barco</h3>
              <p>El tipo de salida puede cambiar la logística, la duración y el coste de la actividad.</p>
            </article>
            <article className="guide-card">
              <span className="eyebrow">03</span>
              <h3>Grupo y duración</h3>
              <p>Compara el tamaño del grupo y el tiempo total de la experiencia, no solo el precio anunciado.</p>
            </article>
            <article className="guide-card">
              <span className="eyebrow">04</span>
              <h3>Destino y temporada</h3>
              <p>La oferta disponible puede variar según la zona, fechas y condiciones operativas del centro.</p>
            </article>
          </div>

          <h2>Cómo comparar dos bautismos</h2>
          <p>
            Para comparar correctamente, usa el precio final de la actividad y revisa qué está incluido, dónde empieza, cuánto dura, qué requisitos tiene y qué ocurre si las condiciones meteorológicas impiden salir.
          </p>

          <h2>¿Dónde buscar en Atlas?</h2>
          <p>
            Atlas está construyendo un catálogo de actividades por destino y nivel. A medida que se verifiquen proveedores, cada actividad podrá mostrar precio, disponibilidad, condiciones y un enlace directo para continuar con la reserva.
          </p>

          <div className="cta-section">
            <div className="cta-panel">
              <div>
                <span className="eyebrow">EXPLORA</span>
                <h2>Busca bautismos por zona</h2>
                <p>Filtra las actividades de iniciación disponibles en el catálogo de Atlas.</p>
              </div>
              <Link href="/actividades?type=Bautismo" className="button button-primary">
                Buscar bautismos →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
