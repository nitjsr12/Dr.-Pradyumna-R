/** SAMPLE articles — not published medical content. */
export const articleCategories = [
  "All",
  "Sports Medicine",
  "Orthopaedics",
  "Recovery",
  "Patient Education",
] as const;

export type SampleArticle = {
  slug: string;
  category: Exclude<(typeof articleCategories)[number], "All">;
  title: string;
  excerpt: string;
  readingTime: string;
  featured?: boolean;
  isSample: true;
};

export const sampleArticles: SampleArticle[] = [
  {
    slug: "understanding-sports-injuries",
    category: "Sports Medicine",
    title: "Understanding Sports Injuries",
    excerpt:
      "Sample educational overview of how sports injuries are commonly assessed.",
    readingTime: "5 min",
    featured: true,
    isSample: true,
  },
  {
    slug: "joint-pain-evaluation",
    category: "Orthopaedics",
    title: "When Should Joint Pain Be Evaluated?",
    excerpt: "Sample guide on when to seek specialist input for joint pain.",
    readingTime: "6 min",
    isSample: true,
  },
  {
    slug: "return-to-activity",
    category: "Recovery",
    title: "Returning to Activity After an Injury",
    excerpt: "Sample notes on phased return—individual plans vary.",
    readingTime: "7 min",
    isSample: true,
  },
  {
    slug: "musculoskeletal-pain",
    category: "Orthopaedics",
    title: "Understanding Musculoskeletal Pain",
    excerpt: "Sample introduction to common musculoskeletal symptoms.",
    readingTime: "5 min",
    isSample: true,
  },
  {
    slug: "movement-recovery",
    category: "Recovery",
    title: "How Movement Can Influence Recovery",
    excerpt: "Sample educational content on movement and rehabilitation.",
    readingTime: "6 min",
    isSample: true,
  },
  {
    slug: "patient-education-basics",
    category: "Patient Education",
    title: "Preparing for Your Orthopaedic Visit",
    excerpt: "Sample checklist for consultation preparation.",
    readingTime: "4 min",
    isSample: true,
  },
];
