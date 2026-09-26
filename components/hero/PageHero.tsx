import { PageBannerBackground } from "@/components/hero/PageBannerBackground";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Props = {
  label?: string;
  title: ReactNode;
  description?: string;
  className?: string;
  children?: ReactNode;
};

export function PageHero({ label, title, description, className, children }: Props) {
  return (
    <div
      className={cn(
        "hero-banner relative overflow-hidden border-b border-border-subtle pt-[4.75rem] lg:pt-[5.5rem]",
        className
      )}
    >
      <PageBannerBackground />
      <Container className="relative pb-8 pt-8 lg:pb-10 lg:pt-10">
        {label && <p className="label-caps-on-dark">{label}</p>}
        <h1 className="title-page mt-5 max-w-3xl text-balance">{title}</h1>
        {description && <p className="text-body mt-5 max-w-2xl">{description}</p>}
        {children}
      </Container>
    </div>
  );
}
