import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildArticleJsonLd } from "@/lib/seo";

export const metadata = {
  title: "Cómo Compensar los Oídos al Bucear sin Dolor: Maniobras y Trucos",
  description:
    "¿Te cuesta compensar un oído al bajar a bucear? Guía práctica con las 3 mejores maniobras (Valsalva, Frenzel y Toynbee), errores típicos y cómo cuidar tus oídos tras la inmersión.",
  alternates: {
    canonical: "/guias/como-compensar-oidos-al-bucear",
  },
  openGraph: {
    title: "Cómo Compensar los Oídos al Bucear sin Dolor | Buceo Atlas",
    description:
      "Trucos reales de instructor para igualar la presión de los oídos en tu bautismo o curso de buceo sin forzar el tímpano.",
    url: "/guias/como-compensar-oidos-al-bucear",
    type: "article",
  },
};

export default function EqualizeEarsDivingPage() {
  const articleJsonLd = buildArticleJsonLd({
    title: "Cómo Compensar los Oídos al Bucear sin Dolor: Maniobras y Trucos",
    description:
      "¿Te cuesta compensar un oído al bajar a bucear? Guía práctica con las 3 mejores maniobras (Valsalva, Frenzel y Toynbee), errores típicos y cómo cuidar tus oídos tras la inmersión.",
    path: "/guias/como-compensar-oidos-al-bucear",
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
            { name: "Cómo compensar los oídos al bucear", path: "/guias/como-compensar-oidos-al-bucear" },
          ]}
        />
        <span className="eyebrow">TÉCNICA Y SALUD EN EL AGUA</span>
        <h1>Cómo compensar los oídos al bucear sin dolor: maniobras y trucos que sí funcionan</h1>
        <p className="lead">
          Casi todo el mundo que sale frustrado de un primer <Link href="/guias/bautismo-de-buceo-en-espana" className="text-link">bautismo de buceo</Link> cuenta lo mismo: <em>«iba genial, pero a los dos metros me empezó a pinchar un oído y no pude bajar más»</em>. Compensar no es cuestión de soplar más fuerte, sino de hacerlo a tiempo y con la técnica adecuada. Te explicamos cómo funcionan tus oídos bajo el agua y qué hacer cuando uno se rebela.
        </p>

        <div className="guide-article">
          <h2>Por qué se taponan los oídos en los primeros 3 metros</h2>
          <p>
            No hace falta bajar a 20 metros para notar la presión; de hecho, <strong>el cambio de presión más brusco ocurre entre la superficie y los primeros 3 o 4 metros</strong>. Al meter la cabeza bajo el agua, el peso del mar empuja tu tímpano hacia dentro. Para devolverlo a su sitio sin que duela, solo tienes que enviar una pequeña burbuja de aire desde tu garganta hasta el oído medio a través de dos conductos finísimos llamados <strong>trompas de Eustaquio</strong>.
          </p>
          <p>
            El error número uno de los principiantes es <strong>esperar a que el oído moleste para intentar compensar</strong>. Si bajas hasta los 3 metros sin haber compensado ni una vez, la propia presión del agua aplasta las paredes de la trompa de Eustaquio como si pisaras una pajita de refresco, y por mucho que soples ya no pasa el aire.
          </p>

          <div className="editorial-tip">
            <p>
              ⏱️ <strong>La regla del metro a metro:</strong> empieza a compensar en la misma superficie, justo antes de deshinchar el chaleco. A partir de ahí, compensa de forma suave <strong>cada medio metro o cada metro</strong> durante los primeros 5 metros de bajada, antes de notar ni siquiera un leve taponamiento.
            </p>
          </div>

          <h2>Las 3 maniobras para compensar (y cuál usar si una falla)</h2>
          <p>
            En los cursos suele enseñarse solo una forma de compensar, pero cada anatomía es distinta. Si una te cuesta, prueba estas tres en seco antes de ir al mar:
          </p>
          <ul>
            <li>
              <strong>1. Maniobra de Valsalva (la clásica):</strong> pinzas tu nariz por fuera de la goma de la máscara, cierras la boca y soplas suavemente por la nariz (como si quisieras sonarte pero sin dejar salir el aire). Oirás un leve <em>«clac»</em> en cada oído. <strong>Importante:</strong> el soplido debe durar un segundo y ser suave; nunca soples con toda la fuerza del pecho o haciendo fuerza con el abdomen.
            </li>
            <li>
              <strong>2. Maniobra de Toynbee (tragar con la nariz pinzada):</strong> pinzas la nariz con los dedos y tragas saliva (o mueves la mandíbula hacia delante y a los lados como si bostezaras con la boca cerrada). Los músculos de la garganta tiran de las trompas de Eustaquio y las abren sin necesidad de meter presión. Funciona de maravilla en personas a las que Valsalva les tapona más.
            </li>
            <li>
              <strong>3. Maniobra de Frenzel (la favorita de los instructores):</strong> pinzas la nariz, cierras la glotis (como si fueras a levantar algo pesado) y empujas la parte trasera de la lengua hacia el paladar pronunciando mentalmente la letra <em>«K»</em> o <em>«G»</em>. Tu lengua actúa como un pequeño pistón que empuja solo el aire de la boca hacia los oídos sin esfuerzo pulmonar.
            </li>
          </ul>

          <h2>Qué hacer bajo el agua cuando un oído no compensa</h2>
          <p>
            Es completamente normal que un oído compense al instante y el otro vaya medio segundo por detrás. Si al bajar notas presión en uno de los dos, <strong>nunca sigas bajando para no quedarte atrás respecto al grupo</strong>:
          </p>
          <ol>
            <li>
              <strong>Párate y avisa a tu instructor o compañero:</strong> señálate el oído con el dedo y haz la señal de «espera». En un bautismo o en un <Link href="/guias/bautismo-vs-curso-open-water" className="text-link">curso Open Water</Link> el instructor parará contigo el tiempo que haga falta.
            </li>
            <li>
              <strong>Sube un metro (o metro y medio):</strong> este paso es mágico. Al subir un solo metro por el cabo, la presión del agua cede, la trompa de Eustaquio deja de estar pinzada y se destapa casi sola.
            </li>
            <li>
              <strong>Inclina la cabeza dejando el oído rebelde mirando hacia la superficie:</strong> al estirar el cuello de ese lado, el conducto se alinea y el aire entra con mucha más facilidad al hacer Valsalva o tragar.
            </li>
            <li>
              <strong>Baja siempre con los pies por delante (o agarrado al cabo):</strong> descender cabeza abajo hace que la sangre se acumule en las mucosas de la cabeza y cuesta el doble compensar. Al principio, baja siempre en vertical con los pies hacia el fondo.
            </li>
          </ol>

          <h2>Cómo cuidar los oídos después de varios días de buceo</h2>
          <p>
            Si te vas una semana de buceo a <Link href="/buceo/cabo-de-palos" className="text-link">Cabo de Palos</Link>, la <Link href="/buceo/costa-brava" className="text-link">Costa Brava</Link> o <Link href="/buceo/el-hierro" className="text-link">El Hierro</Link> y haces dos inmersiones diarias, el enemigo ya no es la presión, sino la humedad constante que puede inflamar el conducto externo (la típica otitis del nadador). Tres gestos sencillos te ahorrarán pasar por la farmacia:
          </p>
          <ul>
            <li>
              <strong>Enjuaga los oídos con agua dulce al salir del barco:</strong> la sal seca cristaliza dentro del oído e irrita la piel. Echa un chorrito de agua dulce de tu botella al terminar la inmersión y ladea la cabeza para que salga.
            </li>
            <li>
              <strong>Cero bastoncillos de algodón:</strong> empujan el cerumen hacia el fondo y hacen microheridas. Sécalos solo por fuera con la esquina de la toalla.
            </li>
            <li>
              <strong>Protege tus oídos del viento en el barco:</strong> el aire frío de la lancha al volver a puerto con la cabeza mojada irrita muchísimo el oído. Ponte un gorro fino o la propia capucha del neopreno en el trayecto de vuelta, y consulta todos los detalles médicos en nuestra guía de <Link href="/guias/requisitos-para-bucear-en-espana" className="text-link">salud y requisitos para bucear en España</Link>.
            </li>
          </ul>

          <div className="cta-section" style={{ paddingBottom: 0 }}>
            <div className="cta-panel">
              <div>
                <span className="eyebrow">A TU RITMO Y CON INSTRUCTOR</span>
                <h2>¿Listo para tu primera inmersión?</h2>
                <p>
                  En los bautismos de buceo bajas de la mano de un instructor que controla tu descenso metro a metro para que compenses sin prisas.
                </p>
              </div>
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                <Link className="button button-primary" href="/actividades/#type=Bautismo">
                  Ver bautismos de buceo →
                </Link>
                <Link className="button button-ghost" href="/guias/bautismo-de-buceo-en-espana">
                  Cómo es un bautismo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
