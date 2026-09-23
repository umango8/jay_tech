export interface AboutStat {
  value: string;
  label: string;
}

export interface AboutCard {
  title: string;
  desc: string;
  linkText: string;
  linkHref: string;
  isAccent?: boolean;
}

export const aboutData = {
  eyebrow: "About Our Company",
  headline: "Precision Engineering & Manufacturing to Boost Your Production",
  stats: [
    { value: "10k+", label: "Components Delivered" },
    { value: "1.5k+", label: "Tooling & Moulds" },
    { value: "24.1k+", label: "Completed Projects" },
  ] as AboutStat[],
  cards: [
    {
      title: "Precision Machining",
      desc: "Our machining strategies are engineered to maximize precision and repeatability, ensuring tight tolerances and reliable assembly fit.",
      linkText: "Read More",
      linkHref: "#capabilities",
      isAccent: true,
    },
    {
      title: "Tooling & Moulds",
      desc: "Purpose-built dies, moulds, jigs, and fixtures developed with practical engineering to streamline high-volume production cycles.",
      linkText: "Read More",
      linkHref: "#products",
    },
    {
      title: "Manufacturing Scaling",
      desc: "Our end-to-end engineering support helps you scale components from prototyping to full batch production smoothly, ensuring sustainable quality control and on-time delivery.",
      linkText: "Read More",
      linkHref: "#quote",
    },
  ] as AboutCard[],
};
