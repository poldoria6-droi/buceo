import Link from "next/link";
import { diveSites, destinations } from "@/data/dive-sites";
import { activities } from "@/data/activities";
import { centers } from "@/data/centers";
import { species } from "@/data/species";
import { guides } from "@/data/guides";
import { SiteCard } from "@/components/SiteCard";
import { SpeciesCard } from "@/components/SpeciesCard";
import { BookingOptions } from "@/components/BookingOptions";
import { buildActivityCardSummary } from "@/lib/activity-filters";

const FEATURED_ACTIVITY_SLUGS = [
  "bautismo-de-buceo-en-lanzarote-2-horas-y-30-min-37276",
  "bautizo-discover-scuba-diving-mar-menuda-522",
  "bautismo-buceo-6-metros-cabo-palos-502",
  "bautismo-de-buceo-en-playa-son-xoriguer-de-2-horas-78828",
  "inmersion-de-buceo-tenerife-con-alquiler-de-equipo-50921",
  "inmersion-de-buceo-en-la-costa-de-algeciras-57620",
];

const BLACK_FRIDAY_DEALS = [
  {
    slug: "curso-open-water-diver-alojamiento-tenerife-5-dias-61742",
    discountPct: "−43 %",
    oldPrice: 599,
    nowPrice: 345,
    saveEur: 254,
    giftNote: "Curso + 5 días alojamiento · Tenerife",
  },
  {
    slug: "curso-scuba-diver-en-madrid-y-2-inmersiones-en-mar-29211",
    discountPct: "−42 %",
    oldPrice: 289,
    nowPrice: 169,
    saveEur: 120,
    giftNote: "Empieza en invierno en Madrid + mar",
  },
  {
    slug: "open-water-diver-el-hierro-y-alojamiento-6-noches-54886",
    discountPct: "−32 %",
    oldPrice: 510,
    nowPrice: 350,
    saveEur: 160,
    giftNote: "Curso + 6 noches en La Restinga",
  },
  {
    slug: "bautismo-buceo-tenerife-46044",
    discountPct: "−27 %",
    oldPrice: 95,
    nowPrice: 70,
    saveEur: 25,
    giftNote: "Agua a 21 °C en invierno · Bono sin fecha",
  },
  {
    slug: "bautismo-de-buceo-en-gran-canaria-3-h-375",
    discountPct: "−25 %",
    oldPrice: 60,
    nowPrice: 45,
    saveEur: 15,
    giftNote: "Ideal para regalar · 3 horas con equipo",
  },
  {
    slug: "bautizo-de-buceo-en-la-restinga-certificacion-padi-54890",
    discountPct: "−25 %",
    oldPrice: 60,
    nowPrice: 45,
    saveEur: 15,
    giftNote: "Reserva Marina de El Hierro · PADI",
  },
];

export default function HomePage() {
  const featuredActivities = FEATURED_ACTIVITY_SLUGS.map((slug) =>
    activities.find((a) => a.slug === slug)
  ).filter((a): a is NonNullable<typeof a> => Boolean(a));
  const blackFridayDeals = BLACK_FRIDAY_DEALS.map((deal) => {
    const activity = activities.find((a) => a.slug === deal.slug);
    return activity ? { ...deal, activity } : null;
  }).filter((d): d is NonNullable<typeof d> => Boolean(d));
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
              Explora el buceo<br />
              <em>en toda España</em>
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

      <section className="section bf-section" id="ofertas-black-friday-navidad">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">ESPECIAL BLACK FRIDAY, NAVIDAD E INVIERNO 2026 · HASTA −43 %</span>
              <h2>Ofertas Black Friday en bautismos y cursos de buceo (para regalar sin fecha o bucear en Canarias)</h2>
              <p style={{ marginTop: "0.45rem", color: "#496573", maxWidth: "820px" }}>
                Seleccionamos las mayores rebajas activas en escuelas verificadas de España (hasta el 30 de noviembre). Puedes reservarlas con descuento en formato <strong>bono regalo sin fecha fija</strong> —quien lo recibe elige el día en primavera o verano— o aprovechar los 21 °C del agua este invierno en Canarias.
              </p>
            </div>
          </div>
          <div className="guide-grid" style={{ marginTop: "1.5rem" }}>
            {blackFridayDeals.map(({ activity, discountPct, oldPrice, nowPrice, saveEur, giftNote }) => (
              <article className="guide-card" key={activity.slug}>
                <div className="bf-card-top">
                  <span className="bf-discount-badge">BLACK FRIDAY {discountPct}</span>
                  <span className="bf-gift-pill">🎁 {giftNote}</span>
                </div>
                <span className="eyebrow">
                  {activity.type} · {activity.destination} ({activity.region})
                </span>
                <h3>
                  <Link href={`/actividades/${activity.slug}`}>{activity.title}</Link>
                </h3>
                <div className="bf-price-compare">
                  <span>Antes <s>{oldPrice} €</s></span>
                  <strong>Ahora {nowPrice} €</strong>
                  <span className="bf-save-tag">Ahorras {saveEur} €</span>
                </div>
                <p>{buildActivityCardSummary(activity)}</p>
                <BookingOptions activity={activity} placement="home-bf-card" />
              </article>
            ))}
          </div>
          <div className="bf-highlight-bar">
            <div>
              <strong>¿Buscas acertar con un regalo de buceo en Black Friday, Navidad o Reyes?</strong>
              <p>
                Consulta nuestra comparativa de precios con bono sin fecha fija (válido hasta 5 años) o planifica una escapada de invierno a aguas templadas.
              </p>
            </div>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <Link href="/guias/regalar-bautismo-o-curso-de-buceo" className="button button-primary">
                Guía de regalos y Black Friday →
              </Link>
              <Link href="/guias/viaje-de-buceo-a-lanzarote" className="button button-ghost">
                Bucear en Canarias en invierno
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">RESERVA ONLINE DIRECTA</span>
              <h2>Experiencias y bautismos más reservados en España</h2>
            </div>
            <Link href="/actividades" className="text-link">
              Ver las {activities.length} experiencias →
            </Link>
          </div>
          <div className="guide-grid">
            {featuredActivities.map((activity) => (
              <article className="guide-card" key={activity.slug}>
                <span className="eyebrow">
                  {activity.type} · {activity.destination} ({activity.region})
                </span>
                <h3>
                  <Link href={`/actividades/${activity.slug}`}>{activity.title}</Link>
                </h3>
                <p>{buildActivityCardSummary(activity)}</p>
                <BookingOptions activity={activity} placement="home-card" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
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
          <div className="hero-tags" style={{ marginTop: "1.5rem" }}>
            {[
              { slug: "cabo-de-palos", label: "Buceo en Cabo de Palos" },
              { slug: "la-herradura", label: "Buceo en La Herradura" },
              { slug: "tossa-de-mar", label: "Buceo en Tossa de Mar" },
              { slug: "lanzarote", label: "Buceo en Lanzarote" },
              { slug: "gran-canaria", label: "Buceo en Gran Canaria" },
              { slug: "tabarca", label: "Buceo en Tabarca" },
              { slug: "el-hierro", label: "Buceo en El Hierro" },
              { slug: "illes-medes", label: "Buceo en Illes Medes" },
              { slug: "tenerife", label: "Buceo en Tenerife" },
              { slug: "mallorca", label: "Buceo en Mallorca" },
              { slug: "menorca", label: "Buceo en Menorca" },
              { slug: "cabo-de-gata", label: "Buceo en Cabo de Gata" },
            ].map((dest) => (
              <Link
                key={dest.slug}
                href={`/buceo/${dest.slug}`}
                style={{
                  textDecoration: "none",
                  background: "#eef8f7",
                  color: "#0b5e6f",
                  border: "1px solid #cde7e4",
                  borderRadius: "999px",
                  padding: "0.45rem 0.9rem",
                  fontSize: "0.84rem",
                  fontWeight: 700,
                }}
              >
                {dest.label} →
              </Link>
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
