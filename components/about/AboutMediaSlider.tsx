"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, Play } from "lucide-react";
import Link from "next/link";
import {
  aboutMediaItems,
  type AboutMediaItem,
  type AboutMediaLayout,
} from "@/data/about-media";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;
const SLIDE_MS = 6500;

function mediaLayout(item: AboutMediaItem): AboutMediaLayout {
  return item.layout ?? "landscape";
}

function FileClip({
  src,
  label,
  active,
  layout,
}: {
  src: string;
  label: string;
  active: boolean;
  layout: AboutMediaLayout;
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
      className={cn(
        "absolute inset-0 size-full bg-navy",
        layout === "portrait" ? "object-cover object-center" : "object-contain"
      )}
      aria-label={label}
    />
  );
}

function MediaFrame({
  item,
  active,
  layout,
}: {
  item: AboutMediaItem;
  active: boolean;
  layout: AboutMediaLayout;
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
    return (
      <FileClip
        src={item.fileSrc}
        label={item.label}
        active={active}
        layout={layout}
      />
    );
  }

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-navy text-sm text-white/60">
      Media coming soon
    </div>
  );
}

function PlayerShell({
  item,
  active,
  layout,
}: {
  item: AboutMediaItem;
  active: boolean;
  layout: AboutMediaLayout;
}) {
  const isPortrait = layout === "portrait";

  return (
    <div
      className={cn(
        "flex w-full justify-center",
        isPortrait ? "lg:justify-start" : "lg:justify-center"
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-[22px] border border-white/12 bg-black/50 shadow-[0_24px_60px_rgba(0,0,0,0.45)]",
          isPortrait
            ? "aspect-[9/16] w-full max-w-[280px] sm:max-w-[300px]"
            : "aspect-video w-full max-w-2xl lg:max-w-none"
        )}
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(20,169,161,0.12),transparent)]"
          aria-hidden
        />
        <MediaFrame item={item} active={active} layout={layout} />
      </div>
    </div>
  );
}

export function AboutMediaSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  const item = aboutMediaItems[index];
  const layout = mediaLayout(item);
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
      className="relative overflow-hidden border-b border-border-subtle/80 bg-navy py-10 md:py-12 lg:py-14"
      aria-roledescription="carousel"
      aria-label="Doctor media gallery"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(20,169,161,0.14),transparent_55%)]"
        aria-hidden
      />
      <div className="pattern-dots-dark pointer-events-none absolute inset-0 opacity-15" aria-hidden />

      <Container className="relative">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="label-caps-on-dark">Media</p>
            <h2 className="title-section mt-3 text-balance !text-white md:text-3xl lg:text-[2rem]">
              About him, podcasts &amp;{" "}
              <span className="text-teal-bright">clinical video</span>
            </h2>
          </div>
          <div className="flex items-center gap-2 sm:pb-1">
            <button
              type="button"
              onClick={() => go(index - 1)}
              className="focus-ring inline-flex size-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white backdrop-blur hover:bg-white hover:text-navy"
              aria-label="Previous clip"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              className="focus-ring inline-flex size-10 items-center justify-center rounded-full bg-teal-bright text-navy shadow-lg hover:bg-white"
              aria-label="Next clip"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>

        <div
          className="mt-6 flex gap-1.5 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:mt-8 [&::-webkit-scrollbar]:hidden"
          role="tablist"
          aria-label="Media categories"
        >
          {aboutMediaItems.map((tab, tabIndex) => {
            const selected = tabIndex === index;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setIndex(tabIndex)}
                className={cn(
                  "focus-ring relative shrink-0 rounded-full px-4 py-2.5 text-sm font-semibold transition-colors duration-300",
                  selected
                    ? "text-navy shadow-md"
                    : "bg-white/8 text-white/75 hover:bg-white/12 hover:text-white"
                )}
              >
                {selected && !reduce && (
                  <motion.span
                    layoutId="about-media-pill"
                    className="absolute inset-0 rounded-full bg-teal-bright"
                    transition={{ duration: 0.4, ease }}
                  />
                )}
                {selected && reduce && (
                  <span
                    className="absolute inset-0 rounded-full bg-teal-bright"
                    aria-hidden
                  />
                )}
                <span className="relative z-[1] whitespace-nowrap">
                  <span className="mr-1.5 tabular-nums text-[11px] opacity-70">
                    {String(tabIndex + 1).padStart(2, "0")}
                  </span>
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-10 xl:gap-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={item.id}
              initial={reduce ? false : { opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduce ? undefined : { opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4, ease }}
              className="min-w-0"
            >
              <PlayerShell item={item} active layout={layout} />
            </motion.div>
          </AnimatePresence>

          <div className="flex min-w-0 flex-col justify-center lg:py-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={item.id}
                initial={reduce ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease }}
              >
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-teal-bright">
                  {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
                </p>
                <p className="mt-2 font-heading text-2xl font-bold text-white md:text-[1.65rem]">
                  {item.label}
                </p>
                <p className="mt-3 max-w-lg text-base leading-relaxed text-white/75">
                  {item.caption}
                </p>
                {youtubeWatchUrl && (
                  <Link
                    href={youtubeWatchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring mt-5 inline-flex items-center gap-2 rounded-full border border-teal-bright/40 bg-teal-bright/10 px-4 py-2 text-sm font-semibold text-teal-bright transition-colors hover:bg-teal-bright hover:text-navy"
                  >
                    <Play className="size-3.5 fill-current" aria-hidden />
                    Watch on YouTube
                    <ExternalLink className="size-3.5 opacity-80" aria-hidden />
                  </Link>
                )}
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex items-center gap-3">
              <div className="h-1 min-w-0 flex-1 overflow-hidden rounded-full bg-white/12">
                {!reduce && (
                  <span
                    key={`${item.id}-${paused}`}
                    className="block h-full w-full origin-left rounded-full bg-teal-bright"
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
              <span className="shrink-0 text-xs font-medium tabular-nums text-white/50">
                Auto · {Math.round(SLIDE_MS / 1000)}s
              </span>
            </div>

            <div className="mt-6 hidden gap-2 lg:flex">
              {aboutMediaItems.map((dot, dotIndex) => (
                <button
                  key={dot.id}
                  type="button"
                  onClick={() => setIndex(dotIndex)}
                  className={cn(
                    "focus-ring h-1.5 rounded-full transition-all duration-300",
                    dotIndex === index ? "w-8 bg-teal-bright" : "w-1.5 bg-white/25 hover:bg-white/40"
                  )}
                  aria-label={`Go to ${dot.label}`}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
