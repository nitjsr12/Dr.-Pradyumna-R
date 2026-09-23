"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import { doctor } from "@/data/doctor";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";

const ease = [0.22, 1, 0.36, 1] as const;

export function ConsultationCTA() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-navy">
      <motion.div
        className="absolute inset-0"
        initial={false}
        animate={reduce ? undefined : { scale: [1, 1.06, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      >
        <Image
          src="/images/hero/slide-movement.jpg"
          alt=""
          fill
          quality={90}
          sizes="100vw"
          className="object-cover object-[72%_center]"
        />
      </motion.div>
      <div
        className="absolute inset-0 bg-gradient-to-r from-navy via-navy/92 to-navy/55 lg:from-navy lg:via-navy/88 lg:to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-24 top-1/4 size-96 rounded-full bg-teal-bright/25 blur-3xl"
        style={reduce ? undefined : { animation: "hero-drift 16s ease-in-out infinite" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-0 size-80 rounded-full bg-gold/20 blur-3xl"
        style={reduce ? undefined : { animation: "hero-drift-alt 18s ease-in-out infinite" }}
        aria-hidden
      />
      <div className="pattern-dots-dark pointer-events-none absolute inset-0 opacity-25" aria-hidden />

      <Container className="relative py-16 md:py-20 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <motion.div
            className="lg:col-span-7"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease }}
          >
            <p className="label-caps-on-dark">Your health, your questions</p>
            <h2 className="title-section mt-5 max-w-xl text-balance !text-white">
              Start with a <span className="text-teal-bright">conversation.</span>
            </h2>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white lg:text-base">
              Whether you’re experiencing persistent joint pain, recovering from a sports injury or
              seeking clarity about an orthopaedic condition, a consultation is an opportunity to
              understand what’s happening and discuss the appropriate next steps.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="teal" className="shadow-lg shadow-teal/25">
                <Link href="/book-appointment">
                  Book a Consultation
                  <ArrowUpRight className="opacity-90" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outlineLight">
                <Link href="/contact">Contact the Clinic</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="grid gap-4 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1"
            initial={reduce ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, delay: 0.1, ease }}
          >
            <div className="rounded-[24px] border border-white/15 bg-white/10 p-5 backdrop-blur-md">
              <span className="flex size-10 items-center justify-center rounded-xl bg-teal-bright/20 text-teal-bright">
                <MapPin className="size-5" aria-hidden />
              </span>
              <p className="mt-4 text-sm font-bold text-white">{doctor.affiliation.name}</p>
              <p className="mt-2 text-sm leading-relaxed text-white/75">{doctor.city}</p>
              <p className="mt-1 text-xs text-teal-bright">{doctor.address.landmark}</p>
            </div>
            <div className="rounded-[24px] border border-white/15 bg-white/10 p-5 backdrop-blur-md">
              <span className="flex size-10 items-center justify-center rounded-xl bg-teal-bright/20 text-teal-bright">
                <Phone className="size-5" aria-hidden />
              </span>
              <p className="mt-4 text-sm font-bold text-white">Clinic line</p>
              <a
                href={`tel:${doctor.booking.hospitalLine.replace(/\s/g, "")}`}
                className="focus-ring mt-2 inline-block text-lg font-semibold text-teal-bright hover:text-white"
              >
                {doctor.booking.hospitalLine}
              </a>
              <p className="mt-3 text-xs leading-relaxed text-white/65">
                Manipal Hospitals central: {doctor.booking.centralPhone}
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
