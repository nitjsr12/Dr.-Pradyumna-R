"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { aboutMediaItems } from "@/data/about-media";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;
const SLIDE_MS = 8000;

function FileClip({
  src,
  label,
  active,
}: {
  src: string;
  label: string;
  active: boolean;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!active) {
      el.pause();
      el.currentTime = 0;
      return;
    }
    el.muted = true;
    const pending = el.play();
    if (pending) pending.catch(() => undefined);
  }, [active, src]);

  return (
    <video
      ref={ref}
      src={src}
      muted
      loop
      playsInline
      controls
      className="absolute inset-0 size-full bg-navy object-contain"
      aria-label={label}
    />
  );
}

function MediaFrame({
  item,
  active,
}: {
  item: (typeof aboutMediaItems)[number];
  active: boolean;
}) {
  if (item.youtubeId && active) {
    return (
      <iframe
        key={item.youtubeId}
        src={`https://www.youtube-nocookie.com/embed/${item.youtubeId}?rel=0&modestbranding=1`}
        title={item.label}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        className="absolute inset-0 size-full border-0"
      />
    );
  }

  if (item.fileSrc) {
    return <FileClip src={item.fileSrc} label={item.label} active={active} />;
  }

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-navy text-sm text-white/60">
      Media coming soon
    </div>
  );
}

export function AboutMediaSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  const item = aboutMediaItems[index];
  const count = aboutMediaItems.length;
  const youtubeWatchUrl = item.youtubeId
    ? `https://www.youtube.com/watch?v=${item.youtubeId}`
    : null;

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
      className="border-b border-border-subtle/80 bg-white py-10 md:py-14 lg:py-16"
      aria-roledescription="carousel"
      aria-label="Doctor media gallery"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <Container>
        <div className="max-w-2xl">
          <p className="label-caps">Media</p>
          <h2 className="title-section mt-4 text-balance">
            Watch, listen and <span className="text-accent">learn more</span>
          </h2>
          <p className="text-body mt-4 leading-relaxed">
            Clips about Dr. Pradyumna, shoulder and knee care, podcasts and patient stories.
          </p>
        </div>

        <div className="mt-12 lg:mt-14 lg:grid lg:grid-cols-12 lg:items-start lg:gap-12">
          <nav
            className="lg:col-span-4 lg:pt-2"
            role="tablist"
            aria-label="Media categories"
          >
            <ul className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:gap-0 lg:overflow-visible lg:pb-0">
              {aboutMediaItems.map((tab, tabIndex) => {
                const selected = tabIndex === index;
                return (
                  <li key={tab.id} className="shrink-0 lg:shrink">
                    <button
                      type="button"
                      role="tab"
                      aria-selected={selected}
                      onClick={() => setIndex(tabIndex)}
                      className={cn(
                        "focus-ring w-full rounded-full px-4 py-2 text-left text-sm font-semibold transition-colors lg:rounded-none lg:border-l-2 lg:px-0 lg:py-4 lg:pl-5",
                        selected
                          ? "bg-teal/10 text-teal lg:border-teal lg:bg-transparent"
                          : "text-navy/60 hover:text-teal lg:border-transparent lg:hover:text-navy"
                      )}
                    >
                      <span className="mr-2 hidden tabular-nums text-[11px] font-bold tracking-wider text-teal/80 lg:inline">
                        {String(tabIndex + 1).padStart(2, "0")}
                      </span>
                      {tab.label}
                    </button>
                  </li>
                );
              })}
            </ul>

            <div className="mt-6 hidden items-center gap-2 lg:flex">
              <button
                type="button"
                onClick={() => go(index - 1)}
                className="focus-ring inline-flex size-10 items-center justify-center rounded-full border border-navy/10 text-navy hover:bg-navy hover:text-white"
                aria-label="Previous clip"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                type="button"
                onClick={() => go(index + 1)}
                className="focus-ring inline-flex size-10 items-center justify-center rounded-full bg-teal text-white hover:bg-navy"
                aria-label="Next clip"
              >
                <ChevronRight className="size-4" />
              </button>
              <span className="ml-2 text-xs tabular-nums text-muted">
                {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
              </span>
            </div>
          </nav>

          <div className="mt-8 lg:col-span-8 lg:mt-0">
            <div className="overflow-hidden rounded-2xl bg-navy shadow-[var(--shadow-soft)]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={item.id}
                  initial={reduce ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={reduce ? undefined : { opacity: 0 }}
                  transition={{ duration: 0.35, ease }}
                  className="relative aspect-video w-full"
                >
                  <MediaFrame item={item} active />
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-6 max-w-2xl">
              <p className="font-heading text-xl font-bold text-navy sm:text-2xl">
                {item.caption}
              </p>
              {youtubeWatchUrl && (
                <Link
                  href={youtubeWatchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring mt-3 inline-flex items-center gap-2 text-sm font-semibold text-teal hover:text-navy"
                >
                  Watch on YouTube
                  <ExternalLink className="size-4" aria-hidden />
                </Link>
              )}
            </div>

            <div className="mt-6 h-0.5 overflow-hidden rounded-full bg-navy/10 lg:max-w-xl">
              {!reduce && (
                <span
                  key={`${item.id}-${paused}`}
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
          </div>
        </div>
      </Container>
    </section>
  );
}
