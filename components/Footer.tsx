import Link from "next/link";
import { Brand } from "@/components/Brand";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Brand footer />
          <p>
            Comparador y directorio de experiencias, centros de buceo, destinos de inmersión y fauna marina en España.
          </p>
          <p style={{ marginTop: "0.75rem" }}>
            Contacto:{" "}
            <a
              href="mailto:contacto@buceoatlas.es"
              style={{ display: "inline", margin: 0, textDecoration: "underline", color: "#a6efea" }}
            >
              contacto@buceoatlas.es
            </a>
          </p>
        </div>
        <div>
          <div className="footer-title">Explorar</div>
          <Link href="/actividades">Actividades de buceo</Link>
          <Link href="/centros">Escuelas y centros</Link>
          <Link href="/destinos">Destinos de inmersión</Link>
          <Link href="/fauna">Fauna del Mediterráneo y Atlántico</Link>
          <Link href="/guias">Guías y artículos</Link>
        </div>
        <div>
          <div className="footer-title">Guías destacadas</div>
          <Link href="/guias/padi-vs-ssi-diferencias">PADI vs SSI: cuál elegir</Link>
          <Link href="/guias/bautismo-vs-curso-open-water">Bautismo vs Open Water</Link>
          <Link href="/guias/mejores-zonas-de-buceo-en-espana">Mejores zonas de buceo</Link>
          <Link href="/guias/mejor-epoca-para-bucear-en-espana">Mejor época para bucear</Link>
          <Link href="/guias/cuanto-cuesta-un-bautismo-de-buceo">Precio de un bautismo</Link>
        </div>
        <div>
          <div className="footer-title">Legal y Transparencia</div>
          <Link href="/aviso-legal">Aviso Legal</Link>
          <Link href="/privacidad">Política de Privacidad y Cookies</Link>
          <Link href="/afiliados">Política de Afiliación y Transparencia</Link>
        </div>
      </div>

      <div className="container footer-transparency">
        <p>
          <strong>Política de Afiliación y Transparencia:</strong> Algunos de los enlaces de esta web son de afiliación en colaboración con Yumping. Si reservas a través de ellos, recibimos una comisión sin que a ti te cueste absolutamente nada más, garantizando la neutralidad de nuestras recomendaciones. Navegación anónima con uso exclusivo de cookies técnicas y de atribución.
        </p>
      </div>

      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} Buceo Atlas · Guía y comparador independiente de buceo en España
        </span>
        <span>Cartografía © OpenStreetMap contributors</span>
      </div>
    </footer>
  );
}
