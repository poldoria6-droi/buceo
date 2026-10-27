import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildArticleJsonLd } from "@/lib/seo";
import { activities } from "@/data/activities";
import { getBookingOffers, getLowestPricedOffer } from "@/lib/affiliate";

export const metadata = {
  title: "¿Cuánto Cuesta un Bautismo de Buceo en España? Precios y Qué Incluye",
  description:
    "Analizamos los precios de los bautismos de buceo en España según nuestro catálogo, qué factores influyen en el coste y cómo comparar ofertas antes de reservar.",
  alternates: {
    canonical: "/guias/cuanto-cuesta-un-bautismo-de-buceo",
  },
  openGraph: {
    title: "¿Cuánto Cuesta un Bautismo de Buceo en España? | Buceo Atlas",
    description:
      "Precios de bautismos de buceo en España y qué factores influyen en el coste.",
    url: "/guias/cuanto-cuesta-un-bautismo-de-buceo",
    type: "article",
  },
};

export default function BaptismPriceGuidePage() {
  const baptismPrices = activities
    .filter((a) => a.type === "Bautismo")
    .map((a) => getLowestPricedOffer(getBookingOffers(a))?.priceFrom)
    .filter((p): p is number => typeof p === "number" && p > 0)
    .sort((a, b) => a - b);

  const count = baptismPrices.length;
  const minPrice = count ? baptismPrices[0] : 50;
  const maxPrice = count ? baptismPrices[count - 1] : 150;
  const medianPrice = count ? baptismPrices[Math.floor(count / 2)] : 75;

  const articleJsonLd = buildArticleJsonLd({
    title: "¿Cuánto Cuesta un Bautismo de Buceo en España? Precios y Qué Incluye",
    description:
      "Analizamos los precios de los bautismos de buceo en España según nuestro catálogo, qué factores influyen en el coste y cómo comparar ofertas.",
    path: "/guias/cuanto-cuesta-un-bautismo-de-buceo",
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
            {
              name: "¿Cuánto cuesta un bautismo?",
              path: "/guias/cuanto-cuesta-un-bautismo-de-buceo",
            },
          ]}
        />
        <span className="eyebrow">TARIFAS REALES EN ESPAÑA</span>
        <h1>¿Cuánto cuesta un bautismo de buceo en España y por qué cambia tanto el precio?</h1>
        <p className="lead">
          Si miras bautismos de buceo en una misma zona de costa verás opciones desde <strong>{minPrice} €</strong> y otras que pasan de los <strong>110 €</strong>. Te explicamos qué cambia realmente entre unas y otras para que sepas qué estás pagando en cada caso.
        </p>

        <div className="guide-article">
          <div className="editorial-tip">
            <p>
              💶 <strong>El precio habitual hoy en España:</strong> la mayoría de los bautismos de una inmersión cuestan entre <strong>60 € y 95 € por persona</strong> (con una media en torno a los <strong>{medianPrice} €</strong>, equipo completo y seguro incluidos).
            </p>
          </div>

          <h2>¿Qué pagas con un bautismo de 60 € frente a uno de 95 € o 120 €?</h2>
          <p>
            Mover una embarcación, cargar botellas con aire filtrado, revisar reguladores y poner a un instructor pendiente de dos personas en el agua tiene un coste fijo muy claro. Cuando ves una diferencia de 30 o 40 euros entre dos centros de la misma zona, casi siempre se debe a uno de estos tres motivos:
          </p>

          <div className="guide-grid" style={{ margin: "1.5rem 0 2rem" }}>
            <article className="guide-card">
              <span className="eyebrow">PLAYA VS BARCO</span>
              <h3>Cómo se entra al agua</h3>
              <p>
                Entrar caminando desde una cala tranquila (muy típico en <Link href="/buceo/tossa-de-mar" className="text-link">Tossa de Mar</Link> o <Link href="/buceo/lanzarote" className="text-link">Playa Chica en Lanzarote</Link>) ahorra amarre y gasolina: suele costar entre <strong>55 € y 75 €</strong>. Salir en barco hasta un islote o reserva marina sube a <strong>75 €–105 €</strong>.
              </p>
            </article>
            <article className="guide-card">
              <span className="eyebrow">EL DETALLE CLAVE</span>
              <h3>Cuántos vais con el instructor</h3>
              <p>
                No es lo mismo bajar solo con tu pareja y un instructor para vosotros dos que ir en un grupo más grande donde el guía tiene que repartir la atención. Los centros que garantizan ratio 1:1 o 2:1 cobran un poco más, pero se disfruta el triple.
              </p>
            </article>
            <article className="guide-card">
              <span className="eyebrow">DOBLE INMERSIÓN O PISCINA</span>
              <h3>Tiempo real bajo el agua</h3>
              <p>
                Las ofertas que rondan los <strong>110 €–{maxPrice} €</strong> suelen ser bautismos dobles (primero una inmersión suave de adaptación y luego una segunda salida en barco con mucha más confianza) o incluyen fotos y vídeo con GoPro.
              </p>
            </article>
          </div>

          <h2>Precios habituales según la zona de España</h2>
          <div style={{ overflowX: "auto", margin: "1.5rem 0 2rem" }}>
            <table>
              <thead>
                <tr>
                  <th>Región</th>
                  <th>Desde playa / cala</th>
                  <th>Con salida en barco</th>
                  <th>Por qué destaca</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Canarias (Tenerife, Lanzarote, Gran Canaria)</strong></td>
                  <td>55 € – 75 €</td>
                  <td>75 € – 95 €</td>
                  <td>Agua templada todo el año y mucha vida cerca de la orilla.</td>
                </tr>
                <tr>
                  <td><strong>Cataluña (Costa Brava y Tarragona)</strong></td>
                  <td>60 € – 80 €</td>
                  <td>80 € – 110 €</td>
                  <td>Calas de roca espectaculares y salidas en barco a reservas como Medes.</td>
                </tr>
                <tr>
                  <td><strong>Murcia y Alicante (Cabo de Palos, Jávea, Tabarca)</strong></td>
                  <td>60 € – 75 €</td>
                  <td>75 € – 98 €</td>
                  <td>Aguas cálidas en verano y calas muy resguardadas del oleaje.</td>
                </tr>
                <tr>
                  <td><strong>Baleares (Mallorca, Menorca, Ibiza)</strong></td>
                  <td>65 € – 85 €</td>
                  <td>85 € – 120 €</td>
                  <td>Visibilidad cristalina sobre posidonia y muchas salidas en embarcación.</td>
                </tr>
                <tr>
                  <td><strong>Andalucía (La Herradura, Cabo de Gata, Tarifa)</strong></td>
                  <td>55 € – 75 €</td>
                  <td>70 € – 95 €</td>
                  <td>Acantilados llenos de coral naranja y ambiente muy acogedor para principiantes.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Lo que siempre debe estar incluido (sin cargos sorpresa)</h2>
          <p>
            Cuando reserves tu <Link href="/guias/bautismo-de-buceo-en-espana" className="text-link">bautismo de buceo</Link>, tú solo tienes que llevar bañador, toalla y chanclas. El precio de la oferta incluye siempre:
          </p>
          <ul>
            <li>
              <strong>Todo el equipo de buceo:</strong> traje de neopreno de tu talla, escarpines, máscara, aletas, chaleco (<em>jacket</em>), regulador, botella y plomos.
            </li>
            <li>
              <strong>El seguro obligatorio de buceo:</strong> durante un bautismo no tienes que contratar ningún seguro aparte; te cubre la póliza de la escuela.
            </li>
            <li>
              <strong>Charla previa e instructor en el agua:</strong> entre 25 y 45 minutos de paseo submarino real (según lo relajado que respires el aire de la botella) dentro de una actividad que en total dura unas 2 o 3 horas.
            </li>
          </ul>
          <p>
            Si te pica el gusanillo y te planteas hacer más de un bautismo, echa cuentas antes en nuestra comparativa <Link href="/guias/bautismo-vs-curso-open-water" className="text-link">Bautismo vs Curso Open Water</Link>, porque a veces por poco más te llevas el título internacional para toda la vida.
          </p>

          <div className="cta-section" style={{ paddingBottom: 0 }}>
            <div className="cta-panel">
              <div>
                <span className="eyebrow">BAUTISMOS EN ESPAÑA</span>
                <h2>Consulta bautismos y precios por zona</h2>
                <p>Elige provincia o localidad para ver tarifas y qué incluye cada centro.</p>
              </div>
              <Link href="/actividades/#type=Bautismo" className="button button-primary">
                Ver bautismos y precios →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
