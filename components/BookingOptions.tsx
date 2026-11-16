import type { Activity } from "@/data/types";
import { buildAffiliateUrl, formatOfferPrice, getBookingOffers } from "@/lib/affiliate";
import { getBlackFridayInfoForUrl } from "@/data/black-friday";

export function BookingOptions({
  activity,
  officialUrl,
  placement = "button-cta",
}: {
  activity: Activity;
  officialUrl?: string;
  placement?: string;
}) {
  const offers = getBookingOffers(activity);
  const showInlineBf = placement !== "home-bf-card";

  return (
    <div className="booking-options">
      {offers.map((offer) => {
        const bf = getBlackFridayInfoForUrl(offer.url, offer.priceFrom);
        return (
          <div className="booking-offer" key={offer.id}>
            {bf && showInlineBf && (
              <div className="booking-offer-bf-row">
                <span className="bf-discount-badge">BLACK FRIDAY −{bf.pct} %</span>
                <span className="bf-save-tag">Ahorras {bf.saveEur} € · Bono sin fecha</span>
              </div>
            )}
            <div className="booking-offer-head">
              <strong>{offer.provider}</strong>
              <span className="booking-offer-price">
                {offer.priceFrom === undefined ? (
                  "Consultar precio"
                ) : (
                  <>
                    {bf && showInlineBf && (
                      <s style={{ color: "#7c939e", fontWeight: 600, marginRight: "6px", fontSize: "0.85em" }}>
                        {bf.oldPrice} €
                      </s>
                    )}
                    Desde {formatOfferPrice(offer)}
                  </>
                )}
              </span>
            </div>
            <a
              className="button button-primary booking-offer-cta"
              href={buildAffiliateUrl(offer, placement)}
              target="_blank"
              rel="sponsored noopener noreferrer"
              title={`Consultar fechas y reservar en ${offer.provider} (enlace de afiliado)`}
              data-affiliate-provider={offer.provider}
              data-activity-id={activity.id}
            >
              {bf ? `Aprovechar oferta (−${bf.pct} %) y reservar ↗` : "Ver fechas y reservar ↗"}
            </a>
          </div>
        );
      })}
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
