import type { Activity } from "@/data/types";
const communities: Record<string, string> = {
  "Costa Daurada": "Cataluña", "Costa Brava": "Cataluña",
  "Alicante": "Comunidad Valenciana", "Castellón": "Comunidad Valenciana", "Costa Blanca": "Comunidad Valenciana",
};
export function communityFor(region: string) { return communities[region] || region; }
export function destinationsFor(activities: Activity[], region: string) {
  return Array.from(new Set(activities.filter(a => region === "Todos" || communityFor(a.region) === communityFor(region)).map(a => a.destination))).sort((a,b) => a.localeCompare(b, "es"));
}
