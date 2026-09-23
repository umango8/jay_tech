export interface CoordinateMetric {
  label: string;
  value: string;
}

export const heroData = {
  eyebrow: "Established in 2007 · Ahmedabad Precision Engineering",
  headlinePre: "Precision engineering built for",
  headlineHighlight: "real-world",
  headlinePost: "manufacturing.",
  subtitle:
    "Established in 2007. Precision machining, tools, dies, moulds, fixtures and engineering solutions from Ahmedabad.",
  primaryCta: {
    label: "Request a Quote",
    href: "#quote",
  },
  secondaryCta: {
    label: "Explore Products",
    href: "#products",
  },
  coordinates: [
    { label: "Established", value: "2007" },
    { label: "Coordinate", value: "AHMEDABAD" },
    { label: "Discipline", value: "PRECISION" },
    { label: "Focus", value: "PRACTICALITY" },
  ] as CoordinateMetric[],
};
