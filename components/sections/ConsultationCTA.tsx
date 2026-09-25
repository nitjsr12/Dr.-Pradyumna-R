"use client";

import Image from "next/image";
import Link from "next/link";
import { BookAppointmentLink } from "@/components/layout/BookAppointmentLink";
import { bookAppointmentUrl } from "@/lib/whatsapp";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Calendar,
  MapPin,
  Navigation,
  Phone,
} from "lucide-react";
import { doctor } from "@/data/doctor";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

const clinicTel = `+91${doctor.booking.clinicPhone}`;
const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(doctor.booking.mapsQuery)}`;

function QuickAction({
  href,
  external,
  icon: Icon,
  label,
  sub,
  highlight,
}: {
  href: string;
  external?: boolean;
  icon: typeof Phone;
  label: string;
  sub: string;
  highlight?: boolean;
}) {
  const className = cn(
    "focus-ring group flex flex-col gap-2 rounded-2xl border p-4 transition-all duration-300",
    highlight
      ? "border-teal-bright/40 bg-teal-bright/15 hover:border-teal-bright/60 hover:bg-teal-bright/20"
      : "border-white/12 bg-white/[0.07] hover:border-white/25 hover:bg-white/10"
  );

  const inner = (
    <>
      <span
        className={cn(
          "flex size-10 items-center justify-center rounded-xl",
          highlight ? "bg-teal-bright text-navy" : "bg-white/10 text-teal-bright"
        )}
      >
        <Icon className="size-5" aria-hidden />
      </span>
      <span>
        <span className="block text-sm font-bold text-white">{label}</span>
        <span className="mt-0.5 block text-xs leading-snug text-white/65 group-hover:text-white/80">
          {sub}
        </span>
      </span>
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {inner}
    </Link>
  );
}

export function ConsultationCTA() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-navy-deep" aria-labelledby="consult-cta-heading">
      <div className="absolute inset-0" aria-hidden>
        <Image
          src="/images/hero/slide-doctor.jpg"
          alt=""
          fill
          quality={90}
          sizes="100vw"
          className="object-cover object-[55%_20%] opacity-35 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/95 to-navy/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_50%,rgba(45,212,191,0.18),transparent_55%)]" />
      </div>

      <div
        className="pointer-events-none absolute -left-32 top-0 size-[28rem] rounded-full bg-teal-bright/20 blur-3xl"
        style={reduce ? undefined : { animation: "hero-drift 20s ease-in-out infinite" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 size-96 rounded-full bg-gold/15 blur-3xl"
        style={reduce ? undefined : { animation: "hero-drift-alt 22s ease-in-out infinite" }}
        aria-hidden
      />
      <div className="pattern-dots-dark pointer-events-none absolute inset-0 opacity-20" aria-hidden />

      <Container className="relative py-12 md:py-16 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14 xl:gap-20">
          <motion.div
            className="lg:col-span-6 xl:col-span-7"
            initial={reduce ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease }}
          >
            <p className="label-caps-on-dark">Your recovery starts here</p>
            <h2
              id="consult-cta-heading"
              className="title-section mt-5 max-w-xl text-balance !text-white"
            >
              Your first step{" "}
              <span className="text-teal-bright">back to movement.</span>
            </h2>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/80 lg:text-base">
              Whether it&apos;s joint pain that won&apos;t settle, a sports injury holding you
              back, or a surgery decision you&apos;re unsure about, one honest conversation can
              change everything. Meet Dr. Pradyumna R, orthopedic doctor on Kanakapura Road, for
              a clear diagnosis and a treatment plan built around your life.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="teal" className="shadow-lg shadow-teal/30">
                <BookAppointmentLink>
                  Book a Consultation
                  <ArrowUpRight className="opacity-90" />
                </BookAppointmentLink>
              </Button>
              <Button asChild size="lg" variant="outlineLight">
                <a href={`tel:${clinicTel}`} aria-label={`Talk to the clinic — ${doctor.booking.clinicPhoneDisplay}`}>
                  <Phone className="size-4" aria-hidden />
                  Talk to the Clinic
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-6 xl:col-span-5"
            initial={reduce ? false : { opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, delay: 0.08, ease }}
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div
                className="absolute -inset-1 rounded-[28px] bg-gradient-to-br from-teal-bright/50 via-white/10 to-gold/30 opacity-80 blur-sm"
                aria-hidden
              />
              <div className="relative overflow-hidden rounded-[26px] border border-white/15 bg-navy/40 shadow-2xl backdrop-blur-sm">
                <div className="relative aspect-[4/5] max-h-[420px] w-full sm:max-h-none">
                  <Image
                    src="/images/hero/slide-doctor.jpg"
                    alt=""
                    fill
                    quality={90}
                    sizes="(max-width: 1024px) 400px, 480px"
                    className="object-cover object-[50%_15%]"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent"
                    aria-hidden
                  />
                  <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6">
                    <div className="rounded-2xl border border-white/15 bg-navy/75 p-4 backdrop-blur-md sm:p-5">
                      <div className="flex items-start gap-3">
                        <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-teal-bright/20 text-teal-bright">
                          <MapPin className="size-5" aria-hidden />
                        </span>
                        <div className="min-w-0">
                          <p className="text-sm font-bold text-white">{doctor.affiliation.name}</p>
                          <p className="mt-1 text-sm text-white/75">{doctor.city}</p>
                          <p className="mt-1 text-xs font-medium text-teal-bright">
                            Near {doctor.address.landmark}
                          </p>
                        </div>
                      </div>
                      <div className="mt-4 border-t border-white/10 pt-4">
                        <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/50">
                          Clinic line
                        </p>
                        <a
                          href={`tel:${clinicTel}`}
                          className="focus-ring mt-1 inline-flex items-baseline gap-2 text-2xl font-bold tracking-tight text-teal-bright hover:text-white"
                        >
                          {doctor.booking.clinicPhoneDisplay}
                        </a>
                        <p className="mt-2 text-xs leading-relaxed text-white/55">
                          Hospital desk {doctor.booking.hospitalLine} · Manipal central{" "}
                          {doctor.booking.centralPhone}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <QuickAction
                href={`tel:${clinicTel}`}
                icon={Phone}
                label="Call now"
                sub={doctor.booking.clinicPhoneDisplay}
                highlight
              />
              <QuickAction
                href={bookAppointmentUrl}
                external
                icon={Calendar}
                label="Book on WhatsApp"
                sub="Consultation request"
              />
              <QuickAction
                href={mapsHref}
                external
                icon={Navigation}
                label="Directions"
                sub="Open in Maps"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
