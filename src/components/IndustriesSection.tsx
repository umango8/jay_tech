"use client";

import { ChevronRight } from "lucide-react";
import Eyebrow from "@/components/shared/Eyebrow";

interface IndustryItem {
  title: string;
  icon: React.ReactNode;
}

const industries: IndustryItem[] = [
  {
    title: "Aviation",
    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-12 sm:size-14 text-white group-hover:text-brand-orange transition-colors"
        aria-hidden="true"
      >
        <path d="M32 4 L36 18 L36 34 L56 46 L56 50 L36 44 L36 54 L42 58 L42 61 L32 58 L22 61 L22 58 L28 54 L28 44 L8 50 L8 46 L28 34 L28 18 Z" />
        <path d="M32 10 L32 28" />
        <circle cx="32" cy="18" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Space",
    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-12 sm:size-14 text-white group-hover:text-brand-orange transition-colors"
        aria-hidden="true"
      >
        <path d="M32 6 C38 14 42 26 42 42 L22 42 C22 26 26 14 32 6 Z" />
        <circle cx="32" cy="24" r="4" />
        <path d="M22 34 L12 42 L12 50 L22 46" />
        <path d="M42 34 L52 42 L52 50 L42 46" />
        <path d="M26 42 L26 50 L38 50 L38 42" />
        <path d="M29 50 L27 58 L32 55 L37 58 L35 50" />
      </svg>
    ),
  },
  {
    title: "Defence",
    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-12 sm:size-14 text-white group-hover:text-brand-orange transition-colors"
        aria-hidden="true"
      >
        <path d="M32 4 L37 16 L37 46 L49 54 L49 58 L37 54 L37 60 L27 60 L27 54 L15 58 L15 54 L27 46 L27 16 Z" />
        <path d="M27 22 L37 22" />
        <path d="M27 34 L37 34" />
        <circle cx="32" cy="14" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Telecom",
    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-12 sm:size-14 text-white group-hover:text-brand-orange transition-colors"
        aria-hidden="true"
      >
        <circle cx="32" cy="22" r="5" />
        <path d="M20 22 A12 12 0 0 1 44 22" />
        <path d="M14 22 A18 18 0 0 1 50 22" />
        <path d="M32 27 L32 60" />
        <path d="M22 60 L32 27 L42 60" />
        <path d="M26 46 L38 46" />
        <path d="M28 36 L36 36" />
      </svg>
    ),
  },
  {
    title: "Motorsport",
    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-12 sm:size-14 text-white group-hover:text-brand-orange transition-colors"
        aria-hidden="true"
      >
        <circle cx="32" cy="32" r="24" />
        <circle cx="32" cy="32" r="8" />
        <path d="M8 32 L24 32" />
        <path d="M40 32 L56 32" />
        <path d="M32 40 L32 56" />
        <path d="M20 18 L27 26" />
        <path d="M44 18 L37 26" />
      </svg>
    ),
  },
  {
    title: "General Engineering",
    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-12 sm:size-14 text-white group-hover:text-brand-orange transition-colors"
        aria-hidden="true"
      >
        {/* Main Caliper Beam */}
        <rect x="22" y="10" width="12" height="48" rx="1" />
        {/* Fixed Jaw */}
        <path d="M10 10 L34 10 L34 18 L22 18 L16 26 L10 26 Z" />
        {/* Vernier Sliding Jaw */}
        <path d="M10 30 L16 30 L22 24 L36 24 L36 34 L22 34 L12 40 L10 40 Z" />
        {/* Graduations */}
        <line x1="28" y1="16" x2="32" y2="16" />
        <line x1="28" y1="22" x2="34" y2="22" />
        <line x1="28" y1="28" x2="32" y2="28" />
        <line x1="28" y1="34" x2="34" y2="34" />
        <line x1="28" y1="40" x2="32" y2="40" />
        <line x1="28" y1="46" x2="34" y2="46" />
        <line x1="28" y1="52" x2="32" y2="52" />
      </svg>
    ),
  },
];

export default function IndustriesSection() {
  return (
    <section
      id="industries"
      className="relative overflow-hidden border-b border-border bg-background py-[76px]"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Deep Industrial Navy Card matching reference screenshot */}
        <div className="relative overflow-hidden rounded-3xl lg:rounded-[40px] bg-[#0c3c6d] p-8 sm:p-12 lg:p-16 text-white shadow-2xl">
          {/* Subtle blueprint grid overlay */}
          <div className="blueprint-grid absolute inset-0 opacity-15 pointer-events-none invert" />

          {/* Radial depth glow */}
          <div className="absolute -top-32 -right-32 size-96 rounded-full bg-brand-orange/15 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 size-96 rounded-full bg-sky-500/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 text-center">
            {/* Eyebrow */}
            <div className="mb-4">
              <Eyebrow text="SECTORS & DOMAINS" variant="light" />
            </div>

            {/* Main Headline */}
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold uppercase tracking-tight text-white">
              Industries We Serve
            </h2>

            {/* Decorative Divider */}
            <div className="mx-auto mt-4 mb-6 h-0.5 w-16 bg-brand-orange" />

            {/* Sub-paragraph matching user reference text */}
            <p className="mx-auto max-w-3xl text-sm sm:text-base leading-relaxed text-slate-200">
              At Jay Tech Industries, we manufacture highly precision-led components for a vast range of
              industries from aviation and space to defence, telecommunication, motorsport as well as
              general engineering industries. As per their unique requirements, we provide a solution
              that is best suited to their industry.
            </p>

            {/* 6 Core Industries Row */}
            <div className="mt-14 sm:mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 sm:gap-6 lg:gap-4 items-center justify-items-center">
              {industries.map((item) => (
                <a
                  key={item.title}
                  href="#quote"
                  className="group flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-1.5 focus:outline-none"
                >
                  {/* Icon */}
                  <div className="flex size-16 sm:size-20 items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>

                  {/* Title */}
                  <h3 className="mt-4 font-display text-base sm:text-lg font-semibold uppercase tracking-wide text-white group-hover:text-brand-orange transition-colors">
                    {item.title}
                  </h3>

                  {/* Circle Chevron Button */}
                  <div className="mt-4 flex size-7 sm:size-8 items-center justify-center rounded-full border border-white/40 text-white/80 transition-all duration-300 group-hover:border-brand-orange group-hover:bg-brand-orange group-hover:text-white group-hover:scale-110 shadow-sm">
                    <ChevronRight className="size-3.5 sm:size-4" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
