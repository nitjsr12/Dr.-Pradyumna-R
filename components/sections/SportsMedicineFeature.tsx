"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { FadeIn, Stagger, StaggerChild } from "@/components/animations/Reveal";

const journey = [
  { step: "01", label: "Assess" },
  { step: "02", label: "Understand" },
  { step: "03", label: "Treat" },
  { step: "04", label: "Recover" },
  { step: "05", label: "Return to Activity" },
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
                <span className="text-teal-bright">movement.</span>
              </>
            }
            description="Sports medicine is about more than treating an injury. It is about understanding movement, activity and the individual goals behind recovery."
          />
        </FadeIn>
        <Stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-5 lg:gap-3">
          {journey.map((j, i) => (
            <StaggerChild key={j.step}>
              <div className="relative rounded-[var(--radius-md)] border border-white/10 bg-white/[0.04] px-4 py-5 backdrop-blur-sm transition-colors hover:border-teal-bright/30 hover:bg-white/[0.07] lg:text-left">
                {i < journey.length - 1 && (
                  <span
                    className="absolute -right-2 top-1/2 hidden h-px w-4 bg-teal-bright/30 lg:block"
                    aria-hidden
                  />
                )}
                <p className="text-xs font-bold tabular-nums text-teal-bright">
                  {j.step}
                </p>
                <p className="mt-2 text-sm font-semibold leading-snug tracking-wide text-white/95">
                  {j.label}
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
