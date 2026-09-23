"use client";

import { useState, type FormEvent } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  Award,
  BarChart3,
  Check,
  ChevronLeft,
  ChevronRight,
  CircleGauge,
  ExternalLink,
  FileUp,
  Layers,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Quote,
  Ruler,
  Search,
  Settings,
  ShieldCheck,
  Target,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

import heroImage from "@/assets/cnc-hero.jpg";
import componentsImage from "@/assets/precision-components.jpg";
import toolingImage from "@/assets/tooling-moulds.jpg";
import qualityImage from "@/assets/quality-inspection.jpg";
import IndustriesSection from "@/components/IndustriesSection";

const getImageSrc = (img: any): string => (img && typeof img === "object" && "src" in img ? img.src : img);

interface NavItem {
  label: string;
  href: string;
}

const nav: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Industries", href: "#industries" },
  { label: "Quality", href: "#quality" },
  { label: "Contact", href: "#contact" },
];

interface ProductItem {
  name: string;
  desc: string;
  image: any;
  number: string;
  category?: string;
  thumb?: string;
}

const products: ProductItem[] = [
  {
    name: "Injection Moulding Die",
    desc: "Custom engineered injection moulding dies designed for high repeatability, thermal balance, and tight-tolerance plastic components.",
    image: toolingImage,
    thumb: "/images/products/injection-moulding-die.jpg",
    number: "01",
    category: "Moulding Dies",
  },
  {
    name: "Blow Moulding Die",
    desc: "Purpose-built blow moulding tooling for durable, uniform wall-thickness bottles, containers, and industrial packaging.",
    image: toolingImage,
    thumb: "/images/products/blow-moulding-die.jpg",
    number: "02",
    category: "Moulding Dies",
  },
  {
    name: "Plastic Moulding Die",
    desc: "High-precision plastic moulding dies crafted for complex multi-cavity geometries and long production lifespans.",
    image: componentsImage,
    thumb: "/images/products/plastic-moulding-die.jpg",
    number: "03",
    category: "Moulding Dies",
  },
  {
    name: "Rubber Moulding Die",
    desc: "Heavy-duty compression and transfer rubber moulds manufactured to resist wear and maintain strict dimensional accuracy.",
    image: toolingImage,
    thumb: "/images/products/rubber-moulding-die.jpg",
    number: "04",
    category: "Moulding Dies",
  },
  {
    name: "Plastic Injection Moulding Die",
    desc: "Advanced runner and gate design dies tailored for precision engineering plastics and automotive components.",
    image: componentsImage,
    thumb: "/images/products/plastic-injection-die.jpg",
    number: "05",
    category: "Moulding Dies",
  },
  {
    name: "Sheet Metal Cutting Die",
    desc: "Power press punching, piercing, and bracket cutting dies built for high-speed stamping and clean shearing edges.",
    image: heroImage,
    number: "06",
    category: "Cutting Dies",
  },
  {
    name: "VMC Machining Job Work",
    desc: "3-axis & 4-axis vertical machining center (VMC) milling services delivering micro-level precision on complex components.",
    image: heroImage,
    number: "07",
    category: "Job Work",
  },
  {
    name: "EDM Drill & Wire Cut Job Work",
    desc: "Controlled spark erosion and CNC wire-cut EDM job work for hardened steels, fine holes, and intricate profiles.",
    image: qualityImage,
    number: "08",
    category: "Job Work",
  },
  {
    name: "Jig & Fixtures Manufacturing",
    desc: "Custom manufacturing fixtures, workholding systems, and inspection gauges designed to secure parts and improve repeatability.",
    image: toolingImage,
    number: "09",
    category: "Tooling & Fixtures",
  },
  {
    name: "Precision Machine Components",
    desc: "Close-tolerance components engineered for dependable fit, fine surface finish, and repeatable assembly performance.",
    image: componentsImage,
    number: "10",
    category: "Precision Components",
  },
];

interface CapabilityItem {
  number: string;
  category: string;
  title: string;
  desc: string;
  image: string;
}

const capabilityList: CapabilityItem[] = [
  {
    number: "01",
    category: "Machining",
    title: "CNC / VMC Machining",
    desc: "High-precision machining for complex geometries.",
    image: "/images/capabilities/cnc-machining.jpg",
  },
  {
    number: "02",
    category: "Cutting",
    title: "EDM / Wire Cutting",
    desc: "Intricate profiles. Exceptional accuracy.",
    image: "/images/capabilities/edm-wire-cutting.jpg",
  },
  {
    number: "03",
    category: "Tooling",
    title: "Tool & Die Making",
    desc: "Engineered for performance and longevity.",
    image: "/images/capabilities/tool-die-making.jpg",
  },
  {
    number: "04",
    category: "Manufacturing",
    title: "Mould Manufacturing",
    desc: "Precision moulds for consistent, high-quality output.",
    image: "/images/capabilities/mould-manufacturing.jpg",
  },
  {
    number: "05",
    category: "Fabrication",
    title: "Jig & Fixture Manufacturing",
    desc: "Custom solutions for greater efficiency.",
    image: "/images/capabilities/jig-fixture.jpg",
  },
  {
    number: "06",
    category: "Components",
    title: "Precision Components",
    desc: "Small parts. Big possibilities.",
    image: "/images/capabilities/precision-components.jpg",
  },
];

const qualityPoints = [
  {
    title: "Accuracy",
    desc: "Attention to dimensions, geometry and functions fit.",
    icon: Target,
  },
  {
    title: "Consistency",
    desc: "Controlled execution for repeatable manufacturing outcomes.",
    icon: Layers,
  },
  {
    title: "Engineering practicality",
    desc: "Solutions informed by real use, assembly and production realities.",
    icon: Settings,
  },
];

function SectionTitle({
  label,
  title,
  copy,
}: {
  label: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className="max-w-3xl">
      <div className="mb-5 flex items-center gap-3 text-xs font-bold uppercase text-brand-orange">
        <span className="h-px w-8 bg-brand-orange" />
        {label}
      </div>
      <h2 className="font-display text-4xl font-semibold uppercase leading-[.95] text-primary sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {copy && (
        <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
          {copy}
        </p>
      )}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [productCarouselApi, setProductCarouselApi] = useState<CarouselApi>();

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (event.currentTarget.checkValidity()) {
      setSent(true);
      event.currentTarget.reset();
    }
  };

  return (
    <main className="bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur-lg">
        <div className="mx-auto grid h-20 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-5 px-5 lg:px-8">
          <a href="#home" aria-label="Jay Tech Industries home" className="min-w-0">
            <img
              src="/images/jay-tech-industries-logo.png"
              alt="Jay Tech Industries"
              className="h-12 w-auto max-w-[220px] object-contain object-left sm:h-14 sm:max-w-[280px]"
            />
          </a>
          <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
            {nav.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="text-xs font-semibold text-foreground transition-colors hover:text-brand-orange"
              >
                {label}
              </a>
            ))}
            <Button asChild variant="orange">
              <a href="#quote">
                Request a Quote <ArrowRight />
              </a>
            </Button>
          </nav>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-label="Open navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
        {menuOpen && (
          <nav
            className="border-t border-border bg-background px-5 py-4 lg:hidden"
            aria-label="Mobile navigation"
          >
            {nav.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block border-b border-border py-3 text-sm font-semibold"
              >
                {label}
              </a>
            ))}
            <Button asChild variant="orange" className="mt-4 w-full">
              <a href="#quote" onClick={() => setMenuOpen(false)}>
                Request a Quote
              </a>
            </Button>
          </nav>
        )}
      </header>

      <section id="home" className="relative min-h-[85vh] lg:min-h-[780px] flex flex-col justify-between overflow-hidden pt-20">
        <img
          src={getImageSrc(heroImage)}
          alt="CNC machining a precision aluminium component"
          width={1920}
          height={1200}
          className="absolute inset-0 h-full w-full object-cover object-[66%_center]"
        />
        {/* Black gradient overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.95)_0%,rgba(0,0,0,0.88)_38%,rgba(0,0,0,0.62)_65%,rgba(0,0,0,0.25)_85%,transparent_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40 pointer-events-none" />
        <div className="blueprint-grid absolute inset-y-0 left-0 w-[58%] opacity-20 invert pointer-events-none" />

        {/* Hero Content Container */}
        <div className="relative z-10 mx-auto flex flex-1 w-full max-w-7xl items-center px-5 py-12 sm:py-16 lg:py-20 lg:px-8">
          <div className="reveal-up max-w-3xl">
            {/* Pill Eyebrow Badge */}
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-slate-200 backdrop-blur-md shadow-sm">
              <Ruler className="size-3.5 text-brand-orange" />
              <span>Ahmedabad · Precision Engineering</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-6xl lg:text-[4.75rem] font-semibold uppercase leading-[0.92] tracking-tight text-white">
              Precision engineering built for <span className="text-brand-orange">real-world</span>{" "}
              manufacturing.
            </h1>

            {/* Subtitle */}
            <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-300 font-normal">
              Precision machining, tools, dies, moulds, fixtures and engineering solutions from
              Ahmedabad.
            </p>

            {/* Action Buttons with Generous Padding */}
            <div className="mt-8 sm:mt-10 flex flex-col gap-3.5 sm:flex-row">
              <Button
                asChild
                size="lg"
                variant="orange"
                className="h-12 sm:h-14 px-8 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xl shadow-lg shadow-brand-orange/25 transition-all hover:scale-[1.02]"
              >
                <a href="#quote" className="flex items-center gap-2">
                  Request a Quote <ArrowRight className="size-4" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 sm:h-14 px-8 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xl border-white/25 bg-white/10 text-white backdrop-blur-md hover:border-white/50 hover:bg-white/20 hover:text-white transition-all hover:scale-[1.02]"
              >
                <a href="#products" className="flex items-center gap-2">
                  Explore Products <ArrowDownRight className="size-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Coordinates Strip */}
        <div className="relative z-20 border-t border-white/15 bg-black/85 backdrop-blur-md">
          <div className="mx-auto grid max-w-7xl grid-cols-3 divide-x divide-white/15">
            <div className="px-5 sm:px-8 py-4">
              <span className="block text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-widest text-slate-400">Coordinate</span>
              <b className="font-display text-base sm:text-lg tracking-wider text-white">AHMEDABAD</b>
            </div>
            <div className="px-5 sm:px-8 py-4">
              <span className="block text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-widest text-slate-400">Discipline</span>
              <b className="font-display text-base sm:text-lg tracking-wider text-white">PRECISION</b>
            </div>
            <div className="px-5 sm:px-8 py-4">
              <span className="block text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-widest text-slate-400">Focus</span>
              <b className="font-display text-base sm:text-lg tracking-wider text-white">PRACTICALITY</b>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-b border-border py-[76px] bg-background">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          {/* Header & Stats Row */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-14 lg:mb-16">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-orange mb-3 block">
                About Our Company
              </span>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold uppercase leading-[.98] text-primary">
                Precision Engineering & Manufacturing to Boost Your Production
              </h2>
            </div>

            <div className="grid grid-cols-3 gap-6 sm:gap-10 shrink-0 border-t lg:border-t-0 pt-6 lg:pt-0 border-border">
              <div>
                <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-orange leading-none">
                  10k+
                </div>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground font-medium leading-tight">
                  Components Delivered
                </p>
              </div>
              <div>
                <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-orange leading-none">
                  1.5k+
                </div>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground font-medium leading-tight">
                  Tooling & Moulds
                </p>
              </div>
              <div>
                <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-orange leading-none">
                  24.1k+
                </div>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground font-medium leading-tight">
                  Completed Projects
                </p>
              </div>
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
                {/* Card 1: Tinted accent card */}
                <div className="rounded-3xl border border-brand-orange/25 bg-brand-orange/[0.08] p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:border-brand-orange/40">
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl font-semibold uppercase text-primary leading-tight">
                      Precision Machining
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                      Our machining strategies are engineered to maximize precision and repeatability, ensuring tight tolerances and reliable assembly fit.
                    </p>
                  </div>
                  <div className="mt-8">
                    <a
                      href="#capabilities"
                      className="inline-flex items-center gap-2 rounded-xl border border-brand-orange/30 bg-background/90 px-5 py-2.5 text-xs font-bold text-foreground transition-all duration-200 hover:bg-brand-orange hover:text-brand-orange-foreground hover:border-brand-orange shadow-sm"
                    >
                      Read More <ChevronRight className="size-3.5" />
                    </a>
                  </div>
                </div>

                {/* Card 2: Neutral card */}
                <div className="rounded-3xl border border-border bg-secondary/50 p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:border-primary/20">
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl font-semibold uppercase text-primary leading-tight">
                      Tooling & Moulds
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                      Purpose-built dies, moulds, jigs, and fixtures developed with practical engineering to streamline high-volume production cycles.
                    </p>
                  </div>
                  <div className="mt-8">
                    <a
                      href="#products"
                      className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-5 py-2.5 text-xs font-bold text-foreground transition-all duration-200 hover:bg-primary hover:text-primary-foreground hover:border-primary shadow-sm"
                    >
                      Read More <ChevronRight className="size-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Bottom Wide Card */}
              <div className="rounded-3xl border border-border bg-secondary/50 p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:border-primary/20">
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl font-semibold uppercase text-primary leading-tight">
                    Manufacturing Scaling
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/80 max-w-2xl">
                    Our end-to-end engineering support helps you scale components from prototyping to full batch production smoothly, ensuring sustainable quality control and on-time delivery.
                  </p>
                </div>
                <div className="mt-8">
                  <a
                    href="#quote"
                    className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-5 py-2.5 text-xs font-bold text-foreground transition-all duration-200 hover:bg-brand-orange hover:text-brand-orange-foreground hover:border-brand-orange shadow-sm"
                  >
                    Read More <ChevronRight className="size-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="products" className="border-b border-border bg-secondary/60 py-[76px] overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-12 lg:mb-14">
            <SectionTitle
              label="Our Products"
              title="Built for the work that matters."
              copy="A focused range of precision-engineered components, production tooling and manufacturing solutions."
            />
          </div>

          <div className="relative">
            {/* Previous Button: Left side, half inside & half outside container */}
            <button
              type="button"
              onClick={() => productCarouselApi?.scrollPrev()}
              className="absolute left-0 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20 size-12 sm:size-14 rounded-none bg-brand-orange text-white shadow-2xl transition-all duration-200 hover:scale-105 hover:brightness-110 active:scale-95 flex items-center justify-center cursor-pointer border border-brand-orange"
              aria-label="Previous product"
            >
              <ChevronLeft className="size-6 sm:size-7 text-white" />
            </button>

            {/* Next Button: Right side, half inside & half outside container */}
            <button
              type="button"
              onClick={() => productCarouselApi?.scrollNext()}
              className="absolute right-0 translate-x-1/2 top-1/2 -translate-y-1/2 z-20 size-12 sm:size-14 rounded-none bg-brand-orange text-white shadow-2xl transition-all duration-200 hover:scale-105 hover:brightness-110 active:scale-95 flex items-center justify-center cursor-pointer border border-brand-orange"
              aria-label="Next product"
            >
              <ChevronRight className="size-6 sm:size-7 text-white" />
            </button>

            <Carousel
              setApi={setProductCarouselApi}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-5">
                {products.map((item) => (
                  <CarouselItem
                    key={item.name}
                    className="pl-5 basis-full sm:basis-1/2 lg:basis-1/3"
                  >
                    <article className="group relative h-[480px] sm:h-[500px] overflow-hidden rounded-3xl bg-primary shadow-sm border border-border flex flex-col justify-end p-7 transition-all duration-500 hover:shadow-xl">
                      <img
                        src={getImageSrc(item.image)}
                        alt={item.name}
                        loading="lazy"
                        width={1408}
                        height={1008}
                        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent transition-opacity group-hover:via-primary/50" />
                      <span className="absolute right-6 top-6 font-display text-2xl font-bold text-primary-foreground/75 bg-background/20 backdrop-blur-md px-3.5 py-1 rounded-xl border border-white/10">
                        {item.number}
                      </span>
                      <div className="relative z-10 text-primary-foreground">
                        {item.category && (
                          <span className="inline-block mb-2 rounded-md bg-brand-orange px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                            {item.category}
                          </span>
                        )}
                        <h3 className="font-display text-3xl font-semibold uppercase leading-tight">
                          {item.name}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-primary-foreground/80 line-clamp-2">
                          {item.desc}
                        </p>
                        <div className="mt-6 flex items-center gap-5 pt-5 border-t border-white/15">
                          <a
                            href="#capabilities"
                            className="flex items-center gap-1.5 text-xs font-bold text-primary-foreground/90 transition hover:text-primary-foreground"
                          >
                            View Details <ChevronRight className="size-3.5" />
                          </a>
                          <a
                            href="#quote"
                            className="flex items-center gap-1.5 text-xs font-bold text-brand-orange transition hover:brightness-110"
                          >
                            Get a Quote <ArrowRight className="size-3.5" />
                          </a>
                        </div>
                      </div>
                    </article>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </section>

      <section id="capabilities" className="relative overflow-hidden py-[76px] bg-background border-b border-border">
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
          {/* Header Row matching the reference layout */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 lg:mb-16">
            <div>
              <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-brand-orange mb-4">
                <span>Capabilities</span>
                <span className="h-0.5 w-12 bg-brand-orange inline-block" />
              </div>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold uppercase leading-[.92] text-primary tracking-tight">
                From Drawing To<br />Dependable Component<span className="text-brand-orange">.</span>
              </h2>
            </div>

            <div className="flex items-end justify-between lg:justify-end gap-10 sm:gap-16">
              <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground max-w-[210px] leading-relaxed">
                Precision capabilities for a stronger tomorrow
              </p>
              <div className="text-right text-[10px] font-bold uppercase tracking-widest text-muted-foreground/80 leading-tight">
                <span className="block text-brand-orange font-bold text-sm mb-1">—</span>
                Ideas<br />Materialise<br />Industries<br />Move Forward
              </div>
            </div>
          </div>

          {/* Compact Capabilities Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {capabilityList.map((item) => (
              <div
                key={item.title}
                className="group relative rounded-xl border border-border/80 bg-background/95 p-4 sm:p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:border-brand-orange/40 hover:-translate-y-0.5 flex flex-col justify-between"
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
                  <div className="relative size-20 sm:size-24 shrink-0 rounded-lg overflow-hidden bg-secondary/30 border border-border/50 p-1.5 flex items-center justify-center">
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
            <span>Built on precision, driven by possibilities.</span>
            <span className="h-0.5 w-8 bg-brand-orange inline-block" />
          </div>
        </div>
      </section>

      <section id="approach" className="border-b border-border bg-secondary/60 py-[76px] overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          {/* Header row with Pill Badge and Title */}
          <div className="max-w-3xl mb-14 lg:mb-18">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-orange/30 bg-brand-orange/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-orange">
              Engineering Approach
            </span>
            <h2 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold uppercase leading-[.98] text-primary">
              A Controlled Path from Drawing to Precision Component
            </h2>
            <div className="mt-5 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                Beyond just machining metal, we execute a disciplined manufacturing workflow that ensures close tolerances, material integrity, and dependable real-world assembly fit.
              </p>
              {/* Process indicator badge matching the user's reference */}
              <div className="hidden sm:flex items-center rounded-2xl border border-border overflow-hidden shrink-0 shadow-sm self-start">
                <span className="bg-secondary/60 px-4 py-3 text-xs font-bold text-foreground">Standardized</span>
                <span className="bg-brand-orange px-4 py-3 text-xs font-bold text-brand-orange-foreground">Controlled Process</span>
              </div>
            </div>
          </div>

          {/* Staggered Zigzag Step Cards with Connecting Dashed Lines */}
          <div className="relative flex flex-col gap-6 lg:gap-0">
            {/* Step 1: Top Left */}
            <div className="lg:w-[52%] lg:self-start relative z-10">
              <div className="rounded-3xl border border-brand-orange/25 bg-brand-orange/[0.06] p-6 sm:p-8 flex items-stretch gap-5 sm:gap-6 shadow-sm transition duration-300 hover:shadow-md hover:border-brand-orange/40">
                <div className="w-9 sm:w-10 rounded-2xl bg-brand-orange text-brand-orange-foreground flex items-center justify-center py-4 shrink-0 shadow-sm">
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider select-none [writing-mode:vertical-rl] rotate-180">
                    Phase 01
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <div className="grid size-9 sm:size-10 place-items-center rounded-xl bg-brand-orange/15 text-brand-orange shrink-0">
                      <Search className="size-4 sm:size-5" />
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl font-semibold uppercase text-primary leading-tight">
                      1 Research & Analysis
                    </h3>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-foreground/80 sm:text-base">
                    We analyze application loads, tolerance criticalities, raw material specifications, and 2D/3D part drawings to define process parameters.
                  </p>
                </div>
              </div>
            </div>

            {/* Connecting line: Step 1 to Step 2 */}
            <div className="hidden lg:flex justify-end pr-14 -my-4 relative z-0">
              <svg className="w-[56%] h-20 overflow-visible" viewBox="0 0 500 80" fill="none">
                {/* Base Dotted Line (Always Visible) */}
                <path
                  d="M 40 15 H 440 Q 480 15 480 50 V 80"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeDasharray="6 6"
                  className="text-slate-300 dark:text-slate-600 opacity-60"
                />
                {/* Step 1 Animated Solid Line */}
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
              <div className="rounded-3xl border border-border bg-background p-6 sm:p-8 flex items-stretch gap-5 sm:gap-6 shadow-sm transition duration-300 hover:shadow-md hover:border-primary/20">
                <div className="w-9 sm:w-10 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center py-4 shrink-0 shadow-sm">
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider select-none [writing-mode:vertical-rl] rotate-180">
                    Phase 02
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <div className="grid size-9 sm:size-10 place-items-center rounded-xl bg-background text-primary border border-border shrink-0">
                      <Settings className="size-4 sm:size-5" />
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl font-semibold uppercase text-primary leading-tight">
                      2 Tooling & Process Design
                    </h3>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-foreground/80 sm:text-base">
                    Our team designs purpose-built jigs, tooling, and CNC toolpaths with practical engineering to eliminate variance during volume production.
                  </p>
                </div>
              </div>
            </div>

            {/* Connecting line: Step 2 to Step 3 */}
            <div className="hidden lg:flex justify-start pl-14 -my-4 relative z-0">
              <svg className="w-[56%] h-20 overflow-visible" viewBox="0 0 500 80" fill="none">
                {/* Base Dotted Line (Always Visible) */}
                <path
                  d="M 460 15 H 60 Q 20 15 20 50 V 80"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeDasharray="6 6"
                  className="text-slate-300 dark:text-slate-600 opacity-60"
                />
                {/* Step 2 Animated Solid Line */}
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
              <div className="rounded-3xl border border-border bg-background p-6 sm:p-8 flex items-stretch gap-5 sm:gap-6 shadow-sm transition duration-300 hover:shadow-md hover:border-primary/20">
                <div className="w-9 sm:w-10 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center py-4 shrink-0 shadow-sm">
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider select-none [writing-mode:vertical-rl] rotate-180">
                    Phase 03
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <div className="grid size-9 sm:size-10 place-items-center rounded-xl bg-background text-primary border border-border shrink-0">
                      <CircleGauge className="size-4 sm:size-5" />
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl font-semibold uppercase text-primary leading-tight">
                      3 Prototype & CNC Machining
                    </h3>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-foreground/80 sm:text-base">
                    Execution across precision VMC, CNC, and wire-cut EDM machinery with continuous in-process dimensional monitoring and coordinate measurement.
                  </p>
                </div>
              </div>
            </div>

            {/* Connecting line: Step 3 to Step 4 */}
            <div className="hidden lg:flex justify-end pr-14 -my-4 relative z-0">
              <svg className="w-[56%] h-20 overflow-visible" viewBox="0 0 500 80" fill="none">
                {/* Base Dotted Line (Always Visible) */}
                <path
                  d="M 40 15 H 440 Q 480 15 480 50 V 80"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeDasharray="6 6"
                  className="text-slate-300 dark:text-slate-600 opacity-60"
                />
                {/* Step 3 Animated Solid Line */}
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
              <div className="rounded-3xl border border-brand-orange/25 bg-brand-orange/[0.06] p-6 sm:p-8 flex items-stretch gap-5 sm:gap-6 shadow-sm transition duration-300 hover:shadow-md hover:border-brand-orange/40">
                <div className="w-9 sm:w-10 rounded-2xl bg-brand-orange text-brand-orange-foreground flex items-center justify-center py-4 shrink-0 shadow-sm">
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider select-none [writing-mode:vertical-rl] rotate-180">
                    Phase 04
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <div className="grid size-9 sm:size-10 place-items-center rounded-xl bg-brand-orange/15 text-brand-orange shrink-0">
                      <ShieldCheck className="size-4 sm:size-5" />
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl font-semibold uppercase text-primary leading-tight">
                      4 Final Inspection & Delivery
                    </h3>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-foreground/80 sm:text-base">
                    Thorough coordinate inspection reports, deburring, surface treatment, and secure batch packaging ready for immediate factory assembly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries / Sectors We Serve Section */}
      <IndustriesSection />

      <section id="quality" className="relative overflow-hidden py-[76px] bg-secondary/60 border-b border-border">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14 xl:gap-16">
            {/* Left Column: Inspection Photo with Overlays */}
            <div className="relative lg:col-span-6">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[28px] sm:rounded-[34px] border border-border/60 shadow-2xl lg:aspect-[1.12/1]">
                <img
                  src="/images/quality-inspection-detail.jpg"
                  alt="Precision component quality inspection with digital caliper"
                  loading="lazy"
                  width={1408}
                  height={1008}
                  className="h-full w-full object-cover object-center"
                />
                {/* Subtle gradient overlay to enhance legibility */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/30" />

                {/* Top-Left Badge text */}
                <div className="absolute left-6 top-6 z-10 select-none sm:left-8 sm:top-8">
                  <div className="font-mono text-[10px] font-bold uppercase leading-[1.65] tracking-[0.28em] text-white/95 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] sm:text-[11px]">
                    PRECISION<br />
                    TODAY<br />
                    STRONGER<br />
                    TOMORROW
                  </div>
                </div>

                {/* Floating Bottom-Left Card */}
                <div className="absolute bottom-5 left-5 z-20 max-w-[270px] rounded-2xl border border-border/80 bg-card/95 p-5 shadow-2xl backdrop-blur-md sm:bottom-7 sm:left-7 sm:max-w-[310px] sm:p-6">
                  <div className="flex items-start gap-3.5">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-brand-orange/30 bg-brand-orange/10 text-brand-orange">
                      <Award className="size-6 stroke-[1.8]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold leading-snug text-foreground">
                        Quality is engineered into the process.
                      </h4>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Not inspected in at the end.
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-3 border-t border-border/70 pt-3.5 sm:mt-5 sm:pt-4">
                    <span className="font-display text-2xl font-bold tracking-tight text-foreground">
                      99
                    </span>
                    <div className="h-px flex-1 bg-border/80" />
                    <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                      OUR MINDSET
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Copy, Features, Watermark, and Actions */}
            <div className="relative lg:col-span-6">
              {/* Vertical accent line & side badge */}
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
                  BETTER · COMPONENTS · BRIGHTER · POSSIBILITIES
                </span>
              </div>

              {/* Kicker */}
              <div className="mb-4 flex items-center gap-3 font-mono text-xs font-bold uppercase tracking-widest text-brand-orange">
                <span className="h-[2px] w-7 bg-brand-orange" />
                <span>QUALITY</span>
              </div>

              {/* Main Headline */}
              <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight text-foreground sm:text-4xl lg:text-[46px] xl:text-[50px] lg:leading-[1.08]">
                CONFIDENCE AT EVERY<br />
                <span className="text-brand-orange">CRITICAL DETAIL.</span>
              </h2>

              {/* Subtitle */}
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                Our quality approach is grounded in what manufacturing demands: accurate features, consistent outcomes and solutions that work in practice.
              </p>

              {/* 3 Quality Feature rows */}
              <div className="mt-8 space-y-4 sm:space-y-5">
                {qualityPoints.map((point) => {
                  const Icon = point.icon;
                  return (
                    <div
                      key={point.title}
                      className="group flex items-start gap-4 rounded-xl border border-transparent p-2 transition-colors hover:border-border/40 hover:bg-muted/30 sm:items-center sm:gap-5"
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
              <div className="mt-10 flex flex-wrap items-center gap-5 sm:gap-8">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2.5 rounded-xl bg-brand-orange px-7 py-4 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-brand-orange/25 transition-all hover:translate-y-[-2px] hover:bg-brand-orange/90"
                >
                  <span>OUR QUALITY APPROACH</span>
                  <ArrowRight className="size-4" />
                </a>
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-foreground transition-colors hover:text-brand-orange"
                >
                  <span className="border-b-2 border-foreground/80 pb-0.5 transition-colors group-hover:border-brand-orange">
                    TALK TO AN EXPERT
                  </span>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-background py-[76px]">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionTitle label="Work Gallery" title="Precision, made visible." />
          <div className="mt-14 grid grid-cols-2 gap-3 lg:grid-cols-4 lg:grid-rows-2">
            <img
              src={getImageSrc(componentsImage)}
              alt="Precision machined components"
              loading="lazy"
              width={1408}
              height={1008}
              className="col-span-2 row-span-2 h-full min-h-[420px] w-full object-cover"
            />
            <img
              src={getImageSrc(toolingImage)}
              alt="Dies, moulds and fixtures"
              loading="lazy"
              width={1408}
              height={1008}
              className="h-52 w-full object-cover lg:h-full"
            />
            <img
              src={getImageSrc(heroImage)}
              alt="CNC machining process"
              loading="lazy"
              width={1920}
              height={1200}
              className="h-52 w-full object-cover lg:h-full"
            />
            <img
              src={getImageSrc(qualityImage)}
              alt="Inspection process"
              loading="lazy"
              width={1408}
              height={1008}
              className="col-span-2 h-52 w-full object-cover lg:h-full"
            />
          </div>
        </div>
      </section>

      <section id="quote" className="py-[76px] bg-secondary/60 border-b border-border">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
          <div>
            <SectionTitle
              label="Request a Quote"
              title="Bring us your manufacturing requirement."
              copy="Share your requirement or drawing. We’ll review the details and respond to discuss the right engineering approach."
            />
            <div className="mt-10 flex items-center gap-3 text-sm text-muted-foreground">
              <FileUp className="text-brand-orange" /> Drawing and file attachments are welcome.
            </div>
          </div>
          <form onSubmit={submit} className="grid gap-5 sm:grid-cols-2" aria-label="Quote request form">
            {[
              { label: "Name", type: "text", required: true },
              { label: "Company", type: "text", required: false },
              { label: "Phone", type: "tel", required: true },
              { label: "Email", type: "email", required: true },
              { label: "Requirement", type: "text", required: true },
            ].map(({ label, type, required }) => (
              <label key={label} className="grid gap-2 text-xs font-bold uppercase text-primary">
                {label}
                <input
                  type={type}
                  required={required}
                  maxLength={label === "Requirement" ? 200 : 100}
                  className="h-12 border border-input bg-background px-4 text-sm font-normal normal-case outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/20"
                />
              </label>
            ))}
            <label className="grid gap-2 text-xs font-bold uppercase text-primary">
              Upload Drawing/File
              <input
                type="file"
                accept=".pdf,.dwg,.dxf,.step,.stp,.jpg,.jpeg,.png"
                className="h-12 border border-dashed border-input bg-secondary p-2 text-xs font-normal normal-case file:mr-3 file:border-0 file:bg-primary file:px-3 file:py-1.5 file:text-primary-foreground"
              />
            </label>
            <label className="grid gap-2 text-xs font-bold uppercase text-primary sm:col-span-2">
              Message
              <textarea
                maxLength={1500}
                rows={5}
                className="resize-none border border-input bg-background p-4 text-sm font-normal normal-case outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/20"
              />
            </label>
            <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
              <Button type="submit" size="lg" variant="orange">
                Send Enquiry <ArrowRight />
              </Button>
              {sent && (
                <p role="status" className="flex items-center gap-2 text-sm font-semibold text-primary">
                  <Check className="size-4 text-brand-orange" /> Thank you. Your enquiry has been
                  prepared.
                </p>
              )}
            </div>
          </form>
        </div>
      </section>

      <footer id="contact" className="relative overflow-hidden bg-[#062446] text-white">
        {/* Subtle technical blueprint grid watermark */}
        <div className="blueprint-grid absolute inset-0 opacity-15 pointer-events-none invert" />

        <div className="relative mx-auto max-w-[1440px] px-6 py-14 sm:py-16 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* ── LEFT COLUMN ── */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              {/* Logo matching screenshot: // JAY TECH® INDUSTRIES */}
              <div className="mb-7">
                <svg viewBox="0 0 250 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-11 sm:h-12 w-auto">
                  <path d="M4 36 L15 8 H23 L12 36 H4 Z" fill="#FF5A00" />
                  <path d="M16 36 L27 8 H35 L24 36 H16 Z" fill="#FF5A00" />
                  <text x="44" y="34" fill="#FF5A00" fontFamily="var(--font-display), sans-serif" fontWeight="800" fontStyle="italic" fontSize="33" letterSpacing="0.5">JAY</text>
                  <text x="105" y="34" fill="#FFFFFF" fontFamily="var(--font-display), sans-serif" fontWeight="800" fontStyle="italic" fontSize="33" letterSpacing="0.5">TECH</text>
                  <text x="180" y="17" fill="#FFFFFF" fontFamily="sans-serif" fontWeight="bold" fontSize="9.5">®</text>
                  <text x="45" y="49" fill="#FFFFFF" fontFamily="var(--font-sans), sans-serif" fontWeight="600" fontSize="9.5" letterSpacing="0.32em">INDUSTRIES</text>
                </svg>
              </div>

              {/* Eyebrow */}
              <div className="text-[11px] font-mono font-medium uppercase tracking-[0.24em] text-slate-300 mb-3">
                BUILT FOR A STRONGER TOMORROW
              </div>

              {/* Main Headline */}
              <h2 className="font-display text-4xl sm:text-5xl lg:text-[46px] font-bold uppercase leading-[0.93] text-white tracking-tight">
                PARTNER FOR<br />
                ENGINEERING SOLUTIONS<span className="text-[#FF5A00]">.</span>
              </h2>

              {/* Subtitle */}
              <p className="mt-4 text-sm sm:text-base leading-snug text-slate-300 font-normal max-w-md">
                Precision components. Reliable processes.<br />
                A stronger tomorrow, together.
              </p>

              {/* 3 Feature Badges in a Row */}
              <div className="mt-9 flex flex-wrap items-center gap-5 sm:gap-6 pt-7 border-t border-white/10">
                <div className="flex items-center gap-2.5">
                  <Settings className="size-5 sm:size-6 text-[#FF5A00] shrink-0 stroke-[1.8]" />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-300 leading-tight">
                    PRECISION<br />COMPONENTS
                  </span>
                </div>

                <div className="h-7 w-px bg-white/20 hidden sm:block" />

                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="size-5 sm:size-6 text-[#FF5A00] shrink-0 stroke-[1.8]" />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-300 leading-tight">
                    RELIABLE<br />PARTNERSHIP
                  </span>
                </div>

                <div className="h-7 w-px bg-white/20 hidden sm:block" />

                <div className="flex items-center gap-2.5">
                  <BarChart3 className="size-5 sm:size-6 text-[#FF5A00] shrink-0 stroke-[1.8]" />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-300 leading-tight">
                    REAL-WORLD<br />IMPACT
                  </span>
                </div>
              </div>
            </div>

            {/* ── RIGHT COLUMN (Contact Info taking full width) ── */}
            <div className="lg:col-span-7 lg:border-l lg:border-white/10 lg:pl-10 xl:pl-14 flex flex-col justify-center">
              {/* Eyebrow */}
              <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[#FF5A00] mb-4">
                <span className="h-[2px] w-7 bg-[#FF5A00] inline-block" />
                <span>CONTACT / AHMEDABAD</span>
              </div>

              {/* Company Name & Address */}
              <h3 className="font-sans text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight">
                Jay Tech Industries
              </h3>
              <address className="not-italic text-sm sm:text-base leading-relaxed text-slate-300 font-normal max-w-xl">
                A-54/1, Bileshwar Industrial Estate,<br />
                Opp. GVMM, Odhav,<br />
                Ahmedabad, Gujarat – 382415, India
              </address>

              {/* Phone Number */}
              <div className="mt-6 flex items-center gap-3">
                <Phone className="size-5 sm:size-6 text-[#FF5A00] shrink-0 stroke-[2.2]" />
                <a
                  href="tel:+919724324427"
                  className="font-sans text-2xl sm:text-3xl font-bold tracking-tight text-white hover:text-[#FF5A00] transition-colors"
                >
                  +91 97243 24427
                </a>
              </div>

              {/* 3 Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
                {/* Call Button (Solid Orange) */}
                <a
                  href="tel:+919724324427"
                  className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-md bg-[#FF5A00] hover:bg-[#e04e00] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                >
                  <Phone className="size-4 fill-white" />
                  <span>Call</span>
                </a>

                {/* Email Button (Outline) */}
                <a
                  href="mailto:info@jaytechindustries.com"
                  className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-md border border-slate-400/50 hover:border-white bg-transparent hover:bg-white/10 text-white text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  <Mail className="size-4" />
                  <span>Email</span>
                </a>

                {/* Get Directions Button (Outline) */}
                <a
                  href="https://maps.google.com/?q=A-54%2F1+Bileshwar+Industrial+Estate+Odhav+Ahmedabad"
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
            <span>© {new Date().getFullYear()} Jay Tech Industries</span>
            <span>Precision engineering · Odhav, Ahmedabad</span>
            <div className="flex items-center gap-2.5 text-slate-400">
              <span className="h-px w-6 bg-[#FF5A00] inline-block" />
              <span className="font-bold tracking-widest text-[11px] text-slate-300">BUILT ON PRECISION</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
