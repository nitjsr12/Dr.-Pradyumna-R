import type { BlogPost } from "@/data/blog/types";
import { aclTearPost } from "@/data/blog/post-acl";
import { ankleInstabilityPost } from "@/data/blog/post-ankle";
import { tennisElbowPost } from "@/data/blog/post-elbow";
import { hipImpingementPost } from "@/data/blog/post-hip";
import { prpKneePost } from "@/data/blog/post-prp";
import { rotatorCuffPost } from "@/data/blog/post-rotator-cuff";

export const blogPosts: BlogPost[] = [
  aclTearPost,
  rotatorCuffPost,
  hipImpingementPost,
  ankleInstabilityPost,
  tennisElbowPost,
  prpKneePost,
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export const blogPostSlugs = blogPosts.map((post) => post.slug);

export function getRelatedBlogPosts(currentSlug: string, limit = 3): BlogPost[] {
  const current = getBlogPost(currentSlug);
  if (!current) return blogPosts.filter((p) => p.slug !== currentSlug).slice(0, limit);

  const sameTopic = blogPosts.filter(
    (p) => p.slug !== currentSlug && p.topic === current.topic
  );
  const rest = blogPosts.filter(
    (p) => p.slug !== currentSlug && p.topic !== current.topic
  );
  return [...sameTopic, ...rest].slice(0, limit);
}
