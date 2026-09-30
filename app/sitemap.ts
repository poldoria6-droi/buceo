import type { MetadataRoute } from "next";
import { destinations } from "@/data/dive-sites";
export default function sitemap():MetadataRoute.Sitemap{
  const base="https://buce.netlify.app";
  return [
    {url:base,lastModified:new Date()},{url:`${base}/mapa`,lastModified:new Date()},{url:`${base}/destinos`,lastModified:new Date()},{url:`${base}/guias`,lastModified:new Date()},{url:`${base}/fauna`,lastModified:new Date()},{url:`${base}/actividades`,lastModified:new Date()},{url:`${base}/afiliados`,lastModified:new Date()},
    ...destinations.map(d=>({url:`${base}/buceo/${d.slug}`,lastModified:new Date()}))
  ];
}