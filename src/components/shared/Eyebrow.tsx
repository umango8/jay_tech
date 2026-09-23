import React from "react";

interface EyebrowProps {
  text?: string;
  children?: React.ReactNode;
  variant?: "brand" | "light" | "steel";
  className?: string;
}

export default function Eyebrow({
  text,
  children,
  variant = "brand",
  className = "",
}: EyebrowProps) {
  const content = text || children;

  const variantStyles = {
    brand:
      "border-brand-orange/30 bg-brand-orange/[0.08] text-brand-orange shadow-xs",
    light:
      "border-white/20 bg-white/10 text-slate-200 backdrop-blur-md shadow-xs",
    steel:
      "border-border bg-secondary/80 text-primary shadow-xs",
  };

  return (
    <div
      className={`inline-flex items-center gap-2 rounded-md border px-3 py-1.5 transition-all duration-300 hover:border-brand-orange/50 ${variantStyles[variant]} ${className}`}
    >
      {/* Precision Double Slash motif from Jay Tech logo */}
      <span
        aria-hidden="true"
        className="font-display font-black italic text-brand-orange text-xs sm:text-sm tracking-tighter select-none"
      >
        //
      </span>

      {/* Monospace technical uppercase copy */}
      <span className="font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] leading-none">
        {content}
      </span>

      {/* Technical CAD precision coordinate pip */}
      <span
        aria-hidden="true"
        className="size-1.5 rounded-full bg-brand-orange shrink-0 animate-pulse ml-0.5"
      />
    </div>
  );
}
