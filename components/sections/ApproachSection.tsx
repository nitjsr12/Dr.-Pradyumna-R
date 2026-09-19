"use client";

import { Container } from "@/components/ui/Container";
import {
  ApproachCard,
  type ApproachStep,
} from "@/components/cards/ApproachCard";
import { FadeIn, Stagger, StaggerChild } from "@/components/animations/Reveal";

const steps: ApproachStep[] = [
  {
    n: "01",
    title: "UNDERSTAND",
    text: "Clear conversations about symptoms, diagnosis and available options.",
    icon: "activity",
  },
  {
    n: "02",
    title: "PLAN",
    text: "Treatment planning based on individual needs and clinical assessment.",
    icon: "badge",
  },
  {
    n: "03",
    title: "MOVE FORWARD",
    text: "Support focused on recovery, function and returning to meaningful activity.",
    icon: "award",
  },
];

export function ApproachSection() {
  return (
    <section
      className="section-y relative overflow-hidden surface-muted pattern-grid"
      aria-labelledby="approach-heading"
    >
      <div
        className="pointer-events-none absolute -left-20 top-20 h-64 w-64 rounded-full bg-teal/10 blur-3xl"
        aria-hidden
      />
      <Container className="relative">
        <FadeIn className="max-w-2xl">
          <p className="label-caps">The approach</p>
          <h2 id="approach-heading" className="title-section mt-5 text-balance">
            Care that looks{" "}
            <span className="text-accent">beyond the pain.</span>
          </h2>
          <p className="text-body mt-6 max-w-xl lg:mt-7">
            Orthopaedic and sports medicine care begins with understanding how an
            injury, condition or pain affects movement and everyday life.
          </p>
        </FadeIn>

        <Stagger className="mt-12 grid gap-6 md:grid-cols-3 lg:mt-14 lg:gap-7">
          {steps.map((s) => (
            <StaggerChild key={s.n} className="h-full">
              <ApproachCard step={s} />
            </StaggerChild>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
