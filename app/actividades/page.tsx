import Link from "next/link";
import { diveSites } from "@/data/dive-sites";
import { activities, activityRegions, activityTypes } from "@/data/activities";
import { ActivitiesExplorer } from "@/app/actividades/ActivitiesExplorer";

export const metadata={title:"Actividades de buceo en España",description:"Encuentra y compara bautismos, Fun Dive, cursos, pecios y snorkel sobre un mapa interactivo por destino, punto y nivel."};

export default async function ActivitiesPage({searchParams}:{searchParams:Promise<Record<string,string|string[]|undefined>>}){
  const params=await searchParams;
  const pick=(value:string|string[]|undefined)=>Array.isArray(value)?value[0]||"Todos":value||"Todos";
  const type=pick(params.type);
  const region=pick(params.region);
  const destination=pick(params.destination);
  const level=pick(params.level);
  const site=pick(params.site);

  return <section className="activities-page"><div className="container">
    <div className="activities-hero">
      <div>
        <span className="eyebrow">RESERVAR EXPERIENCIAS</span>
        <h1>Elige qué quieres hacer.<br/><em>Encuentra dónde hacerlo.</em></h1>
        <p>Elige una comunidad autónoma y después una ciudad o destino. Compara las actividades de la lista o explora sus puntos de buceo en el mapa.</p>
      </div>
      <div className="activity-hero-icon" aria-hidden="true">🤿</div>
    </div>
    <ActivitiesExplorer activities={activities} sites={diveSites} regions={activityRegions} types={activityTypes} initial={{type,region,destination,level,site}} />
  </div></section>;
}

