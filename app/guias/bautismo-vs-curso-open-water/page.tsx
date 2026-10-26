import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildArticleJsonLd } from "@/lib/seo";

export const metadata = {
  title: "Bautismo de Buceo vs Curso Open Water · Diferencias y Precios",
  description:
    "¿Dudas entre probar un bautismo de buceo o sacarte directamente el título Open Water Diver? Comparamos duración, profundidad, precios y requisitos.",
  alternates: {
    canonical: "/guias/bautismo-vs-curso-open-water",
  },
  openGraph: {
    title: "Bautismo de Buceo vs Curso Open Water | Buceo Atlas",
    description:
      "Comparativa práctica para saber si empezar por un bautismo submarino o hacer directamente el curso Open Water Diver.",
    url: "/guias/bautismo-vs-curso-open-water",
    type: "article",
  },
};

export default function BaptismVsOpenWaterPage() {
  const articleJsonLd = buildArticleJsonLd({
    title: "Bautismo de Buceo vs Curso Open Water · Diferencias y Precios",
    description:
      "¿Dudas entre probar un bautismo de buceo o sacarte directamente el título Open Water Diver? Comparamos duración, profundidad, precios y requisitos.",
    path: "/guias/bautismo-vs-curso-open-water",
    datePublished: "2026-10-18",
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
            { name: "Bautismo vs Open Water", path: "/guias/bautismo-vs-curso-open-water" },
          ]}
        />
        <span className="eyebrow">PRINCIPIANTES · DECISIÓN</span>
        <h1>Bautismo de buceo vs Curso Open Water: ¿por cuál empezar?</h1>
        <p className="lead">
          Quienes quieren estrenarse bajo el agua suelen dudar entre reservar primero un <strong>bautismo de buceo</strong> de unas horas o matricularse directamente en el <strong>curso Open Water Diver</strong>. Comparamos ambas opciones para que elijas según tu tiempo, presupuesto y objetivo.
        </p>

        <div className="notice-card" style={{ margin: "2rem 0" }}>
          <h2>Resumen rápido</h2>
          <p>
            El <strong>bautismo de buceo</strong> es una experiencia puntual guiada de medio día (no otorga carnet de buceador autónomo), ideal para probar sensaciones o disfrutar de una actividad en vacaciones. El <strong>curso Open Water Diver</strong> es una formación de 3 a 4 días con teoría y prácticas que te certifica de por vida para bucear hasta 18 metros en cualquier lugar del mundo.
          </p>
        </div>

        <div className="guide-article">
          <h2>Tabla comparativa: Bautismo frente a Open Water Diver</h2>
          <div style={{ overflowX: "auto", margin: "1.5rem 0" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
              <thead>
                <tr style={{ borderBottom: "2px solid var(--line, #cbd5e1)" }}>
                  <th style={{ padding: "0.75rem" }}>Aspecto</th>
                  <th style={{ padding: "0.75rem" }}>Bautismo de buceo</th>
                  <th style={{ padding: "0.75rem" }}>Curso Open Water Diver</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid var(--line, #e2e8f0)" }}>
                  <td style={{ padding: "0.75rem" }}><strong>¿Otorga título internacional?</strong></td>
                  <td style={{ padding: "0.75rem" }}>No (es una experiencia introductoria).</td>
                  <td style={{ padding: "0.75rem" }}>Sí, certificación internacional permanente (ISO 24801-2).</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--line, #e2e8f0)" }}>
                  <td style={{ padding: "0.75rem" }}><strong>Duración habitual</strong></td>
                  <td style={{ padding: "0.75rem" }}>De 2 a 3 horas (una mañana o tarde).</td>
                  <td style={{ padding: "0.75rem" }}>De 3 a 4 días en destino (más teoría online o presencial).</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--line, #e2e8f0)" }}>
                  <td style={{ padding: "0.75rem" }}><strong>Profundidad máxima</strong></td>
                  <td style={{ padding: "0.75rem" }}>Entre 5 y 12 m (siempre junto al instructor).</td>
                  <td style={{ padding: "0.75rem" }}>Hasta 18 metros con un compañero titulado.</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--line, #e2e8f0)" }}>
                  <td style={{ padding: "0.75rem" }}><strong>Inmersiones en mar</strong></td>
                  <td style={{ padding: "0.75rem" }}>1 inmersión (o 2 en bautismos dobles).</td>
                  <td style={{ padding: "0.75rem" }}>Mínimo 4 inmersiones en aguas abiertas más sesiones confinadas.</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--line, #e2e8f0)" }}>
                  <td style={{ padding: "0.75rem" }}><strong>Precio orientativo en España</strong></td>
                  <td style={{ padding: "0.75rem" }}>Entre 55 € y 110 € según modalidad.</td>
                  <td style={{ padding: "0.75rem" }}>Entre 350 € y 490 € con material y tasas.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>1. Cuándo te conviene elegir un bautismo de buceo</h2>
          <ul>
            <li>Nunca has respirado con regulador bajo el agua y quieres comprobar primero si te sientes cómodo compensando los oídos.</li>
            <li>Estás de escapada o vacaciones y solo dispones de una mañana libre.</li>
            <li>Buscas una actividad puntual en pareja, familia o con amigos sin estudiar teoría ni realizar ejercicios de examen.</li>
          </ul>
          <p>
            Muchos centros de buceo en España permiten además que, si haces el bautismo y te encanta, esa inmersión o parte de su importe cuente como primera práctica si decides continuar con el curso durante los días siguientes (pregúntalo antes al centro).
          </p>

          <h2>2. Cuándo ir directamente al curso Open Water Diver</h2>
          <ul>
            <li>Ya has hecho snorkel o algún bautismo previo y tienes claro que quieres aprender a bucear de forma autónoma.</li>
            <li>Dispones de al menos 3 o 4 días seguidos (o dos fines de semana) y puedes adelantar la teoría digital desde casa antes de viajar.</li>
            <li>Planeas futuros viajes a destinos como <Link href="/buceo/el-hierro" className="text-link">El Hierro</Link>, <Link href="/buceo/illes-medes" className="text-link">Illes Medes</Link>, <Link href="/buceo/cabo-de-palos" className="text-link">Cabo de Palos</Link> o el extranjero, donde tener el carnet te permite unirte a las salidas de buceo (<em>Fun Dives</em>) por un coste por inmersión mucho menor.</li>
          </ul>
          <p>
            Si optas por el curso, puedes consultar nuestra guía sobre <Link href="/guias/padi-vs-ssi-diferencias" className="text-link">diferencias entre PADI y SSI</Link> y los <Link href="/guias/requisitos-para-bucear-en-espana" className="text-link">requisitos médicos y de edad para bucear</Link>.
          </p>

          <div className="cta-section" style={{ paddingBottom: 0 }}>
            <div className="cta-panel">
              <div>
                <span className="eyebrow">COMPARA EN TU DESTINO</span>
                <h2>Explora bautismos y cursos Open Water en España</h2>
                <p>
                  Filtra por modalidad y comunidad autónoma para ver precios desde y escuelas disponibles.
                </p>
              </div>
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                <Link className="button button-primary" href="/actividades/#type=Bautismo">
                  Ver bautismos →
                </Link>
                <Link className="button button-ghost" href="/actividades/#type=Curso">
                  Ver cursos Open Water
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
