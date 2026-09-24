"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { aboutProfileSections } from "@/data/about-profile";
import { AboutAtAGlance } from "@/components/about/AboutAtAGlance";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/animations/Reveal";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;
const SLIDE_MS = 7200;

export function AboutProfileSection() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  const count = aboutProfileSections.length;
  const block = aboutProfileSections[index];

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
      className="relative overflow-hidden bg-gradient-to-b from-bg-warm via-mint/20 to-bg-warm py-14 md:py-20 lg:py-24"
      aria-roledescription="carousel"
      aria-label="Doctor profile"
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
        className="pointer-events-none absolute -right-24 top-20 size-80 rounded-full bg-teal/10 blur-3xl"
        aria-hidden
      />

      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <FadeIn className="max-w-2xl">
            <p className="label-caps">Profile</p>
            <h2 className="title-section mt-4 text-balance">
              Training, experience &{" "}
              <span className="text-accent">patient-centred care</span>
            </h2>
            <p className="text-body mt-4 max-w-xl leading-relaxed">
              A detailed look at Dr. Pradyumna R&apos;s surgical background, research and practice in
              Bengaluru.
            </p>
          </FadeIn>
          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={() => go(index - 1)}
              className="focus-ring inline-flex size-11 items-center justify-center rounded-full border border-navy/10 bg-white text-navy shadow-sm hover:bg-navy hover:text-white"
              aria-label="Previous profile section"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              className="focus-ring inline-flex size-11 items-center justify-center rounded-full bg-teal text-white shadow-sm hover:bg-navy"
              aria-label="Next profile section"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>

        <div
          className="mt-8 flex gap-2 overflow-x-auto pb-1 lg:mt-10"
          role="tablist"
          aria-label="Profile topics"
        >
          {aboutProfileSections.map((item, itemIndex) => {
            const selected = itemIndex === index;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setIndex(itemIndex)}
                className={cn(
                  "focus-ring shrink-0 rounded-full px-3 py-2 text-left text-xs font-semibold transition-colors sm:text-sm",
                  selected
                    ? "bg-teal text-white shadow-md"
                    : "bg-white/90 text-navy/70 shadow-sm hover:text-teal"
                )}
              >
                <span className="mr-1.5 tabular-nums text-[10px] opacity-80">
                  {String(itemIndex + 1).padStart(2, "0")}
                </span>
                {item.title}
              </button>
            );
          })}
        </div>

        <div className="relative mx-auto mt-8 min-h-[280px] max-w-3xl md:min-h-[260px] lg:mt-10">
          <AnimatePresence mode="wait">
            <motion.article
              key={block.id}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -16 }}
              transition={{ duration: 0.45, ease }}
              className="relative"
            >
              <p className="text-[11px] font-bold tabular-nums tracking-[0.16em] text-teal">
                {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-heading text-2xl font-bold tracking-tight text-navy md:text-3xl">
                {block.title}
              </h3>
              <div className="mt-6 space-y-5">
                {block.paragraphs.map((paragraph) => (
                  <motion.p
                    key={paragraph.slice(0, 48)}
                    initial={reduce ? false : { opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.08, ease }}
                    className="text-[16px] leading-[1.8] text-navy/85 md:text-[17px]"
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>
            </motion.article>
          </AnimatePresence>
        </div>

        <div className="mx-auto mt-8 h-0.5 max-w-3xl overflow-hidden rounded-full bg-navy/10">
          {!reduce && (
            <span
              key={`${block.id}-${paused}`}
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

        <AboutAtAGlance />
      </Container>
    </section>
  );
}
