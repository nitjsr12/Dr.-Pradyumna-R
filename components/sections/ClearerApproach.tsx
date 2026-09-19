import { doctor } from "@/data/doctor";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerChild } from "@/components/animations/Reveal";

export function ClearerApproach() {
  return (
    <section className="section-y bg-surface">
      <Container>
        <SectionHeading
          label="Principles"
          title={
            <>
              A clearer approach to{" "}
              <span className="text-accent">orthopaedic care</span>
            </>
          }
        />
        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {doctor.carePrinciples.map((p) => (
            <StaggerChild key={p.number}>
              <article className="h-full rounded-[var(--radius-md)] border border-border-subtle bg-bg-warm p-6 transition-shadow hover:shadow-[var(--shadow-card)]">
                <p className="text-sm font-bold tabular-nums text-teal">
                  {p.number}
                </p>
                <h3 className="mt-3 font-bold text-navy">{p.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">
                  {p.description}
                </p>
              </article>
            </StaggerChild>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
