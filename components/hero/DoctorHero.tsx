"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState, type AnimationEvent } from "react";
import { useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import {
  heroSlides,
  HERO_SLIDE_INTERVAL_MS,
  type HeroSlide,
} from "@/data/hero-slides";
import { doctor } from "@/data/doctor";
import { cn } from "@/lib/utils";
import { isExternalHref } from "@/lib/whatsapp";
import type { ReactNode } from "react";

function SlideCtaLink({
  href,
  children,
  className,
  tabIndex,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  tabIndex?: number;
}) {
  if (isExternalHref(href)) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        tabIndex={tabIndex}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className} tabIndex={tabIndex}>
      {children}
    </Link>
  );
}

const themes: Record<
  string,
  {
    wash: string;
    orb: string;
    orbAlt: string;
    frame: string;
    chip: string;
    label: string;
  }
> = {
  precision: {
    wash: "from-teal/25 via-mint/80 to-bg-warm",
    orb: "bg-teal-bright/35",
    orbAlt: "bg-navy/10",
    frame: "from-teal-bright via-white to-navy/25",
    chip: "bg-teal text-white",
    label: "Precision",
  },
  recovery: {
    wash: "from-teal/20 via-mint/70 to-bg-warm",
    orb: "bg-teal-bright/30",
    orbAlt: "bg-navy/10",
    frame: "from-teal-bright via-white to-navy/20",
    chip: "bg-teal text-white",
    label: "Recovery",
  },
  "your-doctor": {
    wash: "from-teal/25 via-mint/80 to-bg-warm",
    orb: "bg-teal-bright/35",
    orbAlt: "bg-navy/10",
    frame: "from-teal-bright via-white to-navy/25",
    chip: "bg-teal text-white",
    label: "Your Doctor",
  },
};

const mapsDirectionsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(doctor.booking.mapsQuery)}`;

function themeFor(id: string) {
  return themes[id] ?? themes.precision;
}

export function DoctorHero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [canPlay, setCanPlay] = useState(false);
  const count = heroSlides.length;
  const reduce = useReducedMotion();

  useEffect(() => {
    setCanPlay(true);
  }, []);
  const lock = useRef(false);
  const slide = heroSlides[index];
  const theme = themeFor(slide.id);

  const goTo = useCallback(
    (next: number) => {
      lock.current = true;
      setIndex(((next % count) + count) % count);
      window.setTimeout(() => {
        lock.current = false;
      }, 80);
    },
    [count]
  );

  const onProgressEnd = (event: AnimationEvent<HTMLSpanElement>) => {
    if (event.animationName !== "hero-progress") return;
    if (paused || reduce || lock.current) return;
    lock.current = true;
    setIndex((current) => (current + 1) % count);
    window.setTimeout(() => {
      lock.current = false;
    }, 80);
  };

  return (
    <section
      className="relative overflow-hidden pt-[4.25rem] lg:pt-[5rem]"
      aria-roledescription="carousel"
      aria-label="Featured highlights"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) {
          setPaused(false);
        }
      }}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0 bg-gradient-to-br transition-all duration-700",
          theme.wash
        )}
        aria-hidden
      />
      <div
        className={cn(
          "pointer-events-none absolute -left-16 top-24 size-72 rounded-full blur-3xl transition-colors duration-700",
          theme.orb
        )}
        style={reduce ? undefined : { animation: "hero-drift 16s ease-in-out infinite" }}
        aria-hidden
      />
      <div
        className={cn(
          "pointer-events-none absolute -right-10 bottom-10 size-80 rounded-full blur-3xl transition-colors duration-700",
          theme.orbAlt
        )}
        style={reduce ? undefined : { animation: "hero-drift-alt 18s ease-in-out infinite" }}
        aria-hidden
      />

      <Container className="relative pb-12 pt-6 lg:pb-16 lg:pt-8">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.9fr)] lg:gap-12">
          <div>
            <div className="grid">
              {heroSlides.map((item, i) => (
                <SlideCopy key={item.id} slide={item} active={i === index} />
              ))}
            </div>

            <div
              className="mt-8 grid grid-cols-3 gap-2 sm:mt-10"
              role="tablist"
              aria-label="Choose slide"
            >
              {heroSlides.map((item, i) => {
                const selected = i === index;
                const itemTheme = themeFor(item.id);
                return (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    aria-label={`Slide ${i + 1}: ${item.tagLabel}`}
                    onClick={() => goTo(i)}
                    className={cn(
                      "focus-ring relative overflow-hidden rounded-2xl border px-3 py-3 text-left transition-all duration-500",
                      selected
                        ? "border-transparent text-white shadow-[0_12px_30px_rgba(10,30,50,0.16)]"
                        : "border-white/70 bg-white/55 text-navy hover:bg-white"
                    )}
                  >
                    {selected && (
                      <span className="absolute inset-0 bg-teal" aria-hidden />
                    )}
                    {selected && !reduce && (
                      <span
                        key={`${item.id}-${index}`}
                        className="absolute inset-y-0 left-0 w-full origin-left bg-white/25"
                        style={{
                          animationName: "hero-progress",
                          animationDuration: `${HERO_SLIDE_INTERVAL_MS}ms`,
                          animationTimingFunction: "linear",
                          animationFillMode: "forwards",
                          animationPlayState: paused ? "paused" : "running",
                        }}
                        onAnimationEnd={onProgressEnd}
                      />
                    )}
                    <span className="relative flex items-center gap-2">
                      <span className="text-[11px] font-bold tabular-nums tracking-[0.14em]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="hidden text-xs font-semibold sm:inline">
                        {itemTheme.label}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
            <div
              className={cn(
                "pointer-events-none absolute -inset-4 rounded-[36px] bg-gradient-to-br opacity-80 blur-sm transition-all duration-700",
                theme.frame
              )}
              aria-hidden
            />
            <div
              className={cn(
                "relative rounded-[30px] bg-gradient-to-br p-[3px] shadow-[0_28px_70px_rgba(10,30,50,0.16)] transition-all duration-700",
                theme.frame
              )}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[27px] bg-navy sm:aspect-[5/6] lg:max-h-[560px]">
                <SlideMedia
                  key={slide.id}
                  slide={slide}
                  active
                  play={canPlay && !reduce}
                />
                <div
                  className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-navy/45 via-transparent to-white/10"
                  aria-hidden
                />
                <div className="absolute bottom-4 left-4 right-4 z-20">
                  <div className="inline-flex max-w-full items-center gap-3 rounded-2xl border border-white/30 bg-white/90 px-4 py-3 shadow-lg backdrop-blur-md">
                    <span
                      className={cn(
                        "flex size-8 shrink-0 items-center justify-center rounded-full text-xs font-bold",
                        theme.chip
                      )}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate text-[11px] font-bold tracking-[0.14em] text-navy">
                        {slide.tagLabel}
                      </span>
                      {slide.tagSublabel && (
                        <span className="block truncate text-[11px] font-semibold tracking-[0.12em] text-teal">
                          {slide.tagSublabel}
                        </span>
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 right-4 z-20 flex gap-2 lg:-left-5 lg:right-auto lg:bottom-8">
              <button
                type="button"
                onClick={() => goTo(index - 1)}
                className="focus-ring inline-flex size-11 items-center justify-center rounded-full border border-white/80 bg-white text-navy shadow-lg transition-colors hover:bg-navy hover:text-white"
                aria-label="Previous slide"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                type="button"
                onClick={() => goTo(index + 1)}
                className="focus-ring inline-flex size-11 items-center justify-center rounded-full bg-navy text-white shadow-lg transition-colors hover:bg-teal"
                aria-label="Next slide"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function youtubeSrc(id: string) {
  const params = new URLSearchParams({
    autoplay: "1",
    mute: "1",
    loop: "1",
    playlist: id,
    controls: "0",
    modestbranding: "1",
    playsinline: "1",
    rel: "0",
    disablekb: "1",
    fs: "0",
    iv_load_policy: "3",
  });
  return `https://www.youtube-nocookie.com/embed/${id}?${params.toString()}`;
}

function SlideMedia({
  slide,
  active,
  play,
}: {
  slide: HeroSlide;
  active: boolean;
  play: boolean;
}) {
  const video = slide.video;

  return (
    <div className="absolute inset-0 z-0" aria-hidden={!active}>
      {!video && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={slide.image}
          alt={slide.imageAlt}
          className={cn(
            "absolute inset-0 size-full object-cover",
            slide.imagePosition === "right" ? "object-[70%_center]" : "object-center"
          )}
        />
      )}
      {video?.type === "youtube" && active && play && (
        <iframe
          key={video.id}
          src={youtubeSrc(video.id)}
          title={slide.imageAlt}
          allow="autoplay; encrypted-media; picture-in-picture"
          referrerPolicy="origin"
          tabIndex={-1}
          className="absolute left-1/2 top-1/2 aspect-video h-full w-auto min-w-full -translate-x-1/2 -translate-y-1/2 border-0"
        />
      )}
      {video?.type === "file" && (
        <FileVideo
          src={video.src}
          active={active && play}
          label={slide.imageAlt}
          position={slide.imagePosition}
        />
      )}
    </div>
  );
}

function FileVideo({
  src,
  active,
  label,
  position,
}: {
  src: string;
  active: boolean;
  label: string;
  position: HeroSlide["imagePosition"];
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.muted = true;
    if (!active) {
      el.pause();
      return;
    }
    const pending = el.play();
    if (pending) pending.catch(() => undefined);
  }, [src, active]);

  return (
    <video
      ref={ref}
      src={src}
      muted
      autoPlay={active}
      loop
      playsInline
      preload="auto"
      aria-label={label}
      className={cn(
        "absolute inset-0 size-full object-cover",
        position === "right" ? "object-[70%_center]" : "object-center"
      )}
    />
  );
}

function SlideCopy({ slide, active }: { slide: HeroSlide; active: boolean }) {
  const TitleTag = active ? "h1" : "p";
  const theme = themeFor(slide.id);

  return (
    <div
      className={cn(
        "col-start-1 row-start-1 transition-all duration-700 ease-out",
        active ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      )}
      aria-hidden={!active}
    >
      <p
        className={cn(
          "inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[11px] font-bold tracking-[0.14em]",
          theme.chip
        )}
      >
        <span className="size-1.5 rounded-full bg-white" aria-hidden />
        {slide.eyebrow}
      </p>

      <TitleTag className="display-hero-home mt-5 lg:mt-6">
        {slide.headline.map((line) => (
          <span
            key={line.text}
            className={cn(
              "block",
              line.accent &&
                "bg-gradient-to-r from-teal to-teal-bright bg-clip-text text-transparent"
            )}
          >
            {line.text}
          </span>
        ))}
      </TitleTag>

      <p className="text-body mt-5 max-w-xl lg:mt-6">{slide.description}</p>

      <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Button asChild size="lg" className="w-full sm:w-auto" tabIndex={active ? 0 : -1}>
          <SlideCtaLink href={slide.primaryCta.href}>{slide.primaryCta.label}</SlideCtaLink>
        </Button>
        <Button
          asChild
          variant="secondary"
          size="lg"
          className="w-full border-white/80 bg-white/70 sm:w-auto"
          tabIndex={active ? 0 : -1}
        >
          <SlideCtaLink href={slide.secondaryCta.href}>
            {slide.secondaryCta.label}
            <ArrowRight className="transition-transform group-hover:translate-x-1" />
          </SlideCtaLink>
        </Button>
      </div>

      <p className="text-secondary mt-6 flex flex-wrap items-center gap-x-2 gap-y-1 font-medium">
        <MapPin className="size-4 shrink-0 text-teal" aria-hidden />
        <span>Manipal Hospitals, Kanakapura Road (near JP Nagar)</span>
        <span className="text-border" aria-hidden>
          /
        </span>
        <a
          href={mapsDirectionsHref}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={active ? 0 : -1}
          className="text-link focus-ring rounded-sm"
        >
          Get Directions
        </a>
      </p>
    </div>
  );
}
