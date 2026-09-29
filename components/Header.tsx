import Link from "next/link";
export function Header() {
  return <header className="site-header"><div className="header-inner">
    <Link href="/" className="brand" aria-label="Buceo Atlas, inicio"><span className="brand-mark">◉</span><span>Buceo <strong>Atlas</strong></span></Link>
    <nav className="main-nav" aria-label="Navegación principal"><Link href="/mapa">Mapa</Link><Link href="/destinos">Destinos</Link><Link href="/guias">Guías</Link></nav>
    <Link href="/mapa" className="nav-cta">Explorar inmersiones</Link>
  </div></header>;
}