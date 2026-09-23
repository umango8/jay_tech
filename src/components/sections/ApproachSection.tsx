import { CircleGauge, Search, Settings, ShieldCheck } from "lucide-react";
import Eyebrow from "@/components/shared/Eyebrow";
import { approachData } from "@/data/approach";

const phaseIcons = [Search, Settings, CircleGauge, ShieldCheck];

export default function ApproachSection() {
  return (
    <section
      id="approach"
      className="border-b border-border bg-secondary/60 py-[76px] overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header row with Pill Badge and Title */}
        <div className="max-w-3xl mb-14 lg:mb-18">
          <Eyebrow text={approachData.badge} />
          <h2 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold uppercase leading-[.98] text-primary">
            {approachData.title}
          </h2>
          <div className="mt-5 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              {approachData.description}
            </p>
            {/* Process indicator badge */}
            <div className="hidden sm:flex items-center rounded-2xl border border-border overflow-hidden shrink-0 shadow-sm self-start">
              <span className="bg-secondary/60 px-4 py-3 text-xs font-bold text-foreground">
                {approachData.indicatorBadge.standard}
              </span>
              <span className="bg-brand-orange px-4 py-3 text-xs font-bold text-brand-orange-foreground">
                {approachData.indicatorBadge.controlled}
              </span>
            </div>
          </div>
        </div>

        {/* Staggered Zigzag Step Cards with Connecting Dashed Lines */}
        <div className="relative flex flex-col gap-6 lg:gap-0">
          {/* Step 1: Top Left */}
          <div className="lg:w-[52%] lg:self-start relative z-10">
            <div className="rounded-[8px] sm:rounded-[16px] border border-brand-orange/25 bg-brand-orange/[0.06] p-6 sm:p-8 flex items-stretch gap-5 sm:gap-6 shadow-sm transition duration-300 hover:shadow-md hover:border-brand-orange/40">
              <div className="w-9 sm:w-10 rounded-2xl bg-brand-orange text-brand-orange-foreground flex items-center justify-center py-4 shrink-0 shadow-sm">
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider select-none [writing-mode:vertical-rl] rotate-180">
                  {approachData.phases[0].phase}
                </span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <div className="grid size-9 sm:size-10 place-items-center rounded-xl bg-brand-orange/15 text-brand-orange shrink-0">
                    <Search className="size-4 sm:size-5" />
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-semibold uppercase text-primary leading-tight">
                    {approachData.phases[0].stepNumber} {approachData.phases[0].title}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-foreground/80 sm:text-base">
                  {approachData.phases[0].desc}
                </p>
              </div>
            </div>
          </div>

          {/* Connecting line: Step 1 to Step 2 */}
          <div className="hidden lg:flex justify-end pr-14 -my-4 relative z-0">
            <svg className="w-[56%] h-20 overflow-visible" viewBox="0 0 500 80" fill="none">
              <path
                d="M 40 15 H 440 Q 480 15 480 50 V 80"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeDasharray="6 6"
                className="text-slate-300 dark:text-slate-600 opacity-60"
              />
              <path
                d="M 40 15 H 440 Q 480 15 480 50 V 80"
                fill="none"
                stroke="#f25c05"
                strokeWidth="3"
                strokeLinecap="round"
                pathLength="100"
                strokeDasharray="100"
                className="step-line-1"
              />
            </svg>
          </div>

          {/* Step 2: Middle Right */}
          <div className="lg:w-[52%] lg:self-end relative z-10">
            <div className="rounded-[8px] sm:rounded-[16px] border border-border bg-background p-6 sm:p-8 flex items-stretch gap-5 sm:gap-6 shadow-sm transition duration-300 hover:shadow-md hover:border-primary/20">
              <div className="w-9 sm:w-10 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center py-4 shrink-0 shadow-sm">
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider select-none [writing-mode:vertical-rl] rotate-180">
                  {approachData.phases[1].phase}
                </span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <div className="grid size-9 sm:size-10 place-items-center rounded-xl bg-background text-primary border border-border shrink-0">
                    <Settings className="size-4 sm:size-5" />
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-semibold uppercase text-primary leading-tight">
                    {approachData.phases[1].stepNumber} {approachData.phases[1].title}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-foreground/80 sm:text-base">
                  {approachData.phases[1].desc}
                </p>
              </div>
            </div>
          </div>

          {/* Connecting line: Step 2 to Step 3 */}
          <div className="hidden lg:flex justify-start pl-14 -my-4 relative z-0">
            <svg className="w-[56%] h-20 overflow-visible" viewBox="0 0 500 80" fill="none">
              <path
                d="M 460 15 H 60 Q 20 15 20 50 V 80"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeDasharray="6 6"
                className="text-slate-300 dark:text-slate-600 opacity-60"
              />
              <path
                d="M 460 15 H 60 Q 20 15 20 50 V 80"
                fill="none"
                stroke="#f25c05"
                strokeWidth="3"
                strokeLinecap="round"
                pathLength="100"
                strokeDasharray="100"
                className="step-line-2"
              />
            </svg>
          </div>

          {/* Step 3: Middle Left */}
          <div className="lg:w-[52%] lg:self-start relative z-10">
            <div className="rounded-[8px] sm:rounded-[16px] border border-border bg-background p-6 sm:p-8 flex items-stretch gap-5 sm:gap-6 shadow-sm transition duration-300 hover:shadow-md hover:border-primary/20">
              <div className="w-9 sm:w-10 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center py-4 shrink-0 shadow-sm">
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider select-none [writing-mode:vertical-rl] rotate-180">
                  {approachData.phases[2].phase}
                </span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <div className="grid size-9 sm:size-10 place-items-center rounded-xl bg-background text-primary border border-border shrink-0">
                    <CircleGauge className="size-4 sm:size-5" />
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-semibold uppercase text-primary leading-tight">
                    {approachData.phases[2].stepNumber} {approachData.phases[2].title}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-foreground/80 sm:text-base">
                  {approachData.phases[2].desc}
                </p>
              </div>
            </div>
          </div>

          {/* Connecting line: Step 3 to Step 4 */}
          <div className="hidden lg:flex justify-end pr-14 -my-4 relative z-0">
            <svg className="w-[56%] h-20 overflow-visible" viewBox="0 0 500 80" fill="none">
              <path
                d="M 40 15 H 440 Q 480 15 480 50 V 80"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeDasharray="6 6"
                className="text-slate-300 dark:text-slate-600 opacity-60"
              />
              <path
                d="M 40 15 H 440 Q 480 15 480 50 V 80"
                fill="none"
                stroke="#f25c05"
                strokeWidth="3"
                strokeLinecap="round"
                pathLength="100"
                strokeDasharray="100"
                className="step-line-3"
              />
            </svg>
          </div>

          {/* Step 4: Bottom Right */}
          <div className="lg:w-[52%] lg:self-end relative z-10">
            <div className="rounded-[8px] sm:rounded-[16px] border border-brand-orange/25 bg-brand-orange/[0.06] p-6 sm:p-8 flex items-stretch gap-5 sm:gap-6 shadow-sm transition duration-300 hover:shadow-md hover:border-brand-orange/40">
              <div className="w-9 sm:w-10 rounded-2xl bg-brand-orange text-brand-orange-foreground flex items-center justify-center py-4 shrink-0 shadow-sm">
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider select-none [writing-mode:vertical-rl] rotate-180">
                  {approachData.phases[3].phase}
                </span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <div className="grid size-9 sm:size-10 place-items-center rounded-xl bg-brand-orange/15 text-brand-orange shrink-0">
                    <ShieldCheck className="size-4 sm:size-5" />
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-semibold uppercase text-primary leading-tight">
                    {approachData.phases[3].stepNumber} {approachData.phases[3].title}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-foreground/80 sm:text-base">
                  {approachData.phases[3].desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
