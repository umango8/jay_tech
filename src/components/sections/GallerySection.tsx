import SectionTitle from "@/components/shared/SectionTitle";
import { galleryData } from "@/data/gallery";

const getImageSrc = (img: any): string =>
  img && typeof img === "object" && "src" in img ? img.src : img;

export default function GallerySection() {
  return (
    <section className="border-b border-border bg-background py-[76px]">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle label={galleryData.label} title={galleryData.title} />
        <div className="mt-14 grid grid-cols-2 gap-3 lg:grid-cols-4 lg:grid-rows-2">
          {galleryData.items.map((item, index) => (
            <img
              key={index}
              src={getImageSrc(item.image)}
              alt={item.alt}
              loading="lazy"
              width={1408}
              height={1008}
              className={item.className}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
