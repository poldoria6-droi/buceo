"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { diveSites } from "@/data/dive-sites";

export function MapRedirectClient() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const q = searchParams.get("q");
    const species = searchParams.get("species");
    const region = searchParams.get("region");
    const type = searchParams.get("type");
    const destination = searchParams.get("destination");
    const site = q ? diveSites.find((s) => s.name === q || s.slug === q) : undefined;

    const query = new URLSearchParams();
    if (site) query.set("site", site.slug);
    else if (q) query.set("region", q);
    if (region) query.set("region", region);
    if (type) query.set("type", type);
    if (destination) query.set("destination", destination);
    if (species) query.set("species", species);

    router.replace(`/actividades${query.size ? `?${query.toString()}` : ""}#mapa`);
  }, [router, searchParams]);

  return (
    <div className="section">
      <div className="container" style={{ textAlign: "center", padding: "80px 20px" }}>
        <p className="lead">Redirigiendo al mapa interactivo de buceo...</p>
      </div>
    </div>
  );
}
