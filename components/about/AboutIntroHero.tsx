"use client";

import Link from "next/link";
import { BookAppointmentLink } from "@/components/layout/BookAppointmentLink";
import { useEffect, useRef } from "react";
import { ArrowRight, MapPin } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { doctor } from "@/data/doctor";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";

const INTRO_VIDEO = "/videos/hero-musculoskeletal.mp4";

export function AboutIntroHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const el = videoRef.current;
    if (!el || reduce) return;
    el.muted = true;
    const pending = el.play();
    if (pending) pending.catch(() => undefined);
  }, [reduce]);

  return (
    <section className="relative overflow-hidden bg-navy mesh-navy pattern-dots-dark pt-[4.75rem] lg:pt-[5.5rem]">
      <div
        className="pointer-events-none absolute -left-24 top-20 size-96 rounded-full bg-teal-bright/25 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-0 size-80 rounded-full bg-gold/20 blur-3xl"
        aria-hidden
      />

      <Container className="relative py-10 md:py-14 lg:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <motion.div
            className="lg:col-span-6"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-teal-bright via-teal to-navy p-[3px] shadow-[0_24px_64px_rgba(0,0,0,0.35)]">
              <div className="relative aspect-video overflow-hidden rounded-[25px] bg-navy">
                {reduce ? (
                  <div className="flex size-full items-center justify-center bg-gradient-to-br from-navy via-[#12324d] to-teal/40 px-6 text-center text-sm text-white/80">
                    Intro video
                  </div>
                ) : (
                  <video
                    ref={videoRef}
                    src={INTRO_VIDEO}
                    muted
                    loop
                    playsInline
                    autoPlay
                    preload="auto"
                    className="absolute inset-0 size-full object-cover object-center"
                    aria-label="Introduction video of Dr. Pradyumna R"
                  />
                )}
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent"
                  aria-hidden
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-6"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="label-caps-on-dark">About Dr. Pradyumna R</p>
            <h1 className="title-page mt-5 text-balance text-white">
              {doctor.name}
            </h1>
            <p className="mt-4 text-base font-semibold leading-snug text-teal-bright md:text-lg">
              {doctor.descriptor} · {doctor.city}
            </p>
            <p className="mt-2 text-sm font-medium text-white/85 md:text-[15px]">
              Consultant — Shoulder and Sports Medicine
            </p>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/88 lg:text-base">
              {doctor.overview}
            </p>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-white/75">
              {doctor.approach}
            </p>
            <p className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-white/80">
              <MapPin className="size-4 text-teal-bright" aria-hidden />
              Kanakapura Road &amp; Jayanagar — Bengaluru
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="teal" size="lg">
                <BookAppointmentLink>
                  Book a consultation
                  <ArrowRight className="opacity-90" />
                </BookAppointmentLink>
              </Button>
              <Button asChild variant="outlineLight" size="lg">
                <Link href="/contact">Contact</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
