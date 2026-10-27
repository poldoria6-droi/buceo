import Link from "next/link";
import type { Species } from "@/data/species";

/** Campos mínimos que necesita una tarjeta (evita enviar al navegador toda la ficha de la especie). */
export type SpeciesCardData = Pick<Species, "slug" | "name" | "scientificName" | "category" | "description"> & {
  image: Pick<Species["image"], "url" | "alt" | "width" | "height" | "author" | "license" | "licenseUrl" | "sourceUrl">;
};

export function toSpeciesCardData(s: Species): SpeciesCardData {
  return {
    slug: s.slug,
    name: s.name,
    scientificName: s.scientificName,
    category: s.category,
    description: s.description,
    image: {
      url: s.image.url,
      alt: s.image.alt,
      width: s.image.width,
      height: s.image.height,
      author: s.image.author,
      license: s.image.license,
      licenseUrl: s.image.licenseUrl,
      sourceUrl: s.image.sourceUrl,
    },
  };
}

const THUMB_WIDTH = 480;

/** Miniatura (480 px) generada en /images/fauna/thumbs; si la imagen no es local se usa tal cual. */
function thumbFor(item: SpeciesCardData) {
  const { url, width, height } = item.image;
  if (!url.startsWith("/images/fauna/")) {
    return { src: url, width: width || 640, height: height || 420 };
  }
  const ratio = width && height ? height / width : 420 / 640;
  return {
    src: url.replace("/images/fauna/", "/images/fauna/thumbs/"),
    width: THUMB_WIDTH,
    height: Math.round(THUMB_WIDTH * ratio),
  };
}

export function SpeciesCard({ item }: { item: SpeciesCardData }) {
  const thumb = thumbFor(item);
  return (
    <article className="guide-card species-card">
      <Link href={`/fauna/${item.slug}`}>
        <img
          src={thumb.src}
          alt={item.image.alt}
          loading="lazy"
          decoding="async"
          width={thumb.width}
          height={thumb.height}
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
