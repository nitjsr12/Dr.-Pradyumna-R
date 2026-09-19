import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full border border-border bg-mint/50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-teal",
        className
      )}
    >
      {children}
    </span>
  );
}
