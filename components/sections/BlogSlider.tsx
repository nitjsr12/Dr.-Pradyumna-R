"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import {
  blogTopics,
  sampleArticles,
  type BlogTopicId,
  type SampleArticle,
} from "@/data/articles";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

const AUTO_MS = 5000;

function countForTopic(topicId: BlogTopicId) {
  if (topicId === "all") return sampleArticles.length;
  return sampleArticles.filter((a) => a.topic === topicId).length;
}

function BlogGuideCard({ article }: { article: SampleArticle }) {
  return (
    <Link
      href={`/blog/${article.slug}`}
      className="focus-ring group flex h-full flex-col overflow-hidden rounded-2xl border border-border-subtle bg-white shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-mint/30">
        <Image
          src={article.coverImage}
          alt=""
          fill
          quality={90}
          sizes="(max-width: 1024px) 85vw, 400px"
          className={cn(
            "object-cover transition-transform duration-700 group-hover:scale-105",
            article.coverPosition ?? "object-center"
          )}
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-navy/35 to-transparent"
          aria-hidden
        />
        <span className="absolute left-3 top-3 rounded-md bg-white/95 px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.14em] text-teal">
          {article.chipLabel}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-teal">
          {article.conditionName}
        </p>
        <h3 className="mt-2 line-clamp-2 font-heading text-base font-bold leading-snug text-navy group-hover:text-teal sm:text-[17px]">
          {article.title}
        </h3>
        <p className="mt-2 line-clamp-2 flex-1 text-xs leading-relaxed text-muted sm:text-sm">
          {article.excerpt}
        </p>
        <p className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted">
          <span className="font-medium tabular-nums">{article.readingTime} read</span>
          <span className="text-border" aria-hidden>
            ·
          </span>
          <span className="inline-flex items-center gap-1 font-semibold text-teal">
            Read Guide
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
          </span>
        </p>
      </div>
    </Link>
  );
}

function useVisibleCount() {
  const [visible, setVisible] = useState(1.2);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setVisible(mq.matches ? 3 : 1.2);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return visible;
}

export function BlogSlider() {
  const [topic, setTopic] = useState<BlogTopicId>("all");
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [autoEpoch, setAutoEpoch] = useState(0);
  const trackRef = useRef<HTMLUListElement>(null);
  const reduce = useReducedMotion();
  const visible = useVisibleCount();

  const filtered = useMemo(() => {
    if (topic === "all") return sampleArticles;
    return sampleArticles.filter((a) => a.topic === topic);
  }, [topic]);

  const maxIndex = Math.max(0, filtered.length - Math.ceil(visible));

  const scrollToIndex = useCallback(
    (next: number) => {
      const list = trackRef.current;
      if (!list) return;
      const child = list.children[next] as HTMLElement | undefined;
      if (!child) return;
      list.scrollTo({ left: child.offsetLeft - list.offsetLeft, behavior: "smooth" });
    },
    []
  );

  useEffect(() => {
    setIndex(0);
    trackRef.current?.scrollTo({ left: 0, behavior: "auto" });
  }, [topic]);

  useEffect(() => {
    scrollToIndex(index);
  }, [index, scrollToIndex, filtered.length]);

  useEffect(() => {
    if (reduce || paused || filtered.length === 0) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current >= maxIndex ? 0 : current + 1));
    }, AUTO_MS);
    return () => window.clearInterval(id);
  }, [reduce, paused, maxIndex, filtered.length, autoEpoch]);

  const go = (delta: number) => {
    setAutoEpoch((e) => e + 1);
    setIndex((current) => {
      if (delta > 0) return current >= maxIndex ? 0 : current + 1;
      return current <= 0 ? maxIndex : current - 1;
    });
  };

  const onTopicChange = (id: BlogTopicId) => {
    setTopic(id);
    setIndex(0);
    setAutoEpoch((e) => e + 1);
  };

  const showCarousel = filtered.length > 0 && !reduce;

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-mint/60 via-white to-bg-warm py-10 md:py-14 lg:py-16"
      aria-label="Articles and guides"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
    >
      <div
        className="pointer-events-none absolute -left-16 top-12 size-72 rounded-full bg-teal/15 blur-3xl"
        aria-hidden
      />

      <Container className="relative">
        <div className="max-w-2xl">
          <p className="label-caps">Insights & guides</p>
          <h2 className="title-section mt-5 text-balance">
            Know your joints.{" "}
            <span className="text-accent">Make better decisions.</span>
          </h2>
          <p className="text-body mt-4 max-w-xl">
            Clear, doctor-written guides on shoulder, knee, hip, ankle and elbow problems: what
            causes them, when to worry, and every treatment option from physiotherapy and PRP to
            keyhole surgery. Written and reviewed by Dr. Pradyumna R.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div
            className="flex flex-wrap gap-2"
            role="tablist"
            aria-label="Filter articles by topic"
          >
            {blogTopics.map((item) => {
              const selected = item.id === topic;
              const count = countForTopic(item.id);
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => onTopicChange(item.id)}
                  className={cn(
                    "focus-ring inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                    selected
                      ? "bg-teal text-white shadow-md"
                      : "border border-navy/10 bg-white text-navy/80 hover:border-teal/40 hover:text-teal"
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      "inline-flex min-w-[1.25rem] items-center justify-center rounded-full px-1.5 py-0.5 text-[11px] font-bold tabular-nums",
                      selected ? "bg-white/20 text-white" : "bg-mint text-teal"
                    )}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {showCarousel && (
            <div className="flex shrink-0 items-center gap-2 self-end sm:self-start">
              <button
                type="button"
                onClick={() => go(-1)}
                className="focus-ring inline-flex size-11 items-center justify-center rounded-full border border-navy/10 bg-white text-navy shadow-sm transition-colors hover:bg-navy hover:text-white"
                aria-label="Previous guide"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                className="focus-ring inline-flex size-11 items-center justify-center rounded-full bg-teal text-white shadow-sm transition-colors hover:bg-navy"
                aria-label="Next guide"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          )}
        </div>

        {filtered.length === 0 ? (
          <p className="mt-8 rounded-2xl border border-dashed border-navy/15 bg-white/80 px-6 py-10 text-center text-sm text-muted">
            Guides in this category will appear here.{" "}
            <Link href="/articles" className="font-semibold text-teal hover:underline">
              Browse all articles
            </Link>
          </p>
        ) : reduce ? (
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((article) => (
              <li key={article.slug} className="min-w-0">
                <BlogGuideCard article={article} />
              </li>
            ))}
          </ul>
        ) : (
          <div className="relative mt-8">
            <ul
              ref={trackRef}
              className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] lg:overflow-x-hidden [&::-webkit-scrollbar]:hidden"
              aria-label="Article guides carousel"
            >
              {filtered.map((article) => (
                <li
                  key={article.slug}
                  className="w-[calc((100%-1rem)/1.2)] shrink-0 snap-start lg:w-[calc((100%-2rem)/3)]"
                >
                  <BlogGuideCard article={article} />
                </li>
              ))}
            </ul>

            <div className="mt-6 flex items-center gap-3">
              <div className="h-1 min-w-[80px] flex-1 overflow-hidden rounded-full bg-navy/10 lg:max-w-md">
                {!reduce && (
                  <span
                    key={`${index}-${paused}-${autoEpoch}`}
                    className="block h-full origin-left rounded-full bg-teal"
                    style={{
                      animationName: "hero-progress",
                      animationDuration: `${AUTO_MS}ms`,
                      animationTimingFunction: "linear",
                      animationFillMode: "forwards",
                      animationPlayState: paused ? "paused" : "running",
                    }}
                  />
                )}
              </div>
              <p className="shrink-0 text-xs font-semibold tabular-nums text-muted">
                {String(index + 1).padStart(2, "0")}{" "}
                <span className="text-muted-light">/ {String(maxIndex + 1).padStart(2, "0")}</span>
              </p>
            </div>
          </div>
        )}

        <div className="mt-10 flex justify-center sm:justify-start">
          <Button variant="secondary" size="sm" asChild>
            <Link href="/articles">
              View All Articles
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
