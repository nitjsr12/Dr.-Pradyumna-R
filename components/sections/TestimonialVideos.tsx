"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonialVideos, type TestimonialVideo } from "@/data/testimonial-videos";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

function fileVideoSrc(item: TestimonialVideo) {
  const video = item.video;
  return video?.type === "file" ? video.src : undefined;
}

function TestimonialSlide({
  item,
  active,
  paused,
  reduce,
  onEnded,
  onProgress,
}: {
  item: TestimonialVideo;
  active: boolean;
  paused: boolean;
  reduce: boolean;
  onEnded: () => void;
  onProgress: (ratio: number) => void;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const src = fileVideoSrc(item);

  useEffect(() => {
    const el = ref.current;
    if (!el || !src) return;

    if (!active) {
      el.pause();
      el.currentTime = 0;
      onProgress(0);
      return;
    }

    if (reduce || paused) {
      el.pause();
      return;
    }

    el.muted = true;
    const pending = el.play();
    if (pending) pending.catch(() => undefined);
  }, [active, paused, reduce, src, onProgress]);

  useEffect(() => {
    onProgress(0);
  }, [item.id, onProgress]);

  if (!src || reduce) {
    return (
      <>
        <Image
          src={item.poster}
          alt=""
          fill
          quality={90}
          sizes="(max-width: 1280px) 100vw, 1200px"
          className={cn("object-cover", item.posterPosition ?? "object-center")}
        />
        <span
          className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/25 to-transparent"
          aria-hidden
        />
      </>
    );
  }

  return (
    <>
      <video
        ref={ref}
        src={src}
        muted
        playsInline
        preload="auto"
        aria-label={item.title}
        className={cn(
          "absolute inset-0 size-full object-cover",
          item.posterPosition ?? "object-center"
        )}
        onTimeUpdate={(event) => {
          if (!active) return;
          const el = event.currentTarget;
          if (el.duration > 0) onProgress(el.currentTime / el.duration);
        }}
        onEnded={() => {
          if (active && !paused && !reduce) onEnded();
        }}
      />
      <span
        className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/20 to-transparent"
        aria-hidden
      />
    </>
  );
}

export function TestimonialVideos() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const reduce = useReducedMotion();
  const count = testimonialVideos.length;
  const item = testimonialVideos[index];

  const go = (next: number) => {
    setProgress(0);
    setIndex(((next % count) + count) % count);
  };

  const handleProgress = useCallback((ratio: number) => {
    setProgress(ratio);
  }, []);

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-bg-warm via-mint/30 to-white py-14 md:py-16 lg:py-20"
      aria-roledescription="carousel"
      aria-label="Client testimonial videos"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="pointer-events-none absolute -right-20 top-0 size-72 rounded-full bg-teal/10 blur-3xl"
        aria-hidden
      />

      <Container className="relative">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="label-caps">Patient stories</p>
            <h2 className="title-section mt-5 text-balance">
              Client testimonial{" "}
              <span className="text-accent">videos.</span>
            </h2>
            <p className="text-body mt-4 max-w-xl">
              Hear from patients in their own words about recovery, care and getting back to what
              matters.
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={() => go(index - 1)}
              className="focus-ring inline-flex size-11 items-center justify-center rounded-full border border-navy/10 bg-white text-navy shadow-sm hover:bg-navy hover:text-white"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              className="focus-ring inline-flex size-11 items-center justify-center rounded-full bg-teal text-white shadow-sm hover:bg-navy"
              aria-label="Next testimonial"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>

        <div className="relative mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={item.id}
              initial={reduce ? false : { opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduce ? undefined : { opacity: 0, x: -32 }}
              transition={{ duration: 0.45, ease }}
              className="relative w-full overflow-hidden rounded-[28px] bg-navy shadow-[var(--shadow-soft)]"
            >
              <span className="relative block aspect-video max-h-[520px] w-full sm:aspect-[21/9]">
                <TestimonialSlide
                  item={item}
                  active
                  paused={paused}
                  reduce={Boolean(reduce)}
                  onEnded={() => go(index + 1)}
                  onProgress={handleProgress}
                />
                <span className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <p className="text-[11px] font-bold tracking-[0.16em] text-teal-bright">
                    {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
                  </p>
                  <p className="mt-2 font-heading text-2xl font-bold text-white sm:text-3xl">
                    {item.caption}
                  </p>
                </span>
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-6 h-1 overflow-hidden rounded-full bg-navy/10">
          {!reduce && (
            <span
              className="block h-full origin-left rounded-full bg-teal transition-[width] duration-150 ease-linear"
              style={{ width: `${Math.min(100, Math.max(0, progress * 100))}%` }}
            />
          )}
        </div>
      </Container>
    </section>
  );
}
