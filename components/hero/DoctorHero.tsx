"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import {
  heroSlides,
  HERO_SLIDE_INTERVAL_MS,
  type HeroSlide,
} from "@/data/hero-slides";
import { easeOut } from "@/lib/animations";
import { cn } from "@/lib/utils";

function HeroSlideImage({ slide }: { slide: HeroSlide }) {
  const isBanner = slide.imageLayout === "banner";

  return (
    <div className="relative h-full w-full">
      <div
        className={cn(
          "relative w-full overflow-hidden bg-navy/5 shadow-[0_24px_64px_rgba(11,31,51,0.12)]",
          isBanner
            ? "aspect-[4/3] rounded-[var(--radius-lg)] sm:aspect-[16/11] lg:aspect-[4/5] lg:min-h-[480px] lg:max-h-[560px]"
            : "aspect-[4/5] max-h-[420px] rounded-[var(--radius-lg)] sm:max-h-[480px] lg:max-h-[560px] lg:min-h-[480px]"
        )}
      >
        <Image
          src={slide.image}
          alt={slide.imageAlt}
          fill
          priority={slide.id === "movement"}
          className={cn(
            "object-cover",
            slide.imagePosition === "top" && "object-top",
            slide.imagePosition === "right" && "object-right",
            isBanner && "object-[75%_center] lg:object-right"
          )}
          sizes="(max-width: 1024px) 100vw, 520px"
        />
        <div
          className={cn(
            "pointer-events-none absolute inset-0",
            isBanner
              ? "bg-gradient-to-r from-navy/30 via-transparent to-transparent lg:from-transparent"
              : "bg-gradient-to-t from-navy/15 via-transparent to-transparent"
          )}
          aria-hidden
        />
      </div>

      <div className="absolute bottom-5 left-4 right-4 mx-auto max-w-xs rounded-2xl border border-[rgba(11,31,51,0.08)] bg-white/95 px-5 py-3.5 shadow-[var(--shadow-soft)] backdrop-blur-sm sm:left-5 sm:right-auto lg:bottom-8">
        <div className="flex items-center gap-3">
          <div className="flex flex-col gap-0.5">
            <p className="text-[10px] font-bold tracking-[0.16em] text-navy sm:text-[11px]">
              {slide.tagLabel}
            </p>
            {slide.tagSublabel && (
              <p className="text-[10px] font-bold tracking-[0.16em] text-navy sm:text-[11px]">
                {slide.tagSublabel}
              </p>
            )}
          </div>
          <span className="text-lg font-light text-teal" aria-hidden>
            +
          </span>
        </div>
      </div>
    </div>
  );
}

function HeroSlideContent({ slide }: { slide: HeroSlide }) {
  return (
    <div className="flex flex-col">
      <p className="label-caps">{slide.eyebrow}</p>

      <h1 className="display-hero-home mt-4 lg:mt-5">
        {slide.headline.map((line) => (
          <span
            key={line.text}
            className={`block ${line.accent ? "text-accent-bright" : ""}`}
          >
            {line.text}
          </span>
        ))}
      </h1>

      <p className="text-body mt-6 max-w-lg lg:mt-8">
        {slide.description}
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:mt-10">
        <Button asChild size="lg" className="w-full sm:w-auto">
          <Link href={slide.primaryCta.href}>{slide.primaryCta.label}</Link>
        </Button>
        <Button asChild variant="secondary" size="lg" className="w-full sm:w-auto">
          <Link href={slide.secondaryCta.href}>
            {slide.secondaryCta.label}
            <ArrowRight className="transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>

      {slide.id === "movement" && (
        <div className="text-secondary mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-border/80 pt-8">
          <span className="inline-flex items-center gap-1.5 font-medium text-text">
            <MapPin className="size-4 text-teal" aria-hidden />
            Bengaluru
          </span>
          <span className="hidden h-4 w-px bg-border sm:block" aria-hidden />
          <Link
            href="/contact"
            className="link-underline font-medium text-navy hover:text-teal"
          >
            Consultation information
          </Link>
        </div>
      )}
    </div>
  );
}

export function DoctorHero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  const slide = heroSlides[index];
  const count = heroSlides.length;

  const goTo = useCallback(
    (next: number) => {
      setIndex((next + count) % count);
    },
    [count]
  );

  useEffect(() => {
    if (reduce || paused) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, HERO_SLIDE_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [paused, reduce, count]);

  return (
    <section
      className="relative overflow-hidden bg-bg-warm pt-[4.25rem] pattern-dots lg:pt-[5rem]"
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
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_20%,rgba(12,127,130,0.07),transparent_55%),radial-gradient(ellipse_60%_50%_at_10%_80%,rgba(10,30,50,0.03),transparent_50%)]"
        aria-hidden
      />

      <Container className="relative grid items-center gap-10 pb-14 pt-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14 lg:pb-16 lg:pt-10">
        <div className="order-2 lg:order-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              className="flex flex-col"
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -12 }}
              transition={{ duration: 0.55, ease: easeOut }}
            >
              <HeroSlideContent slide={slide} />
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <div
              className="flex items-center gap-2"
              role="tablist"
              aria-label="Choose slide"
            >
              {heroSlides.map((s, i) => (
                <button
                  key={s.id}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Slide ${i + 1}: ${s.tagLabel}`}
                  onClick={() => goTo(i)}
                  className={cn(
                    "focus-ring h-2 rounded-full transition-all duration-300",
                    i === index ? "w-8 bg-teal" : "w-2 bg-border hover:bg-teal/40"
                  )}
                />
              ))}
            </div>

            <div className="flex gap-1">
              <button
                type="button"
                onClick={() => goTo(index - 1)}
                className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-navy hover:border-teal hover:text-teal"
                aria-label="Previous slide"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                type="button"
                onClick={() => goTo(index + 1)}
                className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-navy hover:border-teal hover:text-teal"
                aria-label="Next slide"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>

            <span className="text-xs tabular-nums text-muted">
              {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
            </span>
          </div>
        </div>

        <div className="relative order-1 lg:order-2">
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-[min(100%,520px)] w-[min(90%,420px)] -translate-x-1/2 -translate-y-[45%] rounded-full bg-gradient-to-br from-teal/20 via-mint/40 to-transparent blur-2xl lg:left-auto lg:right-0 lg:translate-x-[10%]"
            aria-hidden
          />
          <svg
            className="pointer-events-none absolute -right-2 top-[18%] hidden w-[85%] opacity-[0.14] lg:block"
            viewBox="0 0 240 120"
            aria-hidden
          >
            <path
              d="M8 96 Q120 12 232 64"
              fill="none"
              stroke="#0F8B8D"
              strokeWidth="1.25"
            />
          </svg>

          <div className="relative mx-auto max-w-md lg:mx-0 lg:ml-auto lg:max-w-none">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                className="relative h-full w-full"
                initial={reduce ? false : { opacity: 0, scale: 1.04, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={reduce ? undefined : { opacity: 0, scale: 0.98, x: -16 }}
                transition={{ duration: 0.75, ease: easeOut }}
              >
                <HeroSlideImage slide={slide} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}
