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
      "An injury can affect more than performance. Learn how sports injuries are assessed, what factors influence treatment, and what recovery can involve.",
    readingTime: "5 min",
    featured: true,
    isSample: true,
  },
  {
    slug: "joint-pain-evaluation",
    category: "Orthopaedics",
    title: "When Does Joint Pain Need Attention?",
    excerpt:
      "Occasional discomfort may settle on its own. Persistent pain, restricted movement or recurring symptoms may need a closer look. Learn what to consider before seeking specialist advice.",
    readingTime: "6 min",
    isSample: true,
  },
  {
    slug: "return-to-activity",
    category: "Recovery",
    title: "Getting Back to Activity After an Injury",
    excerpt:
      "Returning to exercise or sport is rarely about simply waiting for pain to disappear. Explore the principles behind a gradual and appropriate return to activity.",
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
