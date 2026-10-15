import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildArticleJsonLd } from "@/lib/seo";

export const metadata = {
  title: "PADI vs SSI: Diferencias, Precios y Cuál Elegir en España",
  description:
    "Comparativa completa entre PADI y SSI: diferencias reales, precios, reconocimiento internacional, convalidaciones y cuál te conviene para empezar a bucear.",
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
      "Comparativa completa entre PADI y SSI: diferencias reales, precios, reconocimiento internacional, convalidaciones y cuál te conviene para empezar a bucear.",
    path: "/guias/padi-vs-ssi-diferencias",
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
          Si estás pensando en iniciarte en el submarinismo o sacarte el <strong>Open Water Diver</strong>, seguro que has visto escuelas que enseñan con PADI y otras con SSI. Analizamos precios, reconocimiento mundial y diferencias didácticas para que tomes la mejor decisión.
        </p>

        {/* Bloque respuesta directa para Featured Snippet */}
        <div className="notice-card" style={{ margin: "2rem 0" }}>
          <h2>Respuesta rápida: ¿Hay alguna certificadora superior?</h2>
          <p>
            <strong>No. Ambas certificaciones tienen el mismo valor legal e internacional.</strong> Tanto PADI (*Professional Association of Diving Instructors*) como SSI (*Scuba Schools International*) cumplen estrictamente los estándares internacionales fijados por la <strong>WRSTC</strong> (*World Recreational Scuba Training Council*) y las normas <strong>ISO</strong> (EN 14153-2 / ISO 24801-2).
          </p>
          <p>
            Un carnet Open Water de SSI te permitirá alquilar equipo y bucear en un centro PADI en Tailandia o el Mar Rojo, y un título PADI te servirá exactamente igual en cualquier rincón del planeta.
          </p>
        </div>

        <div className="guide-article">
          <h2>Tabla comparativa: PADI frente a SSI</h2>
          <div style={{ overflowX: "auto", margin: "1.5rem 0" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
              <thead>
                <tr style={{ borderBottom: "2px solid var(--border, #cbd5e1)" }}>
                  <th style={{ padding: "0.75rem" }}>Criterio</th>
                  <th style={{ padding: "0.75rem" }}>PADI</th>
                  <th style={{ padding: "0.75rem" }}>SSI</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid var(--border, #e2e8f0)" }}>
                  <td style={{ padding: "0.75rem" }}><strong>Reconocimiento mundial</strong></td>
                  <td style={{ padding: "0.75rem" }}>Global (la marca más conocida históricamente).</td>
                  <td style={{ padding: "0.75rem" }}>Global (presente en más de 110 países).</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--border, #e2e8f0)" }}>
                  <td style={{ padding: "0.75rem" }}><strong>Flexibilidad del temario</strong></td>
                  <td style={{ padding: "0.75rem" }}>Estructura rígida de ejercicios paso a paso.</td>
                  <td style={{ padding: "0.75rem" }}>El instructor puede adaptar el orden al ritmo del alumno.</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--border, #e2e8f0)" }}>
                  <td style={{ padding: "0.75rem" }}><strong>Material y App digital</strong></td>
                  <td style={{ padding: "0.75rem" }}>App PADI y eLearning propio.</td>
                  <td style={{ padding: "0.75rem" }}>App MySSI integrada (muy valorada por los alumnos).</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--border, #e2e8f0)" }}>
                  <td style={{ padding: "0.75rem" }}><strong>Coste de certificación</strong></td>
                  <td style={{ padding: "0.75rem" }}>Suele ser ligeramente superior (tasas de kit digital).</td>
                  <td style={{ padding: "0.75rem" }}>Suele ser más competitivo para los centros asociados.</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--border, #e2e8f0)" }}>
                  <td style={{ padding: "0.75rem" }}><strong>Vinculación del instructor</strong></td>
                  <td style={{ padding: "0.75rem" }}>El instructor puede certificar de forma autónoma.</td>
                  <td style={{ padding: "0.75rem" }}>El instructor debe estar asociado a un centro físico SSI.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>1. Filosofía de enseñanza y metodología</h2>
          <p>
            Aunque ambas agencias te enseñarán exactamente las mismas habilidades de seguridad —como vaciar la máscara bajo el agua, recuperar el regulador, gestionar el aire y controlar la flotabilidad—, difieren en cómo se imparte:
          </p>
          <ul>
            <li>
              <strong>PADI</strong> exige seguir un orden secuencial estricto. Si no se supera el ejercicio A, no se pasa al B. Esto garantiza una consistencia absoluta en cualquier lugar del mundo.
            </li>
            <li>
              <strong>SSI</strong> permite lo que denominan el <em>80/20</em>: el instructor puede posponer un ejercicio que te esté bloqueando (por ejemplo, quitarte la máscara entera) para más adelante en la sesión, avanzando en otros aspectos para que ganes confianza en el agua antes de retomarlo.
            </li>
          </ul>

          <h2>2. ¿Y si en el futuro quiero cambiar de agencia?</h2>
          <p>
            Esta es una de las dudas más frecuentes. <strong>El traspaso es 100% compatible.</strong>
          </p>
          <p>
            Si te sacas el primer curso (Open Water Diver) con SSI, puedes hacer el curso avanzado (Advanced Open Water) con PADI sin perder ningún crédito, y viceversa. Ambas organizaciones reconocen mutuamente los niveles básicos y avanzados bajo las equivalencias de la norma ISO 24801.
          </p>

          <h2>3. ¿Qué deberías valorar realmente antes de elegir?</h2>
          <p>
            Los buceadores veteranos coinciden siempre en el mismo consejo: <strong>lo que marca la diferencia no es el logo que lleve tu carnet, sino el instructor y el centro de buceo.</strong>
          </p>
          <p>
            Al comparar escuelas en España, te recomendamos fijarte en:
          </p>
          <ul>
            <li><strong>Ratio alumnos por instructor:</strong> Un grupo reducido (máximo 4 alumnos por guía) garantiza mayor seguridad y atención personalizada.</li>
            <li><strong>Estado y mantenimiento del equipo:</strong> Neoprenos, chalecos y reguladores modernos y bien cuidados.</li>
            <li><strong>Instalaciones y logística:</strong> Si el centro tiene barco propio, aula climatizada o vestuarios a pie de embarque.</li>
          </ul>

          <div className="commercial-card commercial-card-activity" style={{ margin: "2.5rem 0" }}>
            <div className="commercial-card-body">
              <span className="eyebrow">PASO A PASO</span>
              <h3>¿Aún no tienes claro si hacer el curso completo?</h3>
              <p>
                Si nunca has respirado bajo el agua, lo más recomendable suele ser probar antes un <strong>bautismo de buceo</strong>. En una mañana comprobarás cómo te sientes con el equipo antes de comprometer los 350 € – 450 € habituales de un curso de certificación.
              </p>
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginTop: "1rem" }}>
                <Link className="button button-primary" href="/guias/cuanto-cuesta-un-bautismo-de-buceo">
                  Leer cuánto cuesta un bautismo →
                </Link>
                <Link className="button button-secondary" href="/centros">
                  Ver escuelas verificadas en España
                </Link>
                <Link className="button button-secondary" href="/actividades?type=Curso">
                  Ver cursos disponibles
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
