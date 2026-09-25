import Image from "next/image";
import { aboutProfessionalOverview } from "@/data/about-profile";
import { doctor } from "@/data/doctor";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/animations/Reveal";

export function AboutIntro() {
  return (
    <section className="relative overflow-hidden border-b border-border-subtle/80 bg-bg-warm">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_20%_0%,rgba(20,169,161,0.12),transparent_55%)]"
        aria-hidden
      />

      <Container className="relative py-10 md:py-14 lg:py-16">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-x-16 lg:gap-y-0">
          <FadeIn className="lg:col-span-5 lg:sticky lg:top-28">
            <figure className="relative mx-auto max-w-md lg:mx-0 lg:max-w-none">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-navy shadow-[var(--shadow-soft)]">
                <Image
                  src="/images/hero/slide-doctor.jpg"
                  alt="Dr. Pradyumna R"
                  fill
                  quality={90}
                  sizes="(max-width: 1024px) 88vw, 420px"
                  className="object-cover object-[22%_center]"
                  priority
                />
              </div>
              <figcaption className="mt-4 text-center text-xs leading-relaxed text-muted-light lg:text-left">
                {doctor.city} · {doctor.descriptor}
                <span className="mt-1 block text-[11px] text-muted-light/90">
                  Introductory video will replace this photo when ready.
                </span>
              </figcaption>
            </figure>
          </FadeIn>

          <FadeIn className="lg:col-span-7 lg:pt-2">
            <p className="label-caps">Professional overview</p>
            <h2 className="title-section mt-4 max-w-xl text-balance">
              Consultant orthopaedic &amp;{" "}
              <span className="text-accent">sports medicine specialist</span>
            </h2>
            <div className="mt-8 max-w-[42rem] space-y-6">
              <p className="text-[17px] leading-[1.75] text-navy/90">
                {aboutProfessionalOverview}
              </p>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
