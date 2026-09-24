"use client";

import {
  Award,
  BookOpen,
  Building2,
  GraduationCap,
  Languages,
  Stethoscope,
} from "lucide-react";
import { doctor } from "@/data/doctor";
import { credentialHighlights } from "@/data/journey";
import { Container } from "@/components/ui/Container";
import { FadeIn, Stagger, StaggerChild } from "@/components/animations/Reveal";
import { cn } from "@/lib/utils";

const profileBlocks = [
  {
    icon: GraduationCap,
    title: "Education & fellowships",
    tone: "from-teal/15 to-mint/40",
    content: (
      <ul className="list-none space-y-2.5">
        {doctor.qualifications.map((q) => (
          <li key={q} className="flex gap-2 text-sm leading-relaxed text-navy/90">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-teal" />
            {q}
          </li>
        ))}
      </ul>
    ),
  },
  {
    icon: Stethoscope,
    title: "Clinical focus",
    tone: "from-gold/20 to-mint/30",
    content: (
      <ul className="grid gap-2 sm:grid-cols-2">
        {doctor.fieldOfExpertise.map((f) => (
          <li
            key={f}
            className="rounded-xl border border-navy/8 bg-white/80 px-3 py-2.5 text-sm font-medium text-navy shadow-sm"
          >
            {f}
          </li>
        ))}
      </ul>
    ),
  },
  {
    icon: Award,
    title: "Professional memberships",
    tone: "from-teal-bright/15 to-white",
    content: (
      <p className="text-sm leading-relaxed text-navy/90">
        {doctor.memberships.join(" · ")}
      </p>
    ),
  },
  {
    icon: Building2,
    title: "Hospital affiliation",
    tone: "from-navy/5 to-mint/35",
    content: (
      <>
        <p className="font-semibold text-navy">{doctor.affiliation.name}</p>
        <p className="mt-2 text-sm leading-relaxed text-muted">{doctor.address.hospital}</p>
        <p className="mt-3 text-xs text-muted-light">{doctor.affiliation.note}</p>
      </>
    ),
  },
  {
    icon: Languages,
    title: "Languages",
    tone: "from-mint to-bg-warm",
    content: <p className="text-sm font-medium text-navy">{doctor.languages.join(" · ")}</p>,
  },
  {
    icon: BookOpen,
    title: "Publications & research",
    tone: "from-white to-teal/10",
    content: (
      <ul className="list-none space-y-2">
        {doctor.publicationsSummary.map((p) => (
          <li key={p} className="flex gap-2 text-sm leading-relaxed text-navy/90">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-teal" />
            {p}
          </li>
        ))}
      </ul>
    ),
  },
] as const;

function figureOf(value: string) {
  const match = value.match(/^[\d,.]+K?\+/i);
  return match ? match[0] : value;
}

export function AboutBriefProfile() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-bg-warm via-mint/40 to-white py-16 md:py-20 lg:py-24">
      <div
        className="pointer-events-none absolute -left-16 top-1/4 size-80 rounded-full bg-teal/10 blur-3xl"
        aria-hidden
      />

      <Container className="relative">
        <FadeIn>
          <p className="label-caps">Profile overview</p>
          <h2 className="title-section mt-5 max-w-2xl text-balance">
            A brief profile of{" "}
            <span className="text-accent">Dr. Pradyumna R.</span>
          </h2>
          <p className="text-body mt-4 max-w-3xl">{doctor.overview}</p>
          <p className="text-body mt-4 max-w-3xl">{doctor.approach}</p>
          <p className="mt-3 text-sm text-muted-light">{doctor.experienceNote}</p>
        </FadeIn>

        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {credentialHighlights.map((stat, i) => (
            <StaggerChild key={stat.id}>
              <div
                className={cn(
                  "rounded-[22px] border border-navy/8 bg-gradient-to-br p-6 shadow-[var(--shadow-card)]",
                  i % 3 === 0 && "from-navy via-[#12324d] to-teal/80 text-white",
                  i % 3 === 1 && "from-white via-mint/30 to-teal/10",
                  i % 3 === 2 && "from-gold/15 via-white to-mint/25"
                )}
              >
                <p
                  className={cn(
                    "font-heading text-4xl font-bold tracking-tight",
                    i % 3 === 0 ? "text-white" : "text-navy"
                  )}
                >
                  {figureOf(stat.value)}
                </p>
                <p
                  className={cn(
                    "mt-2 text-sm font-semibold",
                    i % 3 === 0 ? "text-white/90" : "text-navy"
                  )}
                >
                  {stat.label}
                </p>
              </div>
            </StaggerChild>
          ))}
        </Stagger>

        <Stagger className="mt-14 grid gap-5 md:grid-cols-2">
          {profileBlocks.map((block) => {
            const Icon = block.icon;
            return (
              <StaggerChild key={block.title}>
                <article
                  className={cn(
                    "h-full rounded-[24px] border border-navy/8 bg-gradient-to-br p-6 shadow-[var(--shadow-soft)] md:p-7",
                    block.tone
                  )}
                >
                  <div className="flex items-start gap-3">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/90 text-teal shadow-sm">
                      <Icon className="size-5" strokeWidth={1.75} aria-hidden />
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-heading text-lg font-bold text-navy">{block.title}</h3>
                      <div className="mt-4">{block.content}</div>
                    </div>
                  </div>
                </article>
              </StaggerChild>
            );
          })}
        </Stagger>
      </Container>
    </section>
  );
}
