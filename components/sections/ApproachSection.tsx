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
    title: "CLARITY FIRST",
    subtitle: "Understand",
    text: "Every consultation begins with a thorough examination, a careful look at your scans, and a plain-language explanation of what's really behind your knee pain, shoulder pain or sports injury. No jargon, no rushing.",
    icon: "activity",
    image: "/images/hero/slide-doctor.jpg",
    imagePosition: "object-[center_18%]",
  },
  {
    n: "02",
    title: "CARE THAT FITS",
    subtitle: "Plan",
    text: "Surgery is never the default. Your plan may be physiotherapy, PRP therapy, keyhole (arthroscopic) repair or robotic knee replacement, chosen for your body, your goals and your recovery. Never one-size-fits-all.",
    icon: "badge",
    image: "/images/hero/slide-movement.jpg",
    imagePosition: "object-[68%_center]",
  },
  {
    n: "03",
    title: "BACK IN THE GAME",
    subtitle: "Move Forward",
    text: "Structured rehab and close follow-ups guide every step, whether you're a runner returning after ACL reconstruction or a parent who wants to climb stairs pain-free again. The goal: movement you can trust.",
    icon: "award",
    image: "/images/expertise/sports-medicine.webp",
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
          <p className="label-caps">The Pradyumna approach</p>
          <h2 id="approach-heading" className="title-section mt-5 text-balance">
            Care that looks{" "}
            <span className="text-accent">beyond the pain.</span>
          </h2>
          <p className="text-body mt-6 max-w-xl lg:mt-7">
            An X-ray shows the injury. It doesn&apos;t show the morning run you&apos;ve given up,
            the stairs you now dread, or the shoulder that wakes you at night. As an orthopaedic
            and sports medicine specialist in Bangalore, Dr. Pradyumna R treats the whole picture,
            building every plan around how you want to move, work, play and live.
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
