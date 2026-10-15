import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildArticleJsonLd } from "@/lib/seo";

export const metadata = {
  title: "Qué equipo necesito para empezar a bucear: Guía práctica",
  description:
    "Guía para principiantes: qué material de buceo necesitas, qué equipo te proporciona la escuela y qué comprar primero para empezar a bucear.",
  alternates: {
    canonical: "/guias/que-equipo-necesito-para-empezar-a-bucear",
  },
  openGraph: {
    title: "Qué equipo necesito para empezar a bucear | Buceo Atlas",
    description:
      "Aprende qué piezas de equipo necesitas, cuáles puedes alquilar y qué comparar.",
    url: "/guias/que-equipo-necesito-para-empezar-a-bucear",
    type: "article",
  },
};

const products = [
  ["🥽", "Máscara", "Ajuste, estanqueidad, volumen interno y comodidad."],
  ["🩴", "Aletas", "Tipo de calzante, rigidez y uso previsto."],
  ["🧥", "Neopreno", "Grosor, temperatura del agua y ajuste."],
  ["🦺", "Chaleco / BCD", "Ajuste, flotabilidad, distribución del peso y viaje."],
  ["⚙️", "Regulador", "Configuración, mantenimiento y uso previsto."],
  ["⌚", "Ordenador", "Lectura, funciones, batería y posibilidades de crecimiento."],
];

export default function BeginnerGearGuidePage() {
  const articleJsonLd = buildArticleJsonLd({
    title: "Qué equipo necesito para empezar a bucear",
    description:
      "Guía de iniciación: qué material de buceo necesitas, qué conviene alquilar y qué comparar antes de comprar.",
    path: "/guias/que-equipo-necesito-para-empezar-a-bucear",
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
              name: "Equipo para empezar a bucear",
              path: "/guias/que-equipo-necesito-para-empezar-a-bucear",
            },
          ]}
        />
        <span className="eyebrow">EQUIPAMIENTO · PRINCIPIANTES</span>
        <h1>Qué equipo necesito para empezar a bucear</h1>
        <p className="lead">
          La mejor compra no empieza por la marca: empieza por entender qué piezas necesitas, cuáles puedes alquilar y qué características debes comparar.
        </p>

        <div className="guide-article">
          <h2>¿Tengo que comprar todo desde el principio?</h2>
          <p>
            No. Para las primeras inmersiones y cursos, muchos centros ofrecen equipo de alquiler. Comprar poco a poco puede tener sentido cuando ya sabes qué tipo de buceo haces y qué ajuste necesitas.
          </p>

          <h2>Equipo básico para buceo</h2>
          <div className="equipment-grid">
            {products.map(([icon, title, text]) => (
              <article className="equipment-card" key={title}>
                <div className="equipment-card-top">
                  <span className="equipment-icon">{icon}</span>
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>

          <h2>¿Qué compraría primero un principiante?</h2>
          <p>
            No hay una única respuesta. Como criterio práctico, conviene empezar por elementos cuyo ajuste sea muy personal (máscara y escarpines) y después decidir sobre piezas más caras o técnicas cuando tengas experiencia suficiente para saber qué necesitas.
          </p>

          <h2>Qué comparar antes de comprar</h2>
          <p>
            Prioriza ajuste y comodidad, características reales de uso, mantenimiento, disponibilidad de repuestos o servicio cuando aplique, y facilidad para viajar con el material. El precio por sí solo no permite comparar bien dos equipos.
          </p>

          <div className="cta-section">
            <div className="cta-panel">
              <div>
                <span className="eyebrow">TODO INCLUIDO</span>
                <h2>Aprende a bucear con equipo incluido</h2>
                <p>
                  Tanto en bautismos como en cursos Open Water, las escuelas de buceo te proporcionan todo el equipo homologado y el seguro.
                </p>
              </div>
              <Link href="/actividades?type=Bautismo#mapa" className="button button-primary">
                Encontrar inmersión con equipo →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
