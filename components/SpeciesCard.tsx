import Link from "next/link";
import type { Species } from "@/data/species";
export function SpeciesCard({item}:{item:Species}) {
  return <article className="guide-card species-card">
    <Link href={`/fauna/${item.slug}`}><img src={item.image.url} alt={item.image.alt} style={{objectFit:"contain",background:"#072b39"}} loading="lazy" width="640" height="400"/><span className="eyebrow">{item.category}</span><h2>{item.name}</h2><em>{item.scientificName}</em></Link>
    <p>{item.description}</p><small>{item.image.author} · <a href={item.image.licenseUrl} target="_blank" rel="noopener noreferrer">{item.image.license}</a> · <a href={item.image.sourceUrl} target="_blank" rel="noopener noreferrer">Fuente de la imagen</a></small>
    <p><Link href={`/fauna/${item.slug}`}>Conocer la especie →</Link></p>
  </article>;
}
