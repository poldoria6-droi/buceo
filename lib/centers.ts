import { activities } from "@/data/activities";
import type { Activity } from "@/data/types";
import { centers, centerActivityLinks } from "@/data/centers";

export function getActivityCenter(activity: Activity) {
  const link = centerActivityLinks.find(item => item.activitySlug === activity.slug);
  return link ? centers.find(center => center.id === link.centerId) : undefined;
}

export function getCenterActivities(centerId: string) {
  const slugs = new Set(centerActivityLinks.filter(link => link.centerId === centerId).map(link => link.activitySlug));
  return activities.filter(activity => slugs.has(activity.slug));
}
