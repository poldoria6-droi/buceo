import { Suspense } from "react";
import Link from "next/link";
import { centers, centerActivityLinks } from "@/data/centers";
import { diveSites } from "@/data/dive-sites";
import { activities, activityRegions, activityTypes } from "@/data/activities";
import { ActivitiesExplorer } from "@/app/actividades/ActivitiesExplorer";

export const metadata = {
  title: "Actividades y Cursos de Buceo en España · Reserva Online",
  description:
    "Encuentra y compara bautismos, cursos PADI/SSI, Fun Dive, pecios y snorkel en España sobre un mapa interactivo. Precios desde, escuelas y reserva con proveedores oficiales.",
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
            <span className="eyebrow">RESERVAR EXPERIENCIAS</span>
            <h1>Elige qué quieres hacer.<br /><em>Encuentra dónde hacerlo.</em></h1>
            <p>Elige una comunidad autónoma y después una ciudad o destino. Compara las actividades de la lista o explora sus puntos de buceo en el mapa.</p>
          </div>
          <div className="activity-hero-icon" aria-hidden="true">🤿</div>
        </div>
        <Suspense fallback={<div className="activity-empty"><strong>Cargando actividades y mapa interactivo...</strong></div>}>
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
            <h2>¿Buscas una escuela de buceo?</h2>
            <p>Consulta los centros documentados y todas sus actividades vinculadas.</p>
            <Link href="/centros" className="button button-primary">Ver escuelas de buceo</Link>
          </div>
        </div>
      </div>
    </section>
  );
}



