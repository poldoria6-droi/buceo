import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildArticleJsonLd } from "@/lib/seo";
import { IATI_AFFILIATE_URL } from "@/lib/affiliate";

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
            { name: "Requisitos para bucear en España", path: "/guias/requisitos-para-bucear-en-espana" },
          ]}
        />
        <span className="eyebrow">NORMATIVA Y SEGURIDAD PRÁCTICA</span>
        <h1>Requisitos para bucear en España: edad, seguro, salud y vuelos</h1>
        <p className="lead">
          No hace falta ser un atleta para disfrutar debajo del agua, pero el submarinismo tiene cuatro reglas básicas que cualquier centro de España te va a pedir cumplir antes de subir al barco. Te las explicamos de forma clara para que no te lleves sorpresas al llegar al puerto.
        </p>

        <div className="guide-article">
          <h2>¿A partir de qué edad pueden bucear los niños en España?</h2>
          <p>
            Depende tanto de las certificadoras internacionales como de la normativa de cada comunidad autónoma, pero la regla general que encontrarás en los centros españoles es muy clara:
          </p>
          <ul>
            <li>
              <strong>Desde los 8 o 10 años:</strong> ya pueden hacer su primer <Link href="/guias/bautismo-de-buceo-en-espana" className="text-link">bautismo de buceo</Link> en calas tranquilas o piscinas a muy poca profundidad (máximo 5–6 metros para los más pequeños), siempre con autorización firmada por padre, madre o tutor.
            </li>
            <li>
              <strong>De 10 a 14 años (Junior Open Water):</strong> pueden sacarse el curso oficial con el mismo temario que un adulto, pero con la profundidad máxima limitada (12 metros hasta los 11 años) y acompañados de un adulto titulado o un profesional.
            </li>
            <li>
              <strong>Desde los 15 años:</strong> obtienen directamente el carnet <strong>Open Water Diver</strong> estándar hasta 18 metros.
            </li>
          </ul>
          <p>
            Si viajas en familia, mira siempre la ficha de la actividad en nuestro <Link href="/actividades" className="text-link">buscador de experiencias</Link>, donde indicamos la edad mínima exacta que pide cada escuela.
          </p>

          <h2>El cuestionario médico: ¿hace falta ir al médico antes?</h2>
          <p>
            Desde que entró en vigor la normativa actual de seguridad subacuática en España (Real Decreto 550/2020), ya no es obligatorio que todo el mundo lleve un reconocimiento médico en papel para hacer un bautismo o un curso recreativo si está sano:
          </p>
          <ul>
            <li>
              Al llegar al centro rellenarás una <strong>declaración responsable de salud</strong> de una página con preguntas sencillas (si tienes asma, problemas cardíacos o de oído, operaciones recientes, diabetes, etc.).
            </li>
            <li>
              Si contestas <strong>«No» a todas las casillas</strong>, basta con tu firma y puedes ir directo al agua.
            </li>
            <li>
              Si marcas <strong>«Sí» en alguna pregunta</strong>, por tu propia seguridad necesitarás llevar un certificado médico que confirme que eres «apto para el buceo autónomo».
            </li>
          </ul>

          <div className="editorial-tip">
            <p>
              🤧 <strong>La regla de oro del resfriado:</strong> nunca bajes a bucear si ese día tienes un trancazo fuerte o congestión nasal, ni tomes descongestionantes justo antes de tirarte al agua (si se les pasa el efecto mientras estás a 12 metros, el aire tendrá problemas para salir al subir). Si tus oídos no compensan bien en tierra, cambia la fecha con el centro.
            </p>
          </div>

          <h2>El seguro de buceo obligatorio: cuándo te lo incluye el centro y cuándo no</h2>
          <p>
            En España es obligatorio por ley entrar al agua con un seguro que cubra rescate y cámara hiperbárica. Cómo se gestiona cambia según lo que vayas a hacer:
          </p>
          <ul>
            <li>
              <strong>Si vas a hacer un bautismo o el curso Open Water:</strong> despreocúpate, porque el seguro de buceo durante la actividad <strong>viene incluido en el precio</strong> del centro.
            </li>
            <li>
              <strong>Si ya tienes título y haces una salida suelta en tu costa:</strong> tienes que presentar tu seguro en recepción junto a tu carnet. Si no tienes póliza anual, el mismo <Link href="/centros" className="text-link">centro de buceo</Link> te saca en dos minutos un seguro para ese día (unos 6–8 €) o para todo el año (~40 €).
            </li>
            <li>
              <strong>Si viajas en avión a bucear (Canarias, Baleares o el extranjero):</strong> cuando facturas maleta con tu equipo (regulador, ordenador, traje) o reservas un viaje de varios días, suele compensar mucho más un seguro de viaje que cubra a la vez vuelos, pérdida o rotura de equipaje deportivo y buceo recreativo, como{" "}
              <a
                href={IATI_AFFILIATE_URL}
                target="_blank"
                rel="sponsored noopener noreferrer"
                className="text-link"
              >
                IATI Escapadas o IATI Mochilero (con un 5 % de descuento desde nuestro enlace ↗)
              </a>
              .
            </li>
          </ul>

          <h2>Cuánto hay que esperar antes de coger un avión (o subir un puerto de montaña)</h2>
          <p>
            Mientras buceas, tu cuerpo absorbe una pequeña cantidad de nitrógeno que vas eliminando tranquilamente al respirar fuera del agua. Si subes a un avión pocas horas después de salir del mar (o si buceas en el sur de <Link href="/buceo/tenerife" className="text-link">Tenerife</Link> y esa misma tarde subes en coche al Teide a más de 2.000 metros), la bajada de presión atmosférica hace que ese nitrógeno forme microburbujas antes de tiempo.
          </p>
          <ul>
            <li>
              <strong>Después de un bautismo o una única inmersión sencilla:</strong> espera un mínimo de <strong>12 a 18 horas</strong> antes de volar.
            </li>
            <li>
              <strong>Después de varios días buceando o de un curso Open Water:</strong> deja siempre <strong>24 horas libres</strong> entre tu última inmersión y el despegue del avión. Aprovecha tu último día en <Link href="/buceo/lanzarote" className="text-link">Lanzarote</Link>, <Link href="/buceo/el-hierro" className="text-link">El Hierro</Link> o <Link href="/buceo/menorca" className="text-link">Menorca</Link> para hacer turismo en tierra mientras tu equipo se seca al sol.
            </li>
          </ul>

          <div className="cta-section" style={{ paddingBottom: 0 }}>
            <div className="cta-panel">
              <div>
                <span className="eyebrow">TODO LISTO PARA EL AGUA</span>
                <h2>Consulta actividades y requisitos por destino</h2>
                <p>
                  En cada ficha verás el nivel necesario, la edad mínima y qué incluye exactamente cada centro.
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
