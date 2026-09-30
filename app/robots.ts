import type { MetadataRoute } from "next";
export default function robots():MetadataRoute.Robots{return{rules:{userAgent:"*",allow:"/"},sitemap:"https://buceo-nine.vercel.app/sitemap.xml"};}