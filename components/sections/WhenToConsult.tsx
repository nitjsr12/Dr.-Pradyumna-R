import { whenToConsultCards } from "@/data/expertise";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerChild } from "@/components/animations/Reveal";

export function WhenToConsult() {
  return (
    <section className="section-y surface-muted">
      <Container>
        <SectionHeading
          label="Guidance"
          title={
            <>
              When should you seek{" "}
              <span className="text-accent">specialist advice?</span>
            </>
          }
        />
        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whenToConsultCards.map((item) => (
            <StaggerChild key={item}>
              <div className="group flex h-full items-start gap-4 rounded-[var(--radius-md)] border border-border-subtle bg-surface px-5 py-5 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-0.5 hover:border-teal/20 hover:shadow-[var(--shadow-soft)]">
                <span
                  className="mt-0.5 size-2 shrink-0 rounded-full bg-teal ring-4 ring-mint transition-transform group-hover:scale-110"
                  aria-hidden
                />
                <p className="text-[15px] font-medium leading-snug text-navy">
                  {item}
                </p>
              </div>
            </StaggerChild>
          ))}
        </Stagger>
        <p className="mt-10 max-w-2xl text-sm leading-relaxed text-muted-light">
          This information is for general education and does not replace an
          in-person medical assessment.
        </p>
      </Container>
    </section>
  );
}
