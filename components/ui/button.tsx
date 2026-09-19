import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-200 focus-ring disabled:opacity-50 [&_svg]:size-4 hover:-translate-y-0.5",
  {
    variants: {
      variant: {
        primary: "bg-navy text-white hover:bg-teal-bright",
        default: "bg-navy text-white hover:bg-teal-bright",
        secondary:
          "border border-navy/20 bg-transparent text-navy hover:border-teal hover:text-teal",
        ghost: "text-navy hover:text-teal",
        outlineLight:
          "border border-white/30 text-white hover:bg-white/10 hover:translate-y-0",
        teal: "bg-teal text-white hover:bg-teal-bright",
        accent: "bg-teal text-white hover:bg-teal-bright",
      },
      size: {
        default: "h-11 px-7",
        sm: "h-9 px-5 text-[13px]",
        lg: "h-12 px-8",
      },
    },
    defaultVariants: { variant: "primary", size: "default" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { buttonVariants };
