"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { ArrowRight, MapPin } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { PageBannerBackground } from "@/components/hero/PageBannerBackground";
import { BookAppointmentLink } from "@/components/layout/BookAppointmentLink";
import { aboutHeroSubline } from "@/data/about-profile";
import { doctor } from "@/data/doctor";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";

const INTRO_VIDEO = "/videos/hero-musculoskeletal.mp4";
const ease = [0.22, 1, 0.36, 1] as const;

export function AboutIntro() {
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
    <section className="hero-banner relative overflow-hidden border-b border-border-subtle/80 pt-[4.75rem] lg:pt-[5.5rem]">
      <PageBannerBackground />

      <Container className="relative py-10 md:py-14 lg:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14 xl:gap-16">
          <motion.div
            className="lg:col-span-6 lg:order-1"
            initial={reduce ? false : { opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, ease }}
          >
            <p className="label-caps-on-dark">About</p>
            <h1 className="title-page mt-5 text-balance">
              <span className="text-accent">Meet</span> Dr. Pradyumna R
            </h1>
            <p className="text-body mt-5 max-w-xl font-medium md:text-[17px]">{aboutHeroSubline}</p>
            <p className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-white/80">
              <MapPin className="size-4 shrink-0 text-teal-bright" aria-hidden />
              Kanakapura Road &amp; Jayanagar — {doctor.city}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-teal hover:bg-teal/90">
                <BookAppointmentLink>
                  Book a consultation
                  <ArrowRight className="size-4 opacity-90" />
                </BookAppointmentLink>
              </Button>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="border-white/25 bg-white/10 text-white hover:bg-white/20"
              >
                <Link href="/contact">Contact</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-6 lg:order-2"
            initial={reduce ? false : { opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.08, ease }}
          >
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              <div
                className="absolute -inset-1 rounded-[28px] bg-gradient-to-br from-teal-bright/40 via-white to-gold/30 opacity-90 blur-[2px]"
                aria-hidden
              />
              <div className="relative overflow-hidden rounded-[26px] border border-white/80 bg-navy shadow-[var(--shadow-soft)]">
                <div className="relative aspect-video w-full sm:aspect-[16/10] lg:aspect-video">
                  {reduce ? (
                    <div className="flex size-full items-center justify-center bg-navy px-6 text-center text-sm text-white/75">
                      Introduction video
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
                      controls
                      className="absolute inset-0 size-full object-cover object-center"
                      aria-label="Introduction video of Dr. Pradyumna R"
                    />
                  )}
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent"
                    aria-hidden
                  />
                </div>
                <p className="border-t border-white/10 bg-navy/90 px-4 py-3 text-center text-[11px] font-bold uppercase tracking-[0.14em] text-teal-bright">
                  Intro video
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
