import Link from "next/link";
import { diveSites, destinations } from "@/data/dive-sites";
import { activities } from "@/data/activities";
import { SiteCard } from "@/components/SiteCard";

export default function HomePage(){
  const featured=diveSites.filter(site=>["Illes Medes","Islas Hormigas","Parque Nacional de Cabrera","La Restinga","Playa Chica","Maro–Cerro Gordo"].includes(site.name));
  const stats=[[String(activities.length),"Actividades en catálogo"],[String(destinations.length),"Destinos"],[String(diveSites.length),"Puntos de buceo"]];

  return <div className="home-page">
    <section className="reference-hero">
      <div className="hero-overlay" aria-hidden="true"/>
      <div className="container reference-hero-inner">
        <div className="reference-hero-copy">
          <span className="reference-kicker">BUCEO ATLAS · ESPAÑA</span>
          <h1>Explora España<br/><em>bajo el agua</em></h1>
          <p>Encuentra tu actividad, conoce la escuela y reserva con el proveedor. Explora también material para tu próxima inmersión.</p>

          <div className="hero-discovery">
            <div className="hero-discovery-copy">
              <span className="hero-discovery-icon">✦</span>
              <div>
                <strong>Tu próxima inmersión empieza aquí</strong>
                <small>Bautismos, cursos y salidas para buceadores titulados.</small>
              </div>
            </div>
            <div className="hero-discovery-actions">
              <Link href="/actividades" className="hero-discovery-primary">Encuentra tu actividad <span>→</span></Link>
              <Link href="/material" className="hero-discovery-secondary">Compra material</Link>
            </div>
          </div>

          <div className="hero-activity-links" aria-label="Descubrir por tipo">
            <span>Descubre por:</span>
            <Link href="/actividades?type=Bautismo">Bautismo</Link>
            <Link href="/actividades?type=Fun%20Dive">Fun Dive</Link>
            <Link href="/actividades?type=Pecio">Pecios</Link>
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

    <section className="section home-after-map">
      <div className="container">
        <div className="section-heading">
          <div><span className="eyebrow">DESCUBRE TU PRÓXIMA INMERSIÓN</span><h2>Elige cómo quieres vivir el mar.</h2></div>
          <Link href="/actividades" className="text-link">Ver todas las actividades →</Link>
        </div>
        <div className="home-discovery-grid">
          <Link href="/actividades?type=Bautismo" className="home-discovery-card"><b>🤿</b><strong>Mi primer buceo</strong><span>Bautismos y experiencias para descubrir el mundo submarino.</span></Link>
          <Link href="/centros" className="home-discovery-card"><b>🏫</b><strong>Escuelas de buceo</strong><span>Conoce los centros y consulta sus actividades disponibles.</span></Link>
          <Link href="/actividades?type=Pecio" className="home-discovery-card"><b>⚓</b><strong>Pecios</strong><span>Descubre barcos hundidos, historia y buceo técnico o recreativo.</span></Link>
        </div>
      </div>
    </section>

    <section className="section home-commercial-section">
      <div className="container">
        <div className="section-heading">
          <div><span className="eyebrow">TODO PARA TU PRÓXIMA INMERSIÓN</span><h2>Del mapa a la experiencia.</h2></div>
          <span className="commercial-note">Explora, compara y encuentra opciones.</span>
        </div>
        <div className="commercial-grid">
          <Link href="/actividades" className="commercial-card commercial-card-activity">
            <div className="commercial-card-visual"><span>🤿</span><small>EXPERIENCIAS</small></div>
            <div className="commercial-card-body">
              <span className="eyebrow">RESERVA TU INMERSIÓN</span>
              <h3>Bautismos, Fun Dive, cursos y snorkel.</h3>
              <p>Encuentra actividades por destino, nivel y tipo. Cuando una opción esté disponible, podrás continuar con el proveedor desde Buceo Atlas.</p>
              <strong>Explorar actividades <span>→</span></strong>
            </div>
          </Link>
          <Link href="/material" className="commercial-card commercial-card-gear">
            <div className="commercial-card-visual"><span>⚙️</span><small>MATERIAL</small></div>
            <div className="commercial-card-body">
              <span className="eyebrow">EQUÍPATE PARA BUCEAR</span>
              <h3>Neoprenos, reguladores, chalecos, aletas, máscaras y ordenadores.</h3>
              <p>Una sección pensada para comparar material y descubrir opciones de compra a través de partners cuando integremos las afiliaciones.</p>
              <strong>Ver material <span>→</span></strong>
            </div>
          </Link>
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
        <div><span className="eyebrow">DE LA INSPIRACIÓN A LA RESERVA</span><h2>Encuentra. Compara. Sumérgete.</h2><p>La web está preparada para conectar destinos y puntos de buceo con experiencias y proveedores cuando sus datos estén verificados.</p></div>
        <Link href="/actividades" className="button button-primary">Explorar actividades</Link>
      </div>
    </section>
  </div>;
}

