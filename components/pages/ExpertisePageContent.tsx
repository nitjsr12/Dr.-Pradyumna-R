"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { expertisePages } from "@/data/expertise";
import { Container } from "@/components/ui/Container";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Button } from "@/components/ui/button";
import { Stagger, StaggerChild } from "@/components/animations/Reveal";
import { images } from "@/lib/images";

const sectionImages = [
  images.remote.sportsMedicine,
  images.remote.knee,
  images.remote.shoulder,
  images.remote.knee,
  images.remote.sportsMedicine,
  images.remote.clinic,
];

export function ExpertisePageContent() {
  return (
    <Container className="section-y relative pattern-grid">
      <Stagger className="space-y-16">
        {expertisePages.map((item, i) => {
          const Icon = item.icon;
          const flip = i % 2 === 1;
          return (
            <StaggerChild key={item.title}>
              <section
                className={`grid gap-8 rounded-[var(--radius-lg)] border border-border-subtle bg-surface p-6 shadow-[var(--shadow-card)] lg:grid-cols-2 lg:items-center lg:gap-12 lg:p-10 ${
                  flip ? "lg:[direction:rtl]" : ""
                }`}
              >
                <div className={flip ? "lg:[direction:ltr]" : ""}>
                  <ImagePlaceholder
                    src={images.sportsMedicine}
                    remoteFallback={sectionImages[i]}
                    alt=""
                    aspectRatio="aspect-video"
                    overlay
                    rounded="lg"
                    className="shadow-[var(--shadow-card)]"
                  />
                </div>
                <div className={flip ? "lg:[direction:ltr]" : ""}>
                  <span className="flex size-12 items-center justify-center rounded-xl bg-mint text-teal">
                    <Icon className="size-6" strokeWidth={1.75} aria-hidden />
                  </span>
                  <h2 className="title-section mt-5 !text-[clamp(1.5rem,3vw,2rem)]">
                    {item.title}
                  </h2>
                  <p className="text-body mt-4">{item.description}</p>
                  <h3 className="label-caps mt-8 !text-[10px]">
                    Common concerns
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {item.concerns?.map((c) => (
                      <li
                        key={c}
                        className="flex gap-2 text-[15px] text-muted"
                      >
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-teal" />
                        {c}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm text-muted-light">
                    {item.whenToConsult}
                  </p>
                  <Button asChild className="mt-8">
                    <Link href="/book-appointment">
                      Book consultation
                      <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                </div>
              </section>
            </StaggerChild>
          );
        })}
      </Stagger>
    </Container>
  );
}
