"use client";

import Image from "next/image";
import { useEffect, useState, type ComponentType } from "react";
import {
  BookOpen,
  Globe2,
  GraduationCap,
  Handshake,
  Languages,
} from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { credentialsSlides } from "@/data/credentials-slides";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;
const SLIDE_MS = 5600;

type IconType = ComponentType<{
  className?: string;
  strokeWidth?: number;
  "aria-hidden"?: boolean;
}>;

const slideIcons: Record<(typeof credentialsSlides)[number]["id"], IconType> = {
  qualifications: GraduationCap,
  fellowships: Globe2,
  memberships: Handshake,
  languages: Languages,
  research: BookOpen,
};

function SlideImage({
  src,
  position,
  label,
  icon: Icon,
}: {
  src: string;
  position: string;
  label: string;
  icon: IconType;
}) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const img = new window.Image();
    img.onload = () => setReady(true);
    img.onerror = () => setReady(false);
    img.src = src;
  }, [src]);

  return (
    <div className="absolute inset-0 bg-navy">
      {ready ? (
        <Image
          src={src}
          alt=""
          fill
          quality={90}
          sizes="(max-width: 1024px) 100vw, 50vw"
          className={cn("object-cover", position)}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-teal/80 via-navy to-navy-deep px-8 text-center text-white">
          <Icon className="size-10 text-teal-bright" strokeWidth={1.5} aria-hidden />
          <p className="mt-5 text-[11px] font-bold tracking-[0.18em] text-teal-bright">
            IMAGE PLACEHOLDER
          </p>
          <p className="mt-2 text-sm text-white/70">{label}</p>
        </div>
      )}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-navy/30 lg:to-navy"
        aria-hidden
      />
    </div>
  );
}

export function AchievementsSection() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  const slide = credentialsSlides[index];
  const Icon = slideIcons[slide.id];

  useEffect(() => {
    if (reduce || paused) return;
    const id = window.setTimeout(() => {
      setIndex((current) => (current + 1) % credentialsSlides.length);
    }, SLIDE_MS);
    return () => window.clearTimeout(id);
  }, [reduce, paused, index]);

  return (
    <section
      className="relative overflow-hidden bg-navy text-white"
      aria-roledescription="carousel"
      aria-label="Credentials"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node)) {
          setPaused(false);
        }
      }}
    >
      <Container className="relative pt-10 md:pt-14 lg:pt-16">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="label-caps-on-dark">Credentials</p>
            <h2 className="title-section mt-5 text-balance !text-white">
              Expertise backed by{" "}
              <span className="text-teal-bright">training & experience.</span>
            </h2>
          </div>
          <p className="font-heading text-sm font-semibold tabular-nums tracking-[0.18em] text-white/80">
            <span className="text-teal-bright">{String(index + 1).padStart(2, "0")}</span>
            <span> / {String(credentialsSlides.length).padStart(2, "0")}</span>
          </p>
        </div>
      </Container>

      <div className="relative mt-10 lg:mt-14">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            className="grid min-h-[560px] lg:grid-cols-2"
            initial={reduce ? false : { opacity: 0, x: 48 }}
            animate={{ opacity: 1, x: 0 }}
            exit={reduce ? undefined : { opacity: 0, x: -48 }}
            transition={{ duration: 0.55, ease }}
          >
            <div className="relative min-h-[280px] overflow-hidden lg:min-h-[560px]">
              <SlideImage
                src={slide.image}
                position={slide.imagePosition}
                label={slide.title}
                icon={Icon}
              />
            </div>

            <div className="flex flex-col justify-center px-6 py-10 sm:px-10 lg:px-16 lg:py-14">
              <Icon className="size-7 text-teal-bright" strokeWidth={1.5} aria-hidden />
              <h3 className="mt-5 font-heading text-3xl font-bold tracking-tight !text-white sm:text-4xl">
                {slide.title}
              </h3>
              <p className="mt-4 max-w-lg text-base font-medium text-teal-bright">{slide.intro}</p>
              <ul className="mt-8 max-w-lg space-y-3">
                {slide.items.map((line) => (
                  <li key={line} className="flex gap-3 text-[15px] leading-relaxed text-white">
                    <span
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-teal-bright"
                      aria-hidden
                    />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <Container className="pb-10 pt-2 lg:pb-14">
        <div className="h-px bg-white/10" aria-hidden />
        <div
          className="mt-5 flex gap-6 overflow-x-auto"
          role="tablist"
          aria-label="Credential slides"
        >
          {credentialsSlides.map((item, itemIndex) => {
            const selected = itemIndex === index;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setIndex(itemIndex)}
                className={cn(
                  "focus-ring relative shrink-0 pb-3 text-left text-sm font-semibold transition-colors",
                  selected ? "text-white" : "text-white/75 hover:text-white"
                )}
              >
                <span className="mr-2 text-[11px] tabular-nums tracking-[0.14em] text-teal-bright">
                  {String(itemIndex + 1).padStart(2, "0")}
                </span>
                {item.title}
                {selected && (
                  <motion.span
                    layoutId="credential-slide-line"
                    className="absolute inset-x-0 -bottom-px h-0.5 bg-teal-bright"
                  />
                )}
                {selected && !reduce && (
                  <span
                    key={`${item.id}-${index}-${paused}`}
                    className="absolute inset-x-0 -bottom-px h-0.5 origin-left bg-white/35"
                    style={{
                      animationName: "hero-progress",
                      animationDuration: `${SLIDE_MS}ms`,
                      animationTimingFunction: "linear",
                      animationFillMode: "forwards",
                      animationPlayState: paused ? "paused" : "running",
                    }}
                  />
                )}
              </button>
            );
          })}
        </div>
        <AnimatePresence mode="wait">
          <motion.p
            key={slide.id}
            className="mt-6 max-w-3xl text-sm leading-relaxed text-white/75"
            initial={reduce ? false : { opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -6 }}
            transition={{ duration: 0.35, ease }}
          >
            {slide.caption}
          </motion.p>
        </AnimatePresence>
      </Container>
    </section>
  );
}
