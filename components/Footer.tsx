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
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Buceo Atlas · <Link href="/afiliados" style={{ display: "inline", margin: 0, textDecoration: "underline" }}>Aviso comercial</Link></span>
        <span>Cartografía © OpenStreetMap contributors</span>
      </div>
    </footer>
  );
}
