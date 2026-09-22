"use client";

import {
  BookOpen,
  Globe2,
  GraduationCap,
  Languages,
  ShieldCheck,
} from "lucide-react";
import { doctor } from "@/data/doctor";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn, Stagger, StaggerChild } from "@/components/animations/Reveal";

const blocks = [
  {
    id: "qualifications",
    title: "Qualifications",
    icon: GraduationCap,
    items: doctor.qualifications,
  },
  {
    id: "fellowships",
    title: "Fellowships & Advanced Training",
    lead: "Specialised training. International exposure. Focused expertise.",
    icon: Globe2,
    items: doctor.fellowships,
  },
  {
    id: "memberships",
    title: "Professional Memberships",
    lead: "Connected to the wider orthopaedic community.",
    icon: ShieldCheck,
    items: doctor.memberships,
  },
  {
    id: "research",
    title: "Research & Publications",
    lead: "A practice shaped by clinical learning and research.",
    icon: BookOpen,
    items: doctor.publicationsSummary,
  },
  {
    id: "languages",
    title: "Languages",
    lead: "Clear communication. Personalised care.",
    icon: Languages,
    items: doctor.languages,
  },
] as const;

export function AchievementsSection() {
  return (
    <section className="section-y relative overflow-hidden bg-bg pattern-grid">
      <Container>
        <FadeIn>
          <SectionHeading
            label="Credentials"
            title={
              <>
                Expertise backed by{" "}
                <span className="text-accent">training & experience.</span>
              </>
            }
            description="A closer look at the qualifications, specialised fellowships, professional memberships and research that shape Dr. Pradyumna R’s approach to orthopaedic, shoulder and sports medicine care."
          />
        </FadeIn>

        <Stagger className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {blocks.map((block) => {
            const Icon = block.icon;
            return (
              <StaggerChild
                key={block.id}
                className={block.id === "research" ? "md:col-span-2 xl:col-span-1" : ""}
              >
                <article className="group h-full rounded-[var(--radius-lg)] border border-border-subtle bg-surface p-6 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-teal/15 hover:shadow-[var(--shadow-soft)]">
                  <div className="flex items-center gap-3">
                    <span className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-mint to-surface text-teal ring-1 ring-teal/10 transition-transform group-hover:scale-105">
                      <Icon className="size-5" strokeWidth={1.75} aria-hidden />
                    </span>
                    <h3 className="text-lg font-bold text-navy">{block.title}</h3>
                  </div>
                  {"lead" in block && (
                    <p className="mt-4 text-sm font-medium text-navy/80">
                      {block.lead}
                    </p>
                  )}
                  <ul className="mt-5 space-y-2.5">
                    {block.items.map((line) => (
                      <li
                        key={line}
                        className="flex gap-2.5 text-[15px] leading-snug text-muted"
                      >
                        <span
                          className="mt-2 size-1.5 shrink-0 rounded-full bg-teal"
                          aria-hidden
                        />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </StaggerChild>
            );
          })}
        </Stagger>

        <FadeIn className="mt-10" delay={0.15}>
          <p className="flex items-start gap-2 text-xs leading-relaxed text-muted-light">
            <ShieldCheck className="mt-0.5 size-4 shrink-0 text-teal" aria-hidden />
            {doctor.experienceNote} Source: official Manipal Hospitals doctor
            profile.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
