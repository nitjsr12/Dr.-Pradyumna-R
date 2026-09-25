"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { Play, X } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import {
  testimonialTopics,
  testimonialVideos,
  type TestimonialTopicId,
  type TestimonialVideo,
} from "@/data/testimonial-videos";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

function fileVideoSrc(item: TestimonialVideo) {
  const video = item.video;
  return video?.type === "file" ? video.src : undefined;
}

function countForTopic(topicId: TestimonialTopicId) {
  if (topicId === "all") return testimonialVideos.length;
  return testimonialVideos.filter((v) => v.topic === topicId).length;
}

function topicLabel(topic: TestimonialVideo["topic"]) {
  return testimonialTopics.find((t) => t.id === topic)?.label ?? topic;
}

function TestimonialVideoCard({
  item,
  onPlay,
  layout = "marquee",
}: {
  item: TestimonialVideo;
  onPlay: (item: TestimonialVideo) => void;
  layout?: "marquee" | "grid";
}) {
  return (
    <button
      type="button"
      onClick={() => onPlay(item)}
      className={cn(
        "focus-ring group text-left",
        layout === "marquee" ? "w-[200px] shrink-0 sm:w-[220px]" : "w-full"
      )}
    >
      <span className="relative block overflow-hidden rounded-xl border border-navy/10 bg-white shadow-[var(--shadow-card)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-teal/35 group-hover:shadow-[var(--shadow-soft)]">
        <span className="relative block aspect-[16/10] w-full bg-navy/5">
          <Image
            src={item.poster}
            alt=""
            fill
            quality={90}
            sizes="220px"
            className={cn(
              "object-cover transition-transform duration-500 group-hover:scale-105",
              item.posterPosition ?? "object-center"
            )}
          />
          <span
            className="absolute inset-0 bg-navy/15 transition-colors group-hover:bg-navy/25"
            aria-hidden
          />
          <span
            className="absolute inset-0 flex items-center justify-center"
            aria-hidden
          >
            <span className="flex size-11 items-center justify-center rounded-full bg-navy/85 text-white shadow-lg ring-2 ring-white/30 transition-transform group-hover:scale-110 sm:size-12">
              <Play className="ml-0.5 size-5 fill-white" aria-hidden />
            </span>
          </span>
          <span className="absolute left-2 top-2 rounded-full bg-white/95 px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.12em] text-teal">
            {topicLabel(item.topic)}
          </span>
        </span>
        <span className="block px-3 py-2.5">
          <span className="line-clamp-2 text-sm font-bold leading-snug text-navy group-hover:text-teal">
            {item.caption}
          </span>
        </span>
      </span>
    </button>
  );
}

function VideoRow({
  items,
  onPlay,
  hidden,
}: {
  items: TestimonialVideo[];
  onPlay: (item: TestimonialVideo) => void;
  hidden?: boolean;
}) {
  return (
    <ul
      className="flex shrink-0 items-stretch gap-3 pr-3 sm:gap-4 sm:pr-4"
      aria-hidden={hidden || undefined}
    >
      {items.map((item) => (
        <li key={`${hidden ? "dup-" : ""}${item.id}`}>
          <TestimonialVideoCard item={item} onPlay={onPlay} />
        </li>
      ))}
    </ul>
  );
}

function VideoModal({
  item,
  onClose,
}: {
  item: TestimonialVideo;
  onClose: () => void;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const src = fileVideoSrc(item);

  useEffect(() => {
    const el = ref.current;
    if (!el || !src) return;
    el.play().catch(() => undefined);
    return () => {
      el.pause();
    };
  }, [src, item.id]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/80 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-navy shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="focus-ring absolute right-3 top-3 z-10 flex size-10 items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/25"
          aria-label="Close video"
        >
          <X className="size-5" />
        </button>
        <div className="relative aspect-video w-full bg-black">
          {src ? (
            <video
              ref={ref}
              src={src}
              controls
              playsInline
              className="absolute inset-0 size-full object-contain"
            />
          ) : (
            <Image
              src={item.poster}
              alt=""
              fill
              quality={90}
              sizes="800px"
              className="object-cover"
            />
          )}
        </div>
        <div className="border-t border-white/10 px-5 py-4">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-teal-bright">
            {topicLabel(item.topic)}
          </p>
          <p className="mt-1 font-heading text-lg font-bold text-white">{item.caption}</p>
        </div>
      </div>
    </div>
  );
}

export function TestimonialVideos() {
  const [topic, setTopic] = useState<TestimonialTopicId>("all");
  const [playing, setPlaying] = useState<TestimonialVideo | null>(null);
  const reduce = useReducedMotion();

  const filtered = useMemo(() => {
    if (topic === "all") return testimonialVideos;
    return testimonialVideos.filter((v) => v.topic === topic);
  }, [topic]);

  const trackKey = `${topic}-${filtered.map((v) => v.id).join(",")}`;

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-bg-warm via-mint/30 to-white py-10 md:py-12 lg:py-14"
      aria-label="Client testimonial videos"
    >
      <div
        className="pointer-events-none absolute -right-20 top-0 size-72 rounded-full bg-teal/10 blur-3xl"
        aria-hidden
      />

      <Container className="relative">
        <div className="max-w-2xl">
          <p className="label-caps">Patient stories</p>
          <h2 className="title-section mt-5 text-balance">
            Client testimonial <span className="text-accent">videos.</span>
          </h2>
          <p className="text-body mt-4 max-w-xl">
            Hear from patients in their own words about recovery, care and getting back to what
            matters.
          </p>
        </div>

        <div
          className="mt-8 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Filter testimonial videos by area"
        >
          {testimonialTopics.map((item) => {
            const selected = item.id === topic;
            const count = countForTopic(item.id);
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setTopic(item.id)}
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
      </Container>

      {filtered.length === 0 ? (
        <Container className="mt-8">
          <p className="rounded-2xl border border-dashed border-navy/15 bg-white/80 px-6 py-10 text-center text-sm text-muted">
            Testimonials for this area will appear here as they are added.
          </p>
        </Container>
      ) : reduce ? (
        <Container className="mt-8">
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((item) => (
              <li key={item.id} className="min-w-0">
                <TestimonialVideoCard
                  item={item}
                  onPlay={setPlaying}
                  layout="grid"
                />
              </li>
            ))}
          </ul>
        </Container>
      ) : (
        <div className="testimonial-marquee relative mt-8 overflow-hidden">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-bg-warm via-bg-warm/90 to-transparent md:w-20"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white via-white/90 to-transparent md:w-20"
            aria-hidden
          />
          <div
            key={trackKey}
            className="testimonial-track flex w-max pl-4 md:pl-[max(1rem,calc((100vw-1320px)/2+1rem))]"
          >
            <VideoRow items={filtered} onPlay={setPlaying} />
            <VideoRow items={filtered} onPlay={setPlaying} hidden />
          </div>
        </div>
      )}

      {playing && <VideoModal item={playing} onClose={() => setPlaying(null)} />}
    </section>
  );
}
