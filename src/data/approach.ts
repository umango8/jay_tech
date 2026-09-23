export interface ApproachPhase {
  phase: string;
  stepNumber: string;
  title: string;
  desc: string;
  isAccent?: boolean;
}

export const approachData = {
  badge: "Engineering Approach",
  title: "A Controlled Path from Drawing to Precision Component",
  description:
    "Beyond just machining metal, we execute a disciplined manufacturing workflow that ensures close tolerances, material integrity, and dependable real-world assembly fit.",
  indicatorBadge: {
    standard: "Standardized",
    controlled: "Controlled Process",
  },
  phases: [
    {
      phase: "Phase 01",
      stepNumber: "1",
      title: "Research & Analysis",
      desc: "We analyze application loads, tolerance criticalities, raw material specifications, and 2D/3D part drawings to define process parameters.",
      isAccent: true,
    },
    {
      phase: "Phase 02",
      stepNumber: "2",
      title: "Tooling & Process Design",
      desc: "Our team designs purpose-built jigs, tooling, and CNC toolpaths with practical engineering to eliminate variance during volume production.",
      isAccent: false,
    },
    {
      phase: "Phase 03",
      stepNumber: "3",
      title: "Prototype & CNC Machining",
      desc: "Execution across precision VMC, CNC, and wire-cut EDM machinery with continuous in-process dimensional monitoring and coordinate measurement.",
      isAccent: false,
    },
    {
      phase: "Phase 04",
      stepNumber: "4",
      title: "Final Inspection & Delivery",
      desc: "Thorough coordinate inspection reports, deburring, surface treatment, and secure batch packaging ready for immediate factory assembly.",
      isAccent: true,
    },
  ] as ApproachPhase[],
};
