"use client";

import Link from "next/link";
import { ArrowRight, MessageCircleQuestion } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { FaqAccordion } from "@/components/faq/FaqAccordion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";

const ease = [0.22, 1, 0.36, 1] as const;

export function FaqSection() {
  const reduce = useReducedMotion();

  return (
    <section
      className="relative overflow-hidden border-t border-border-subtle bg-gradient-to-b from-white via-bg-warm to-mint/25 py-10 md:py-14 lg:py-16"
      aria-labelledby="home-faq-heading"
    >
      <div
        className="pointer-events-none absolute -left-24 top-1/3 size-80 rounded-full bg-teal/10 blur-3xl"
        aria-hidden
      />
      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14 xl:gap-16">
          <motion.div
            className="lg:col-span-4 xl:col-span-5"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease }}
          >
            <p className="label-caps">FAQs</p>
            <h2 id="home-faq-heading" className="title-section mt-5 text-balance">
              Questions patients{" "}
              <span className="text-accent">often ask.</span>
            </h2>
            <p className="text-body mt-4 max-w-md">
              Straightforward answers about consultations, this website and when to seek
              in-person care — general information only, not medical advice.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button variant="secondary" size="sm" asChild>
                <Link href="/faqs">
                  View all FAQs
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
              </Button>
              <Link
                href="/contact"
                className="focus-ring inline-flex items-center gap-2 text-sm font-semibold text-teal hover:text-navy"
              >
                <MessageCircleQuestion className="size-4" aria-hidden />
                Still have a question?
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-8 xl:col-span-7"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.06, ease }}
          >
            <FaqAccordion compact />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
