import Link from "next/link";

export function Brand({footer=false}:{footer?:boolean}){
  return <Link href="/" className={`brand-logo atlas-brand ${footer?"brand-logo-footer":""}`} aria-label="Buceo Atlas, inicio">
    <span className="brand-badge atlas-badge" aria-hidden="true">
      <span className="atlas-orbit"/>
      <span className="brand-diver-silhouette">▰</span>
    </span>
    <span className="brand-copy">
      <span className="brand-word atlas-word">Buceo <b>Atlas</b></span>
      <small>EXPLORA · SUMÉRGETE · VIVE</small>
    </span>
  </Link>;
}
