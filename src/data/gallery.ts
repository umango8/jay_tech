import heroImage from "@/assets/cnc-hero.webp";
import componentsImage from "@/assets/precision-components.webp";
import toolingImage from "@/assets/tooling-moulds.webp";
import qualityImage from "@/assets/quality-inspection.webp";

export interface GalleryItem {
  image: any;
  alt: string;
  className: string;
}

export const galleryData = {
  label: "Work Gallery",
  title: "Precision, made visible.",
  items: [
    {
      image: componentsImage,
      alt: "Precision machined components",
      className: "col-span-2 row-span-2 h-full min-h-[420px] w-full object-cover",
    },
    {
      image: toolingImage,
      alt: "Dies, moulds and fixtures",
      className: "h-52 w-full object-cover lg:h-full",
    },
    {
      image: heroImage,
      alt: "CNC machining process",
      className: "h-52 w-full object-cover lg:h-full",
    },
    {
      image: qualityImage,
      alt: "Inspection process",
      className: "col-span-2 h-52 w-full object-cover lg:h-full",
    },
  ] as GalleryItem[],
};
