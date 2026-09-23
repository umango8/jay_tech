import { type ReactNode } from "react";
import Eyebrow from "./Eyebrow";

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
      <div className="mb-4">
        <Eyebrow text={label} />
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
