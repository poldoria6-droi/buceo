import Link from "next/link";
export function Footer() {
  return <footer className="site-footer"><div className="container footer-grid">
    <div><div className="footer-brand">Buceo Atlas</div><p>Descubre dónde bucear, qué puedes encontrar bajo el agua y cómo organizar tu próxima inmersión.</p></div>
    <div><div className="footer-title">Explorar</div><Link href="/mapa">Mapa de buceo</Link><Link href="/destinos">Destinos</Link><Link href="/guias">Guías</Link></div>
    <div><div className="footer-title">Proyecto</div><Link href="/afiliados">Afiliación y transparencia</Link><span>Datos editoriales en proceso de verificación.</span></div>
  </div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Buceo Atlas</span><span>Cartografía © OpenStreetMap contributors</span></div></footer>;
}