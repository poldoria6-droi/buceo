import { Suspense } from "react";
import { MapRedirectClient } from "@/app/mapa/MapRedirectClient";

export const metadata = {
  title: "Mapa Interactivo de Buceo en España",
  description:
    "Explora en el mapa interactivo los puntos de inmersión, escuelas de buceo y registros de fauna marina en España.",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "/actividades",
  },
};

export default function MapPage() {
  return (
    <Suspense
      fallback={
        <div className="section">
          <div className="container" style={{ textAlign: "center", padding: "80px 20px" }}>
            <h1 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>Mapa interactivo de buceo en España</h1>
            <p className="lead">Redirigiendo al explorador de actividades y mapa interactivo...</p>
          </div>
        </div>
      }
    >
      <MapRedirectClient />
    </Suspense>
  );
}
