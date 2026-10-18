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
            {
              name: "¿Cuánto cuesta un bautismo?",
              path: "/guias/cuanto-cuesta-un-bautismo-de-buceo",
            },
          ]}
        />
        <span className="eyebrow">PRECIOS · PRINCIPIANTES</span>
        <h1>¿Cuánto cuesta un bautismo de buceo en España?</h1>
        <p className="lead">
          El precio de un bautismo de buceo en España varía según la modalidad (desde costa o en barco), la duración y los servicios incluidos. Analizamos las tarifas registradas en el catálogo de Buceo Atlas para que compares con referencia real.
        </p>

        <div className="notice-card" style={{ margin: "2rem 0" }}>
          <h2>Rango de precios en nuestro catálogo ({count} bautismos con tarifa publicada)</h2>
          <p>
            En las ofertas actualmente listadas en Buceo Atlas, el precio «desde» de un bautismo se sitúa entre <strong>{minPrice} € y {maxPrice} €</strong> por persona, con un valor mediano en torno a los <strong>{medianPrice} €</strong>. La mayoría de los bautismos de una inmersión oscilan entre los <strong>60 € y los 95 €</strong>.
          </p>
        </div>

        <div className="guide-article">
          <h2>1. Los 4 factores que hacen cambiar el precio</h2>
          <div className="guide-grid">
            <article className="guide-card">
              <span className="eyebrow">01 · ACCESO AL AGUA</span>
              <h3>Desde playa o en barco</h3>
              <p>
                Los bautismos con entrada desde cala o playa suelen ser más económicos (habitualmente entre 55 € y 75 €), mientras que las salidas en embarcación hasta una reserva o cala aislada implican mayor coste de combustible y logística.
              </p>
            </article>
            <article className="guide-card">
              <span className="eyebrow">02 · EQUIPO Y SEGURO</span>
              <h3>Todo el material incluido</h3>
              <p>
                Comprueba que la tarifa incluya el alquiler completo (neopreno, chaleco, regulador, botella, plomos, máscara y aletas) además del seguro obligatorio de buceo durante la actividad.
              </p>
            </article>
            <article className="guide-card">
              <span className="eyebrow">03 · RATIO Y DURACIÓN</span>
              <h3>Atención del instructor</h3>
              <p>
                Un bautismo personalizado o en grupo muy reducido (1 o 2 participantes por instructor) o aquel que combina piscina previa más inmersión en el mar tiene un precio superior al de un grupo estándar.
              </p>
            </article>
            <article className="guide-card">
              <span className="eyebrow">04 · EXTRAS</span>
              <h3>Fotos, vídeo o doble inmersión</h3>
              <p>
                Algunas ofertas incluyen reportaje fotográfico o de vídeo subacuático, o bien dos inmersiones en el mismo día, lo que sitúa el precio por encima de los 100 €.
              </p>
            </article>
          </div>

          <h2>2. ¿Cómo comparar dos ofertas antes de reservar?</h2>
          <p>
            Antes de elegir únicamente por la cifra más baja, revisa en la ficha de cada actividad:
          </p>
          <ul>
            <li>Cuánto tiempo total dura la experiencia y cuál es el tiempo aproximado bajo el agua.</li>
            <li>Si el punto de inmersión está en una cala protegida de fácil acceso o si requiere navegación en barco.</li>
            <li>Las condiciones de cancelación o cambio de fecha si el estado del mar impide salir.</li>
            <li>La escuela que organiza la actividad (puedes consultar su ficha en nuestro <Link href="/centros" className="text-link">directorio de centros de buceo</Link>).</li>
          </ul>
          <p>
            Si tras ver los precios te planteas obtener directamente la certificación internacional, consulta nuestra comparativa <Link href="/guias/bautismo-vs-curso-open-water" className="text-link">Bautismo de buceo vs Curso Open Water</Link>.
          </p>

          <div className="cta-section" style={{ paddingBottom: 0 }}>
            <div className="cta-panel">
              <div>
                <span className="eyebrow">COMPARADOR DE BAUTISMOS</span>
                <h2>Consulta precios por destino en España</h2>
                <p>Filtra las {count} experiencias de bautismo disponibles por comunidad autónoma o localidad.</p>
              </div>
              <Link href="/actividades?type=Bautismo" className="button button-primary">
                Comparar bautismos →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
