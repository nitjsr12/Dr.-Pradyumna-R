"use client";

import Link from "next/link";
import { BookAppointmentLink } from "@/components/layout/BookAppointmentLink";
import {
  Activity,
  ClipboardCheck,
  HeartPulse,
  Shield,
  TrendingUp,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { Stagger, StaggerChild } from "@/components/animations/Reveal";

const sections: { title: string; body: string; icon: LucideIcon }[] = [
  {
    title: "What is Sports Medicine?",
    body: "A specialty focused on injuries and conditions related to sport and physical activity, and on returning to movement safely.",
    icon: Activity,
  },
  {
    title: "Who May Benefit?",
    body: "Recreational and competitive athletes—and anyone whose symptoms are linked to activity—after appropriate assessment.",
    icon: Users,
  },
  {
    title: "Sports Injury Assessment",
    body: "Clinical evaluation to clarify diagnosis and discuss next steps. No outcome guarantees.",
    icon: ClipboardCheck,
  },
  {
    title: "Recovery Planning",
    body: "Structured follow-up that may support recovery; timelines vary individually.",
    icon: HeartPulse,
  },
  {
    title: "Return to Activity",
    body: "Gradual progression when clinically appropriate.",
    icon: TrendingUp,
  },
  {
    title: "Prevention & Education",
    body: "General education on preparation and injury awareness.",
    icon: Shield,
  },
];

export function SportsMedicineSections() {
  return (
    <Container className="section-y pattern-grid relative">
      <Stagger className="grid gap-6 md:grid-cols-2">
        {sections.map((s) => {
          const Icon = s.icon;
          return (
            <StaggerChild key={s.title}>
              <article className="h-full rounded-[var(--radius-lg)] border border-border-subtle bg-surface p-6 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]">
                <span className="flex size-11 items-center justify-center rounded-xl bg-mint text-teal">
                  <Icon className="size-5" strokeWidth={1.75} />
                </span>
                <h2 className="mt-5 text-lg font-bold text-navy">{s.title}</h2>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">
                  {s.body}
                </p>
              </article>
            </StaggerChild>
          );
        })}
      </Stagger>
      <Button asChild size="lg" className="mt-12">
        <BookAppointmentLink>Book Consultation</BookAppointmentLink>
      </Button>
    </Container>
  );
}
