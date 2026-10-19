import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata = {
  title: "Aviso Legal y Condiciones de Uso",
  description:
    "Aviso legal, datos identificativos del responsable, condiciones de uso y limitación de responsabilidad del portal Buceo Atlas (contacto@buceoatlas.es).",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "/aviso-legal",
  },
};

export default function LegalNoticePage() {
  const ownerName =
    process.env.NEXT_PUBLIC_LEGAL_OWNER?.trim() ||
    "Titular y Responsable Editorial de Buceo Atlas";
  const ownerNif =
    process.env.NEXT_PUBLIC_LEGAL_NIF?.trim() ||
    "Disponible previa solicitud legal en contacto@buceoatlas.es";
  const contactEmail =
    process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || "contacto@buceoatlas.es";

  return (
    <section className="section">
      <div className="container narrow">
        <Breadcrumbs
          items={[
            { name: "Aviso Legal", path: "/aviso-legal" },
          ]}
        />
        <span className="eyebrow">INFORMACIÓN LEGAL · LSSI-CE</span>
        <h1>Aviso Legal y Condiciones de Uso</h1>
        <p className="lead">
          En cumplimiento del deber de información recogido en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se exponen a continuación los datos identificativos y las condiciones de uso de este portal web.
        </p>

        <div className="guide-article">
          <h2>1. Datos identificativos del responsable</h2>
          <ul>
            <li>
              <strong>Denominación del portal:</strong> Buceo Atlas
            </li>
            <li>
              <strong>Responsable del portal:</strong> {ownerName}
            </li>
            <li>
              <strong>NIF / Identificación fiscal:</strong> {ownerNif}
            </li>
            <li>
              <strong>Correo electrónico de contacto:</strong>{" "}
              <a href={`mailto:${contactEmail}`} className="text-link">
                {contactEmail}
              </a>
            </li>
            <li>
              <strong>Actividad:</strong> Directorio informativo, atlas divulgativo de puntos de inmersión y fauna marina, y comparador de actividades subacuáticas en España.
            </li>
          </ul>

          <h2>2. Objeto y naturaleza del sitio web</h2>
          <p>
            <strong>Buceo Atlas</strong> es un portal independiente de carácter divulgativo y comparador de experiencias subacuáticas (bautismos de buceo, cursos de certificación, salidas de inmersión y snorkel), centros de buceo y destinos marinos en España.
          </p>
          <p>
            Buceo Atlas <strong>no organiza ni ejecuta directamente las actividades subacuáticas</strong> ni procesa pagos en su propio servidor. Cuando el usuario selecciona una oferta comercial, es redirigido a la plataforma del proveedor o agencia colaboradora correspondiente (como Yumping o Civitatis) o a la escuela de buceo titular, quienes actúan como responsables de la contratación, cobro, seguro obligatorio, disponibilidad y ejecución técnica de la actividad.
          </p>

          <h2>3. Responsabilidad sobre la práctica del buceo</h2>
          <p>
            La información sobre puntos de inmersión, rangos de profundidad, temperaturas del agua, corrientes y presencia de fauna marina tiene carácter estrictamente orientativo y divulgativo. Las condiciones del mar cambian constantemente y la práctica del buceo autónomo exige contar con la titulación oficial adecuada, seguro de accidentes en vigor (Real Decreto 550/2020) y supervisión de instructores o centros autorizados.
          </p>

          <h2>4. Propiedad intelectual y licencias de imágenes</h2>
          <p>
            Los textos editoriales, el diseño gráfico, el código fuente y la estructura de datos de Buceo Atlas están protegidos por la legislación vigente sobre propiedad intelectual. Las fotografías de especies marinas incluidas en el catálogo de <Link href="/fauna" className="text-link">Fauna Marina</Link> proceden de archivos abiertos (como Wikimedia Commons) y muestran de forma individualizada el nombre de su autor original, el enlace a la fuente y la licencia libre correspondiente (Creative Commons / Dominio Público).
          </p>

          <h2>5. Enlaces relacionados</h2>
          <ul>
            <li>
              <Link href="/privacidad" className="text-link">
                Política de Privacidad y Cookies →
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
