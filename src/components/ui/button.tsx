import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-none text-xs sm:text-[13px] font-bold uppercase tracking-wider cursor-pointer transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed select-none [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground border border-primary hover:bg-primary/90",
        orange:
          "bg-brand-orange text-white border border-brand-orange hover:bg-brand-orange/90 hover:brightness-105 active:brightness-95",
        outline:
          "border border-border bg-background text-foreground hover:bg-secondary hover:text-foreground",
        steelOutline:
          "border border-white/30 bg-transparent text-white hover:border-white hover:bg-white/10 active:bg-white/20",
        secondary:
          "bg-secondary text-secondary-foreground border border-border hover:bg-secondary/80",
        ghost:
          "bg-transparent text-foreground hover:bg-secondary hover:text-foreground",
        destructive:
          "bg-destructive text-destructive-foreground border border-destructive hover:bg-destructive/90",
        link: "text-primary underline-offset-4 hover:underline p-0 h-auto font-normal lowercase tracking-normal",
      },
      size: {
        default: "h-9 sm:h-10 px-4 sm:px-5 py-2",
        sm: "h-8 px-3 py-1 text-[11px]",
        lg: "h-10 sm:h-11 px-5 sm:px-6 text-xs sm:text-[13px]",
        icon: "size-8 sm:size-9 p-0 flex items-center justify-center",
        iconLg: "size-10 sm:size-11 p-0 flex items-center justify-center",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
