"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, Clock, Search } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import {
  articleHref,
  blogTopics,
  sampleArticles,
  type BlogTopicId,
  type SampleArticle,
} from "@/data/articles";
import { PageBannerBackground } from "@/components/hero/PageBannerBackground";
import { BookAppointmentLink } from "@/components/layout/BookAppointmentLink";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { FadeIn, Stagger, StaggerChild } from "@/components/animations/Reveal";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

function FeaturedGuide({ article }: { article: SampleArticle }) {
  return (
    <Link
      href={articleHref(article.slug)}
      className="focus-ring group grid overflow-hidden rounded-[28px] border border-border-subtle/80 bg-white shadow-[var(--shadow-card)] transition-all duration-300 hover:shadow-[var(--shadow-soft)] lg:grid-cols-12"
    >
      <div className="relative min-h-[240px] lg:col-span-6 lg:min-h-[360px]">
        <Image
          src={article.coverImage}
          alt=""
          fill
          priority
          quality={90}
          sizes="(max-width: 1024px) 100vw, 50vw"
          className={cn(
            "object-cover transition-transform duration-700 group-hover:scale-[1.03]",
            article.coverPosition ?? "object-center"
          )}
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/25 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-navy/20 lg:to-navy/75"
          aria-hidden
        />
        <span className="absolute left-5 top-5 rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-teal">
          Featured
        </span>
      </div>
      <div className="flex flex-col justify-center p-8 lg:col-span-6 lg:p-10 xl:p-12">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-teal">
          {article.conditionName}
        </p>
        <h2 className="mt-3 font-heading text-2xl font-bold leading-tight text-navy transition-colors group-hover:text-teal md:text-3xl">
          {article.title}
        </h2>
        <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-navy/70">
          {article.excerpt}
        </p>
        <p className="mt-6 flex flex-wrap items-center gap-3 text-sm">
          <span className="inline-flex items-center gap-1.5 font-medium text-muted">
            <Clock className="size-4 text-teal" aria-hidden />
            {article.readingTime} read
          </span>
          <span className="inline-flex items-center gap-2 font-semibold text-teal">
            Read guide
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </span>
        </p>
      </div>
    </Link>
  );
}

export function ArticlesIndexContent() {
  const [topic, setTopic] = useState<BlogTopicId>("all");
  const [query, setQuery] = useState("");
  const reduce = useReducedMotion();

  const featured = sampleArticles.find((a) => a.featured) ?? sampleArticles[0];

  const filtered = useMemo(() => {
    return sampleArticles.filter((a) => {
      const matchTopic = topic === "all" || a.topic === topic;
      const q = query.trim().toLowerCase();
      const matchQ =
        !q ||
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.conditionName.toLowerCase().includes(q);
      return matchTopic && matchQ;
    });
  }, [topic, query]);

  const showFeatured =
    topic === "all" &&
    !query.trim() &&
    featured != null &&
    filtered.some((a) => a.slug === featured.slug);

  const gridArticles = useMemo(() => {
    if (showFeatured && featured) {
      return filtered.filter((a) => a.slug !== featured.slug);
    }
    return filtered;
  }, [filtered, showFeatured, featured]);

  return (
    <>
      <section className="hero-banner relative overflow-hidden border-b border-border-subtle/80 pt-[4.75rem] lg:pt-[5.5rem]">
        <PageBannerBackground />
        <Container className="relative py-10 md:py-14 lg:py-16">
          <FadeIn className="max-w-2xl">
            <p className="label-caps-on-dark">Blogs & guides</p>
            <h1 className="title-page mt-5 text-balance">
              Move better. <span className="text-accent">Know better.</span>
            </h1>
            <p className="text-body mt-6 max-w-xl">
              Doctor-written guides on knee, shoulder, hip, ankle and elbow care — clear
              explanations to help you prepare for a consultation. Educational only, not medical
              advice.
            </p>
            <p className="mt-4 text-sm font-medium text-teal-bright/90">
              {sampleArticles.length} guides · Sports medicine & orthopaedics
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-teal hover:bg-teal/90">
                <BookAppointmentLink>
                  Book a consultation
                  <ArrowRight className="size-4 opacity-90" />
                </BookAppointmentLink>
              </Button>
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="relative bg-bg-warm py-10 md:py-14 lg:py-16">
        <div className="pattern-grid pointer-events-none absolute inset-0 opacity-35" aria-hidden />
        <Container className="relative">
          <FadeIn className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="label-caps">Browse by topic</p>
              <h2 className="title-section mt-3 text-balance">
                Find your <span className="text-accent">guide</span>
              </h2>
            </div>
            <div className="relative w-full lg:max-w-sm">
              <Search
                className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-navy/40"
                aria-hidden
              />
              <label className="sr-only" htmlFor="article-search">
                Search guides
              </label>
              <input
                id="article-search"
                type="search"
                placeholder="Search guides…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="focus-ring h-12 w-full rounded-full border border-navy/10 bg-white pl-11 pr-4 text-sm shadow-sm transition-shadow focus:shadow-[var(--shadow-soft)]"
              />
            </div>
          </FadeIn>

          <nav
            className="mt-8 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            aria-label="Filter by body area"
          >
            {blogTopics.map((t) => {
              const count =
                t.id === "all"
                  ? sampleArticles.length
                  : sampleArticles.filter((a) => a.topic === t.id).length;
              const active = topic === t.id;
              return (
                <button
                  key={t.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setTopic(t.id)}
                  className={cn(
                    "focus-ring shrink-0 rounded-full px-4 py-2.5 text-sm font-semibold transition-all",
                    active
                      ? "bg-navy text-white shadow-sm"
                      : "border border-navy/10 bg-white text-navy/75 hover:border-teal/40 hover:text-teal"
                  )}
                >
                  {t.label}
                  <span className={cn("ml-1.5 tabular-nums", active ? "text-white/70" : "text-muted")}>
                    ({count})
                  </span>
                </button>
              );
            })}
          </nav>

          {showFeatured && featured && (
            <motion.div
              className="mt-10 md:mt-12"
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease }}
            >
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.16em] text-teal">
                Start here
              </p>
              <FeaturedGuide article={featured} />
            </motion.div>
          )}

          {gridArticles.length === 0 ? (
            <p className="mt-12 text-center text-muted">No guides match your search.</p>
          ) : (
            <Stagger className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-8">
              {gridArticles.map((article) => (
                <StaggerChild key={article.slug}>
                  <ArticleCard article={article} />
                </StaggerChild>
              ))}
            </Stagger>
          )}
        </Container>
      </section>
    </>
  );
}
