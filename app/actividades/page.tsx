import { diveSites } from "@/data/dive-sites";
import { activities, activityRegions, activityTypes } from "@/data/activities";
import { ActivitiesExplorer } from "@/app/actividades/ActivitiesExplorer";

export const metadata={title:"Actividades de buceo en España",description:"Encuentra y compara bautismos, Fun Dive, cursos, pecios, fauna y snorkel sobre un mapa interactivo por destino, punto y nivel."};

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
        <p>Filtra por actividad, zona, destino, punto de buceo y nivel. El mapa muestra los lugares relacionados y cada punto te enseña las experiencias que encajan.</p>
      </div>
      <div className="activity-hero-icon" aria-hidden="true">🤿</div>
    </div>
    <ActivitiesExplorer activities={activities} sites={diveSites} regions={activityRegions} types={activityTypes} initial={{type,region,destination,level,site}} />
    <div className="affiliate-funnel">
      <div><span className="eyebrow">FUTURO MOTOR DE AFILIACIÓN</span><h2>Del punto del mapa a la reserva.</h2><p>La relación ya está preparada entre actividad y punto de inmersión. La siguiente fase será sustituir las actividades de demostración por ofertas verificadas de proveedores: precio, disponibilidad, qué incluye, cancelación, valoración y enlace de reserva.</p></div>
    </div>
  </div></section>;
}
