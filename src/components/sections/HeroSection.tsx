import { ArrowDownRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Eyebrow from "@/components/shared/Eyebrow";
import heroImage from "@/assets/cnc-hero.jpg";
import { heroData } from "@/data/hero";

const getImageSrc = (img: any): string =>
  img && typeof img === "object" && "src" in img ? img.src : img;

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[85vh] lg:min-h-[780px] flex flex-col justify-between overflow-hidden pt-20"
    >
      <img
        src={getImageSrc(heroImage)}
        alt="CNC machining a precision aluminium component"
        width={1920}
        height={1200}
        className="absolute inset-0 h-full w-full object-cover object-[66%_center]"
      />
      {/* Black gradient overlays */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.95)_0%,rgba(0,0,0,0.88)_38%,rgba(0,0,0,0.62)_65%,rgba(0,0,0,0.25)_85%,transparent_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40 pointer-events-none" />
      <div className="blueprint-grid absolute inset-y-0 left-0 w-[58%] opacity-20 invert pointer-events-none" />

      {/* Hero Content Container */}
      <div className="relative z-10 mx-auto flex flex-1 w-full max-w-7xl items-center px-5 py-12 sm:py-16 lg:py-20 lg:px-8">
        <div className="reveal-up max-w-3xl">
          {/* Eyebrow Badge */}
          <div className="mb-6">
            <Eyebrow text={heroData.eyebrow} variant="light" />
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-4xl sm:text-6xl lg:text-[4.75rem] font-semibold uppercase leading-[0.92] tracking-tight text-white">
            {heroData.headlinePre}{" "}
            <span className="text-brand-orange">{heroData.headlineHighlight}</span>{" "}
            {heroData.headlinePost}
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-300 font-normal">
            {heroData.subtitle}
          </p>

          {/* Action Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-col gap-3.5 sm:flex-row">
            <Button
              asChild
              size="lg"
              variant="orange"
              className="transition-transform hover:scale-[1.02]"
            >
              <a href={heroData.primaryCta.href} className="flex items-center gap-2">
                {heroData.primaryCta.label} <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="steelOutline"
              className="backdrop-blur-md transition-transform hover:scale-[1.02]"
            >
              <a href={heroData.secondaryCta.href} className="flex items-center gap-2">
                {heroData.secondaryCta.label} <ArrowDownRight className="size-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Coordinates Strip */}
      <div className="relative z-20 border-t border-white/15 bg-black/85 backdrop-blur-md">
        <div className="mx-auto grid max-w-7xl grid-cols-2 sm:grid-cols-4 divide-x divide-white/15">
          {heroData.coordinates.map((item) => (
            <div key={item.label} className="px-5 sm:px-8 py-4">
              <span className="block text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-widest text-slate-400">
                {item.label}
              </span>
              <b className="font-display text-base sm:text-lg tracking-wider text-white">
                {item.value}
              </b>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
