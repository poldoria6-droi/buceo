import Link from "next/link";
import { diveSites, destinations, faunaList } from "@/data/dive-sites";
import { SiteCard } from "@/components/SiteCard";

export default function HomePage(){
  const featured=diveSites.filter(site=>["Illes Medes","Islas Hormigas","Cabrera","La Restinga","Playa Chica","Maro–Cerro Gordo"].includes(site.name));
  const stats=[["50","puntos de buceo"],[String(destinations.length),"destinos iniciales"],[String(faunaList.length),"fauna catalogada"],["1","mapa interactivo"]];
  return <>
    <section className="hero"><div className="hero-glow hero-glow-a"/><div className="hero-glow hero-glow-b"/>
      <div className="container hero-grid"><div className="hero-copy">
        <span className="hero-kicker">BUCEO · DESTINOS · FAUNA · EXPERIENCIAS</span>
        <h1>Encuentra tu próxima inmersión.</h1>
        <p>Explora lugares de buceo, descubre qué puedes encontrar bajo el agua y compara destinos antes de reservar.</p>
        <div className="hero-actions"><Link href="/mapa" className="button button-primary">Abrir mapa de buceo</Link><Link href="/destinos" className="button button-ghost">Ver destinos</Link></div>
        <div className="hero-trust"><span>● Datos editoriales iniciales</span><span>● España primero</span><span>● Preparado para afiliación</span></div>
      </div>
      <div className="hero-visual" aria-label="Ilustración submarina"><div className="sonar-ring ring-1"/><div className="sonar-ring ring-2"/><div className="sonar-ring ring-3"/>
        <div className="bubble bubble-1"/><div className="bubble bubble-2"/><div className="bubble bubble-3"/>
        <div className="diver"><span className="diver-head"/><span className="diver-body"/><span className="diver-tank"/><span className="diver-fin fin-a"/><span className="diver-fin fin-b"/></div>
        <div className="reef"><span/><span/><span/><span/><span/></div><div className="fish fish-a">›)))°&gt;</div><div className="fish fish-b">›)))°&gt;</div>
        <div className="visual-caption"><strong>50</strong><span>puntos para empezar a explorar</span></div>
      </div></div>
    </section>
    <section className="stats-strip"><div className="container stats-grid">{stats.map(([value,label])=><div className="stat" key={label}><strong>{value}</strong><span>{label}</span></div>)}</div></section>
    <section className="section"><div className="container"><div className="section-heading"><div><span className="eyebrow">DESCUBRE</span><h2>¿Qué quieres encontrar?</h2></div><Link href="/mapa" className="text-link">Explorar los 50 puntos →</Link></div>
      <div className="intent-grid">
        <Link href="/mapa?fauna=Mero" className="intent-card"><span className="intent-icon">🐟</span><strong>Fauna grande</strong><span>MerOs, rayas, barracudas y más.</span></Link>
        <Link href="/mapa?fauna=Pulpo" className="intent-card"><span className="intent-icon">🐙</span><strong>Vida macro</strong><span>Pulpos, nudibranquios y pequeños tesoros.</span></Link>
        <Link href="/mapa?type=Pecio" className="intent-card"><span className="intent-icon">⚓</span><strong>Pecios</strong><span>Para quienes buscan historia bajo el agua.</span></Link>
        <Link href="/mapa?level=Inicial" className="intent-card"><span className="intent-icon">◎</span><strong>Primera inmersión</strong><span>Opciones para empezar a descubrir el mar.</span></Link>
      </div></div></section>
    <section className="section section-soft"><div className="container split-feature"><div><span className="eyebrow">MAPA INTERACTIVO</span><h2>Del mapa al sitio de buceo en un toque.</h2><p>Filtra por región, tipo de inmersión, nivel y fauna. Cada punto abre una ficha breve con profundidad, atractivo principal y animales que puedes buscar.</p><Link href="/mapa" className="button button-primary">Explorar mapa</Link></div>
      <div className="mini-map">{diveSites.slice(0,18).map((site,i)=><span key={site.id} className="mini-pin" style={{left:`${12+((i*29)%76)}%`,top:`${18+((i*41)%65)}%`}}/>)}<div className="mini-map-label">ESPAÑA · 50 PUNTOS</div></div>
    </div></section>
    <section className="section"><div className="container"><div className="section-heading"><div><span className="eyebrow">PUNTOS DESTACADOS</span><h2>Seis lugares para abrir boca.</h2></div><Link href="/destinos" className="text-link">Todos los destinos →</Link></div><div className="cards-grid">{featured.map(site=><SiteCard key={site.id} site={site}/>)}</div></div></section>
    <section className="section cta-section"><div className="container cta-panel"><div><span className="eyebrow">PRÓXIMO PASO</span><h2>Elige destino. Nosotros ponemos el mapa.</h2><p>La V1 está preparada para conectar experiencias, centros y enlaces de afiliación reales.</p></div><Link href="/mapa" className="button button-primary">Empezar a explorar</Link></div></section>
  </>;
}