import Link from "next/link";

export function Brand({footer=false}:{footer?:boolean}){
  return <Link href="/" className={`brand-logo ${footer?"brand-logo-footer":""}`} aria-label="Buceo, inicio">
    <span className="brand-badge" aria-hidden="true"><span className="brand-diver-silhouette">▰</span></span>
    <span className="brand-copy"><span className="brand-word">Buceo</span><small>EXPLORA · SUMÉRGETE · VIVE</small></span>
  </Link>;
}
