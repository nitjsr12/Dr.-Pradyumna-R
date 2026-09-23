import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { doctor } from "@/data/doctor";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/animations/Reveal";

export function AboutPreview() {
  return (
    <section className="section-y relative overflow-hidden bg-gradient-to-br from-mint via-white to-[#f3f7f4]">
      <div
        className="pointer-events-none absolute -left-24 top-10 size-80 rounded-full bg-teal/15 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-0 size-72 rounded-full bg-gold/20 blur-3xl"
        aria-hidden
      />

      <Container className="relative grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="relative lg:col-span-5">
          <div
            className="absolute -left-4 -top-4 hidden size-28 rounded-[28px] border border-teal/30 lg:block"
            aria-hidden
          />
          <div
            className="absolute -bottom-6 -right-6 hidden size-28 rounded-full bg-teal/15 lg:block"
            aria-hidden
          />
          <div className="relative rounded-[32px] bg-gradient-to-br from-teal-bright via-white to-gold/70 p-[3px] shadow-[var(--shadow-soft)]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[29px] bg-navy">
              <Image
                src="/images/hero/slide-movement.jpg"
                alt="Dr. Pradyumna R with the clinical team"
                fill
                quality={90}
                sizes="(max-width: 1024px) 92vw, 480px"
                className="object-cover object-[76%_center]"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-white/10"
                aria-hidden
              />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-[11px] font-bold tracking-[0.14em] text-white">
                  SHOULDER &amp; SPORTS MEDICINE
                </p>
                <p className="mt-1.5 inline-flex items-center gap-1.5 text-sm font-medium text-white/90">
                  <MapPin className="size-3.5 text-teal-bright" aria-hidden />
                  {doctor.city}
                </p>
              </div>
            </div>
          </div>
        </div>

        <FadeIn className="lg:col-span-7">
          <p className="label-caps">About Dr. Pradyumna R</p>
          <h2 className="title-section mt-5 text-balance">
            Specialist care.{" "}
            <span className="text-accent">Focused on movement.</span>
          </h2>
          <p className="text-body mt-6">{doctor.overview}</p>
          <p className="text-body mt-4">{doctor.approach}</p>
          <Link
            href="/about"
            className="group link-underline focus-ring mt-10 inline-flex items-center gap-2 text-sm font-semibold text-navy"
          >
            Meet Dr. Pradyumna
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </FadeIn>
      </Container>
    </section>
  );
}
