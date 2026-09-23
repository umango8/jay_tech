import { ChevronRight } from "lucide-react";
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
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-14 lg:mb-16">
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

        {/* Image & Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left Column: Big Image */}
          <div className="lg:col-span-5 relative min-h-[440px] lg:min-h-[540px] rounded-3xl overflow-hidden shadow-sm border border-border group bg-secondary">
            <img
              src={getImageSrc(qualityImage)}
              alt="Jay Tech Industries engineering and precision manufacturing"
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Right Column: 2 Cards Top + 1 Full Width Bottom */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Top 2 Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1">
              {aboutData.cards.slice(0, 2).map((card) => (
                <div
                  key={card.title}
                  className={`rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-md ${
                    card.isAccent
                      ? "border border-brand-orange/25 bg-brand-orange/[0.08] hover:border-brand-orange/40"
                      : "border border-border bg-secondary/50 hover:border-primary/20"
                  }`}
                >
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl font-semibold uppercase text-primary leading-tight">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                      {card.desc}
                    </p>
                  </div>
                  <div className="mt-8">
                    <a
                      href={card.linkHref}
                      className={`inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-bold transition-all duration-200 shadow-sm ${
                        card.isAccent
                          ? "border border-brand-orange/30 bg-background/90 text-foreground hover:bg-brand-orange hover:text-brand-orange-foreground hover:border-brand-orange"
                          : "border border-border bg-background text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary"
                      }`}
                    >
                      {card.linkText} <ChevronRight className="size-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Wide Card */}
            {aboutData.cards[2] && (
              <div className="rounded-3xl border border-border bg-secondary/50 p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:border-primary/20">
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl font-semibold uppercase text-primary leading-tight">
                    {aboutData.cards[2].title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/80 max-w-2xl">
                    {aboutData.cards[2].desc}
                  </p>
                </div>
                <div className="mt-8">
                  <a
                    href={aboutData.cards[2].linkHref}
                    className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-5 py-2.5 text-xs font-bold text-foreground transition-all duration-200 hover:bg-brand-orange hover:text-brand-orange-foreground hover:border-brand-orange shadow-sm"
                  >
                    {aboutData.cards[2].linkText} <ChevronRight className="size-3.5" />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
