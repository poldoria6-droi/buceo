import Link from "next/link";

const guides = [
  ["Bautismo de buceo en España", "Qué es, qué suele incluir y qué comparar antes de reservar.", "Principiantes", "/guias/bautismo-de-buceo-en-espana", "Ver guía →"],
  ["Cuánto cuesta un bautismo de buceo", "Qué factores cambian el precio y cómo comparar dos experiencias.", "Precios", "/guias/cuanto-cuesta-un-bautismo-de-buceo", "Ver guía →"],
  ["PADI vs SSI: diferencias que conviene entender", "Comparativa completa sobre precios, convalidaciones, apps y cuál elegir.", "Certificaciones", "/guias/padi-vs-ssi-diferencias", "Ver comparativa →"],
  ["Las mejores zonas de buceo en España", "Los destinos y reservas marinas imprescindibles según tu nivel y temporada.", "Destinos", "/guias/mejores-zonas-de-buceo-en-espana", "Ver mejores zonas →"],
  ["Qué equipo necesito para empezar a bucear", "Qué material necesitas, qué puedes alquilar y qué conviene comparar antes de comprar.", "Equipamiento", "/guias/que-equipo-necesito-para-empezar-a-bucear", "Ver guía →"],
  ["Qué animales puedes encontrar buceando", "Guía visual de fauna por destinos y tipo de fondo marino.", "Fauna", "/fauna", "Ver especies →"]
];

export const metadata = {
  title: "Guías Prácticas de Buceo · Consejos, Precios y Certificaciones",
  description:
    "Guías de buceo para principiantes y titulados: bautismo, cuánto cuesta bucear en España, equipamiento, certificaciones PADI vs SSI y fauna marina.",
  alternates: {
    canonical: "/guias",
  },
  openGraph: {
    title: "Guías Prácticas de Buceo | Buceo Atlas",
    description: "Todo lo que necesitas saber antes de tu próxima inmersión o bautismo.",
    url: "/guias",
    type: "website",
  },
};

export default function GuidesPage() {
  return (
    <section className="section">
      <div className="container">
        <span className="eyebrow">CONSEJOS Y APRENDIZAJE</span>
        <h1>Guías para bucear mejor</h1>
        <p className="lead">
          Contenido pensado para resolver preguntas que aparecen antes de decidir destino, experiencia o escuela de buceo.
        </p>
        <div className="guide-grid">
          {guides.map(([title, text, tag, url, cta]) => (
            <article className="guide-card" key={title}>
              <span className="eyebrow">{tag}</span>
              <h2>{title}</h2>
              <p>{text}</p>
              <Link href={url} className="text-link">
                {cta}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}