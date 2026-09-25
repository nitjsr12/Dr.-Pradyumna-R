"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  googleReviews,
  reviewCategories,
  type ReviewCategory,
} from "@/data/google-reviews";
import { doctor } from "@/data/doctor";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

const REVIEW_URL =
  "https://www.google.com/search?q=Dr+Pradyumna+R+Manipal+Hospital+Kanakapura+Road+reviews";
const SLIDE_MS = 5200;

const avatarTones = ["bg-teal", "bg-navy", "bg-teal-bright"] as const;

function visibleCount(width: number) {
  if (width >= 1024) return 3;
  if (width >= 700) return 2;
  return 1;
}

function GoogleMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={cn("size-[18px] shrink-0", className)} aria-hidden>
      <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.4h6.5a5.6 5.6 0 0 1-2.4 3.7v3h3.9c2.3-2.1 3.5-5.2 3.5-8.8Z" />
      <path fill="#34A853" d="M12 24c3.2 0 5.9-1.1 7.9-2.9l-3.9-3c-1.1.7-2.4 1.2-4 1.2-3.1 0-5.7-2.1-6.6-4.9H1.4v3.1A12 12 0 0 0 12 24Z" />
      <path fill="#FBBC05" d="M5.4 14.4A7.2 7.2 0 0 1 5 12c0-.8.1-1.6.4-2.4V6.5H1.4A12 12 0 0 0 0 12c0 1.9.5 3.8 1.4 5.5l4-3.1Z" />
      <path fill="#EA4335" d="M12 4.8c1.7 0 3.3.6 4.5 1.8l3.4-3.4A12 12 0 0 0 1.4 6.5l4 3.1C6.3 6.8 8.9 4.8 12 4.8Z" />
    </svg>
  );
}

function Stars() {
  return (
    <span className="inline-flex gap-0.5 text-gold" aria-hidden>
      {Array.from({ length: 5 }, (_, index) => (
        <svg key={index} viewBox="0 0 24 24" className="size-[16px]">
          <path
            fill="currentColor"
            d="M12 2.4 14.8 8.6 21.6 9.5 16.6 14.2 17.9 21 12 17.7 6.1 21 7.4 14.2 2.4 9.5 9.2 8.6 12 2.4Z"
          />
        </svg>
      ))}
    </span>
  );
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
  const safePage = Math.min(page, pages - 1);
  const visible = reviews.slice(safePage * perPage, safePage * perPage + perPage);

  useEffect(() => {
    const update = () => setPerPage(visibleCount(window.innerWidth));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    if (reduce || paused || pages < 2) return;
    const id = window.setTimeout(() => {
      setPage((current) => (current + 1) % pages);
    }, SLIDE_MS);
    return () => window.clearTimeout(id);
  }, [reduce, paused, pages, safePage, category]);

  return (
    <section
      className="relative overflow-hidden bg-bg-warm py-10 md:py-12 lg:py-14"
      aria-roledescription="carousel"
      aria-label="Testimonials"
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
        className="pointer-events-none absolute -left-20 top-8 size-72 rounded-full bg-teal/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-0 size-72 rounded-full bg-gold/15 blur-3xl"
        aria-hidden
      />

      <Container className="relative">
        <p className="label-caps mx-auto w-fit">Testimonials</p>
        <h2 className="title-section mx-auto mt-4 max-w-3xl text-balance text-center">
          Stories of care and recovery.
        </h2>

        <div
          className="mx-auto mt-8 flex w-fit max-w-full flex-wrap justify-center gap-1 rounded-full border border-white bg-white/80 p-1 shadow-[var(--shadow-card)] backdrop-blur"
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
                  "focus-ring relative rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                  selected ? "text-white" : "text-navy hover:text-teal"
                )}
              >
                {selected && (
                  <motion.span
                    layoutId="review-category-pill"
                    className="absolute inset-0 rounded-full bg-teal"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative">
                  {item}
                  <span className={cn("ml-1.5 text-xs", selected ? "text-white/75" : "text-muted")}>
                    {count}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid items-stretch gap-6 lg:mt-12 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-8">
          <div className="relative overflow-hidden rounded-[28px] bg-navy p-6 text-white shadow-[var(--shadow-soft)]">
            <div className="pointer-events-none absolute -right-10 -top-10 size-36 rounded-full bg-teal/40 blur-2xl" aria-hidden />
            <div className="relative flex items-center gap-4">
              <div className="relative size-16 shrink-0 overflow-hidden rounded-full ring-2 ring-white/20">
                <Image
                  src="/images/hero/slide-doctor.jpg"
                  alt=""
                  fill
                  sizes="64px"
                  className="object-cover object-[center_20%]"
                />
              </div>
              <div>
                <p className="text-[15px] font-semibold leading-snug">{doctor.name}</p>
                <p className="mt-1 text-sm text-white/70">
                  {doctor.descriptor}, {doctor.city}
                </p>
              </div>
            </div>
            <div className="relative mt-6">
              <Stars />
              <p className="mt-2 text-sm text-white/75">
                {reviews.length} patient {reviews.length === 1 ? "review" : "reviews"}
              </p>
              <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-white/70">
                powered by <span className="font-medium text-white">Google</span>
              </p>
            </div>
            <a
              href={REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring relative mt-6 inline-flex items-center gap-2 rounded-full bg-teal px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-teal-bright"
            >
              Review on Google
              <GoogleMark />
            </a>
          </div>

          <div className="min-w-0">
            <div className="relative min-h-[240px]">
              <AnimatePresence mode="wait">
                <motion.ul
                  key={`${category}-${safePage}-${perPage}`}
                  className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
                  initial={reduce ? false : { opacity: 0, x: 28 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={reduce ? undefined : { opacity: 0, x: -28 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  {visible.map((review, index) => {
                    const initial = review.name.trim().charAt(0).toUpperCase();
                    return (
                      <motion.li
                        key={review.id}
                        initial={reduce ? false : { opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: reduce ? 0 : index * 0.06 }}
                      >
                        <a
                          href={review.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="focus-ring group flex h-full min-h-[230px] flex-col rounded-[24px] border border-white bg-white p-5 shadow-[var(--shadow-card)] transition-transform duration-300 hover:-translate-y-1"
                        >
                          <span className="flex items-start gap-3">
                            <span
                              className={cn(
                                "flex size-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white",
                                avatarTones[index % avatarTones.length]
                              )}
                              aria-hidden
                            >
                              {initial}
                            </span>
                            <span className="min-w-0 flex-1">
                              <span className="block truncate text-sm font-semibold text-navy">
                                {review.name}
                              </span>
                              <span className="mt-1 inline-flex rounded-full bg-mint px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em] text-teal">
                                {review.category}
                              </span>
                            </span>
                            <GoogleMark />
                          </span>
                          <span className="mt-4">
                            <Stars />
                          </span>
                          <p className="mt-3 line-clamp-5 text-sm leading-relaxed text-body">
                            {review.quote}
                          </p>
                        </a>
                      </motion.li>
                    );
                  })}
                </motion.ul>
              </AnimatePresence>
            </div>

            <div className="mt-6 flex flex-col items-center gap-3">
              <div className="h-1 w-28 overflow-hidden rounded-full bg-navy/10">
                {!reduce && pages > 1 && (
                  <span
                    key={`${category}-${safePage}-${paused}`}
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
              <div className="flex justify-center gap-2" role="tablist" aria-label="Review pages">
                {Array.from({ length: pages }, (_, index) => {
                  const selected = index === safePage;
                  return (
                    <button
                      key={index}
                      type="button"
                      role="tab"
                      aria-selected={selected}
                      aria-label={`Review page ${index + 1}`}
                      onClick={() => setPage(index)}
                      className={cn(
                        "focus-ring h-2 rounded-full transition-all duration-300",
                        selected ? "w-6 bg-teal" : "w-2 bg-navy/15 hover:bg-teal/40"
                      )}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
