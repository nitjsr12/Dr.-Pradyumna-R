import type { BlogBlock } from "@/data/blog/types";

export type TreatmentPage = {
  slug: string;
  /** Breadcrumb segment e.g. Knee, Hip, General */
  category: string;
  pageTitle: string;
  metaTitle: string;
  metaDescription: string;
  /** Hero subline — defaults to first paragraph if omitted */
  excerpt?: string;
  coverImage?: string;
  coverPosition?: string;
  keywords?: string[];
  blocks: BlogBlock[];
};

export const treatmentCoverByCategory: Record<string, { src: string; position?: string }> = {
  General: { src: "/images/expertise/clinic.webp" },
  Knee: { src: "/images/expertise/knee.webp" },
  Hip: { src: "/images/hero/slide-movement.jpg", position: "object-[40%_center]" },
  Shoulder: { src: "/images/expertise/shoulder.webp" },
  Elbow: { src: "/images/expertise/sports-medicine.webp" },
};

