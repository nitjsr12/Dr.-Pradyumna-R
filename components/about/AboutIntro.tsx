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
import { cn } from "@/lib/utils";

const INTRO_VIDEO = "/videos/hero-musculoskeletal.mp4";
const ease = [0.22, 1, 0.36, 1] as const;

type AboutIntroProps = {
  /** Rendered inside {@link AboutOpening} — no separate banner or bottom border. */
  variant?: "default" | "opening";
};

export function AboutIntro({ variant = "default" }: AboutIntroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduce = useReducedMotion();
  const isOpening = variant === "opening";
  const Root = isOpening ? "div" : "section";

  useEffect(() => {
    const el = videoRef.current;
    if (!el || reduce) return;
    el.muted = true;
    const pending = el.play();
    if (pending) pending.catch(() => undefined);
  }, [reduce]);

  return (
    <Root
      className={cn(
        "hero-banner relative overflow-hidden pt-[4.75rem] lg:pt-[5.5rem]",
        !isOpening && "border-b border-border-subtle/80"
      )}
    >
      {!isOpening && <PageBannerBackground />}

      <Container className={cn("relative", isOpening ? "pb-8 md:pb-10" : "py-10 md:py-14 lg:py-16")}>
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14 xl:gap-16">
          <motion.div
            className="lg:col-span-6"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease }}
          >
            <p className="label-caps-on-dark">About</p>
            <h1 className="title-page mt-5 text-balance">
              <span className="text-accent">Meet</span> Dr. Pradyumna R
            </h1>
            <p className="text-body mt-5 max-w-xl font-medium md:text-[17px]">{aboutHeroSubline}</p>
            <p className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-white/80">
              <MapPin className="size-4 shrink-0 text-teal-bright" aria-hidden />
              Kanakapura Road &amp; BTM Layout — {doctor.city}
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
            className="lg:col-span-6"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.06, ease }}
          >
            <div className="relative mx-auto max-w-lg lg:max-w-none lg:pl-4">
              <div
                className="pointer-events-none absolute -inset-px rounded-[23px] bg-gradient-to-br from-teal-bright/35 via-teal/10 to-transparent opacity-90"
                aria-hidden
              />
              <div className="relative overflow-hidden rounded-[22px] border border-white/12 bg-black/45 shadow-[0_24px_60px_rgba(0,0,0,0.5)]">
                <div className="relative aspect-video w-full">
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
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/55 via-transparent to-transparent"
                    aria-hidden
                  />
                  <span className="pointer-events-none absolute bottom-4 left-4 rounded-full border border-white/15 bg-navy/75 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-teal-bright backdrop-blur-sm">
                    Intro video
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Root>
  );
}
