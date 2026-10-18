import { Suspense } from "react";
import { MapRedirectClient } from "@/app/mapa/MapRedirectClient";

export const metadata = {
  title: "Mapa Interactivo de Buceo en España",
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
            <p className="lead">Cargando mapa...</p>
          </div>
        </div>
      }
    >
      <MapRedirectClient />
    </Suspense>
  );
}
