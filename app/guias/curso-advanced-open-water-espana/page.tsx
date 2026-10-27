import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildArticleJsonLd } from "@/lib/seo";

export const metadata = {
  title: "Curso Advanced Open Water en España: Precio, Inmersiones y Cuándo Hacerlo",
  description:
    "¿En qué consiste el curso Advanced Open Water (PADI o SSI)? Cuántas inmersiones tiene, cuánto cuesta en España, requisitos y por qué te abre los mejores pecios y reservas.",
  alternates: {
    canonical: "/guias/curso-advanced-open-water-espana",
  },
  openGraph: {
    title: "Curso Advanced Open Water en España: Precio, Requisitos e Inmersiones | Buceo Atlas",
    description:
      "Guía práctica del curso Advanced Open Water: 5 inmersiones de aventura, bajada a 30 metros, precios reales en España y mejores zonas para sacártelo.",
    url: "/guias/curso-advanced-open-water-espana",
    type: "article",
  },
};

export default function AdvancedOpenWaterGuidePage() {
  const articleJsonLd = buildArticleJsonLd({
    title: "Curso Advanced Open Water en España: Precio, Inmersiones y Cuándo Hacerlo",
    description:
      "¿En qué consiste el curso Advanced Open Water (PADI o SSI)? Cuántas inmersiones tiene, cuánto cuesta en España, requisitos y por qué te abre los mejores pecios y reservas.",
    path: "/guias/curso-advanced-open-water-espana",
    datePublished: "2026-10-27",
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
            { name: "Curso Advanced Open Water", path: "/guias/curso-advanced-open-water-espana" },
          ]}
        />
        <span className="eyebrow">SUBIR DE NIVEL · 30 METROS</span>
        <h1>Curso Advanced Open Water en España: precio, en qué consiste y cuándo merece la pena</h1>
        <p className="lead">
          El nombre «Advanced» engaña a mucha gente: no necesitas tener 100 inmersiones ni ser un veterano para apuntarte. De hecho, está pensado para que ganes soltura en el agua después del Open Water, bajes con seguridad hasta los <strong>30 metros</strong> y puedas entrar en reservas marinas y barcos hundidos donde el primer título se queda corto.
        </p>

        <div className="guide-article">
          <h2>¿En qué consiste el curso Advanced? (Cero piscina, todo mar)</h2>
          <p>
            A diferencia del <Link href="/guias/bautismo-vs-curso-open-water" className="text-link">curso Open Water</Link>, en el Advanced (tanto en PADI como en el <em>Advanced Adventurer</em> de <Link href="/guias/padi-vs-ssi-diferencias" className="text-link">SSI</Link>) <strong>no hay clases de piscina ni exámenes largos</strong>. Es un curso 100 % práctico que se completa en un fin de semana largo (2 o 3 días) a base de hacer <strong>5 inmersiones en el mar</strong>, cada una centrada en una habilidad distinta:
          </p>
          <ul>
            <li>
              <strong>1. Inmersión Profunda (obligatoria):</strong> bajas con tu instructor entre los 18 y los <strong>30 metros de profundidad</strong>. Aprenderás a gestionar el consumo de aire (que a 30 metros se gasta el doble de rápido que a 10), comprobarás cómo cambian los colores con una linterna y vigilarás tu tiempo límite sin descompresión en el ordenador.
            </li>
            <li>
              <strong>2. Navegación Subacuática (obligatoria):</strong> si alguna vez has dado vueltas bajo el agua sin saber dónde estaba el cabo del barco, esta inmersión te cambia la vida. Aprenderás a trazar rumbos rectos y cuadrados con brújula y a orientarte con referencias naturales del fondo (rizaduras de la arena, rocas y corrientes).
            </li>
            <li>
              <strong>3. Tres inmersiones electivas a elegir con tu escuela:</strong> las tres más útiles y habituales en España son <strong>Dominio de la Flotabilidad</strong> (clave para no levantar arena y consumir mucho menos aire), <strong>Buceo Nocturno</strong> (entrar al mar con foco al anochecer) y <Link href="/guias/buceo-en-pecios-en-espana" className="text-link">Buceo en Pecios</Link> o con aire enriquecido <strong>Nitrox</strong>.
            </li>
          </ul>

          <h2>¿Cuánto cuesta el Advanced Open Water en España?</h2>
          <p>
            Como son 5 salidas de mar en barco y tasas de certificación internacional, el precio es bastante parecido al de un bono de 5 inmersiones con equipo más un suplemento por el instructor y el carnet:
          </p>
          <div style={{ overflowX: "auto", margin: "1.25rem 0 1.75rem" }}>
            <table>
              <thead>
                <tr>
                  <th>Modalidad</th>
                  <th>Precio medio en España</th>
                  <th>Qué suele incluir</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Curso Advanced Open Water (estándar)</strong></td>
                  <td>310 € – 390 €</td>
                  <td>Teoría online, 5 inmersiones en mar, botellas, plomos y certificación</td>
                </tr>
                <tr>
                  <td><strong>Curso Advanced + Especialidad Nitrox</strong></td>
                  <td>395 € – 470 €</td>
                  <td>El pack más recomendable: sales con carnet a 30 m y habilitación Nitrox</td>
                </tr>
                <tr>
                  <td><strong>Suplemento por alquiler de equipo completo</strong></td>
                  <td>Incluido o +30 / 50 €</td>
                  <td>Pregúntalo siempre antes: algunas escuelas lo incluyen y otras lo cobran aparte</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="editorial-tip">
            <p>
              💡 <strong>El combo ganador (Advanced + Nitrox):</strong> cuando bajas a 25 o 30 metros a ver un pecio, lo primero que te obliga a subir no suele ser la falta de aire, sino el tiempo límite sin descompresión (NDL) de tu ordenador. Si haces el curso Advanced combinándolo con la especialidad de <strong>Nitrox (EANx)</strong>, aprovecharás una de las 5 inmersiones para sacarte los dos títulos a la vez y ahorrarte entre 60 € y 80 €.
            </p>
          </div>

          <h2>¿Cuándo merece la pena sacárselo? ¿Cuántas inmersiones necesito antes?</h2>
          <p>
            Sobre el papel puedes empezar el Advanced al día siguiente de terminar el Open Water (con solo 4 inmersiones en tu logbook). Sin embargo, nuestra recomendación sincera es que <strong>hagas primero entre 10 y 15 inmersiones tranquilas por tu cuenta</strong> tras sacarte el Open Water, hasta que vaciar la máscara o ajustar el chaleco te salga sin pensar.
          </p>
          <p>
            A partir de ahí, el Advanced merece muchísimo la pena por tres motivos muy concretos en España:
          </p>
          <ul>
            <li>
              <strong>Te abre las reservas marinas españolas:</strong> en joyas como <Link href="/buceo/cabo-de-palos" className="text-link">Cabo de Palos (Islas Hormigas)</Link>, las <Link href="/buceo/illes-medes" className="text-link">Illes Medes</Link> o el Bajón en <Link href="/buceo/el-hierro" className="text-link">El Hierro</Link>, los bajos principales caen entre los 20 y los 28 metros y los centros piden nivel Advanced o experiencia demostrable.
            </li>
            <li>
              <strong>Puedes bajar a los mejores barcos hundidos:</strong> pecios míticos como el <em>Boreas</em> en <Link href="/buceo/palamos" className="text-link">Palamós</Link> (18–32 m), el <em>Naranjito</em> en Cabo de Palos (28–42 m) o los pecios de Mogán en <Link href="/buceo/gran-canaria" className="text-link">Gran Canaria</Link> están fuera del límite de 18 metros del Open Water.
            </li>
            <li>
              <strong>Es requisito en casi cualquier viaje internacional:</strong> si algún día sueñas con ir al Mar Rojo, Maldivas o un vida a bordo, el 90 % de las rutas exigen titulación Advanced + Nitrox.
            </li>
          </ul>

          <h2>Dónde hacer el curso Advanced en España para disfrutarlo el doble</h2>
          <p>
            Como el curso consiste básicamente en hacer 5 buenas inmersiones, elígele un escenario donde cada bajada sea un espectáculo:
          </p>
          <ul>
            <li>
              <strong><Link href="/buceo/lanzarote" className="text-link">Lanzarote</Link> (Playa Chica):</strong> posiblemente el sitio más cómodo de España para el Advanced. En la misma bahía tienes pared profunda a 30 metros, los pecios de Puerto del Carmen para la inmersión de barcos hundidos y una de las mejores nocturnas de Europa entrando desde la misma arena.
            </li>
            <li>
              <strong><Link href="/buceo/tossa-de-mar" className="text-link">Tossa de Mar</Link> o <Link href="/buceo/la-herradura" className="text-link">La Herradura</Link>:</strong> ideales para clavar la inmersión de orientación con brújula y la nocturna entre congrios y pulpos, combinándolo con una salida en barco a 25–30 metros.
            </li>
            <li>
              <strong><Link href="/buceo/cabo-de-palos" className="text-link">Cabo de Palos</Link> o <Link href="/buceo/lestartit" className="text-link">L’Estartit (Illes Medes)</Link>:</strong> si ya llevas quince o veinte inmersiones y quieres que tu inmersión profunda sea directamente rodeado de meros gigantes y bancos de barracudas.
            </li>
          </ul>

          <div className="cta-section" style={{ paddingBottom: 0 }}>
            <div className="cta-panel">
              <div>
                <span className="eyebrow">CURSOS AVANZADOS Y ESPECIALIDADES</span>
                <h2>Compara cursos de buceo por destino</h2>
                <p>
                  Filtra por cursos en tu zona o busca centros certificadores PADI y SSI en toda la costa española.
                </p>
              </div>
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                <Link className="button button-primary" href="/actividades/#type=Curso">
                  Ver cursos de buceo →
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
