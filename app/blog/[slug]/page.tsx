import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import { BlogPostBody } from "@/components/blog/BlogPostBody";
import { BookAppointmentLink } from "@/components/layout/BookAppointmentLink";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { blogPostSlugs, getBlogPost } from "@/data/blog";
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
    ...pageMetadata(post.metaTitle, post.metaDescription, `/blog/${post.slug}`),
    keywords: post.keywords,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <>
      <div className="border-b border-border-subtle bg-bg-warm pt-[4.75rem] lg:pt-[5.5rem]">
        <Container className="py-8 md:py-10">
          <Link
            href="/articles"
            className="focus-ring inline-flex items-center gap-2 text-sm font-semibold text-teal hover:text-navy"
          >
            <ArrowLeft className="size-4" aria-hidden />
            All guides
          </Link>
          <p className="mt-6 rounded-2xl border border-amber-200/80 bg-amber-50 px-4 py-3 text-sm leading-relaxed text-amber-950">
            This guide is prepared for clinical review by Dr. Pradyumna R before final
            publication. It is educational only and not a substitute for an in-person
            assessment.
          </p>
          <p className="label-caps mt-8">{post.conditionName}</p>
          <h1 className="title-page mt-4 max-w-4xl text-balance">{post.pageTitle}</h1>
          <p className="mt-4 flex items-center gap-2 text-sm text-muted">
            <Clock className="size-4 text-teal" aria-hidden />
            {post.readingTime} read
          </p>
        </Container>
      </div>

      <Container className="section-y max-w-3xl">
        <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-2xl border border-border-subtle bg-mint/30">
          <Image
            src={post.coverImage}
            alt=""
            fill
            priority
            quality={90}
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
          />
          <span className="absolute left-4 top-4 rounded-md bg-white/95 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.14em] text-teal">
            {post.chipLabel}
          </span>
        </div>

        <BlogPostBody blocks={post.blocks} />

        <div className="mt-12 rounded-2xl border border-teal/20 bg-mint/40 p-6 md:p-8">
          <h2 className="font-heading text-xl font-bold text-navy">{post.ctaHeading}</h2>
          <p className="mt-3 text-[15px] leading-relaxed text-muted">{post.ctaLine}</p>
          <Button asChild className="mt-6" size="lg">
            <BookAppointmentLink>
              Book a consultation
              <ArrowRight className="size-4" aria-hidden />
            </BookAppointmentLink>
          </Button>
        </div>

        <p className="mt-10 border-t border-border-subtle pt-8 text-sm leading-relaxed text-muted">
          {post.medicallyReviewed}
        </p>
      </Container>
    </>
  );
}
