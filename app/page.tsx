import Link from "next/link";
import { diveSites, faunaList, regions } from "@/data/dive-sites";
import { MapExplorer } from "@/app/mapa/MapExplorer";

export default function HomePage(){
  const stats=[["◉","50","Puntos de buceo"],["♧","","Fauna marina"],["▱","","Guías y consejos"],["◈","","Destinos increíbles"],["▣","","Fotos y experiencias"]];
  return <div className="home-page">
    <section className="reference-hero">
      <div className="hero-overlay"/>
      <div className="container reference-hero-inner">
        <div className="reference-hero-copy">
          <span className="reference-kicker">LOS MEJORES LUGARES DE BUCEO DE ESPAÑA</span>
          <h1>Explora el mundo<br/><em>bajo el agua</em></h1>
          <p>Mapas interactivos, guías, fauna marina y consejos para descubrir los mejores destinos de buceo.</p>
          <form className="reference-search" action="/actividades">
            <span>⌕</span><input name="q" placeholder="¿Dónde quieres bucear o qué quieres hacer?" aria-label="Buscar actividades y lugares"/><button>Buscar</button>
          </form>
          <div className="reference-stat-row">{stats.map(([icon,value,label])=><Link key={label} href={label==="Fauna marina"?"/fauna":label==="Destinos increíbles"?"/destinos":"/mapa"} className="reference-stat"><span>{icon}</span>{value&&<strong>{value}</strong>}<small>{label}</small></Link>)}</div>
        </div>
      </div>
      <div className="reference-swoosh" aria-hidden="true"/>
    </section>
    <section className="reference-map-section"><div className="container"><MapExplorer sites={diveSites} regions={regions} fauna={faunaList}/></div></section>
    <section className="section home-after-map"><div className="container"><div className="section-heading"><div><span className="eyebrow">DEL MAPA A LA RESERVA</span><h2>Encuentra la actividad que encaja contigo.</h2></div><Link href="/actividades" className="text-link">Ver todas las actividades →</Link></div><div className="home-discovery-grid"><Link href="/actividades?type=Bautismo" className="home-discovery-card"><b>🤿</b><strong>Mi primer buceo</strong><span>Bautismos y experiencias para empezar.</span></Link><Link href="/actividades?type=Pecio" className="home-discovery-card"><b>⚓</b><strong>Pecios</strong><span>Encuentra inmersiones en pecios y reservas.</span></Link><Link href="/actividades?type=Fauna" className="home-discovery-card"><b>🐢</b><strong>Fauna marina</strong><span>Busca lugares por los animales que quieres encontrar.</span></Link></div></div></section>
  </div>;
}