import type { Activity, BookingOffer } from "@/data/types";
import type { DiveCenter } from "@/data/centers";
import type { Destination } from "@/data/dive-sites";
import type { Species } from "@/data/species";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://buceoatlas.es";

export const SITE_NAME = "Buceo Atlas";

/** Imagen por defecto (existe en /public/images) para esquemas que exigen "image". */
export const DEFAULT_IMAGE_PATH = "/images/hero-1280.jpg";
/** Logo PNG de la marca (512x512) para el esquema Organization. */
export const LOGO_PATH = "/logo.png";

/**
 * Devuelve la URL absoluta canónica. Con `trailingSlash: true` todas las páginas
 * viven en una URL acabada en "/", así que se normaliza para evitar redirecciones 308
 * en datos estructurados, migas de pan y canonicals. Los archivos (con extensión)
 * no reciben barra final.
 */
export function getCanonicalUrl(path: string): string {
  if (/^https?:\/\//i.test(path)) return path;
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const [beforeHash, hash] = cleanPath.split("#");
  const [pathname, query] = beforeHash.split("?");
  const withSlash = pathname.endsWith("/") || /\.[a-z0-9]+$/i.test(pathname) ? pathname : `${pathname}/`;
  return `${SITE_URL}${withSlash}${query ? `?${query}` : ""}${hash ? `#${hash}` : ""}`;
}

export type BreadcrumbItem = {
  name: string;
  path: string;
};

export function buildBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": getCanonicalUrl(item.path),
    })),
  };
}

export function buildWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        "url": `${SITE_URL}/`,
        "name": SITE_NAME,
        "description": "Comparador y directorio de buceo en España: actividades, escuelas, destinos y fauna marina.",
        "inLanguage": "es-ES",
      },
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        "name": SITE_NAME,
        "url": `${SITE_URL}/`,
        "logo": getCanonicalUrl(LOGO_PATH),
        "email": "contacto@buceoatlas.es",
        "description": "Portal especializado en buceo en España con mapa interactivo, directorio de escuelas y comparador de actividades.",
      },
    ],
  };
}

export function buildActivityJsonLd(
  activity: Activity,
  offers: BookingOffer[],
  center?: DiveCenter
) {
  // Solo se declaran ofertas con precio real (> 0): evita "price": 0 y ofertas vacías.
  const pricedOffers = offers.filter(
    (o) => typeof o.priceFrom === "number" && o.priceFrom > 0
  );
  const lowestPrice =
    pricedOffers.length > 0
      ? Math.min(...pricedOffers.map((o) => o.priceFrom as number))
      : activity.priceFrom && activity.priceFrom > 0
      ? activity.priceFrom
      : undefined;

  const activityUrl = getCanonicalUrl(`/actividades/${activity.slug}`);

  const schemaOffers = pricedOffers.map((offer) => ({
    "@type": "Offer",
    "price": offer.priceFrom,
    "priceCurrency": offer.priceCurrency || "EUR",
    "availability": "https://schema.org/InStock",
    "url": activityUrl,
    "seller": {
      "@type": "Organization",
      "name": offer.provider || center?.name || SITE_NAME,
    },
  }));

  const offersBlock =
    schemaOffers.length > 1
      ? {
          "offers": {
            "@type": "AggregateOffer",
            "lowPrice": lowestPrice,
            "priceCurrency": "EUR",
            "offerCount": schemaOffers.length,
            "offers": schemaOffers,
          },
        }
      : schemaOffers.length === 1
      ? { "offers": schemaOffers[0] }
      : lowestPrice
      ? {
          "offers": {
            "@type": "Offer",
            "price": lowestPrice,
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock",
            "url": activityUrl,
          },
        }
      : {};

  // Las actividades son experiencias reservables (no productos físicos con envío),
  // por lo que se marcan como TouristTrip. No se copian valoraciones de terceros al marcado.
  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "@id": getCanonicalUrl(`/actividades/${activity.slug}#trip`),
    "name": activity.title,
    "description": `${activity.title} en ${activity.destination}. Actividad de tipo ${activity.type}, nivel ${activity.level}, duración ${activity.duration}.`,
    "url": activityUrl,
    "image": getCanonicalUrl(DEFAULT_IMAGE_PATH),
    "inLanguage": "es-ES",
    "touristType": activity.type,
    ...offersBlock,
    ...(center
      ? {
          "provider": {
            "@type": "SportsActivityLocation",
            "name": center.name,
            "url": getCanonicalUrl(`/centros/${center.slug}`),
          },
        }
      : {}),
  };
}

export function buildCenterJsonLd(center: DiveCenter, _activitiesCount: number) {
  return {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    "@id": getCanonicalUrl(`/centros/${center.slug}#location`),
    "name": center.name,
    "description": center.description,
    "url": getCanonicalUrl(`/centros/${center.slug}`),
    "image": getCanonicalUrl(DEFAULT_IMAGE_PATH),
    "address": {
      "@type": "PostalAddress",
      "addressLocality": center.location,
      "addressRegion": center.region,
      "addressCountry": "ES",
    },
    ...(center.coordinates
      ? {
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": center.coordinates.lat,
            "longitude": center.coordinates.lng,
          },
        }
      : {}),
    ...(center.rating
      ? {
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": center.rating.value,
            "reviewCount": center.rating.count,
            "bestRating": center.rating.scale,
            "worstRating": 1,
          },
        }
      : {}),
  };
}

export function buildDestinationJsonLd(
  destination: Destination,
  sitesCount: number,
  faqs?: Array<{ question: string; answer: string }>,
  lowestPrice?: number
) {
  const destinationEntity = {
    "@type": "TouristDestination",
    "@id": getCanonicalUrl(`/buceo/${destination.slug}#destination`),
    "name": `Buceo en ${destination.name}`,
    "description": `Guía y comparador de buceo en ${destination.name} (${destination.region}) con ${sitesCount} puntos de inmersión, escuelas verificadas y actividades${
      lowestPrice ? ` desde ${lowestPrice} €` : ""
    }.`,
    "url": getCanonicalUrl(`/buceo/${destination.slug}`),
    "image": getCanonicalUrl(DEFAULT_IMAGE_PATH),
    "containedInPlace": {
      "@type": "AdministrativeArea",
      "name": destination.region,
    },
    "touristType": ["Scuba Diver", "Snorkeler"],
  };

  if (!faqs || faqs.length === 0) {
    return {
      "@context": "https://schema.org",
      ...destinationEntity,
    };
  }

  return {
    "@context": "https://schema.org",
    "@graph": [
      destinationEntity,
      {
        "@type": "FAQPage",
        "@id": getCanonicalUrl(`/buceo/${destination.slug}#faq`),
        "mainEntity": faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer,
          },
        })),
      },
    ],
  };
}

export function buildSpeciesJsonLd(item: Species) {
  return {
    "@context": "https://schema.org",
    "@type": "Taxon",
    "@id": getCanonicalUrl(`/fauna/${item.slug}#taxon`),
    "name": item.name,
    "alternateName": item.scientificName,
    "description": item.description,
    "image": getCanonicalUrl(item.image.url),
    "url": getCanonicalUrl(`/fauna/${item.slug}`),
  };
}

export function buildArticleJsonLd(guide: {
  title: string;
  description: string;
  path: string;
  datePublished?: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": getCanonicalUrl(`${guide.path}#article`),
    "headline": guide.title,
    "description": guide.description,
    "url": getCanonicalUrl(guide.path),
    "image": getCanonicalUrl(DEFAULT_IMAGE_PATH),
    "inLanguage": "es-ES",
    "datePublished": guide.datePublished || "2026-10-18",
    "dateModified": guide.dateModified || guide.datePublished || "2026-10-18",
    "author": {
      "@type": "Organization",
      "name": SITE_NAME,
      "url": SITE_URL,
    },
    "publisher": {
      "@type": "Organization",
      "name": SITE_NAME,
      "url": SITE_URL,
    },
  };
}
