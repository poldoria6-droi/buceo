import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildArticleJsonLd } from "@/lib/seo";

export const metadata = {
  title: "Qué Equipo Necesito para Empezar a Bucear: Guía Práctica",
  description:
    "Guía de equipamiento de buceo para principiantes: qué material incluye la escuela, qué piezas comprar primero y cómo elegir máscara, traje, regulador y ordenador.",
  alternates: {
    canonical: "/guias/que-equipo-necesito-para-empezar-a-bucear",
  },
  openGraph: {
    title: "Qué Equipo Necesito para Empezar a Bucear | Buceo Atlas",
    description:
      "Aprende qué piezas de equipo necesitas para bucear, cuáles alquilar al principio y en qué orden comprar tu material.",
    url: "/guias/que-equipo-necesito-para-empezar-a-bucear",
    type: "article",
  },
};

const gearItems = [
  ["🥽", "Máscara y tubo", "El ajuste al rostro es personal: debe hacer vacío suave sin apretar el puente nasal y tener cristal templado."],
  ["🩴", "Escarpines y aletas", "Protegen del frío y de las rocas en entradas desde costa. Las aletas regulables con escarpín de suela son las más polivalentes."],
  ["⌚", "Ordenador de buceo", "Pieza clave de seguridad desde que eres Open Water: controla profundidad, tiempo sin descompresión y velocidad de ascenso."],
  ["🧥", "Traje de neopreno", "Su grosor depende de la temperatura del agua en tu zona habitual (de 3 mm en verano cálido a 5–7 mm o semiseco en aguas templadas/frías)."],
  ["🦺", "Chaleco compensador (BCD)", "Permite lograr la flotabilidad neutra bajo el agua e inflarse en superficie. Conviene probar varias tallas alquilando antes de decidir."],
  ["⚙️", "Regulador con octopus y manómetro", "Reduce la presión de la botella para respirar con suavidad. Requiere revisiones periódicas por servicio técnico autorizado."],
];

export default function BeginnerGearGuidePage() {
  const articleJsonLd = buildArticleJsonLd({
    title: "Qué Equipo Necesito para Empezar a Bucear: Guía Práctica",
    description:
      "Guía de equipamiento de buceo para principiantes: qué material incluye la escuela, qué piezas comprar primero y cómo elegir.",
    path: "/guias/que-equipo-necesito-para-empezar-a-bucear",
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
            {
              name: "Equipo para empezar a bucear",
              path: "/guias/que-equipo-necesito-para-empezar-a-bucear",
            },
          ]}
        />
        <span className="eyebrow">EQUIPAMIENTO · PRINCIPIANTES</span>
        <h1>Qué equipo necesito para empezar a bucear</h1>
        <p className="lead">
          Una de las dudas más habituales antes de apuntarse a un bautismo o a un curso Open Water es si hace falta comprar material propio. La respuesta corta es <strong>no</strong>: al principio las escuelas incluyen todo el equipo, y lo más inteligente es ir adquiriéndolo por fases.
        </p>

        <div className="guide-article">
          <h2>1. ¿Qué material te presta la escuela en un bautismo o curso?</h2>
          <p>
            En prácticamente cualquier <Link href="/guias/bautismo-de-buceo-en-espana" className="text-link">bautismo de buceo</Link> o curso de iniciación en España, el centro te proporciona el equipo autónomo completo: traje de neopreno, escarpines, máscara, aletas, chaleco hidrostático (<em>jacket</em> o BCD), regulador con fuente alternativa (<em>octopus</em>) y manómetro, botella cargada de aire y cinturón de lastre. Solo necesitas llevar bañador y toalla.
          </p>

          <h2>2. Las 6 piezas básicas del equipo de buceo</h2>
          <div className="guide-grid">
            {gearItems.map(([icon, title, text]) => (
              <article className="guide-card" key={title}>
                <span className="eyebrow" style={{ fontSize: "1.5rem" }}>{icon}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>

          <h2>3. En qué orden conviene comprar tu propio equipo</h2>
          <p>
            Si tras obtener tu certificación decides seguir buceando con regularidad, los instructores suelen recomendar este orden progresivo:
          </p>
          <ul>
            <li>
              <strong>Fase 1 (higiene y ajuste personal):</strong> una <strong>máscara</strong> que se adapte bien a tu cara y unos <strong>escarpines</strong> de tu talla. Una máscara que no entra agua transforma por completo la comodidad de la inmersión.
            </li>
            <li>
              <strong>Fase 2 (seguridad y lecturas propias):</strong> tu propio <strong>ordenador de buceo</strong> (para conocer su interfaz de memoria y llevar el historial de tus inmersiones) y unas <strong>aletas</strong> adecuadas a tu patada.
            </li>
            <li>
              <strong>Fase 3 (confort térmico):</strong> un <strong>traje de neopreno</strong> adaptado a las zonas y épocas en las que bucees (consulta nuestra guía sobre la <Link href="/guias/mejor-epoca-para-bucear-en-espana" className="text-link">temperatura del agua y mejor época en España</Link>).
            </li>
            <li>
              <strong>Fase 4 (equipo pesado):</strong> <strong>regulador</strong> y <strong>chaleco (BCD)</strong>. Compensa comprarlos cuando haces suficientes inmersiones al año y no dependes siempre de viajar ligero en avión, donde muchos buceadores prefieren seguir alquilándolos en el <Link href="/centros" className="text-link">centro de destino</Link>.
            </li>
          </ul>

          <div className="cta-section" style={{ paddingBottom: 0 }}>
            <div className="cta-panel">
              <div>
                <span className="eyebrow">EQUIPO INCLUIDO</span>
                <h2>Reserva tu bautismo o curso con material incluido</h2>
                <p>
                  Compara experiencias de iniciación y cursos en escuelas de toda la costa española.
                </p>
              </div>
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                <Link href="/actividades?type=Bautismo" className="button button-primary">
                  Ver bautismos →
                </Link>
                <Link href="/actividades?type=Curso" className="button button-ghost">
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
