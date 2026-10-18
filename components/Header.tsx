import Link from "next/link";
import { Brand } from "@/components/Brand";

export function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Brand />
        <nav className="main-nav" aria-label="Navegación principal">
          <Link href="/actividades">Actividades</Link>
          <Link href="/centros">Escuelas</Link>
          <Link href="/destinos">Destinos</Link>
          <Link href="/fauna">Fauna marina</Link>
          <Link href="/guias">Guías</Link>
        </nav>
        <Link href="/actividades" className="nav-cta">
          Explorar actividades
        </Link>
      </div>
    </header>
  );
}
