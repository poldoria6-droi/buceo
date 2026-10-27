const communities: Record<string, string> = {
  "Costa Daurada": "Cataluña", "Costa Brava": "Cataluña",
  "Alicante": "Comunidad Valenciana", "Castellón": "Comunidad Valenciana", "Costa Blanca": "Comunidad Valenciana",
};
export function communityFor(region: string) { return communities[region] || region; }
export function destinationsFor(activities: { region: string; destination: string }[], region: string) {
  return Array.from(new Set(activities.filter(a => region === "Todos" || communityFor(a.region) === communityFor(region)).map(a => a.destination))).sort((a,b) => a.localeCompare(b, "es"));
}

export function buildActivitySummary(
  activity: {
    type: string;
    destination: string;
    region: string;
    level: string;
    duration?: string;
    notes?: string;
  },
  centerName?: string
): string {
  if (
    activity.notes &&
    !/^Experiencia de buceo disponible|^Actividad organizada por /i.test(activity.notes)
  ) {
    return activity.notes;
  }
  const byCenter = centerName ? ` con el equipo de ${centerName}` : "";
  const hasRealDuration = activity.duration && activity.duration !== "Consultar disponibilidad";
  const durText = hasRealDuration ? ` Tiene una duración aproximada de ${activity.duration!.toLowerCase()}.` : "";

  if (activity.type === "Bautismo") {
    return `Primera toma de contacto con el buceo en ${activity.destination} (${activity.region})${byCenter}. Comienza con una explicación práctica fuera del agua y continúa con una inmersión guiada a poca profundidad, pensada para disfrutar del fondo marino con calma y sin necesidad de experiencia previa.${durText}`;
  }
  if (activity.type === "Curso") {
    return `Formación práctica y teórica en ${activity.destination} (${activity.region})${byCenter} para aprender o perfeccionar tus técnicas de inmersión y obtener tu certificación oficial.${durText}`;
  }
  if (activity.type === "Snorkel") {
    return `Recorrido guiado de snorkel en aguas de ${activity.destination} (${activity.region})${byCenter}, ideal para observar la vida marina desde superficie sin necesidad de titulación previa.${durText}`;
  }
  if (activity.type === "Pecio") {
    return `Salida de inmersión en ${activity.destination} (${activity.region})${byCenter} orientada a buceadores acreditados que buscan explorar fondos profundos o barcos hundidos de la zona.${durText}`;
  }
  return `Salida de inmersión guiada en ${activity.destination} (${activity.region})${byCenter} para descubrir los fondos y la vida marina de la zona.${durText}`;
}

export function buildActivityCardSummary(activity: {
  type: string;
  destination: string;
  region: string;
  level: string;
  duration?: string;
  notes?: string;
}): string {
  if (
    activity.notes &&
    !/^Experiencia de buceo disponible|^Actividad organizada por /i.test(activity.notes)
  ) {
    return activity.notes;
  }
  const hasRealDuration = activity.duration && activity.duration !== "Consultar disponibilidad";
  const durSuffix = hasRealDuration ? ` (${activity.duration!.toLowerCase()})` : "";

  if (activity.type === "Bautismo") {
    return `Primera inmersión guiada a poca profundidad en ${activity.destination}${durSuffix}, con instructor y sin necesidad de experiencia previa.`;
  }
  if (activity.type === "Curso") {
    return `Formación teórica y práctica en ${activity.destination}${durSuffix} para obtener o avanzar en tu certificación de buceo (nivel ${activity.level.toLowerCase()}).`;
  }
  if (activity.type === "Snorkel") {
    return `Salida guiada de snorkel en la costa de ${activity.destination}${durSuffix}, ideal para observar fauna marina desde superficie.`;
  }
  if (activity.type === "Pecio") {
    return `Inmersión guiada en pecios y fondos de ${activity.destination}${durSuffix} para buceadores de nivel ${activity.level.toLowerCase()}.`;
  }
  return `Salida de buceo guiada en ${activity.destination}${durSuffix} para explorar los puntos de inmersión de la zona (nivel ${activity.level.toLowerCase()}).`;
}
