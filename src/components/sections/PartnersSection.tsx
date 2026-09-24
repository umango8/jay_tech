"use client";

import { partnersData } from "@/data/partners";

import Eyebrow from "@/components/shared/Eyebrow";

export default function PartnersSection() {
  // Duplicate array to ensure a seamless, continuous infinite marquee loop
  const marqueeList = [
    ...partnersData,
    ...partnersData,
    ...partnersData,
    ...partnersData,
  ];

  return (
    <section
      aria-label="Our Trusted Industry Partners"
      className="relative bg-background py-14 sm:py-16 border-b border-border overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8 mb-10 text-center">
        <div className="mb-4 flex justify-center">
          <Eyebrow text="Our Partners" />
        </div>
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold uppercase leading-[.95] tracking-tight text-primary">
          Strategic Industry Partners & Clients.
        </h2>
        <p className="mt-5 max-w-2xl mx-auto text-base leading-7 text-muted-foreground">
          Trusted by leading automotive OEMs, defense contractors & precision engineering enterprises
        </p>
      </div>

      {/* Marquee Container with Left & Right Gradient Masks */}
      <div className="marquee-group relative w-full overflow-hidden">
        {/* Left Fade Gradient Mask */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />

        {/* Right Fade Gradient Mask */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-background via-background/80 to-transparent z-10" />

        {/* Infinite Scrolling Track */}
        <div
          className="animate-marquee flex items-center gap-12 sm:gap-16 md:gap-20 py-4 px-4"
          role="marquee"
          tabIndex={0}
          aria-label="Partner logos marquee slider."
        >
          {marqueeList.map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              className="shrink-0 flex items-center justify-center h-16 sm:h-20 md:h-24 w-40 sm:w-52 md:w-60 px-3 select-none"
            >
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="max-h-full max-w-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
