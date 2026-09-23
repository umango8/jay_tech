"use client";

import { partnersData } from "@/data/partners";

export default function PartnersSection() {
  // Duplicate array to ensure a seamless, continuous infinite marquee loop
  const marqueeList = [...partnersData, ...partnersData];

  return (
    <section
      aria-label="Our Trusted Industry Partners"
      className="relative bg-background py-8 sm:py-10 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8 mb-6 text-center">
        <h2 className="font-display text-lg sm:text-xl font-bold uppercase tracking-wider text-primary">
          Strategic Industry Partners & Clients
        </h2>
        <p className="mt-1 text-xs sm:text-sm text-muted-foreground font-medium">
          Trusted by leading automotive OEMs, defense contractors & precision engineering enterprises
        </p>
      </div>

      {/* Marquee Container with Left & Right Gradient Masks */}
      <div className="marquee-group relative w-full overflow-hidden">
        {/* Left Fade Gradient Mask */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />

        {/* Right Fade Gradient Mask */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-background via-background/80 to-transparent z-10" />

        {/* Infinite Scrolling Track (Pauses on Hover) */}
        <div
          className="animate-marquee flex items-center gap-4 sm:gap-6 py-2 px-4 hover:[animation-play-state:paused]"
          role="marquee"
          tabIndex={0}
          aria-label="Partner logos marquee slider. Hover to pause."
        >
          {marqueeList.map((partner, index) => {
            // First 2 letters as industrial monogram
            const initials = partner.name
              .split(" ")
              .map((w) => w[0])
              .join("")
              .slice(0, 2);

            return (
              <div
                key={`${partner.id}-${index}`}
                className="group shrink-0 h-[76px] sm:h-[84px] min-w-[250px] sm:min-w-[280px] rounded-[8px] sm:rounded-[16px] border border-border bg-slate-50/70 hover:bg-white px-5 py-3.5 flex items-center gap-3.5 shadow-xs transition-all duration-300 hover:border-brand-orange/50 hover:shadow-md hover:scale-[1.02] cursor-pointer select-none"
              >
                {/* Industrial Monogram Emblem */}
                <div className="flex size-11 sm:size-12 shrink-0 items-center justify-center rounded-[6px] sm:rounded-[10px] bg-white border border-border text-primary font-display text-base sm:text-lg font-extrabold uppercase tracking-tight group-hover:text-brand-orange group-hover:border-brand-orange/40 shadow-xs transition-colors">
                  {initials}
                </div>

                {/* Partner Details */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-1.5">
                    <h3 className="font-display text-base sm:text-lg font-bold uppercase tracking-tight text-primary truncate leading-tight group-hover:text-brand-orange transition-colors">
                      {partner.name}
                    </h3>
                  </div>
                  <div className="mt-1 flex items-center gap-2">
                    <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-muted-foreground truncate">
                      {partner.category}
                    </span>
                    <span className="size-1 rounded-full bg-brand-orange/60" />
                    <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-brand-orange truncate">
                      {partner.tier}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
