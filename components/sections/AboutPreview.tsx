import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { doctor } from "@/data/doctor";
import { Container } from "@/components/ui/Container";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { FadeIn } from "@/components/animations/Reveal";
import { images } from "@/lib/images";

export function AboutPreview() {
  return (
    <section className="section-y mesh-light bg-surface">
      <Container className="grid gap-12 lg:grid-cols-12 lg:items-center">
        <div className="relative lg:col-span-5">
          <div
            className="absolute -left-4 top-0 hidden h-full w-px bg-gradient-to-b from-teal/50 to-transparent lg:block"
            aria-hidden
          />
          <ImagePlaceholder
            src={images.doctorPortrait}
            remoteFallback={images.remote.doctorPortrait}
            alt="Dr. Pradyumna R portrait placeholder"
            aspectRatio="aspect-[4/5]"
          />
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
            className="link-underline focus-ring mt-10 inline-flex items-center gap-2 text-sm font-semibold text-navy"
          >
            Meet Dr. Pradyumna
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </FadeIn>
      </Container>
    </section>
  );
}
