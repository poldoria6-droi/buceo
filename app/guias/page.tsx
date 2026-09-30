import Link from "next/link";

const guides=[
  ["Bautismo de buceo en España","Qué es, qué suele incluir y qué comparar antes de reservar.","Principiantes","/guias/bautismo-de-buceo-en-espana","Ver guía →"],
  ["Cuánto cuesta un bautismo de buceo","Qué factores cambian el precio y cómo comparar dos experiencias.","Precios","/guias/cuanto-cuesta-un-bautismo-de-buceo","Ver guía →"],
  ["Qué equipo necesito para empezar a bucear","Qué material necesitas, qué puedes alquilar y qué conviene comparar antes de comprar.","Equipamiento","/guias/que-equipo-necesito-para-empezar-a-bucear","Ver guía →"],
  ["PADI vs SSI: diferencias que conviene entender","Una guía práctica para comparar certificaciones con información.","Certificaciones","/mapa","Explorar →"],
  ["Buceo desde costa vs desde barco","Acceso, logística y perfiles de inmersión para planificar tu salida.","Planificación","/mapa","Explorar →"],
  ["Qué animales puedes encontrar buceando","Guía visual de fauna por destinos y tipo de fondo.","Fauna","/mapa","Explorar →"]
];

export const metadata={
  title:"Guías de buceo",
  description:"Guías prácticas sobre bautismo, precios, equipamiento, certificaciones, fauna y planificación de inmersiones."
};

export default function GuidesPage(){
  return <section className="section"><div className="container">
    <span className="eyebrow">CONTENIDO SEO</span>
    <h1>Guías para bucear mejor</h1>
    <p className="lead">Contenido pensado para resolver preguntas que aparecen antes de decidir destino, experiencia o equipo.</p>
    <div className="guide-grid">
      {guides.map(([title,text,tag,url,cta])=><article className="guide-card" key={title}>
        <span className="eyebrow">{tag}</span>
        <h2>{title}</h2>
        <p>{text}</p>
        <Link href={url} className="text-link">{cta}</Link>
      </article>)}
    </div>
  </div></section>
}