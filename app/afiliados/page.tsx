import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata = {
  title: "Política de Afiliación y Transparencia",
  description:
    "Política de afiliación, transparencia editorial e información sobre enlaces de reserva externa en colaboración con Yumping (Partner ID 3935) en Buceo Atlas.",
  alternates: {
    canonical: "/afiliados",
  },
};

export default function AffiliatePage() {
  return (
    <section className="section">
      <div className="container narrow">
        <Breadcrumbs
          items={[
            { name: "Política de Afiliación y Transparencia", path: "/afiliados" },
          ]}
        />
        <span className="eyebrow">TRANSPARENCIA EDITORIAL Y COMERCIAL</span>
        <h1>Política de Afiliación y Transparencia</h1>

        <div className="notice-card" style={{ marginTop: "1.5rem", marginBottom: "2rem" }}>
          <strong>Nota de transparencia sobre enlaces de afiliación</strong>
          <p style={{ marginTop: "0.5rem" }}>
            Algunos de los enlaces de esta web son de afiliación en colaboración con Yumping (Partner ID 3935). Si reservas a través de ellos, recibimos una comisión sin que a ti te cueste absolutamente nada más, garantizando la neutralidad de nuestras recomendaciones.
          </p>
        </div>

        <div className="guide-article">
          <h2>1. ¿Cómo se sostiene Buceo Atlas?</h2>
          <p>
            <strong>Buceo Atlas</strong> es un proyecto divulgativo y comparador independiente de acceso 100% gratuito para el usuario. Para financiar el mantenimiento técnico del portal, la verificación de datos de las escuelas, la cartografía interactiva y las guías de especies marinas, colaboramos mediante afiliación con <strong>Yumping (Partner ID 3935)</strong>, plataforma líder de reservas de actividades en España.
          </p>

          <h2>2. Mismo precio garantizado para el buceador</h2>
          <p>
            Reservar a través de los botones de Buceo Atlas <strong>nunca supone un sobrecoste</strong> respecto al precio oficial del proveedor. Pagarás exactamente el mismo importe (o te beneficiarás de los mismos descuentos y ofertas vigentes) que accediendo directamente a la plataforma de reservas, con la ventaja de haber podido comparar previamente los puntos de inmersión, precios, requisitos de nivel y escuelas de cada zona.
          </p>

          <h2>3. Independencia y neutralidad editorial</h2>
          <ul>
            <li>
              Todos los enlaces comerciales de afiliación están debidamente marcados en el código con el atributo estándar <code>rel=&quot;sponsored nofollow noopener noreferrer&quot;</code> siguiendo las directrices de transparencia de Google y la normativa vigente.
            </li>
            <li>
              La información biológica, los rangos de profundidad, las recomendaciones de seguridad (Real Decreto 550/2020) y la selección de reservas marinas se elaboran con criterios estrictamente técnicos y divulgativos.
            </li>
            <li>
              Las reservas, pagos, cancelaciones y seguros se formalizan siempre de forma directa y segura en la plataforma del proveedor seleccionado.
            </li>
          </ul>

          <h2>4. Contacto y secciones legales</h2>
          <p>
            Para cualquier duda sobre nuestra política de transparencia o para comunicar actualizaciones de un centro de buceo, puedes escribirnos a{" "}
            <a href="mailto:contacto@buceoatlas.es" className="text-link">
              contacto@buceoatlas.es
            </a>
            .
          </p>
          <ul>
            <li>
              <Link href="/aviso-legal" className="text-link">
                Aviso Legal y Condiciones de Uso →
              </Link>
            </li>
            <li>
              <Link href="/privacidad" className="text-link">
                Política de Privacidad y Cookies →
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}