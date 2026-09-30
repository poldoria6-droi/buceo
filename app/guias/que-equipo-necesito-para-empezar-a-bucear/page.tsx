import Link from "next/link";

export const metadata = {
  title: "Qué equipo necesito para empezar a bucear",
  description: "Guía de compra para principiantes: qué material de buceo necesitas, qué conviene alquilar y qué comparar antes de comprar.",
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
  return (
    <section className="section">
      <div className="container">
        <Link href="/guias" className="back-link">← Todas las guías</Link>
        <span className="eyebrow">EQUIPAMIENTO · PRINCIPIANTES</span>
        <h1>Qué equipo necesito para empezar a bucear</h1>
        <p className="lead">La mejor compra no empieza por la marca: empieza por entender qué piezas necesitas, cuáles puedes alquilar y qué características debes comparar.</p>

        <div className="guide-article">
          <h2>¿Tengo que comprar todo desde el principio?</h2>
          <p>No. Para las primeras inmersiones y cursos, muchos centros ofrecen equipo de alquiler. Comprar poco a poco puede tener sentido cuando ya sabes qué tipo de buceo haces y qué ajuste necesitas.</p>

          <h2>Qué material encontrarás</h2>
          <div className="equipment-grid">
            {products.map(([icon, title, text]) => (
              <article className="equipment-card" key={title}>
                <div className="equipment-card-top"><span className="equipment-icon">{icon}</span><span className="equipment-arrow">↗</span></div>
                <h3>{title}</h3>
                <p>{text}</p>
                <Link href="/equipo" className="equipment-card-link">Ver categoría <span>→</span></Link>
              </article>
            ))}
          </div>

          <h2>¿Qué compraría primero un principiante?</h2>
          <p>No hay una única respuesta. Como criterio práctico, conviene empezar por elementos cuyo ajuste sea muy personal y después decidir sobre piezas más caras o técnicas cuando tengas experiencia suficiente para saber qué necesitas.</p>

          <h2>Qué comparar antes de comprar</h2>
          <p>Prioriza ajuste y comodidad, características reales de uso, mantenimiento, disponibilidad de repuestos o servicio cuando aplique, y facilidad para viajar con el material. El precio por sí solo no permite comparar bien dos equipos.</p>

          <div className="cta-section">
            <div className="cta-panel">
              <div><span className="eyebrow">COMPRA CON CRITERIO</span><h2>Explora el equipamiento de Atlas</h2><p>La sección de equipo se irá convirtiendo en comparativas y selecciones con enlaces a tiendas y partners verificados.</p></div>
              <Link href="/equipo" className="button button-primary">Ver equipo →</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
