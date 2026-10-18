import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildArticleJsonLd } from "@/lib/seo";

export const metadata = {
  title: "Bautismo de Buceo en España: Qué Esperar, Requisitos y Reserva",
  description:
    "Guía paso a paso para tu primer bautismo de buceo en España: en qué consiste la experiencia, qué incluye el precio y qué comparar antes de elegir centro.",
  alternates: {
    canonical: "/guias/bautismo-de-buceo-en-espana",
  },
  openGraph: {
    title: "Bautismo de Buceo en España: Guía Práctica | Buceo Atlas",
    description:
      "Aprende en qué consiste un bautismo de buceo, cuánto dura, qué incluye y cómo elegir escuela en España.",
    url: "/guias/bautismo-de-buceo-en-espana",
    type: "article",
  },
};

export default function BaptismGuidePage() {
  const articleJsonLd = buildArticleJsonLd({
    title: "Bautismo de Buceo en España: Qué Esperar, Requisitos y Reserva",
    description:
      "Guía paso a paso para tu primer bautismo de buceo en España: en qué consiste la experiencia, qué incluye el precio y qué comparar antes de elegir centro.",
    path: "/guias/bautismo-de-buceo-en-espana",
    datePublished: "2026-10-04",
    dateModified: "2026-10-18",
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
        <span className="eyebrow">PRINCIPIANTES · PRIMERA INMERSIÓN</span>
        <h1>Bautismo de buceo en España: qué es, cómo funciona y qué incluye</h1>
        <p className="lead">
          El bautismo de buceo (también llamado <em>Try Scuba</em> o <em>Discover Scuba Diving</em>) es la forma más sencilla y segura de respirar bajo el agua por primera vez sin necesidad de experiencia previa ni exámenes teóricos largos.
        </p>

        <div className="guide-article">
          <h2>1. ¿En qué consiste exactamente un bautismo de buceo?</h2>
          <p>
            Es una actividad guiada de medio día (habitualmente entre 2 y 3 horas en total) dividida en tres partes:
          </p>
          <ul>
            <li>
              <strong>Explicación inicial (briefing):</strong> el instructor te explica cómo funciona el equipo autónomo, cómo compensar los oídos al descender, las señales básicas con las manos y las normas de seguridad.
            </li>
            <li>
              <strong>Adaptación en agua poco profunda:</strong> pruebas a respirar por el regulador en superficie o a poca profundidad hasta sentirte completamente cómodo.
            </li>
            <li>
              <strong>Paseo submarino supervisado:</strong> realizas una inmersión a baja profundidad (generalmente entre 5 y 10 metros, siempre dentro de los límites de iniciación) acompañado en todo momento por un instructor que controla tu equipo y flotabilidad.
            </li>
          </ul>

          <h2>2. ¿Qué suele incluir la actividad?</h2>
          <p>
            En la mayoría de las escuelas de buceo de España, la reserva de un bautismo incluye el alquiler completo del material (traje de neopreno, máscara, aletas, chaleco compensador, regulador, botella y plomos), el seguro de accidentes durante la actividad y el acompañamiento del instructor. Algunos centros incluyen además salida en barco o fotografías subacuáticas.
          </p>
          <p>
            Puedes consultar los rangos reales de precios en nuestra guía sobre <Link href="/guias/cuanto-cuesta-un-bautismo-de-buceo" className="text-link">cuánto cuesta un bautismo de buceo en España</Link> o comparar si te compensa más <Link href="/guias/bautismo-vs-curso-open-water" className="text-link">empezar por un bautismo o hacer el curso Open Water</Link>.
          </p>

          <h2>3. Zonas populares para hacer tu primer bautismo</h2>
          <div className="guide-grid">
            <article className="guide-card">
              <span className="eyebrow">CATALUÑA</span>
              <h3>Costa Brava y Girona</h3>
              <p>Calas rocosas de aguas claras en Tossa de Mar, L&apos;Estartit, Palamós o Lloret de Mar.</p>
              <Link href="/actividades?type=Bautismo&region=Catalu%C3%B1a" className="text-link">
                Ver bautismos en Cataluña →
              </Link>
            </article>
            <article className="guide-card">
              <span className="eyebrow">ISLAS BALEARES</span>
              <h3>Mallorca, Menorca e Ibiza</h3>
              <p>Aguas tranquilas y luminosas sobre fondos de arena y praderas de posidonia.</p>
              <Link href="/actividades?type=Bautismo&region=Baleares" className="text-link">
                Ver bautismos en Baleares →
              </Link>
            </article>
            <article className="guide-card">
              <span className="eyebrow">ISLAS CANARIAS</span>
              <h3>Tenerife, Lanzarote y Gran Canaria</h3>
              <p>Temperatura suave durante todo el año y gran visibilidad en fondos volcánicos.</p>
              <Link href="/actividades?type=Bautismo&region=Canarias" className="text-link">
                Ver bautismos en Canarias →
              </Link>
            </article>
          </div>

          <h2>4. Qué comprobar antes de reservar</h2>
          <p>
            Revisa siempre los <Link href="/guias/requisitos-para-bucear-en-espana" className="text-link">requisitos básicos para bucear</Link>: saber nadar, cumplir la edad mínima fijada por el centro (habitualmente 8 o 10 años con autorización materna/paterna), no padecer afecciones médicas incompatibles con los cambios de presión y respetar un margen de seguridad de al menos 12–24 horas antes de subir a un avión.
          </p>

          <div className="cta-section" style={{ paddingBottom: 0 }}>
            <div className="cta-panel">
              <div>
                <span className="eyebrow">RESERVA TU PRIMERA EXPERIENCIA</span>
                <h2>Compara bautismos de buceo en España</h2>
                <p>Filtra por comunidad autónoma o localidad y consulta precios desde y duración.</p>
              </div>
              <Link href="/actividades?type=Bautismo" className="button button-primary">
                Ver bautismos disponibles →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
