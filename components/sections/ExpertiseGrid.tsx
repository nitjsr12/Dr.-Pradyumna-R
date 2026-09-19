import { homeExpertise } from "@/data/expertise";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ExpertiseCard } from "@/components/cards/ExpertiseCard";
import { Stagger, StaggerChild } from "@/components/animations/Reveal";

export function ExpertiseGrid() {
  return (
    <section className="section-y bg-bg-warm">
      <Container>
        <SectionHeading
          label="Expertise"
          title={
            <>
              Areas of <span className="text-accent">expertise</span>
            </>
          }
        />
        <Stagger className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {homeExpertise.map((item) => (
            <StaggerChild key={item.title}>
              <ExpertiseCard item={item} />
            </StaggerChild>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
