import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildArticleJsonLd } from "@/lib/seo";

export const metadata = {
  title: "PADI vs SSI: Diferencias, Precios y Cuál Elegir en España",
  description:
    "Comparativa práctica entre PADI y SSI: reconocimiento internacional ISO/WRSTC, convalidación entre cursos, plataformas digitales y cómo elegir escuela.",
  alternates: {
    canonical: "/guias/padi-vs-ssi-diferencias",
  },
  openGraph: {
    title: "PADI vs SSI: Diferencias, Precios y Cuál Elegir | Buceo Atlas",
    description:
      "Descubre qué certificadora de buceo te conviene más antes de reservar tu curso Open Water.",
    url: "/guias/padi-vs-ssi-diferencias",
    type: "article",
  },
};

export default function PadiVsSsiPage() {
  const articleJsonLd = buildArticleJsonLd({
    title: "PADI vs SSI: Diferencias, Precios y Cuál Elegir en España",
    description:
      "Comparativa práctica entre PADI y SSI: reconocimiento internacional ISO/WRSTC, convalidación entre cursos, plataformas digitales y cómo elegir escuela.",
    path: "/guias/padi-vs-ssi-diferencias",
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
            { name: "PADI vs SSI", path: "/guias/padi-vs-ssi-diferencias" },
          ]}
        />
        <span className="eyebrow">CERTIFICADORAS · SIN MITOS</span>
        <h1>PADI vs SSI: ¿Cuál es mejor y qué cambia de verdad al sacarte el título?</h1>
        <p className="lead">
          Cuando empiezas a buscar escuelas para sacarte el <strong>Open Water Diver</strong> en España, enseguida ves dos siglas por todas partes: <strong>PADI</strong> y <strong>SSI</strong>. Te contamos qué cambia en la práctica y por qué el logo del carnet importa mucho menos de lo que parece.
        </p>

        <div className="guide-article">
          <div className="editorial-tip">
            <p>
              🧭 <strong>La verdad que cualquier instructor honesto te dirá en el puerto:</strong> no elijas un centro de buceo porque en la puerta ponga PADI o ponga SSI. Ambos carnets valen exactamente igual en el 100 % de los centros de buceo del planeta. Elige la escuela por la paciencia del instructor, el estado de los neoprenos y el número de alumnos que meten por grupo.
            </p>
          </div>

          <h2>¿Me van a aceptar el carnet SSI en un centro PADI en el extranjero (y al revés)?</h2>
          <p>
            <strong>Sí, siempre y sin ningún trámite.</strong> Existe el mito entre quienes empiezan de que si te sacas el título con una organización luego solo puedes bucear en centros de esa misma marca. En realidad funciona igual que el carnet de conducir: da igual en qué autoescuela lo hayas sacado, te permite alquilar y bucear hasta 18 metros desde <Link href="/buceo/cabo-de-palos" className="text-link">Cabo de Palos</Link> o <Link href="/buceo/illes-medes" className="text-link">Illes Medes</Link> hasta Maldivas, México o Tailandia.
          </p>
          <p>
            Incluso puedes cruzarlos cuando quieras subir de nivel: es muy habitual sacarse el <em>Open Water</em> en verano en una escuela SSI de España y al año siguiente hacer el <em>Advanced Open Water</em> o la especialidad de <em>Nitrox</em> en un centro PADI (o viceversa) sin pagar tasas de convalidación.
          </p>

          <div className="vs-grid">
            <div className="vs-card">
              <span className="eyebrow">LA MÁS CONOCIDA EN EL MUNDO</span>
              <h3>🌐 PADI</h3>
              <p>
                Es la certificadora estadounidense que popularizó el buceo recreativo en todo el mundo. Su método está milimetrado: cualquier ejercicio se enseña exactamente en el mismo orden aquí o en Australia.
              </p>
              <ul>
                <li><strong>Su punto fuerte:</strong> marca archiconocida y manuales muy estructurados paso a paso.</li>
                <li><strong>Coste de tasas:</strong> sus materiales digitales (<em>eLearning</em>) y licencias suelen encarecer entre 20 € y 45 € el precio final del curso frente a otras agencias.</li>
              </ul>
            </div>

            <div className="vs-card">
              <span className="eyebrow">LA FAVORITA DE MUCHAS ESCUELAS EN ESPAÑA</span>
              <h3>📱 SSI</h3>
              <p>
                De origen europeo y ligada al grupo Mares, ha crecido muchísimo en las costas españolas porque trabaja codo con codo con los centros de buceo y tiene una app móvil comodísima.
              </p>
              <ul>
                <li><strong>Su punto fuerte:</strong> la app <em>MySSI</em> (teoría, carnet y libro de inmersiones en el móvil) y un enfoque algo más flexible en el agua si un ejercicio te cuesta a la primera.</li>
                <li><strong>Coste de tasas:</strong> suele permitir a las escuelas ofrecer el curso completo a un precio ligeramente más ajustado.</li>
              </ul>
            </div>
          </div>

          <h2>Qué cambia cuando estás haciendo las prácticas en el agua</h2>
          <p>
            Los ejercicios que tienes que dominar para aprobar el Open Water son los mismos en ambas: montar tu botella, vaciar el agua de la máscara, recuperar el regulador, compartir aire con tu compañero y controlar tu flotabilidad sin dar aletazos en el fondo.
          </p>
          <p>
            La pequeña diferencia está en la cintura que tiene el instructor durante las clases prácticas:
          </p>
          <ul>
            <li>
              <strong>En PADI</strong> la secuencia es más rígida: se completa el ejercicio A antes de pasar al B tal y como marca el estándar.
            </li>
            <li>
              <strong>En SSI</strong>, si el primer día te da respeto quitarte la máscara bajo el agua, el instructor puede dejar ese ejercicio para el final de la sesión o para el día siguiente mientras ganas soltura con el resto del equipo.
            </li>
          </ul>

          <h2>Tabla comparativa: PADI frente a SSI</h2>
          <div style={{ overflowX: "auto", margin: "1.5rem 0 2rem" }}>
            <table>
              <thead>
                <tr>
                  <th>Aspecto práctico</th>
                  <th>PADI</th>
                  <th>SSI</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Validez en viajes internacionales</strong></td>
                  <td>Total en todo el mundo.</td>
                  <td>Total en todo el mundo.</td>
                </tr>
                <tr>
                  <td><strong>¿Se pueden mezclar cursos entre sí?</strong></td>
                  <td>Sí, puedes venir de SSI y hacer el Advanced en PADI.</td>
                  <td>Sí, puedes venir de PADI y seguir formándote en SSI.</td>
                </tr>
                <tr>
                  <td><strong>App y teoría en el móvil</strong></td>
                  <td>PADI App + PADI eLearning.</td>
                  <td>App MySSI (muy valorada por su bitácora digital gratuita).</td>
                </tr>
                <tr>
                  <td><strong>Ritmo de los ejercicios en el agua</strong></td>
                  <td>Secuencia fija bloque por bloque.</td>
                  <td>Adaptable según cómo se sienta el alumno.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Las 3 preguntas que sí deberías hacer antes de reservar</h2>
          <p>
            En lugar de preocuparte por las siglas, antes de reservar tu curso (o tu primer <Link href="/guias/bautismo-vs-curso-open-water" className="text-link">bautismo de buceo</Link>) revisa estos tres detalles en la ficha de la actividad:
          </p>
          <ul>
            <li>
              <strong>¿Están incluidas las tasas y el material digital en el precio?</strong> Asegúrate de que el precio que ves no sea solo por las clases y luego tengas que abonar aparte el <em>eLearning</em> o la expedición del carnet.
            </li>
            <li>
              <strong>¿Cuántos alumnos bajan por instructor?</strong> Un curso con 2 a 4 alumnos por instructor se aprovecha el doble que un grupo de 8 personas esperando turno en el fondo.
            </li>
            <li>
              <strong>¿Cómo es la logística del centro?</strong> Te contamos todos los trucos para distinguir un buen centro en nuestra guía sobre <Link href="/guias/como-elegir-escuela-de-buceo" className="text-link">cómo elegir escuela de buceo en España</Link>.
            </li>
          </ul>

          <div className="cta-section" style={{ paddingBottom: 0 }}>
            <div className="cta-panel">
              <div>
                <span className="eyebrow">CURSOS Y CENTROS EN ESPAÑA</span>
                <h2>Compara cursos Open Water por destino</h2>
                <p>
                  Consulta precios con tasas incluidas y explora más de 210 centros de buceo en toda la costa.
                </p>
              </div>
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                <Link className="button button-primary" href="/actividades/#type=Curso">
                  Ver cursos de buceo →
                </Link>
                <Link className="button button-ghost" href="/centros">
                  Directorio de centros
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
