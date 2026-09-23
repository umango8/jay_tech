export interface QualityPoint {
  title: string;
  desc: string;
}

export const qualityData = {
  kicker: "QUALITY",
  headlinePre: "CONFIDENCE AT EVERY",
  headlineHighlight: "CRITICAL DETAIL.",
  subtitle:
    "Our quality approach is grounded in what manufacturing demands: accurate features, consistent outcomes and solutions that work in practice.",
  mindset: {
    score: "99",
    label: "OUR MINDSET",
    heading: "Quality is engineered into the process.",
    subheading: "Not inspected in at the end.",
  },
  photoBadge: "PRECISION\nTODAY\nSTRONGER\nTOMORROW",
  verticalCaption: "BETTER · COMPONENTS · BRIGHTER · POSSIBILITIES",
  ctaPrimary: {
    label: "OUR QUALITY APPROACH",
    href: "#contact",
  },
  ctaSecondary: {
    label: "TALK TO AN EXPERT",
    href: "#contact",
  },
  points: [
    {
      title: "Accuracy",
      desc: "Attention to dimensions, geometry and functions fit.",
    },
    {
      title: "Consistency",
      desc: "Controlled execution for repeatable manufacturing outcomes.",
    },
    {
      title: "Engineering practicality",
      desc: "Solutions informed by real use, assembly and production realities.",
    },
  ] as QualityPoint[],
};
