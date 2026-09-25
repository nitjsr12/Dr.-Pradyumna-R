import type { ComponentProps, ReactNode } from "react";
import { bookAppointmentUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

type Props = Omit<ComponentProps<"a">, "href"> & {
  children: ReactNode;
};

export function BookAppointmentLink({ children, className, ...rest }: Props) {
  return (
    <a
      href={bookAppointmentUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(className)}
      {...rest}
    >
      {children}
    </a>
  );
}
