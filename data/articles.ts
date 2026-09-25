/** Educational articles — full guides live under `/blog/[slug]`. */
import { blogPosts } from "@/data/blog";
import type { BlogPost } from "@/data/blog/types";

export const articleCategories = [
  "All",
  "Sports Medicine",
  "Orthopaedics",
  "Recovery",
  "Patient Education",
] as const;

/** Homepage blog strip filters (counts derived from articles). */
export const blogTopics = [
  { id: "all", label: "All Articles" },
  { id: "knee", label: "Knee" },
  { id: "shoulder", label: "Shoulder" },
  { id: "hip", label: "Hip" },
  { id: "ankle-foot", label: "Ankle & Foot" },
  { id: "elbow", label: "Elbow" },
  { id: "non-surgical", label: "Non-Surgical Care" },
] as const;

export type BlogTopicId = (typeof blogTopics)[number]["id"];
export type BlogBodyTopic = Exclude<BlogTopicId, "all">;

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
