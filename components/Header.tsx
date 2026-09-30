import Link from "next/link";
import { Brand } from "@/components/Brand";
export function Header() {
  return <header className="site-header"><div className="header-inner">
    <Brand />
    <nav className="main-nav" aria-label="Navegación principal">
      <Link href="/" className="active">⌂ <span>Inicio</span></Link><Link href="/mapa">Mapa</Link><Link href="/destinos">Destinos</Link><Link href="/guias">Guías</Link><Link href="/fauna">Fauna marina</Link><Link href="/guias">Blog</Link><Link href="/afiliados">Sobre nosotros</Link>
    </nav>
    <Link href="/actividades" className="header-search" aria-label="Buscar actividades">⌕</Link>
    <Link href="/actividades" className="nav-cta">Planifica tu viaje</Link>
  </div></header>;
}
