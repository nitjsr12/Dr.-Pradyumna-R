"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { professionalTimeline } from "@/data/journey";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconBadge, type IconBadgeName } from "@/components/ui/IconBadge";
import { FadeIn, Stagger, StaggerChild } from "@/components/animations/Reveal";
import { easeOut } from "@/lib/animations";

export function ProfessionalTimeline() {
  const reduce = useReducedMotion();

  return (
    <section className="section-y surface-dark relative overflow-hidden bg-navy mesh-navy">
      <div
        className="pattern-dots-dark pointer-events-none absolute inset-0 opacity-50"
        aria-hidden
      />
      <Container className="relative">
        <FadeIn>
          <SectionHeading
            dark
            label="Professional journey"
            title={
              <>
                Training, expertise &{" "}
                <span className="text-teal-bright">global experience.</span>
              </>
            }
            description="A career shaped by specialised orthopaedic training, international exposure and a focused interest in shoulder, knee and sports medicine."
          />
        </FadeIn>

        <div className="relative mt-14 pl-4 sm:pl-0 lg:mt-16">
          <motion.div
            className="absolute bottom-2 left-[1.65rem] top-2 w-px origin-top bg-gradient-to-b from-teal-bright via-teal-bright/30 to-transparent sm:left-6 lg:left-1/2 lg:-ml-px"
            initial={reduce ? false : { scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: easeOut }}
            aria-hidden
          />

          <Stagger className="space-y-6 lg:space-y-10">
            {professionalTimeline.map((item, i) => (
              <StaggerChild key={item.id}>
                <div
                  className={`relative lg:flex lg:items-stretch lg:gap-8 ${
                    i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  <article
                    className={`relative ml-10 rounded-[var(--radius-lg)] border border-white/10 bg-white/[0.07] p-5 backdrop-blur-sm sm:ml-14 lg:ml-0 lg:w-[calc(50%-2.5rem)] ${
                      i % 2 === 0 ? "lg:mr-auto" : "lg:ml-auto"
                    }`}
                  >
                    <h3 className="text-base font-bold text-white sm:text-lg">
                      {item.title}
                    </h3>
                    <p className="text-secondary mt-2">
                      {item.detail}
                    </p>
                  </article>

                  <div
                    className="absolute left-0 top-5 sm:left-2 lg:left-1/2 lg:-translate-x-1/2"
                    aria-hidden
                  >
                    <motion.span
                      className="flex size-10 items-center justify-center rounded-full border-2 border-teal-bright/60 bg-navy-deep sm:size-11"
                      initial={reduce ? false : { scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.05 * i, type: "spring", stiffness: 420, damping: 22 }}
                    >
                      <IconBadge
                        name={item.icon as IconBadgeName}
                        size="sm"
                        className="size-8 rounded-full border-0 bg-transparent text-teal-bright shadow-none sm:size-9"
                      />
                    </motion.span>
                  </div>

                  <div className="hidden flex-1 lg:block" aria-hidden />
                </div>
              </StaggerChild>
            ))}
          </Stagger>
        </div>

        <FadeIn className="mt-12 text-center lg:mt-14" delay={0.15}>
          <Link
            href="/about"
            className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold transition-colors hover:border-teal-bright/40 hover:bg-white/10"
          >
            Full professional overview
            <ArrowRight className="size-4 text-teal-bright" />
          </Link>
        </FadeIn>
      </Container>
    </section>
  );
}
