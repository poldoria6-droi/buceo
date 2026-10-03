export type DiveCenter = {
  id: string;
  slug: string;
  name: string;
  location: string;
  region: string;
  description: string;
  services: string[];
  siteSlugs: string[];
  destinationSlugs: string[];
  officialUrl?: string;
  coordinates?: { lat: number; lng: number; sourceUrl: string };
  rating?: { value: number; scale: number; count: number; sourceUrl: string };
  sources: string[];
  checkedAt: string;
};

// Operator identity must be evidenced by the offer or the center itself.
// A matching destination is never sufficient to assign an operator.
export const centers: DiveCenter[] = [{
  id: "buceo-estepona",
  slug: "buceo-estepona",
  name: "Buceo Estepona",
  location: "Estepona / Manilva, Málaga",
  region: "Andalucía",
  description: "Centro identificado como organizador de estas experiencias en Yumping. Consulta el lugar de encuentro y las condiciones de cada actividad antes de reservar.",
  services: ["Bautismo en piscina", "Curso PADI Open Water Diver"],
  siteSlugs: [],
  destinationSlugs: [],
  sources: [
    "https://www.yumping.com/ofertas/buceo/malaga/bautizo-de-buceo-en-estepona-en-piscina--o61760",
    "https://www.yumping.com/ofertas/buceo/malaga/curso-de-buceo-open-water-diver-en-malaga-padi--o40981"
  ],
  checkedAt: "2026-10-03"
}];

export type CenterActivityLink = {
  activitySlug: string;
  centerId: string;
  sourceUrl: string;
  checkedAt: string;
};

export const centerActivityLinks: CenterActivityLink[] = [
  { activitySlug: "bautizo-de-buceo-en-estepona-en-piscina-446", centerId: "buceo-estepona", sourceUrl: centers[0].sources[0], checkedAt: "2026-10-03" },
  { activitySlug: "curso-de-buceo-open-water-diver-en-malaga-padi-447", centerId: "buceo-estepona", sourceUrl: centers[0].sources[1], checkedAt: "2026-10-03" }
];
