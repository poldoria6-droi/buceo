import Link from "next/link";
import { buildBreadcrumbJsonLd, type BreadcrumbItem } from "@/lib/seo";

type Props = {
  items: BreadcrumbItem[];
};

export function Breadcrumbs({ items }: Props) {
  const fullItems: BreadcrumbItem[] = [
    { name: "Inicio", path: "/" },
    ...items,
  ];

  const jsonLd = buildBreadcrumbJsonLd(fullItems);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Migas de pan" className="breadcrumbs">
        <ol>
          {fullItems.map((item, index) => {
            const isLast = index === fullItems.length - 1;
            return (
              <li key={item.path}>
                {index > 0 && <span className="breadcrumb-separator" aria-hidden="true">/</span>}
                {isLast ? (
                  <span aria-current="page" className="breadcrumb-current">
                    {item.name}
                  </span>
                ) : (
                  <Link href={item.path} className="breadcrumb-link">
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
