import Link from "next/link";

export function Brand({footer=false}:{footer?:boolean}){
  return <Link href="/" className={`brand-logo ${footer?"brand-logo-footer":""}`} aria-label="Buceo, inicio">
    <span className="brand-badge" aria-hidden="true"><span className="brand-diver">➤</span><span className="brand-bubble b1"/><span className="brand-bubble b2"/></span>
    <span className="brand-word">BUCEO</span>
  </Link>;
}
