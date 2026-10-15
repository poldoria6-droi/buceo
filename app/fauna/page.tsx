import Link from "next/link";
import { Suspense } from "react";
import { FaunaList } from "@/app/fauna/FaunaList";

export const metadata = {
  title: "Fauna Marina de España · Especies, Hábitats y Observación",
  description:
    "Guía de fauna marina de España para buceadores y snorkelers. Especies contrastadas, rangos biológicos, hábitats y registros documentados en el mapa.",
  alternates: {
    canonical: "/fauna",
  },
  openGraph: {
    title: "Fauna Marina de España | Buceo Atlas",
    description:
      "Guía de especies marinas y observación responsable para buceadores en España.",
    url: "/fauna",
    type: "website",
  },
};

export default function FaunaPage() {
  return (
    <section className="section">
      <div className="container">
        <span className="eyebrow">EXPLORAR Y APRENDER</span>
        <h1>Fauna marina</h1>
        <p className="lead">
          Conoce las especies y observa el mar con respeto. La reserva de experiencias sigue en{" "}
          <Link href="/actividades">Encuentra tu actividad</Link>.
        </p>
        <Suspense fallback={<p>Cargando especies marinas...</p>}>
          <FaunaList />
        </Suspense>
        <p className="data-note">
          Los registros históricos no garantizan avistamientos. No atribuimos una especie a todos los puntos de una comunidad autónoma. Los rangos biológicos no indican la profundidad recomendada para bucear.
        </p>
        <Link className="button button-primary" href="/actividades#mapa">
          Explorar experiencias y especies en el mapa →
        </Link>
      </div>
    </section>
  );
}

