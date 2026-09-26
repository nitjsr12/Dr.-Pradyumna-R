import type { TreatmentPage } from "@/data/treatments/types";
import { generalProcedurePages } from "@/data/treatments/posts/general-procedures";
import { hipProcedurePages } from "@/data/treatments/posts/hip-procedures";
import { kneeProcedurePages } from "@/data/treatments/posts/knee-procedures";
import { shoulderProcedurePages } from "@/data/treatments/posts/shoulder-procedures";
import { elbowProcedurePages } from "@/data/treatments/posts/elbow-procedures";

export const treatmentPages: TreatmentPage[] = [
  ...generalProcedurePages,
  ...kneeProcedurePages,
  ...hipProcedurePages,
  ...shoulderProcedurePages,
  ...elbowProcedurePages,
];

import { legacyTreatmentSlugs } from "@/data/treatments/redirects";

export function resolveTreatmentSlug(slug: string): string {
  return legacyTreatmentSlugs[slug] ?? slug;
}

export function getTreatmentPage(slug: string): TreatmentPage | undefined {
  const resolved = resolveTreatmentSlug(slug);
  return treatmentPages.find((page) => page.slug === resolved);
}

export { treatmentLegacyRedirects } from "@/data/treatments/redirects";

export const treatmentSlugs = treatmentPages.map((page) => page.slug);
