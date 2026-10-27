import Link from "next/link";
import { guides } from "@/data/guides";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata = {
  title: "Guías y Artículos de Buceo en España · Comparativas, Precios y Consejos",
  description:
    "Guías prácticas y comparativas de buceo en España: PADI vs SSI, bautismo vs Open Water, cuánto cuesta bucear, mejor época, requisitos, pecios y equipamiento.",
  alternates: {
    canonical: "/guias",
  },
  openGraph: {
    title: "Guías y Artículos de Buceo en España | Buceo Atlas",
    description:
      "Resuelve tus dudas antes de tu próxima inmersión: comparativas, precios, destinos y requisitos.",
    url: "/guias",
    type: "website",
  },
};

export default function GuidesPage() {
  return (
    <section className="section">
      <div className="container">
        <Breadcrumbs items={[{ name: "Guías y artículos", path: "/guias" }]} />
        <span className="eyebrow">GUÍAS Y COMPARATIVAS DE BUCEO</span>
        <h1>Guías de buceo en España: cursos, precios y destinos</h1>
        <p className="lead">
          Artículos prácticos para elegir entre un bautismo o el curso Open Water, comparar certificadoras (PADI vs SSI), conocer los precios reales en España y preparar tu viaje de buceo.
        </p>
        <div className="guide-grid">
          {guides.map((g) => (
            <article className="guide-card" key={g.slug}>
              <span className="eyebrow">{g.tag}</span>
              <h2>
                <Link href={`/guias/${g.slug}`}>{g.title}</Link>
              </h2>
              <p>{g.description}</p>
              <Link href={`/guias/${g.slug}`} className="text-link">
                {g.ctaLabel}
              </Link>
            </article>
          ))}
        </div>

        <div className="cta-section" style={{ paddingBottom: 0, marginTop: "3rem" }}>
          <div className="cta-panel">
            <div>
              <span className="eyebrow">DEL ARTÍCULO AL AGUA</span>
              <h2>¿Listo para comparar opciones reales?</h2>
              <p>
                Explora bautismos, cursos e inmersiones por destino o consulta nuestro directorio de más de 170 escuelas en España.
              </p>
            </div>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <Link href="/actividades" className="button button-primary">
                Explorar actividades →
              </Link>
              <Link href="/centros" className="button button-ghost">
                Ver escuelas
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}