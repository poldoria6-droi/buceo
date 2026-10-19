import type { Activity, BookingOffer } from "@/data/types";
import type { DiveCenter } from "@/data/centers";
import type { Destination } from "@/data/dive-sites";
import type { Species } from "@/data/species";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://buceoatlas.es";

export const SITE_NAME = "Buceo Atlas";

export function getCanonicalUrl(path: string): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${cleanPath}`;
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
        "url": SITE_URL,
        "name": SITE_NAME,
        "description": "Comparador y directorio de buceo en España: actividades, escuelas, destinos y fauna marina.",
        "inLanguage": "es-ES",
      },
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        "name": SITE_NAME,
        "url": SITE_URL,
        "logo": `${SITE_URL}/favicon.ico`,
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
  const lowestPrice =
    offers.length > 0
      ? Math.min(...offers.map((o) => o.priceFrom || 9999).filter((p) => p > 0))
      : activity.priceFrom;

  const validPrice = lowestPrice && lowestPrice < 9999 ? lowestPrice : undefined;

  const schemaOffers =
    offers.length > 0
      ? offers.map((offer) => ({
          "@type": "Offer",
          "price": offer.priceFrom || validPrice || 0,
          "priceCurrency": offer.priceCurrency || "EUR",
          "availability": "https://schema.org/InStock",
          "url": getCanonicalUrl(`/actividades/${activity.slug}`),
          "seller": {
            "@type": "Organization",
            "name": offer.provider || center?.name || "Buceo Atlas",
          },
        }))
      : validPrice
      ? [
          {
            "@type": "Offer",
            "price": validPrice,
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock",
            "url": getCanonicalUrl(`/actividades/${activity.slug}`),
          },
        ]
      : undefined;

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": getCanonicalUrl(`/actividades/${activity.slug}#product`),
    "name": activity.title,
    "description": `${activity.title} en ${activity.destination}. Actividad de tipo ${activity.type}, nivel ${activity.level}, duración ${activity.duration}.`,
    "category": activity.type,
    "url": getCanonicalUrl(`/actividades/${activity.slug}`),
    ...(schemaOffers && schemaOffers.length > 1
      ? {
          "offers": {
            "@type": "AggregateOffer",
            "lowPrice": validPrice,
            "priceCurrency": "EUR",
            "offerCount": offers.length,
            "offers": schemaOffers,
          },
        }
      : schemaOffers && schemaOffers.length === 1
      ? { "offers": schemaOffers[0] }
      : {}),
    ...(activity.rating && activity.reviewCount
      ? {
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": activity.rating,
            "reviewCount": activity.reviewCount,
            "bestRating": 5,
            "worstRating": 1,
          },
        }
      : {}),
    ...(center
      ? {
          "brand": {
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
