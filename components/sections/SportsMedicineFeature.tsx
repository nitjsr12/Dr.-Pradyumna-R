"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/Reveal";

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
  const reduce = useReducedMotion();

  return (
    <section className="section-y surface-dark relative overflow-hidden bg-navy mesh-navy">
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

        <ol className="relative mt-14 hidden lg:grid lg:grid-cols-5 lg:gap-6">
          <motion.span
            className="absolute left-[8%] right-[8%] top-5 h-px origin-left bg-gradient-to-r from-teal-bright via-teal-bright to-teal-bright/30"
            initial={reduce ? false : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            aria-hidden
          />
          {journey.map((item, index) => (
            <motion.li
              key={item.step}
              className="relative"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: reduce ? 0 : 0.12 * index }}
            >
              <span className="relative z-10 flex size-10 items-center justify-center rounded-full bg-navy text-xs font-bold text-teal-bright ring-2 ring-teal-bright">
                {item.step}
              </span>
              <p className="mt-6 text-base font-semibold text-white">{item.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-white/85">{item.text}</p>
            </motion.li>
          ))}
        </ol>

        <ol className="relative mt-12 space-y-8 lg:hidden">
          <span
            className="absolute bottom-6 left-5 top-5 w-px bg-gradient-to-b from-teal-bright to-teal-bright/20"
            aria-hidden
          />
          {journey.map((item) => (
            <li key={item.step} className="relative pl-16">
              <span className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-full bg-navy text-xs font-bold text-teal-bright ring-2 ring-teal-bright">
                {item.step}
              </span>
              <p className="text-base font-semibold text-white">{item.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-white/85">{item.text}</p>
            </li>
          ))}
        </ol>

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
