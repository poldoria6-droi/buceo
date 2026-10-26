import Link from "next/link";
import { diveSites, destinations } from "@/data/dive-sites";
import { activities } from "@/data/activities";
import { centers } from "@/data/centers";
import { species } from "@/data/species";
import { guides } from "@/data/guides";
import { SiteCard } from "@/components/SiteCard";
import { SpeciesCard } from "@/components/SpeciesCard";

export default function HomePage() {
  const featuredSites = diveSites.filter((site) =>
    ["Illes Medes", "Islas Hormigas", "Parque Nacional de Cabrera", "La Restinga", "Playa Chica", "Maro–Cerro Gordo"].includes(site.name)
  );
  const featuredSpecies = species.filter((s) =>
    ["mero-moreno", "tortuga-boba", "gorgonia-roja", "pulpo-comun", "barracuda", "posidonia"].includes(s.slug)
  );
  const featuredGuides = guides.slice(0, 6);

  const stats = [
    [String(activities.length), "Actividades en catálogo"],
    [String(centers.length), "Escuelas y centros"],
    [String(destinations.length), "Destinos de buceo"],
    [String(species.length), "Especies marinas"],
  ];

  return (
    <div className="home-page">
      <section className="reference-hero">
        <img
          src="/images/hero-1280.jpg"
          srcSet="/images/hero-800.jpg 800w, /images/hero-1280.jpg 1280w, /images/hero-1920.jpg 1920w"
          sizes="100vw"
          width={1920}
          height={1280}
          alt="Submarinismo en aguas cristalinas de España"
          fetchPriority="high"
          decoding="async"
          className="hero-bg-image"
        />
        <div className="hero-overlay" aria-hidden="true" />
        <div className="container reference-hero-inner">
          <div className="reference-hero-copy">
            <span className="reference-kicker">BUCEO ATLAS · ESPAÑA</span>
            <h1>
              Explora España<br />
              <em>bajo el agua</em>
            </h1>
            <p>
              Compara bautismos, cursos Open Water, salidas guiadas y escuelas en el Mediterráneo, Baleares y Canarias.
            </p>

            <div className="hero-discovery">
              <div className="hero-discovery-copy">
                <span className="hero-discovery-icon">✦</span>
                <div>
                  <strong>Tu próxima inmersión empieza aquí</strong>
                  <small>Bautismos, cursos y salidas en más de {centers.length} escuelas de buceo.</small>
                </div>
              </div>
              <div className="hero-discovery-actions">
                <Link href="/actividades" className="hero-discovery-primary">
                  Explora tu actividad <span>→</span>
                </Link>
              </div>
            </div>

            <div className="hero-activity-links" aria-label="Descubrir por tipo">
              <span>Descubre por:</span>
              <Link href="/actividades/#type=Bautismo">Bautismo</Link>
              <Link href="/actividades/#type=Fun%20Dive">Fun Dive</Link>
              <Link href="/actividades/#type=Pecio">Pecios</Link>
              <Link href="/actividades/#type=Curso">Cursos</Link>
              <Link href="/actividades#mapa">Mapa interactivo</Link>
            </div>

            <div className="reference-stat-row">
              {stats.map(([value, label], i) => (
                <div className="reference-stat" key={label}>
                  <span aria-hidden="true">{["⌖", "◈", "✦", "◉"][i]}</span>
                  <strong>{value}</strong>
                  <small>{label}</small>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="reference-swoosh" aria-hidden="true" />
      </section>

      <section className="section home-after-map">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">ELIGE TU MODALIDAD</span>
              <h2>¿Qué experiencia submarina buscas hoy?</h2>
            </div>
            <Link href="/actividades" className="text-link">
              Ver todas las actividades →
            </Link>
          </div>
          <div className="home-discovery-grid">
            <Link href="/actividades/#type=Bautismo" className="home-discovery-card">
              <b>🤿</b>
              <strong>Bautismo de buceo</strong>
              <span>Tu primera inmersión en el mar con instructor y equipo completo incluido, sin experiencia previa.</span>
            </Link>
            <Link href="/actividades/#type=Curso" className="home-discovery-card">
              <b>🎓</b>
              <strong>Cursos de certificación</strong>
              <span>Obtén tu título Open Water o especialidad internacional en escuelas de toda la costa española.</span>
            </Link>
            <Link href="/actividades/#type=Pecio" className="home-discovery-card">
              <b>⚓</b>
              <strong>Salidas y pecios</strong>
              <span>Inmersiones para buceadores titulados en reservas marinas, cañones y barcos hundidos históricos.</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">DESTINOS DESTACADOS</span>
              <h2>Grandes clásicos del buceo en España</h2>
            </div>
            <Link href="/destinos" className="text-link">
              Todos los destinos →
            </Link>
          </div>
          <div className="cards-grid">
            {featuredSites.map((site) => (
              <SiteCard key={site.id} site={site} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">BIODIVERSIDAD MEDITERRÁNEA Y ATLÁNTICA</span>
              <h2>Fauna marina que puedes avistar buceando</h2>
            </div>
            <Link href="/fauna" className="text-link">
              Ver las {species.length} especies →
            </Link>
          </div>
          <div className="guide-grid">
            {featuredSpecies.map((item) => (
              <SpeciesCard key={item.slug} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">GUÍAS Y COMPARATIVAS</span>
              <h2>Resuelve tus dudas antes de sumergirte</h2>
            </div>
            <Link href="/guias" className="text-link">
              Ver todas las guías →
            </Link>
          </div>
          <div className="guide-grid">
            {featuredGuides.map((g) => (
              <article className="guide-card" key={g.slug}>
                <span className="eyebrow">{g.tag}</span>
                <h3>{g.title}</h3>
                <p>{g.description}</p>
                <Link href={`/guias/${g.slug}`} className="text-link">
                  {g.ctaLabel}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container cta-panel">
          <div>
            <span className="eyebrow">PLANIFICA TU INMERSIÓN</span>
            <h2>Encuentra. Compara. Sumérgete.</h2>
            <p>
              Consulta precios desde, duración, nivel requerido y centros organizadores en los principales destinos de buceo de España.
            </p>
          </div>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <Link href="/actividades" className="button button-primary">
              Explora tu actividad →
            </Link>
            <Link href="/centros" className="button button-ghost">
              Directorio de escuelas
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
