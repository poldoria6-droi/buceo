import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildArticleJsonLd } from "@/lib/seo";

export const metadata = {
  title: "Requisitos para Bucear en España: Edad, Seguro y Descanso antes de Volar",
  description:
    "Todo lo que debes tener en cuenta antes de una inmersión en España: edad mínima orientativa, cuestionario médico, seguro de buceo e intervalo antes de tomar un avión.",
  alternates: {
    canonical: "/guias/requisitos-para-bucear-en-espana",
  },
  openGraph: {
    title: "Requisitos para Bucear en España: Edad, Seguro y Vuelos | Buceo Atlas",
    description:
      "Requisitos legales y de seguridad para hacer un bautismo, curso o inmersión recreativa en España.",
    url: "/guias/requisitos-para-bucear-en-espana",
    type: "article",
  },
};

export default function DivingRequirementsSpainPage() {
  const articleJsonLd = buildArticleJsonLd({
    title: "Requisitos para Bucear en España: Edad, Seguro y Descanso antes de Volar",
    description:
      "Todo lo que debes tener en cuenta antes de una inmersión en España: edad mínima orientativa, cuestionario médico, seguro de buceo e intervalo antes de tomar un avión.",
    path: "/guias/requisitos-para-bucear-en-espana",
    datePublished: "2026-10-18",
    dateModified: "2026-10-18",
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
            { name: "Requisitos para bucear en España", path: "/guias/requisitos-para-bucear-en-espana" },
          ]}
        />
        <span className="eyebrow">SEGURIDAD Y NORMATIVA · ESPAÑA</span>
        <h1>Requisitos para bucear en España: edad, salud, seguro y vuelos</h1>
        <p className="lead">
          Antes de reservar un <Link href="/guias/bautismo-de-buceo-en-espana" className="text-link">bautismo de buceo</Link>, un curso Open Water o una salida para buceadores titulados en España, es importante conocer los requisitos de edad, aptitud médica, seguro obligatorio y planificación de vuelos.
        </p>

        <div className="guide-article">
          <h2>1. Edad mínima orientativa</h2>
          <p>
            En España, la edad mínima depende del tipo de actividad, de los estándares de la certificadora y de la normativa autonómica aplicable en cada comunidad:
          </p>
          <ul>
            <li>
              <strong>Bautismos e iniciación en aguas confinadas/someras:</strong> la mayoría de los centros admiten participantes a partir de los <strong>8 o 10 años</strong> (con límite de profundidad reducido), siempre con autorización firmada por madre, padre o tutor legal.
            </li>
            <li>
              <strong>Cursos Junior Open Water Diver:</strong> habitualmente disponibles entre los <strong>10 y los 14 años</strong>, con límites de profundidad máxima específicos (12 m para 10–11 años) y obligación de bucear acompañados por un profesional o adulto certificado.
            </li>
            <li>
              <strong>Open Water Diver estándar:</strong> a partir de los <strong>15 años</strong> (hasta 18 m).
            </li>
          </ul>
          <p>
            Revisa siempre la edad mínima indicada en la ficha de cada oferta en nuestro <Link href="/actividades" className="text-link">buscador de actividades</Link>, ya que algunos centros establecen sus propios límites operativos según las condiciones de su zona.
          </p>

          <h2>2. Declaración de salud y reconocimiento médico</h2>
          <p>
            El buceo autónomo implica respirar aire comprimido sometido a cambios de presión ambiental. En España, las normas de seguridad para el ejercicio de actividades subacuáticas (Real Decreto 550/2020) regulan la declaración responsable sobre el estado de salud y los supuestos en los que se requiere examen médico:
          </p>
          <ul>
            <li>Antes de cualquier bautismo o curso, rellenarás un <strong>cuestionario médico estandarizado</strong>.</li>
            <li>Si respondes «No» a todas las preguntas de historial clínico (problemas cardíacos, pulmonares, cirugías recientes, otitis o sinusitis activa, epilepsia, embarazo, etc.), normalmente basta con tu declaración firmada.</li>
            <li>Si marcas «Sí» en algún punto relevante o vas a realizar determinadas formaciones, deberás aportar un <strong>certificado médico de aptitud para el buceo</strong> firmado por un facultativo. Nunca bucees congestionado: si no puedes compensar los oídos con facilidad en superficie, aplaza la inmersión.</li>
          </ul>

          <h2>3. Seguro de accidentes y responsabilidad civil</h2>
          <p>
            Para bucear en España es <strong>obligatorio contar con un seguro en vigor</strong> que cubra asistencia sanitaria, cámara hiperbárica, rescate y responsabilidad civil:
          </p>
          <ul>
            <li><strong>En bautismos y cursos de iniciación:</strong> suele estar incluido en el precio de la actividad durante los días de formación (verifícalo en el apartado «Qué incluye» de cada oferta).</li>
            <li><strong>En salidas para buceadores titulados (Fun Dives):</strong> debes presentar tu seguro anual, mensual o diario antes de embarcar; si no dispones de uno, la propia <Link href="/centros" className="text-link">escuela de buceo</Link> puede tramitarte una póliza temporal en el acto por pocos euros.</li>
          </ul>

          <h2>4. Tiempo de espera antes de volar en avión o subir puertos de montaña</h2>
          <p>
            Si viajas a destinos insulares como <Link href="/buceo/baleares" className="text-link">Baleares</Link> o <Link href="/buceo/el-hierro" className="text-link">Canarias</Link> (o si después de bucear en Tenerife vas a subir en coche hacia el Teide), debes respetar un intervalo en superficie antes de exponerte a la menor presión atmosférica de una cabina de avión o de la alta montaña:
          </p>
          <ul>
            <li><strong>Tras una única inmersión sin descompresión (como un bautismo):</strong> las recomendaciones internacionales (DAN / UHMS) aconsejan un mínimo de <strong>12 horas</strong> de espera antes de volar, aunque muchas escuelas recomiendan dejar 18–24 horas por precaución.</li>
            <li><strong>Tras inmersiones sucesivas o varios días seguidos de buceo (como un curso Open Water):</strong> debes esperar un mínimo de <strong>18 a 24 horas</strong> antes de tomar el vuelo de regreso. Planifica siempre tu último día de viaje en tierra firme.</li>
          </ul>

          <div className="cta-section" style={{ paddingBottom: 0 }}>
            <div className="cta-panel">
              <div>
                <span className="eyebrow">PLANIFICA CON SEGURIDAD</span>
                <h2>Consulta los requisitos de cada experiencia en Atlas</h2>
                <p>
                  En cada actividad indicamos el nivel requerido, la edad mínima y las condiciones publicadas por el proveedor.
                </p>
              </div>
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                <Link className="button button-primary" href="/actividades">
                  Explorar actividades →
                </Link>
                <Link className="button button-ghost" href="/guias/bautismo-vs-curso-open-water">
                  Bautismo vs Open Water
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
