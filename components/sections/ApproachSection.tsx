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
    text: "A clear clinical assessment of your symptoms, movement and condition, with straightforward answers about your diagnosis and treatment options.",
    icon: "activity",
    image: "/images/hero/slide-doctor.jpg",
    imagePosition: "object-[center_18%]",
  },
  {
    n: "02",
    title: "PLAN",
    text: "From shoulder and knee conditions to ankle injuries, treatment is guided by your clinical needs, goals and recovery — not a one-size-fits-all approach.",
    icon: "badge",
    image: "/images/hero/slide-movement.jpg",
    imagePosition: "object-[68%_center]",
  },
  {
    n: "03",
    title: "MOVE FORWARD",
    text: "Focused care to restore movement, improve function and support your return to the activities, sport and everyday life you value.",
    icon: "award",
    image: "/images/hero/slide-sports.jpg",
    imagePosition: "object-center",
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
            Orthopaedic and sports medicine care is about more than treating
            symptoms. It’s about understanding how a shoulder, knee or ankle
            condition affects the way you move, work, play and live, then
            building care around your individual needs.
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
