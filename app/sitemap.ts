import { centers } from "@/data/centers";
import { species } from "@/data/species";
import { activities } from "@/data/activities";
import type { MetadataRoute } from "next";
import { destinations } from "@/data/dive-sites";
import { SITE_URL } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_URL;
  return [
    { url: base, lastModified: new Date() },
    { url: `${base}/destinos`, lastModified: new Date() },
    { url: `${base}/guias`, lastModified: new Date() },
    { url: `${base}/guias/bautismo-de-buceo-en-espana`, lastModified: new Date() },
    { url: `${base}/guias/cuanto-cuesta-un-bautismo-de-buceo`, lastModified: new Date() },
    { url: `${base}/guias/que-equipo-necesito-para-empezar-a-bucear`, lastModified: new Date() },
    { url: `${base}/guias/padi-vs-ssi-diferencias`, lastModified: new Date() },
    { url: `${base}/guias/mejores-zonas-de-buceo-en-espana`, lastModified: new Date() },
    { url: `${base}/actividades`, lastModified: new Date() },
    { url: `${base}/fauna`, lastModified: new Date() },
    { url: `${base}/centros`, lastModified: new Date() },
    { url: `${base}/afiliados`, lastModified: new Date() },
    ...centers.map((center) => ({ url: `${base}/centros/${center.slug}` })),
    ...species.map((item) => ({ url: `${base}/fauna/${item.slug}` })),
    ...activities.map((activity) => ({ url: `${base}/actividades/${activity.slug}` })),
    ...destinations.map((d) => ({ url: `${base}/buceo/${d.slug}`, lastModified: new Date() })),
  ];
}
