import Link from "next/link";
import { diveSites, destinations, faunaList } from "@/data/dive-sites";
import { SiteCard } from "@/components/SiteCard";

export default function HomePage(){
  const featured=diveSites.filter(site=>["Illes Medes","Islas Hormigas","Parque Nacional de Cabrera","La Restinga","Playa Chica","Maro–Cerro Gordo"].includes(site.name));
  const stats=[["50","puntos de buceo"],[String(destinations.length),"destinos"],[String(faunaList.length),"especies y fauna"],["España","primer mercado"]];
  return <>
    <section className="hero ocean-hero">
      <div className="underwater-bubbles" aria-hidden="true"><i/><i/><i/><i/><i/><i/><i/></div>
      <div className="water-ray ray-a"/><div className="water-ray ray-b"/>
      <div className="container hero-grid"><div className="hero-copy">
        <span className="hero-kicker">🤿 BUCEO · MAPA · FAUNA · EXPERIENCIAS</span>
        <h1>Explora el mundo <em>bajo el agua.</em></h1>
        <p>Encuentra dónde bucear, descubre qué animales puedes ver y empieza a comparar actividades para tu próxima inmersión.</p>
        <form className="hero-search" action="/actividades"><span>⌕</span><input name="q" placeholder="¿Qué quieres hacer? Ej. bautismo, pecio, fauna..." /><button type="submit">Buscar actividades</button></form>
        <div className="hero-actions"><Link href="/mapa" className="button button-primary">🗺️ Explorar mapa</Link><Link href="/actividades" className="button button-ghost">🤿 Ver actividades</Link></div>
        <div className="hero-trust"><span>● España primero</span><span>● 50 puntos iniciales</span><span>● Preparado para reservas y afiliación</span></div>
      </div>
      <div className="hero-visual underwater-scene" aria-label="Escena submarina con buceador y fauna">
        <div className="sunbeams"/>
        <div className="turtle">🐢</div><div className="fish fish-a">›)))°&gt;</div><div className="fish fish-b">›)))°&gt;</div><div className="fish fish-c">›)))°&gt;</div>
        <div className="diver"><span className="diver-head"/><span className="diver-body"/><span className="diver-tank"/><span className="diver-fin fin-a"/><span className="diver-fin fin-b"/></div>
        <div className="reef"><span/><span/><span/><span/><span/><span/></div>
        <div className="visual-sticker"><strong>BUCEO</strong><span>Explora · Sumérgete · Vive</span></div>
        <div className="visual-caption"><strong>50</strong><span>puntos para empezar a explorar España</span></div>
      </div></div>
    </section>
    <section className="stats-strip"><div className="container stats-grid">{stats.map(([value,label])=><div className="stat" key={label}><strong>{value}</strong><span>{label}</span></div>)}</div></section>
    <section className="section"><div className="container"><div className="section-heading"><div><span className="eyebrow">BUCEA A TU MANERA</span><h2>¿Qué te apetece encontrar?</h2></div><Link href="/actividades" className="text-link">Buscar experiencias →</Link></div>
      <div className="intent-grid">
        <Link href="/actividades?type=Bautismo" className="intent-card"><span className="intent-icon">🤿</span><strong>Mi primer buceo</strong><span>Bautismos y experiencias para empezar.</span></Link>
        <Link href="/mapa?fauna=Mero" className="intent-card"><span className="intent-icon">🐟</span><strong>Fauna marina</strong><span>Meros, rayas, morenas, pulpos y mucho más.</span></Link>
        <Link href="/actividades?type=Pecio" className="intent-card"><span className="intent-icon">⚓</span><strong>Pecios</strong><span>Historia bajo el agua para buceadores certificados.</span></Link>
        <Link href="/actividades?type=Inmersiones" className="intent-card"><span className="intent-icon">🌊</span><strong>Inmersiones</strong><span>Busca por destino, nivel y tipo de experiencia.</span></Link>
      </div></div></section>
    <section className="section section-soft"><div className="container split-feature"><div><span className="eyebrow">MAPA DE BUCEO EN ESPAÑA</span><h2>Del mapa al centro de buceo.</h2><p>Explora puntos por zona, nivel, tipo de inmersión y fauna. El siguiente paso es conectar cada destino con actividades reales para comparar y reservar.</p><div className="feature-buttons"><Link href="/mapa" className="button button-primary">Explorar mapa</Link><Link href="/actividades" className="text-link">Buscar actividad →</Link></div></div>
      <div className="mini-map">{diveSites.slice(0,18).map((site,i)=><span key={site.id} className="mini-pin" style={{left:`${12+((i*29)%76)}%`,top:`${18+((i*41)%65)}%`}}/>)}<div className="mini-map-label">🇪🇸 ESPAÑA · 50 PUNTOS</div></div>
    </div></section>
    <section className="section"><div className="container"><div className="section-heading"><div><span className="eyebrow">DESTINOS DESTACADOS</span><h2>Seis lugares para abrir boca.</h2></div><Link href="/destinos" className="text-link">Todos los destinos →</Link></div><div className="cards-grid">{featured.map(site=><SiteCard key={site.id} site={site}/>)}</div></div></section>
    <section className="section booking-section"><div className="container booking-panel"><div className="booking-icon">🤿</div><div><span className="eyebrow">NUEVA CAPA DE PRODUCTO</span><h2>Descubre → compara → reserva.</h2><p>Estamos preparando el buscador para conectar centros de buceo, actividades y proveedores con enlaces de reserva y afiliación verificados.</p></div><Link href="/actividades" className="button button-primary">Buscar actividades</Link></div></section>
  </>;
}