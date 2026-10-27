import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildArticleJsonLd } from "@/lib/seo";

export const metadata = {
  title: "Mejor Época para Bucear en España · Calendario y Temperatura del Agua",
  description:
    "Calendario orientativo de buceo en España por regiones: cuándo bucear en el Mediterráneo, Baleares, Canarias y el norte, y qué traje de neopreno llevar.",
  alternates: {
    canonical: "/guias/mejor-epoca-para-bucear-en-espana",
  },
  openGraph: {
    title: "Mejor Época para Bucear en España | Buceo Atlas",
    description:
      "Cuándo bucear en cada costa española según temperatura del agua, visibilidad y temporada de los centros.",
    url: "/guias/mejor-epoca-para-bucear-en-espana",
    type: "article",
  },
};

export default function BestSeasonDivingSpainPage() {
  const articleJsonLd = buildArticleJsonLd({
    title: "Mejor Época para Bucear en España · Calendario y Temperatura del Agua",
    description:
      "Calendario orientativo de buceo en España por regiones: cuándo bucear en el Mediterráneo, Baleares, Canarias y el norte.",
    path: "/guias/mejor-epoca-para-bucear-en-espana",
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
            { name: "Mejor época para bucear en España", path: "/guias/mejor-epoca-para-bucear-en-espana" },
          ]}
        />
        <span className="eyebrow">CALENDARIO Y NEOPRENO</span>
        <h1>Cuándo es la mejor época para bucear en España (y a qué temperatura está el agua)</h1>
        <p className="lead">
          La gran ventaja de España es que siempre hay algún rincón con el mar en calma y buena temperatura: desde el verano luminoso de Baleares y la Costa Brava hasta el invierno subtropical de Canarias. Te contamos cuándo ir a cada costa y qué grosor de neopreno pedir.
        </p>

        <div className="guide-article">
          <div className="editorial-tip">
            <p>
              🍂 <strong>El mes favorito de quienes bucean todo el año: septiembre y principios de octubre.</strong> En el Mediterráneo el agua conserva todo el calor acumulado en julio y agosto (23–25 °C), los bancos de <Link href="/fauna/pez-limon" className="text-link">peces limón</Link> y <Link href="/fauna/barracuda" className="text-link">barracudas</Link> están en plena actividad cazando y los barcos ya no van llenos como en agosto.
            </p>
          </div>

          <h2>Temperaturas del agua y traje recomendado por costa</h2>
          <div style={{ overflowX: "auto", margin: "1.5rem 0 2rem" }}>
            <table>
              <thead>
                <tr>
                  <th>Costa</th>
                  <th>Meses ideales</th>
                  <th>Temperatura del agua</th>
                  <th>Neopreno habitual</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Islas Canarias (El Hierro, Lanzarote, Tenerife, Gran Canaria)</strong></td>
                  <td>Los 12 meses del año</td>
                  <td>18–20 °C en invierno · 22–24 °C en verano/otoño</td>
                  <td>5 mm en verano y otoño; 7 mm o 5 mm con chaleco de calor en invierno.</td>
                </tr>
                <tr>
                  <td><strong>Islas Baleares (Mallorca, Menorca, Ibiza, Formentera)</strong></td>
                  <td>Mayo a octubre</td>
                  <td>18–20 °C en mayo · 25–27 °C en agosto y septiembre</td>
                  <td>5 mm cómodo (incluso 3 mm a poca profundidad en agosto).</td>
                </tr>
                <tr>
                  <td><strong>Murcia y Alicante (Cabo de Palos, Tabarca, Jávea)</strong></td>
                  <td>Abril a noviembre (muchos centros todo el año)</td>
                  <td>16–19 °C en primavera · 23–26 °C en verano</td>
                  <td>5 mm en julio–septiembre; 7 mm o semiseco el resto del año.</td>
                </tr>
                <tr>
                  <td><strong>Costa Brava y Cataluña (Illes Medes, Tossa, Palamós)</strong></td>
                  <td>Mayo a octubre</td>
                  <td>15–17 °C en primavera · 21–24 °C en pleno verano</td>
                  <td>5–7 mm en verano (ojo a las termoclinas al bajar de 18 m); semiseco en primavera.</td>
                </tr>
                <tr>
                  <td><strong>Andalucía (La Herradura, Cabo de Gata, Tarifa)</strong></td>
                  <td>Abril a noviembre (La Herradura todo el año)</td>
                  <td>15–18 °C con corrientes del Estrecho · 20–23 °C en verano</td>
                  <td>7 mm gran parte del año; en la Costa Tropical entran corrientes frescas incluso en julio.</td>
                </tr>
                <tr>
                  <td><strong>Norte (Galicia, Asturias, Cantabria y País Vasco)</strong></td>
                  <td>Junio a septiembre</td>
                  <td>13–15 °C en primavera · 17–20 °C en agosto</td>
                  <td>7 mm con capucha o semiseco; un mar bravío pero llenísimo de vida.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>De mayo a octubre: la gran temporada del Mediterráneo y Baleares</h2>
          <p>
            A partir del puente de mayo, las aguas de la <Link href="/buceo/tossa-de-mar" className="text-link">Costa Brava</Link>, <Link href="/buceo/cabo-de-palos" className="text-link">Cabo de Palos</Link>, <Link href="/buceo/tabarca" className="text-link">Tabarca</Link> y <Link href="/buceo/mallorca" className="text-link">Baleares</Link> empiezan a calentarse y los días largos hacen que apetezca estar en el barco toda la mañana. Julio y agosto son los meses ideales si vas a hacer tu primer <Link href="/guias/bautismo-de-buceo-en-espana" className="text-link">bautismo de buceo</Link> a poca profundidad, porque en los primeros 10 metros el agua está entre 24 y 27 °C.
          </p>

          <h2>Por qué no confiarse con un traje corto si bajas a más de 18 metros</h2>
          <p>
            Un detalle que sorprende a muchos buceadores que estrenan su título Open Water en el Mediterráneo es la <strong>termoclina de verano</strong>. En superficie puedes estar a 26 °C bañándote en bañador, pero en cuanto bajas por una pared rocosa más allá de los 16 o 18 metros, atraviesas de golpe una capa de agua que parece una cortina fría a 17 °C. Por eso en lugares como <Link href="/buceo/illes-medes" className="text-link">Illes Medes</Link> o <Link href="/buceo/la-herradura" className="text-link">La Herradura</Link> los guías llevan neopreno largo de 5 o 7 mm incluso en agosto.
          </p>

          <h2>De noviembre a abril: el paraíso invernal de Canarias</h2>
          <p>
            Cuando en la Península apetece sofá y manta, en <Link href="/buceo/el-hierro" className="text-link">El Hierro</Link>, <Link href="/buceo/lanzarote" className="text-link">Lanzarote</Link>, <Link href="/buceo/tenerife" className="text-link">Tenerife</Link> y <Link href="/buceo/gran-canaria" className="text-link">Gran Canaria</Link> el agua nunca baja de 18–19 °C y la visibilidad supera fácilmente los 25 metros. Además, el invierno y la primavera son la mejor época en Canarias para cruzarse en los arenales con el <Link href="/fauna/angelote" className="text-link">angelote</Link>, un tiburón plano en peligro de extinción que tiene allí su mayor refugio del mundo, y con grandes <Link href="/fauna/raya-pastinaca" className="text-link">chuchos y pastinacas</Link>.
          </p>

          <div className="cta-section" style={{ paddingBottom: 0 }}>
            <div className="cta-panel">
              <div>
                <span className="eyebrow">ELIGE TU PRÓXIMA SALIDA</span>
                <h2>Busca actividades abiertas en tu fecha</h2>
                <p>
                  Filtra por comunidad autónoma o explora las 85 guías de destinos costeros de España.
                </p>
              </div>
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                <Link className="button button-primary" href="/actividades">
                  Explorar actividades →
                </Link>
                <Link className="button button-ghost" href="/destinos">
                  Ver todos los destinos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
