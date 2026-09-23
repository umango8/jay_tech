"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import SectionTitle from "@/components/shared/SectionTitle";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { productsData } from "@/data/products";

const getImageSrc = (img: any): string =>
  img && typeof img === "object" && "src" in img ? img.src : img;

export default function ProductsSection() {
  const [productCarouselApi, setProductCarouselApi] = useState<CarouselApi>();

  return (
    <section
      id="products"
      className="border-b border-border bg-secondary/60 py-[76px] overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-12 lg:mb-14">
          <SectionTitle
            label="Our Products"
            title="Built for the work that matters."
            copy="A focused range of precision-engineered components, production tooling and manufacturing solutions."
          />
        </div>

        <div className="relative">
          {/* Previous Button */}
          <button
            type="button"
            onClick={() => productCarouselApi?.scrollPrev()}
            className="absolute left-0 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20 size-12 sm:size-14 rounded-none bg-brand-orange text-white shadow-2xl transition-all duration-200 hover:scale-105 hover:brightness-110 active:scale-95 flex items-center justify-center cursor-pointer border border-brand-orange"
            aria-label="Previous product"
          >
            <ChevronLeft className="size-6 sm:size-7 text-white" />
          </button>

          {/* Next Button */}
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
              {productsData.map((item) => (
                <CarouselItem
                  key={item.name}
                  className="pl-5 basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <article className="group relative h-[480px] sm:h-[500px] overflow-hidden rounded-[8px] sm:rounded-[16px] bg-primary shadow-sm border border-border flex flex-col justify-end p-7 transition-all duration-500 hover:shadow-xl">
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
                        <Link
                          href={`/products/${item.slug}`}
                          className="hover:text-brand-orange transition-colors"
                        >
                          {item.name}
                        </Link>
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-primary-foreground/80 line-clamp-2">
                        {item.desc}
                      </p>
                      <div className="mt-6 flex items-center gap-5 pt-5 border-t border-white/15">
                        <Link
                          href={`/products/${item.slug}`}
                          className="flex items-center gap-1.5 text-xs font-bold text-primary-foreground/90 transition hover:text-brand-orange"
                        >
                          View Details <ChevronRight className="size-3.5" />
                        </Link>
                        <Link
                          href={`/products/${item.slug}#inquire`}
                          className="flex items-center gap-1.5 text-xs font-bold text-brand-orange transition hover:brightness-110"
                        >
                          Get a Quote <ArrowRight className="size-3.5" />
                        </Link>
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
  );
}
