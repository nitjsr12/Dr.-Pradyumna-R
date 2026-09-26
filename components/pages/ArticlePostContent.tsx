import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import { BlogPostBody } from "@/components/blog/BlogPostBody";
import { PageBannerBackground } from "@/components/hero/PageBannerBackground";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { BookAppointmentLink } from "@/components/layout/BookAppointmentLink";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { sampleArticles } from "@/data/articles";
import type { BlogPost } from "@/data/blog/types";
import { cn } from "@/lib/utils";

type Props = {
  post: BlogPost;
  related: BlogPost[];
};

export function ArticlePostContent({ post, related }: Props) {
  const relatedCards = related
    .map((p) => sampleArticles.find((a) => a.slug === p.slug))
    .filter(Boolean);

  return (
    <>
      <header className="hero-banner relative overflow-hidden border-b border-border-subtle pt-[4.75rem] lg:pt-[5.5rem]">
        <PageBannerBackground />
        <Container className="relative py-10 md:py-14 lg:py-16">
          <Link
            href="/articles"
            className="focus-ring inline-flex items-center gap-2 text-sm font-semibold text-teal-bright hover:text-white"
          >
            <ArrowLeft className="size-4" aria-hidden />
            All guides
          </Link>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-white/12 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-teal-bright backdrop-blur-sm">
              {post.chipLabel}
            </span>
            <span className="inline-flex items-center gap-1.5 text-sm text-white/80">
              <Clock className="size-4 text-teal-bright" aria-hidden />
              {post.readingTime} read
            </span>
          </div>
          <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.16em] text-teal-bright/90">
            {post.conditionName}
          </p>
          <h1 className="title-page mt-4 max-w-4xl text-balance">{post.pageTitle}</h1>
          <p className="text-body mt-5 max-w-2xl md:text-lg">{post.excerpt}</p>
        </Container>
      </header>

      <Container className="section-y">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          <article className="lg:col-span-8">
            <p className="rounded-2xl border border-teal/15 bg-mint/25 px-4 py-3 text-sm leading-relaxed text-navy/85">
              Educational guide only — not a substitute for an in-person assessment with Dr.
              Pradyumna R.
            </p>
            <div className="mt-10">
              <BlogPostBody blocks={post.blocks} />
            </div>
            <p className="mt-12 border-t border-border-subtle pt-8 text-sm leading-relaxed text-muted">
              {post.medicallyReviewed}
            </p>
          </article>

          <aside className="lg:col-span-4">
            <div className="sticky top-28 space-y-6">
              <div className="overflow-hidden rounded-[24px] border border-border-subtle shadow-[var(--shadow-card)]">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={post.coverImage}
                    alt=""
                    fill
                    quality={90}
                    sizes="(max-width: 1024px) 100vw, 360px"
                    className={cn("object-cover", post.coverPosition ?? "object-center")}
                  />
                </div>
                <div className="bg-white p-6">
                  <h2 className="font-heading text-lg font-bold text-navy">{post.ctaHeading}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{post.ctaLine}</p>
                  <Button asChild className="mt-5 w-full" size="lg">
                    <BookAppointmentLink>
                      Book a consultation
                      <ArrowRight className="size-4" aria-hidden />
                    </BookAppointmentLink>
                  </Button>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {relatedCards.length > 0 && (
          <div className="mt-16 border-t border-border-subtle pt-14 md:mt-20">
            <h2 className="title-section text-balance">
              Related <span className="text-accent">guides</span>
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedCards.map((article) =>
                article ? <ArticleCard key={article.slug} article={article} /> : null
              )}
            </div>
            <p className="mt-8 text-center">
              <Link
                href="/articles"
                className="focus-ring inline-flex items-center gap-2 text-sm font-semibold text-teal hover:text-navy"
              >
                View all guides
                <ArrowRight className="size-4" />
              </Link>
            </p>
          </div>
        )}
      </Container>
    </>
  );
}
