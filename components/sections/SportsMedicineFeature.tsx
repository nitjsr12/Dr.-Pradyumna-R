"use client";

import Link from "next/link";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { useEffect, useState } from "react";
import {
  Activity,
  ArrowRight,
  HeartPulse,
  Lightbulb,
  Stethoscope,
  Trophy,
} from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/Reveal";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;
const STEP_MS = 3800;

const sportsInjuryAssessmentUrl = getWhatsAppUrl(
  "Hello, I was recently injured during sport or activity and would like to book a sports injury assessment with Dr. Pradyumna R."
);

const injuryChips = [
  { label: "ACL Tear", href: "/treatments#acl-tear" },
  { label: "Meniscus Tear", href: "/treatments#meniscus-tear" },
  { label: "Shoulder Dislocation", href: "/treatments#shoulder-dislocation" },
  { label: "Rotator Cuff Tear", href: "/treatments#rotator-cuff-tear" },
  { label: "Kneecap Instability", href: "/treatments#kneecap-instability" },
  { label: "Tennis Elbow", href: "/treatments#tennis-elbow" },
  { label: "Ankle Ligament Injury", href: "/treatments#ankle-ligament-injury" },
  { label: "Achilles Tendon Injury", href: "/treatments#achilles-tendon-injury" },
] as const;

const journey = [
  {
    step: "01",
    label: "Assess",
    tagline: "Find the real cause.",
    text: "A sports-focused examination of the injured joint and how you move, train and load it, backed by a careful review of your MRI or X-ray, to pinpoint exactly what's torn, strained or overloaded.",
    icon: Stethoscope,
  },
  {
    step: "02",
    label: "Understand",
    tagline: "No jargon. Just clarity.",
    text: "Your diagnosis explained in plain words: what's injured, whether it truly needs surgery, and a realistic timeline for getting back to training, matches and everyday life.",
    icon: Lightbulb,
  },
  {
    step: "03",
    label: "Treat",
    tagline: "The right fix, not the biggest one.",
    text: "From physiotherapy and PRP therapy to keyhole ACL reconstruction, meniscus repair or shoulder stabilisation, your treatment is matched to your injury, your sport and your season.",
    icon: Activity,
  },
  {
    step: "04",
    label: "Recover",
    tagline: "Rebuild with purpose.",
    text: "A phased rehab plan that restores strength, balance and range of motion, with regular reviews so your progress is measured, not guessed.",
    icon: HeartPulse,
  },
  {
    step: "05",
    label: "Return to Activity",
    tagline: "Back with confidence.",
    text: "Sport-specific drills and return-to-play checks clear you for the field, court or track only when your body is ready, lowering the risk of re-injury.",
    icon: Trophy,
  },
] as const;

function FlowPath({ active, reduce }: { active: number; reduce: boolean }) {
  const progress = active / (journey.length - 1);

  return (
    <svg
      viewBox="0 0 1000 48"
      className="pointer-events-none absolute -top-2 left-0 right-0 hidden h-12 w-full lg:block"
      preserveAspectRatio="none"
      aria-hidden
    >
      <path
        d="M 40 24 C 180 24, 220 8, 360 24 S 540 40, 680 24 S 820 8, 960 24"
        fill="none"
        stroke="rgba(20,169,161,0.22)"
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
      />
      {!reduce && (
        <motion.path
          d="M 40 24 C 180 24, 220 8, 360 24 S 540 40, 680 24 S 820 8, 960 24"
          fill="none"
          stroke="url(#flow-gradient)"
          strokeWidth="3"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 0.15 + progress * 0.85 }}
          transition={{ duration: 0.75, ease }}
        />
      )}
      <defs>
        <linearGradient id="flow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#14a9a1" />
          <stop offset="100%" stopColor="#14a9a1" stopOpacity="0.45" />
        </linearGradient>
      </defs>
      {!reduce && (
        <motion.circle
          r="6"
          fill="#14a9a1"
          filter="url(#glow)"
          animate={{
            offsetDistance: `${progress * 100}%`,
          }}
          style={{
            offsetPath:
              'path("M 40 24 C 180 24, 220 8, 360 24 S 540 40, 680 24 S 820 8, 960 24")',
          }}
          transition={{ duration: 0.75, ease }}
        />
      )}
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
    </svg>
  );
}

function StepCard({
  item,
  index,
  active,
  reduce,
  onSelect,
  compact,
}: {
  item: (typeof journey)[number];
  index: number;
  active: number;
  reduce: boolean;
  onSelect: () => void;
  compact?: boolean;
}) {
  const isActive = index === active;
  const Icon = item.icon;

  return (
    <motion.li
      layout={!reduce}
      className={cn("list-none", compact ? "w-full" : "min-w-0 flex-1")}
    >
      <button
        type="button"
        onClick={onSelect}
        className={cn(
          "focus-ring group relative h-full w-full overflow-hidden rounded-[22px] border text-left transition-colors duration-500",
          compact ? "p-5" : "p-4 xl:p-5",
          isActive
            ? "border-teal-bright/60 bg-gradient-to-br from-teal-bright/20 via-white/10 to-transparent shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
            : "border-white/10 bg-white/[0.04] hover:border-teal-bright/30 hover:bg-white/[0.07]"
        )}
      >
        <span
          className="pointer-events-none absolute -right-2 -top-4 font-heading text-6xl font-bold text-white/[0.06]"
          aria-hidden
        >
          {item.step}
        </span>

        <span
          className={cn(
            "flex items-center justify-center rounded-xl border transition-all duration-500",
            compact ? "size-11" : "size-10 xl:size-11",
            isActive
              ? "border-teal-bright/40 bg-teal-bright/25 text-teal-bright"
              : "border-white/15 bg-white/5 text-white/70 group-hover:text-teal-bright"
          )}
        >
          <Icon className="size-5" strokeWidth={1.75} aria-hidden />
        </span>

        <p
          className={cn(
            "mt-4 font-semibold transition-colors duration-500",
            compact ? "text-lg" : "text-sm xl:text-base",
            isActive ? "text-teal-bright" : "text-white"
          )}
        >
          {item.label}
        </p>

        {!compact && (
          <>
            {isActive && (
              <p className="mt-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-teal-bright/90">
                {item.tagline}
              </p>
            )}
            <p
              className={cn(
                "mt-2 line-clamp-3 text-xs leading-relaxed xl:text-[13px]",
                isActive ? "text-white/85" : "text-white/55"
              )}
            >
              {item.text}
            </p>
          </>
        )}

        {isActive && !reduce && (
          <motion.span
            layoutId="step-glow"
            className="pointer-events-none absolute inset-0 rounded-[22px] ring-1 ring-teal-bright/40"
            transition={{ duration: 0.45, ease }}
          />
        )}
      </button>
    </motion.li>
  );
}

function SpotlightPanel({
  item,
  reduce,
}: {
  item: (typeof journey)[number];
  reduce: boolean;
}) {
  const Icon = item.icon;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={item.step}
        initial={reduce ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={reduce ? undefined : { opacity: 0, y: -12 }}
        transition={{ duration: 0.45, ease }}
        className="relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-[#0f2d4a] via-navy to-[#0a4a55]/80 p-8 shadow-[0_24px_64px_rgba(0,0,0,0.45)] md:p-10"
      >
        <div
          className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-teal-bright/20 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-teal-bright/15 to-transparent"
          aria-hidden
        />

        <div className="relative flex flex-col gap-6 md:flex-row md:items-start md:gap-10">
          <span className="flex size-16 shrink-0 items-center justify-center rounded-2xl border border-teal-bright/35 bg-teal-bright/15 text-teal-bright shadow-[0_0_32px_rgba(20,169,161,0.25)]">
            <Icon className="size-8" strokeWidth={1.5} aria-hidden />
          </span>
          <div>
            <p className="text-[11px] font-bold tracking-[0.18em] text-teal-bright">
              STEP {item.step}
            </p>
            <h3 className="mt-2 font-heading text-3xl font-bold text-white md:text-4xl">
              {item.label}
            </h3>
            <p className="mt-3 text-sm font-bold uppercase tracking-[0.14em] text-teal-bright">
              {item.tagline}
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
              {item.text}
            </p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export function SportsMedicineFeature() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const current = journey[active];

  useEffect(() => {
    if (reduce || paused) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % journey.length);
    }, STEP_MS);
    return () => window.clearInterval(id);
  }, [reduce, paused]);

  return (
    <section
      className="section-y surface-dark relative overflow-hidden bg-navy mesh-navy pattern-dots-dark"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="pointer-events-none absolute -left-40 top-0 size-[28rem] rounded-full bg-teal-bright/12 blur-3xl"
        style={reduce ? undefined : { animation: "hero-drift 20s ease-in-out infinite" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-0 size-80 rounded-full bg-gold/10 blur-3xl"
        aria-hidden
      />

      <Container className="relative">
        <FadeIn>
          <SectionHeading
            label="Sports medicine"
            dark
            title={
              <>
                From the sidelines{" "}
                <span className="text-teal-bright">back to the game.</span>
              </>
            }
            description="A twisted knee on the football pitch. A shoulder that slips out mid-serve. A running niggle that just won't settle. Sports injuries need more than rest and painkillers. As a sports medicine doctor in Bangalore with a FIFA Diploma in Football Medicine, Dr. Pradyumna R treats professional athletes and weekend warriors alike, with one goal: getting you back to the game you love, stronger and safer."
          />
        </FadeIn>

        <div className="mt-14 lg:mt-16">
          <SpotlightPanel item={current} reduce={Boolean(reduce)} />
        </div>

        <div className="relative mt-10 lg:mt-12">
          <FlowPath active={active} reduce={Boolean(reduce)} />

          <ol className="hidden gap-3 lg:flex lg:pt-6 xl:gap-4">
            {journey.map((item, index) => (
              <StepCard
                key={item.step}
                item={item}
                index={index}
                active={active}
                reduce={Boolean(reduce)}
                onSelect={() => setActive(index)}
              />
            ))}
          </ol>

          <ol className="mt-8 space-y-3 lg:hidden">
            {journey.map((item, index) => (
              <StepCard
                key={item.step}
                item={item}
                index={index}
                active={active}
                reduce={Boolean(reduce)}
                onSelect={() => setActive(index)}
                compact
              />
            ))}
          </ol>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <div className="flex gap-1.5" role="tablist" aria-label="Care pathway steps">
            {journey.map((item, index) => (
              <button
                key={item.step}
                type="button"
                role="tab"
                aria-selected={index === active}
                onClick={() => setActive(index)}
                className={cn(
                  "focus-ring h-1.5 rounded-full transition-all duration-500",
                  index === active ? "w-10 bg-teal-bright" : "w-3 bg-white/25 hover:bg-white/40"
                )}
                aria-label={item.label}
              />
            ))}
          </div>
          {!reduce && (
            <div className="h-1 min-w-[120px] flex-1 overflow-hidden rounded-full bg-white/10 lg:max-w-xs">
              <motion.span
                key={`${active}-${paused}`}
                className="block h-full origin-left rounded-full bg-teal-bright/80"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: paused ? undefined : 1 }}
                transition={{ duration: STEP_MS / 1000, ease: "linear" }}
              />
            </div>
          )}
        </div>

        <div
          className="mt-10 flex flex-wrap gap-2"
          aria-label="Injuries we treat"
        >
          {injuryChips.map((chip) => (
            <Link
              key={chip.label}
              href={chip.href}
              className="focus-ring rounded-full border border-white/20 bg-white/[0.04] px-3.5 py-1.5 text-xs font-semibold text-white/85 transition-colors hover:border-teal-bright/45 hover:bg-teal-bright/10 hover:text-white"
            >
              {chip.label}
            </Link>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
          <Button asChild variant="outlineLight">
            <Link href="/sports-medicine">
              Explore Sports Medicine
              <ArrowRight />
            </Link>
          </Button>
          <a
            href={sportsInjuryAssessmentUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring text-sm font-semibold text-teal-bright underline-offset-4 hover:text-white hover:underline"
          >
            Injured recently? Book a sports injury assessment
          </a>
        </div>
      </Container>
    </section>
  );
}
