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
            { name: "Buceo en pecios en España", path: "/guias/buceo-en-pecios-en-espana" },
          ]}
        />
        <span className="eyebrow">BUCEO AVANZADO · PECIOS</span>
        <h1>Buceo en pecios en España: grandes barcos hundidos y qué nivel necesitas</h1>
        <p className="lead">
          Con el paso de los años, los cascos sumergidos se transforman en arrecifes artificiales colonizados por <Link href="/fauna/congrio" className="text-link">congrios</Link>, <Link href="/fauna/morena" className="text-link">morenas</Link>, <Link href="/fauna/bogavante" className="text-link">bogavantes</Link>, <Link href="/fauna/anemona-joya" className="text-link">anémonas</Link> y bancos de peces pelágicos. Repasamos los pecios más representativos de España y las recomendaciones de seguridad para visitarlos.
        </p>

        <div className="guide-article">
          <h2>1. Tres pecios clásicos del Mediterráneo español</h2>
          <ul>
            <li>
              <strong>El Naranjito (Isla Grosa, <Link href="/buceo/cabo-de-palos" className="text-link">Cabo de Palos, Murcia</Link>):</strong> carguero de unos 50 metros de eslora hundido en 1946 en posición de navegación entre los 28 metros de la superestructura y los 42–44 metros de la hélice. Es uno de los pecios más fotogénicos y visitados de España por la concentración de vida en su cubierta.
            </li>
            <li>
              <strong>El Boreas (<Link href="/buceo/palamos" className="text-link">Palamós, Costa Brava</Link>):</strong> antiguo remolcador de unos 40 metros de eslora hundido en 1989 como arrecife artificial sobre fondo de arena entre los 20 y los 32 metros de profundidad. Su menor cota máxima lo convierte en una introducción ideal al buceo en barcos hundidos para buceadores con titulación avanzada.
            </li>
            <li>
              <strong>El Don Pedro (<Link href="/buceo/ibiza" className="text-link">Ibiza, Baleares</Link>):</strong> buque mercante de más de 140 metros de eslora hundido en 2007 a la salida del puerto de Ibiza. Descansa sobre su costado de babor entre los 26 y los 47 metros de profundidad, siendo uno de los mayores pecios accesibles al buceo recreativo avanzado y técnico en el Mediterráneo.
            </li>
          </ul>

          {wreckSites.length > 0 && (
            <>
              <h2>Puntos de pecio registrados en el mapa de Atlas</h2>
              <div className="cards-grid" style={{ margin: "1.5rem 0 2.5rem" }}>
                {wreckSites.map((site) => (
                  <SiteCard key={site.id} site={site} />
                ))}
              </div>
            </>
          )}

          <h2>2. ¿Qué certificación y equipo se requiere para bucear en pecios?</h2>
          <p>
            La mayoría de los pecios españoles se encuentran por debajo de los 24 metros de profundidad:
          </p>
          <ul>
            <li>
              <strong>Certificación mínima:</strong> para la gran mayoría se exige nivel <strong>Advanced Open Water Diver</strong> (hasta 30 m) o la especialidad de <strong>Buceo Profundo</strong> (hasta 40 m), además de experiencia reciente acreditada en el cuaderno de bitácora.
            </li>
            <li>
              <strong>Uso de Nitrox (EANx):</strong> muy recomendable en pecios situados entre los 25 y los 35 metros para ampliar el tiempo límite sin descompresión manteniendo la máxima presión parcial de oxígeno dentro de los márgenes seguros.
            </li>
            <li>
              <strong>Equipamiento esencial:</strong> <Link href="/guias/que-equipo-necesito-para-empezar-a-bucear" className="text-link">ordenador de buceo</Link>, foco o linterna subacuática (para iluminar bodegas exteriores, puentes y restituir el color rojo de la fauna incrustante) y boya de señalización de superficie (SMB).
            </li>
            <li>
              <strong>Regla de oro sobre penetración:</strong> nunca te adentres en espacios cerrados sin salida vertical directa (<em>overhead environment</em>) a menos que cuentes con formación específica en pecios/técnico, carrete guía y redundancia de gas e iluminación.
            </li>
          </ul>

          <div className="cta-section" style={{ paddingBottom: 0 }}>
            <div className="cta-panel">
              <div>
                <span className="eyebrow">INMERSIONES EN PECIOS</span>
                <h2>Explora salidas y especialidades de pecios en España</h2>
                <p>
                  Consulta las actividades catalogadas de tipo Pecio o contacta con las escuelas de Cabo de Palos, Costa Brava, Baleares y Canarias.
                </p>
              </div>
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                <Link className="button button-primary" href="/actividades/#type=Pecio">
                  Ver salidas a pecios →
                </Link>
                <Link className="button button-ghost" href="/centros">
                  Directorio de escuelas
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
