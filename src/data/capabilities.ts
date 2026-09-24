export interface CapabilityItem {
  number: string;
  category: string;
  title: string;
  desc: string;
  image: string;
}

export const capabilitiesData = {
  eyebrow: "Capabilities",
  titlePre: "From Drawing To",
  titlePost: "Dependable Component.",
  subtitle: "Precision capabilities for a stronger tomorrow",
  slogan: ["Ideas", "Materialise", "Industries", "Move Forward"],
  footerTagline: "Built on precision, driven by possibilities.",
  items: [
    {
      number: "01",
      category: "Machining",
      title: "CNC / VMC Machining",
      desc: "High-precision machining for complex geometries.",
      image: "/images/capabilities/cnc-machining.webp",
    },
    {
      number: "02",
      category: "Cutting",
      title: "EDM / Wire Cutting",
      desc: "Intricate profiles. Exceptional accuracy.",
      image: "/images/capabilities/edm-wire-cutting.webp",
    },
    {
      number: "03",
      category: "Tooling",
      title: "Tool & Die Making",
      desc: "Engineered for performance and longevity.",
      image: "/images/capabilities/tool-die-making.webp",
    },
    {
      number: "04",
      category: "Manufacturing",
      title: "Mould Manufacturing",
      desc: "Precision moulds for consistent, high-quality output.",
      image: "/images/capabilities/mould-manufacturing.webp",
    },
    {
      number: "05",
      category: "Fabrication",
      title: "Jig & Fixture Manufacturing",
      desc: "Custom solutions for greater efficiency.",
      image: "/images/capabilities/jig-fixture.webp",
    },
    {
      number: "06",
      category: "Components",
      title: "Precision Components",
      desc: "Small parts. Big possibilities.",
      image: "/images/capabilities/precision-components.webp",
    },
  ] as CapabilityItem[],
};
