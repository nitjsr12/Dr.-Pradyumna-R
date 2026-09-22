"use client";

import { useEffect, useState, type AnimationEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import {
  googleReviews,
  reviewCategories,
  type ReviewCategory,
} from "@/data/google-reviews";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

const INTERVAL_MS = 5600;
const ease = [0.22, 1, 0.36, 1] as const;

const avatarColors = [
  "from-teal to-[#0a4f52]",
  "from-[#1a4d7c] to-navy",
  "from-[#c9843a] to-[#8c5a22]",
  "from-[#3d6b8a] to-[#1d3d52]",
  "from-teal-bright to-teal",
  "from-[#6b4c9a] to-[#3d2a5c]",
];

function GoogleMark() {
  return (
    <svg viewBox="0 0 24 24" className="size-[18px] shrink-0" aria-hidden>
      <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.4h6.5a5.6 5.6 0 0 1-2.4 3.7v3h3.9c2.3-2.1 3.5-5.2 3.5-8.8Z" />
      <path fill="#34A853" d="M12 24c3.2 0 5.9-1.1 7.9-2.9l-3.9-3c-1.1.7-2.4 1.2-4 1.2-3.1 0-5.7-2.1-6.6-4.9H1.4v3.1A12 12 0 0 0 12 24Z" />
      <path fill="#FBBC05" d="M5.4 14.4A7.2 7.2 0 0 1 5 12c0-.8.1-1.6.4-2.4V6.5H1.4A12 12 0 0 0 0 12c0 1.9.5 3.8 1.4 5.5l4-3.1Z" />
      <path fill="#EA4335" d="M12 4.8c1.7 0 3.3.6 4.5 1.8l3.4-3.4A12 12 0 0 0 1.4 6.5l4 3.1C6.3 6.8 8.9 4.8 12 4.8Z" />
    </svg>
  );
}

function visibleCount(width: number) {
  if (width >= 1024) return 3;
  if (width >= 700) return 2;
  return 1;
}

export function GoogleReviews() {
  const [category, setCategory] = useState<ReviewCategory>("All");
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(3);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();

  const reviews =
    category === "All"
      ? googleReviews
      : googleReviews.filter((review) => review.category === category);
  const pages = Math.max(1, Math.ceil(reviews.length / perPage));
  const visible = reviews.slice(page * perPage, page * perPage + perPage);

  useEffect(() => {
    const update = () => setPerPage(visibleCount(window.innerWidth));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    setPage((current) => Math.min(current, Math.max(0, pages - 1)));
  }, [pages]);

  const go = (next: number) => {
    setPage(((next % pages) + pages) % pages);
  };

  const onProgressEnd = (event: AnimationEvent<HTMLSpanElement>) => {
    if (event.animationName !== "hero-progress") return;
    if (paused || reduce || pages < 2) return;
    go(page + 1);
  };

  return (
    <section
      className="relative overflow-hidden bg-bg-warm pb-14 pt-6 md:pb-16 md:pt-8 lg:pb-20 lg:pt-10"
      aria-roledescription="carousel"
      aria-label="Google reviews"
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
        className="pointer-events-none absolute -left-24 top-10 size-72 rounded-full bg-teal/10 blur-3xl"
        style={reduce ? undefined : { animation: "hero-drift 18s ease-in-out infinite" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-0 size-80 rounded-full bg-gold/10 blur-3xl"
        style={reduce ? undefined : { animation: "hero-drift-alt 20s ease-in-out infinite" }}
        aria-hidden
      />

      <Container className="relative">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="label-caps">Google reviews</p>
            <h2 className="title-section mt-5 text-balance">
              Stories of care,{" "}
              <span className="text-accent">sorted by condition.</span>
            </h2>
            <p className="text-body mt-5 max-w-xl">
              Knee, shoulder and back experiences shared by patients. Open a
              card to read it on Google.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <p className="text-xs font-bold tabular-nums tracking-[0.16em] text-muted">
              {String(page + 1).padStart(2, "0")}
              <span className="text-muted-light"> / {String(pages).padStart(2, "0")}</span>
            </p>
            <button
              type="button"
              onClick={() => go(page - 1)}
              className="focus-ring inline-flex size-11 items-center justify-center rounded-full border border-white/80 bg-white/80 text-navy shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:text-teal"
              aria-label="Previous reviews"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              type="button"
              onClick={() => go(page + 1)}
              className="focus-ring inline-flex size-11 items-center justify-center rounded-full bg-navy text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal"
              aria-label="Next reviews"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>

        <div
          className="mt-8 inline-flex max-w-full flex-wrap gap-1 rounded-full border border-white/70 bg-white/70 p-1 shadow-[var(--shadow-card)] backdrop-blur-md"
          role="tablist"
          aria-label="Review categories"
        >
          {reviewCategories.map((item) => {
            const selected = item === category;
            const count =
              item === "All"
                ? googleReviews.length
                : googleReviews.filter((review) => review.category === item).length;
            return (
              <button
                key={item}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => {
                  setCategory(item);
                  setPage(0);
                }}
                className={cn(
                  "focus-ring relative rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-300",
                  selected ? "text-white" : "text-navy hover:text-teal"
                )}
              >
                {selected && (
                  <motion.span
                    layoutId="review-category-pill"
                    className="absolute inset-0 rounded-full bg-navy"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative">
                  {item}
                  <span className={cn("ml-1.5 text-xs", selected ? "text-white/65" : "text-muted")}>
                    {count}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        <div className="relative mt-8 h-1 overflow-hidden rounded-full bg-navy/10">
          {!reduce && pages > 1 && (
            <span
              key={`${category}-${page}`}
              className="absolute inset-y-0 left-0 w-full origin-left rounded-full bg-gradient-to-r from-teal to-teal-bright"
              style={{
                animationName: "hero-progress",
                animationDuration: `${INTERVAL_MS}ms`,
                animationTimingFunction: "linear",
                animationFillMode: "forwards",
                animationPlayState: paused ? "paused" : "running",
              }}
              onAnimationEnd={onProgressEnd}
            />
          )}
        </div>

        <div className="relative mt-8 min-h-[320px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${category}-${page}-${perPage}`}
              className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
              initial={reduce ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease }}
            >
              {visible.map((review, index) => {
                const initial = review.name.trim().charAt(0).toUpperCase();
                return (
                  <motion.a
                    key={review.id}
                    href={review.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group focus-ring relative flex h-[340px] flex-col overflow-hidden rounded-[28px] border border-white/80 bg-white/90 p-6 shadow-[0_18px_50px_rgba(10,30,50,0.06)] backdrop-blur-sm"
                    initial={reduce ? false : { opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: reduce ? 0 : index * 0.07, ease }}
                    whileHover={reduce ? undefined : { y: -8 }}
                  >
                    <span
                      className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      aria-hidden
                    />
                    <span className="flex items-start justify-between">
                      <span className="inline-flex items-center gap-2 rounded-full bg-mint px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-teal">
                        {review.category}
                      </span>
                      <span className="flex size-9 items-center justify-center rounded-full bg-[#f4f7f8] ring-1 ring-black/5">
                        <GoogleMark />
                      </span>
                    </span>

                    <Quote
                      className="mt-5 size-7 text-teal/25 transition-colors duration-500 group-hover:text-teal/50"
                      aria-hidden
                    />
                    <p className="mt-3 flex-1 overflow-y-auto pr-1 text-[15px] leading-relaxed text-body">
                      {review.quote}
                    </p>

                    <span className="mt-5 flex items-center justify-between gap-3 border-t border-border-subtle pt-4">
                      <span className="flex min-w-0 items-center gap-3">
                        <span
                          className={cn(
                            "flex size-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-sm font-bold text-white shadow-sm",
                            avatarColors[index % avatarColors.length]
                          )}
                        >
                          {initial}
                        </span>
                        <span className="min-w-0">
                          <span className="block truncate text-sm font-semibold text-navy">
                            {review.name}
                          </span>
                          <span className="block text-xs text-muted">Google review</span>
                        </span>
                      </span>
                      <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-navy text-white transition-all duration-300 group-hover:bg-teal group-hover:rotate-45">
                        <ArrowUpRight className="size-4" aria-hidden />
                      </span>
                    </span>
                  </motion.a>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
