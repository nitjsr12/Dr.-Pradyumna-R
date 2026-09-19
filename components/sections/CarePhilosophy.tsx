import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/animations/Reveal";

export function CarePhilosophy() {
  return (
    <section className="section-y relative overflow-hidden bg-mint/50">
      <div
        className="pointer-events-none absolute left-1/2 top-8 h-24 w-px -translate-x-1/2 bg-gradient-to-b from-teal/40 to-transparent"
        aria-hidden
      />
      <Container className="relative max-w-3xl text-center">
        <FadeIn>
          <p className="label-caps mx-auto justify-center">Care philosophy</p>
          <blockquote className="mt-10 font-editorial text-[clamp(1.35rem,3vw,1.75rem)] leading-[1.45] text-navy">
            &ldquo;Good healthcare starts with listening, understanding and
            creating a clear path forward.&rdquo;
          </blockquote>
          <div
            className="mx-auto mt-8 h-px w-12 bg-gold/60"
            aria-hidden
          />
          <p className="text-caption mt-6">
            Illustrative practice philosophy—not a direct patient quote.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
