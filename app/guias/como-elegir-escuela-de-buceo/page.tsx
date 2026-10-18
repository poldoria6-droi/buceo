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
            { name: "Cómo elegir escuela de buceo", path: "/guias/como-elegir-escuela-de-buceo" },
          ]}
        />
        <span className="eyebrow">ESCUELAS · CRITERIOS DE ELECCIÓN</span>
        <h1>Cómo elegir escuela o centro de buceo en España: 7 claves</h1>
        <p className="lead">
          En un destino de costa puedes encontrar cinco o diez centros de buceo a pocos metros de distancia con precios similares. Saber qué preguntar y en qué detalles fijarte marca la diferencia entre una experiencia apresurada y una inmersión segura y memorable.
        </p>

        <div className="guide-article">
          <h2>1. Ratio de participantes por instructor o guía</h2>
          <p>
            Es el indicador más directo de calidad y atención, especialmente en un <Link href="/guias/bautismo-de-buceo-en-espana" className="text-link">bautismo de buceo</Link> o en un curso Open Water. Cuanto más reducido sea el grupo asignado a cada instructor en el agua, más tranquila será tu adaptación, menos esperas tendrás en el fondo y mayor será el margen de seguridad.
          </p>

          <h2>2. Estado, renovación y desinfección del equipo de alquiler</h2>
          <p>
            Si no llevas <Link href="/guias/que-equipo-necesito-para-empezar-a-bucear" className="text-link">equipo propio</Link>, comprueba que el centro trabaje con neoprenos sin roturas que cierren bien, chalecos compensadores cuyos hinchadores no pierdan aire y reguladores revisados con latiguillos y boquillas en buen estado. Un centro ordenado con zona de endulzado diferenciada para reguladores y máscaras suele ser garantía de rigor técnico.
          </p>

          <h2>3. Logística: distancia al barco o al punto de entrada</h2>
          <p>
            Valora la comodidad operativa del centro:
          </p>
          <ul>
            <li>¿Está el centro en el mismo puerto deportivo frente al amarre del barco, o hay que desplazarse en furgoneta con el equipo puesto?</li>
            <li>¿Cuenta con vestuarios amplios, duchas de agua caliente, taquillas para dejar objetos personales y zona de secado si vas a bucear varios días?</li>
          </ul>

          <h2>4. Transparencia en lo que incluye la tarifa</h2>
          <p>
            Al comparar dos precios de cursos o salidas, verifica siempre si el importe anunciado incluye:
          </p>
          <ul>
            <li>Botella, plomos y alquiler del resto del equipo (en las salidas para titulados el equipo completo suele abonarse aparte si no tienes el tuyo).</li>
            <li>Tasas de inmersión en reservas marinas protegidas (como <Link href="/buceo/illes-medes" className="text-link">Illes Medes</Link>, <Link href="/buceo/cabo-de-palos" className="text-link">Islas Hormigas</Link> o <Link href="/buceo/cabrera" className="text-link">Cabrera</Link>).</li>
            <li>Seguro de accidentes de buceo para quienes no disponen de póliza anual en vigor, y tasas de expedición del carnet digital en el caso de los cursos.</li>
          </ul>

          <h2>5. Protocolos de seguridad y oxígeno a bordo</h2>
          <p>
            Tanto la embarcación como el punto de salida deben disponer de equipo de administración de oxígeno normobarico al 100 %, botiquín de primeros auxilios, comunicaciones de emergencia y un briefing claro previo a cada inmersión donde se explique el perfil de fondo, las corrientes previsibles y el procedimiento en caso de perder al grupo.
          </p>

          <h2>6. Certificadora (PADI, SSI, FEDAS/CMAS…)</h2>
          <p>
            Como explicamos en la comparativa <Link href="/guias/padi-vs-ssi-diferencias" className="text-link">PADI vs SSI</Link>, todas las certificadoras internacionales reconocidas por la WRSTC/ISO son equivalentes entre sí. No elijas un centro solo por el logotipo de la fachada: prioriza las valoraciones recientes de otros buceadores sobre el trato de los instructores.
          </p>

          <h2>7. Respeto activo por el medio marino</h2>
          <p>
            Las mejores escuelas insisten en el control de la flotabilidad antes de acercarse a paredes con <Link href="/fauna/gorgonia-roja" className="text-link">gorgonias</Link> o praderas de <Link href="/fauna/posidonia" className="text-link">posidonia</Link>, fondean siempre en boya ecológica autorizada y prohíben alimentar o molestar a la <Link href="/fauna" className="text-link">fauna marina</Link>.
          </p>

          <div className="cta-section" style={{ paddingBottom: 0 }}>
            <div className="cta-panel">
              <div>
                <span className="eyebrow">DIRECTORIO EN ESPAÑA</span>
                <h2>Consulta más de 170 escuelas y centros de buceo</h2>
                <p>
                  Busca por localidad o comunidad autónoma y revisa sus servicios, puntuaciones y actividades vinculadas.
                </p>
              </div>
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                <Link className="button button-primary" href="/centros">
                  Buscar escuelas de buceo →
                </Link>
                <Link className="button button-ghost" href="/actividades">
                  Ver actividades
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
