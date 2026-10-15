"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, Suspense } from "react";
import { diveSites } from "@/data/dive-sites";

function MapRedirect() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const q = searchParams.get("q");
    const species = searchParams.get("species");
    const site = diveSites.find((s) => s.name === q || s.slug === q);
    const query = new URLSearchParams();
    if (site) query.set("site", site.slug);
    if (species) query.set("species", species);
    router.replace(`/actividades${query.size ? `?${query.toString()}` : ""}#mapa`);
  }, [router, searchParams]);

  return (
    <div className="section">
      <div className="container" style={{ textAlign: "center", padding: "80px 20px" }}>
        <p className="lead">Cargando el mapa interactivo de buceo...</p>
      </div>
    </div>
  );
}

export default function MapPage() {
  return (
    <Suspense fallback={
      <div className="section">
        <div className="container" style={{ textAlign: "center", padding: "80px 20px" }}>
          <p className="lead">Cargando mapa...</p>
        </div>
      </div>
    }>
      <MapRedirect />
    </Suspense>
  );
}

