import Link from "next/link";
import { notFound } from "next/navigation";
import { species } from "@/data/species";
import { SpeciesCard } from "@/components/SpeciesCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildSpeciesJsonLd } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return species.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const s = species.find((x) => x.slug === slug);
  if (!s) return {};

  return {
    title: `${s.name} (${s.scientificName}) · Fauna Marina`,
    description: `${s.description} Conoce su hábitat, alimentación, comportamiento y observación durante el buceo en España.`,
    alternates: {
      canonical: `/fauna/${slug}`,
    },
    openGraph: {
      title: `${s.name} (${s.scientificName}) | Buceo Atlas`,
      description: s.description,
      url: `/fauna/${slug}`,
      type: "website",
      images: [
        {
          url: s.image.url,
          alt: s.image.alt,
        },
      ],
    },
  };
}

export default async function SpeciesPage({ params }: Props) {
  const { slug } = await params;
  const s = species.find((x) => x.slug === slug);
  if (!s) notFound();

  const speciesJsonLd = buildSpeciesJsonLd(s);
  const related = species
    .filter((x) => x.slug !== s.slug && x.category === s.category)
    .slice(0, 6);

  return (
    <section className="section">
      <div className="container">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(speciesJsonLd) }}
        />
        <Breadcrumbs
          items={[
            { name: "Fauna marina", path: "/fauna" },
            { name: s.name, path: `/fauna/${s.slug}` },
          ]}
        />
        <p className="eyebrow">{s.category}</p>
        <h1>{s.name}</h1>
        <p className="lead">
          <em>{s.scientificName}</em>
        </p>
        <figure className="species-figure">
          <img
            src={s.image.url}
            alt={s.image.alt}
            width={s.image.width || 960}
            height={s.image.height || 640}
            decoding="async"
          />
          <figcaption>
            Fotografía: {s.image.author} ·{" "}
            <a href={s.image.licenseUrl} target="_blank" rel="noopener noreferrer">
              {s.image.license}
            </a>{" "}
            ·{" "}
            <a href={s.image.sourceUrl} target="_blank" rel="noopener noreferrer">
              Fuente y archivo original
            </a>
          </figcaption>
        </figure>
        <p className="lead">{s.description}</p>

        <div className="guide-grid">
          <article className="guide-card">
            <h2>Hábitat</h2>
            <p>{s.habitat}</p>
          </article>
          {s.depth && (
            <article className="guide-card">
              <h2>Profundidad biológica</h2>
              <p>
                {s.depth.min}–{s.depth.max} m ({" "}
                <a href={s.depth.sourceUrl} target="_blank" rel="noopener noreferrer">
                  fuente
                </a>
                ).
              </p>
              <p>
                Rango batimétrico biológico; no equivale a la cota recomendada para una inmersión recreativa.
              </p>
            </article>
          )}
          {s.size && (
            <article className="guide-card">
              <h2>Tamaño</h2>
              <p>{s.size}</p>
            </article>
          )}
          {s.diet && (
            <article className="guide-card">
              <h2>Alimentación</h2>
              <p>{s.diet}</p>
            </article>
          )}
          {s.behavior && (
            <article className="guide-card">
              <h2>Comportamiento</h2>
              <p>{s.behavior}</p>
            </article>
          )}
        </div>

        {s.conservation && (
          <section className="notice-card">
            <h2>Estado de conservación</h2>
            <p>{s.conservation}</p>
          </section>
        )}

        <section className="notice-card">
          <h2>Código de observación en inmersión</h2>
          <p>
            Mantén una distancia prudente, controla tu flotabilidad y lleva el manómetro y el octopus sujetos para no rozar el fondo. Nunca toques, alimentes ni acorrales a la fauna marina.
          </p>
        </section>

        {s.occurrences.length > 0 && (
          <>
            <h2>Registros documentados en España</h2>
            <div className="guide-grid">
              {s.occurrences.map((o) => (
                <article className="guide-card" key={o.name}>
                  <span className="eyebrow">
                    {o.precision} · {o.region} · {o.basin}
                  </span>
                  <h3>{o.name}</h3>
                  <p>{o.note}</p>
                  <a href={o.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-link">
                    Fuente del registro ↗
                  </a>
                </article>
              ))}
            </div>
          </>
        )}

        <div className="cta-section" style={{ paddingBottom: "2rem" }}>
          <div className="cta-panel">
            <div>
              <span className="eyebrow">PLANIFICA TU INMERSIÓN</span>
              <h2>Explora actividades y centros de buceo en España</h2>
              <p>
                Compara salidas de buceo, bautismos y escuelas en las principales zonas del Mediterráneo, Baleares y Canarias.
              </p>
            </div>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <Link className="button button-primary" href="/actividades">
                Explorar actividades →
              </Link>
              {s.occurrences.length > 0 && (
                <Link className="button button-ghost" href={`/actividades?species=${s.slug}#mapa`}>
                  Ver en el mapa
                </Link>
              )}
              <Link className="button button-ghost" href="/centros">
                Ver escuelas
              </Link>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <>
            <h2>Otras especies de {s.category.toLowerCase()}</h2>
            <div className="guide-grid">
              {related.map((item) => (
                <SpeciesCard key={item.slug} item={item} />
              ))}
            </div>
          </>
        )}

        <details style={{ marginTop: "2.5rem" }}>
          <summary>Fuentes de referencia · revisado {s.checkedAt}</summary>
          <ul>
            {s.sources.map((url) => (
              <li key={url}>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {url}
                </a>
              </li>
            ))}
          </ul>
        </details>
      </div>
    </section>
  );
}
