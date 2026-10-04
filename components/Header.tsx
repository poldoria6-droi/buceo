import Link from "next/link";
import { Brand } from "@/components/Brand";
export function Header() {
  return <header className="site-header"><div className="header-inner">
    <Brand />
    <nav className="main-nav" aria-label="Navegación principal">
      <Link href="/actividades">Encuentra tu actividad</Link>
      <Link href="/centros">Escuelas</Link>
      <Link href="/fauna">Fauna marina</Link>
    </nav>
    <Link href="/actividades" className="nav-cta">Buscar actividades</Link>
  </div></header>;
}
