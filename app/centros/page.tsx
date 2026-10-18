import { Suspense } from "react";
import { CentersList } from "@/app/centros/CentersList";

export const metadata = {
  title: "Escuelas y Centros de Buceo en España · Directorio y Cursos",
  description:
    "Directorio de más de 210 centros y escuelas de buceo en España. Consulta ubicaciones, cursos Open Water, valoraciones y actividades vinculadas para reservar.",
  alternates: {
    canonical: "/centros",
  },
  openGraph: {
    title: "Escuelas y Centros de Buceo en España | Buceo Atlas",
    description:
      "Directorio de escuelas de buceo en España por comunidad autónoma y localidad.",
    url: "/centros",
    type: "website",
  },
};

export default function CentersPage() {
  return (
    <section className="section">
      <div className="container">
        <span className="eyebrow">DIRECTORIO DE ESCUELAS</span>
        <h1>Escuelas y centros de buceo en España</h1>
        <p className="lead">
          Encuentra escuelas de submarinismo por localidad o comunidad autónoma y consulta sus bautismos, cursos e inmersiones disponibles.
        </p>
        <Suspense fallback={<p>Cargando directorio de centros de buceo...</p>}>
          <CentersList />
        </Suspense>
      </div>
    </section>
  );
}
