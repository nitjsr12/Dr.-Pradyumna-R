import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";

const steps = [
  {
    n: "01",
    title: "BOOK",
    text: "Schedule your consultation and take the first step towards understanding your concern.",
  },
  {
    n: "02",
    title: "ASSESS",
    text: "Discuss your pain, movement, activity, injury history and concerns through a focused clinical assessment.",
  },
  {
    n: "03",
    title: "UNDERSTAND",
    text: "Understand your condition, diagnosis and the treatment options relevant to your situation.",
  },
  {
    n: "04",
    title: "PLAN",
    text: "Discuss an appropriate care approach based on your clinical needs, goals and recovery.",
  },
  {
    n: "05",
    title: "MOVE FORWARD",
    text: "Follow-up and guidance based on how your recovery develops, with focus on function and return to activity.",
  },
] as const;

export function PatientJourney() {
  return (
    <section className="section-y mesh-light bg-surface">
      <Container>
        <SectionHeading
          label="Your journey"
          title={
            <>
              From first conversation to{" "}
              <span className="text-accent">moving forward.</span>
            </>
          }
          description="A consultation should leave you with more than answers. It should leave you with clarity about what comes next."
        />
        <ol className="relative mt-14 hidden lg:grid lg:grid-cols-5 lg:gap-4">
          <span
            className="absolute left-0 right-0 top-[2.125rem] h-px bg-gradient-to-r from-transparent via-teal/35 to-transparent"
            aria-hidden
          />
          {steps.map((s) => (
            <li
              key={s.n}
              className="relative rounded-[var(--radius-md)] border border-border-subtle bg-surface px-4 pb-6 pt-8 shadow-[var(--shadow-card)]"
            >
              <span className="absolute left-4 top-0 flex size-9 -translate-y-1/2 items-center justify-center rounded-full border border-teal/20 bg-mint text-xs font-bold text-teal">
                {s.n}
              </span>
              <h3 className="text-sm font-bold tracking-[0.06em] text-navy">
                {s.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{s.text}</p>
            </li>
          ))}
        </ol>
        <ol className="mt-14 space-y-4 lg:hidden">
          {steps.map((s) => (
            <li
              key={s.n}
              className="flex gap-4 rounded-[var(--radius-md)] border border-border-subtle bg-bg-warm p-5"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-mint text-xs font-bold text-teal">
                {s.n}
              </span>
              <div>
                <h3 className="font-bold tracking-wide text-navy">{s.title}</h3>
                <p className="mt-1 text-[15px] text-muted">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <Button asChild size="lg" className="mt-12">
          <Link href="/book-appointment">Book Your Consultation</Link>
        </Button>
      </Container>
    </section>
  );
}
