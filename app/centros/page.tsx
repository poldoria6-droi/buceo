import { Suspense } from "react";
import { CentersList } from "@/app/centros/CentersList";

export const metadata = {
  title: "Escuelas y Centros de Buceo en España · Directorio Oficial",
  description:
    "Directorio de más de 170 centros y escuelas de buceo en España. Consulta ubicaciones, cursos, valoraciones y experiencias vinculadas para reservar.",
  alternates: {
    canonical: "/centros",
  },
  openGraph: {
    title: "Centros y Escuelas de Buceo en España | Buceo Atlas",
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
        <h1>Centros de buceo</h1>
        <p>Conoce quién organiza tu experiencia y encuentra sus actividades y opciones de reserva.</p>
        <Suspense fallback={<p>Cargando centros de buceo...</p>}>
          <CentersList />
        </Suspense>
      </div>
    </section>
  );
}
