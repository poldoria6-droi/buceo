import Link from "next/link";
import { notFound } from "next/navigation";
import { centers } from "@/data/centers";
import { diveSites } from "@/data/dive-sites";
import { getCenterActivities } from "@/lib/centers";
import { BookingOptions } from "@/components/BookingOptions";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildCenterJsonLd } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return centers.map((center) => ({ slug: center.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const center = centers.find((item) => item.slug === slug);
  if (!center) return {};

  return {
    title: `${center.name} (${center.location}) · Escuela de Buceo`,
    description: `Conoce la escuela de buceo ${center.name} en ${center.location} (${center.region}). Consulta sus cursos, salidas de buceo, servicios, opiniones y reserva.`,
    alternates: {
      canonical: `/centros/${slug}`,
    },
    openGraph: {
      title: `${center.name} (${center.location}) | Buceo Atlas`,
      description: `Centro de buceo ${center.name} en ${center.location}. Actividades, cursos y servicios.`,
      url: `/centros/${slug}`,
      type: "website",
    },
  };
}

export default async function CenterPage({ params }: Props) {
  const { slug } = await params;
  const center = centers.find((item) => item.slug === slug);
  if (!center) notFound();

  const activities = getCenterActivities(center.id);
  const sites = diveSites.filter((site) => center.siteSlugs.includes(site.slug));
  const centerJsonLd = buildCenterJsonLd(center, activities.length);

  return (
    <section className="section">
      <div className="container">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(centerJsonLd) }}
        />
        <Breadcrumbs
          items={[
            { name: "Escuelas", path: "/centros" },
            { name: center.name, path: `/centros/${center.slug}` },
          ]}
        />
        <span className="eyebrow">CENTRO DE BUCEO · {center.region}</span>
        <h1>{center.name}</h1>
        <p className="lead">{center.location}</p>

        {center.rating && (
          <p>
            ★ {center.rating.value}/{center.rating.scale} · {center.rating.count} opiniones verificadas
          </p>
        )}

        <p>{center.description}</p>
        {activities.length > 0 && (
          <a className="button button-primary" href="#actividades">
            Ver sus {activities.length} actividades ↓
          </a>
        )}

        <h2>Servicios e instalaciones</h2>
        <div className="check-grid">
          {center.services.map((service) => (
            <span key={service}>✓ {service}</span>
          ))}
        </div>

        {sites.length > 0 && (
          <>
            <h2>Puntos de inmersión en su zona</h2>
            <div className="guide-grid">
              {sites.map((site) => (
                <article className="guide-card" key={site.slug}>
                  <span className="eyebrow">{site.region}</span>
                  <h3>{site.name}</h3>
                  <p>{site.highlight}</p>
                  <Link href={`/actividades/#mapa&site=${encodeURIComponent(site.slug)}`} className="text-link">
                    Ver punto en el mapa →
                  </Link>
                </article>
              ))}
            </div>
          </>
        )}

        <section id="actividades" className="center-activities">
          <h2>Actividades y opciones de reserva</h2>
          <p>
            Selecciona una experiencia para ver todos sus detalles o consultar fechas y precios directamente con el proveedor.
          </p>
          <div className="guide-grid">
            {activities.map((activity) => (
              <article className="guide-card" key={activity.slug}>
                <span className="eyebrow">{activity.type}</span>
                <h3>
                  <Link href={`/actividades/${activity.slug}`}>{activity.title}</Link>
                </h3>
                <p>
                  {activity.audience} · Nivel {activity.level}
                </p>
                <p>
                  {activity.duration} · {activity.destination}
                </p>
                <Link className="text-link" href={`/actividades/${activity.slug}`}>
                  Ver ficha de la actividad →
                </Link>
                <BookingOptions activity={activity} officialUrl={center.officialUrl} />
              </article>
            ))}
          </div>

          {!activities.length && (
            <>
              <p>Consulta las actividades disponibles directamente con el centro o explora otras opciones en la zona.</p>
              {center.officialUrl && /^https?:\/\//i.test(center.officialUrl) && (
                <a href={center.officialUrl} target="_blank" rel="noopener noreferrer" className="text-link">
                  Visitar web del centro ↗
                </a>
              )}
            </>
          )}
        </section>
      </div>
    </section>
  );
}
