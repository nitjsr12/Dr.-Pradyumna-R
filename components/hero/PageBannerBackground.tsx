import Image from "next/image";
import { pageBanner } from "@/lib/page-banner";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  imageClassName?: string;
  /** 0–100 — higher = darker overlay for text contrast */
  overlayStrength?: "default" | "strong" | "footer";
};

const overlayOpacity: Record<NonNullable<Props["overlayStrength"]>, string> = {
  default: "opacity-[0.78]",
  strong: "opacity-[0.88]",
  footer: "opacity-[0.9]",
};

export function PageBannerBackground({
  className,
  imageClassName,
  overlayStrength = "default",
}: Props) {
  return (
    <div className={cn("absolute inset-0", className)} aria-hidden>
      <div className="relative size-full">
        <Image
          src={pageBanner.src}
          alt=""
          fill
          quality={90}
          sizes="100vw"
          className={cn("object-cover", pageBanner.position, imageClassName)}
        />
      </div>
      <div className={cn("absolute inset-0 bg-navy", overlayOpacity[overlayStrength])} />
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/85 to-navy/50",
          overlayStrength === "footer" && "from-navy/[0.97] via-navy/[0.92] to-navy/70"
        )}
      />
      <div className="absolute inset-0 bg-teal/10 mix-blend-multiply" />
    </div>
  );
}
