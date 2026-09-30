import type { BusinessConfig } from "@/data/business";
import { maisonAura } from "@/data/businesses/maison-aura";
import { samanthaXavier } from "@/data/businesses/samantha-xavier";

export const businesses = {
  "maison-aura": maisonAura,
  "samantha-xavier": samanthaXavier,
} satisfies Record<string, BusinessConfig>;

export type BusinessSlug = keyof typeof businesses;

export function getBusiness(slug: string) {
  return businesses[slug as BusinessSlug];
}

export function getBusinessSlugs(): BusinessSlug[] {
  return Object.keys(businesses) as BusinessSlug[];
}
