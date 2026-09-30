import Link from "next/link";
import { activities, activityRegions, activityTypes } from "@/data/activities";

export const metadata={title:"Actividades de buceo en España",description:"Encuentra bautismos, Fun Dive, cursos, pecios, fauna y snorkel por destino, nivel y tipo de actividad."};

export default async function ActivitiesPage({searchParams}:{searchParams:Promise<Record<string,string|string[]|undefined>>}){
  const params=await searchParams;
  const q=String(params.q||"").trim().toLowerCase();
  const region=String(params.region||"Todos");
  const type=String(params.type||"Todos");
  const level=String(params.level||"Todos");
  const destination=String(params.destination||"Todos");
  const destinations=Array.from(new Set(activities.map(a=>a.destination))).sort();
  const filtered=activities.filter(a=>(region==="Todos"||a.region===region)&&(type==="Todos"||a.type===type)&&(level==="Todos"||a.level===level)&&(destination==="Todos"||a.destination===destination)&&(!q||`${a.title} ${a.destination} ${a.region} ${a.tags.join(" ")}`.toLowerCase().includes(q)));

  return <section className="activities-page"><div className="container">
    <div className="activities-hero"><div><span className="eyebrow">BUSCADOR DE EXPERIENCIAS</span><h1>Encuentra una actividad de buceo.</h1><p>Elige directamente qué quieres hacer, el destino y tu nivel. Sin tener que escribir.</p></div><div className="activity-hero-icon" aria-hidden="true">🤿</div></div>
    <form className="activity-search" action="/actividades">
      {q&&<input type="hidden" name="q" value={q}/>}
      <select name="type" defaultValue={type}><option value="Todos">¿Qué quieres hacer?</option>{activityTypes.map(t=><option key={t}>{t}</option>)}</select>
      <select name="region" defaultValue={region}><option value="Todos">Zona</option>{activityRegions.map(r=><option key={r}>{r}</option>)}</select>
      <select name="destination" defaultValue={destination}><option value="Todos">Destino</option>{destinations.map(d=><option key={d}>{d}</option>)}</select>
      <select name="level" defaultValue={level}><option value="Todos">Nivel</option><option>Inicial</option><option>Intermedio</option><option>Avanzado</option></select>
      <button className="button button-primary" type="submit">Aplicar filtros</button>
    </form>
    <div className="activity-intents">
      <Link href="/actividades?type=Bautismo">🤿 Bautismo</Link><Link href="/actividades?type=Fun%20Dive">🐠 Fun Dive</Link><Link href="/actividades?type=Pecio">⚓ Pecios</Link><Link href="/actividades?type=Fauna">🦈 Fauna</Link><Link href="/actividades?type=Curso">🎓 Cursos</Link><Link href="/actividades?type=Snorkel">🌊 Snorkel</Link>
    </div>
    <div className="activity-heading"><div><span className="eyebrow">CATÁLOGO INICIAL</span><h2>{filtered.length} experiencias para explorar</h2></div><Link href="/mapa" className="text-link">Ver mapa →</Link></div>
    <div className="activity-grid">{filtered.map(a=><article className="activity-card" key={a.id}><div className="activity-card-art"><span>{a.type==="Pecio"?"⚓":a.type==="Fauna"?"🐢":a.type==="Curso"?"🎓":a.type==="Fun Dive"?"🐠":"🤿"}</span><small>{a.region}</small></div><div className="activity-card-body"><div className="activity-meta"><span>{a.level}</span><span>{a.duration}</span></div><h3>{a.title}</h3><p>{a.audience} · {a.destination}</p><div className="animal-row">{a.tags.map(tag=><span key={tag}>{tag}</span>)}</div><div className="activity-book-row"><span className="booking-placeholder">Conexión con proveedor en preparación</span><Link href={`/afiliados?activity=${a.slug}`} className="text-link">Cómo reservar →</Link></div></div></article>)}</div>
    <div className="affiliate-funnel"><div><span className="eyebrow">DISEÑADO PARA RESERVAR</span><h2>Descubre → compara → reserva.</h2><p>Esta capa será nuestro motor de afiliación: centros de buceo, experiencias y proveedores podrán aparecer cuando tengamos enlaces, condiciones y comisiones verificadas.</p></div><Link href="/afiliados" className="button button-primary">Ver modelo de afiliación</Link></div>
    <p className="data-note activity-note">Catálogo editorial inicial: estas tarjetas no representan ofertas, precios, disponibilidad ni comisiones actuales. Se sustituirán por experiencias verificadas y enlaces de proveedores antes de habilitar reservas.</p>
  </div></section>;
}