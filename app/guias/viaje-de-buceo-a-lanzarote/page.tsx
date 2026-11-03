import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildArticleJsonLd } from "@/lib/seo";
import { IATI_AFFILIATE_URL } from "@/lib/affiliate";

const faqs = [
  {
    question: "¿En qué zona de Lanzarote es mejor alojarse para un viaje de buceo?",
    answer:
      "Puerto del Carmen (especialmente el entorno de Playa Chica / El Fariones) es la base más práctica porque concentra la mayoría de escuelas de la isla y permite hacer hasta ocho inmersiones distintas entrando directamente desde la arena, además de tener el muelle al lado para salir en barco a los pecios de El Quiquere. Si tu objetivo principal es el Museo Atlántico, Playa Blanca (en el sur) es la segunda gran base.",
  },
  {
    question: "¿Qué temperatura tiene el agua en Lanzarote en noviembre, diciembre, enero y febrero?",
    answer:
      "En otoño (octubre y noviembre) el mar en Lanzarote aún conserva entre 21 °C y 23 °C con calmas espectaculares. Entre enero y marzo baja a su mínimo anual (18 °C – 19 °C), por lo que en invierno se bucea muy cómodo con un traje húmedo de 7 mm (o un 5 mm con chaleco de calor) y capucha.",
  },
  {
    question: "¿Cuándo es la época de los angelotes (tiburón ángel) en Lanzarote?",
    answer:
      "Aunque se pueden ver todo el año sobre los arenales de Playa Chica, Playa Flamingo y Mala, la mayor concentración de angelotes (Squatina squatina) en Lanzarote se produce durante los meses de invierno y primavera (de noviembre a mayo), cuando se acercan a aguas someras para reproducirse.",
  },
  {
    question: "¿Se puede visitar el Museo Atlántico de Lanzarote sin tener carnet de buceo?",
    answer:
      "Sí. Aunque las esculturas descansan entre los 12 y los 14 metros de profundidad, los centros acreditados de Playa Blanca ofrecen un programa oficial para principiantes que incluye una primera inmersión de adaptación en aguas confinadas/playa por la mañana y la bajada en barco al Museo Atlántico junto a un instructor en proporción 2:1 o 1:1.",
  },
];

export const metadata = {
  title: "Viaje de Buceo a Lanzarote: Precios, Playa Chica y Museo Atlántico",
  description:
    "Guía práctica para organizar un viaje de buceo a Lanzarote por libre: mejores zonas donde alojarse (Playa Chica, Playa Blanca, Mala), precios de bonos y bautismos, Museo Atlántico y consejos.",
  alternates: {
    canonical: "/guias/viaje-de-buceo-a-lanzarote",
  },
  openGraph: {
    title: "Viaje de Buceo a Lanzarote: Precios, Playa Chica y Museo Atlántico | Buceo Atlas",
    description:
      "Dónde bucear en Lanzarote todo el año, cuánto cuestan las inmersiones y el Museo Atlántico, qué traje llevar en invierno y cómo organizar la escapada.",
    url: "/guias/viaje-de-buceo-a-lanzarote",
    type: "article",
  },
};

export default function DivingTripLanzarotePage() {
  const articleJsonLd = buildArticleJsonLd({
    title: "Viaje de Buceo a Lanzarote: Precios, Playa Chica y Museo Atlántico",
    description:
      "Guía práctica para organizar un viaje de buceo a Lanzarote por libre: mejores zonas donde alojarse (Playa Chica, Playa Blanca, Mala), precios de bonos y bautismos, Museo Atlántico y consejos.",
    path: "/guias/viaje-de-buceo-a-lanzarote",
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
            { name: "Viaje de buceo a Lanzarote", path: "/guias/viaje-de-buceo-a-lanzarote" },
          ]}
        />
        <span className="eyebrow">ESCAPADAS DE BUCEO TODO EL AÑO · CANARIAS</span>
        <h1>Viaje de buceo a Lanzarote por libre: mejores zonas, precios y cómo organizarlo</h1>
        <p className="lead">
          Cuando en el Mediterráneo el agua baja de los 16 °C y la mayoría de centros echan el cierre hasta primavera, en <Link href="/buceo/lanzarote" className="text-link">Lanzarote</Link> estás a dos horas y media de avión de meterte al mar en manga corta al salir del barco. Es la isla de Europa donde más fácil resulta combinar buceo de pared volcánica, pecios, tiburones ángel en la arena y el único museo escultórico submarino del continente sin perder horas en desplazamientos.
        </p>

        <div className="guide-article">
          <h2>¿Por qué Lanzarote es el mejor destino de Europa para bucear en otoño e invierno?</h2>
          <p>
            A diferencia de un viaje al Mar Rojo o al sudeste asiático, volar a Lanzarote desde Madrid, Barcelona, Valencia, Bilbao o Sevilla cuesta una fracción del presupuesto y te permite hacer una escapada de 4 o 5 días sin escalas eternas. Pero lo que de verdad engancha a los buceadores que repiten cada año es su geología:
          </p>
          <ul>
            <li>
              <strong>Profundidad a dos aletazos de la orilla:</strong> al ser una isla volcánica sin plataforma continental en su cara suroriental, entras caminando por una cala de arena rubia sin olas y en menos de tres minutos de aleteo el fondo se desploma en paredes de basalto de 15 a 40 metros.
            </li>
            <li>
              <strong>Temporada de angelotes de noviembre a mayo:</strong> mientras en la Península el invierno es temporada baja, en Lanzarote es justo el momento en que el <Link href="/fauna/angelote" className="text-link">angelote (tiburón ángel)</Link>, los chuchos negros y las mantas raya se acercan a los arenales someros.
            </li>
            <li>
              <strong>Visibilidad de 20 a 30 metros todo el año:</strong> al no haber ríos ni escorrentías de barro, el agua mantiene una limpieza constante incluso después de días de viento.
            </li>
          </ul>

          <h2>Las 4 zonas de buceo de Lanzarote (y dónde alojarse según tu nivel)</h2>
          <p>
            Lanzarote se recorre de punta a punta en 45 minutos de coche, pero elegir bien tu campo base te ahorrará cargar cajas de equipo cada mañana:
          </p>

          <div className="vs-grid">
            <div className="vs-card">
              <span className="eyebrow">1. LA BASE PRINCIPAL (CENTRO-SUR)</span>
              <h3>Puerto del Carmen (Playa Chica)</h3>
              <p>
                Es el corazón del buceo en Lanzarote. En una cala de apenas 80 metros protegida por dos espigones de lava nacen más de <strong>8 rutas submarinas distintas</strong> para todos los niveles:
              </p>
              <ul>
                <li><strong>Para bautismos y Open Water:</strong> el veril superior (6–18 m), los bancos de roncadores y el encuentro con meros gigantes.</li>
                <li><strong>Para Advanced y profundos:</strong> <em>La Catedral</em> (una bóveda volcánica a 30 m donde solía descansar el mítico mero Félix), la <em>Cueva de las Gambas</em> (38 m), el <em>Agujero Azul</em> y los tres barcos hundidos del <strong>Quíquere</strong> a cinco minutos en zodiac.</li>
              </ul>
            </div>

            <div className="vs-card">
              <span className="eyebrow">2. EL SUR TRANQUILO</span>
              <h3>Playa Blanca y Museo Atlántico</h3>
              <p>
                Mirando hacia Fuerteventura por el estrecho de La Bocaina, <Link href="/buceo/playa-blanca" className="text-link">Playa Blanca</Link> ofrece fondos más planos y luminosos, ideales para buceo relajado y fotografía:
              </p>
              <ul>
                <li><strong>Museo Atlántico:</strong> más de 300 esculturas a tamaño real entre los 12 y los 14 metros rodeadas de bancos de sardinas, barracudas y angelotes.</li>
                <li><strong>Playa Flamingo y Punta Berrugo:</strong> diques volcánicos llenos de vida donde los bautismos de buceo y las salidas Open Water disfrutan de aguas muy mansas.</li>
              </ul>
            </div>
          </div>

          <ul>
            <li>
              <strong>3. El Noreste volcánico (Mala / Charco del Palo y <Link href="/buceo/costa-teguise" className="text-link">Costa Teguise</Link>):</strong> cuando no entra mar de fondo del norte, las escaleras naturales excavadas en la roca negra de <strong>Mala</strong> ofrecen un paisaje lunar de túneles de lava, arcos basálticos y anfiteatros de arena blanquísima a entre 10 y 26 metros.
            </li>
            <li>
              <strong>4. El Norte salvaje (Reserva Marina de La Graciosa y Archipiélago Chinijo):</strong> la mayor reserva marina de Europa. Se sale en barco desde Órzola o Caleta de Sebo hacia paredes tapizadas de gorgonias, grandes meros, abades y bancos de medregales.
            </li>
          </ul>

          <h2>Cómo bucear en el Museo Atlántico de Lanzarote: nivel, profundidad y precio</h2>
          <p>
            El <strong>Museo Atlántico</strong> (creado por el escultor Jason deCaires Taylor en la bahía de Las Coloradas, Playa Blanca) no es un simple reclamo turístico: al estar construido con hormigón de pH neutro sobre un arenal que antes estaba vacío, hoy funciona como un arrecife artificial donde cazan bicudas, jureles, chuchos y tiburones ángel.
          </p>
          <ul>
            <li>
              <strong>Profundidad real:</strong> entre <strong>12 y 14 metros</strong> sobre fondo plano de arena limpia (por lo que entra dentro del límite de cualquier buceador <Link href="/guias/bautismo-vs-curso-open-water" className="text-link">Open Water Diver</Link> sin necesidad de ser Advanced).
            </li>
            <li>
              <strong>¿Por qué es más caro que una inmersión normal?</strong> Porque todas las visitas entran en barco oficial desde el puerto deportivo Marina Rubicón acompañadas de un guía acreditado (Eco-Guía) y el precio incluye la <strong>entrada oficial a los Centros de Arte, Cultura y Turismo del Cabildo de Lanzarote</strong>.
            </li>
          </ul>

          <h2>Cuánto cuesta bucear en Lanzarote: precios reales de bautismos, bonos y equipo</h2>
          <p>
            Los precios en Lanzarote son muy competitivos porque muchas salidas se hacen entrando desde Playa Chica o Mala sin coste de combustible de barco:
          </p>

          <div style={{ overflowX: "auto", margin: "1.25rem 0 1.75rem" }}>
            <table>
              <thead>
                <tr>
                  <th>Actividad en Lanzarote</th>
                  <th>Nivel requerido</th>
                  <th>Precio habitual</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Bautismo de buceo en Playa Chica / Playa Blanca</strong></td>
                  <td>Sin experiencia previa</td>
                  <td>65 € – 85 € (equipo completo y seguro incluidos)</td>
                </tr>
                <tr>
                  <td><strong>Inmersión guiada suelta (1 salida)</strong></td>
                  <td>Con carnet (Open Water o superior)</td>
                  <td>35 € – 45 € (más ~10 € si alquilas equipo completo)</td>
                </tr>
                <tr>
                  <td><strong>Bono de 6 a 10 inmersiones</strong></td>
                  <td>Con carnet (Open Water o superior)</td>
                  <td>195 € – 320 € (sale a unos 30–34 € por inmersión)</td>
                </tr>
                <tr>
                  <td><strong>Inmersión en el Museo Atlántico (con barco y entrada)</strong></td>
                  <td>Titulados / Bautismo doble especial</td>
                  <td>68 € – 85 € (titulados) / 135 € – 155 € (bautismo doble)</td>
                </tr>
                <tr>
                  <td><strong>Curso Open Water Diver o <Link href="/guias/curso-advanced-open-water-espana" className="text-link">Advanced</Link></strong></td>
                  <td>Iniciación o subida a 30 m</td>
                  <td>320 € – 420 € (Advanced desde 310 €)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Logística del viaje: coche de alquiler, vuelos y seguro para el equipo</h2>
          <p>
            Si viajas entre octubre y abril, ten en cuenta tres detalles prácticos que te ahorrarán dinero y contratiempos:
          </p>
          <ul>
            <li>
              <strong>No factures plomos y valora alquilar el equipo pesado allí:</strong> las aerolíneas low-cost cobran entre 40 € y 60 € por trayecto por maleta facturada. Si solo vas 4 días, a menudo sale más barato llevar en cabina tu máscara, tu ordenador y tu regulador, y alquilar chaleco y neopreno en el <Link href="/centros" className="text-link">centro de buceo</Link>.
            </li>
            <li>
              <strong>Respeta las 24 horas antes del vuelo de vuelta:</strong> Lanzarote no tiene cumbres de 2.000 metros como Tenerife o La Palma (el punto más alto, Peñas del Chache en Famara, ronda los 670 m), pero sí debes dejar siempre el último día libre de nitrógeno para visitar Timanfaya, los Jameos del Agua o La Geria mientras se seca el material.
            </li>
            <li>
              <strong>Seguro de viaje + buceo recreativo:</strong> si viajas en avión con tu equipo fotográfico o de buceo, en lugar de pagar el seguro diario suelto en taquilla suele compensar llevar una póliza de escapada que cubra a la vez cámara hiperbárica, asistencia médica y robo o demora de equipaje deportivo. Tienes un{" "}
              <a
                href={IATI_AFFILIATE_URL}
                target="_blank"
                rel="sponsored noopener noreferrer"
                className="text-link"
              >
                5 % de descuento directo en IATI Seguros desde nuestro enlace ↗
              </a>{" "}
              (y puedes consultar la normativa completa en nuestra guía de{" "}
              <Link href="/guias/requisitos-para-bucear-en-espana" className="text-link">
                requisitos para bucear en España
              </Link>
              ).
            </li>
          </ul>

          <h2>Preguntas frecuentes sobre organizar un viaje de buceo a Lanzarote</h2>
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
                <span className="eyebrow">PUERTO DEL CARMEN · PLAYA BLANCA · COSTA TEGUISE</span>
                <h2>Compara centros y salidas en Lanzarote</h2>
                <p>
                  Consulta todas las experiencias disponibles en la isla, desde bautismos en Playa Chica hasta inmersiones en el Museo Atlántico.
                </p>
              </div>
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                <Link className="button button-primary" href="/buceo/lanzarote">
                  Ver guía y ofertas en Lanzarote →
                </Link>
                <Link className="button button-ghost" href="/guias/viaje-de-buceo-a-el-hierro">
                  Viaje a El Hierro
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
