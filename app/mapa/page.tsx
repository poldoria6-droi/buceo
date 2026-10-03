import Link from "next/link";
import { centers } from "@/data/centers";
import { diveSites, faunaList, regions } from "@/data/dive-sites";
import { activities } from "@/data/activities";
import { MapExplorer } from "./MapExplorer";

export const metadata={title:"Mapa de buceo de España",description:"Explora puntos de buceo en España y relaciónalos con actividades como bautismos, Fun Dive, cursos, pecios, fauna y snorkel."};

export default function MapPage(){
  return <section className="map-page">
    <div className="container map-intro">
      <div>
        <span className="eyebrow">{diveSites.length} PUNTOS</span>
        <h1>Mapa de buceo</h1>
        <p>Explora lugares, filtra por características y descubre qué actividades están conectadas con cada punto. Las coordenadas son aproximadas y los datos comerciales deben verificarse antes de reservar.</p>
      </div>
      <div className="map-badge"><strong>{diveSites.length}</strong><span>sitios<br/>cargados</span></div>
    </div>
    <div className="container"><MapExplorer sites={diveSites} regions={regions} fauna={faunaList} activities={activities}/></div>
    <section className="container center-activities"><h2>Centros y sus actividades</h2><p>Encuentra el centro organizador y consulta sus opciones de reserva.</p><div className="guide-grid">{centers.map(center=><article className="guide-card" key={center.id}><h3>{center.name}</h3><p>{center.location}</p><Link className="text-link" href={`/centros/${center.slug}`}>Ver centro y reservar actividades →</Link></article>)}</div><Link href="/centros" className="text-link">Buscar centros por localidad →</Link></section>
  </section>;
}
