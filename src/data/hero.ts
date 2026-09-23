export interface CoordinateMetric {
  label: string;
  value: string;
}

export const heroData = {
  eyebrow: "Ahmedabad · Precision Engineering",
  headlinePre: "Precision engineering built for",
  headlineHighlight: "real-world",
  headlinePost: "manufacturing.",
  subtitle:
    "Precision machining, tools, dies, moulds, fixtures and engineering solutions from Ahmedabad.",
  primaryCta: {
    label: "Request a Quote",
    href: "#quote",
  },
  secondaryCta: {
    label: "Explore Products",
    href: "#products",
  },
  coordinates: [
    { label: "Coordinate", value: "AHMEDABAD" },
    { label: "Discipline", value: "PRECISION" },
    { label: "Focus", value: "PRACTICALITY" },
  ] as CoordinateMetric[],
};
