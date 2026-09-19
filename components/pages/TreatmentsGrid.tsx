"use client";

import { Stethoscope } from "lucide-react";
import { doctor } from "@/data/doctor";
import { Container } from "@/components/ui/Container";
import { Stagger, StaggerChild } from "@/components/animations/Reveal";

export function TreatmentsGrid() {
  return (
    <Container className="section-y pattern-grid relative">
      <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {doctor.fieldOfExpertise.map((item) => (
          <StaggerChild key={item}>
            <div className="flex gap-3 rounded-[var(--radius-md)] border border-border-subtle bg-surface p-4 shadow-[var(--shadow-card)] transition-all hover:-translate-y-0.5 hover:border-teal/15">
              <Stethoscope
                className="mt-0.5 size-4 shrink-0 text-teal"
                aria-hidden
              />
              <span className="text-[15px] font-medium leading-snug text-navy">
                {item}
              </span>
            </div>
          </StaggerChild>
        ))}
      </Stagger>
      <p className="mt-10 text-sm text-muted-light">
        Source: official hospital profile. Not a promise of treatment availability.
      </p>
    </Container>
  );
}
