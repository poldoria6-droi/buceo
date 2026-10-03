import Link from "next/link";
import { Brand } from "@/components/Brand";
export function Footer() {
  return <footer className="site-footer"><div className="container footer-grid">
    <div><Brand footer/><p>Descubre actividades y escuelas de buceo. Consulta la información y continúa con el proveedor para reservar.</p></div>
    <div><div className="footer-title">Explorar</div><Link href="/destinos">Destinos</Link><Link href="/actividades">Encuentra tu actividad</Link><Link href="/centros">Escuelas de buceo</Link><Link href="/material">Compra material</Link><Link href="/guias">Guías</Link></div>
    <div><div className="footer-title">Proyecto</div><Link href="/afiliados">Afiliación y transparencia</Link><span>Algunos enlaces son de afiliación. La reserva se completa con el proveedor.</span></div>
  </div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Buceo</span><span>Cartografía © OpenStreetMap contributors</span></div></footer>;
}

