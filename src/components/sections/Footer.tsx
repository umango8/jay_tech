import { BarChart3, Mail, MapPin, Phone, Settings, ShieldCheck } from "lucide-react";
import Eyebrow from "@/components/shared/Eyebrow";
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
              <a
                href={`tel:${footerData.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-md bg-[#FF5A00] hover:bg-[#e04e00] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
              >
                <Phone className="size-4 fill-white" />
                <span>Call</span>
              </a>

              {/* Email Button (Outline) */}
              <a
                href={`mailto:${footerData.email}`}
                className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-md border border-slate-400/50 hover:border-white bg-transparent hover:bg-white/10 text-white text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <Mail className="size-4" />
                <span>Email</span>
              </a>

              {/* Get Directions Button (Outline) */}
              <a
                href={footerData.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-md border border-slate-400/50 hover:border-white bg-transparent hover:bg-white/10 text-white text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <MapPin className="size-4" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── BOTTOM STRIP ── */}
      <div className="border-t border-white/10 py-5">
        <div className="mx-auto flex max-w-[1440px] flex-col sm:flex-row items-center justify-between gap-4 px-6 lg:px-12 text-xs text-slate-400 font-mono">
          <span>© {footerData.copyrightYear} {footerData.companyName}</span>
          <span>{footerData.locationTagline}</span>
          <div className="flex items-center gap-2.5 text-slate-400">
            <span className="h-px w-6 bg-[#FF5A00] inline-block" />
            <span className="font-bold tracking-widest text-[11px] text-slate-300">
              {footerData.precisionBadge}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
