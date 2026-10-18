import Link from "next/link";
import type { Species } from "@/data/species";

export function SpeciesCard({ item }: { item: Species }) {
  return (
    <article className="guide-card species-card">
      <Link href={`/fauna/${item.slug}`}>
        <img
          src={item.image.url}
          alt={item.image.alt}
          loading="lazy"
          decoding="async"
          width={item.image.width || 640}
          height={item.image.height || 420}
        />
        <span className="eyebrow">{item.category}</span>
        <h2>{item.name}</h2>
        <em>{item.scientificName}</em>
      </Link>
      <p className="species-card-desc">{item.description}</p>
      <small>
        Foto: {item.image.author} ·{" "}
        <a href={item.image.licenseUrl} target="_blank" rel="noopener noreferrer">
          {item.image.license}
        </a>{" "}
        ·{" "}
        <a href={item.image.sourceUrl} target="_blank" rel="noopener noreferrer">
          Fuente
        </a>
      </small>
      <p>
        <Link href={`/fauna/${item.slug}`} className="text-link">
          Ver ficha completa →
        </Link>
      </p>
    </article>
  );
}
