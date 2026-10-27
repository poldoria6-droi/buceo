import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import { centers, centerActivityLinks } from "@/data/centers";
import { diveSites } from "@/data/dive-sites";
import { activities, activityRegions, activityTypes } from "@/data/activities";
import { ActivitiesExplorer } from "@/app/actividades/ActivitiesExplorer";
import { toSlimActivity, type SlimSite } from "@/lib/slim";
import { destinationsFor } from "@/lib/activity-filters";

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

const INITIAL_PAGE_SIZE = 24;

export default function ActivitiesPage() {
  const centerByActivity = Object.fromEntries(
    centerActivityLinks.flatMap((link) => {
      const center = centers.find((c) => c.id === link.centerId);
      return center ? [[link.activitySlug, { name: center.name, slug: center.slug }]] : [];
    })
  );

  // Solo se envían al navegador los campos que el explorador y el mapa necesitan.
  const slimActivities = activities.map(toSlimActivity);
  const slimSites: SlimSite[] = diveSites.map((site) => ({
    id: site.id,
    slug: site.slug,
    name: site.name,
    destination: site.destination,
    region: site.region,
    lat: site.lat,
    lng: site.lng,
    level: site.level,
    depth: site.depth,
    type: site.type,
  }));

  // Guardamos el catálogo completo en un JSON estático para no incrustar 660 KB en el HTML inicial.
  try {
    const outDir = path.join(process.cwd(), "public", "data");
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(
      path.join(outDir, "activities-explorer.json"),
      JSON.stringify({
        activities: slimActivities,
        sites: slimSites,
        centerByActivity,
      })
    );
  } catch {
    // En entornos de solo lectura se usa el archivo generado previamente.
  }

  const initialActivities = slimActivities.slice(0, INITIAL_PAGE_SIZE);
  const initialSiteSlugs = new Set(initialActivities.flatMap((a) => a.siteSlugs));
  const initialSites = slimSites.filter((s) => initialSiteSlugs.has(s.slug));
  const initialCenterByActivity = Object.fromEntries(
    initialActivities
      .map((a) => [a.slug, centerByActivity[a.slug]] as const)
      .filter((entry): entry is [string, { name: string; slug: string }] => Boolean(entry[1]))
  );
  const allSiteSlugs = new Set(slimActivities.flatMap((a) => a.siteSlugs));
  const totalMatchingSites = slimSites.filter((s) => allSiteSlugs.has(s.slug)).length;
  const initialDestinations = destinationsFor(slimActivities, "Todos");

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
        <ActivitiesExplorer
          centerByActivity={initialCenterByActivity}
          activities={initialActivities}
          sites={initialSites}
          totalCount={slimActivities.length}
          totalSitesCount={totalMatchingSites}
          initialDestinations={initialDestinations}
          regions={activityRegions}
          types={activityTypes}
        />
        <div className="affiliate-funnel">
          <div>
            <h2>¿Buscas un centro o escuela en concreto?</h2>
            <p>
              Consulta nuestro directorio con más de 210 escuelas de buceo en España y accede a todas sus actividades y cursos.
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
