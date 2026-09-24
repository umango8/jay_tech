export interface PartnerItem {
  id: string;
  name: string;
  category: string;
  tier: string;
  code: string;
  logo: string;
}

export const partnersData: PartnerItem[] = [
  {
    id: "isro",
    name: "ISRO",
    category: "Space & Defense Research",
    tier: "Strategic Client",
    code: "AERO-01",
    logo: "/images/partners/isro.webp",
  },
  {
    id: "lubi",
    name: "Lubi Pumps",
    category: "Pumping & Fluid Systems",
    tier: "Industry Partner",
    code: "PUMP-02",
    logo: "/images/partners/lubi.webp",
  },
  {
    id: "line-omatic",
    name: "Line Omatic",
    category: "Packaging & Converting Machinery",
    tier: "OEM Client",
    code: "MACH-03",
    logo: "/images/partners/line-omatic.webp",
  },
  {
    id: "steel-strips-group",
    name: "Steel Strips Group",
    category: "Automotive Wheel & Press Tooling",
    tier: "Automotive OEM",
    code: "AUTO-04",
    logo: "/images/partners/steel-strips-group.webp",
  },
  {
    id: "makewell",
    name: "Makewell",
    category: "Industrial Equipment & Tooling",
    tier: "Engineering Partner",
    code: "TOOL-05",
    logo: "/images/partners/makewell.webp",
  },
  {
    id: "inspiron",
    name: "Inspiron Engineering",
    category: "Textile Machinery & Precision Parts",
    tier: "Precision Partner",
    code: "PREC-06",
    logo: "/images/partners/inspiron.webp",
  },
  {
    id: "gratco",
    name: "Gratco",
    category: "Precision Engineering Components",
    tier: "Manufacturing Partner",
    code: "COMP-07",
    logo: "/images/partners/gratco.webp",
  },
];
