import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildArticleJsonLd } from "@/lib/seo";
import { IATI_AFFILIATE_URL } from "@/lib/affiliate";

export const metadata = {
  title: "Viaje de Buceo a El Hierro (La Restinga): Cómo Ir, Inmersiones y Presupuesto",
  description:
    "Guía práctica para organizar tu viaje de buceo a El Hierro: vuelos y ferry hasta La Restinga, mejores inmersiones en el Mar de las Calmas, presupuesto real y ruta sin nitrógeno.",
  alternates: {
    canonical: "/guias/viaje-de-buceo-a-el-hierro",
  },
  openGraph: {
    title: "Viaje de Buceo a El Hierro (La Restinga): Guía Completa | Buceo Atlas",
    description:
      "Cómo llegar a La Restinga, qué puntos del Mar de las Calmas no perderte, cuánto cuesta un viaje de buceo a El Hierro y cómo volver sin problemas de descompresión.",
    url: "/guias/viaje-de-buceo-a-el-hierro",
    type: "article",
  },
};

export default function DivingTripElHierroPage() {
  const articleJsonLd = buildArticleJsonLd({
    title: "Viaje de Buceo a El Hierro (La Restinga): Cómo Ir, Inmersiones y Presupuesto",
    description:
      "Guía práctica para organizar tu viaje de buceo a El Hierro: vuelos y ferry hasta La Restinga, mejores inmersiones en el Mar de las Calmas, presupuesto real y ruta sin nitrógeno.",
    path: "/guias/viaje-de-buceo-a-el-hierro",
    datePublished: "2026-10-27",
    dateModified: "2026-10-27",
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
            { name: "Viaje de buceo a El Hierro", path: "/guias/viaje-de-buceo-a-el-hierro" },
          ]}
        />
        <span className="eyebrow">PLANIFICACIÓN DE VIAJE · CANARIAS</span>
        <h1>Viaje de buceo a El Hierro: cómo organizar tu escapada a La Restinga paso a paso</h1>
        <p className="lead">
          La Restinga es un pueblo pesquero en el extremo sur de <Link href="/buceo/el-hierro" className="text-link">El Hierro</Link> donde prácticamente todo el mundo camina en chanclas con el neopreno colgado al hombro. No hay grandes hoteles ni vuelos directos desde la Península, y precisamente por eso el Mar de las Calmas conserva una visibilidad de 30 metros y una vida submarina que parece de otro planeta. Te contamos cómo cuadrar la logística, qué inmersiones pedir y cuánto cuesta el viaje.
        </p>

        <div className="guide-article">
          <h2>1. Cómo llegar a El Hierro con equipo de buceo (avión vs ferry)</h2>
          <p>
            Como El Hierro no tiene conexiones directas con la Península, siempre tendrás que hacer escala en <Link href="/buceo/tenerife" className="text-link">Tenerife</Link> o en <Link href="/buceo/gran-canaria" className="text-link">Gran Canaria</Link>. Tienes dos formas de cruzar:
          </p>
          <ul>
            <li>
              <strong>En avión interinsular (Binter o Canaryfly):</strong> vuelas desde Tenerife Norte (TFN) o Gran Canaria (LPA) al aeropuerto de Valverde (VDE) en unos 40 minutos. Ojo con el equipaje: son aviones turbohélice ATR con franquicia de peso ajustada, así que si llevas tu propio jacket, regulador y plomos (los plomos nunca los lleves, te los da siempre el centro), revisa el límite de kilos antes de facturar.
            </li>
            <li>
              <strong>En ferry desde Tenerife Sur (Los Cristianos):</strong> el catamarán rápido de Naviera Armas tarda unas 2 horas y media hasta el Puerto de La Estaca. Es la opción favorita si vuelas a Tenerife Sur (TFS), si alquilas coche desde allí o si quieres llevar tu maleta de buceo sin mirar la báscula.
            </li>
          </ul>
          <p>
            Una vez en El Hierro, <strong>alquilar un coche es casi imprescindible</strong>. Desde el aeropuerto o el puerto de Valverde hasta La Restinga hay unos 45 minutos de carretera espectacular atravesando el pinar de la isla.
          </p>

          <div className="editorial-tip">
            <p>
              🏔️ <strong>¡Cuidado con la cumbre al salir del agua!</strong> Para ir de La Restinga al norte de la isla o al aeropuerto de Valverde la carretera sube por la cumbre (cerca del Pico de Malpaso, a más de 1.300 metros de altitud). Subir ese puerto en coche recién salido de bucear equivale a presurizar menos que en una cabina de avión y puede provocar enfermedad descompresiva. Quédate a dormir siempre en La Restinga y no subas a la cumbre hasta pasadas al menos 12–24 horas de tu última inmersión.
            </p>
          </div>

          <h2>2. Las inmersiones imprescindibles en el Mar de las Calmas</h2>
          <p>
            Lo mejor de La Restinga es la comodidad: los <Link href="/centros" className="text-link">centros de buceo</Link> están a dos minutos a pie del muelle y las zodiacs tardan entre 5 y 12 minutos en llegar a las boyas de la Reserva Marina. Estas son las cuatro paradas que no pueden faltar en tu libreta:
          </p>
          <ul>
            <li>
              <strong>El Bajón:</strong> el icono de El Hierro. Es un volcán submarino cuyas dos cimas gemelas suben desde más de 100 metros hasta quedarse a solo 6 y 9 metros de la superficie. Aquí vivió el famoso mero Pancho y hoy sigue rodeado de grandes meros, bancos compactos de chopones, jureles y medregales en el azul. Requiere buen control de flotabilidad y suele pedirse nivel <Link href="/guias/curso-advanced-open-water-espana" className="text-link">Advanced Open Water</Link> cuando corre corriente.
            </li>
            <li>
              <strong>El Desierto:</strong> una pared volcánica que cae sobre un gran arenal blanco donde es muy habitual cruzarse con chuchos, ratones de mar (águilas marinas), jardines de anguilas jardineras y, en temporada, mantas diablo (mobulas).
            </li>
            <li>
              <strong>La Herradura y El Rincón:</strong> dos inmersiones comodísimas y protegidas del viento alisio, llenas de arcos basálticos, esponjas amarillas, trompetas, viejas de colores y morenas pico de pato. Perfectas para el primer día o para buceadores Open Water.
            </li>
            <li>
              <strong>Punta Restinga o El Puerto (nocturna):</strong> al caer el sol el mismo espigón y su caída exterior cobran vida con langostas canarias, cangrejos araña, pulpos cazando y camarones narval.
            </li>
          </ul>

          <h2>3. Presupuesto orientativo para 5 o 7 días en La Restinga</h2>
          <p>
            Aunque llegar lleva una escala, una vez en el pueblo la vida en La Restinga es muy asequible: apartamentos sencillos frente al puerto, pescado fresco a la plancha en las terrazas y bonos de inmersión que bajan bastante de precio cuantas más salidas haces.
          </p>
          <div style={{ overflowX: "auto", margin: "1.25rem 0 1.75rem" }}>
            <table>
              <thead>
                <tr>
                  <th>Concepto del viaje</th>
                  <th>Coste orientativo por persona</th>
                  <th>Consejo para ahorrar</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Bono de 6 a 10 inmersiones</strong></td>
                  <td>210 € – 340 € (con botella y plomos)</td>
                  <td>Si llevas tu propio equipo ahorras unos 10–15 € por inmersión</td>
                </tr>
                <tr>
                  <td><strong>Bautismo o curso Open Water</strong></td>
                  <td>Desde 75 € (bautismo) / 380 € (curso)</td>
                  <td>Ideal para acompañantes que aún no tienen título</td>
                </tr>
                <tr>
                  <td><strong>Apartamento en La Restinga (6 noches)</strong></td>
                  <td>180 € – 290 € (compartiendo entre 2)</td>
                  <td>Reserva en el mismo pueblo para ir andando al centro</td>
                </tr>
                <tr>
                  <td><strong>Coche de alquiler en la isla (semana)</strong></td>
                  <td>130 € – 190 €</td>
                  <td>Recógelo en el puerto de La Estaca o en el aeropuerto VDE</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>4. Mejor época del año y seguro para viajar con equipo</h2>
          <p>
            El Mar de las Calmas hace honor a su nombre porque la cordillera de la isla frena los vientos alisios del noreste, dejando el mar como un plato casi todo el año. Aun así, <strong>de septiembre a noviembre</strong> es la época estrella (coincidiendo con la época del legendario Open Fotosub): el agua alcanza los 23–25 °C, el viento cae al mínimo y las aguas son más claras que nunca. En invierno el agua no baja de 19 °C, por lo que basta un buen húmedo de 7 mm o un semiseco.
          </p>
          <p>
            Como vas a enlazar vuelos o ferry con conexiones ajustadas y probablemente factures una maleta con regulador, máscara, aletas y ordenador, te recomendamos viajar con una póliza que cubra tanto incidencias de vuelo y pérdida de equipaje deportivo como asistencia en buceo recreativo. Puedes contratar tu seguro en{" "}
            <a
              href={IATI_AFFILIATE_URL}
              target="_blank"
              rel="sponsored noopener noreferrer"
              className="text-link"
            >
              IATI Seguros con un 5 % de descuento directo desde aquí ↗
            </a>
            , o repasar todos los detalles sobre tiempos de espera antes de volar en nuestra guía de{" "}
            <Link href="/guias/requisitos-para-bucear-en-espana" className="text-link">
              requisitos y seguridad para bucear en España
            </Link>
            .
          </p>

          <div className="cta-section" style={{ paddingBottom: 0 }}>
            <div className="cta-panel">
              <div>
                <span className="eyebrow">RESERVA MARINA DEL MAR DE LAS CALMAS</span>
                <h2>Explora centros y salidas en El Hierro</h2>
                <p>
                  Consulta los puntos de inmersión de La Restinga, precios actualizados y experiencias disponibles en las islas Canarias.
                </p>
              </div>
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                <Link className="button button-primary" href="/buceo/el-hierro">
                  Ver guía de El Hierro →
                </Link>
                <Link className="button button-ghost" href="/actividades/#region=Canarias">
                  Actividades en Canarias
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
