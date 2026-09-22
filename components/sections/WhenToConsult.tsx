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
              When is it time to see an{" "}
              <span className="text-accent">orthopaedic specialist?</span>
            </>
          }
          description="Not every ache needs specialist care. But when pain, injury or restricted movement starts affecting the way you live, work, train or play, it may be time to seek an expert assessment."
        />
        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whenToConsultCards.map((item) => (
            <StaggerChild key={item.title}>
              <div className="group flex h-full items-start gap-4 rounded-[var(--radius-md)] border border-border-subtle bg-surface px-5 py-5 shadow-[var(--shadow-card)] transition-all duration-500 ease-out hover:-translate-y-1 hover:border-teal/20 hover:shadow-[var(--shadow-soft)]">
                <span
                  className="mt-1.5 size-2 shrink-0 rounded-full bg-teal ring-4 ring-mint transition-transform duration-500 group-hover:scale-110"
                  aria-hidden
                />
                <div>
                  <p className="text-[15px] font-semibold leading-snug text-navy">
                    {item.title}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
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
