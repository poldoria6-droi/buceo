import Link from "next/link";
import type { DiveSite } from "@/data/dive-sites";

export function SiteCard({ site }: { site: DiveSite }) {
  return (
    <article className="site-card">
      <div className="site-card-top">
        <span className="eyebrow">{site.region}</span>
        <span className="pill">{site.level}</span>
      </div>
      <h3>{site.name}</h3>
      <p>{site.highlight}</p>
      <div className="site-meta">
        <span>{site.type}</span>
        <span>{site.depth}</span>
      </div>
      <div className="animal-row">
        {site.animals.slice(0, 3).map((animal) => (
          <span key={animal}>{animal}</span>
        ))}
      </div>
      <div className="card-actions" style={{ justifyContent: "space-between" }}>
        <Link href={`/buceo/${site.destinationSlug}`} className="text-link">
          Ver guía y precios →
        </Link>
        <Link href={`/actividades/#site=${encodeURIComponent(site.slug)}`} className="text-link">
          Ofertas en esta zona →
        </Link>
      </div>
    </article>
  );
}
