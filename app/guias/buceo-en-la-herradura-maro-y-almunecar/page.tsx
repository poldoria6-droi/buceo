import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildArticleJsonLd } from "@/lib/seo";

const faqs = [
  {
    question: "¿Cuánto cuesta un bautismo de buceo en La Herradura o Marina del Este?",
    answer:
      "Un bautismo de buceo en La Herradura y Almuñécar cuesta entre 63 € y 77 € por persona (o desde 122 € el pack especial para parejas), con todo el equipo completo, seguro, clase previa e inmersión guiada en aguas tranquilas incluidos.",
  },
  {
    question: "¿Qué zona es mejor para bucear en La Herradura: Marina del Este, Punta de la Mona o Cerro Gordo?",
    answer:
      "Si es tu primer bautismo, estás haciendo el curso Open Water o buscas fotografía macro (nudibranquios y caballitos de mar) entrando cómodamente desde la orilla, la playa de Los Berengueles en Marina del Este es perfecta. Si ya tienes titulación y buscas paredes verticales tapizadas de coral naranja, cuevas y vida pelágica, lo ideal es salir en barco desde el puerto deportivo hacia la Punta de la Mona o los acantilados del Paraje Natural de Maro–Cerro Gordo.",
  },
  {
    question: "¿Qué lado de la bahía elegir según sople viento de levante o de poniente?",
    answer:
      "La Herradura es una bahía en forma de U protegida por dos grandes cabos. Cuando sopla viento de poniente (oeste), los acantilados de Cerro Gordo frenan el oleaje en el sector occidental; cuando entra viento de levante (este), la Punta de la Mona deja como un plato la playa de Marina del Este y Los Berengueles. Por eso se puede bucear prácticamente los 365 días del año.",
  },
  {
    question: "¿Qué traje de neopreno hace falta para bucear en La Herradura?",
    answer:
      "Aunque en verano la superficie alcanza los 22–24 °C, en la Costa Tropical entran corrientes y afloramientos de aguas atlánticas más frescas a partir de los 12–15 metros. Por eso las escuelas locales suelen facilitar neoprenos de 7 mm o semisecos durante casi todo el año (y 5 mm con chaleco de calor en pleno julio y agosto).",
  },
];

export const metadata = {
  title: "Buceo en La Herradura, Marina del Este y Maro: Precios y Zonas",
  description:
    "Guía práctica para bucear en La Herradura y Almuñécar: precios reales de bautismos (desde 63 €) y cursos Open Water, Marina del Este vs Cerro Gordo y escuelas.",
  alternates: {
    canonical: "/guias/buceo-en-la-herradura-maro-y-almunecar",
  },
  openGraph: {
    title: "Buceo en La Herradura, Marina del Este y Maro: Precios y Zonas | Buceo Atlas",
    description:
      "Compara precios de bautismos y cursos PADI/SSI en La Herradura, diferencias entre bucear desde playa en Marina del Este o en barco por Maro-Cerro Gordo.",
    url: "/guias/buceo-en-la-herradura-maro-y-almunecar",
    type: "article",
  },
};

export default function LaHerraduraDivingGuidePage() {
  const articleJsonLd = buildArticleJsonLd({
    title: "Buceo en La Herradura, Marina del Este y Maro: Precios y Zonas",
    description:
      "Guía práctica para bucear en La Herradura y Almuñécar: precios reales de bautismos (desde 63 €) y cursos Open Water, Marina del Este vs Cerro Gordo y escuelas.",
    path: "/guias/buceo-en-la-herradura-maro-y-almunecar",
    datePublished: "2026-11-19",
    dateModified: "2026-11-19",
    faqs,
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
            { name: "Buceo en La Herradura, Marina del Este y Maro", path: "/guias/buceo-en-la-herradura-maro-y-almunecar" },
          ]}
        />
        <span className="eyebrow">GUÍA DE DESTINO · COSTA TROPICAL DE GRANADA</span>
        <h1>Buceo en La Herradura, Marina del Este y Maro–Cerro Gordo: precios, mejores zonas y dónde reservar</h1>
        <p className="lead">
          La bahía de <Link href="/buceo/la-herradura" className="text-link">La Herradura</Link> (en el municipio de Almuñécar, Granada) es el destino de buceo más activo de Andalucía por una razón geográfica muy simple: está encajada entre dos enormes muros de roca —la <strong>Punta de la Mona</strong> al este y los acantilados de <strong>Maro–Cerro Gordo</strong> al oeste— que garantizan tener siempre una cara del mar completamente en calma, ya sople levante o poniente.
        </p>

        <div className="guide-article">
          <h2>Precios reales de bautismos, cursos e inmersiones en La Herradura y Almuñécar</h2>
          <p>
            Hemos recopilado las tarifas actuales verificadas en los centros del puerto deportivo de Marina del Este, la playa de La Herradura y el paseo de Almuñécar (con descuento activo de campaña incluido):
          </p>

          <div style={{ overflowX: "auto", margin: "1.25rem 0 1.75rem" }}>
            <table>
              <thead>
                <tr>
                  <th>Modalidad</th>
                  <th>Experiencia en La Herradura / Almuñécar</th>
                  <th>Duración</th>
                  <th>Precio actual</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Bautismo + Fotos</strong></td>
                  <td>
                    <Link href="/actividades/bautismo-de-buceo-en-la-herradura-con-fotos-436" className="text-link">
                      Bautismo de buceo en La Herradura con reportaje de fotos
                    </Link>
                  </td>
                  <td>2–3 horas</td>
                  <td><strong>Desde 63 €</strong></td>
                </tr>
                <tr>
                  <td><strong>Bautismo en Almuñécar</strong></td>
                  <td>
                    <Link href="/actividades/bautizo-de-buceo-en-almunecar-granada-29841" className="text-link">
                      Bautizo de buceo guiado en la costa de Almuñécar
                    </Link>
                  </td>
                  <td>2,5 horas</td>
                  <td><strong>Desde 63 €</strong></td>
                </tr>
                <tr>
                  <td><strong>Bautismo Marina del Este</strong></td>
                  <td>
                    <Link href="/actividades/bautizo-de-buceo-personalizado-marina-del-este-2h-220" className="text-link">
                      Bautizo de buceo personalizado en Marina del Este
                    </Link>
                  </td>
                  <td>2 horas</td>
                  <td><strong>Desde 70 €</strong></td>
                </tr>
                <tr>
                  <td><strong>Bautismo en Pareja</strong></td>
                  <td>
                    <Link href="/actividades/bautizo-de-buceo-para-parejas-en-la-herradura-5h-221" className="text-link">
                      Pack bautizo de buceo para parejas en La Herradura
                    </Link>
                  </td>
                  <td>Mañana completa</td>
                  <td><strong>Desde 122 € (total 2 pers.)</strong></td>
                </tr>
                <tr>
                  <td><strong>Curso Open Water</strong></td>
                  <td>
                    <Link href="/actividades/padi-open-water-diver-en-almunecar-4-dias-29750" className="text-link">
                      Curso oficial PADI Open Water Diver en Almuñécar
                    </Link>
                  </td>
                  <td>4 días</td>
                  <td><strong>Desde 351 €</strong></td>
                </tr>
                <tr>
                  <td><strong>Curso Open Water</strong></td>
                  <td>
                    <Link href="/actividades/curso-open-water-de-buceo-la-herradura-223" className="text-link">
                      Curso Open Water Diver en la bahía de La Herradura
                    </Link>
                  </td>
                  <td>3–4 días</td>
                  <td><strong>Desde 356 €</strong></td>
                </tr>
                <tr>
                  <td><strong>Curso Advanced</strong></td>
                  <td>
                    <Link href="/actividades/padi-advanced-open-water-la-herradura-225" className="text-link">
                      Curso PADI Advanced Open Water en La Herradura
                    </Link>
                  </td>
                  <td>2–3 días</td>
                  <td><strong>Desde 360 €</strong></td>
                </tr>
                <tr>
                  <td><strong>Inmersión titulados</strong></td>
                  <td>
                    <Link href="/actividades/inmersion-con-equipo-en-la-herradura-4-horas-227" className="text-link">
                      Salida de inmersión guiada con equipo completo incluido
                    </Link>
                  </td>
                  <td>1 salida</td>
                  <td><strong>Desde 41 € – 45 €</strong></td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Comparativa de las 3 zonas: ¿Marina del Este, Punta de la Mona o Maro–Cerro Gordo?</h2>
          <p>
            Aunque las tres zonas están separadas por menos de 10 minutos de navegación, el tipo de entrada al agua y el paisaje submarino cambian por completo:
          </p>

          <div className="vs-grid">
            <div className="vs-card">
              <span className="eyebrow">MEJOR PARA BAUTISMOS, CURSOS E INFANTERÍA</span>
              <h3>1. Playa de Marina del Este (Los Berengueles)</h3>
              <p>
                Es la famosa playa situada justo al lado del puerto deportivo de Marina del Este. Se entra caminando desde la orilla sin necesidad de barco y queda resguardada del viento de levante.
              </p>
              <ul>
                <li><strong>Profundidad progresiva (4 a 22 m):</strong> ideal para perder el miedo en tu primer bautismo o practicar flotabilidad en el curso Open Water.</li>
                <li><strong>Paraíso de la fotografía macro:</strong> entre las rocas y bloques de la escollera se esconden decenas de especies de nudibranquios (como la <Link href="/fauna/vaquita-suiza" className="text-link">vaquita suiza</Link>), pulpos, sepias y caballitos de mar.</li>
              </ul>
            </div>

            <div className="vs-card">
              <span className="eyebrow">MEJOR PARA TITULADOS Y PAREDES DE CORAL NARANJA</span>
              <h3>2. Punta de la Mona y Paraje de Maro–Cerro Gordo</h3>
              <p>
                Son los dos cabos protegidos (Zona de Especial Conservación en <Link href="/buceo/granada" className="text-link">Granada</Link> y Paraje Natural en el límite con <Link href="/buceo/nerja" className="text-link">Nerja</Link>) a los que se accede en zodiac en 5–10 minutos desde el puerto o la playa.
              </p>
              <ul>
                <li><strong>Tapices de coral naranja (<em>Astroides calycularis</em>):</strong> paredes verticales que caen hasta los 28–35 metros cubiertas de coral naranja, gorgonias, espirógrafos, grandes congrios y <Link href="/fauna/mero-moreno" className="text-link">meros</Link>.</li>
                <li><strong>Encuentros especiales:</strong> en puntos como La Piedra del Hombre o La Calita es frecuente cruzarse con el <Link href="/fauna/pez-luna" className="text-link">pez luna (<em>Mola mola</em>)</Link> limpiándose a media agua.</li>
              </ul>
            </div>
          </div>

          <div className="editorial-tip">
            <p>
              🧭 <strong>La regla de oro del viento en La Herradura:</strong> si el parte anuncia <strong>viento de levante (este)</strong>, elige siempre inmersión o bautismo en el lado de <strong>Marina del Este / Los Berengueles</strong> (queda hecho un espejo). Si anuncia <strong>viento de poniente (oeste)</strong>, los barcos fondean al abrigo de los acantilados de <strong>Cerro Gordo y Cantarriján</strong>.
            </p>
          </div>

          <h2>Escuelas y centros de buceo verificados en La Herradura y Almuñécar</h2>
          <p>
            En nuestro directorio puedes consultar las fichas y actividades directas de los centros que operan en la bahía y en el puerto deportivo:
          </p>
          <ul>
            <li>
              <strong><Link href="/centros/buceo-marina-19725165" className="text-link">Buceo Marina (La Herradura)</Link>:</strong> salidas en barco por la bahía, bautismos con fotos y cursos PADI desde nivel iniciación hasta Rescue Diver.
            </li>
            <li>
              <strong><Link href="/centros/almunecar-dive-center-3665" className="text-link">Almuñécar Dive Center (Almuñécar)</Link>:</strong> especialista en bautismos, cursos PADI de 2 a 4 días, Nitrox e inmersiones con equipo completo incluido.
            </li>
            <li>
              <strong><Link href="/centros/buceo-aqualia-19635523" className="text-link">Buceo Aqualia (La Herradura)</Link>:</strong> bautismos desde playa en grupos reducidos de 30 minutos de inmersión efectiva.
            </li>
          </ul>

          <h2>Preguntas frecuentes sobre bucear en La Herradura</h2>
          <div style={{ display: "grid", gap: "0.75rem", marginTop: "1rem", marginBottom: "2rem" }}>
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="notice-card"
                style={{ margin: 0, cursor: "pointer" }}
              >
                <summary style={{ fontWeight: 700, fontSize: "1.05rem" }}>
                  {faq.question}
                </summary>
                <p style={{ marginTop: "0.65rem", marginBottom: 0 }}>{faq.answer}</p>
              </details>
            ))}
          </div>

          <div className="cta-section" style={{ paddingBottom: 0 }}>
            <div className="cta-panel">
              <div>
                <span className="eyebrow">RESERVA ONLINE EN LA COSTA TROPICAL</span>
                <h2>Compara todas las salidas y bautismos en La Herradura</h2>
                <p>
                  Consulta disponibilidad en tiempo real, precios desde 63 € con equipo incluido y puntos de inmersión en el mapa.
                </p>
              </div>
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                <Link className="button button-primary" href="/buceo/la-herradura">
                  Ver destino La Herradura →
                </Link>
                <Link className="button button-ghost" href="/actividades/#destination=La%20Herradura">
                  Ver en el buscador y mapa
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
