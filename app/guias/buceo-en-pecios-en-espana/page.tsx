import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildArticleJsonLd } from "@/lib/seo";
import { diveSites } from "@/data/dive-sites";
import { SiteCard } from "@/components/SiteCard";

export const metadata = {
  title: "Buceo en Pecios en España: Mejores Barcos Hundidos y Requisitos",
  description:
    "Recorrido por los pecios y barcos hundidos más emblemáticos para bucear en España (Naranjito, Boreas, Don Pedro y más), profundidades y titulación necesaria.",
  alternates: {
    canonical: "/guias/buceo-en-pecios-en-espana",
  },
  openGraph: {
    title: "Buceo en Pecios en España: Mejores Barcos Hundidos | Buceo Atlas",
    description:
      "Guía de inmersión en los barcos hundidos más conocidos del Mediterráneo y Atlántico español: profundidades, nivel y vida marina.",
    url: "/guias/buceo-en-pecios-en-espana",
    type: "article",
  },
};

export default function WreckDivingSpainPage() {
  const wreckSites = diveSites.filter((s) => s.type === "Pecio");

  const articleJsonLd = buildArticleJsonLd({
    title: "Buceo en Pecios en España: Mejores Barcos Hundidos y Requisitos",
    description:
      "Recorrido por los pecios y barcos hundidos más emblemáticos para bucear en España (Naranjito, Boreas, Don Pedro y más), profundidades y titulación necesaria.",
    path: "/guias/buceo-en-pecios-en-espana",
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
            { name: "Buceo en pecios en España", path: "/guias/buceo-en-pecios-en-espana" },
          ]}
        />
        <span className="eyebrow">HISTORIA BAJO EL AGUA · PECIOS</span>
        <h1>Buceo en pecios en España: los barcos hundidos más impresionantes de nuestras costas</h1>
        <p className="lead">
          Hay pocas sensaciones en el buceo comparables al momento en que vas bajando por el cabo del fondeo en el azul y, de pronto, empieza a dibujarse bajo tus aletas la silueta entera de un barco hundido convertido en un oasis de vida marina.
        </p>

        <div className="guide-article">
          <h2>Los 3 grandes barcos hundidos que todo buceador quiere visitar en España</h2>
          <p>
            En mitad de un arenal submarino donde no hay ni una piedra, cualquier casco de acero funciona como un imán para la fauna: en cuestión de años los pasamanos se cubren de esponjas y <Link href="/fauna/anemona-joya" className="text-link">anémonas</Link>, las bodegas dan cobijo a enormes <Link href="/fauna/congrio" className="text-link">congrios</Link> y <Link href="/fauna/morena" className="text-link">morenas</Link>, y sobre la cubierta patrullan bancos de espetones y peces limón. Estos son los tres nombres propios del Mediterráneo español:
          </p>
          <ul>
            <li>
              <strong>El Naranjito (<Link href="/buceo/cabo-de-palos" className="text-link">Cabo de Palos, Murcia</Link>):</strong> su nombre real era <em>Isla de la Gomera</em>, un mercante de 51 metros que se hundió en 1946 tras desplazarse su carga de naranjas en pleno temporal. Descansa completamente derecho sobre el fondo de arena, como si siguiera navegando, entre los 28 metros del puente y los 43 metros de su hélice.
            </li>
            <li>
              <strong>El Boreas (<Link href="/buceo/palamos" className="text-link">Palamós, Costa Brava</Link>):</strong> un remolcador alemán de la Segunda Guerra Mundial de 40 metros que fue hundido en 1989 para crear un arrecife artificial. Al estar entre los 20 y los 32 metros de profundidad máxima, es el pecio ideal para estrenarse en barcos hundidos sin rozar los límites del buceo recreativo.
            </li>
            <li>
              <strong>El Don Pedro (<Link href="/buceo/ibiza" className="text-link">Ibiza, Baleares</Link>):</strong> un coloso mercante de 142 metros de eslora hundido en 2007 a pocos minutos de la bocana del puerto de Ibiza. Sus dimensiones impresionan: el costado superior arranca a 26 metros y el fondo de arena llega a los 47 metros.
            </li>
          </ul>

          {wreckSites.length > 0 && (
            <>
              <h2>Puntos de inmersión en pecios de nuestro catálogo</h2>
              <div className="cards-grid" style={{ margin: "1.5rem 0 2.5rem" }}>
                {wreckSites.map((site) => (
                  <SiteCard key={site.id} site={site} />
                ))}
              </div>
            </>
          )}

          <div className="editorial-tip">
            <p>
              🔦 <strong>Por qué llevar siempre linterna (y Nitrox) a un pecio:</strong> a 30 metros de profundidad la luz solar ya ha perdido todos los tonos rojos y naranjas; en cuanto enciendes tu foco apuntando al interior de una ventana del puente o debajo de la hélice, el hierro gris se vuelve un espectáculo de colores vivos. Y si tienes la especialidad de <strong>Nitrox (EAN32)</strong>, ganarás unos minutos valiosísimos de tiempo sin descompresión para recorrer el barco sin prisas.
            </p>
          </div>

          <h2>Qué título y experiencia te van a pedir en el centro</h2>
          <p>
            Aunque en costas como <Link href="/buceo/tarragona" className="text-link">Tarragona</Link> (la <em>Dragonera</em> en el Parque Subacuático de la Escollera) o en <Link href="/buceo/lanzarote" className="text-link">los barcos de Puerto del Carmen en Lanzarote</Link> hay restos a menos de 20 metros aptos para un Open Water con soltura, la mayoría de los grandes pecios españoles descansan por debajo de los 25 metros:
          </p>
          <ul>
            <li>
              <strong>Titulación Advanced Open Water (o equivalente 2 Estrellas):</strong> imprescindible para bajar hasta los 30 metros y recorrer las cubiertas principales del <em>Boreas</em> o del <em>Naranjito</em>.
            </li>
            <li>
              <strong>Especialidad de Buceo Profundo (Deep Diver):</strong> necesaria para aquellos perfiles que se acercan a los 35–40 metros.
            </li>
            <li>
              <strong>Respeto a los espacios cerrados:</strong> en buceo recreativo los pecios se recorren por el exterior o por pasos amplios y abiertos con luz natural; nunca entres en salas de máquinas ni pasillos cerrados sin techo libre a menos que tengas formación específica de penetración en pecios y carrete guía.
            </li>
          </ul>

          <div className="cta-section" style={{ paddingBottom: 0 }}>
            <div className="cta-panel">
              <div>
                <span className="eyebrow">INMERSIONES PARA TITULADOS</span>
                <h2>Reserva tu salida a pecios en España</h2>
                <p>
                  Consulta las inmersiones guiadas en barcos hundidos y los centros que operan en cada zona.
                </p>
              </div>
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                <Link className="button button-primary" href="/actividades/#type=Pecio">
                  Ver salidas a pecios →
                </Link>
                <Link className="button button-ghost" href="/centros">
                  Directorio de centros
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
