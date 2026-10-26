import { centers } from "@/data/centers";
import { species } from "@/data/species";
import { activities } from "@/data/activities";
import { guides } from "@/data/guides";
import type { MetadataRoute } from "next";
import { destinations } from "@/data/dive-sites";
import { SITE_URL } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_URL;
  const staticDate = new Date("2026-10-18");

  return [
    { url: `${base}/`, lastModified: staticDate, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/actividades/`, lastModified: staticDate, changeFrequency: "weekly", priority: 0.95 },
    { url: `${base}/centros/`, lastModified: staticDate, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/destinos/`, lastModified: staticDate, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/fauna/`, lastModified: staticDate, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/guias/`, lastModified: staticDate, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/aviso-legal/`, lastModified: staticDate, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/privacidad/`, lastModified: staticDate, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/afiliados/`, lastModified: staticDate, changeFrequency: "yearly", priority: 0.2 },
    ...guides.map((g) => ({
      url: `${base}/guias/${g.slug}/`,
      lastModified: new Date(g.updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...destinations.map((d) => ({
      url: `${base}/buceo/${d.slug}/`,
      lastModified: staticDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...centers.map((center) => ({
      url: `${base}/centros/${center.slug}/`,
      lastModified: new Date(center.checkedAt || "2026-10-04"),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...species.map((item) => ({
      url: `${base}/fauna/${item.slug}/`,
      lastModified: new Date(item.checkedAt || "2026-10-18"),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
    ...activities.map((activity) => ({
      url: `${base}/actividades/${activity.slug}/`,
      lastModified: staticDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  ];
}
