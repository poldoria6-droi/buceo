import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildArticleJsonLd } from "@/lib/seo";

export const metadata = {
  title: "Las Mejores Zonas de Buceo en España · Destinos, Épocas y Nivel",
  description:
    "Descubre los mejores sitios para bucear en España: reservas marinas de Illes Medes, Cabo de Palos, El Hierro, Cabrera y Canarias. Consejos por nivel y temporada.",
  alternates: {
    canonical: "/guias/mejores-zonas-de-buceo-en-espana",
  },
  openGraph: {
    title: "Las Mejores Zonas de Buceo en España | Buceo Atlas",
    description:
      "Guía con los mejores destinos submarinos de España: dónde ir, qué especies ver y qué escuelas elegir.",
    url: "/guias/mejores-zonas-de-buceo-en-espana",
    type: "article",
  },
};

export default function BestDivingZonesPage() {
  const articleJsonLd = buildArticleJsonLd({
    title: "Las Mejores Zonas de Buceo en España · Destinos, Épocas y Nivel",
    description:
      "Descubre los mejores sitios para bucear en España: reservas marinas de Illes Medes, Cabo de Palos, El Hierro, Cabrera y Canarias.",
    path: "/guias/mejores-zonas-de-buceo-en-espana",
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
        <span className="eyebrow">DESTINOS · ESPAÑA</span>
        <h1>Las mejores zonas para bucear en España</h1>
        <p className="lead">
          España cuenta con más de 8.000 kilómetros de costa bañados por el Mar Mediterráneo, el Océano Atlántico y el Mar Cantábrico. Desde reservas marinas con meros gigantes hasta fondos volcánicos con tortugas y angelotes, repasamos los destinos imprescindibles adaptados a cada nivel.
        </p>

        <div className="guide-article">
          <h2>1. Illes Medes y Costa Brava (Cataluña)</h2>
          <p>
            Considerada una de las joyas indiscutibles del Mediterráneo occidental. La Reserva Marina de las <strong>Illes Medes</strong> (frente a L'Estartit) lleva protegida desde 1990, lo que ha permitido una recuperación asombrosa de la biomasa marina.
          </p>
          <ul>
            <li><strong>Qué verás:</strong> Decenas de <Link href="/fauna/mero-moreno">meros gigantes</Link> acostumbrados a los buceadores, paredes tapizadas de <Link href="/fauna/gorgonia-roja">gorgonias rojas</Link>, pulpos y bancos de <Link href="/fauna/barracuda">barracudas</Link>.</li>
            <li><strong>Nivel recomendado:</strong> Todos los niveles. Existen zonas someras protegidas para principiantes e inmersiones profundas con corrientes para avanzados.</li>
            <li><strong>Mejor época:</strong> De mayo a octubre (temperatura del agua entre 18 °C y 24 °C).</li>
          </ul>
          <p>
            👉 <Link href="/buceo/illes-medes" className="text-link">Explorar puntos de inmersión en Illes Medes →</Link>
          </p>

          <h2>2. Cabo de Palos e Islas Hormigas (Murcia)</h2>
          <p>
            Elegido repetidamente entre los mejores destinos de buceo de Europa. La conjunción de corrientes atlánticas y mediterráneas sobre sus bajos submarinos genera una concentración de nutrientes y vida pelágica extraordinaria.
          </p>
          <ul>
            <li><strong>Qué verás:</strong> Nubes de peces pasto, dentones a la caza, corvinas, morenas y grandes pecios históricos como el mítico <em>Naranjito</em> o el transatlántico <em>Sirio</em>.</li>
            <li><strong>Nivel recomendado:</strong> Intermedio a avanzado (habitual presencia de corrientes intensas y fondos entre 25 y 45 metros).</li>
            <li><strong>Mejor época:</strong> De junio a noviembre.</li>
          </ul>
          <p>
            👉 <Link href="/buceo/cabo-de-palos" className="text-link">Ver detalles y puntos de Cabo de Palos →</Link>
          </p>

          <h2>3. El Hierro y las Islas Canarias</h2>
          <p>
            Bucear en Canarias es bucear en un acuario atlántico durante todo el año, gracias a una temperatura del agua que rara vez baja de los 19 °C en invierno y visibilidades que superan con facilidad los 30 metros.
          </p>
          <ul>
            <li><strong>La Restinga (El Hierro):</strong> Reserva marina con topografía volcánica espectacular, arcos basálticos y visitas de rayas y peces pelágicos.</li>
            <li><strong>Lanzarote (Playa Chica):</strong> Ideal para avistar al singular <Link href="/fauna/angelote">angelote</Link> y <Link href="/fauna/chucho-raya">chuchos negros</Link> descansando sobre la arena.</li>
            <li><strong>Tenerife Sur:</strong> Zonas de sebadales con presencia regular de <Link href="/fauna/tortuga-marina">tortugas marinas</Link>.</li>
          </ul>
          <p>
            👉 <Link href="/buceo/el-hierro" className="text-link">Conocer el buceo en El Hierro →</Link>
          </p>

          <h2>4. Parque Nacional de Cabrera y Baleares</h2>
          <p>
            El archipiélago de Cabrera es el mayor parque nacional marítimo-terrestre de España. Su aislamiento y la estricta limitación de embarcaciones diarias garantizan aguas con una transparencia cristalina y fondos casi vírgenes.
          </p>
          <ul>
            <li><strong>Qué verás:</strong> Meros de dimensiones históricas, águilas marinas, fondos de posidonia en perfecto estado y espectaculares contraluces en cuevas como la <em>Cova Blava</em>.</li>
            <li><strong>Nivel recomendado:</strong> Inicial e intermedio.</li>
            <li><strong>Mejor época:</strong> De junio a octubre.</li>
          </ul>
          <p>
            👉 <Link href="/buceo/cabrera" className="text-link">Descubrir el Parque Nacional de Cabrera →</Link>
          </p>

          <h2>5. Maro-Cerro Gordo y Cabo de Gata (Andalucía)</h2>
          <p>
            El litoral andaluz ofrece opciones excepcionales tanto en las aguas cálidas de Granada (La Herradura) y Almería (Cabo de Gata) como en el Estrecho de Gibraltar (Tarifa), donde confluyen el mar y el océano.
          </p>
          <ul>
            <li><strong>Maro-Cerro Gordo:</strong> Fondos de calas resguardadas con pasos submarinos y cuevas accesibles, perfectas para bautismos y salidas en familia.</li>
            <li><strong>Tarifa:</strong> El punto más meridional de Europa, célebre por sus encuentros con peces luna (<Link href="/fauna/pez-luna">Mola mola</Link>) y gorgonias amarillas.</li>
          </ul>
          <p>
            👉 <Link href="/buceo/nerja" className="text-link">Ver puntos en Maro-Cerro Gordo →</Link>
          </p>

          <div className="commercial-card commercial-card-activity" style={{ margin: "2.5rem 0" }}>
            <div className="commercial-card-body">
              <span className="eyebrow">PLANIFICA TU ESCAPADA</span>
              <h3>Encuentra escuelas y reserva con el proveedor local</h3>
              <p>
                En Buceo Atlas puedes comparar más de 170 escuelas oficiales y más de 450 experiencias de buceo en los principales destinos de la península e islas.
              </p>
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginTop: "1rem" }}>
                <Link className="button button-primary" href="/destinos">
                  Explorar todos los destinos →
                </Link>
                <Link className="button button-secondary" href="/centros">
                  Ver escuelas verificadas
                </Link>
                <Link className="button button-secondary" href="/actividades">
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
