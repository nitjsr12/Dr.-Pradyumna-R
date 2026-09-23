"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { whenToConsultCards } from "@/data/expertise";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;
const SLIDE_MS = 5200;

const slides = whenToConsultCards.map((item, index) => ({
  ...item,
  step: String(index + 1).padStart(2, "0"),
  image: [
    { src: "/images/hero/slide-movement.jpg", position: "object-[70%_center]" },
    { src: "/images/hero/slide-precision.jpg", position: "object-[30%_center]" },
    { src: "/images/hero/slide-sports.jpg", position: "object-center" },
    { src: "/images/hero/slide-doctor.jpg", position: "object-[22%_center]" },
    { src: "/images/hero/slide-sports.jpg", position: "object-[40%_center]" },
    { src: "/images/hero/slide-doctor.jpg", position: "object-center" },
  ][index],
}));

export function WhenToConsult() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  const count = slides.length;
  const slide = slides[index];

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
      className="relative overflow-hidden bg-navy"
      aria-roledescription="carousel"
      aria-label="When to consult"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node)) {
          setPaused(false);
        }
      }}
    >
      <motion.div
        className="absolute inset-0"
        initial={false}
        animate={reduce ? undefined : { scale: [1, 1.08, 1] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      >
        <Image
          src={slide.image.src}
          alt=""
          fill
          quality={90}
          sizes="100vw"
          className={cn("object-cover transition-opacity duration-700", slide.image.position)}
        />
      </motion.div>
      <div
        className="absolute inset-0 bg-gradient-to-br from-navy/95 via-navy/85 to-teal/70"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-20 top-0 size-96 rounded-full bg-teal-bright/30 blur-3xl"
        style={reduce ? undefined : { animation: "hero-drift 14s ease-in-out infinite" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-0 size-80 rounded-full bg-gold/25 blur-3xl"
        style={reduce ? undefined : { animation: "hero-drift-alt 17s ease-in-out infinite" }}
        aria-hidden
      />
      <div className="pattern-dots-dark pointer-events-none absolute inset-0 opacity-30" aria-hidden />

      <Container className="relative py-16 md:py-20 lg:py-24">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <motion.header
            className="max-w-2xl"
            initial={reduce ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease }}
          >
            <p className="label-caps-on-dark">Guidance</p>
            <h2 className="title-section mt-5 text-balance !text-white">
              When is it time to see an{" "}
              <span className="text-teal-bright">orthopaedic specialist?</span>
            </h2>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white lg:text-base">
              Not every ache needs specialist care. But when pain, injury or restricted movement
              starts affecting the way you live, work, train or play, it may be time to seek an
              expert assessment.
            </p>
          </motion.header>

          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={() => go(index - 1)}
              className="focus-ring inline-flex size-11 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur transition-colors hover:bg-white hover:text-navy"
              aria-label="Previous sign"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              className="focus-ring inline-flex size-11 items-center justify-center rounded-full bg-teal-bright text-navy shadow-lg transition-colors hover:bg-white"
              aria-label="Next sign"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>

        <div className="relative mt-12 min-h-[220px] lg:mt-14 lg:min-h-[180px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.title}
              initial={reduce ? false : { opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -20 }}
              transition={{ duration: 0.45, ease }}
              className="max-w-3xl"
            >
              <p className="text-sm font-bold tabular-nums tracking-[0.18em] text-teal-bright">
                {slide.step}
                <span className="ml-2 text-white/40">/ {String(count).padStart(2, "0")}</span>
              </p>
              <h3 className="mt-4 font-heading text-3xl font-bold tracking-tight !text-white sm:text-4xl">
                {slide.title}
              </h3>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white">{slide.description}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex flex-wrap gap-2" role="tablist" aria-label="Consultation signs">
          {slides.map((item, itemIndex) => {
            const selected = itemIndex === index;
            return (
              <button
                key={item.title}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setIndex(itemIndex)}
                className={cn(
                  "focus-ring rounded-full px-4 py-2 text-left text-xs font-semibold transition-all sm:text-sm",
                  selected
                    ? "bg-teal-bright text-navy shadow-md"
                    : "bg-white/10 text-white/80 backdrop-blur hover:bg-white/20"
                )}
              >
                {item.title}
              </button>
            );
          })}
        </div>

        <div className="mt-8 h-1 overflow-hidden rounded-full bg-white/15">
          {!reduce && (
            <span
              key={`${slide.title}-${paused}`}
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

        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-white/75">
          This information is for general education and does not replace an in-person medical
          assessment.
        </p>
      </Container>
    </section>
  );
}
