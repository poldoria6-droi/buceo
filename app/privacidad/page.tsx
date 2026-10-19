import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata = {
  title: "Política de Privacidad y Cookies",
  description:
    "Política de privacidad, protección de datos (RGPD / LOPDGDD) e información sobre navegación anónima y uso de cookies técnicas en Buceo Atlas.",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "/privacidad",
  },
};

export default function PrivacyAndCookiesPage() {
  const contactEmail =
    process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || "contacto@buceoatlas.es";

  return (
    <section className="section">
      <div className="container narrow">
        <Breadcrumbs
          items={[
            { name: "Política de Privacidad y Cookies", path: "/privacidad" },
          ]}
        />
        <span className="eyebrow">RGPD · LOPDGDD · COOKIES</span>
        <h1>Política de Privacidad y Cookies</h1>
        <p className="lead">
          En Buceo Atlas respetamos tu privacidad. La navegación por todo nuestro catálogo de destinos, actividades, centros y fauna marina es completamente anónima y no requiere registro de usuario ni cesión de datos personales.
        </p>

        <div className="guide-article">
          <h2>1. Navegación anónima y protección de datos personales</h2>
          <p>
            De conformidad con el Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD), te informamos de que <strong>Buceo Atlas no recoge datos personales identificativos mediante formularios de registro, cuentas de usuario ni pasarelas de pago propias</strong>.
          </p>
          <ul>
            <li>
              <strong>Consultas por correo electrónico:</strong> Si nos escribes voluntariamente a{" "}
              <a href={`mailto:${contactEmail}`} className="text-link">
                {contactEmail}
              </a>
              , tu dirección de correo y el contenido del mensaje se utilizarán única y exclusivamente para responder a tu consulta, sin cederlos a terceros ni incorporarlos a listas comerciales.
            </li>
            <li>
              <strong>Ejercicio de derechos:</strong> Puedes ejercer en cualquier momento tus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a{" "}
              <a href={`mailto:${contactEmail}`} className="text-link">
                {contactEmail}
              </a>
              .
            </li>
          </ul>

          <h2>2. Política de Cookies</h2>
          <p>
            Este sitio web está desarrollado como un portal estático de carga rápida que prioriza el rendimiento y la mínima huella de rastreo:
          </p>
          <ul>
            <li>
              <strong>Cookies técnicas y de funcionamiento:</strong> Son aquellas estrictamente necesarias para permitir la navegación por las páginas, el funcionamiento de los filtros interactivos de búsqueda y la correcta carga de la cartografía interactiva (OpenStreetMap / Leaflet).
            </li>
            <li>
              <strong>Atribución técnica de afiliación:</strong> Cuando haces clic en un enlace de reserva externa hacia nuestros proveedores colaboradores (como Yumping, con <code>Partner ID 3935</code>, o Civitatis) o cuando se carga el script técnico de atribución del proveedor, la plataforma de destino puede emplear una cookie o identificador técnico de sesión con la única finalidad de reconocer que la visita procede de Buceo Atlas y asignar la comisión correspondiente, sin ningún recargo en el precio para el usuario.
            </li>
          </ul>

          <h2>3. Cómo gestionar o desactivar las cookies en tu navegador</h2>
          <p>
            Puedes permitir, bloquear o eliminar las cookies almacenadas en tu dispositivo en cualquier momento a través de las opciones de configuración de tu navegador (Google Chrome, Mozilla Firefox, Safari o Microsoft Edge). La desactivación de cookies de terceros no impide la consulta de ninguna de las guías, mapas o fichas informativas de Buceo Atlas.
          </p>

          <h2>4. Más información legal</h2>
          <ul>
            <li>
              <Link href="/aviso-legal" className="text-link">
                Aviso Legal y datos del responsable →
              </Link>
            </li>
            <li>
              <Link href="/afiliados" className="text-link">
                Política de Afiliación y Transparencia →
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
