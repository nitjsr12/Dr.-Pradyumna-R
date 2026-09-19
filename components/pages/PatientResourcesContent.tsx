"use client";

import { ResourceCard } from "@/components/cards/ResourceCard";
import { PageBlock } from "@/components/ui/PageBlock";
import { Container } from "@/components/ui/Container";
import { resourceSections, disclaimer } from "@/data/resources";
import { Stagger, StaggerChild } from "@/components/animations/Reveal";
import {
  Calendar,
  FileText,
  HelpCircle,
  HeartPulse,
  Shield,
  Stethoscope,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const icons: Record<string, LucideIcon> = {
  "before-appointment": Calendar,
  "what-to-bring": FileText,
  questions: HelpCircle,
  "understanding-diagnosis": Stethoscope,
  recovery: HeartPulse,
  prevention: Shield,
};

export function PatientResourcesContent() {
  return (
    <Container className="section-y mesh-light relative">
      <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {resourceSections.map((s) => (
          <StaggerChild key={s.id}>
            <ResourceCard resource={s} href={`/patient-resources#${s.id}`} />
          </StaggerChild>
        ))}
      </Stagger>
      <Stagger className="mt-16 space-y-6">
        {resourceSections.map((s) => {
          const Icon = icons[s.id] ?? FileText;
          return (
            <StaggerChild key={s.id}>
              <PageBlock icon={Icon} title={s.title} id={s.id}>
                <p>{s.body}</p>
              </PageBlock>
            </StaggerChild>
          );
        })}
      </Stagger>
      <p className="mt-12 rounded-lg border border-border-subtle bg-mint/30 p-4 text-sm text-muted">
        {disclaimer}
      </p>
    </Container>
  );
}
