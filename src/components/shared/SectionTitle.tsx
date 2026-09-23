import { type ReactNode } from "react";

interface SectionTitleProps {
  label: string;
  title: ReactNode;
  copy?: string;
  className?: string;
}

export default function SectionTitle({
  label,
  title,
  copy,
  className = "",
}: SectionTitleProps) {
  return (
    <div className={`max-w-3xl ${className}`}>
      <div className="mb-5 flex items-center gap-3 text-xs font-bold uppercase text-brand-orange">
        <span className="h-px w-8 bg-brand-orange" />
        {label}
      </div>
      <h2 className="font-display text-4xl font-semibold uppercase leading-[.95] text-primary sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {copy && (
        <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
          {copy}
        </p>
      )}
    </div>
  );
}
