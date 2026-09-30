import Link from "next/link";
import { Brand } from "@/components/Brand";
export function Header() {
  return <header className="site-header"><div className="header-inner">
    <Brand />
    <nav className="main-nav" aria-label="Navegación principal"><Link href="/mapa">Mapa</Link><Link href="/destinos">Destinos</Link><Link href="/actividades">Actividades</Link><Link href="/guias">Guías</Link></nav>
    <Link href="/actividades" className="nav-cta">Buscar actividad</Link>
  </div></header>;
}
