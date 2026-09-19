"use client";

import { credentialHighlights } from "@/data/journey";
import { Container } from "@/components/ui/Container";
import { IconBadge, type IconBadgeName } from "@/components/ui/IconBadge";
import { FadeIn, Stagger, StaggerChild } from "@/components/animations/Reveal";

export function CredentialsBar() {
  return (
    <section
      className="relative overflow-hidden border-y border-border-subtle bg-gradient-to-b from-mint/40 via-surface to-bg-warm py-10 pattern-dots"
      aria-label="Professional credentials summary"
    >
      <Container>
        <FadeIn>
          <p className="label-caps mb-8 text-center md:mb-10">
            Verified professional profile
          </p>
        </FadeIn>
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {credentialHighlights.map((item) => (
            <StaggerChild key={item.id}>
              <div className="group flex gap-4 rounded-[var(--radius-md)] border border-border-subtle bg-surface/90 p-5 shadow-[var(--shadow-card)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal/20 hover:shadow-[var(--shadow-soft)]">
                <IconBadge
                  name={item.icon as IconBadgeName}
                  className="transition-transform duration-300 group-hover:scale-105"
                />
                <div className="min-w-0">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-muted-light">
                    {item.label}
                  </p>
                  <p className="mt-1 font-heading text-xl font-bold text-navy">
                    {item.value}
                  </p>
                  <p className="mt-1 text-xs leading-snug text-muted">
                    {item.note}
                  </p>
                </div>
              </div>
            </StaggerChild>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
