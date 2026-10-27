import type { Activity } from "@/data/types";
import type { DiveCenter } from "@/data/centers";
import { destinations, diveSites, type Destination } from "@/data/dive-sites";
import { species, type Species } from "@/data/species";
import { guides } from "@/data/guides";
import { communityFor } from "@/lib/activity-filters";

type Guide = (typeof guides)[number];

const normalize = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

/**
 * Selecciona `count` elementos de `items` rotando de forma determinista a partir de `seed`,
 * garantizando que todas las fichas de un listado reciban enlaces internos de forma equitativa.
 */
export function rotateSlice<T>(items: T[], seed: number, count: number): T[] {
  if (items.length <= count) return items;
  const result: T[] = [];
  const start = Math.abs(seed) % items.length;
  for (let i = 0; i < count; i++) {
    result.push(items[(start + i) % items.length]);
  }
  return result;
}

/**
 * Encuentra los destinos (/buceo/[slug]) más relevantes para una actividad.
 */
export function getDestinationsForActivity(activity: Activity): Destination[] {
  const matched: Destination[] = [];
  const add = (d?: Destination) => {
    if (d && !matched.some((m) => m.slug === d.slug)) matched.push(d);
  };

  // 1. Por punto de inmersión vinculado
  for (const siteSlug of activity.siteSlugs) {
    const site = diveSites.find((s) => s.slug === siteSlug);
    if (site) {
      add(destinations.find((d) => d.slug === site.destinationSlug));
    }
  }

  // 2. Por coincidencia de nombre de localidad o título
  const actDestNorm = normalize(activity.destination);
  const actTitleNorm = normalize(activity.title);
  const actRegionNorm = normalize(activity.region);

  for (const d of destinations) {
    const dNorm = normalize(d.name);
    if (
      actDestNorm.includes(dNorm) ||
      dNorm.includes(actDestNorm) ||
      actTitleNorm.includes(dNorm)
    ) {
      add(d);
    }
  }

  // 3. Destinos de la misma provincia/región o comunidad autónoma
  const comm = communityFor(activity.region);
  const sameRegion = destinations.filter(
    (d) => normalize(d.region) === actRegionNorm || communityFor(d.region) === comm
  );
  for (const d of rotateSlice(sameRegion, activity.id, 3)) {
    add(d);
  }

  return matched.slice(0, 3);
}

/**
 * Encuentra los destinos (/buceo/[slug]) más relevantes para una escuela de buceo.
 */
export function getDestinationsForCenter(center: DiveCenter, seedIndex = 0): Destination[] {
  const matched: Destination[] = [];
  const add = (d?: Destination) => {
    if (d && !matched.some((m) => m.slug === d.slug)) matched.push(d);
  };

  for (const siteSlug of center.siteSlugs) {
    const site = diveSites.find((s) => s.slug === siteSlug);
    if (site) {
      add(destinations.find((d) => d.slug === site.destinationSlug));
    }
  }

  const locNorm = normalize(center.location);
  const regNorm = normalize(center.region);
  for (const d of destinations) {
    const dNorm = normalize(d.name);
    if (locNorm.includes(dNorm) || dNorm.includes(locNorm)) {
      add(d);
    }
  }

  const comm = communityFor(center.region);
  const sameComm = destinations.filter(
    (d) => normalize(d.region) === regNorm || communityFor(d.region) === comm
  );
  for (const d of rotateSlice(sameComm, seedIndex, 3)) {
    add(d);
  }

  return matched.slice(0, 3);
}

/**
 * Encuentra especies marinas (/fauna/[slug]) observables en la zona de una actividad.
 */
export function getSpeciesForActivity(activity: Activity): Species[] {
  const linkedSites = diveSites.filter((s) => activity.siteSlugs.includes(s.slug));
  const animals = Array.from(new Set(linkedSites.flatMap((s) => s.animals)));
  const comm = communityFor(activity.region);

  const byAnimalName = species.filter((sp) =>
    animals.some(
      (an) =>
        normalize(sp.name).includes(normalize(an)) ||
        normalize(an).includes(normalize(sp.name.split(" ")[0]))
    )
  );

  const byRegion = species.filter(
    (sp) =>
      !byAnimalName.includes(sp) &&
      sp.occurrences.some((occ) => communityFor(occ.region) === comm || occ.region === activity.region)
  );

  const combined = [...byAnimalName, ...rotateSlice(byRegion, activity.id, 6)];
  return rotateSlice(combined.length ? combined : species, activity.id, 4);
}

/**
 * Selecciona guías prácticas (/guias/[slug]) contextuales según el tipo y nivel de la actividad.
 */
export function getGuidesForActivity(activity: Activity): Guide[] {
  const preferredSlugs: string[] = [];

  if (activity.type === "Bautismo" || activity.type === "Snorkel") {
    preferredSlugs.push(
      "bautismo-de-buceo-en-espana",
      "cuanto-cuesta-un-bautismo-de-buceo",
      "bautismo-vs-curso-open-water",
      "requisitos-para-bucear-en-espana"
    );
  } else if (activity.type === "Curso") {
    preferredSlugs.push(
      "bautismo-vs-curso-open-water",
      "padi-vs-ssi-diferencias",
      "como-elegir-escuela-de-buceo",
      "que-equipo-necesito-para-empezar-a-bucear"
    );
  } else if (activity.type === "Pecio") {
    preferredSlugs.push(
      "buceo-en-pecios-en-espana",
      "mejores-zonas-de-buceo-en-espana",
      "mejor-epoca-para-bucear-en-espana",
      "que-equipo-necesito-para-empezar-a-bucear"
    );
  } else {
    preferredSlugs.push(
      "mejores-zonas-de-buceo-en-espana",
      "mejor-epoca-para-bucear-en-espana",
      "buceo-en-pecios-en-espana",
      "como-elegir-escuela-de-buceo",
      "que-equipo-necesito-para-empezar-a-bucear"
    );
  }

  const primary = preferredSlugs
    .map((slug) => guides.find((g) => g.slug === slug))
    .filter((g): g is Guide => Boolean(g));
  const others = guides.filter((g) => !primary.includes(g));

  return [...primary.slice(0, 2), ...rotateSlice(others, activity.id, 1)];
}

/**
 * Encuentra el destino (/buceo/[slug]) más cercano para un avistamiento de fauna.
 */
export function getDestinationForOccurrence(name: string, region: string): Destination | undefined {
  const nameNorm = normalize(name);
  const regNorm = normalize(region);

  for (const d of destinations) {
    const dNorm = normalize(d.name);
    if (nameNorm.includes(dNorm) || dNorm.includes(nameNorm)) return d;
  }

  const comm = communityFor(region);
  const inRegion = destinations.filter(
    (d) => normalize(d.region) === regNorm || communityFor(d.region) === comm
  );
  if (!inRegion.length) return undefined;
  const seed = name.split("").reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
  return inRegion[seed % inRegion.length];
}
