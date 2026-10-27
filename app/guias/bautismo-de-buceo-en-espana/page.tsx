import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildArticleJsonLd } from "@/lib/seo";

export const metadata = {
  title: "Bautismo de Buceo en España: Qué Esperar, Requisitos y Reserva",
  description:
    "Guía paso a paso para tu primer bautismo de buceo en España: en qué consiste la experiencia, qué incluye el precio y qué comparar antes de elegir centro.",
  alternates: {
    canonical: "/guias/bautismo-de-buceo-en-espana",
  },
  openGraph: {
    title: "Bautismo de Buceo en España: Guía Práctica | Buceo Atlas",
    description:
      "Aprende en qué consiste un bautismo de buceo, cuánto dura, qué incluye y cómo elegir escuela en España.",
    url: "/guias/bautismo-de-buceo-en-espana",
    type: "article",
  },
};

export default function BaptismGuidePage() {
  const articleJsonLd = buildArticleJsonLd({
    title: "Bautismo de Buceo en España: Qué Esperar, Requisitos y Reserva",
    description:
      "Guía paso a paso para tu primer bautismo de buceo en España: en qué consiste la experiencia, qué incluye el precio y qué comparar antes de elegir centro.",
    path: "/guias/bautismo-de-buceo-en-espana",
    datePublished: "2026-10-04",
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
            { name: "Bautismo de buceo en España", path: "/guias/bautismo-de-buceo-en-espana" },
          ]}
        />
        <span className="eyebrow">TU PRIMERA VEZ BAJO EL AGUA</span>
        <h1>Bautismo de buceo en España: cómo es paso a paso y qué incluye</h1>
        <p className="lead">
          Si nunca te has puesto una botella a la espalda, es normal tener un punto de respeto antes de reservar. Te contamos qué pasa desde que entras por la puerta del centro hasta que sales del agua comentando los primeros pulpos y bancos de sargos que acabas de ver.
        </p>

        <div className="guide-article">
          <h2>Paso a paso: ¿qué vas a hacer durante esas 2 o 3 horas?</h2>
          <p>
            Un bautismo de buceo (en algunas escuelas lo verás anunciado con su nombre en inglés, <em>Discover Scuba Diving</em> o <em>Try Scuba</em>) está pensado para personas que empiezan de cero. No hay exámenes ni prisas; la mañana se reparte así:
          </p>
          <ul>
            <li>
              <strong>1. Llegada al centro y charla en seco (20 min):</strong> mientras te prueban el traje de neopreno y los escarpines, tu instructor te explica con calma las tres cosas que de verdad necesitas saber: cómo respirar despacio por la boca a través del regulador, cómo comunicarte con señas sencillas («todo bien», «subir», «bajar») y cómo destaponar los oídos al bajar cada metro.
            </li>
            <li>
              <strong>2. Primeras respiraciones donde haces pie (10 min):</strong> antes de bajar a ningún sitio, metes la cara en el agua en la orilla o agarrado al cabo del barco y respiras un par de minutos hasta que tu cuerpo se acostumbra a la sensación y ves que entra todo el aire que quieras.
            </li>
            <li>
              <strong>3. El paseo submarino (30 a 45 min):</strong> cuando le haces el gesto de «OK» al instructor, empezáis a descender muy despacio entre los 5 y los 10 metros. Tú no tienes que preocuparte de tocar botones: el instructor regula el aire de tu chaleco para que flotes sin esfuerzo mientras recorréis las rocas viendo estrellas de mar, castañuelas, sargos o algún <Link href="/fauna/pulpo-comun" className="text-link">pulpo</Link> curioso.
            </li>
          </ul>

          <div className="editorial-tip">
            <p>
              👂 <strong>El único consejo técnico que necesitas recordar:</strong> al bajar bajo el agua sentirás en los oídos la misma presión que cuando aterriza un avión. No esperes a que moleste: cada metro que bajes, pínzate la nariz por fuera de la goma de la máscara y sopla suavemente con la boca cerrada. En cuanto notes ese pequeño «clic», puedes seguir bajando tan tranquilo.
            </p>
          </div>

          <h2>¿Playa o barco? Qué te conviene más para estrenarte</h2>
          <p>
            Al mirar ofertas en nuestro <Link href="/guias/cuanto-cuesta-un-bautismo-de-buceo" className="text-link">comparador de precios de bautismos</Link> verás que hay centros que salen caminando desde una cala y otros que salen en lancha:
          </p>
          <ul>
            <li>
              <strong>Si te da un poco de impresión al principio:</strong> elige un bautismo <strong>desde playa o cala</strong> (como la Mar Menuda en <Link href="/buceo/tossa-de-mar" className="text-link">Tossa de Mar</Link>, <Link href="/buceo/la-herradura" className="text-link">La Herradura</Link> o Playa Chica en <Link href="/buceo/lanzarote" className="text-link">Lanzarote</Link>). Empezar donde haces pie y bajar caminando por una pendiente suave da muchísima tranquilidad.
            </li>
            <li>
              <strong>Si te manejas bien haciendo snorkel en el mar:</strong> un bautismo <strong>desde barco</strong> te lleva en 10 minutos a calas vírgenes o reservas marinas con aguas más limpias y más cantidad de peces, además del paseo en lancha por la costa.
            </li>
          </ul>

          <h2>3 costas españolas fantásticas para tu primer bautismo</h2>
          <div className="guide-grid">
            <article className="guide-card">
              <span className="eyebrow">CATALUÑA</span>
              <h3>Calas de la Costa Brava</h3>
              <p>Fondos de roca granítica llenos de vida a pocos metros de la arena en Tossa de Mar, L&apos;Estartit, Lloret o Palamós.</p>
              <Link href="/actividades/#type=Bautismo&region=Catalu%C3%B1a" className="text-link">
                Ver bautismos en Cataluña →
              </Link>
            </article>
            <article className="guide-card">
              <span className="eyebrow">ISLAS BALEARES</span>
              <h3>Mallorca, Menorca e Ibiza</h3>
              <p>El agua más transparente del verano gracias a las praderas de posidonia y calas que parecen piscinas naturales.</p>
              <Link href="/actividades/#type=Bautismo&region=Baleares" className="text-link">
                Ver bautismos en Baleares →
              </Link>
            </article>
            <article className="guide-card">
              <span className="eyebrow">ISLAS CANARIAS</span>
              <h3>Tenerife, Lanzarote y Gran Canaria</h3>
              <p>Agua entre 19 y 24 °C incluso en pleno invierno, paisajes volcánicos y muchísima vida subtropical.</p>
              <Link href="/actividades/#type=Bautismo&region=Canarias" className="text-link">
                Ver bautismos en Canarias →
              </Link>
            </article>
          </div>

          <h2>Qué revisar el día antes de ir</h2>
          <p>
            No vayas resfriado ni con la nariz tapada (si estás congestionado te costará compensar los oídos), descansa bien la noche anterior y recuerda que tras hacer un bautismo debes dejar pasar al menos <strong>12 a 18 horas antes de coger un avión</strong>. Si quieres ver todos los detalles legales y de edad mínima para niños, los tienes explicados en nuestra guía de <Link href="/guias/requisitos-para-bucear-en-espana" className="text-link">requisitos para bucear en España</Link>.
          </p>

          <div className="cta-section" style={{ paddingBottom: 0 }}>
            <div className="cta-panel">
              <div>
                <span className="eyebrow">RESERVA ONLINE</span>
                <h2>Encuentra tu bautismo de buceo en España</h2>
                <p>Filtra por tu zona de costa, revisa qué incluye cada escuela y reserva fecha.</p>
              </div>
              <Link href="/actividades/#type=Bautismo" className="button button-primary">
                Ver bautismos disponibles →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
