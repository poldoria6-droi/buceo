import Link from "next/link";
import { diveSites, destinations, faunaList, regions } from "@/data/dive-sites";
import { MapExplorer } from "@/app/mapa/MapExplorer";
import { SiteCard } from "@/components/SiteCard";

export default function HomePage(){
  const featured=diveSites.filter(site=>["Illes Medes","Islas Hormigas","Parque Nacional de Cabrera","La Restinga","Playa Chica","Maro–Cerro Gordo"].includes(site.name));
  const stats=[
    ["50","Puntos de buceo"],
    ["∞","Fauna marina"],
    ["∞","Guías y consejos"],
    [String(destinations.length),"Destinos"],
    ["📷","Fotos y experiencias"]
  ];

  return <div className="home-page">
    <section className="reference-hero">
      <div className="hero-overlay" aria-hidden="true"/>
      <div className="container reference-hero-inner">
        <div className="reference-hero-copy">
          <span className="reference-kicker">LOS MEJORES LUGARES DE BUCEO DEL MUNDO</span>
          <h1>Explora el mundo<br/><em>bajo el agua</em></h1>
          <p>Mapas interactivos, guías, fauna marina y consejos para descubrir los mejores destinos de buceo del planeta.</p>

          <form className="reference-search" action="/mapa" method="get">
            <span aria-hidden="true">⌕</span>
            <input name="q" placeholder="¿Dónde quieres bucear?" aria-label="Dónde quieres bucear"/>
            <button type="submit">Buscar</button>
          </form>

          <div className="hero-activity-links" aria-label="Buscar actividades">
            <span>¿Qué quieres hacer?</span>
            <Link href="/actividades?type=Bautismo">Bautismo</Link>
            <Link href="/actividades?type=Fun%20Dive">Fun Dive</Link>
            <Link href="/actividades?type=Pecio">Pecios</Link>
            <Link href="/actividades?type=Fauna">Fauna</Link>
            <Link href="/actividades?type=Curso">Cursos</Link>
          </div>

          <div className="reference-stat-row">
            {stats.map(([value,label],i)=><div className="reference-stat" key={label}>
              <span aria-hidden="true">{["⌖","◈","✦","◉","▣"][i]}</span>
              <strong>{value}</strong><small>{label}</small>
            </div>)}
          </div>
        </div>
      </div>
      <div className="reference-swoosh" aria-hidden="true"/>
    </section>

    <section className="reference-map-section">
      <div className="container">
        <MapExplorer sites={diveSites} regions={regions} fauna={faunaList}/>
      </div>
    </section>

    <section className="section home-after-map">
      <div className="container">
        <div className="section-heading">
          <div><span className="eyebrow">DESCUBRE TU PRÓXIMA INMERSIÓN</span><h2>Elige cómo quieres vivir el mar.</h2></div>
          <Link href="/actividades" className="text-link">Ver todas las actividades →</Link>
        </div>
        <div className="home-discovery-grid">
          <Link href="/actividades?type=Bautismo" className="home-discovery-card"><b>🤿</b><strong>Mi primer buceo</strong><span>Bautismos y experiencias para descubrir el mundo submarino.</span></Link>
          <Link href="/mapa?fauna=Tortuga%20marina" className="home-discovery-card"><b>🐢</b><strong>Fauna marina</strong><span>Explora puntos donde puedes encontrar fauna representativa.</span></Link>
          <Link href="/actividades?type=Pecio" className="home-discovery-card"><b>⚓</b><strong>Pecios</strong><span>Descubre barcos hundidos, historia y buceo técnico o recreativo.</span></Link>
        </div>
      </div>
    </section>

    <section className="section section-soft">
      <div className="container">
        <div className="section-heading">
          <div><span className="eyebrow">DESTINOS DESTACADOS</span><h2>Empieza por algunos de los grandes clásicos.</h2></div>
          <Link href="/destinos" className="text-link">Todos los destinos →</Link>
        </div>
        <div className="cards-grid">{featured.map(site=><SiteCard key={site.id} site={site}/>)}</div>
      </div>
    </section>

    <section className="section cta-section">
      <div className="container cta-panel">
        <div><span className="eyebrow">DE LA INSPIRACIÓN A LA RESERVA</span><h2>Encuentra. Compara. Sumérgete.</h2><p>La web está preparada para conectar puntos de buceo con actividades y proveedores verificados.</p></div>
        <Link href="/actividades" className="button button-primary">Explorar actividades</Link>
      </div>
    </section>
  </div>;
}
