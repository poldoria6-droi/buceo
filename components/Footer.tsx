import Link from "next/link";
import { Brand } from "@/components/Brand";
export function Footer() {
  return <footer className="site-footer"><div className="container footer-grid">
    <div><Brand footer/><p>Descubre dónde bucear, qué fauna encontrar y qué experiencias puedes reservar. Buceo empieza en España y crece desde el mapa.</p></div>
    <div><div className="footer-title">Explorar</div><Link href="/mapa">Mapa de buceo</Link><Link href="/destinos">Destinos</Link><Link href="/actividades">Actividades</Link><Link href="/equipo">Equipo de buceo</Link><Link href="/guias">Guías</Link></div>
    <div><div className="footer-title">Proyecto</div><Link href="/afiliados">Afiliación y transparencia</Link><span>Los enlaces comerciales se añadirán cuando las condiciones estén verificadas.</span></div>
  </div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Buceo</span><span>Cartografía © OpenStreetMap contributors</span></div></footer>;
}
