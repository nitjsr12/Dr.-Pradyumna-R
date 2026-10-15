/** Educational articles — full guides live under `/articles/[slug]`. */

export function articleHref(slug: string) {
  return `/articles/${slug}`;
}
import { blogPosts } from "@/data/blog";
import type { BlogPost } from "@/data/blog/types";

export const articleCategories = [
  "All",
  "Sports Medicine",
  "Orthopaedics",
  "Recovery",
  "Patient Education",
] as const;

/** Blog filters & section order — Joint Replacement replaces “Hip” in labels; Hip section stays last. */
export const blogTopics = [
  { id: "all", label: "All Articles" },
  { id: "knee", label: "Knee" },
  { id: "shoulder", label: "Shoulder" },
  { id: "elbow", label: "Elbow" },
  { id: "foot-ankle", label: "Foot & Ankle" },
  { id: "non-surgical", label: "Non-Surgical Care" },
  { id: "joint-replacement", label: "Joint Replacement" },
  { id: "hip", label: "Hip" },
] as const;

export type BlogTopicId = (typeof blogTopics)[number]["id"];
export type BlogBodyTopic = Exclude<BlogTopicId, "all">;

/** Body-area topics only — order matches `blogTopics` (excludes “All”). */
export const blogBodyTopics = blogTopics.filter(
  (t): t is (typeof blogTopics)[number] & { id: BlogBodyTopic } => t.id !== "all"
);

/** Links for empty speciality sections on the blog index (same layout, placeholder body). */
export const blogTopicExploreLinks: Partial<
  Record<BlogBodyTopic, { href: string; cta: string }>
> = {
  "foot-ankle": {
    href: "/area-of-specialties#other-procedures",
    cta: "Foot & ankle procedures",
  },
  "joint-replacement": {
    href: "/treatments/joint-replacement-surgery-bangalore",
    cta: "Joint replacement care",
  },
  hip: { href: "/area-of-specialties#hip-procedures", cta: "Hip procedures" },
};

export type SampleArticle = {
  slug: string;
  category: Exclude<(typeof articleCategories)[number], "All">;
  topic: BlogBodyTopic;
  chipLabel: string;
  conditionName: string;
  title: string;
  excerpt: string;
  readingTime: string;
  coverImage: string;
  coverPosition?: string;
  featured?: boolean;
  /** Legacy flag — listing uses live blog guides. */
  isSample: true;
};

function toSampleArticle(post: BlogPost, featured?: boolean): SampleArticle {
  return {
    slug: post.slug,
    category: post.category,
    topic: post.topic,
    chipLabel: post.chipLabel,
    conditionName: post.conditionName,
    title: post.title,
    excerpt: post.excerpt,
    readingTime: post.readingTime,
    coverImage: post.coverImage,
    coverPosition: post.coverPosition,
    featured,
    isSample: true,
  };
}

export const sampleArticles: SampleArticle[] = blogPosts.map((post, i) =>
  toSampleArticle(post, i === 0)
);
