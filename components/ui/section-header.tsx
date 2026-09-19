import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  const centered = align === "center";

  return (
    <header
      className={cn(
        "max-w-2xl",
        centered && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2
        className={cn(
          "text-[1.75rem] font-semibold leading-tight md:text-[2.125rem]",
          eyebrow && "mt-3"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-[15px] leading-relaxed text-muted md:text-base",
            centered && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </header>
  );
}
