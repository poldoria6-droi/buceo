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
            { name: "Mejores zonas de buceo en España", path: "/guias/mejores-zonas-de-buceo-en-espana" },
          ]}
        />
        <span className="eyebrow">DESTINOS · ESPAÑA</span>
        <h1>Las mejores zonas para bucear en España según tu nivel</h1>
        <p className="lead">
          Entre el mar Mediterráneo, el océano Atlántico y el mar Cantábrico, España reúne reservas marinas con alta densidad de vida, fondos volcánicos subantropicales y pecios históricos. Repasamos las zonas más representativas y para qué perfil de buceador resulta más adecuada cada una.
        </p>

        <div className="guide-article">
          <h2>1. Illes Medes y Costa Brava (Cataluña)</h2>
          <p>
            Frente a L&apos;Estartit, el archipiélago de las <strong>Illes Medes</strong> es una de las reservas marinas más emblemáticas del Mediterráneo occidental. La prohibición de pesca y la variedad de paredes, túneles calizos y bloques rocosos concentran una notable biodiversidad a pocos minutos de navegación del puerto.
          </p>
          <ul>
            <li>
              <strong>Fauna destacada:</strong> ejemplares de gran porte de <Link href="/fauna/mero-moreno" className="text-link">mero moreno</Link>, paredes de <Link href="/fauna/gorgonia-roja" className="text-link">gorgonia roja</Link>, <Link href="/fauna/corvina" className="text-link">corvinas</Link>, <Link href="/fauna/denton" className="text-link">dentones</Link> y bancos de <Link href="/fauna/barracuda" className="text-link">espetones (barracudas)</Link>.
            </li>
            <li>
              <strong>Nivel recomendado:</strong> todos los niveles; la Costa Brava combina calas resguardadas para <Link href="/actividades/#type=Bautismo&region=Catalu%C3%B1a" className="text-link">bautismos y cursos</Link> con bajos exteriores e inmersiones en pecios como el <em>Boreas</em> (Palamós).
            </li>
          </ul>
          <p>
            👉 <Link href="/buceo/illes-medes" className="text-link">Ver puntos de inmersión en Illes Medes →</Link> · <Link href="/buceo/tossa-de-mar" className="text-link">Explorar Tossa de Mar y Costa Brava →</Link>
          </p>

          <h2>2. Cabo de Palos e Islas Hormigas (Región de Murcia)</h2>
          <p>
            La Reserva Marina de <strong>Cabo de Palos e Islas Hormigas</strong> está formada por una sucesión de bajos submarinos (Bajo de Dentro, Bajo de Testa, Piles) donde las corrientes favorecen la concentración de peces pelágicos y grandes depredadores, además de albergar históricos barcos hundidos en su entorno.
          </p>
          <ul>
            <li>
              <strong>Fauna destacada:</strong> grandes meros, bancos de <Link href="/fauna/pez-limon" className="text-link">peces limón (seriolas)</Link>, <Link href="/fauna/denton" className="text-link">dentones</Link>, <Link href="/fauna/morena" className="text-link">morenas</Link> y <Link href="/fauna/nudibranquio-azul" className="text-link">nudibranquios</Link>.
            </li>
            <li>
              <strong>Nivel recomendado:</strong> para bucear dentro de la reserva y en pecios como el <em>Naranjito</em> se requiere titulación, buen control de flotabilidad y experiencia en corrientes; para iniciación y bautismos existen calas tranquilas en el litoral de Cabo de Palos, Cartagena y Águilas.
            </li>
          </ul>
          <p>
            👉 <Link href="/buceo/cabo-de-palos" className="text-link">Ver puntos en Cabo de Palos e Islas Hormigas →</Link>
          </p>

          <h2>3. El Hierro, Lanzarote, Tenerife y Gran Canaria (Islas Canarias)</h2>
          <p>
            El archipiélago canario permite bucear los doce meses del año gracias a sus aguas templadas y a la rápida caída batimétrica de sus fondos volcánicos, con arcos basálticos, veriles y arenales limpios.
          </p>
          <ul>
            <li>
              <strong>La Restinga (<Link href="/buceo/el-hierro" className="text-link">El Hierro</Link>):</strong> reserva marina en el Mar de las Calmas célebre por su visibilidad y su relieve volcánico (como <em>El Bajón</em>).
            </li>
            <li>
              <strong>Playa Chica (<Link href="/buceo/lanzarote" className="text-link">Lanzarote</Link>):</strong> acceso cómodo desde playa con veriles escalonados y registros documentados de <Link href="/fauna/angelote" className="text-link">angelote</Link> y <Link href="/fauna/raya-pastinaca" className="text-link">rayas</Link>.
            </li>
            <li>
              <strong><Link href="/buceo/tenerife" className="text-link">Tenerife</Link> y <Link href="/buceo/gran-canaria" className="text-link">Gran Canaria</Link>:</strong> excelente oferta de escuelas durante todo el año, reservas como El Cabrón (Arinaga) y avistamientos frecuentes de <Link href="/fauna/tortuga-boba" className="text-link">tortugas marinas</Link> y bancos de roncadores.
            </li>
          </ul>
          <p>
            👉 <Link href="/actividades/#region=Canarias" className="text-link">Ver actividades y cursos en Canarias →</Link>
          </p>

          <h2>4. Cabrera, Mallorca, Menorca e Ibiza–Formentera (Islas Baleares)</h2>
          <p>
            Las Islas Baleares destacan por sus extensas praderas de <Link href="/fauna/posidonia" className="text-link">Posidonia oceanica</Link>, responsables de la extraordinaria transparencia de sus aguas, así como por sus cuevas calcáreas y reservas marinas (El Toro, Malgrats, Norte de Menorca, Es Freus).
          </p>
          <ul>
            <li>
              <strong>Qué encontrar:</strong> contraluces en cavernas, meros, <Link href="/fauna/pulpo-comun" className="text-link">pulpos</Link>, <Link href="/fauna/escorpora" className="text-link">cabrachos</Link>, <Link href="/fauna/sargo-comun" className="text-link">sargos</Link> y pecios profundos como el <em>Don Pedro</em> en Ibiza.
            </li>
            <li>
              <strong>Nivel recomendado:</strong> muy versátil; ideal tanto para primeros bautismos en calas someras de <Link href="/buceo/mallorca" className="text-link">Mallorca</Link> o <Link href="/buceo/menorca" className="text-link">Menorca</Link> como para buceadores titulados en <Link href="/buceo/cabrera" className="text-link">Cabrera</Link> e <Link href="/buceo/ibiza" className="text-link">Ibiza</Link> y <Link href="/buceo/formentera" className="text-link">Formentera</Link>.
            </li>
          </ul>

          <h2>5. Maro–Cerro Gordo, Cabo de Gata y Tarifa (Andalucía)</h2>
          <p>
            La costa andaluza ofrece tres ambientes muy diferenciados:
          </p>
          <ul>
            <li>
              <strong>Maro–Cerro Gordo y La Herradura (Granada/Málaga):</strong> acantilados resguardados ricos en <Link href="/fauna/coral-naranja" className="text-link">coral naranja</Link> y nudibranquios, muy frecuentados por escuelas para todos los niveles.
            </li>
            <li>
              <strong>Cabo de Gata (Almería):</strong> fondos volcánicos claros con praderas de posidonia, cuevas superficiales y aguas tranquilas en verano.
            </li>
            <li>
              <strong>Isla de las Palomas en Tarifa (Cádiz):</strong> punto de encuentro entre el Atlántico y el Mediterráneo, con gran riqueza de vida y presencia estacional de <Link href="/fauna/pez-luna" className="text-link">pez luna</Link>, sujeto a las condiciones de viento y marea del Estrecho.
            </li>
          </ul>
          <p>
            👉 <Link href="/guias/mejor-epoca-para-bucear-en-espana" className="text-link">Consulta cuándo es la mejor época para bucear en cada región →</Link>
          </p>

          <div className="cta-section" style={{ paddingBottom: 0 }}>
            <div className="cta-panel">
              <div>
                <span className="eyebrow">ELIGE TU DESTINO</span>
                <h2>Explora los destinos y casi 900 actividades</h2>
                <p>
                  Compara puntos de inmersión, escuelas locales y opciones de reserva en toda la costa española.
                </p>
              </div>
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                <Link className="button button-primary" href="/destinos">
                  Ver todos los destinos →
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
