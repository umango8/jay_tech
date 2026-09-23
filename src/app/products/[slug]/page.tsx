import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  FileCheck2,
  Layers,
  Phone,
  Ruler,
  ShieldCheck,
  Sparkles,
  Timer,
  Factory,
  Check,
  Send,
  Download,
} from "lucide-react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Eyebrow from "@/components/shared/Eyebrow";
import { Button } from "@/components/ui/button";
import {
  productsData,
  getProductBySlug,
  getAllProductSlugs,
  type ProductItem,
} from "@/data/products";
import { companyConfig } from "@/data/navigation";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found | Jay Tech Industries",
    };
  }

  return {
    title: `${product.name} | Precision Manufacturing | Jay Tech Industries`,
    description: `${product.desc} Engineered to ${product.tolerances} tolerance with ${product.materials}. Made in Ahmedabad, India.`,
    openGraph: {
      title: `${product.name} - Jay Tech Industries`,
      description: product.desc,
      type: "website",
    },
  };
}

const getImageSrc = (img: any): string =>
  img && typeof img === "object" && "src" in img ? img.src : img;

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  // Filter 3 related products
  const relatedProducts = productsData
    .filter((p) => p.slug !== product.slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-brand-orange selection:text-white">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content with top offset for fixed navbar */}
      <main className="flex-1 pt-24 lg:pt-28">
        {/* Breadcrumb Bar */}
        <div className="border-b border-border bg-secondary/40 py-3.5">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <nav
              aria-label="Breadcrumb"
              className="flex flex-wrap items-center justify-between gap-3 text-xs"
            >
              <ol className="flex items-center gap-2 text-muted-foreground font-medium">
                <li>
                  <Link
                    href="/"
                    className="hover:text-foreground transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li aria-hidden="true" className="text-border">
                  /
                </li>
                <li>
                  <Link
                    href="/#products"
                    className="hover:text-foreground transition-colors"
                  >
                    Products & Dies
                  </Link>
                </li>
                <li aria-hidden="true" className="text-border">
                  /
                </li>
                <li className="font-bold text-brand-orange truncate max-w-[200px] sm:max-w-none">
                  {product.name}
                </li>
              </ol>

              <Link
                href="/#products"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-brand-orange transition-colors"
              >
                <ArrowLeft className="size-3.5" /> Back to Catalog
              </Link>
            </nav>
          </div>
        </div>

        {/* Product Hero Section */}
        <section className="py-10 lg:py-16 border-b border-border">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
              {/* Left Column: Technical Overview & Highlights */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <Eyebrow text={`${product.category} // DIE #${product.number}`} />
                  <span className="rounded-md bg-secondary border border-border px-2.5 py-1 text-[11px] font-mono font-bold text-muted-foreground">
                    TOLERANCE: {product.tolerances}
                  </span>
                </div>

                <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-primary leading-tight">
                  {product.name}
                </h1>

                <p className="mt-5 text-base sm:text-lg leading-relaxed text-muted-foreground">
                  {product.desc}
                </p>

                <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                  {product.overview}
                </p>

                {/* Quick Spec Highlights Grid */}
                <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  <div className="rounded-[8px] sm:rounded-[16px] border border-border bg-secondary/50 p-4 transition-all hover:border-brand-orange/40 hover:bg-secondary/80">
                    <div className="flex items-center gap-2 text-brand-orange mb-1.5">
                      <Ruler className="size-4" />
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground">
                        Tolerance
                      </span>
                    </div>
                    <div className="text-sm font-bold text-primary font-mono">
                      {product.tolerances}
                    </div>
                  </div>

                  <div className="rounded-[8px] sm:rounded-[16px] border border-border bg-secondary/50 p-4 transition-all hover:border-brand-orange/40 hover:bg-secondary/80">
                    <div className="flex items-center gap-2 text-brand-orange mb-1.5">
                      <Layers className="size-4" />
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground">
                        Material
                      </span>
                    </div>
                    <div className="text-sm font-bold text-primary truncate" title={product.materials}>
                      {product.materials.split(",")[0]}
                    </div>
                  </div>

                  <div className="rounded-[8px] sm:rounded-[16px] border border-border bg-secondary/50 p-4 transition-all hover:border-brand-orange/40 hover:bg-secondary/80">
                    <div className="flex items-center gap-2 text-brand-orange mb-1.5">
                      <ShieldCheck className="size-4" />
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground">
                        Hardness
                      </span>
                    </div>
                    <div className="text-sm font-bold text-primary font-mono truncate" title={product.hardness}>
                      {product.hardness.split("(")[0]}
                    </div>
                  </div>

                  <div className="rounded-[8px] sm:rounded-[16px] border border-border bg-secondary/50 p-4 transition-all hover:border-brand-orange/40 hover:bg-secondary/80">
                    <div className="flex items-center gap-2 text-brand-orange mb-1.5">
                      <Timer className="size-4" />
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground">
                        Lead Time
                      </span>
                    </div>
                    <div className="text-sm font-bold text-primary">
                      {product.leadTime}
                    </div>
                  </div>
                </div>

                {/* Primary Action Row */}
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Button asChild size="lg" variant="orange">
                    <a href="#inquire" className="flex items-center gap-2 font-bold">
                      Request Quotation for {product.name}
                      <ArrowRight className="size-4" />
                    </a>
                  </Button>

                  <Button asChild size="lg" variant="outline" className="border-border">
                    <a
                      href={`tel:${companyConfig.phoneRaw}`}
                      className="flex items-center gap-2 font-bold text-primary hover:text-brand-orange"
                    >
                      <Phone className="size-4 text-brand-orange" />
                      Speak to Technical Sales
                    </a>
                  </Button>
                </div>
              </div>

              {/* Right Column: Visual Product Showcase */}
              <div className="lg:col-span-5">
                <div className="relative group overflow-hidden rounded-[8px] sm:rounded-[16px] border border-border bg-primary/95 shadow-xl">
                  {/* Aspect Ratio Frame */}
                  <div className="relative h-[360px] sm:h-[460px] w-full overflow-hidden bg-slate-900">
                    <img
                      src={getImageSrc(product.image)}
                      alt={product.name}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />

                    {/* Corner Engineering Crosshairs */}
                    <div className="absolute top-4 left-4 font-mono text-[10px] text-white/70 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
                      ISO 9001:2015 CERTIFIED
                    </div>

                    <div className="absolute top-4 right-4 font-mono text-[10px] text-brand-orange bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-md border border-brand-orange/30 font-bold">
                      VERIFIED DIE #{product.number}
                    </div>

                    {/* Bottom Metadata Overlay */}
                    <div className="absolute bottom-4 inset-x-4 p-4 rounded-[8px] sm:rounded-[12px] bg-background/90 backdrop-blur-md border border-border/80 text-foreground">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-muted-foreground">INSPECTION METHOD</span>
                        <span className="font-bold text-primary">{product.inspection}</span>
                      </div>
                      <div className="mt-1 flex items-center justify-between text-xs font-mono">
                        <span className="text-muted-foreground">SURFACE TEXTURE</span>
                        <span className="font-bold text-brand-orange">{product.surfaceFinish}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sub-Card Plant Guarantee */}
                <div className="mt-4 rounded-[8px] sm:rounded-[16px] border border-border bg-secondary/50 p-4 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2.5 text-muted-foreground">
                    <Factory className="size-4 text-brand-orange" />
                    <span>Engineered at Odhav GIDC, Ahmedabad Plant • Est. 2007</span>
                  </div>
                  <span className="font-mono font-bold text-brand-orange">100% QA</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Data Specification Sheet */}
        <section className="py-14 lg:py-20 bg-secondary/40 border-b border-border">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mb-10 max-w-3xl">
              <Eyebrow text="ENGINEERING SPECIFICATION SHEET" />
              <h2 className="mt-3 font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-primary">
                Technical Data & Machining Tolerances
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                All dies and tooling components undergo rigorous metallurgical testing, hardness verification, and multi-axis CMM dimensional auditing prior to dispatch.
              </p>
            </div>

            {/* Spec Table Card */}
            <div className="overflow-hidden rounded-[8px] sm:rounded-[16px] border border-border bg-background shadow-xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm" role="table">
                  <thead className="border-b border-border bg-secondary/70 text-xs font-bold uppercase tracking-wider text-primary">
                    <tr>
                      <th scope="col" className="px-6 py-4">
                        Engineering Parameter
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Jay Tech Industries Standard Specification
                      </th>
                      <th scope="col" className="px-6 py-4 hidden sm:table-cell">
                        Compliance / Verification
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border font-mono text-xs sm:text-sm">
                    {product.technicalSpecs.map((spec, idx) => (
                      <tr
                        key={spec.label}
                        className={idx % 2 === 0 ? "bg-background" : "bg-secondary/20"}
                      >
                        <td className="px-6 py-4 font-semibold text-primary font-sans">
                          {spec.label}
                        </td>
                        <td className="px-6 py-4 font-bold text-foreground">
                          {spec.value}
                        </td>
                        <td className="px-6 py-4 text-muted-foreground hidden sm:table-cell font-sans">
                          <span className="inline-flex items-center gap-1.5 text-xs text-brand-orange font-medium">
                            <CheckCircle2 className="size-3.5" /> Verified
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Table Footer Banner */}
              <div className="border-t border-border bg-secondary/50 px-6 py-3.5 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <FileCheck2 className="size-4 text-brand-orange" />
                  <span>Custom engineering drawings (STEP, IGES, DXF, DWG) accepted for quotation.</span>
                </div>
                <a
                  href="#inquire"
                  className="font-bold text-brand-orange hover:underline inline-flex items-center gap-1"
                >
                  Upload 3D CAD Data <ArrowRight className="size-3" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features & Engineering Advantages */}
        <section className="py-14 lg:py-20 border-b border-border">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mb-10 max-w-3xl">
              <Eyebrow text="TOOLING EXCELLENCE" />
              <h2 className="mt-3 font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-primary">
                Key Engineering Advantages
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Engineered with high-durability alloy tool steels to guarantee long operational lifespan, minimal tool wear, and repeatable cycle accuracy.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {product.keyFeatures.map((feature, idx) => (
                <div
                  key={idx}
                  className="rounded-[8px] sm:rounded-[16px] border border-border bg-card p-6 shadow-xs transition-all hover:border-brand-orange/40 hover:shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-orange/10 text-brand-orange font-display font-bold text-sm">
                      0{idx + 1}
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold uppercase tracking-tight text-primary">
                        Feature Advantage #{idx + 1}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {feature}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications & Industry Use Cases */}
        <section className="py-14 lg:py-20 bg-secondary/40 border-b border-border">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-5">
                <Eyebrow text="SECTOR DEPLOYMENT" />
                <h2 className="mt-3 font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-primary">
                  Target Industries & End-Use Applications
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Our tooling solutions are trusted by tier-1 automotive suppliers, pharmaceutical medical packaging manufacturers, and industrial engineering firms across Gujarat and Pan-India.
                </p>

                <div className="mt-6 flex flex-wrap gap-2.5">
                  <div className="rounded-full bg-brand-orange/10 border border-brand-orange/30 px-3.5 py-1 text-xs font-bold text-brand-orange">
                    High Production Batches
                  </div>
                  <div className="rounded-full bg-secondary border border-border px-3.5 py-1 text-xs font-bold text-foreground">
                    Prototype Tooling Available
                  </div>
                  <div className="rounded-full bg-secondary border border-border px-3.5 py-1 text-xs font-bold text-foreground">
                    CMM Verified
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="grid gap-3 sm:grid-cols-2">
                  {product.applications.map((app, idx) => (
                    <div
                      key={idx}
                      className="rounded-[8px] sm:rounded-[16px] border border-border bg-background p-5 flex items-center gap-3.5 transition-all hover:border-brand-orange/30"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-secondary text-brand-orange">
                        <Check className="size-4" />
                      </div>
                      <span className="text-sm font-semibold text-primary">
                        {app}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Direct RFQ / Inquiry Section */}
        <section id="inquire" className="py-16 lg:py-24 border-b border-border scroll-mt-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="rounded-[8px] sm:rounded-[16px] border border-border bg-card p-6 sm:p-10 lg:p-12 shadow-md">
              <div className="grid gap-10 lg:grid-cols-12">
                {/* Form Info Side */}
                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div>
                    <Eyebrow text="REQUEST FOR QUOTATION (RFQ)" />
                    <h2 className="mt-3 font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-primary">
                      Order or Inquire for {product.name}
                    </h2>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      Submit your 2D/3D part drawings or tooling specs. Our engineering team reviews cavity requirements, cooling systems, and cycle goals to deliver a formal proposal within 24 hours.
                    </p>

                    <div className="mt-8 space-y-4 text-xs font-medium text-foreground">
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary text-brand-orange">
                          <CheckCircle2 className="size-4" />
                        </div>
                        <span>Fast Turnaround: Quotes delivered within 24 hours</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary text-brand-orange">
                          <FileCheck2 className="size-4" />
                        </div>
                        <span>NDA Protected: Complete CAD confidentiality guaranteed</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary text-brand-orange">
                          <Phone className="size-4" />
                        </div>
                        <span>Direct Engineering Line: +91 97243 24427</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-border">
                    <p className="text-xs text-muted-foreground">
                      Factory: {companyConfig.address}
                    </p>
                  </div>
                </div>

                {/* Actual Inquiry Form */}
                <div className="lg:col-span-7">
                  <form
                    action="https://formsubmit.co/info@jaytechindustries.com"
                    method="POST"
                    className="grid gap-4 sm:grid-cols-2"
                  >
                    {/* Hidden Product Context */}
                    <input
                      type="hidden"
                      name="_subject"
                      value={`Product RFQ: ${product.name} (Die #${product.number})`}
                    />
                    <input
                      type="hidden"
                      name="Product_Category"
                      value={product.category}
                    />

                    <label className="grid gap-1.5 text-xs font-bold uppercase text-primary">
                      Full Name *
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="e.g. Rajesh Patel"
                        className="h-11 rounded-[8px] sm:rounded-[12px] border border-input bg-background px-3.5 text-sm font-normal normal-case outline-none transition focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20"
                      />
                    </label>

                    <label className="grid gap-1.5 text-xs font-bold uppercase text-primary">
                      Company Name *
                      <input
                        type="text"
                        name="company"
                        required
                        placeholder="e.g. Precision Auto Components Ltd."
                        className="h-11 rounded-[8px] sm:rounded-[12px] border border-input bg-background px-3.5 text-sm font-normal normal-case outline-none transition focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20"
                      />
                    </label>

                    <label className="grid gap-1.5 text-xs font-bold uppercase text-primary">
                      Work Email *
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="name@company.com"
                        className="h-11 rounded-[8px] sm:rounded-[12px] border border-input bg-background px-3.5 text-sm font-normal normal-case outline-none transition focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20"
                      />
                    </label>

                    <label className="grid gap-1.5 text-xs font-bold uppercase text-primary">
                      Phone / Mobile *
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="+91 98765 43210"
                        className="h-11 rounded-[8px] sm:rounded-[12px] border border-input bg-background px-3.5 text-sm font-normal normal-case outline-none transition focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20"
                      />
                    </label>

                    <label className="grid gap-1.5 text-xs font-bold uppercase text-primary">
                      Target Quantity / Volume
                      <input
                        type="text"
                        name="volume"
                        placeholder="e.g. 1 Prototype Die / 100k Shots/yr"
                        className="h-11 rounded-[8px] sm:rounded-[12px] border border-input bg-background px-3.5 text-sm font-normal normal-case outline-none transition focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20"
                      />
                    </label>

                    <label className="grid gap-1.5 text-xs font-bold uppercase text-primary">
                      Required Lead Time
                      <input
                        type="text"
                        name="lead_time"
                        defaultValue={product.leadTime}
                        className="h-11 rounded-[8px] sm:rounded-[12px] border border-input bg-background px-3.5 text-sm font-normal normal-case outline-none transition focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20"
                      />
                    </label>

                    <label className="grid gap-1.5 text-xs font-bold uppercase text-primary sm:col-span-2">
                      Upload CAD / Drawing (STEP, PDF, DWG, ZIP)
                      <input
                        type="file"
                        name="drawing"
                        accept=".step,.stp,.iges,.igs,.dxf,.dwg,.pdf,.zip"
                        className="h-11 rounded-[8px] sm:rounded-[12px] border border-dashed border-input bg-secondary/50 p-2 text-xs font-normal normal-case file:mr-3 file:border-0 file:bg-primary file:px-3 file:py-1 file:text-primary-foreground file:rounded-md file:text-xs"
                      />
                    </label>

                    <label className="grid gap-1.5 text-xs font-bold uppercase text-primary sm:col-span-2">
                      Project Notes / Technical Requirements
                      <textarea
                        name="notes"
                        rows={4}
                        defaultValue={`Inquiring regarding ${product.name} (Die #${product.number}). Target tolerance: ${product.tolerances}.`}
                        className="resize-none rounded-[8px] sm:rounded-[16px] border border-input bg-background p-3 text-sm font-normal normal-case outline-none transition focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20"
                      />
                    </label>

                    <div className="sm:col-span-2 flex flex-wrap items-center justify-between gap-4 pt-2">
                      <Button type="submit" size="lg" variant="orange" className="font-bold">
                        <Send className="size-4" /> Send Request For Quotation
                      </Button>
                      <span className="text-xs text-muted-foreground font-mono">
                        Direct Email: info@jaytechindustries.com
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Products Showcase */}
        {relatedProducts.length > 0 && (
          <section className="py-14 lg:py-20 bg-secondary/30">
            <div className="mx-auto max-w-7xl px-5 lg:px-8">
              <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
                <div>
                  <Eyebrow text="EXPLORE OTHER CAPABILITIES" />
                  <h2 className="mt-2 font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-primary">
                    Related Tooling & Machining Dies
                  </h2>
                </div>
                <Link
                  href="/#products"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-orange hover:underline"
                >
                  View All 10 Products <ArrowRight className="size-3.5" />
                </Link>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {relatedProducts.map((rel) => (
                  <article
                    key={rel.slug}
                    className="group relative h-[380px] overflow-hidden rounded-[8px] sm:rounded-[16px] bg-primary border border-border shadow-sm flex flex-col justify-end p-6 transition-all duration-300 hover:shadow-xl"
                  >
                    <img
                      src={getImageSrc(rel.image)}
                      alt={rel.name}
                      className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105 opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />

                    <div className="relative z-10 text-primary-foreground">
                      <span className="inline-block mb-1.5 rounded-md bg-brand-orange px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white">
                        {rel.category}
                      </span>
                      <h3 className="font-display text-xl font-bold uppercase leading-tight">
                        <Link
                          href={`/products/${rel.slug}`}
                          className="hover:text-brand-orange transition-colors"
                        >
                          {rel.name}
                        </Link>
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-primary-foreground/80 line-clamp-2">
                        {rel.desc}
                      </p>
                      <div className="mt-4 flex items-center justify-between pt-3 border-t border-white/15 text-xs font-bold">
                        <Link
                          href={`/products/${rel.slug}`}
                          className="flex items-center gap-1 text-primary-foreground hover:text-brand-orange transition-colors"
                        >
                          View Details <ArrowRight className="size-3" />
                        </Link>
                        <span className="text-[10px] font-mono text-white/60">
                          {rel.tolerances}
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
