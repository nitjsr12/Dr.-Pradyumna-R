"use client";

import Link from "next/link";
import { BookAppointmentLink } from "@/components/layout/BookAppointmentLink";
import {
  Building2,
  Calendar,
  MapPin,
  Phone,
  ExternalLink,
} from "lucide-react";
import { doctor } from "@/data/doctor";
import { ContactForm } from "@/components/contact/ContactForm";
import { Container } from "@/components/ui/Container";
import { FadeIn, Stagger, StaggerChild } from "@/components/animations/Reveal";

const clinicTel = `+91${doctor.booking.clinicPhone}`;

const info = [
  {
    icon: Phone,
    title: "Clinic line",
    body: (
      <>
        <a
          href={`tel:${clinicTel}`}
          className="text-lg font-bold text-navy hover:text-teal"
        >
          {doctor.booking.clinicPhoneDisplay}
        </a>
        <span className="mt-2 block text-sm text-muted-light">
          Hospital desk {doctor.booking.hospitalLine} · Central{" "}
          <a
            href={`tel:${doctor.booking.centralPhone.replace(/\s/g, "")}`}
            className="font-semibold text-teal hover:underline"
          >
            {doctor.booking.centralPhone}
          </a>
        </span>
      </>
    ),
  },
  {
    icon: Calendar,
    title: "Consultation",
    body: (
      <>
        Book via this site, the official Manipal Hospitals profile, or call the clinic line
        above.
      </>
    ),
  },
  {
    icon: MapPin,
    title: "Location",
    body: (
      <>
        {doctor.address.hospital}
        <span className="mt-2 block text-sm text-muted-light">
          Landmark: {doctor.address.landmark}
        </span>
      </>
    ),
  },
  {
    icon: Building2,
    title: "Affiliation",
    body: doctor.affiliation.name,
  },
] as const;

export function ContactPageContent() {
  return (
    <Container className="section-y grid gap-12 lg:grid-cols-2 lg:gap-16">
      <Stagger className="space-y-4">
        {info.map((item) => {
          const Icon = item.icon;
          return (
            <StaggerChild key={item.title}>
              <div className="flex gap-4 rounded-[var(--radius-md)] border border-border-subtle bg-surface p-5 shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-soft)]">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-mint text-teal">
                  <Icon className="size-5" strokeWidth={1.75} />
                </span>
                <div>
                  <h2 className="font-bold text-navy">{item.title}</h2>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">
                    {item.body}
                  </p>
                </div>
              </div>
            </StaggerChild>
          );
        })}
        <FadeIn delay={0.2}>
          <Link
            href={doctor.booking.manipalProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex items-center gap-2 text-sm font-semibold text-teal"
          >
            Official hospital profile
            <ExternalLink className="size-4" />
          </Link>
          <BookAppointmentLink className="focus-ring mt-4 flex items-center gap-2 text-sm font-semibold text-navy hover:text-teal">
            <Phone className="size-4" />
            Book appointment on WhatsApp →
          </BookAppointmentLink>
        </FadeIn>
      </Stagger>
      <FadeIn delay={0.1}>
        <ContactForm />
      </FadeIn>
    </Container>
  );
}
