"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  aboutDoctorPhotoAlt,
  aboutProfessionalOverviewParagraphs,
  aboutProfessionalOverviewQuote,
} from "@/data/about-profile";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/animations/Reveal";

const ease = [0.22, 1, 0.36, 1] as const;

export function AboutProfessionalOverview() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-b border-border-subtle/80 bg-white py-10 md:py-14 lg:py-16">
      <div
        className="pointer-events-none absolute -right-32 top-0 size-96 rounded-full bg-mint/40 blur-3xl"
        aria-hidden
      />

      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14 xl:gap-16">
          <FadeIn className="lg:col-span-7 xl:col-span-8">
            <p className="label-caps">Professional overview</p>
            <h2 className="title-section mt-5 text-balance">
              Consultant orthopaedic &amp;{" "}
              <span className="text-accent">sports medicine specialist</span>
            </h2>

            <div className="mt-8 space-y-5 md:mt-10">
              {aboutProfessionalOverviewParagraphs.map((paragraph, i) => (
                <motion.p
                  key={paragraph.slice(0, 40)}
                  initial={reduce ? false : { opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.06, ease }}
                  className="text-[16px] leading-[1.85] text-navy/88 md:text-[17px]"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            <motion.blockquote
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: 0.15, ease }}
              className="relative mt-10 border-l-4 border-teal pl-6 md:mt-12"
            >
              <p className="font-heading text-xl font-medium italic leading-snug text-navy md:text-2xl md:leading-snug">
                &ldquo;{aboutProfessionalOverviewQuote}&rdquo;
              </p>
            </motion.blockquote>
          </FadeIn>

          <FadeIn className="lg:col-span-5 xl:col-span-4">
            <div className="relative mx-auto max-w-sm lg:max-w-none lg:sticky lg:top-28">
              <div
                className="absolute -inset-1 rounded-[28px] bg-gradient-to-br from-teal/30 via-white to-gold/25"
                aria-hidden
              />
              <div className="relative overflow-hidden rounded-[26px] border border-border-subtle/80 bg-bg-warm shadow-[var(--shadow-soft)]">
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/images/hero/slide-doctor.jpg"
                    alt={aboutDoctorPhotoAlt}
                    fill
                    quality={90}
                    sizes="(max-width: 1024px) 88vw, 380px"
                    className="object-cover object-[22%_center]"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent"
                    aria-hidden
                  />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
