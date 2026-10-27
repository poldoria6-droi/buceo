import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildArticleJsonLd } from "@/lib/seo";

export const metadata = {
  title: "Bautismo de Buceo vs Curso Open Water · Diferencias y Precios",
  description:
    "¿Dudas entre probar un bautismo de buceo o sacarte directamente el título Open Water Diver? Comparamos duración, profundidad, precios y requisitos.",
  alternates: {
    canonical: "/guias/bautismo-vs-curso-open-water",
  },
  openGraph: {
    title: "Bautismo de Buceo vs Curso Open Water | Buceo Atlas",
    description:
      "Comparativa práctica para saber si empezar por un bautismo submarino o hacer directamente el curso Open Water Diver.",
    url: "/guias/bautismo-vs-curso-open-water",
    type: "article",
  },
};

export default function BaptismVsOpenWaterPage() {
  const articleJsonLd = buildArticleJsonLd({
    title: "Bautismo de Buceo vs Curso Open Water · Diferencias y Precios",
    description:
      "¿Dudas entre probar un bautismo de buceo o sacarte directamente el título Open Water Diver? Comparamos duración, profundidad, precios y requisitos.",
    path: "/guias/bautismo-vs-curso-open-water",
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
            { name: "Bautismo vs Open Water", path: "/guias/bautismo-vs-curso-open-water" },
          ]}
        />
        <span className="eyebrow">PRINCIPIANTES · PRIMERA DECISIÓN</span>
        <h1>Bautismo de buceo vs Curso Open Water: ¿por cuál empezar?</h1>
        <p className="lead">
          Casi todo el mundo que quiere probar a respirar bajo el agua se hace la misma pregunta antes de reservar: ¿empiezo con un <strong>bautismo de una mañana</strong> para ver qué se siente, o me lanzo directamente a sacarme el <strong>título Open Water Diver</strong>?
        </p>

        <div className="guide-article">
          <div className="vs-grid">
            <div className="vs-card">
              <span className="eyebrow">EXPERIENCIA DE UN DÍA</span>
              <h3>🤿 Bautismo de buceo</h3>
              <p>
                Es tu primera cita con el mar sin exámenes ni deberes. Llegas al centro, te dan una charla sencilla de 20 minutos y bajas de la mano de un instructor que se ocupa de tus botones y tu flotabilidad para que tú solo mires los peces.
              </p>
              <ul>
                <li><strong>Tiempo:</strong> una mañana o una tarde (2 a 3 horas).</li>
                <li><strong>Profundidad:</strong> entre 5 y 10 metros.</li>
                <li><strong>Precio habitual:</strong> entre 60 € y 95 €.</li>
                <li><strong>Al terminar:</strong> te llevas el recuerdo (y a veces diploma o fotos), pero no un carnet para bucear por tu cuenta.</li>
              </ul>
            </div>

            <div className="vs-card">
              <span className="eyebrow">CARNET PARA TODA LA VIDA</span>
              <h3>🎓 Curso Open Water Diver</h3>
              <p>
                Aquí ya no te llevan de la mano: aprendes a ser buceador. Entiendes cómo funciona tu equipo, cómo mantenerte ingrávido sin tocar el fondo y cómo resolver imprevistos bajo el agua junto a tu compañero.
              </p>
              <ul>
                <li><strong>Tiempo:</strong> 3 a 4 días en la costa (más teoría online en casa).</li>
                <li><strong>Profundidad:</strong> certificado hasta 18 metros.</li>
                <li><strong>Precio habitual:</strong> entre 360 € y 490 € todo incluido.</li>
                <li><strong>Al terminar:</strong> tienes tu carnet oficial (PADI o SSI) válido para siempre en cualquier mar del mundo.</li>
              </ul>
            </div>
          </div>

          <div className="editorial-tip">
            <p>
              💡 <strong>El truco que poca gente pregunta en el centro:</strong> si dispones de varios días pero no estás seguro de si te vas a agobiar bajo el agua, pregúntale a la escuela antes de empezar si hacen el <em>bautismo convalidable</em>. En muchos centros de España, si sales del bautismo entusiasmado, te descuentan lo que has pagado y te cuentan esa inmersión como la primera práctica del Open Water.
            </p>
          </div>

          <h2>La diferencia real cuando estás en el agua</h2>
          <p>
            La primera vez que metes la cabeza debajo del agua y respiras por un regulador, tu cerebro tarda un par de minutos en aceptar que puedes inhalar sin sacar la nariz a la superficie. En un <Link href="/guias/bautismo-de-buceo-en-espana" className="text-link">bautismo de buceo</Link>, toda la experiencia está pensada para que ese momento sea facilísimo: no tienes que quitarte las gafas bajo el agua, ni mirar tablas, ni hinchar o deshinchar tu chaleco. El instructor va pegado a ti regulando el aire.
          </p>
          <p>
            En el <strong>curso Open Water</strong>, en cambio, pasas por aguas tranquilas (piscina o una cala que cubre por la cintura) para practicar esos pequeños gestos que te dan autonomía: vaciar el agua si se te empaña la máscara, recuperar el regulador si se te escapa de la boca o compartir aire con tu compañero. Al tercer día, cuando bajas a 15 o 18 metros en mar abierto y sientes que flotas a media agua por ti mismo, la sensación no tiene nada que ver con ir «de paquete».
          </p>

          <h2>Comparativa de un vistazo</h2>
          <div style={{ overflowX: "auto", margin: "1.5rem 0 2rem" }}>
            <table>
              <thead>
                <tr>
                  <th>Qué cambia</th>
                  <th>Bautismo de buceo</th>
                  <th>Curso Open Water Diver</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>¿Sales con título oficial?</strong></td>
                  <td>No, es una salida puntual guiada.</td>
                  <td>Sí, carnet internacional sin fecha de caducidad.</td>
                </tr>
                <tr>
                  <td><strong>¿Cuánto tiempo te pide?</strong></td>
                  <td>Unas 3 horas en total.</td>
                  <td>3–4 días de prácticas + teoría online a tu ritmo.</td>
                </tr>
                <tr>
                  <td><strong>¿Hay que estudiar o hacer ejercicios?</strong></td>
                  <td>Solo escuchar una charla de 20 minutos antes de entrar.</td>
                  <td>Sí: test teórico sencillo y ejercicios prácticos bajo el agua.</td>
                </tr>
                <tr>
                  <td><strong>Inmersiones en el mar</strong></td>
                  <td>1 inmersión (o 2 si contratas bautismo doble).</td>
                  <td>Sesiones de aguas confinadas + 4 inmersiones en mar abierto.</td>
                </tr>
                <tr>
                  <td><strong>Cuánto cuesta en España</strong></td>
                  <td>Entre 60 € y 95 € de media.</td>
                  <td>Entre 360 € y 490 € con equipo y tasas incluidas.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>¿Cuándo compensa cada uno en dinero y tiempo?</h2>
          <p>
            Haz números sencillos: si solo vas a bucear una vez este verano con tu pareja o tus amigos porque estás pasando el fin de semana en <Link href="/buceo/tossa-de-mar" className="text-link">Tossa de Mar</Link>, <Link href="/buceo/mallorca" className="text-link">Mallorca</Link> o <Link href="/buceo/la-herradura" className="text-link">La Herradura</Link>, no te compliques la vida estudiando teoría en el hotel: reserva un bautismo y disfrútalo.
          </p>
          <p>
            Ahora bien, si te atrae el mar, haces snorkel cada verano y te ves viajando en el futuro a sitios como <Link href="/buceo/el-hierro" className="text-link">El Hierro</Link>, <Link href="/buceo/cabo-de-palos" className="text-link">Cabo de Palos</Link>, <Link href="/buceo/lanzarote" className="text-link">Lanzarote</Link> o el Mar Rojo, el curso Open Water se amortiza rapidísimo: en cuanto tienes tu carnet, cada salida en barco (<em>Fun Dive</em>) cuesta entre 38 € y 50 € en lugar de los 80 € de repetir bautismos a poca profundidad.
          </p>
          <p>
            Si te decides por el curso, échale un vistazo antes a las <Link href="/guias/padi-vs-ssi-diferencias" className="text-link">diferencias reales entre PADI y SSI</Link> y a los <Link href="/guias/requisitos-para-bucear-en-espana" className="text-link">requisitos médicos y de espera antes de volar</Link>.
          </p>

          <div className="cta-section" style={{ paddingBottom: 0 }}>
            <div className="cta-panel">
              <div>
                <span className="eyebrow">ELIGE TU MODALIDAD</span>
                <h2>Compara precios reales en tu destino</h2>
                <p>
                  Filtra por bautismos o cursos Open Water en cualquier punto de la costa española.
                </p>
              </div>
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                <Link className="button button-primary" href="/actividades/#type=Bautismo">
                  Ver bautismos →
                </Link>
                <Link className="button button-ghost" href="/actividades/#type=Curso">
                  Ver cursos Open Water
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
