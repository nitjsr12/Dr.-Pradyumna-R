import Image from "next/image";
import { PageHero } from "@/components/hero/PageHero";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { Container } from "@/components/ui/Container";
import { galleryItems } from "@/data/gallery";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Gallery",
  "Photographs and video from Dr. Pradyumna R’s clinical practice.",
  "/gallery"
);

export default function GalleryPage() {
  return (
    <>
      <PageHero
        label="Gallery"
        title={
          <>
            Practice in view.{" "}
            <span className="text-accent">Care in motion.</span>
          </>
        }
        description="Photographs and video from clinic and patient care."
      />
      <section className="section-y bg-bg-warm">
        <Container>
          <ul className="grid gap-5 sm:grid-cols-2">
            {galleryItems.map((item) => (
              <li
                key={item.src}
                className="overflow-hidden rounded-[28px] bg-navy shadow-[0_18px_40px_rgba(10,30,50,0.08)]"
              >
                {item.type === "image" ? (
                  <div className="relative aspect-[4/5] sm:aspect-[5/4]">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      quality={90}
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <video
                    src={item.src}
                    aria-label={item.alt}
                    controls
                    muted
                    playsInline
                    preload="metadata"
                    className="aspect-[4/5] w-full object-cover sm:aspect-[5/4]"
                  />
                )}
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <ConsultationCTA />
    </>
  );
}
