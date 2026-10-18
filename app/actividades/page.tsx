import { Suspense } from "react";
import Link from "next/link";
import { centers, centerActivityLinks } from "@/data/centers";
import { diveSites } from "@/data/dive-sites";
import { activities, activityRegions, activityTypes } from "@/data/activities";
import { ActivitiesExplorer } from "@/app/actividades/ActivitiesExplorer";

export const metadata = {
  title: "Actividades y Cursos de Buceo en España · Comparador y Reserva",
  description:
    "Encuentra y compara bautismos de buceo, cursos Open Water, Fun Dive, pecios y snorkel en España con mapa interactivo. Consulta precios desde, nivel y escuelas.",
  alternates: {
    canonical: "/actividades",
  },
  openGraph: {
    title: "Actividades y Cursos de Buceo en España | Buceo Atlas",
    description:
      "Encuentra y compara bautismos, cursos y salidas de buceo en España sobre un mapa interactivo.",
    url: "/actividades",
    type: "website",
  },
};

export default function ActivitiesPage() {
  const centerByActivity = Object.fromEntries(
    centerActivityLinks.flatMap((link) => {
      const center = centers.find((c) => c.id === link.centerId);
      return center ? [[link.activitySlug, { name: center.name, slug: center.slug }]] : [];
    })
  );

  return (
    <section className="activities-page">
      <div className="container">
        <div className="activities-hero">
          <div>
            <span className="eyebrow">COMPARADOR DE EXPERIENCIAS</span>
            <h1>
              Actividades y cursos de buceo<br />
              <em>en toda España</em>
            </h1>
            <p>
              Filtra por tipo de inmersión, comunidad autónoma, localidad o nivel. Compara precios desde, duración y centros organizadores, o explora los puntos en el mapa.
            </p>
          </div>
          <div className="activity-hero-icon" aria-hidden="true">
            🤿
          </div>
        </div>
        <Suspense
          fallback={
            <div className="activity-empty">
              <strong>Cargando catálogo de actividades y mapa interactivo...</strong>
            </div>
          }
        >
          <ActivitiesExplorer
            centerByActivity={centerByActivity}
            activities={activities}
            sites={diveSites}
            regions={activityRegions}
            types={activityTypes}
          />
        </Suspense>
        <div className="affiliate-funnel">
          <div>
            <h2>¿Buscas un centro o escuela en concreto?</h2>
            <p>
              Consulta nuestro directorio con más de 170 escuelas de buceo en España y accede a todas sus actividades y cursos.
            </p>
            <Link href="/centros" className="button button-primary">
              Ver directorio de escuelas
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
