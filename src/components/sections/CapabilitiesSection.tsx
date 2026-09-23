import Eyebrow from "@/components/shared/Eyebrow";
import { capabilitiesData } from "@/data/capabilities";

export default function CapabilitiesSection() {
  return (
    <section
      id="capabilities"
      className="relative overflow-hidden py-[76px] bg-background border-b border-border"
    >
      {/* Subtle technical blueprint grid background */}
      <div className="blueprint-grid absolute inset-0 opacity-40 pointer-events-none" />

      {/* CAD Schematic Watermark (Top Right) */}
      <svg
        className="absolute right-4 lg:right-16 top-6 w-72 h-72 sm:w-96 sm:h-96 text-primary/10 pointer-events-none select-none"
        viewBox="0 0 400 400"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="200" cy="200" r="145" stroke="currentColor" strokeWidth="1" />
        <circle cx="200" cy="200" r="115" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
        <circle cx="200" cy="200" r="80" stroke="currentColor" strokeWidth="1" />
        <circle cx="200" cy="200" r="32" stroke="currentColor" strokeWidth="1" />
        <line x1="20" y1="200" x2="380" y2="200" stroke="currentColor" strokeWidth="1" />
        <line x1="200" y1="20" x2="200" y2="380" stroke="currentColor" strokeWidth="1" />
        <circle cx="200" cy="85" r="7" stroke="currentColor" strokeWidth="1" />
        <circle cx="315" cy="200" r="7" stroke="currentColor" strokeWidth="1" />
        <circle cx="200" cy="315" r="7" stroke="currentColor" strokeWidth="1" />
        <circle cx="85" cy="200" r="7" stroke="currentColor" strokeWidth="1" />
        <text x="245" y="85" fill="currentColor" fontSize="11" fontFamily="monospace">Ø120</text>
        <text x="245" y="145" fill="currentColor" fontSize="11" fontFamily="monospace">4× M8</text>
      </svg>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 lg:mb-16">
          <div>
            <div className="mb-4">
              <Eyebrow text={capabilitiesData.eyebrow} />
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold uppercase leading-[.92] text-primary tracking-tight">
              {capabilitiesData.titlePre}
              <br />
              {capabilitiesData.titlePost.slice(0, -1)}
              <span className="text-brand-orange">.</span>
            </h2>
          </div>

          <div className="flex items-end justify-between lg:justify-end gap-10 sm:gap-16">
            <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground max-w-[210px] leading-relaxed">
              {capabilitiesData.subtitle}
            </p>
            <div className="text-right text-[10px] font-bold uppercase tracking-widest text-muted-foreground/80 leading-tight">
              <span className="block text-brand-orange font-bold text-sm mb-1">—</span>
              {capabilitiesData.slogan.map((word) => (
                <span key={word} className="block">
                  {word}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Compact Capabilities Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {capabilitiesData.items.map((item) => (
            <div
              key={item.title}
              className="group relative rounded-[8px] sm:rounded-[16px] border border-border bg-secondary/60 p-4 sm:p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:bg-secondary/90 hover:border-brand-orange/40 hover:-translate-y-0.5 flex flex-col justify-between"
            >
              {/* Category Pill Tag */}
              <div className="flex items-center">
                <span className="inline-block rounded-md bg-brand-orange/10 border border-brand-orange/20 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-brand-orange">
                  {item.category}
                </span>
              </div>

              {/* Content + Compact Product Image */}
              <div className="mt-3 grid grid-cols-[1fr_auto] items-center gap-3.5">
                <div className="min-w-0">
                  <h3 className="font-display text-lg sm:text-xl font-bold uppercase leading-tight text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground line-clamp-2">
                    {item.desc}
                  </p>
                </div>
                <div className="relative size-20 sm:size-24 shrink-0 rounded-lg overflow-hidden bg-transparent flex items-center justify-center">
                  <span className="absolute top-1 left-1 text-[8px] font-mono text-muted-foreground/30 pointer-events-none select-none">+</span>
                  <span className="absolute bottom-1 right-1 text-[8px] font-mono text-muted-foreground/30 pointer-events-none select-none">+</span>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Footer Bar */}
        <div className="mt-14 pt-6 border-t border-border/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">
          <span>{capabilitiesData.footerTagline}</span>
          <span className="h-0.5 w-8 bg-brand-orange inline-block" />
        </div>
      </div>
    </section>
  );
}
