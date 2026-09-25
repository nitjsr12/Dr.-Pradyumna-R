import type { BlogBodyTopic } from "@/data/articles";

export type BlogFaq = { question: string; answer: string };

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | {
      type: "table";
      headers: [string, string];
      rows: [string, string][];
    }
  | { type: "faqs"; title?: string; items: BlogFaq[] };

export type BlogPost = {
  slug: string;
  topic: BlogBodyTopic;
  chipLabel: string;
  conditionName: string;
  title: string;
  pageTitle: string;
  excerpt: string;
  readingTime: string;
  coverImage: string;
  coverPosition?: string;
  category: "Sports Medicine" | "Orthopaedics" | "Recovery" | "Patient Education";
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  blocks: BlogBlock[];
  ctaHeading: string;
  ctaLine: string;
  medicallyReviewed: string;
};
