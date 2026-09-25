"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { homeExpertise } from "@/data/expertise";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;
const SLIDE_MS = 5600;

const photos: Record<string, { src: string; position: string }> = {
  "Sports Medicine": { src: "/images/hero/slide-sports.jpg", position: "object-center" },
  Orthopaedics: { src: "/images/hero/slide-doctor.jpg", position: "object-[22%_center]" },
  "Sports Injuries": { src: "/images/hero/slide-movement.jpg", position: "object-[76%_center]" },
  "Musculoskeletal Care": { src: "/images/hero/slide-movement.jpg", position: "object-[16%_center]" },
  "Movement & Recovery": { src: "/images/hero/slide-precision.jpg", position: "object-[28%_center]" },
  "Patient Education": { src: "/images/hero/slide-doctor.jpg", position: "object-[40%_center]" },
};

export function ExpertiseGrid() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  const count = homeExpertise.length;
  const item = homeExpertise[index];
  const photo = photos[item.title];

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
      className="overflow-hidden bg-bg-warm py-10 md:py-14 lg:py-16"
      aria-roledescription="carousel"
      aria-label="Areas of expertise"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node)) {
          setPaused(false);
        }
      }}
    >
      <Container>
        <div className="flex items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="label-caps">Expertise</p>
            <h2 className="title-section mt-5 text-balance">
              Areas of <span className="text-accent">expertise</span>
            </h2>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={() => go(index - 1)}
              className="focus-ring inline-flex size-11 items-center justify-center rounded-full border border-navy/10 bg-white text-navy shadow-sm transition-colors hover:bg-navy hover:text-white"
              aria-label="Previous area"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              className="focus-ring inline-flex size-11 items-center justify-center rounded-full bg-teal text-white shadow-sm transition-colors hover:bg-navy"
              aria-label="Next area"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>

        <div className="relative mt-10 min-h-[420px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={item.title}
              initial={reduce ? false : { opacity: 0, x: 56 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduce ? undefined : { opacity: 0, x: -56 }}
              transition={{ duration: 0.5, ease }}
              className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14"
            >
              <div className="relative aspect-[16/10] overflow-hidden lg:col-span-6">
                {photo && (
                  <Image
                    src={photo.src}
                    alt=""
                    fill
                    quality={90}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className={cn("object-cover", photo.position)}
                  />
                )}
              </div>

              <div className="lg:col-span-6">
                <h3 className="font-heading text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                  {item.title}
                </h3>
                {item.kicker && (
                  <p className="mt-3 text-base font-semibold text-teal">{item.kicker}</p>
                )}
                <p className="text-body mt-4 max-w-xl text-[15px] leading-relaxed">
                  {item.description}
                </p>
                <Link
                  href={item.href}
                  className="group focus-ring mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy"
                >
                  Explore
                  <ArrowRight className="size-4 text-teal transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 h-1 overflow-hidden rounded-full bg-navy/10">
          {!reduce && (
            <span
              key={`${item.title}-${paused}`}
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
      </Container>
    </section>
  );
}
