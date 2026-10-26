import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildArticleJsonLd } from "@/lib/seo";

export const metadata = {
  title: "PADI vs SSI: Diferencias, Precios y Cuál Elegir en España",
  description:
    "Comparativa práctica entre PADI y SSI: reconocimiento internacional ISO/WRSTC, convalidación entre cursos, plataformas digitales y cómo elegir escuela.",
  alternates: {
    canonical: "/guias/padi-vs-ssi-diferencias",
  },
  openGraph: {
    title: "PADI vs SSI: Diferencias, Precios y Cuál Elegir | Buceo Atlas",
    description:
      "Descubre qué certificadora de buceo te conviene más antes de reservar tu curso Open Water.",
    url: "/guias/padi-vs-ssi-diferencias",
    type: "article",
  },
};

export default function PadiVsSsiPage() {
  const articleJsonLd = buildArticleJsonLd({
    title: "PADI vs SSI: Diferencias, Precios y Cuál Elegir en España",
    description:
      "Comparativa práctica entre PADI y SSI: reconocimiento internacional ISO/WRSTC, convalidación entre cursos, plataformas digitales y cómo elegir escuela.",
    path: "/guias/padi-vs-ssi-diferencias",
    datePublished: "2026-10-15",
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
            { name: "PADI vs SSI", path: "/guias/padi-vs-ssi-diferencias" },
          ]}
        />
        <span className="eyebrow">CERTIFICACIONES · COMPARATIVA</span>
        <h1>PADI vs SSI: ¿Cuál es mejor y qué diferencias reales hay?</h1>
        <p className="lead">
          Si estás pensando en iniciarte en el submarinismo o sacarte el <strong>Open Water Diver</strong>, verás escuelas en España que enseñan con PADI y otras con SSI. Analizamos su equivalencia internacional, formato de estudio y en qué fijarte para elegir bien.
        </p>

        <div className="notice-card" style={{ margin: "2rem 0" }}>
          <h2>Respuesta rápida: ¿Hay alguna certificadora superior?</h2>
          <p>
            <strong>No. Ambas certificaciones tienen la misma validez legal e internacional.</strong> Tanto PADI (<em>Professional Association of Diving Instructors</em>) como SSI (<em>Scuba Schools International</em>) forman parte del <strong>WRSTC</strong> (<em>World Recreational Scuba Training Council</em>) y sus títulos de buceador autónomo inicial cumplen la norma internacional <strong>ISO 24801-2</strong> (EN 14153-2).
          </p>
          <p style={{ marginTop: "0.75rem" }}>
            Con un carnet Open Water de SSI podrás bucear y alquilar equipo en un centro PADI en cualquier destino del mundo, y viceversa.
          </p>
        </div>

        <div className="guide-article">
          <h2>Tabla comparativa: PADI frente a SSI</h2>
          <div style={{ overflowX: "auto", margin: "1.5rem 0" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
              <thead>
                <tr style={{ borderBottom: "2px solid var(--line, #cbd5e1)" }}>
                  <th style={{ padding: "0.75rem" }}>Criterio</th>
                  <th style={{ padding: "0.75rem" }}>PADI</th>
                  <th style={{ padding: "0.75rem" }}>SSI</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid var(--line, #e2e8f0)" }}>
                  <td style={{ padding: "0.75rem" }}><strong>Estándar internacional</strong></td>
                  <td style={{ padding: "0.75rem" }}>ISO 24801-2 / WRSTC (reconocimiento mundial).</td>
                  <td style={{ padding: "0.75rem" }}>ISO 24801-2 / WRSTC (reconocimiento mundial).</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--line, #e2e8f0)" }}>
                  <td style={{ padding: "0.75rem" }}><strong>Secuencia de ejercicios</strong></td>
                  <td style={{ padding: "0.75rem" }}>Progresión estandarizada paso a paso según manual.</td>
                  <td style={{ padding: "0.75rem" }}>Permite cierta flexibilidad al instructor para adaptar el orden de práctica en el agua.</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--line, #e2e8f0)" }}>
                  <td style={{ padding: "0.75rem" }}><strong>Teoría y plataforma digital</strong></td>
                  <td style={{ padding: "0.75rem" }}>PADI eLearning y aplicación PADI.</td>
                  <td style={{ padding: "0.75rem" }}>Plataforma y aplicación MySSI con cuaderno de bitácora digital integrado.</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--line, #e2e8f0)" }}>
                  <td style={{ padding: "0.75rem" }}><strong>Relación instructor–escuela</strong></td>
                  <td style={{ padding: "0.75rem" }}>Los instructores en activo pueden certificar de forma independiente o en centros PADI.</td>
                  <td style={{ padding: "0.75rem" }}>Los instructores tramitan las certificaciones vinculados a un centro oficial SSI.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>1. Metodología y habilidades en el agua</h2>
          <p>
            El temario práctico obligatorio del curso <strong>Open Water Diver</strong> (hasta 18 metros de profundidad máxima recomendada) es esencialmente el mismo en ambas organizaciones: montaje del equipo, vaciado de máscara, recuperación y purga del regulador, uso de la fuente de aire alternativa, control de flotabilidad neutra y procedimientos de ascenso seguro.
          </p>
          <p>
            La diferencia práctica reside en la estructura de las sesiones de aguas confinadas: PADI sigue una secuencia muy pautada bloque por bloque, mientras que SSI da margen al instructor para repetir o reordenar un ejercicio durante la formación si un alumno necesita más tiempo para sentirse cómodo antes de evaluarlo.
          </p>

          <h2>2. ¿Puedo cambiar de SSI a PADI (o al revés) en el siguiente curso?</h2>
          <p>
            <strong>Sí, son totalmente convalidables.</strong> Gracias a la equivalencia ISO entre agencias miembro del WRSTC, puedes cursar tu Open Water Diver con SSI y más adelante realizar el <em>Advanced Open Water</em> o la especialidad de <em>Nitrox</em> en un centro PADI (o a la inversa) sin tener que repetir niveles ni pagar tasas de convalidación.
          </p>

          <h2>3. Qué conviene comparar antes de reservar tu curso</h2>
          <p>
            En la práctica, tu aprendizaje dependerá mucho más de la escuela y del instructor que de las siglas del carnet. Antes de reservar en España, revisa:
          </p>
          <ul>
            <li><strong>Qué incluye el precio:</strong> comprueba si las tasas de certificación, el material didáctico digital, el alquiler completo del equipo y el seguro durante el curso están incluidos en el precio anunciado.</li>
            <li><strong>Tamaño del grupo:</strong> pregunta cuántos alumnos van por instructor en las prácticas de mar.</li>
            <li><strong>Entorno de las prácticas:</strong> si las sesiones de aguas confinadas se hacen en piscina o en una cala protegida y si las salidas a mar abierto son desde playa o desde barco.</li>
          </ul>
          <p>
            Si todavía no sabes si quieres hacer el curso completo, consulta nuestra comparativa entre <Link href="/guias/bautismo-vs-curso-open-water" className="text-link">hacer un bautismo de buceo o el curso Open Water</Link> o revisa los <Link href="/guias/como-elegir-escuela-de-buceo" className="text-link">criterios para elegir escuela de buceo</Link>.
          </p>

          <div className="cta-section" style={{ paddingBottom: 0 }}>
            <div className="cta-panel">
              <div>
                <span className="eyebrow">CURSOS Y ESCUELAS</span>
                <h2>Compara cursos Open Water y escuelas en España</h2>
                <p>
                  Filtra los cursos disponibles por comunidad autónoma o consulta el directorio de centros de buceo.
                </p>
              </div>
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                <Link className="button button-primary" href="/actividades/#type=Curso">
                  Ver cursos de buceo →
                </Link>
                <Link className="button button-ghost" href="/centros">
                  Directorio de escuelas
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
