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
