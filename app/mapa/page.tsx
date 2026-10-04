import { redirect } from "next/navigation";
import { diveSites } from "@/data/dive-sites";
export default async function Page({searchParams}:{searchParams:Promise<{q?:string;species?:string}>}){
  const params=await searchParams;
  const site=diveSites.find(s=>s.name===params.q||s.slug===params.q);
  const query=new URLSearchParams();
  if(site)query.set("site",site.slug);
  if(params.species)query.set("species",params.species);
  redirect(`/actividades${query.size?`?${query.toString()}`:""}#mapa`);
}
