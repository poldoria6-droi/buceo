import type { Activity } from "@/data/types";
import { buildAffiliateUrl, formatOfferPrice, formatPriceCheckedAt, getBookingOffers } from "@/lib/affiliate";

export function BookingOptions({ activity, officialUrl }: { activity: Activity; officialUrl?: string }) {
  const offers = getBookingOffers(activity);
  return (
    <div className="booking-options">
      {offers.map((offer) => (
        <div className="booking-offer" key={offer.id}>
          <div className="booking-offer-head">
            <strong>{offer.provider}</strong>
            <span>{offer.priceFrom === undefined ? "Consultar precio" : `Desde ${formatOfferPrice(offer)}`}</span>
          </div>
          {offer.priceCheckedAt && <small>Tarifa revisada el {formatPriceCheckedAt(offer.priceCheckedAt)}</small>}
          <a
            className="button button-primary"
            href={buildAffiliateUrl(offer)}
            target="_blank"
            rel="sponsored noopener noreferrer"
            title={`Reservar en ${offer.provider} (enlace de afiliado)`}
            data-affiliate-provider={offer.provider}
            data-activity-id={activity.id}
          >
            Reservar con {offer.provider} ↗
          </a>
        </div>
      ))}
      {!offers.length && (
        <div>
          <p className="booking-empty">Consulta disponibilidad directamente con el centro organizador.</p>
          {officialUrl && /^https:\/\//.test(officialUrl) && (
            <a href={officialUrl} target="_blank" rel="noopener noreferrer">
              Visitar web del centro ↗
            </a>
          )}
        </div>
      )}
    </div>
  );
}
