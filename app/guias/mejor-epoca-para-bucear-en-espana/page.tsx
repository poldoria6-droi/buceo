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
            { name: "Mejor época para bucear en España", path: "/guias/mejor-epoca-para-bucear-en-espana" },
          ]}
        />
        <span className="eyebrow">PLANIFICACIÓN · TEMPORADAS</span>
        <h1>Mejor época para bucear en España: calendario y temperatura del agua</h1>
        <p className="lead">
          En España se puede bucear durante todo el año, pero las condiciones térmicas y la apertura de las escuelas varían notablemente entre el Mediterráneo peninsular, Baleares, el Cantábrico y las Islas Canarias. Esta guía resume qué esperar en cada época y qué protección térmica se suele utilizar.
        </p>

        <div className="guide-article">
          <h2>Resumen por regiones y temperaturas orientativas</h2>
          <div style={{ overflowX: "auto", margin: "1.5rem 0" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
              <thead>
                <tr style={{ borderBottom: "2px solid var(--line, #cbd5e1)" }}>
                  <th style={{ padding: "0.75rem" }}>Zona</th>
                  <th style={{ padding: "0.75rem" }}>Temporada principal</th>
                  <th style={{ padding: "0.75rem" }}>Temp. agua aprox.</th>
                  <th style={{ padding: "0.75rem" }}>Traje habitual</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid var(--line, #e2e8f0)" }}>
                  <td style={{ padding: "0.75rem" }}><strong>Costa Brava y Cataluña</strong></td>
                  <td style={{ padding: "0.75rem" }}>Mayo a octubre</td>
                  <td style={{ padding: "0.75rem" }}>15–17 °C (primavera) · 21–24 °C (verano)</td>
                  <td style={{ padding: "0.75rem" }}>7 mm / semiseco en primavera; 5–7 mm en verano (termoclinas en cota profunda).</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--line, #e2e8f0)" }}>
                  <td style={{ padding: "0.75rem" }}><strong>Comunidad Valenciana y Murcia</strong></td>
                  <td style={{ padding: "0.75rem" }}>Abril a noviembre (algunos centros todo el año)</td>
                  <td style={{ padding: "0.75rem" }}>16–19 °C (primavera/otoño) · 23–26 °C (agosto–septiembre)</td>
                  <td style={{ padding: "0.75rem" }}>5 mm en verano; 7 mm o semiseco en primavera y otoño.</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--line, #e2e8f0)" }}>
                  <td style={{ padding: "0.75rem" }}><strong>Islas Baleares</strong></td>
                  <td style={{ padding: "0.75rem" }}>Mayo a octubre</td>
                  <td style={{ padding: "0.75rem" }}>18–20 °C (mayo/octubre) · 24–27 °C (julio–septiembre)</td>
                  <td style={{ padding: "0.75rem" }}>5 mm (incluso 3 mm a poca cota en agosto); 7 mm en los extremos de temporada.</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--line, #e2e8f0)" }}>
                  <td style={{ padding: "0.75rem" }}><strong>Andalucía (Costa Tropical, Almería y Estrecho)</strong></td>
                  <td style={{ padding: "0.75rem" }}>Abril a noviembre (activo todo el año en La Herradura)</td>
                  <td style={{ padding: "0.75rem" }}>15–18 °C (invierno/upwelling) · 20–24 °C (verano)</td>
                  <td style={{ padding: "0.75rem" }}>7 mm o semiseco gran parte del año por corrientes frescas; 5 mm en aguas someras en verano.</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--line, #e2e8f0)" }}>
                  <td style={{ padding: "0.75rem" }}><strong>Islas Canarias</strong></td>
                  <td style={{ padding: "0.75rem" }}>Todo el año (12 meses)</td>
                  <td style={{ padding: "0.75rem" }}>18–20 °C (enero–abril) · 22–24 °C (agosto–noviembre)</td>
                  <td style={{ padding: "0.75rem" }}>5 mm o 7 mm cómodo todo el año.</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--line, #e2e8f0)" }}>
                  <td style={{ padding: "0.75rem" }}><strong>Cantábrico y Galicia</strong></td>
                  <td style={{ padding: "0.75rem" }}>Junio a septiembre (mejor estado de la mar)</td>
                  <td style={{ padding: "0.75rem" }}>13–15 °C (primavera) · 17–20 °C (verano)</td>
                  <td style={{ padding: "0.75rem" }}>7 mm con capucha, semiseco o traje seco.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>1. El secreto mejor guardado: septiembre y octubre</h2>
          <p>
            Para muchos buceadores habituales, <strong>septiembre y la primera mitad de octubre</strong> constituyen el momento óptimo del año tanto en el Mediterráneo (<Link href="/buceo/cabo-de-palos" className="text-link">Cabo de Palos</Link>, <Link href="/buceo/illes-medes" className="text-link">Illes Medes</Link>, <Link href="/buceo/benidorm" className="text-link">Costa Blanca</Link>, <Link href="/buceo/mallorca" className="text-link">Baleares</Link>) como en el Atlántico. El mar ha acumulado el calor de todo el verano, la vida pelágica (<Link href="/fauna/pez-limon" className="text-link">seriolas</Link>, <Link href="/fauna/barracuda" className="text-link">espetones</Link>, <Link href="/fauna/denton" className="text-link">dentones</Link>) está muy activa y los barcos de buceo tienen menos ocupación que en agosto.
          </p>

          <h2>2. Invierno y primavera temprana: el momento de Canarias</h2>
          <p>
            Entre diciembre y abril, muchas escuelas de temporada del Mediterráneo norte cierran por descanso o mantenimiento y el agua peninsular baja a 13–15 °C. Es la época estrella para volar a <Link href="/buceo/el-hierro" className="text-link">El Hierro</Link>, <Link href="/buceo/lanzarote" className="text-link">Lanzarote</Link>, <Link href="/buceo/tenerife" className="text-link">Tenerife</Link> o <Link href="/buceo/gran-canaria" className="text-link">Gran Canaria</Link>, donde el agua se mantiene en torno a 18–20 °C y además es temporada propicia para observar especies como el <Link href="/fauna/angelote" className="text-link">angelote</Link>.
          </p>

          <h2>3. Qué son las termoclinas y por qué importan</h2>
          <p>
            En el Mediterráneo durante julio y agosto la superficie puede superar los 25 °C, pero al descender por debajo de los 15–20 metros es frecuente atravesar una <strong>termoclina</strong> brusca donde el agua cae varios grados de golpe. Si vas a realizar inmersiones recreativas por debajo de los 18 metros, un neopreno completo de 5 mm o 7 mm (según tu tolerancia al frío) resulta mucho más confortable que un <em>shorty</em> corto.
          </p>

          <div className="cta-section" style={{ paddingBottom: 0 }}>
            <div className="cta-panel">
              <div>
                <span className="eyebrow">RESERVA SEGÚN LA ÉPOCA</span>
                <h2>Encuentra actividades abiertas en tu destino</h2>
                <p>
                  Filtra por comunidad autónoma y consulta la disponibilidad para tus fechas directamente con el proveedor.
                </p>
              </div>
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                <Link className="button button-primary" href="/actividades">
                  Explorar actividades →
                </Link>
                <Link className="button button-ghost" href="/destinos">
                  Ver guía de destinos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
