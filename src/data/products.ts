import heroImage from "@/assets/cnc-hero.jpg";
import componentsImage from "@/assets/precision-components.jpg";
import toolingImage from "@/assets/tooling-moulds.jpg";
import qualityImage from "@/assets/quality-inspection.jpg";

export interface ProductItem {
  name: string;
  desc: string;
  image: any;
  number: string;
  category?: string;
  thumb?: string;
}

export const productsData: ProductItem[] = [
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
