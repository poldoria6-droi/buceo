import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildArticleJsonLd } from "@/lib/seo";

export const metadata = {
  title: "Cómo Elegir Escuela o Centro de Buceo en España · Guía Práctica",
  description:
    "Qué comprobar antes de reservar un curso o salida de buceo: ratios por instructor, estado del material, logística de barco, seguros e instalaciones.",
  alternates: {
    canonical: "/guias/como-elegir-escuela-de-buceo",
  },
  openGraph: {
    title: "Cómo Elegir Escuela o Centro de Buceo en España | Buceo Atlas",
    description:
      "7 criterios prácticos para comparar escuelas y centros de submarinismo antes de reservar tu bautismo o curso.",
    url: "/guias/como-elegir-escuela-de-buceo",
    type: "article",
  },
};

export default function HowToChooseDiveCenterPage() {
  const articleJsonLd = buildArticleJsonLd({
    title: "Cómo Elegir Escuela o Centro de Buceo en España · Guía Práctica",
    description:
      "Qué comprobar antes de reservar un curso o salida de buceo: ratios por instructor, estado del material, logística de barco y seguros.",
    path: "/guias/como-elegir-escuela-de-buceo",
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
            { name: "Cómo elegir escuela de buceo", path: "/guias/como-elegir-escuela-de-buceo" },
          ]}
        />
        <span className="eyebrow">CONSEJOS DE BUCEADOR</span>
        <h1>En qué fijarse para elegir un buen centro de buceo (y no equivocarse)</h1>
        <p className="lead">
          Llegas a un puerto de la Costa Brava, de Murcia o de Tenerife y tienes seis centros de buceo en la misma calle con precios que varían apenas diez euros. ¿Cómo distingues cuál te va a dar un trato de diez y en cuál vas a ir con prisas?
        </p>

        <div className="guide-article">
          <div className="editorial-tip">
            <p>
              🔍 <strong>La prueba del algodón nada más entrar al centro:</strong> fíjate en la zona húmeda donde cuelgan los trajes y los reguladores de alquiler. Si los neoprenos están ordenados por tallas sin siete parches en las rodillas y las piletas de endulzar el material tienen el agua limpia, estás en buenas manos.
            </p>
          </div>

          <h2>Cuánta gente baja con el instructor en el agua</h2>
          <p>
            Es la pregunta que más cambia tu experiencia, sobre todo si vas a hacer tu primer <Link href="/guias/bautismo-de-buceo-en-espana" className="text-link">bautismo de buceo</Link> o el curso Open Water. Bajar al agua con un instructor pendiente de 2 personas no tiene nada que ver con un grupo grande donde tienes que esperar de rodillas en la arena diez minutos mientras todos terminan un ejercicio.
          </p>
          <p>
            En las salidas para buceadores ya titulados (<em>Fun Dives</em>) pasa igual: los buenos centros dividen los barcos en subgrupos pequeños según el nivel y el consumo de aire para que nadie tenga que salirse del agua a los 30 minutos porque otro compañero haya gastado la botella rápido.
          </p>

          <h2>Dónde está el barco (y cuánto vas a cargar con la botella a cuestas)</h2>
          <p>
            Una botella de acero de 12 o 15 litros más el cinturón de plomos pesan cerca de 20 kilos en seco. Antes de elegir centro, mira cómo es su día a día:
          </p>
          <ul>
            <li>
              <strong>Centros a pie de muelle o cala:</strong> te vistes en el vestuario, caminas treinta pasos o subes un carrito con tu caja hasta la embarcación y al volver te das una ducha caliente enseguida.
            </li>
            <li>
              <strong>Centros con traslado en furgoneta:</strong> muy habituales en cascos históricos o playas sin puerto. No tienen nada de malo —muchos de los mejores centros familiares funcionan así—, pero agradeces saberlo de antemano si vas a hacer dos inmersiones seguidas en la mañana.
            </li>
          </ul>

          <h2>La letra pequeña del precio: qué preguntar antes de comparar</h2>
          <p>
            A veces un centro parece 25 € más barato que el de al lado hasta que sumas lo que se paga aparte en mostrador. Comprueba siempre estos tres puntos:
          </p>
          <ul>
            <li>
              <strong>En salidas para titulados:</strong> el precio base suele incluir barco, guía, botella y plomos. Si no llevas <Link href="/guias/que-equipo-necesito-para-empezar-a-bucear" className="text-link">tu propio equipo</Link>, pregunta cuánto cobran por el alquiler completo del día (suele rondar entre 15 € y 25 €).
            </li>
            <li>
              <strong>En reservas marinas protegidas:</strong> bucear dentro de reservas como <Link href="/buceo/illes-medes" className="text-link">Illes Medes</Link>, <Link href="/buceo/cabo-de-palos" className="text-link">Islas Hormigas en Cabo de Palos</Link> o <Link href="/buceo/cabrera" className="text-link">Cabrera</Link> conlleva una tasa ambiental oficial de unos pocos euros por inmersión.
            </li>
            <li>
              <strong>En cursos Open Water:</strong> confirma que el precio final incluya tanto el material digital de estudio como las tasas de emisión de la certificación (<Link href="/guias/padi-vs-ssi-diferencias" className="text-link">PADI o SSI</Link>) y el seguro durante los días del curso.
            </li>
          </ul>

          <h2>Cómo dan el briefing antes de tirarse al agua</h2>
          <p>
            Un buen guía nunca te dice simplemente «seguidme y cuando os quede media botella me avisáis». Antes de soltar amarras te dibuja o explica el relieve del fondo, la profundidad máxima, de dónde viene la corriente ese día, qué <Link href="/fauna" className="text-link">especies marinas</Link> suelen esconderse en las grietas y qué hacer si alguien se despista un momento del grupo. Esa charla de cinco minutos en cubierta es lo que da tranquilidad y convierte una inmersión normal en un recuerdo redondo.
          </p>

          <div className="cta-section" style={{ paddingBottom: 0 }}>
            <div className="cta-panel">
              <div>
                <span className="eyebrow">DIRECTORIO DE CENTROS EN ESPAÑA</span>
                <h2>Explora más de 210 centros y escuelas por zona</h2>
                <p>
                  Consulta sus valoraciones reales, los puntos de inmersión donde trabajan y sus precios activos.
                </p>
              </div>
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                <Link className="button button-primary" href="/centros">
                  Ver centros de buceo →
                </Link>
                <Link className="button button-ghost" href="/actividades">
                  Ver actividades y precios
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
