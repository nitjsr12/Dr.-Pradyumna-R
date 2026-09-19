import {
  Activity,
  Award,
  BadgeCheck,
  BookOpen,
  Building2,
  Clock,
  Globe2,
  GraduationCap,
  Trophy,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap = {
  activity: Activity,
  graduation: GraduationCap,
  globe: Globe2,
  trophy: Trophy,
  hospital: Building2,
  clock: Clock,
  badge: BadgeCheck,
  book: BookOpen,
  award: Award,
} as const;

export type IconBadgeName = keyof typeof iconMap;

export function IconBadge({
  name,
  className,
  size = "md",
}: {
  name: IconBadgeName;
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const Icon: LucideIcon = iconMap[name];
  const sizes = {
    sm: "size-9 [&_svg]:size-4",
    md: "size-11 [&_svg]:size-5",
    lg: "size-14 [&_svg]:size-6",
  };

  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-2xl border border-teal/15 bg-gradient-to-br from-mint to-surface text-teal shadow-[var(--shadow-card)]",
        sizes[size],
        className
      )}
    >
      <Icon strokeWidth={1.75} aria-hidden />
    </span>
  );
}
