import { Factory } from "lucide-react";
import qualityImage from "@/assets/quality-inspection.jpg";
import AnimatedCounter from "@/components/shared/AnimatedCounter";
import Eyebrow from "@/components/shared/Eyebrow";
import { aboutData } from "@/data/about";

const getImageSrc = (img: any): string =>
  img && typeof img === "object" && "src" in img ? img.src : img;

export default function AboutSection() {
  return (
    <section id="about" className="border-b border-border py-[76px] bg-background">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header & Stats Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-12 lg:mb-16">
          <div className="max-w-2xl">
            <div className="mb-4">
              <Eyebrow text={aboutData.eyebrow} />
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold uppercase leading-[.98] text-primary">
              {aboutData.headline}
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-6 sm:gap-10 shrink-0 border-t lg:border-t-0 pt-6 lg:pt-0 border-border">
            {aboutData.stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-orange leading-none">
                  <AnimatedCounter
                    end={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.decimals ?? 0}
                    duration={1800}
                  />
                </div>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground font-medium leading-tight">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Narrative & Visual Content (Card design removed) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Plant Image */}
          <div className="lg:col-span-5 relative min-h-[420px] lg:min-h-[500px] h-full rounded-[8px] sm:rounded-[16px] overflow-hidden shadow-sm border border-border group bg-secondary">
            <img
              src={getImageSrc(qualityImage)}
              alt="Jay Tech Industries engineering and precision manufacturing"
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent pointer-events-none" />

            {/* Established in 2007 Heritage Badge */}
            <div className="absolute top-5 left-5 z-10 rounded-[8px] sm:rounded-[12px] bg-background/95 backdrop-blur-md border border-border px-4 py-2.5 shadow-md">
              <span className="block font-mono text-[10px] font-bold uppercase tracking-widest text-brand-orange">
                Precision Heritage
              </span>
              <span className="font-display text-base sm:text-lg font-bold uppercase text-primary">
                Established in 2007
              </span>
            </div>

            {/* Bottom Facility Badge */}
            <div className="absolute bottom-5 inset-x-5 z-10 rounded-[8px] sm:rounded-[12px] bg-background/95 backdrop-blur-md border border-border p-3.5 shadow-md flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-primary font-semibold">
                <Factory className="size-4 text-brand-orange" />
                <span>State-of-Art Technology</span>
              </div>
              <span className="font-mono text-[11px] font-bold text-brand-orange">
                Domestic & Global
              </span>
            </div>
          </div>

          {/* Right Column: Editorial Copy-Paste Content (No Cards) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            {/* Paragraph 1: Lead Intro */}
            <div className="border-l-4 border-brand-orange pl-4 sm:pl-5">
              <p className="text-base sm:text-lg font-medium leading-relaxed text-primary">
                {aboutData.paragraphs[0]}
              </p>
            </div>

            {/* Paragraph 2: Manufacturing Unit & Quality Solutions */}
            <p className="text-sm sm:text-base leading-relaxed text-foreground/85">
              {aboutData.paragraphs[1]}
            </p>

            {/* Paragraph 3: CNC Machine Shop, Assembly & Designing Depart */}
            <p className="text-sm sm:text-base leading-relaxed text-foreground/85">
              {aboutData.paragraphs[2]}
            </p>

            {/* Paragraph 4: Strategies, Technocrats & Flexibility */}
            <p className="text-sm sm:text-base leading-relaxed text-foreground/85">
              {aboutData.paragraphs[3]}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
