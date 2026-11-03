import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildArticleJsonLd } from "@/lib/seo";
import { IATI_AFFILIATE_URL } from "@/lib/affiliate";

const faqs = [
  {
    question: "¿Qué pasa si regalo un bautismo de buceo y a la persona le da agobio al entrar al agua?",
    answer:
      "En un bautismo de buceo nunca se baja de golpe: primero se explica todo fuera del agua y después se practica a respirar con el regulador haciendo pie en la orilla o agarrado al cabo en superficie. El instructor va de la mano del alumno en todo momento para que baje metro a metro solo cuando se sienta totalmente cómodo.",
  },
  {
    question: "¿Cuánto tiempo de validez suele tener un bono regalo de buceo?",
    answer:
      "Al reservar online o comprar un bono experiencia para regalar, lo habitual es disponer de hasta 12 meses para canjear la fecha concreta con la escuela, lo que permite regalarlo en Navidad, Reyes o un cumpleaños de invierno y disfrutarlo en Semana Santa o verano.",
  },
  {
    question: "¿Se puede regalar un bautismo de buceo a alguien que usa gafas o lentillas?",
    answer:
      "Sí, sin ningún problema. Puede hacer el bautismo llevando puestas lentillas blandas (preferiblemente diarias desechables) debajo de la máscara normal, y además con el efecto lupa del agua (+25 %) las graduaciones bajas de menos de 1,25 dioptrías apenas se notan.",
  },
  {
    question: "¿Qué regalar a alguien que ya tiene el carnet Open Water Diver?",
    answer:
      "Si la persona ya tiene el título Open Water, los tres regalos que más ilusión hacen son: una inmersión doble en una reserva marina (como Cabo de Palos, Illes Medes o El Hierro), una especialidad de aire enriquecido Nitrox, o el curso Advanced Open Water para poder bajar hasta 30 metros y visitar barcos hundidos.",
  },
];

export const metadata = {
  title: "Regalar un Bautismo o Curso de Buceo en España: Precios y Cómo Funciona",
  description:
    "Guía práctica para regalar un bautismo de buceo o un curso Open Water en España: cuánto cuesta, qué opción elegir según la persona, cómo canjear fechas en verano y mejores destinos.",
  alternates: {
    canonical: "/guias/regalar-bautismo-o-curso-de-buceo",
  },
  openGraph: {
    title: "Cómo Regalar un Bautismo o Curso de Buceo en España | Buceo Atlas",
    description:
      "Precios reales, diferencias entre regalar un bautismo en pareja o un curso Open Water y consejos para acertar en Navidad, Reyes o cumpleaños.",
    url: "/guias/regalar-bautismo-o-curso-de-buceo",
    type: "article",
  },
};

export default function GiftScubaDivingGuidePage() {
  const articleJsonLd = buildArticleJsonLd({
    title: "Regalar un Bautismo o Curso de Buceo en España: Precios y Cómo Funciona",
    description:
      "Guía práctica para regalar un bautismo de buceo o un curso Open Water en España: cuánto cuesta, qué opción elegir según la persona, cómo canjear fechas en verano y mejores destinos.",
    path: "/guias/regalar-bautismo-o-curso-de-buceo",
    datePublished: "2026-11-03",
    dateModified: "2026-11-03",
    faqs,
  });

  return (
    <section className="section">
      <div className="container">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        />
        <Breadcrumbs
          items={[
            { name: "Guías", path: "/guias" },
            { name: "Regalar un bautismo o curso de buceo", path: "/guias/regalar-bautismo-o-curso-de-buceo" },
          ]}
        />
        <span className="eyebrow">GUÍA DE COMPRA · EXPERIENCIAS PARA REGALAR</span>
        <h1>Cómo regalar un bautismo o curso de buceo en España: precios, caducidad y qué elegir</h1>
        <p className="lead">
          Regalar la primera vez que alguien respira debajo del agua es de esas experiencias que se recuerdan toda la vida. Pero cuando vas a comprarlo para un cumpleaños, aniversario, Navidad o Reyes suelen surgir tres dudas muy lógicas: <em>«¿le regalo un bautismo o directamente el curso?», «¿cuánto cuesta para dos personas?» y «¿qué pasa si lo compro en invierno para usarlo en verano?»</em>. Te lo resolvemos de forma clara.
        </p>

        <div className="guide-article">
          <h2>¿Qué es mejor regalar: un bautismo de buceo o el curso Open Water Diver?</h2>
          <p>
            El error más habitual al hacer un regalo grande es comprar directamente el curso completo a alguien que nunca se ha puesto un regulador en la boca. Mira la diferencia real de tiempo y compromiso antes de decidir (<Link href="/guias/bautismo-vs-curso-open-water" className="text-link">ver comparativa a fondo Bautismo vs Open Water</Link>):
          </p>

          <div className="vs-grid">
            <div className="vs-card">
              <span className="eyebrow">ACIERTAS EN EL 95 % DE LOS CASOS</span>
              <h3>Regalar un Bautismo de Buceo (1 mañana)</h3>
              <p>
                Es la opción ideal si la persona tiene curiosidad por el mar pero nunca ha buceado con botella. Dura unas <strong>2,5 a 3 horas en total</strong> (charla breve + 35–45 minutos bajo el agua a un máximo de 6–12 metros junto a un instructor).
              </p>
              <ul>
                <li><strong>Cero deberes ni exámenes:</strong> solo tiene que llevar bañador y toalla; todo el equipo y el seguro van incluidos.</li>
                <li><strong>Perfecto para hacer en pareja:</strong> por lo que cuesta un tercio de un curso, podéis vivir el bautismo los dos juntos y llevaros fotos o vídeo bajo el agua.</li>
              </ul>
            </div>

            <div className="vs-card">
              <span className="eyebrow">EL REGALO ESTRELLA SI YA LE ENCANTA EL MAR</span>
              <h3>Regalar el Curso Open Water (3–4 días)</h3>
              <p>
                Elígele directamente el curso oficial (<Link href="/guias/padi-vs-ssi-diferencias" className="text-link">PADI o SSI</Link>) si ya ha hecho un bautismo antes, si hace mucho snorkel/apnea o si lleva años diciendo que quiere sacarse el carnet para viajar.
              </p>
              <ul>
                <li><strong>Título internacional de por vida:</strong> le habilita para bucear hasta 18 metros en cualquier parte del mundo.</li>
                <li><strong>Puede estudiar la teoría desde casa en invierno:</strong> recibe su código digital de e-learning al instante y hace las prácticas de mar cuando llegue el buen tiempo.</li>
              </ul>
            </div>
          </div>

          <h2>Cuánto cuesta regalar una experiencia de buceo en España (tabla de precios)</h2>
          <p>
            Según los precios verificados de los más de 200 centros de nuestro directorio, esto es lo que te costará cada tipo de regalo en la costa española:
          </p>

          <div style={{ overflowX: "auto", margin: "1.25rem 0 1.75rem" }}>
            <table>
              <thead>
                <tr>
                  <th>Experiencia para regalar</th>
                  <th>Para quién es</th>
                  <th>Precio real en España</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Bautismo de buceo individual (desde playa o cala)</strong></td>
                  <td>1 persona sin experiencia</td>
                  <td>60 € – 79 € (equipo completo y seguro incluidos)</td>
                </tr>
                <tr>
                  <td><strong>Bautismo de buceo desde barco o con reportaje de fotos</strong></td>
                  <td>1 persona sin experiencia</td>
                  <td>75 € – 98 €</td>
                </tr>
                <tr>
                  <td><strong>Pack Bautismo de buceo para 2 personas (en pareja)</strong></td>
                  <td>Parejas o amigos</td>
                  <td>120 € – 175 € (total para los dos)</td>
                </tr>
                <tr>
                  <td><strong>Curso Open Water Diver completo (certificación oficial)</strong></td>
                  <td>Sacarse el primer carnet</td>
                  <td>350 € – 460 € (teoría online, piscina, 4 salidas de mar y tasas)</td>
                </tr>
                <tr>
                  <td><strong><Link href="/guias/curso-advanced-open-water-espana" className="text-link">Curso Advanced Open Water</Link> o bono de 2 inmersiones</strong></td>
                  <td>Para quien ya tiene carnet</td>
                  <td>75 € – 95 € (doble salida) / 310 € – 390 € (curso Advanced)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>¿Cómo funciona si lo regalo en Navidad o invierno para usarlo en verano?</h2>
          <p>
            Más de la mitad de los regalos de buceo se compran entre noviembre y enero (Black Friday, Navidad y Reyes) o en primavera. Tienes tres maneras muy prácticas de organizarlo según dónde viva la persona:
          </p>
          <ol>
            <li>
              <strong>Reservar en su destino habitual de vacaciones de verano:</strong> si sabes que en Semana Santa o verano siempre veranea en la <Link href="/buceo/costa-brava" className="text-link">Costa Brava (Tossa de Mar, L’Estartit)</Link>, <Link href="/buceo/alicante" className="text-link">Alicante (Jávea, Calpe, Tabarca)</Link>, <Link href="/buceo/cabo-de-palos" className="text-link">Cabo de Palos / La Manga</Link>, <Link href="/buceo/la-herradura" className="text-link">La Herradura</Link> o <Link href="/buceo/mallorca" className="text-link">Baleares</Link>, eliges una actividad de esa zona y la canjea en cuanto empiece la temporada (<Link href="/guias/mejor-epoca-para-bucear-en-espana" className="text-link">consulta aquí el calendario de apertura y temperatura del agua</Link>).
            </li>
            <li>
              <strong>Empezar en invierno en piscina climatizada (<Link href="/buceo/madrid" className="text-link">Madrid</Link> o <Link href="/buceo/barcelona" className="text-link">Barcelona</Link>):</strong> en ciudades como Madrid hay bautismos en fosos y piscinas climatizadas a 28 °C durante todo el invierno, o cursos donde haces la teoría y la piscina en enero/febrero y solo te escapas un fin de semana a la costa para las 4 inmersiones de mar.
            </li>
            <li>
              <strong>Escapada de invierno a Canarias:</strong> si quieres regalar un viaje sorpresa para bucear en pleno diciembre, enero o febrero con el agua a 21 °C, elige <Link href="/buceo/tenerife" className="text-link">Tenerife (Las Galletas / Costa Adeje)</Link>, <Link href="/buceo/lanzarote" className="text-link">Lanzarote (Playa Chica)</Link>, <Link href="/buceo/gran-canaria" className="text-link">Gran Canaria</Link> o <Link href="/buceo/el-hierro" className="text-link">El Hierro</Link>. *(Si organizas el viaje con vuelos, recuerda dejar 24 h sin bucear antes del avión de vuelta y que puedes incluir un seguro de viaje y buceo en <a href={IATI_AFFILIATE_URL} target="_blank" rel="sponsored noopener noreferrer" className="text-link">IATI Seguros con un 5 % de descuento aquí ↗</a>).*
            </li>
          </ol>

          <div className="editorial-tip">
            <p>
              📸 <strong>El detalle que marca la diferencia en un regalo:</strong> cuando compares opciones en nuestro buscador, fíjate en si el bautismo indica <strong>«incluye fotos o vídeo subacuático»</strong> (o pídelo como extra en el centro por unos 15–20 €). Tener la foto de la primera vez bajo el agua rodeado de peces hace el doble de ilusión que el propio diploma.
            </p>
          </div>

          <h2>4 cosas rápidas que debes comprobar antes de reservar el regalo</h2>
          <p>
            Antes de confirmar la actividad para otra persona, asegúrate de que cumple estos cuatro puntos básicos (tienes todos los detalles en nuestra guía de <Link href="/guias/requisitos-para-bucear-en-espana" className="text-link">requisitos para bucear en España</Link>):
          </p>
          <ul>
            <li>
              <strong>Edad mínima:</strong> en la mayoría de centros españoles los niños pueden hacer su primer bautismo a partir de los <strong>8 o 10 años</strong>.
            </li>
            <li>
              <strong>Salud general de oídos y pulmones:</strong> cualquier persona sana puede hacer un bautismo firmando un cuestionario sencillo en el centro; solo debe evitar hacerse un día que esté muy resfriada para poder <Link href="/guias/como-compensar-oidos-al-bucear" className="text-link">compensar bien los oídos al bajar</Link>.
            </li>
            <li>
              <strong>Gafas o lentillas:</strong> si tiene miopía o astigmatismo, no hay ningún impedimento (<Link href="/guias/bucear-con-gafas-o-lentillas" className="text-link">ver cómo bucear con lentillas o máscara graduada</Link>).
            </li>
            <li>
              <strong>Saber nadar de forma básica:</strong> para un bautismo no hace falta tener técnica de natación deportiva, solo defenderse con soltura en el agua.
            </li>
          </ul>

          <h2>Preguntas frecuentes sobre regalar un bautismo o curso de buceo</h2>
          <div style={{ display: "grid", gap: "0.75rem", marginTop: "1rem", marginBottom: "2rem" }}>
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="notice-card"
                style={{ margin: 0, cursor: "pointer" }}
              >
                <summary style={{ fontWeight: 700, fontSize: "1.05rem" }}>
                  {faq.question}
                </summary>
                <p style={{ marginTop: "0.65rem", marginBottom: 0 }}>{faq.answer}</p>
              </details>
            ))}
          </div>

          <div className="cta-section" style={{ paddingBottom: 0 }}>
            <div className="cta-panel">
              <div>
                <span className="eyebrow">277 BAUTISMOS Y 430 CURSOS VERIFICADOS</span>
                <h2>Elige el destino y compara experiencias para regalar</h2>
                <p>
                  Filtra por bautismos o cursos en la provincia que prefieras y consulta qué incluye cada escuela.
                </p>
              </div>
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                <Link className="button button-primary" href="/actividades/#type=Bautismo">
                  Ver bautismos para regalar →
                </Link>
                <Link className="button button-ghost" href="/actividades/#type=Curso">
                  Ver cursos Open Water
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
