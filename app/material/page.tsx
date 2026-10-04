import Link from "next/link";

export const metadata = {
  robots: {index:false,follow:false},
  title: "Material de buceo",
  description: "Descubre y compara material de buceo: neoprenos, reguladores, chalecos, aletas, máscaras, ordenadores y accesorios.",
};

const categories = [
  { icon: "🧥", title: "Neoprenos", text: "Trajes húmedos, semisecos y opciones para distintas temperaturas y tipos de inmersión.", hint: "Grosor · ajuste · temperatura" },
  { icon: "⚙️", title: "Reguladores", text: "Descubre configuraciones, primeras etapas y opciones para buceo recreativo y viajes.", hint: "Configuración · respiración · viaje" },
  { icon: "🦺", title: "Chalecos / BCD", text: "Compara comodidad, flotabilidad, peso, ajuste y soluciones para viajar.", hint: "Flotabilidad · ajuste · peso" },
  { icon: "🩴", title: "Aletas", text: "Aletas de calzante o de talón abierto para snorkel, apnea y buceo con botella.", hint: "Potencia · rigidez · calzante" },
  { icon: "🥽", title: "Máscaras y gafas", text: "Encuentra máscaras de silicona, distintos volúmenes y opciones para diferentes rostros.", hint: "Visión · ajuste · volumen" },
  { icon: "⌚", title: "Ordenadores", text: "Compara funciones, pantallas, conectividad y prestaciones según tu nivel.", hint: "Pantalla · funciones · batería" },
  { icon: "🧰", title: "Accesorios", text: "Linternas, boyas, carretes, bolsas, cuchillos de seguridad y pequeños imprescindibles.", hint: "Accesorios · viaje · seguridad" },
  { icon: "🤿", title: "Packs y equipo completo", text: "Una puerta de entrada para quien necesita montar su equipo desde cero.", hint: "Pack · completo · iniciación" },
];

export default function EquipmentPage() {
  return (
    <section className="equipment-page">
      <div className="container">
        <div className="equipment-hero">
          <div>
            <span className="eyebrow">MATERIAL DE BUCEO</span>
            <h1>Todo tu material.<br/><em>En un solo lugar.</em></h1>
            <p>Desde el primer neopreno hasta un ordenador avanzado: descubre qué material necesitas, qué debes comparar y dónde encontrarlo.</p>
            <div className="equipment-hero-actions">
              <a href="#categorias" className="button button-primary">Explorar material <span>→</span></a>
              <Link href="/actividades" className="button button-ghost-dark">Ver experiencias</Link>
            </div>
          </div>
          <div className="equipment-hero-art" aria-hidden="true">
            <div className="gear-orbit gear-orbit-a"></div>
            <div className="gear-orbit gear-orbit-b"></div>
            <div className="gear-core">🤿</div>
            <div className="gear-float gear-float-a">🥽</div>
            <div className="gear-float gear-float-b">⌚</div>
            <div className="gear-float gear-float-c">🩴</div>
          </div>
        </div>

        <section id="categorias" className="equipment-categories">
          <div className="section-heading">
            <div><span className="eyebrow">EXPLORA POR CATEGORÍA</span><h2>Encuentra exactamente lo que necesitas.</h2></div>
            <span className="commercial-note">Comparativas y enlaces de compra se irán incorporando con partners verificados.</span>
          </div>
          <div className="equipment-grid">
            {categories.map((category) => (
              <article className="equipment-card" key={category.title}>
                <div className="equipment-card-top"><span className="equipment-icon">{category.icon}</span><span className="equipment-arrow">↗</span></div>
                <h3>{category.title}</h3>
                <p>{category.text}</p>
                <small>{category.hint}</small>
                <button type="button" className="equipment-card-link" disabled>Ver selección <span>→</span></button>
              </article>
            ))}
          </div>
        </section>

        <section className="equipment-method">
          <div className="equipment-method-intro">
            <span className="eyebrow">CÓMO FUNCIONARÁ</span>
            <h2>Descubre → compara → compra.</h2>
            <p>Buceo Atlas podrá conectar contenido útil con opciones comerciales sin convertir la web en un catálogo interminable.</p>
          </div>
          <div className="equipment-steps">
            <div><b>01</b><strong>Aprende qué necesitas</strong><span>Guías y fichas para entender cada categoría.</span></div>
            <div><b>02</b><strong>Compara opciones</strong><span>Características y alternativas reunidas en un mismo espacio.</span></div>
            <div><b>03</b><strong>Compra en el partner</strong><span>Cuando el enlace esté activo, podrás continuar con el proveedor desde Buceo Atlas.</span></div>
          </div>
        </section>

        <section className="equipment-final-cta">
          <div><span className="eyebrow">TU PRÓXIMA INMERSIÓN</span><h2>El equipo es importante. El lugar también.</h2><p>Encuentra actividades y explora sus puntos de buceo en el mapa.</p></div>
          <div className="equipment-final-actions"><Link href="/actividades#mapa" className="button button-primary">Explorar el mapa</Link><Link href="/actividades" className="button button-ghost-dark">Ver actividades</Link></div>
        </section>
      </div>
    </section>
  );
}

