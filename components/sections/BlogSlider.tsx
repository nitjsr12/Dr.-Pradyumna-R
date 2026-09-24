"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { sampleArticles } from "@/data/articles";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;
const SLIDE_MS = 5600;

const coverForCategory: Record<string, { src: string; position: string }> = {
  "Sports Medicine": { src: "/images/hero/slide-sports.jpg", position: "object-center" },
  Orthopaedics: { src: "/images/hero/slide-movement.jpg", position: "object-[70%_center]" },
  Recovery: { src: "/images/hero/slide-precision.jpg", position: "object-[28%_center]" },
  "Patient Education": { src: "/images/hero/slide-doctor.jpg", position: "object-[22%_center]" },
};

export function BlogSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  const posts = sampleArticles;
  const count = posts.length;
  const post = posts[index];
  const cover = coverForCategory[post.category] ?? coverForCategory.Orthopaedics;

  const go = (next: number) => {
    setIndex(((next % count) + count) % count);
  };

  useEffect(() => {
    if (reduce || paused) return;
    const id = window.setTimeout(() => go(index + 1), SLIDE_MS);
    return () => window.clearTimeout(id);
  }, [reduce, paused, index, count]);

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-mint/60 via-white to-bg-warm py-16 md:py-20 lg:py-24"
      aria-roledescription="carousel"
      aria-label="Articles and blogs"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node)) {
          setPaused(false);
        }
      }}
    >
      <div
        className="pointer-events-none absolute -left-16 top-12 size-72 rounded-full bg-teal/15 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-12 bottom-8 size-64 rounded-full bg-gold/15 blur-3xl"
        aria-hidden
      />

      <Container className="relative">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="label-caps">Journal & blogs</p>
            <h2 className="title-section mt-5 text-balance">
              Clarity for every{" "}
              <span className="text-accent">step of your care.</span>
            </h2>
            <p className="text-body mt-4 max-w-xl">
              Practical insights on orthopaedics, sports medicine, injuries, joint health and
              recovery — explained in a way that is useful and easy to understand.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap items-center gap-3">
            <Button variant="secondary" size="sm" asChild className="hover:translate-y-0">
              <Link href="/articles">
                View all articles
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </Button>
            <button
              type="button"
              onClick={() => go(index - 1)}
              className="focus-ring inline-flex size-11 items-center justify-center rounded-full border border-navy/10 bg-white text-navy shadow-sm hover:bg-navy hover:text-white"
              aria-label="Previous article"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              className="focus-ring inline-flex size-11 items-center justify-center rounded-full bg-teal text-white shadow-sm hover:bg-navy"
              aria-label="Next article"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>

        <div className="relative mt-10 min-h-[380px] lg:mt-12">
          <AnimatePresence mode="wait">
            <motion.article
              key={post.slug}
              initial={reduce ? false : { opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduce ? undefined : { opacity: 0, x: -40 }}
              transition={{ duration: 0.5, ease }}
              className="grid overflow-hidden rounded-[28px] bg-white shadow-[var(--shadow-soft)] lg:grid-cols-2"
            >
              <div className="relative min-h-[240px] lg:min-h-[360px]">
                <Image
                  src={cover.src}
                  alt=""
                  fill
                  quality={90}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className={cn("object-cover", cover.position)}
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-navy/10"
                  aria-hidden
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-teal">
                  {post.category}
                </span>
              </div>

              <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                <p className="text-xs font-bold tabular-nums tracking-[0.16em] text-muted">
                  {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
                  <span className="mx-2 text-border">·</span>
                  {post.readingTime} read
                </p>
                <h3 className="mt-4 font-heading text-2xl font-bold tracking-tight text-navy sm:text-3xl">
                  {post.title}
                </h3>
                <p className="text-body mt-4 text-[15px] leading-relaxed">{post.excerpt}</p>
                <Link
                  href={`/articles#${post.slug}`}
                  className="group focus-ring mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-teal"
                >
                  Read the article
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>

        <div className="mt-6 h-1 overflow-hidden rounded-full bg-navy/10">
          {!reduce && (
            <span
              key={`${post.slug}-${paused}`}
              className="block h-full w-full origin-left rounded-full bg-teal"
              style={{
                animationName: "hero-progress",
                animationDuration: `${SLIDE_MS}ms`,
                animationTimingFunction: "linear",
                animationFillMode: "forwards",
                animationPlayState: paused ? "paused" : "running",
              }}
            />
          )}
        </div>

        <div className="mt-5 flex gap-2 overflow-x-auto pb-1" role="tablist" aria-label="Articles">
          {posts.map((item, itemIndex) => (
            <button
              key={item.slug}
              type="button"
              role="tab"
              aria-selected={itemIndex === index}
              onClick={() => setIndex(itemIndex)}
              className={cn(
                "focus-ring shrink-0 rounded-full px-3 py-1.5 text-xs font-semibold transition-colors sm:text-sm",
                itemIndex === index
                  ? "bg-teal text-white"
                  : "bg-white text-navy/70 shadow-sm hover:text-teal"
              )}
            >
              {item.title}
            </button>
          ))}
        </div>
      </Container>
    </section>
  );
}
