import type { BlogBlock } from "@/data/blog/types";

export const p = (text: string): BlogBlock => ({ type: "p", text });
export const h2 = (text: string): BlogBlock => ({ type: "h2", text });
export const h3 = (text: string): BlogBlock => ({ type: "h3", text });
export const ul = (items: string[]): BlogBlock => ({ type: "ul", items });
export const table = (
  headers: [string, string],
  rows: [string, string][]
): BlogBlock => ({ type: "table", headers, rows });
export const faqs = (
  items: { question: string; answer: string }[],
  title = "FAQs"
): BlogBlock => ({ type: "faqs", title, items });
