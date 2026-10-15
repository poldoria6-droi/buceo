export const metadata = {
  title: "Afiliación y Transparencia",
  description:
    "Cómo funciona la monetización de Buceo Atlas mediante proveedores oficiales y enlaces de afiliación verificados.",
  alternates: {
    canonical: "/afiliados",
  },
  openGraph: {
    title: "Afiliación y Transparencia | Buceo Atlas",
    description:
      "Modelo de monetización y verificación de actividades y centros de buceo.",
    url: "/afiliados",
    type: "website",
  },
};

export default function AffiliatePage() {
  return (
    <section className="section">
      <div className="container narrow">
        <span className="eyebrow">TRANSPARENCIA</span>
        <h1>Afiliación sin letra pequeña.</h1>
        <p className="lead">
          La idea del proyecto es comparar y descubrir primero; monetizar después, con enlaces identificados cuando exista una relación comercial real.
        </p>
        <div className="notice-card">
          <strong>Estado del proyecto</strong>
          <p>
            Los enlaces de reserva te conectan directamente con la oferta del proveedor oficial verificado (como Yumping o Civitatis). El proceso de pago y las condiciones de cancelación se realizan siempre con el proveedor externo.
          </p>
        </div>
        <h2>Cómo se monetiza</h2>
        <p>
          El modelo se centra exclusivamente en la afiliación y reserva de actividades de buceo y escuelas verificadas, junto con contenidos y guías especializadas. Cuando realizas una reserva a través de nuestros enlaces, Atlas puede recibir una comisión sin coste adicional para ti.
        </p>
        <h2>Qué verificamos</h2>
        <div className="check-grid">
          <span>✓ URL real del proveedor</span>
          <span>✓ Identificación de la oferta</span>
          <span>✓ Precio desde verificado</span>
          <span>✓ Requisitos y condiciones</span>
        </div>
      </div>
    </section>
  );
}