import { diveSites } from "@/data/dive-sites";
import { activities, activityRegions, activityTypes } from "@/data/activities";
import { ActivitiesExplorer } from "@/app/actividades/ActivitiesExplorer";

export const metadata={title:"Actividades de buceo en España",description:"Encuentra y compara bautismos, Fun Dive, cursos, pecios, fauna y snorkel sobre un mapa interactivo por destino y nivel."};

export default async function ActivitiesPage({searchParams}:{searchParams:Promise<Record<string,string|string[]|undefined>>}){
  const params=await searchParams;
  const pick=(value:string|string[]|undefined)=>Array.isArray(value)?value[0]||"Todos":value||"Todos";
  const type=pick(params.type);
  const region=pick(params.region);
  const destination=pick(params.destination);
  const level=pick(params.level);

  return <section className="activities-page"><div className="container">
    <div className="activities-hero">
      <div>
        <span className="eyebrow">RESERVAR EXPERIENCIAS</span>
        <h1>Elige qué quieres hacer.<br/><em>El mapa hace el resto.</em></h1>
        <p>Filtra por actividad, zona, destino y nivel. Después explora en el mapa los puntos que encajan y abre cada ubicación para consultar inmersión, profundidad, fauna y opciones de reserva.</p>
      </div>
      <div className="activity-hero-icon" aria-hidden="true">🤿</div>
    </div>

    <ActivitiesExplorer
      activities={activities}
      sites={diveSites}
      regions={activityRegions}
      types={activityTypes}
      initial={{type,region,destination,level}}
    />

    <div className="affiliate-funnel">
      <div><span className="eyebrow">FUTURO MOTOR DE AFILIACIÓN</span><h2>Del punto del mapa a la reserva.</h2><p>En la siguiente fase conectaremos cada experiencia con proveedores y partners: precio, disponibilidad, qué incluye, cancelación, valoración y enlace de reserva.</p></div>
    </div>
  </div></section>;
}
