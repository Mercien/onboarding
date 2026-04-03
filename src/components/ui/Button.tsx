import * as React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "white" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const variants = {
      primary: "bg-brand-orange text-white hover:bg-brand-orange-light shadow-[0_6px_20px_rgba(242,138,2,0.3)] hover:shadow-[0_10px_30px_rgba(242,138,2,0.4)]",
      outline: "border border-white/12 text-muted hover:border-brand-blue-light hover:text-white bg-transparent",
      white: "bg-white text-navy hover:translate-y-[-2px] shadow-[0_8px_24px_rgba(0,0,0,0.25)]",
      ghost: "bg-transparent text-muted hover:text-white",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-2.5 text-sm md:text-base",
      lg: "px-8 py-3 text-base md:text-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
