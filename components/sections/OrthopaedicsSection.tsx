import Link from "next/link";
import { orthopaedicCards } from "@/data/expertise";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowUpRight } from "lucide-react";
import { Stagger, StaggerChild } from "@/components/animations/Reveal";

export function OrthopaedicsSection() {
  return (
    <section className="section-y bg-bg-warm">
      <Container>
        <SectionHeading
          label="Orthopaedics"
          title={
            <>
              Orthopaedic care for{" "}
              <span className="text-accent">everyday movement.</span>
            </>
          }
        />
        <Stagger className="mt-12 space-y-3">
          {orthopaedicCards.map((card) => (
            <StaggerChild key={card.title}>
              <Link
                href={card.href}
                className="group focus-ring flex items-center justify-between gap-6 rounded-[var(--radius-md)] border border-border-subtle bg-surface px-6 py-5 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-0.5 hover:border-teal/20 hover:shadow-[var(--shadow-soft)]"
              >
                <div>
                  <h3 className="text-base font-bold text-navy lg:text-lg">
                    {card.title}
                  </h3>
                  <p className="mt-1.5 text-[15px] text-muted">
                    {card.description}
                  </p>
                </div>
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border bg-bg-warm transition-colors group-hover:border-teal/30 group-hover:bg-mint">
                  <ArrowUpRight className="size-4 text-muted transition-colors group-hover:text-teal" />
                </span>
              </Link>
            </StaggerChild>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
