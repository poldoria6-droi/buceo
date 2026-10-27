import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildArticleJsonLd } from "@/lib/seo";

export const metadata = {
  title: "¿Se Puede Bucear con Lentillas o Gafas? Máscara Graduada vs Lentillas",
  description:
    "¿Tienes miopía, hipermetropía o astigmatismo y quieres bucear? Te explicamos por qué no puedes llevar tus gafas dentro de la máscara y si es mejor usar lentillas o cristales graduados.",
  alternates: {
    canonical: "/guias/bucear-con-gafas-o-lentillas",
  },
  openGraph: {
    title: "¿Se Puede Bucear con Lentillas o Gafas? Soluciones Reales | Buceo Atlas",
    description:
      "Lentillas diarias blandas vs máscara de buceo graduada: precios, ventajas y trucos para ver nítido bajo el agua.",
    url: "/guias/bucear-con-gafas-o-lentillas",
    type: "article",
  },
};

export default function DivingWithGlassesOrContactsPage() {
  const articleJsonLd = buildArticleJsonLd({
    title: "¿Se Puede Bucear con Lentillas o Gafas? Máscara Graduada vs Lentillas",
    description:
      "¿Tienes miopía, hipermetropía o astigmatismo y quieres bucear? Te explicamos por qué no puedes llevar tus gafas dentro de la máscara y si es mejor usar lentillas o cristales graduados.",
    path: "/guias/bucear-con-gafas-o-lentillas",
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
            { name: "Bucear con gafas o lentillas", path: "/guias/bucear-con-gafas-o-lentillas" },
          ]}
        />
        <span className="eyebrow">VISIÓN SUBACUÁTICA · EQUIPAMIENTO</span>
        <h1>¿Se puede bucear con gafas o lentillas? Opciones reales si tienes miopía o vista cansada</h1>
        <p className="lead">
          Es una de las dudas más frecuentes antes de reservar un <Link href="/guias/bautismo-de-buceo-en-espana" className="text-link">bautismo de buceo</Link>: <em>«veo fatal de lejos sin gafas, ¿voy a ver algo debajo del agua?»</em>. La respuesta corta es que <strong>sí, vas a ver de maravilla</strong>, pero no con tus gafas de calle puestas. Te contamos por qué el agua juega a tu favor y qué solución elegir según tu graduación.
        </p>

        <div className="guide-article">
          <h2>Por qué no puedes llevar tus gafas debajo de la máscara (y el efecto lupa del agua)</h2>
          <p>
            Una máscara de buceo funciona porque su faldón de silicona se pega suavemente a tu cara creando un cierre estanco. Si intentas meter tus gafas de ver dentro, <strong>las patillas levantarán la silicona en las sienes y te entrará agua sin parar</strong>, además de que la presión a pocos metros empujaría la montura contra el puente de tu nariz.
          </p>
          <p>
            Pero antes de preocuparte, hay una buena noticia física: el cristal de la máscara y la refracción del agua hacen que <strong>todo bajo el mar se vea aproximadamente un 25 % más grande y más cerca</strong> de lo que realmente está. Eso significa que:
          </p>
          <ul>
            <li>
              <strong>Si tienes menos de 1 o 1,25 dioptrías de miopía o vista cansada:</strong> la mayoría de la gente ni siquiera necesita corrección para hacer un bautismo o snorkel, porque el propio «efecto lupa» del agua compensa buena parte de esa graduación.
            </li>
            <li>
              <strong>Si tienes a partir de 1,5 dioptrías:</strong> sí notarás diferencia entre ver una silueta borrosa y distinguir las escamas de un mero o los dígitos de tu ordenador de buceo. Y ahí tienes dos grandes opciones.
            </li>
          </ul>

          <h2>Opción 1: Bucear con lentillas (la más cómoda para bautismos y cursos)</h2>
          <p>
            Sí, <strong>se puede bucear con lentillas con total normalidad</strong>, y de hecho es lo que hacen más de la mitad de los instructores y buceadores con miopía o astigmatismo. Solo tienes que seguir tres reglas básicas recomendadas por la medicina hiperbárica (DAN):
          </p>
          <ul>
            <li>
              <strong>Usa siempre lentillas blandas (preferiblemente diarias desechables):</strong> las lentillas blandas son permeables al gas y flexibles, por lo que no atrapan microburbujas con los cambios de presión. En cambio, las lentillas rígidas o semirrígidas antiguas no son recomendables para bucear. Si usas diarias de usar y tirar y pierdes una en el barco, te pones otra nueva al salir y listo.
            </li>
            <li>
              <strong>Cierra los ojos si te entra agua en la máscara:</strong> en el <Link href="/guias/bautismo-vs-curso-open-water" className="text-link">curso Open Water</Link> te enseñarán a vaciar la máscara de agua soplando por la nariz. Basta con que cierres los párpados mientras entra y sale el agua para que las lentillas no se muevan de su sitio.
            </li>
            <li>
              <strong>Ventaja frente a la máscara graduada:</strong> cuando subes al barco y te quitas la máscara de buceo, ¡sigues viendo perfectamente! Con una máscara graduada, en cuanto te la quitas en la zodiac vuelves a verlo todo borroso hasta que coges tus gafas de la mochila.
            </li>
          </ul>

          <h2>Opción 2: Máscara de buceo graduada (si no toleras lentillas o buceas mucho)</h2>
          <p>
            Si tienes el ojo seco, no te gusta ponerte lentillas o ya tienes claro que vas a <Link href="/guias/que-equipo-necesito-para-empezar-a-bucear" className="text-link">comprar tu primer equipo de buceo</Link>, tener tu propia máscara graduada es una gozada. Existen tres alternativas según tu presupuesto:
          </p>

          <div style={{ overflowX: "auto", margin: "1.25rem 0 1.75rem" }}>
            <table>
              <thead>
                <tr>
                  <th>Tipo de solución</th>
                  <th>Precio orientativo</th>
                  <th>Para quién es ideal</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Máscara con lentes simétricas pregraduadas</strong></td>
                  <td>85 € – 145 € (máscara + 2 cristales)</td>
                  <td>Miopía o hipermetropía estándar (de -1.0 a -7.0 en saltos de 0,5 dioptrías)</td>
                </tr>
                <tr>
                  <td><strong>Lentes adhesivas bifocales («medias lunas»)</strong></td>
                  <td>25 € – 38 €</td>
                  <td>Presbicia / vista cansada para leer de cerca el manómetro, el ordenador o la cámara</td>
                </tr>
                <tr>
                  <td><strong>Máscara graduada a medida en óptica deportiva</strong></td>
                  <td>190 € – 320 €</td>
                  <td>Astigmatismos altos o graduaciones complejas que requieren cristal personalizado</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="editorial-tip">
            <p>
              🤿 <strong>Cómo funcionan los cristales intercambiables:</strong> marcas clásicas como Mares, Cressi, Scubapro o Tusa tienen modelos de máscara de doble cristal cuyos vidrios originales se desmontan en 2 minutos y se sustituyen por lentes ópticas de las dioptrías de cada ojo (puedes poner -2.0 en el izquierdo y -3.5 en el derecho sin problema).
            </p>
          </div>

          <h2>Qué hacer si vas a probar tu primer bautismo este verano</h2>
          <p>
            Si solo quieres hacer tu primera inmersión en <Link href="/buceo/tossa-de-mar" className="text-link">Tossa de Mar</Link>, <Link href="/buceo/cabo-de-palos" className="text-link">Cabo de Palos</Link>, <Link href="/buceo/la-herradura" className="text-link">La Herradura</Link> o <Link href="/buceo/lanzarote" className="text-link">Lanzarote</Link>, no te gastes dinero en comprar una máscara graduada todavía:
          </p>
          <ol>
            <li>
              <strong>Lo más práctico:</strong> pide en tu óptica un blíster de <strong>lentillas diarias blandas</strong> con tu graduación y póntelas media hora antes de llegar al centro.
            </li>
            <li>
              <strong>Pregunta en la escuela:</strong> muchos <Link href="/centros" className="text-link">centros de buceo en España</Link> tienen en su cesta de material un par de máscaras con graduación media (-2.0 a -3.5) para prestar a los alumnos que no usan lentillas. Avísales al hacer la reserva para que te la guarden.
            </li>
          </ol>

          <div className="cta-section" style={{ paddingBottom: 0 }}>
            <div className="cta-panel">
              <div>
                <span className="eyebrow">EQUIPAMIENTO Y PRIMEROS PASOS</span>
                <h2>Sigue preparando tu próxima inmersión</h2>
                <p>
                  Descubre qué equipo básico merece la pena comprar primero o busca centros y bautismos en tu destino.
                </p>
              </div>
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                <Link className="button button-primary" href="/guias/que-equipo-necesito-para-empezar-a-bucear">
                  Guía de equipo de buceo →
                </Link>
                <Link className="button button-ghost" href="/actividades">
                  Explorar actividades
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
