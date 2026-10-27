import { CentersList } from "@/app/centros/CentersList";
import { centers } from "@/data/centers";
import { getCenterActivities } from "@/lib/centers";
import type { SlimCenter } from "@/lib/slim";

export const metadata = {
  title: "Centros de Buceo en España: Directorio de Escuelas, Cursos y Precios",
  description:
    "Directorio de más de 210 centros de buceo y escuelas en España. Consulta precios, cursos Open Water, bautismos, valoraciones y actividades para reservar.",
  alternates: {
    canonical: "/centros",
  },
  openGraph: {
    title: "Centros y Escuelas de Buceo en España | Buceo Atlas",
    description:
      "Directorio de centros y escuelas de buceo en España por comunidad autónoma y localidad.",
    url: "/centros",
    type: "website",
  },
};

export default function CentersPage() {
  // Solo los campos que muestra el listado (los datos completos viven en cada ficha).
  const items: SlimCenter[] = centers.map((center) => ({
    id: center.id,
    slug: center.slug,
    name: center.name,
    location: center.location,
    region: center.region,
    count: getCenterActivities(center.id).length,
  }));

  return (
    <section className="section">
      <div className="container">
        <span className="eyebrow">DIRECTORIO DE CENTROS Y ESCUELAS</span>
        <h1>Centros y escuelas de buceo en España</h1>
        <p className="lead">
          Encuentra escuelas de submarinismo por localidad o comunidad autónoma y consulta sus bautismos, cursos e inmersiones disponibles.
        </p>
        <CentersList items={items} />
      </div>
    </section>
  );
}
