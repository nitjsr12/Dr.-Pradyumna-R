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
              When movement changes,{" "}
              <span className="text-accent">care should move with you.</span>
            </>
          }
          description="Orthopaedic care is about more than treating pain. It begins with understanding what is limiting your movement, how it affects your everyday life, and what can help you move forward."
        />
        <p className="text-secondary mt-4 max-w-2xl">
          From joint and musculoskeletal concerns to sports injuries and
          recovery, care is shaped around your condition, clinical assessment
          and individual goals.
        </p>
        <Stagger className="mt-12 space-y-3">
          {orthopaedicCards.map((card) => (
            <StaggerChild key={card.title}>
              <Link
                href={card.href}
                className="group focus-ring flex items-center justify-between gap-6 rounded-[var(--radius-md)] border border-border-subtle bg-surface px-6 py-5 shadow-[var(--shadow-card)] transition-all duration-500 ease-out hover:-translate-y-1 hover:border-teal/20 hover:shadow-[var(--shadow-soft)]"
              >
                <div>
                  <p className="text-[11px] font-bold tracking-[0.14em] text-teal">
                    {card.number}
                  </p>
                  <h3 className="mt-1 text-base font-bold text-navy lg:text-lg">
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
