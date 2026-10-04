import { activities } from "@/data/activities";
import type { MetadataRoute } from "next";
import { destinations } from "@/data/dive-sites";
export default function sitemap():MetadataRoute.Sitemap{
  const base="https://buceo-nine.vercel.app";
  return [
    {url:base,lastModified:new Date()},{url:`${base}/destinos`,lastModified:new Date()},{url:`${base}/guias`,lastModified:new Date()},{url:`${base}/actividades`,lastModified:new Date()},{url:`${base}/material`,lastModified:new Date()},{url:`${base}/afiliados`,lastModified:new Date()},
    ...activities.map(activity=>({url:`${base}/actividades/${activity.slug}`})),
    ...destinations.map(d=>({url:`${base}/buceo/${d.slug}`,lastModified:new Date()}))
  ];
}
