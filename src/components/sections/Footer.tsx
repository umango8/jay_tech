import { BarChart3, Mail, MapPin, Phone, Settings, ShieldCheck } from "lucide-react";
import Eyebrow from "@/components/shared/Eyebrow";
import { Button } from "@/components/ui/button";
import { footerData } from "@/data/footer";

const featureIcons = [Settings, ShieldCheck, BarChart3];

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-[#062446] text-white">
      {/* Subtle technical blueprint grid watermark */}
      <div className="blueprint-grid absolute inset-0 opacity-15 pointer-events-none invert" />

      <div className="relative mx-auto max-w-[1440px] px-6 py-14 sm:py-16 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* ── LEFT COLUMN ── */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            {/* Logo */}
            <div className="mb-7">
              <img
                src="/images/jay-tech-industries-logo-white.png"
                alt={footerData.companyName}
                className="h-12 w-auto max-w-[220px] object-contain object-left sm:h-14 sm:max-w-[280px]"
              />
            </div>

            {/* Eyebrow */}
            <div className="mb-4">
              <Eyebrow text={footerData.eyebrow} variant="light" />
            </div>

            {/* Main Headline */}
            <h2 className="font-display text-4xl sm:text-5xl lg:text-[46px] font-bold uppercase leading-[0.93] text-white tracking-tight">
              {footerData.headlinePre}
              <br />
              {footerData.headlinePost.slice(0, -1)}
              <span className="text-[#FF5A00]">.</span>
            </h2>

            {/* Subtitle */}
            <p className="mt-4 text-sm sm:text-base leading-snug text-slate-300 font-normal max-w-md">
              {footerData.subtitleLine1}
              <br />
              {footerData.subtitleLine2}
            </p>

            {/* 3 Feature Badges in a Row */}
            <div className="mt-9 flex flex-wrap items-center gap-5 sm:gap-6 pt-7 border-t border-white/10">
              {footerData.features.map((feature, idx) => {
                const Icon = featureIcons[idx] || Settings;
                return (
                  <div key={feature.titleTop} className="flex items-center gap-4">
                    <div className="flex items-center gap-2.5">
                      <Icon className="size-5 sm:size-6 text-[#FF5A00] shrink-0 stroke-[1.8]" />
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-300 leading-tight">
                        {feature.titleTop}
                        <br />
                        {feature.titleBottom}
                      </span>
                    </div>
                    {idx < footerData.features.length - 1 && (
                      <div className="h-7 w-px bg-white/20 hidden sm:block" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── RIGHT COLUMN (Contact Info taking full width) ── */}
          <div className="lg:col-span-7 lg:border-l lg:border-white/10 lg:pl-10 xl:pl-14 flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="mb-4">
              <Eyebrow text={footerData.contactKicker} variant="brand" />
            </div>

            {/* Company Name & Address */}
            <h3 className="font-sans text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight">
              {footerData.companyName}
            </h3>
            <address className="not-italic text-sm sm:text-base leading-relaxed text-slate-300 font-normal max-w-xl">
              {footerData.addressLines.map((line, idx) => (
                <span key={idx}>
                  {line}
                  {idx < footerData.addressLines.length - 1 && <br />}
                </span>
              ))}
            </address>

            {/* Phone Number */}
            <div className="mt-6 flex items-center gap-3">
              <Phone className="size-5 sm:size-6 text-[#FF5A00] shrink-0 stroke-[2.2]" />
              <a
                href={`tel:${footerData.phoneRaw}`}
                className="font-sans text-2xl sm:text-3xl font-bold tracking-tight text-white hover:text-[#FF5A00] transition-colors"
              >
                {footerData.phoneDisplay}
              </a>
            </div>

            {/* 3 Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              {/* Call Button (Solid Orange) */}
              <Button asChild variant="orange" size="default">
                <a href={`tel:${footerData.phoneRaw}`} className="flex items-center gap-2">
                  <Phone className="size-4 fill-white" />
                  <span>Call</span>
                </a>
              </Button>

              {/* Email Button (Steel Outline) */}
              <Button asChild variant="steelOutline" size="default">
                <a href={`mailto:${footerData.email}`} className="flex items-center gap-2">
                  <Mail className="size-4" />
                  <span>Email</span>
                </a>
              </Button>

              {/* Get Directions Button (Steel Outline) */}
              <Button asChild variant="steelOutline" size="default">
                <a
                  href={footerData.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2"
                >
                  <MapPin className="size-4" />
                  <span>Get Directions</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* ── BOTTOM STRIP ── */}
      <div className=" bg-[#062446] py-3">
        <div className="mx-auto flex max-w-[1440px] flex-col md:flex-row items-center justify-between gap-4 px-6 lg:px-12">
          {/* Crafted by Badge matching user reference image */}

          <div className="flex items-center gap-4 text-xs text-slate-400 font-mono">
            <span>{footerData.locationTagline}</span>
          </div>
            <div className="text-xs sm:text-[13px] text-slate-300 font-sans tracking-normal text-center md:text-left">
            <a
              href={footerData.craftedByUrl || "https://truvixoo.com"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 transition-colors hover:text-white group"
            >
              <span>Crafted by</span>
              <strong className="font-bold text-white transition-colors group-hover:text-[#FF5A00] underline-offset-2 group-hover:underline">
                {footerData.craftedByName || "TruVixoo"}
              </strong>
            </a>
            <span className="mx-2 text-slate-500">•</span>
            <span>
              Copyright © {footerData.copyrightYear} {footerData.companyName}. All rights reserved.
            </span>
          </div>
          <div>
            <div className="hidden sm:flex items-center gap-2 text-slate-400">
              <span className="h-px w-5 bg-[#FF5A00] inline-block" />
              <span className="font-bold tracking-widest text-[11px] text-slate-300">
                {footerData.precisionBadge}
              </span>
            </div>
          </div>
        
        </div>
      </div>
    </footer>
  );
}
