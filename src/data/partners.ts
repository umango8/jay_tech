export interface PartnerItem {
  id: string;
  name: string;
  category: string;
  tier: string;
  code: string;
}

export const partnersData: PartnerItem[] = [
  {
    id: "tata-motors",
    name: "Tata Motors",
    category: "Automotive OEM",
    tier: "Tier-1 Partner",
    code: "AUTO-01",
  },
  {
    id: "larsen-toubro",
    name: "Larsen & Toubro",
    category: "Heavy Engineering",
    tier: "Engineering Client",
    code: "ENG-02",
  },
  {
    id: "bosch-india",
    name: "Bosch India",
    category: "Precision Injection Systems",
    tier: "OEM Supplier",
    code: "SYST-03",
  },
  {
    id: "godrej-aerospace",
    name: "Godrej Aerospace",
    category: "Aero & Defense Tooling",
    tier: "Strategic Partner",
    code: "AERO-04",
  },
  {
    id: "mahindra",
    name: "Mahindra & Mahindra",
    category: "Automotive & Farm Equipment",
    tier: "Automotive OEM",
    code: "AUTO-05",
  },
  {
    id: "bharat-forge",
    name: "Bharat Forge",
    category: "Forging & Machining",
    tier: "Precision Tooling",
    code: "MACH-06",
  },
  {
    id: "schneider-electric",
    name: "Schneider Electric",
    category: "Switchgear & Enclosures",
    tier: "Moulding Client",
    code: "ELEC-07",
  },
  {
    id: "siemens-energy",
    name: "Siemens Energy",
    category: "Power & Turbines",
    tier: "Industrial Client",
    code: "TURB-08",
  },
  {
    id: "havells",
    name: "Havells India",
    category: "Electrical Moulds & Tooling",
    tier: "Consumer OEM",
    code: "ELEC-09",
  },
  {
    id: "adani-defense",
    name: "Adani Defense",
    category: "Aerospace Precision",
    tier: "Defense Client",
    code: "DEF-10",
  },
];
