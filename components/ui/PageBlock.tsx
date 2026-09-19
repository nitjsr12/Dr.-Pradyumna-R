import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  icon: LucideIcon;
  title: string;
  children: ReactNode;
  className?: string;
  id?: string;
};

export function PageBlock({ icon: Icon, title, children, className, id }: Props) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24 rounded-[var(--radius-lg)] border border-border-subtle bg-surface p-6 shadow-[var(--shadow-card)] md:p-8",
        className
      )}
    >
      <div className="flex items-start gap-4">
        <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-mint to-surface text-teal ring-1 ring-teal/10">
          <Icon className="size-5" strokeWidth={1.75} aria-hidden />
        </span>
        <div className="min-w-0 flex-1">
          <h2 className="text-lg font-bold text-navy md:text-xl">{title}</h2>
          <div className="mt-4 text-[15px] leading-relaxed text-muted [&_ul]:mt-3 [&_ul]:space-y-2">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
