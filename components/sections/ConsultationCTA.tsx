"use client";

import Image from "next/image";
import Link from "next/link";
import { BookAppointmentLink } from "@/components/layout/BookAppointmentLink";
import { bookAppointmentUrl } from "@/lib/whatsapp";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Clock,
  MapPin,
  MessageCircle,
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

function ContactAction({
  href,
  external,
  icon: Icon,
  label,
  description,
  variant = "default",
}: {
  href: string;
  external?: boolean;
  icon: typeof Phone;
  label: string;
  description?: string;
  variant?: "default" | "primary";
}) {
  const className = cn(
    "focus-ring group flex items-center gap-3 rounded-2xl border px-4 py-3.5 transition-all duration-300",
    variant === "primary"
      ? "border-teal-bright/50 bg-teal-bright text-navy shadow-lg shadow-teal/25 hover:bg-white hover:border-white"
      : "border-white/12 bg-white/[0.06] hover:border-teal-bright/35 hover:bg-white/10"
  );

  const content = (
    <>
      <span
        className={cn(
          "flex size-11 shrink-0 items-center justify-center rounded-xl",
          variant === "primary" ? "bg-navy/15 text-navy" : "bg-teal-bright/15 text-teal-bright"
        )}
      >
        <Icon className="size-5" aria-hidden />
      </span>
      <span className="min-w-0 flex-1 text-left">
        <span
          className={cn(
            "block text-sm font-bold",
            variant === "primary" ? "text-navy" : "text-white"
          )}
        >
          {label}
        </span>
        {description && (
          <span
            className={cn(
              "mt-0.5 block text-xs leading-snug",
              variant === "primary" ? "text-navy/75" : "text-white/60 group-hover:text-white/75"
            )}
          >
            {description}
          </span>
        )}
      </span>
      <ArrowUpRight
        className={cn(
          "size-4 shrink-0 opacity-60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
          variant === "primary" ? "text-navy" : "text-teal-bright"
        )}
        aria-hidden
      />
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {content}
      </a>
    );
  }

  if (href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a href={href} className={className}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {content}
    </Link>
  );
}

export function ConsultationCTA() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-navy-deep mesh-navy" aria-labelledby="consult-cta-heading">
      <div className="absolute inset-0" aria-hidden>
        <Image
          src="/images/hero/slide-doctor.jpg"
          alt=""
          fill
          quality={90}
          sizes="100vw"
          className="object-cover object-[55%_20%] opacity-30 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/95 to-navy-deep/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_50%,rgba(45,212,191,0.16),transparent_55%)]" />
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
                <Link href="/contact">Contact &amp; locations</Link>
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
                className="pointer-events-none absolute -inset-px rounded-[28px] bg-gradient-to-br from-teal-bright/45 via-white/10 to-gold/25 opacity-90"
                aria-hidden
              />
              <div className="relative overflow-hidden rounded-[27px] border border-white/15 bg-navy/55 shadow-2xl backdrop-blur-md">
                <div className="h-1 bg-gradient-to-r from-teal-bright via-teal to-teal-bright/30" aria-hidden />

                <div className="p-6 sm:p-7">
                  <div className="flex items-center gap-4">
                    <div className="relative size-[4.5rem] shrink-0 overflow-hidden rounded-2xl ring-2 ring-teal-bright/35 ring-offset-2 ring-offset-navy/80">
                      <Image
                        src="/images/hero/slide-doctor.jpg"
                        alt=""
                        fill
                        quality={90}
                        sizes="72px"
                        className="object-cover object-[50%_15%]"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="font-heading text-lg font-bold text-white">{doctor.name}</p>
                      <p className="mt-0.5 text-sm text-white/70">{doctor.role}</p>
                      <p className="mt-1 text-xs font-semibold text-teal-bright">
                        {doctor.affiliation.name}
                      </p>
                    </div>
                  </div>

                  <a
                    href={mapsHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring mt-6 flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.05] p-4 transition-colors hover:border-teal-bright/30 hover:bg-white/[0.08]"
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-teal-bright/15 text-teal-bright">
                      <MapPin className="size-5" aria-hidden />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-semibold text-white">
                        {doctor.affiliation.name}
                      </span>
                      <span className="mt-1 block text-xs leading-relaxed text-white/65">
                        Near {doctor.address.landmark} · {doctor.city}
                      </span>
                    </span>
                    <Navigation className="mt-1 size-4 shrink-0 text-teal-bright" aria-hidden />
                  </a>

                  <div className="mt-4 rounded-2xl border border-teal-bright/30 bg-gradient-to-br from-teal-bright/15 to-teal/5 p-5">
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/55">
                      Clinic line
                    </p>
                    <a
                      href={`tel:${clinicTel}`}
                      className="focus-ring mt-2 inline-flex items-center gap-2 font-heading text-3xl font-bold tracking-tight text-teal-bright hover:text-white sm:text-[2rem]"
                      aria-label={`Call clinic — ${doctor.booking.clinicPhoneDisplay}`}
                    >
                      <Phone className="size-6 shrink-0 opacity-80" aria-hidden />
                      {doctor.booking.clinicPhoneDisplay}
                    </a>
                    <p className="mt-3 text-xs leading-relaxed text-white/55">
                      Hospital desk {doctor.booking.hospitalLine} · Manipal central{" "}
                      {doctor.booking.centralPhone}
                    </p>
                  </div>

                  <div className="mt-5 space-y-2.5">
                    <ContactAction
                      href={bookAppointmentUrl}
                      external
                      icon={MessageCircle}
                      label="Book on WhatsApp"
                      description="Send a consultation request — we reply on clinic hours"
                      variant="primary"
                    />
                    <div className="grid gap-2.5 sm:grid-cols-2">
                      <ContactAction
                        href={`tel:${clinicTel}`}
                        icon={Phone}
                        label="Call now"
                        description={doctor.booking.clinicPhoneDisplay}
                      />
                      <ContactAction
                        href={mapsHref}
                        external
                        icon={Navigation}
                        label="Directions"
                        description="Open in Google Maps"
                      />
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-white/10 pt-5 text-xs text-white/50">
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="size-3.5 text-teal-bright" aria-hidden />
                      Mon–Sat · By appointment
                    </span>
                    <span className="hidden h-3 w-px bg-white/15 sm:block" aria-hidden />
                    <span>{doctor.languages.slice(0, 3).join(" · ")} & more</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
