import type { Activity } from "@/data/types";
import { buildAffiliateUrl, formatOfferPrice, getBookingOffers } from "@/lib/affiliate";

export function BookingOptions({ activity, officialUrl }: { activity: Activity; officialUrl?: string }) {
  const offers = getBookingOffers(activity);
  return (
    <div className="booking-options">
      {offers.map((offer) => (
        <div className="booking-offer" key={offer.id}>
          <div className="booking-offer-head">
            <strong>{offer.provider}</strong>
            <span className="booking-offer-price">
              {offer.priceFrom === undefined ? "Consultar precio" : `Desde ${formatOfferPrice(offer)}`}
            </span>
          </div>
          <a
            className="button button-primary booking-offer-cta"
            href={buildAffiliateUrl(offer)}
            target="_blank"
            rel="sponsored noopener noreferrer"
            title={`Consultar fechas y reservar en ${offer.provider} (enlace de afiliado)`}
            data-affiliate-provider={offer.provider}
            data-activity-id={activity.id}
          >
            Ver fechas y reservar ↗
          </a>
        </div>
      ))}
      {!offers.length && (
        <div>
          <p className="booking-empty">Consulta disponibilidad directamente con el centro.</p>
          {officialUrl && /^https:\/\//.test(officialUrl) && (
            <a href={officialUrl} target="_blank" rel="noopener noreferrer" className="text-link">
              Visitar web del centro ↗
            </a>
          )}
        </div>
      )}
    </div>
  );
}
