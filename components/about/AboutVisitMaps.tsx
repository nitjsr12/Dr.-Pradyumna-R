"use client";

import Link from "next/link";
import { ExternalLink, MapPin } from "lucide-react";
import { useState } from "react";
import { aboutLocations } from "@/data/about-locations";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/animations/Reveal";
import { cn } from "@/lib/utils";

export function AboutVisitMaps() {
  const [activeId, setActiveId] = useState(aboutLocations[0].id);
  const active = aboutLocations.find((loc) => loc.id === activeId) ?? aboutLocations[0];

  return (
    <section className="relative overflow-hidden bg-navy mesh-navy py-10 md:py-14 lg:py-16">
      <div
        className="pointer-events-none absolute -right-24 top-0 size-96 rounded-full bg-teal-bright/20 blur-3xl"
        aria-hidden
      />
      <div className="pattern-dots-dark pointer-events-none absolute inset-0 opacity-25" aria-hidden />

      <Container className="relative">
        <FadeIn>
          <p className="label-caps-on-dark">Visit</p>
          <h2 className="title-section mt-5 max-w-2xl text-balance !text-white">
            Clinic locations &{" "}
            <span className="text-teal-bright">maps.</span>
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-white/80">
            Consultation at Manipal Hospitals (Kanakapura Road and Jayanagar) and Bangalore
            Orthopaedic Clinic, BTM Layout.
          </p>
        </FadeIn>

        <div className="mt-10 flex flex-wrap gap-2">
          {aboutLocations.map((loc) => (
            <button
              key={loc.id}
              type="button"
              onClick={() => setActiveId(loc.id)}
              className={cn(
                "focus-ring rounded-full px-4 py-2 text-xs font-semibold transition-colors sm:text-sm",
                loc.id === activeId
                  ? "bg-teal text-white"
                  : "border border-white/20 bg-white/10 text-white/85 hover:bg-white/15"
              )}
            >
              {loc.name.split("—")[0]?.trim() ?? loc.name}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-6 overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-2xl lg:grid-cols-5">
          <div className="relative min-h-[280px] lg:col-span-3 lg:min-h-[420px]">
            <iframe
              key={active.id}
              title={`Map: ${active.name}`}
              src={active.embedSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 size-full border-0 grayscale-[20%] contrast-[1.05]"
              allowFullScreen
            />
          </div>
          <div className="flex flex-col justify-center p-6 sm:p-8 lg:col-span-2">
            <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-teal-bright">
              <MapPin className="size-4" aria-hidden />
              Directions
            </p>
            <h3 className="mt-4 font-heading text-xl font-bold text-white">{active.name}</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/80">{active.address}</p>
            <Link
              href={active.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-teal px-5 py-2.5 text-sm font-semibold text-white hover:bg-teal-bright"
            >
              Open in Google Maps
              <ExternalLink className="size-4" aria-hidden />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
