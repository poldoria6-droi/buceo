import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildArticleJsonLd } from "@/lib/seo";

export const metadata = {
  title: "Bautismo de buceo en España: qué esperar y cómo reservar",
  description:
    "Guía completa para tu primer bautismo de buceo en España: qué incluye, precios, requisitos, mejores zonas y cómo comparar opciones antes de reservar.",
  alternates: {
    canonical: "/guias/bautismo-de-buceo-en-espana",
  },
  openGraph: {
    title: "Bautismo de buceo en España: guía práctica y consejos | Buceo Atlas",
    description:
      "Aprende qué es un bautismo de buceo, qué incluye y cómo elegir escuela en España.",
    url: "/guias/bautismo-de-buceo-en-espana",
    type: "article",
  },
};

export default function BaptismGuidePage() {
  const articleJsonLd = buildArticleJsonLd({
    title: "Bautismo de buceo en España: qué esperar y cómo reservar",
    description:
      "Guía completa para tu primer bautismo de buceo en España: qué incluye, precios, requisitos y cómo comparar opciones.",
    path: "/guias/bautismo-de-buceo-en-espana",
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
            { name: "Bautismo de buceo en España", path: "/guias/bautismo-de-buceo-en-espana" },
          ]}
        />
        <span className="eyebrow">PRINCIPIANTES · ESPAÑA</span>
        <h1>Bautismo de buceo en España</h1>
        <p className="lead">
          Tu primera experiencia bajo el agua, explicada paso a paso para que puedas comparar opciones con criterio antes de reservar.
        </p>

        <div className="guide-article">
          <h2>¿Qué es un bautismo de buceo?</h2>
          <p>
            Es una experiencia introductoria para personas que todavía no tienen una certificación de buceo. Normalmente combina una explicación inicial con una inmersión acompañada por un profesional, siguiendo las condiciones y requisitos del centro que ofrece la actividad.
          </p>

          <h2>¿Qué suele incluir?</h2>
          <p>
            Depende del operador. Antes de reservar conviene comprobar si están incluidos el equipo, la supervisión del instructor, la duración de la actividad, desplazamientos, seguro o tasas, y si la actividad se realiza desde costa o desde barco.
          </p>

          <h2>¿Dónde hacer un bautismo?</h2>
          <p>
            En Atlas puedes empezar comparando zonas y puntos de inmersión de España para entender qué tipo de entorno encontrarás. La disponibilidad real, la temporada y las condiciones del mar deben confirmarse con el operador antes de reservar.
          </p>
          <div className="guide-grid">
            <article className="guide-card">
              <span className="eyebrow">COSTA BRAVA</span>
              <h3>Bautismo en Costa Brava</h3>
              <p>Explora puntos como L'Estartit y Tossa de Mar.</p>
              <Link href="/actividades?type=Bautismo&region=Costa%20Brava" className="text-link">
                Ver opciones →
              </Link>
            </article>
            <article className="guide-card">
              <span className="eyebrow">BALEARES</span>
              <h3>Bautismo en Mallorca</h3>
              <p>Consulta destinos y puntos para empezar a explorar.</p>
              <Link href="/mapa?region=Baleares" className="text-link">
                Explorar Baleares →
              </Link>
            </article>
            <article className="guide-card">
              <span className="eyebrow">CANARIAS</span>
              <h3>Buceo en Canarias</h3>
              <p>Descubre entornos volcánicos y fauna atlántica representativa.</p>
              <Link href="/mapa?region=Canarias" className="text-link">
                Explorar Canarias →
              </Link>
            </article>
          </div>

          <h2>Qué comprobar antes de reservar</h2>
          <p>
            Compara el nivel requerido, el tamaño del grupo, la duración, el material incluido, la política de cancelación, el punto de encuentro y las condiciones necesarias para realizar la actividad. Atlas irá incorporando estos datos cuando estén verificados con cada proveedor.
          </p>

          <div className="cta-section">
            <div className="cta-panel">
              <div>
                <span className="eyebrow">SIGUIENTE PASO</span>
                <h2>Compara experiencias de buceo</h2>
                <p>Explora actividades por tipo, destino y nivel.</p>
              </div>
              <Link href="/actividades?type=Bautismo" className="button button-primary">
                Ver bautismos →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
