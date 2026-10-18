export const metadata = {
  title: "Aviso Comercial",
  description: "Información sobre enlaces de reserva externa en Buceo Atlas.",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "/afiliados",
  },
};

export default function AffiliatePage() {
  return (
    <section className="section">
      <div className="container narrow">
        <span className="eyebrow">INFORMACIÓN LEGAL Y COMERCIAL</span>
        <h1>Aviso sobre reservas y enlaces externos</h1>
        <p className="lead">
          Buceo Atlas es un directorio y comparador informativo de actividades, destinos y escuelas de buceo en España.
        </p>
        <p>
          Las reservas se formalizan directamente en la plataforma del proveedor o centro externo seleccionado (como Yumping o Civitatis), quien gestiona el cobro, la disponibilidad en tiempo real y las condiciones de cancelación. Algunos enlaces de reserva son enlaces de afiliado identificados mediante el atributo estándar <code>rel=&quot;sponsored&quot;</code>, por los que Buceo Atlas puede percibir una comisión sin ningún coste adicional sobre el precio de la oferta.
        </p>
      </div>
    </section>
  );
}