import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Props = {
  label?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
  dark?: boolean;
};

export function SectionHeading({
  label,
  title,
  description,
  align = "left",
  className,
  dark,
}: Props) {
  return (
    <header
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        dark && "surface-dark",
        className
      )}
    >
      {label && (
        <p className={cn(dark ? "label-caps-on-dark" : "label-caps")}>{label}</p>
      )}
      <h2
        className={cn(
          "title-section mt-5 text-balance",
          dark && "text-white [&_.text-accent]:text-teal-bright"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-body mt-5 max-w-xl",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </header>
  );
}
