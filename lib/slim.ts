import type { Activity } from "@/data/types";
import { buildAffiliateUrl, getBookingOffers } from "@/lib/affiliate";

/**
 * Versiones "ligeras" de los datos para enviarlas a componentes cliente.
 * Evita empaquetar/serializar campos pesados (notas, detalles, textos largos...)
 * que solo se usan en las páginas de detalle.
 */
export type SlimOffer = {
  id: string;
  provider: string;
  priceFrom?: number;
  priceCurrency?: string;
  /** URL de reserva con el parámetro de afiliado ya aplicado (calculada en servidor). */
  href: string;
};

export type SlimActivity = {
  id: number;
  slug: string;
  title: string;
  destination: string;
  region: string;
  type: Activity["type"];
  level: Activity["level"];
  duration: string;
  siteSlugs: string[];
  offers: SlimOffer[];
};

export function toSlimActivity(activity: Activity): SlimActivity {
  return {
    id: activity.id,
    slug: activity.slug,
    title: activity.title,
    destination: activity.destination,
    region: activity.region,
    type: activity.type,
    level: activity.level,
    duration: activity.duration,
    siteSlugs: activity.siteSlugs,
    offers: getBookingOffers(activity).map((offer) => ({
      id: offer.id,
      provider: offer.provider,
      priceFrom: offer.priceFrom,
      priceCurrency: offer.priceCurrency,
      href: buildAffiliateUrl(offer),
    })),
  };
}

export type SlimSite = {
  id: number;
  slug: string;
  name: string;
  destination: string;
  region: string;
  lat: number;
  lng: number;
  level: "Inicial" | "Intermedio" | "Avanzado";
  depth: string;
  type: string;
};

export type SlimCenter = {
  id: string;
  slug: string;
  name: string;
  location: string;
  region: string;
  count: number;
};
