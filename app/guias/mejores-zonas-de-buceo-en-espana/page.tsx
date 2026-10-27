import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildArticleJsonLd } from "@/lib/seo";

export const metadata = {
  title: "Las Mejores Zonas de Buceo en España · Destinos, Épocas y Nivel",
  description:
    "Descubre los principales sitios para bucear en España: reservas marinas de Illes Medes, Cabo de Palos, El Hierro, Cabrera, Lanzarote y Costa Tropical según tu nivel.",
  alternates: {
    canonical: "/guias/mejores-zonas-de-buceo-en-espana",
  },
  openGraph: {
    title: "Las Mejores Zonas de Buceo en España | Buceo Atlas",
    description:
      "Guía con los principales destinos submarinos de España: dónde ir, qué especies ver y qué nivel se recomienda.",
    url: "/guias/mejores-zonas-de-buceo-en-espana",
    type: "article",
  },
};

export default function BestDivingZonesPage() {
  const articleJsonLd = buildArticleJsonLd({
    title: "Las Mejores Zonas de Buceo en España · Destinos, Épocas y Nivel",
    description:
      "Descubre los principales sitios para bucear en España: reservas marinas de Illes Medes, Cabo de Palos, El Hierro, Cabrera y Lanzarote.",
    path: "/guias/mejores-zonas-de-buceo-en-espana",
    datePublished: "2026-10-15",
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
            { name: "Mejores zonas de buceo en España", path: "/guias/mejores-zonas-de-buceo-en-espana" },
          ]}
        />
        <span className="eyebrow">MAPA IMPRESCINDIBLE DE ESPAÑA</span>
        <h1>Dónde bucear en España: las grandes zonas que todo buceador debería conocer</h1>
        <p className="lead">
          Pocas costas de Europa tienen la variedad que hay en España: en apenas dos horas de vuelo o unas horas de coche puedes pasar de un bosque de gorgonias rojas en Girona a una montaña submarina llena de meros en Murcia o a coladas de lava volcánica en Canarias. Estas son las zonas imprescindibles según lo que busques.
        </p>

        <div className="guide-article">
          <h2>Cabo de Palos e Islas Hormigas (Murcia): la meca de la vida grande en el Mediterráneo</h2>
          <p>
            Si le preguntas a cualquier buceador español dónde vio por primera vez una bola de cientos de barracudas o bancos de peces limón cruzando como torpedos en el azul, nueve de cada diez te dirán <strong>Cabo de Palos</strong>. Su reserva marina es una cadena de montañas submarinas (el Bajo de Dentro, Piles, Testa) que suben desde el fondo hasta pocos metros de la superficie, concentrando una cantidad de vida que parece de otro mar.
          </p>
          <ul>
            <li>
              <strong>Qué vas a ver:</strong> enormes <Link href="/fauna/mero-moreno" className="text-link">meros</Link>, abadejos, <Link href="/fauna/denton" className="text-link">dentones</Link>, <Link href="/fauna/pez-limon" className="text-link">seriolas</Link>, águilas marinas y, fuera de la reserva, pecios míticos como el <em>Naranjito</em>.
            </li>
            <li>
              <strong>Para quién es:</strong> los bajos de la reserva exigen tener el título en regla y manejarse bien si hay corriente; si buscas iniciarte o hacer un bautismo tranquilo, las calas de alrededor del faro y de <Link href="/buceo/cartagena" className="text-link">Cartagena</Link> o <Link href="/buceo/aguilas" className="text-link">Águilas</Link> son comodísimas.
            </li>
          </ul>
          <p>
            👉 <Link href="/buceo/cabo-de-palos" className="text-link">Ver guía de buceo, centros y precios en Cabo de Palos →</Link>
          </p>

          <h2>Illes Medes y la Costa Brava (Girona): túneles de luz y paredes de gorgonias</h2>
          <p>
            Frente al puerto de <Link href="/buceo/lestartit" className="text-link">L&apos;Estartit</Link>, las <strong>Illes Medes</strong> llevan décadas protegidas de la pesca, y eso se nota nada más meter la cabeza en el agua: los meros de veinte kilos se te quedan mirando a un metro de tu máscara sin inmutarse. A esto se suman túneles de roca caliza con contraluces preciosos y paredes tapizadas de <Link href="/fauna/gorgonia-roja" className="text-link">gorgonias rojas</Link> y amarillas.
          </p>
          <p>
            Y si estás empezando o prefieres entrar desde playa sin coger barco, más al sur tienes <Link href="/buceo/tossa-de-mar" className="text-link">Tossa de Mar</Link> (la famosa <em>Mar Menuda</em>), que es probablemente la escuela natural al aire libre más popular de toda Cataluña.
          </p>
          <p>
            👉 <Link href="/buceo/illes-medes" className="text-link">Guía de Illes Medes →</Link> · <Link href="/buceo/tossa-de-mar" className="text-link">Guía de Tossa de Mar →</Link>
          </p>

          <h2>El Hierro, Lanzarote, Tenerife y Gran Canaria: buceo volcánico los 365 días</h2>
          <p>
            Canarias juega en otra liga porque bajo el agua el paisaje parece lunar: arcos de basalto, tubos volcánicos, paredes que caen al azul y una visibilidad que muchos días supera los 30 metros, con el agua templada en enero y en agosto.
          </p>
          <ul>
            <li>
              <strong><Link href="/buceo/el-hierro" className="text-link">La Restinga (El Hierro)</Link>:</strong> el Mar de las Calmas hace honor a su nombre. Su inmersión estrella, <em>El Bajón</em>, es un volcán submarino que ningún buceador olvida.
            </li>
            <li>
              <strong><Link href="/buceo/lanzarote" className="text-link">Playa Chica (Lanzarote)</Link> y La Graciosa:</strong> entras caminando desde una calita de arena y a los pocos metros el fondo cae por veriles llenos de meros, <Link href="/fauna/angelote" className="text-link">angelotes</Link> y bancos de roncadores.
            </li>
            <li>
              <strong><Link href="/buceo/gran-canaria" className="text-link">El Cabrón (Gran Canaria)</Link> y el sur de <Link href="/buceo/tenerife" className="text-link">Tenerife</Link>:</strong> reservas llenas de vida subtropical, <Link href="/fauna/raya-pastinaca" className="text-link">chuchos</Link> y <Link href="/fauna/tortuga-boba" className="text-link">tortugas</Link>, con vuelos directos y centros abiertos todo el año.
            </li>
          </ul>

          <h2>La Herradura, Cabo de Gata y Tarifa (Andalucía): tres mares en una sola región</h2>
          <p>
            En Andalucía puedes hacer tres viajes de buceo completamente distintos según la provincia que elijas:
          </p>
          <ul>
            <li>
              <strong><Link href="/buceo/la-herradura" className="text-link">La Herradura y Maro–Cerro Gordo</Link> (Granada/Málaga):</strong> una bahía en forma de herradura protegida de los vientos donde se puede bucear casi todo el año entre paredes tapizadas de <Link href="/fauna/coral-naranja" className="text-link">coral naranja</Link> y decenas de especies de nudibranquios.
            </li>
            <li>
              <strong><Link href="/buceo/cabo-de-gata" className="text-link">Cabo de Gata</Link> (Almería):</strong> aguas limpísimas, praderas infinitas de <Link href="/fauna/posidonia" className="text-link">posidonia</Link> y cuevas volcánicas a poca profundidad ideales de junio a octubre.
            </li>
            <li>
              <strong><Link href="/buceo/tarifa" className="text-link">Tarifa</Link> (Cádiz):</strong> el choque entre el Atlántico y el Mediterráneo en la Isla de las Palomas crea una explosión de vida con centollos, gorgonias y <Link href="/fauna/pez-luna" className="text-link">peces luna</Link>.
            </li>
          </ul>

          <h2>Baleares y Tabarca: aguas de cristal y cavernas de postal</h2>
          <p>
            Si lo que más disfrutas bajo el agua es la sensación de volar con 30 metros de visibilidad y entrar en cavernas con rayos de sol atravesando la roca, las reservas de <Link href="/buceo/menorca" className="text-link">Menorca</Link>, <Link href="/buceo/mallorca" className="text-link">Mallorca</Link>, <Link href="/buceo/formentera" className="text-link">Ibiza–Formentera</Link>, el Parque Nacional de <Link href="/buceo/cabrera" className="text-link">Cabrera</Link> o la primera reserva marina de España en la isla de <Link href="/buceo/tabarca" className="text-link">Tabarca (Alicante)</Link> son paradas obligatorias entre mayo y octubre.
          </p>

          <div className="cta-section" style={{ paddingBottom: 0 }}>
            <div className="cta-panel">
              <div>
                <span className="eyebrow">85 DESTINOS EN ESPAÑA</span>
                <h2>Explora el mapa y las guías de cada localidad</h2>
                <p>
                  Consulta puntos de inmersión, precios desde y centros activos en cada rincón de nuestra costa.
                </p>
              </div>
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                <Link className="button button-primary" href="/destinos">
                  Ver los 85 destinos →
                </Link>
                <Link className="button button-ghost" href="/actividades">
                  Buscar actividades
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
