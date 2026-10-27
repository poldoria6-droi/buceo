import type { Activity } from "@/data/types";
import type { BookingOffer } from "@/data/types";

export const YUMPING_PARTNER_ID =
  process.env.NEXT_PUBLIC_YUMPING_PARTNER_ID?.trim() ||
  "449fb0b2d23ef85c3ee63f78b6e90eae";

function normalizeProvider(provider: string) {
  return provider.trim().toLowerCase();
}

export function getBookingOffers(activity: Activity): BookingOffer[] {
  if (activity.bookingStatus !== "Disponible") return [];
  const valid = (offer: BookingOffer) => {
    try { const url = new URL(offer.url); return offer.status !== "paused" && ["https:", "http:"].includes(url.protocol); }
    catch { return false; }
  };
  if (activity.offers?.length) return activity.offers.filter(valid);

  if (!activity.providerUrl || !activity.provider) return [];

  return [{
    id: `legacy-${activity.id}-${normalizeProvider(activity.provider)}`,
    provider: activity.provider,
    url: activity.providerUrl,
    sourceUrl: activity.sourceUrl,
    priceFrom: activity.priceFrom,
    priceCurrency: activity.priceCurrency || "EUR",
    priceCheckedAt: activity.priceCheckedAt
  }].filter(valid);
}

export function buildAffiliateUrl(offer: BookingOffer) {
  try {
    const parsed = new URL(offer.url);
    const provider = normalizeProvider(offer.provider);

    if (provider === "civitatis") {
      const aid = process.env.NEXT_PUBLIC_CIVITATIS_AID?.trim();
      if (aid) parsed.searchParams.set("aid", aid);
    }

    if (provider === "yumping") {
      parsed.searchParams.set("id_partner", YUMPING_PARTNER_ID);
      if (!parsed.searchParams.has("placement")) {
        parsed.searchParams.set("placement", "button-cta");
      }
    }

    return parsed.toString();
  } catch {
    return offer.url;
  }
}

export function getLowestPricedOffer<T extends { priceFrom?: number }>(offers: T[]): T | undefined {
  return offers
    .filter((offer) => typeof offer.priceFrom === "number" && offer.priceFrom >= 0)
    .sort((a, b) => (a.priceFrom ?? Infinity) - (b.priceFrom ?? Infinity))[0];
}

export function formatOfferPrice(offer: { priceFrom?: number; priceCurrency?: string }) {
  if (typeof offer.priceFrom !== "number") return "Precio por confirmar";

  const currency = offer.priceCurrency || "EUR";

  try {
    return new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency,
      maximumFractionDigits: 2
    }).format(offer.priceFrom);
  } catch {
    return `${offer.priceFrom} ${currency}`;
  }
}

export function formatPriceCheckedAt(value?: string) {
  if (!value) return "";
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return value;
  return new Intl.DateTimeFormat("es-ES", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  }).format(parsed);
}


export const IATI_AFFILIATE_URL = "https://www.iatiseguros.com/?r=37531501737322";
