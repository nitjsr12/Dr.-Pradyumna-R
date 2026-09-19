import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/Reveal";

export function ConsultationCTA() {
  return (
    <section className="section-y bg-bg-warm">
      <Container>
        <FadeIn>
          <div className="surface-dark relative overflow-hidden rounded-[var(--radius-lg)] bg-navy px-8 py-14 text-center md:px-16 md:py-16 mesh-navy">
            <div
              className="pointer-events-none absolute inset-0 rounded-[var(--radius-lg)] ring-1 ring-inset ring-white/10"
              aria-hidden
            />
            <h2 className="title-section relative mx-auto max-w-xl text-balance text-white">
              Ready to <span className="text-teal-bright">begin?</span>
            </h2>
            <p className="text-body relative mx-auto mt-4 max-w-md">
              Book a consultation to discuss your symptoms, activity and options
              with a specialist in orthopaedic and sports medicine care.
            </p>
            <div className="relative mt-10 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" variant="teal">
                <Link href="/book-appointment">Book a Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outlineLight">
                <Link href="/contact">Contact</Link>
              </Button>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
