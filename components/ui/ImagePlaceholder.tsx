"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { images } from "@/lib/images";

type Props = {
  src: string;
  remoteFallback?: string;
  alt: string;
  priority?: boolean;
  aspectRatio?: string;
  className?: string;
  imageClassName?: string;
  caption?: string;
  rounded?: "md" | "lg" | "img";
  overlay?: boolean;
  position?: "center" | "top" | "bottom";
};

export function ImagePlaceholder({
  src,
  remoteFallback,
  alt,
  priority,
  aspectRatio = "aspect-[4/5]",
  className,
  imageClassName,
  caption,
  rounded = "img",
  overlay = false,
  position = "center",
}: Props) {
  const objectPosition =
    position === "top"
      ? "object-top"
      : position === "bottom"
        ? "object-bottom"
        : "object-center";
  const [failed, setFailed] = useState(false);
  const radius =
    rounded === "lg"
      ? "rounded-[var(--radius-lg)]"
      : rounded === "md"
        ? "rounded-[var(--radius-md)]"
        : "rounded-[var(--radius-img)]";

  const preferRemote = src.includes("placeholder") && remoteFallback;
  const imageSrc = failed || preferRemote ? remoteFallback : src;
  const showPlaceholder = !imageSrc || (failed && !remoteFallback);

  return (
    <figure className={cn("relative overflow-hidden", radius, className)}>
      <div className={cn("relative w-full bg-mint/40", aspectRatio)}>
        {!showPlaceholder && imageSrc ? (
          <Image
            src={imageSrc}
            alt={alt}
            fill
            priority={priority}
            className={cn("object-cover", objectPosition, imageClassName)}
            sizes="(max-width: 1024px) 100vw, 560px"
            onError={() => setFailed(true)}
          />
        ) : (
          <PlaceholderPanel alt={alt} />
        )}
        {overlay && !showPlaceholder && (
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/25 to-transparent"
            aria-hidden
          />
        )}
      </div>
      {caption && (
        <figcaption className="mt-3 text-xs text-muted">{caption}</figcaption>
      )}
    </figure>
  );
}

function PlaceholderPanel({ alt }: { alt: string }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center border border-[rgba(11,31,51,0.08)] bg-gradient-to-br from-mint/80 to-bg p-6 text-center">
      <p className="label-caps text-muted">Photo placeholder</p>
      <p className="mt-3 text-sm font-semibold text-navy">Dr. Pradyumna R</p>
      <p className="mt-1 text-xs text-muted">Professional portrait</p>
      <p className="sr-only">{alt}</p>
      {/* TODO: Replace with Dr. Pradyumna's professional portrait */}
    </div>
  );
}

/** Hero: prefer remote portrait until local hero file exists */
export function DoctorHeroImage({ priority }: { priority?: boolean }) {
  return (
    <ImagePlaceholder
      src={images.doctorHero}
      remoteFallback={images.remote.doctorPortrait}
      alt="Dr. Pradyumna R professional portrait placeholder"
      priority={priority}
      position="top"
      overlay
      aspectRatio="aspect-[4/5] max-h-[420px] sm:max-h-[480px] lg:max-h-[560px] lg:min-h-[480px]"
      className="shadow-[0_24px_64px_rgba(11,31,51,0.1)]"
      rounded="lg"
    />
  );
}
