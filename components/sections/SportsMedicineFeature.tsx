"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { FadeIn, Stagger, StaggerChild } from "@/components/animations/Reveal";

const journey = [
  {
    step: "01",
    label: "Assess",
    text: "Understand the injury, symptoms and movement patterns through a focused clinical assessment.",
  },
  {
    step: "02",
    label: "Understand",
    text: "Clear guidance on your condition, treatment options and expected recovery journey.",
  },
  {
    step: "03",
    label: "Treat",
    text: "A personalised treatment approach based on your condition, activity and clinical needs.",
  },
  {
    step: "04",
    label: "Recover",
    text: "Focused recovery to help improve function and support a safe progression back to activity.",
  },
  {
    step: "05",
    label: "Return to Activity",
    text: "A structured return to everyday activity, training or sport — with recovery guiding every step.",
  },
] as const;

export function SportsMedicineFeature() {
  return (
    <section className="section-y surface-dark relative overflow-hidden bg-navy mesh-navy">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden
      >
        <svg className="h-full w-full" preserveAspectRatio="none">
          <path
            d="M0 420 Q480 180 1320 320"
            fill="none"
            stroke="#14A9A1"
            strokeWidth="1"
            opacity="0.35"
          />
          <path
            d="M0 480 Q600 350 1320 400"
            fill="none"
            stroke="#14A9A1"
            strokeWidth="0.75"
            opacity="0.2"
          />
        </svg>
      </div>
      <Container className="relative">
        <FadeIn>
          <SectionHeading
            label="Sports medicine"
            dark
            title={
              <>
                Built around{" "}
                <span className="text-teal-bright">how you move.</span>
              </>
            }
            description="Sports medicine goes beyond treating an injury. It’s about understanding your movement, your sport, your goals and what it takes to get you back to doing what you love."
          />
        </FadeIn>
        <Stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-5 lg:gap-3">
          {journey.map((j) => (
            <StaggerChild key={j.step} className="h-full">
              <div className="relative h-full rounded-[var(--radius-md)] border border-white/10 bg-white/[0.05] px-4 py-5 backdrop-blur-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:border-teal-bright/40 hover:bg-white/[0.09]">
                <p className="text-xs font-bold tabular-nums text-teal-bright">
                  {j.step}
                </p>
                <p className="mt-2 text-sm font-semibold leading-snug tracking-wide text-white">
                  {j.label}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/65">
                  {j.text}
                </p>
              </div>
            </StaggerChild>
          ))}
        </Stagger>
        <Button asChild variant="outlineLight" className="mt-12">
          <Link href="/sports-medicine">
            Explore Sports Medicine
            <ArrowRight />
          </Link>
        </Button>
      </Container>
    </section>
  );
}
