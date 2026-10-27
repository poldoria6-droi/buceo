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
  ["🥽", "La máscara (gafas de buceo)", "Es la compra número uno: cada cara tiene su forma, y dar con una silicona blanda que no te deje entrar ni una gota de agua te cambia la vida."],
  ["🩴", "Escarpines y aletas", "Los escarpines con suela de goma te salvan los pies al caminar por rocas resbaladizas y evitan rozaduras con las aletas."],
  ["⌚", "El ordenador de buceo", "Lleva la cuenta de tu profundidad, tiempo de fondo y velocidad de subida. Es la pieza de seguridad que mejor amortizas en cuanto tienes el título."],
  ["🧥", "El traje de neopreno", "Nada abriga igual que un traje que se ciñe a tu cuerpo sin bolsas de agua por la espalda. En España un 5 mm o un 7 mm son los reyes."],
  ["🦺", "El chaleco o jacket (BCD)", "Te permite flotar en superficie y quedarte ingrávido bajo el agua. Alquila varios modelos antes de comprar para ver con cuál vas más cómodo."],
  ["⚙️", "El regulador", "La pieza por la que respiras el aire de la botella. Dura muchísimos años si lo endulzas con mimo y le pasas su revisión técnica."],
];

export default function BeginnerGearGuidePage() {
  const articleJsonLd = buildArticleJsonLd({
    title: "Qué Equipo Necesito para Empezar a Bucear: Guía Práctica",
    description:
      "Guía de equipamiento de buceo para principiantes: qué material incluye la escuela, qué piezas comprar primero y cómo elegir.",
    path: "/guias/que-equipo-necesito-para-empezar-a-bucear",
    datePublished: "2026-10-04",
    dateModified: "2026-10-27",
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
        <span className="eyebrow">MATERIAL SIN GASTAR DE MÁS</span>
        <h1>Qué equipo necesitas para empezar a bucear (y en qué orden comprarlo)</h1>
        <p className="lead">
          El error clásico de quien sale encantado de su curso Open Water es entrar al día siguiente en una tienda y comprarse el equipo entero de golpe. Te contamos qué te presta gratis la escuela al principio y qué piezas sí merece la pena tener tuyas desde el primer verano.
        </p>

        <div className="guide-article">
          <h2>Para tu bautismo o tu curso Open Water: solo bañador y toalla</h2>
          <p>
            Si estás a punto de reservar un <Link href="/guias/bautismo-de-buceo-en-espana" className="text-link">bautismo de buceo</Link> o tu primer curso de iniciación, no compres absolutamente nada antes de ir. En todos los centros de España el precio del bautismo y del curso incluye el alquiler completo del material de pies a cabeza: neopreno, escarpines, máscara, aletas, chaleco, regulador, botella y plomos.
          </p>
          <p>
            De hecho, usar el material de la escuela durante esos primeros días es la mejor forma de descubrir qué talla de aleta te va bien o qué tipo de máscara se adapta mejor a tu cara antes de gastarte un euro.
          </p>

          <h2>Las 6 piezas del equipo y por qué importa cada una</h2>
          <div className="guide-grid" style={{ margin: "1.5rem 0 2rem" }}>
            {gearItems.map(([icon, title, text]) => (
              <article className="guide-card" key={title}>
                <span className="eyebrow" style={{ fontSize: "1.5rem" }}>{icon}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>

          <div className="editorial-tip">
            <p>
              🪥 <strong>El truco de viejo lobo de mar para estrenar máscara nueva:</strong> todas las gafas de buceo salen de fábrica con una película invisible de silicona en el cristal que hace que se empañen sin parar el primer día. Antes de llevarla al mar, frota el cristal por dentro con un poco de pasta de dientes blanca (sin microgránulos) usando la yema del dedo y aclárala con agua. Mano de santo.
            </p>
          </div>

          <h2>El orden inteligente para ir comprando tu equipo poco a poco</h2>
          <p>
            Una vez que ya tienes tu carnet en el bolsillo y empiezas a apuntarte a salidas en barco, cómpralo en este orden para notar el salto de comodidad desde el primer día:
          </p>
          <ul>
            <li>
              <strong>1. Tu propia máscara y unos escarpines (50 € – 90 € en total):</strong> ir bajo el agua con unas gafas que se ajustan a tu cara al milímetro, que no se empañan y que no te obligan a vaciar agua cada dos minutos es el cambio más grande que puedes hacer por menos dinero.
            </li>
            <li>
              <strong>2. El ordenador de buceo de muñeca (180 € – 280 €):</strong> en lugar de usar cada vez un ordenador alquilado con botones distintos, llevar el tuyo te da mucha seguridad, guarda el registro de todas tus inmersiones y te avisa de tu velocidad de subida.
            </li>
            <li>
              <strong>3. Aletas y traje de neopreno:</strong> elige el grosor pensando en dónde vas a bucear el 80 % de las veces (mira antes nuestra tabla de <Link href="/guias/mejor-epoca-para-bucear-en-espana" className="text-link">temperatura del agua en España por meses</Link>).
            </li>
            <li>
              <strong>4. Regulador y chaleco (jacket):</strong> déjalos para el final. Si haces más de 15 o 20 inmersiones al año en coche por la Península te encantará tener los tuyos; si solo buceas una semana al año volando en avión con equipaje de mano, alquilarlos en el <Link href="/centros" className="text-link">centro de buceo de destino</Link> sigue siendo comodísimo.
            </li>
          </ul>

          <div className="cta-section" style={{ paddingBottom: 0 }}>
            <div className="cta-panel">
              <div>
                <span className="eyebrow">TODO EL MATERIAL INCLUIDO</span>
                <h2>Reserva tu bautismo o curso sin comprar equipo</h2>
                <p>
                  Todas las experiencias de iniciación incluyen el equipamiento completo de buceo.
                </p>
              </div>
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                <Link href="/actividades/#type=Bautismo" className="button button-primary">
                  Ver bautismos →
                </Link>
                <Link href="/actividades/#type=Curso" className="button button-ghost">
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
