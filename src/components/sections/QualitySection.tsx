import { ArrowRight, Award, Layers, Settings, Target } from "lucide-react";
import Eyebrow from "@/components/shared/Eyebrow";
import { Button } from "@/components/ui/button";
import { qualityData } from "@/data/quality";

const pointIcons = [Target, Layers, Settings];

export default function QualitySection() {
  return (
    <section
      id="quality"
      className="relative overflow-hidden py-[76px] bg-secondary/60 border-b border-border"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14 xl:gap-16">
          {/* Left Column: Inspection Photo with Overlays */}
          <div className="relative lg:col-span-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[8px] lg:rounded-[16px] border border-border/60 shadow-2xl lg:aspect-[1.12/1]">
              <img
                src="/images/qualtity_image.webp"
                alt="Precision component quality inspection with digital caliper"
                loading="lazy"
                width={1408}
                height={1008}
                className="h-full w-full object-cover object-center"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/30" />

              {/* Top-Left Badge text */}
              <div className="absolute left-6 top-6 z-10 select-none sm:left-8 sm:top-8">
                <div className="font-mono text-[10px] font-bold uppercase leading-[1.65] tracking-[0.28em] text-white/95 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] sm:text-[11px] whitespace-pre-line">
                  {qualityData.photoBadge}
                </div>
              </div>

              {/* Floating Bottom-Left Mindset Card */}
           
            </div>
          </div>

          {/* Right Column: Copy, Features, Watermark, and Actions */}
          <div className="relative lg:col-span-6">
            <div className="pointer-events-none absolute right-0 top-10 hidden h-28 w-[2px] bg-brand-orange xl:block" />

            {/* Decorative dot matrix */}
            <div className="pointer-events-none absolute -right-2 top-24 hidden grid-cols-4 gap-2.5 opacity-20 xl:grid">
              {Array.from({ length: 24 }).map((_, i) => (
                <div key={i} className="size-1 rounded-full bg-foreground" />
              ))}
            </div>

            {/* Far right vertical caption */}
            <div className="pointer-events-none absolute -right-14 bottom-2 hidden flex-col items-center xl:flex">
              <span className="rotate-180 font-mono text-[9px] font-semibold uppercase tracking-[0.3em] text-muted-foreground/60 [writing-mode:vertical-rl]">
                {qualityData.verticalCaption}
              </span>
            </div>

            {/* Kicker */}
            <div className="mb-4">
              <Eyebrow text={qualityData.kicker} />
            </div>

            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold uppercase leading-[.95] tracking-tight text-primary">
              {qualityData.headlinePre}
              <br className="hidden sm:inline" />
              {qualityData.headlineHighlight}
            </h2>

            {/* Subtitle */}
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              {qualityData.subtitle}
            </p>

            {/* 3 Quality Feature rows */}
            <div className="mt-8 space-y-4 sm:space-y-5">
              {qualityData.points.map((point, index) => {
                const Icon = pointIcons[index] || Target;
                return (
                  <div
                    key={point.title}
                    className="group flex items-start gap-4 rounded-[8px] lg:rounded-[16px] border border-transparent p-2 transition-colors hover:border-border/40 hover:bg-muted/30 sm:items-center sm:gap-5"
                  >
                    <div className="flex size-13 shrink-0 items-center justify-center rounded-2xl border border-brand-orange/25 bg-brand-orange/10 text-brand-orange shadow-sm transition-all group-hover:scale-105 group-hover:border-brand-orange/40 group-hover:bg-brand-orange/15 sm:size-14">
                      <Icon className="size-6 stroke-[1.8]" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-foreground">
                        {point.title}
                      </h3>
                      <p className="mt-0.5 text-xs text-muted-foreground sm:text-sm">
                        {point.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-4 sm:gap-5">
              <Button asChild size="lg" variant="orange">
                <a href={qualityData.ctaPrimary.href} className="flex items-center gap-2">
                  <span>{qualityData.ctaPrimary.label}</span>
                  <ArrowRight className="size-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={qualityData.ctaSecondary.href} className="flex items-center gap-2">
                  <span>{qualityData.ctaSecondary.label}</span>
                  <ArrowRight className="size-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
