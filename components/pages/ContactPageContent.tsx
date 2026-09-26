"use client";

import Link from "next/link";
import {
  Building2,
  Calendar,
  Clock,
  ExternalLink,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { aboutLocations } from "@/data/about-locations";
import { ContactForm } from "@/components/contact/ContactForm";
import { BookAppointmentLink } from "@/components/layout/BookAppointmentLink";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { FadeIn, Stagger, StaggerChild } from "@/components/animations/Reveal";
import { doctor } from "@/data/doctor";
import { bookAppointmentUrl } from "@/lib/whatsapp";

const clinicTel = `tel:+91${doctor.booking.clinicPhone}`;

const quickActions = [
  {
    icon: Phone,
    title: "Call the clinic",
    highlight: doctor.booking.clinicPhoneDisplay,
    href: clinicTel,
    sub: `Hospital desk ${doctor.booking.hospitalLine}`,
  },
  {
    icon: MessageCircle,
    title: "WhatsApp booking",
    highlight: "Open chat",
    href: bookAppointmentUrl,
    sub: "Fastest way to request a slot",
    external: true,
  },
  {
    icon: Calendar,
    title: "Manipal profile",
    highlight: "Book online",
    href: doctor.booking.manipalProfileUrl,
    sub: "Official hospital doctor page",
    external: true,
  },
] as const;

export function ContactPageContent() {
  return (
    <>
      <section className="relative overflow-hidden bg-bg-warm py-10 md:py-14 lg:py-16">
        <div className="pattern-grid pointer-events-none absolute inset-0 opacity-35" aria-hidden />
        <Container className="relative">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <FadeIn>
                <p className="label-caps">Get in touch</p>
                <h2 className="title-section mt-4 text-balance">
                  We&apos;re here to help you{" "}
                  <span className="text-accent">take the next step.</span>
                </h2>
                <p className="text-body mt-4 max-w-md leading-relaxed">
                  Call, WhatsApp, or send an enquiry — the team will guide you to booking,
                  directions, or the right type of consultation.
                </p>
              </FadeIn>

              <Stagger className="mt-8 space-y-3">
                {quickActions.map((item) => {
                  const Icon = item.icon;
                  return (
                    <StaggerChild key={item.title}>
                      <Link
                        href={item.href}
                        target={"external" in item && item.external ? "_blank" : undefined}
                        rel={
                          "external" in item && item.external ? "noopener noreferrer" : undefined
                        }
                        className="focus-ring group flex items-center gap-4 rounded-2xl border border-border-subtle/80 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-teal/30 hover:shadow-[var(--shadow-soft)]"
                      >
                        <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-mint text-teal transition-colors group-hover:bg-teal group-hover:text-white">
                          <Icon className="size-5" strokeWidth={1.75} />
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="text-xs font-bold uppercase tracking-[0.12em] text-teal">
                            {item.title}
                          </p>
                          <p className="font-heading text-lg font-bold text-navy group-hover:text-teal">
                            {item.highlight}
                          </p>
                          <p className="mt-0.5 text-sm text-muted">{item.sub}</p>
                        </div>
                        {"external" in item && item.external && (
                          <ExternalLink
                            className="size-4 shrink-0 text-muted opacity-0 transition-opacity group-hover:opacity-100"
                            aria-hidden
                          />
                        )}
                      </Link>
                    </StaggerChild>
                  );
                })}
              </Stagger>

              <FadeIn delay={0.12} className="mt-8 rounded-2xl border border-teal/15 bg-mint/30 p-6">
                <div className="flex gap-3">
                  <Building2 className="size-5 shrink-0 text-teal" aria-hidden />
                  <div>
                    <p className="font-semibold text-navy">{doctor.affiliation.name}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {doctor.address.hospital}
                    </p>
                    <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-muted">
                      <MapPin className="size-3.5 text-teal" aria-hidden />
                      Landmark: {doctor.address.landmark}
                    </p>
                  </div>
                </div>
                <p className="mt-4 inline-flex items-center gap-2 text-sm text-muted">
                  <Clock className="size-4 text-teal" aria-hidden />
                  Appointments typically Monday–Saturday — confirm slots via phone or WhatsApp.
                </p>
              </FadeIn>
            </div>

            <FadeIn delay={0.08} className="lg:col-span-7">
              <ContactForm />
            </FadeIn>
          </div>
        </Container>
      </section>

      <section className="border-t border-border-subtle/80 bg-white py-10 md:py-14">
        <Container>
          <FadeIn>
            <p className="label-caps">Clinic locations</p>
            <h2 className="title-section mt-3 text-balance">
              Visit us in <span className="text-accent">Bengaluru</span>
            </h2>
          </FadeIn>
          <Stagger className="mt-8 grid gap-6 md:grid-cols-3">
            {aboutLocations.map((loc) => (
              <StaggerChild key={loc.id}>
                <div className="flex h-full flex-col rounded-[24px] border border-border-subtle/80 bg-bg-warm/50 p-6 shadow-sm">
                  <h3 className="font-heading text-base font-bold leading-snug text-navy">
                    {loc.name}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{loc.address}</p>
                  <Button asChild variant="secondary" size="sm" className="mt-5 w-full">
                    <Link href={loc.mapsUrl} target="_blank" rel="noopener noreferrer">
                      <MapPin className="size-4" aria-hidden />
                      Open in Maps
                    </Link>
                  </Button>
                </div>
              </StaggerChild>
            ))}
          </Stagger>
          <FadeIn delay={0.1} className="mt-10 text-center">
            <BookAppointmentLink className="focus-ring inline-flex items-center gap-2 text-sm font-semibold text-teal hover:text-navy">
              <MessageCircle className="size-4" />
              Prefer WhatsApp? Book a consultation →
            </BookAppointmentLink>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
