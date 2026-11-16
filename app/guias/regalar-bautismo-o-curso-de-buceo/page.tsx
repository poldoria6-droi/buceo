import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildArticleJsonLd } from "@/lib/seo";
import { IATI_AFFILIATE_URL } from "@/lib/affiliate";

const faqs = [
  {
    question: "¿Hasta cuándo duran las ofertas de Black Friday en bautismos y cursos de buceo?",
    answer:
      "La campaña de Black Friday en actividades de buceo está activa durante noviembre hasta el 30 de noviembre a las 23:59, con descuentos verificados de entre el 10 % y el 43 % en más de 800 bautismos, cursos Open Water e inmersiones por toda España.",
  },
  {
    question: "¿Puedo comprar una oferta en Black Friday para regalar en Navidad o Reyes sin elegir fecha?",
    answer:
      "Sí. Al reservar puedes seleccionar la opción de regalar sin fecha fija (o tarjeta regalo de buceo): recibes al instante un bono en PDF personalizable con dedicatoria para entregar en Navidad o Reyes, y la persona que lo recibe elige qué día quiere bucear cuando empiece la temporada de primavera o verano.",
  },
  {
    question: "¿Cuánto tiempo de validez tiene un bono regalo de buceo y se puede devolver?",
    answer:
      "Las experiencias adquiridas en modalidad bono regalo cuentan con un amplio margen de canje (hasta 5 años de validez en los bonos regalo de Yumping y posibilidad de devolución durante los primeros 14 días naturales si no se ha utilizado), por lo que puedes comprarlo en noviembre o diciembre con total tranquilidad.",
  },
  {
    question: "¿Qué pasa si regalo un bautismo de buceo y a la persona le da agobio al entrar al agua?",
    answer:
      "En un bautismo de buceo nunca se baja de golpe: primero se explica todo fuera del agua y después se practica a respirar con el regulador haciendo pie en la orilla o agarrado al cabo en superficie. El instructor va junto al alumno en todo momento para que descienda metro a metro solo cuando se sienta totalmente cómodo.",
  },
  {
    question: "¿Se puede regalar un bautismo de buceo a alguien que usa gafas o lentillas?",
    answer:
      "Sí, sin ningún problema. Puede realizar el bautismo llevando puestas lentillas blandas (preferiblemente diarias desechables) debajo de la máscara normal, y además gracias al efecto lupa del agua (+25 %) las graduaciones bajas de menos de 1,25 dioptrías apenas se notan.",
  },
  {
    question: "¿Qué regalar a alguien que ya tiene el carnet Open Water Diver?",
    answer:
      "Si la persona ya tiene el título Open Water, los tres regalos que más ilusión hacen son: un bono de 2 o 4 inmersiones en una reserva marina (Cabo de Palos, Illes Medes o El Hierro), la especialidad de aire enriquecido Nitrox, o el curso Advanced Open Water para bajar hasta 30 metros y visitar pecios.",
  },
];

export const metadata = {
  title: "Regalar Bautismo o Curso de Buceo: Ofertas Black Friday y Navidad",
  description:
    "Guía para regalar un bautismo de buceo o curso Open Water en Navidad, Reyes y Black Friday: descuentos de hasta el 43 %, precios reales y bono sin fecha.",
  alternates: {
    canonical: "/guias/regalar-bautismo-o-curso-de-buceo",
  },
  openGraph: {
    title: "Regalar un Bautismo o Curso de Buceo: Black Friday y Navidad | Buceo Atlas",
    description:
      "Ofertas Black Friday de hasta el −43 %, precios reales de bautismos y cursos Open Water y cómo regalar un bono sin fecha fija para Navidad o Reyes.",
    url: "/guias/regalar-bautismo-o-curso-de-buceo",
    type: "article",
  },
};

export default function GiftScubaDivingGuidePage() {
  const articleJsonLd = buildArticleJsonLd({
    title: "Regalar Bautismo o Curso de Buceo: Ofertas Black Friday y Navidad",
    description:
      "Guía para regalar un bautismo de buceo o curso Open Water en Navidad, Reyes y Black Friday: descuentos de hasta el 43 %, precios reales y bono sin fecha.",
    path: "/guias/regalar-bautismo-o-curso-de-buceo",
    datePublished: "2026-11-03",
    dateModified: "2026-11-16",
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
            { name: "Regalar bautismo o curso de buceo (Black Friday y Navidad)", path: "/guias/regalar-bautismo-o-curso-de-buceo" },
          ]}
        />
        <span className="eyebrow">ESPECIAL BLACK FRIDAY, NAVIDAD Y REYES 2026 · BONO SIN FECHA</span>
        <h1>Regalar un bautismo o curso de buceo en España: ofertas Black Friday, bono sin fecha y guía para Navidad</h1>
        <p className="lead">
          Entre mediados de noviembre y el Día de Reyes se concentra el mejor momento del año para comprar o regalar una experiencia submarina: las escuelas activan sus <strong>rebajas de Black Friday (hasta un −43 % de descuento hasta el 30 de noviembre)</strong> y puedes adquirir cualquier bautismo o curso en <strong>formato bono regalo sin fecha fija</strong> para entregarlo en Navidad o Reyes y disfrutarlo en primavera, verano o en una escapada de invierno a Canarias.
        </p>

        <div className="guide-article">
          <h2>Ofertas Black Friday 2026 en bautismos y cursos de buceo (hasta −43 % con bono sin fecha)</h2>
          <p>
            Hemos cruzado en vivo las <strong>804 ofertas de buceo en campaña de Black Friday</strong> de nuestro catálogo para seleccionar las rebajas reales más potentes en bautismos de iniciación y cursos oficiales. Todas permiten elegir al reservar la opción <em>«Regálalo sin fecha»</em> para que quien recibe el bono elija el día:
          </p>

          <div style={{ overflowX: "auto", margin: "1.25rem 0 1.75rem" }}>
            <table>
              <thead>
                <tr>
                  <th>Descuento</th>
                  <th>Actividad en oferta Black Friday</th>
                  <th>Destino</th>
                  <th>Antes</th>
                  <th>Precio hoy</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><span className="bf-discount-badge">−43 %</span></td>
                  <td>
                    <Link href="/actividades/curso-open-water-diver-alojamiento-tenerife-5-dias-61742" className="text-link">
                      Curso Open Water Diver + 5 días de alojamiento
                    </Link>
                  </td>
                  <td>Tenerife</td>
                  <td><s>599 €</s></td>
                  <td><strong>345 €</strong> (ahorras 254 €)</td>
                </tr>
                <tr>
                  <td><span className="bf-discount-badge">−42 %</span></td>
                  <td>
                    <Link href="/actividades/curso-scuba-diver-en-madrid-y-2-inmersiones-en-mar-29211" className="text-link">
                      Curso Scuba Diver en Madrid + 2 inmersiones en mar
                    </Link>
                  </td>
                  <td>Madrid + Costa</td>
                  <td><s>289 €</s></td>
                  <td><strong>169 €</strong> (ahorras 120 €)</td>
                </tr>
                <tr>
                  <td><span className="bf-discount-badge">−34 %</span></td>
                  <td>
                    <Link href="/actividades/curso-de-sidemount-de-buceo-lanzarote-405" className="text-link">
                      Curso de especialidad Sidemount en Lanzarote
                    </Link>
                  </td>
                  <td>Lanzarote</td>
                  <td><s>450 €</s></td>
                  <td><strong>300 €</strong> (ahorras 150 €)</td>
                </tr>
                <tr>
                  <td><span className="bf-discount-badge">−32 %</span></td>
                  <td>
                    <Link href="/actividades/open-water-diver-el-hierro-y-alojamiento-6-noches-54886" className="text-link">
                      Curso Open Water Diver + 6 noches en La Restinga
                    </Link>
                  </td>
                  <td>El Hierro</td>
                  <td><s>510 €</s></td>
                  <td><strong>350 €</strong> (ahorras 160 €)</td>
                </tr>
                <tr>
                  <td><span className="bf-discount-badge">−27 %</span></td>
                  <td>
                    <Link href="/actividades/bautismo-buceo-tenerife-46044" className="text-link">
                      Bautismo de buceo en el sur de Tenerife
                    </Link>
                  </td>
                  <td>Los Abrigos (Tenerife)</td>
                  <td><s>95 €</s></td>
                  <td><strong>70 €</strong> (ahorras 25 €)</td>
                </tr>
                <tr>
                  <td><span className="bf-discount-badge">−25 %</span></td>
                  <td>
                    <Link href="/actividades/bautismo-de-buceo-en-gran-canaria-3-h-375" className="text-link">
                      Bautismo de buceo en Gran Canaria (3 horas)
                    </Link>
                  </td>
                  <td>Las Palmas</td>
                  <td><s>60 €</s></td>
                  <td><strong>45 €</strong> (ahorras 15 €)</td>
                </tr>
                <tr>
                  <td><span className="bf-discount-badge">−25 %</span></td>
                  <td>
                    <Link href="/actividades/bautizo-de-buceo-en-la-restinga-certificacion-padi-54890" className="text-link">
                      Bautizo de buceo PADI en el Mar de las Calmas
                    </Link>
                  </td>
                  <td>La Restinga (El Hierro)</td>
                  <td><s>60 €</s></td>
                  <td><strong>45 €</strong> (ahorras 15 €)</td>
                </tr>
                <tr>
                  <td><span className="bf-discount-badge">−24 %</span></td>
                  <td>
                    <Link href="/actividades/curso-open-water-diver-padi-en-tarragona-3-dias-468" className="text-link">
                      Curso Open Water Diver PADI en Costa Daurada (3 días)
                    </Link>
                  </td>
                  <td>Salou (Tarragona)</td>
                  <td><s>520 €</s></td>
                  <td><strong>400 €</strong> (ahorras 120 €)</td>
                </tr>
                <tr>
                  <td><span className="bf-discount-badge">−23 %</span></td>
                  <td>
                    <Link href="/actividades/curso-padi-open-water-diver-gran-canaria-506" className="text-link">
                      Curso PADI Open Water Diver completo en Gran Canaria
                    </Link>
                  </td>
                  <td>Gran Canaria</td>
                  <td><s>350 €</s></td>
                  <td><strong>270 €</strong> (ahorras 80 €)</td>
                </tr>
                <tr>
                  <td><span className="bf-discount-badge">−20 %</span></td>
                  <td>
                    <Link href="/actividades/bautismo-buceo-cala-llobeta-calafat-61500" className="text-link">
                      Bautismo de buceo en Cala Llobeta (Calafat)
                    </Link>
                  </td>
                  <td>L’Ametlla de Mar</td>
                  <td><s>90 €</s></td>
                  <td><strong>72 €</strong> (ahorras 18 €)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>¿Qué es mejor regalar en Navidad o Reyes: un bautismo de buceo o el curso Open Water Diver?</h2>
          <p>
            El error más habitual al hacer un regalo grande es comprar directamente el curso completo a alguien que nunca se ha puesto un regulador en la boca. Mira la diferencia real de tiempo y compromiso antes de decidir (<Link href="/guias/bautismo-vs-curso-open-water" className="text-link">ver comparativa a fondo Bautismo vs Open Water</Link>):
          </p>

          <div className="vs-grid">
            <div className="vs-card">
              <span className="eyebrow">ACIERTAS EN EL 95 % DE LOS CASOS</span>
              <h3>Regalar un Bautismo de Buceo (1 mañana · desde 45 €)</h3>
              <p>
                Es la opción ideal si la persona tiene curiosidad por el mar pero nunca ha buceado con botella. Dura unas <strong>2,5 a 3 horas en total</strong> (charla breve + 35–45 minutos bajo el agua a un máximo de 6–12 metros junto a un instructor).
              </p>
              <ul>
                <li><strong>Cero deberes ni exámenes:</strong> solo tiene que llevar bañador y toalla; todo el equipo y el seguro van incluidos.</li>
                <li><strong>Perfecto para hacer en pareja:</strong> por menos de lo que cuesta medio curso, podéis vivir el bautismo los dos juntos y llevaros fotos o vídeo bajo el agua.</li>
              </ul>
            </div>

            <div className="vs-card">
              <span className="eyebrow">EL REGALO ESTRELLA SI YA LE ENCANTA EL MAR</span>
              <h3>Regalar el Curso Open Water (3–4 días · desde 270 € en oferta)</h3>
              <p>
                Elígele directamente el curso oficial (<Link href="/guias/padi-vs-ssi-diferencias" className="text-link">PADI o SSI</Link>) si ya ha hecho un bautismo antes, si practica snorkel/apnea o si lleva años diciendo que quiere sacarse el carnet para viajar.
              </p>
              <ul>
                <li><strong>Título internacional de por vida:</strong> le habilita para bucear hasta 18 metros en cualquier parte del mundo.</li>
                <li><strong>Puede estudiar la teoría desde casa en invierno:</strong> recibe su código digital de e-learning y hace las prácticas de mar cuando llegue el buen tiempo.</li>
              </ul>
            </div>
          </div>

          <h2>Cuánto cuesta regalar una experiencia de buceo en España (tabla de precios 2026)</h2>
          <p>
            Según los precios verificados en los más de 200 centros de nuestro directorio (incluyendo las promociones activas de noviembre y campaña de Navidad), esto es lo que cuesta cada modalidad:
          </p>

          <div style={{ overflowX: "auto", margin: "1.25rem 0 1.75rem" }}>
            <table>
              <thead>
                <tr>
                  <th>Experiencia para regalar</th>
                  <th>Para quién es</th>
                  <th>Rango habitual</th>
                  <th>En oferta Black Friday</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Bautismo de buceo individual (desde playa o cala)</strong></td>
                  <td>1 persona sin experiencia</td>
                  <td>60 € – 79 €</td>
                  <td><strong>Desde 45 € – 54 €</strong></td>
                </tr>
                <tr>
                  <td><strong>Bautismo de buceo desde barco o con fotos subacuáticas</strong></td>
                  <td>1 persona sin experiencia</td>
                  <td>75 € – 98 €</td>
                  <td><strong>Desde 65 € – 79 €</strong></td>
                </tr>
                <tr>
                  <td><strong>Pack Bautismo de buceo para 2 personas (en pareja)</strong></td>
                  <td>Parejas o amigos</td>
                  <td>120 € – 175 €</td>
                  <td><strong>Desde 90 € – 135 €</strong></td>
                </tr>
                <tr>
                  <td><strong>Curso Open Water Diver completo (certificación oficial)</strong></td>
                  <td>Sacarse el primer carnet</td>
                  <td>350 € – 460 €</td>
                  <td><strong>Desde 270 € – 345 €</strong></td>
                </tr>
                <tr>
                  <td><strong><Link href="/guias/curso-advanced-open-water-espana" className="text-link">Curso Advanced Open Water</Link> o bono de 2 inmersiones</strong></td>
                  <td>Para quien ya tiene carnet</td>
                  <td>75 € – 95 € / 310 € – 390 €</td>
                  <td><strong>Desde 65 € / 250 € – 300 €</strong></td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>¿Cómo funciona el bono regalo sin fecha si lo compras en Black Friday o Navidad para verano?</h2>
          <p>
            Más de la mitad de los regalos de buceo se compran entre noviembre y el 6 de enero para disfrutarlos meses después. El funcionamiento del bono sin fecha es muy sencillo y flexible:
          </p>
          <ol>
            <li>
              <strong>Compras al precio rebajado de hoy sin fijar día en el calendario:</strong> recibes por email un bono regalo en PDF listo para imprimir o enviar con tu dedicatoria personalizada (con amplia validez y 14 días naturales de devolución si no se ha usado).
            </li>
            <li>
              <strong>Reservar en su destino habitual de vacaciones de verano:</strong> si sabes que en Semana Santa o verano veranea en la <Link href="/buceo/costa-brava" className="text-link">Costa Brava (Tossa de Mar, L’Estartit)</Link>, <Link href="/buceo/alicante" className="text-link">Alicante (Jávea, Calpe, Tabarca)</Link>, <Link href="/buceo/cabo-de-palos" className="text-link">Cabo de Palos / La Manga</Link>, <Link href="/buceo/la-herradura" className="text-link">La Herradura</Link> o <Link href="/buceo/mallorca" className="text-link">Baleares</Link>, eliges una actividad de esa zona y la canjea en cuanto abra la temporada (<Link href="/guias/mejor-epoca-para-bucear-en-espana" className="text-link">consulta aquí el calendario de apertura y temperatura del agua</Link>).
            </li>
            <li>
              <strong>Empezar en invierno en piscina climatizada (<Link href="/buceo/madrid" className="text-link">Madrid</Link> o <Link href="/buceo/barcelona" className="text-link">Barcelona</Link>):</strong> en ciudades como Madrid puedes regalar el curso Scuba Diver u Open Water donde hacen la teoría y las sesiones en foso/piscina climatizada a 28 °C en invierno y solo bajan un fin de semana a la costa para las inmersiones de mar.
            </li>
            <li>
              <strong>Escapada de invierno a Canarias (agua a 21 °C en diciembre y enero):</strong> si quieres regalar un viaje sorpresa para bucear este mismo invierno, elige <Link href="/buceo/tenerife" className="text-link">Tenerife (Las Galletas / Los Abrigos)</Link>, <Link href="/buceo/lanzarote" className="text-link">Lanzarote (Playa Chica)</Link>, <Link href="/buceo/gran-canaria" className="text-link">Gran Canaria</Link> o <Link href="/buceo/el-hierro" className="text-link">El Hierro</Link>. *(Si organizas el viaje con vuelos, recuerda dejar 24 h sin bucear antes del avión de vuelta e incluir un seguro específico de viaje y submarinismo en <a href={IATI_AFFILIATE_URL} target="_blank" rel="sponsored noopener noreferrer" className="text-link">IATI Seguros con descuento directo aquí ↗</a>).*
            </li>
          </ol>

          <div className="editorial-tip">
            <p>
              📸 <strong>El detalle que marca la diferencia al entregar el regalo en Navidad o Reyes:</strong> cuando compares opciones en nuestro buscador, fíjate en si el bautismo indica <strong>«incluye fotos o vídeo subacuático»</strong> (como varias opciones de Tenerife, Radazul, Tossa de Mar o L’Ametlla de Mar). Llevarse el recuerdo en vídeo de la primera vez respirando bajo el agua hace el doble de ilusión.
            </p>
          </div>

          <h2>4 requisitos rápidos que debes comprobar antes de reservar el regalo</h2>
          <p>
            Antes de confirmar la actividad para otra persona, asegúrate de que cumple estos cuatro puntos básicos (tienes todos los detalles en nuestra guía de <Link href="/guias/requisitos-para-bucear-en-espana" className="text-link">requisitos para bucear en España</Link>):
          </p>
          <ul>
            <li>
              <strong>Edad mínima:</strong> en la mayoría de centros españoles los niños pueden hacer su primer bautismo a partir de los <strong>8 o 10 años</strong>.
            </li>
            <li>
              <strong>Salud general de oídos y pulmones:</strong> cualquier persona sana puede hacer un bautismo firmando una declaración responsable en el centro; solo debe evitar hacerlo un día que esté resfriada para poder <Link href="/guias/como-compensar-oidos-al-bucear" className="text-link">compensar bien los oídos al bajar</Link>.
            </li>
            <li>
              <strong>Gafas o lentillas:</strong> si tiene miopía o astigmatismo, no hay ningún impedimento (<Link href="/guias/bucear-con-gafas-o-lentillas" className="text-link">ver cómo bucear con lentillas o máscara graduada</Link>).
            </li>
            <li>
              <strong>Saber nadar de forma básica:</strong> para un bautismo no hace falta técnica deportiva, solo defenderse con soltura en el agua.
            </li>
          </ul>

          <h2>Preguntas frecuentes sobre ofertas Black Friday y regalos de buceo</h2>
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
                <span className="eyebrow">804 ACTIVIDADES CON REBAJA BLACK FRIDAY Y BONO REGALO</span>
                <h2>Elige el destino y aprovecha los precios de campaña</h2>
                <p>
                  Filtra por bautismos o cursos Open Water en la provincia que prefieras y reserva con precio rebajado o en formato bono sin fecha para Navidad y Reyes.
                </p>
              </div>
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                <Link className="button button-primary" href="/actividades/#type=Bautismo">
                  Ver bautismos en oferta →
                </Link>
                <Link className="button button-ghost" href="/actividades/#type=Curso">
                  Ver cursos Open Water rebajados
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
