import type { Activity } from "@/data/activities";
import { buildAffiliateUrl, formatOfferPrice, formatPriceCheckedAt, getBookingOffers } from "@/lib/affiliate";

export function BookingOptions({ activity, officialUrl }: { activity: Activity; officialUrl?: string }) {
  const offers = getBookingOffers(activity);
  const safeOfficialUrl = officialUrl && /^https?:\/\//i.test(officialUrl) ? officialUrl : undefined;
  return <div className="center-booking-options">
    {offers.map(offer => <div className="booking-offer" key={offer.id}>
      <div className="booking-offer-head"><strong>{offer.provider}</strong><span>{offer.priceFrom === undefined ? "Precio por confirmar" : `Desde ${formatOfferPrice(offer)}`}</span></div>
      {offer.priceCheckedAt && <small>Precio consultado el {formatPriceCheckedAt(offer.priceCheckedAt)}</small>}
      <a className="button button-primary" href={buildAffiliateUrl(offer)} target="_blank" rel="sponsored noopener noreferrer" data-affiliate-provider={offer.provider} data-activity-id={activity.id}>Reservar con {offer.provider} ↗</a>
    </div>)}
    {!offers.length && <><p>Sin oferta de reserva disponible en Atlas.</p>{safeOfficialUrl && <a className="text-link" href={safeOfficialUrl} target="_blank" rel="noopener noreferrer">Visitar web del centro ↗</a>}</>}
  </div>;
}
