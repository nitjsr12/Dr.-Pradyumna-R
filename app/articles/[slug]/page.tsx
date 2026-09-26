import { notFound } from "next/navigation";
import { ArticlePostContent } from "@/components/pages/ArticlePostContent";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { blogPostSlugs, getBlogPost, getRelatedBlogPosts } from "@/data/blog";
import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPostSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    ...pageMetadata(post.metaTitle, post.metaDescription, `/articles/${post.slug}`),
    keywords: post.keywords,
  };
}

export default async function ArticlePostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = getRelatedBlogPosts(slug, 3);

  return (
    <>
      <ArticlePostContent post={post} related={related} />
      <ConsultationCTA />
    </>
  );
}
