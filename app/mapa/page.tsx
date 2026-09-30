import { diveSites, faunaList, regions } from "@/data/dive-sites";
import { activities } from "@/data/activities";
import { MapExplorer } from "./MapExplorer";

export const metadata={title:"Mapa de buceo de España",description:"Explora puntos de buceo en España y relaciónalos con actividades como bautismos, Fun Dive, cursos, pecios, fauna y snorkel."};

export default function MapPage(){
  return <section className="map-page">
    <div className="container map-intro">
      <div>
        <span className="eyebrow">50 PUNTOS · V1</span>
        <h1>Mapa de buceo</h1>
        <p>Explora lugares, filtra por características y descubre qué actividades están conectadas con cada punto. Las coordenadas son aproximadas y los datos comerciales deben verificarse antes de reservar.</p>
      </div>
      <div className="map-badge"><strong>50</strong><span>sitios<br/>cargados</span></div>
    </div>
    <div className="container"><MapExplorer sites={diveSites} regions={regions} fauna={faunaList} activities={activities}/></div>
  </section>;
}