export interface ProductSpecItem {
  label: string;
  value: string;
}

export interface ProductItem {
  slug: string;
  name: string;
  desc: string;
  overview: string;
  image: any;
  number: string;
  category: string;
  thumb?: string;
  tolerances: string;
  materials: string;
  hardness: string;
  surfaceFinish: string;
  maxDimensions: string;
  inspection: string;
  leadTime: string;
  keyFeatures: string[];
  applications: string[];
  technicalSpecs: ProductSpecItem[];
  indiamartId?: string;
  price?: string;
  usage?: string;
}

export const productsData: ProductItem[] = [
  {
    slug: "injection-moulding-die",
    name: "Injection Moulding Die",
    desc: "Custom engineered injection moulding dies designed for high repeatability, thermal balance, and tight-tolerance plastic components.",
    overview:
      "Our injection moulding dies are purpose-built for high-volume thermoplastic and engineering polymer processing. We combine hot runner/cold runner flow analysis, precision CNC electrode EDM machining, and hardened cavity inserts to deliver minimal flash, exceptional thermal consistency, and dependable cycle times across millions of shots.",
    image: "/images/products/injection-moulding-die.webp",
    thumb: "/images/products/injection-moulding-die.webp",
    number: "01",
    category: "Moulding Dies",
    tolerances: "±0.005 mm",
    materials: "H13, P20, 2311, 2738, NAK80",
    hardness: "48 – 54 HRC (Vacuum Treated)",
    surfaceFinish: "SPI A2 Mirror Polish / VDI Texture",
    maxDimensions: "Up to 1200 × 900 × 750 mm",
    inspection: "100% CMM & Coordinate Measurement",
    leadTime: "2 – 4 Weeks",
    price: "Get Best Price",
    indiamartId: "11441438773",
    usage: "Molding purpose for making diverse types of components.",
    keyFeatures: [
      "Optimized conformal cooling runner channels for shortened cycle times",
      "Interchangeable hardened core and cavity inserts for rapid maintenance",
      "High dimensional repeatability for tight-tolerance automotive & medical housings",
      "Precision guided ejector plate system eliminating pin sticking and part distortion",
    ],
    applications: [
      "Automotive Interior & Under-the-Hood Components",
      "Medical Diagnostic Housings & Consumables",
      "Precision Electrical & Switchgear Enclosures",
      "Industrial Appliance Casings & Brackets",
    ],
    technicalSpecs: [
      { label: "Mould Type", value: "Multi-Cavity High-Precision Injection Mould" },
      { label: "Core & Cavity Steel", value: "AISI H13 / DIN 1.2344 Pre-hardened & Nitrided" },
      { label: "Mould Base", value: "Standard Hasco / LKM C45 / P20" },
      { label: "Runner System", value: "Hot Runner / Sub-Gate / Direct Sprue" },
      { label: "Cooling Circuit", value: "Baffled Conformal High-Flow Water Channels" },
      { label: "Ejection Mechanism", value: "Guided Ejector Pins / Stripper Plate / Air Assist" },
      { label: "Expected Tool Life", value: "1,000,000+ Shots Guaranteed" },
      { label: "IndiaMART ID", value: "11441438773" },
    ],
  },
  {
    slug: "rubber-die-moulding",
    name: "Rubber Die Moulding",
    desc: "Custom engineered rubber die moulding tooling built for elastomeric parts, compression and transfer molding with heat-treated cavity plates and excellent thermal stability.",
    overview:
      "Manufactured with deep industry domain expertise, our rubber die moulding systems are crafted to endure severe cyclic thermal and mechanical stresses in hydraulic presses. Each die features CNC-contoured cavities, precision tear-trim flash grooves, and anti-corrosive hard chrome plating to yield pristine parting seams and rapid demoulding for automotive and industrial elastomeric components.",
    image: "/images/products/rubber-die-moulding.webp",
    thumb: "/images/products/rubber-die-moulding.webp",
    number: "02",
    category: "Moulding Dies",
    tolerances: "±0.010 mm",
    materials: "EN31, H13, OHNS, C45 Hardened Tool Steel",
    hardness: "54 – 58 HRC (Vacuum Hardened)",
    surfaceFinish: "Hard Chrome Plating / Ground Finish",
    maxDimensions: "Up to 900 × 750 × 500 mm",
    inspection: "Optical Profile Projector & Vernier Height Gauge",
    leadTime: "2 – 3 Weeks",
    price: "Get Best Quote",
    indiamartId: "2859740029433",
    usage: "Molding of different rubber and elastomeric products.",
    keyFeatures: [
      "Engineered for compression, transfer, and rubber injection moulding",
      "Thermal-shock resistant die steel for consistent high-temperature curing (up to 220°C)",
      "Hard chrome plated cavity surfaces for effortless part release and rust prevention",
      "Optimized venting channels and tear-trim grooves minimizing deflashing costs",
    ],
    applications: [
      "Automotive Oil Seals, Gaskets, Bellows & Dust Boots",
      "Industrial Vibration Dampers & Heavy Engine Bushings",
      "Fluid Handling O-Rings, Diaphragms & Flange Packings",
      "Heavy Machinery Rubber-to-Metal Bonded Mounts",
    ],
    technicalSpecs: [
      { label: "Mould Classification", value: "Compression / Transfer Rubber Die" },
      { label: "Plate Material", value: "EN31 / H13 / OHNS Hardened Steel" },
      { label: "Die Heating Method", value: "Electrically Heated Platens / Steam Platens" },
      { label: "Cavity Layout", value: "Single / Multi-Cavity High-Density Array" },
      { label: "Operating Temperature", value: "Up to 220°C Continuous Press Operation" },
      { label: "Expected Tool Life", value: "500,000+ Press Cycles" },
      { label: "IndiaMART ID", value: "2859740029433" },
    ],
  },
  {
    slug: "sheet-metal-cutting-die",
    name: "Sheet Metal Cutting Die",
    desc: "High-tonnage blanking, piercing, and progressive cutting dies engineered for clean shear edges, zero burrs, and high-volume stamping runs.",
    overview:
      "Jay Tech Industries builds precision progressive, compound, and single-operation sheet metal cutting dies for automotive stampings, electrical terminals, and sheet metal hardware. We employ cryogenic vacuum heat treatment on D2/D3 die plates and carbide inserts to ensure razor-sharp shear lines and extended regrind intervals.",
    image: "/images/products/sheet-metal-cutting-die.webp",
    thumb: "/images/products/sheet-metal-cutting-die.webp",
    number: "03",
    category: "Cutting Dies",
    tolerances: "±0.005 mm",
    materials: "AISI D2, D3, HCHCr, Tungsten Carbide Inserts",
    hardness: "60 – 62 HRC (Cryogenic Vacuum Quenched)",
    surfaceFinish: "Micro-Ground Cutting Faces (Ra 0.2 µm)",
    maxDimensions: "Up to 1500 × 800 mm Die Set",
    inspection: "Optical Profile Projector & Hardness Verification",
    leadTime: "2 – 3 Weeks",
    price: "Get Best Price",
    indiamartId: "11441461848",
    usage: "Blanking, piercing, and precision cutting of sheet metal components.",
    keyFeatures: [
      "Cryogenically treated D2/D3 tool steel for exceptional wear resistance",
      "Precision clearance wire-EDM profiling eliminating cutting burrs",
      "Interchangeable punch and die segments for easy sharpening and maintenance",
      "High-tensile die sets with guided pillars and bronze/ball bushings",
    ],
    applications: [
      "Automotive Chassis Brackets & Body Panels",
      "Electrical Switchgear Terminals & Busbars",
      "Industrial Machinery Enclosures & Mounting Flanges",
      "Paper, Plastic & Packaging Stamping",
    ],
    technicalSpecs: [
      { label: "Die Category", value: "Compound, Progressive & Blanking Cutting Die" },
      { label: "Punch & Die Steel", value: "AISI D2 / D3 High-Carbon High-Chrome" },
      { label: "Die Set Material", value: "Stress-Relieved C45 Heavy Steel Plates" },
      { label: "Guide System", value: "Demountable Ball Bushing Guide Pillars" },
      { label: "Stripper Type", value: "Spring-Loaded Polyurethane / Mechanical Stripper" },
      { label: "Sheet Thickness", value: "0.2 mm to 6.0 mm (CRCA, SS, Brass, Copper)" },
      { label: "Expected Tool Life", value: "500,000+ Punch Cycles" },
      { label: "IndiaMART ID", value: "11441461848" },
    ],
  },
  {
    slug: "blow-moulding-die",
    name: "Blow Moulding Die",
    desc: "Purpose-built blow moulding tooling for durable, uniform wall-thickness bottles, containers, and industrial packaging.",
    overview:
      "Jay Tech Industries designs and manufactures high-performance extrusion and stretch blow moulding dies. We engineer precision pinch-off cut-offs, rapid neck-ring calibration, and optimized cavity venting to guarantee uniform material distribution, structural seam integrity, and leak-free closures for high-speed automated packaging lines.",
    image: "/images/products/blow-moulding-die.webp",
    thumb: "/images/products/blow-moulding-die.webp",
    number: "04",
    category: "Moulding Dies",
    tolerances: "±0.008 mm",
    materials: "Aluminium 7075-T6, Beryllium Copper, P20",
    hardness: "Hard Anodized / 38 – 42 HRC Inserts",
    surfaceFinish: "Micro-sandblasted Cavity Venting",
    maxDimensions: "Up to 1000 × 700 × 600 mm",
    inspection: "Optical Contour Projector & CMM",
    leadTime: "2 – 3 Weeks",
    price: "Get Best Price",
    indiamartId: "11441433788",
    usage: "Manufacturing of plastic and automobile rubber components.",
    keyFeatures: [
      "Hardened steel/beryllium copper pinch-off inserts for durable seam life",
      "High thermal conductivity aluminium cavities for fast cycle heat extraction",
      "Balanced bottom blow-pin cooling to prevent base warpage",
      "Integrated micro-venting slots preventing trapped air bubbles",
    ],
    applications: [
      "Automotive Fluid Reservoirs & Coolant Tanks",
      "Pharmaceutical Bottles & Cleanroom Containers",
      "Agrochemical & Heavy-Duty Chemical Jerrycans",
      "FMCG Consumer Personal Care Packaging",
    ],
    technicalSpecs: [
      { label: "Mould Category", value: "Extrusion Blow Mould (EBM) / Stretch Blow (ISBM)" },
      { label: "Cavity Body", value: "High-Strength Aircraft Grade Aluminium 7075" },
      { label: "Pinch-Off Steel", value: "Beryllium Copper (CuBe) / Hardened D2 Steel" },
      { label: "Cooling Medium", value: "High-Pressure Chilled Water Channels" },
      { label: "Parison Control", value: "Compatible with MOOG / B&R Electronic Wall Controls" },
      { label: "Neck Ring Insert", value: "Hardened Stainless Steel 420 (50 HRC)" },
      { label: "Expected Tool Life", value: "2,000,000+ Bottles" },
      { label: "IndiaMART ID", value: "11441433788" },
    ],
  },
  {
    slug: "vmc-machining-job-work",
    name: "VMC Machining Job Work",
    desc: "High-precision 3-axis and 4-axis Vertical Machining Center contract job work for complex geometric profiling, prototypes, and production volumes.",
    overview:
      "Jay Tech Industries delivers end-to-end CNC/VMC machining services utilizing rigid vertical machining centers. We specialize in intricate contour milling, high-speed tapping, and precision boring across aluminium alloys, stainless steel, die steels, and engineering plastics for OEM component manufacturing.",
    image: "/images/products/vmc-machining-job-work.webp",
    thumb: "/images/products/vmc-machining-job-work.webp",
    number: "05",
    category: "Job Work",
    tolerances: "±0.005 mm",
    materials: "Aluminium (6061/7075), SS304/316, EN Series, Brass, P20",
    hardness: "As Specified (Annealed to 60 HRC Hard Milling)",
    surfaceFinish: "Ra 0.4 µm to Ra 1.6 µm Machined Finish",
    maxDimensions: "Travel X: 1100 mm, Y: 600 mm, Z: 600 mm",
    inspection: "CMM, Height Master, Mitutoyo Bore Gauges",
    leadTime: "3 – 7 Days (Batch Dependent)",
    price: "Competitive Contract Pricing",
    usage: "Precision machining of custom mechanical components and tool plates.",
    keyFeatures: [
      "High-speed 12,000 RPM spindle for mirror-surface contour finishing",
      "4th-axis rotary table for complex single-setup angular and cylindrical features",
      "Rigid tapping and multi-pocket high-feed adaptive roughing strategies",
      "Rigorous First Article Inspection (FAI) with complete dimensional documentation",
    ],
    applications: [
      "Aerospace Bracketry & Structural Enclosures",
      "Automotive Engine & Transmission Machined Housings",
      "Special Purpose Machinery (SPM) Base Plates & Columns",
      "Oil & Gas Valve Bodies & High-Pressure Manifolds",
    ],
    technicalSpecs: [
      { label: "Machining Envelope", value: "X: 1100 mm × Y: 600 mm × Z: 600 mm" },
      { label: "Spindle Taper", value: "BT-40 Direct Drive (12,000 RPM)" },
      { label: "Axis Configuration", value: "3-Axis Linear + 4th-Axis CNC Rotary Table" },
      { label: "Controller Type", value: "Fanuc / Siemens CNC Industrial Control" },
      { label: "Positional Accuracy", value: "±0.003 mm / Repeatability ±0.002 mm" },
      { label: "CAD/CAM Integration", value: "Mastercam / Siemens NX 3D High-Speed Toolpaths" },
      { label: "Batch Flexibility", value: "Prototype (1-off) to High-Volume Series Production" },
    ],
  },
  {
    slug: "edm-drill-wire-cut-job-work",
    name: "EDM Drill & Wire Cut Job Work",
    desc: "Sub-micron precision wire EDM and small-hole EDM drilling job work for hardened steels, complex die apertures, and carbide punches.",
    overview:
      "Our Wire EDM and EDM drilling job shop provides non-contact, burr-free spark erosion for materials up to 65 HRC. We produce sharp internal radii, micro-slits, spline profiles, and starter holes for extrusion dies, stamping punches, and turbine components with zero thermal mechanical deformation.",
    image: "/images/products/edm-drill-wire-cut-job-work.webp",
    thumb: "/images/products/edm-drill-wire-cut-job-work.webp",
    number: "06",
    category: "Job Work",
    tolerances: "±0.003 mm",
    materials: "Hardened D2, D3, H13, Carbide, Inconel, Titanium",
    hardness: "Up to 65 HRC (Hardened Steels & Exotic Alloys)",
    surfaceFinish: "Ra 0.2 µm (Fine Spark Discharge Finish)",
    maxDimensions: "Workpiece up to 600 × 400 × 300 mm",
    inspection: "Video Measuring System (VMS) & Mitutoyo Surface Tester",
    leadTime: "2 – 5 Days",
    price: "Custom Job Work Rates",
    usage: "Erosion cutting of hardened steel dies, extrusion profiles, and starter holes.",
    keyFeatures: [
      "Sub-micron pitch accuracy with zero tool pressure on delicate geometries",
      "Small-hole EDM drilling down to Ø0.3 mm through hardened carbide and alloys",
      "Multi-pass skim cuts producing mirror-finish punch & die cutting perimeters",
      "Capable of steep taper angles up to ±30° for extrusion and relief tooling",
    ],
    applications: [
      "Progressive Press Tool Punches & Die Plates",
      "Extrusion Dies for Aluminium & Polymer Profiles",
      "Internal Splines, Keyways & Tight-Radius Micro Pockets",
      "Turbine Blade Cooling Holes & Spark Erosion Extraction",
    ],
    technicalSpecs: [
      { label: "Wire Diameter", value: "Ø0.20 mm to Ø0.25 mm High-Tensile Brass Wire" },
      { label: "Small Hole Drilling", value: "Ø0.3 mm to Ø3.0 mm High-Speed Brass Electrode" },
      { label: "Max Workpiece Height", value: "Up to 300 mm Thickness" },
      { label: "Surface Integrity", value: "Recast Layer Controlled Under 3 µm via Micro-Pulse" },
      { label: "Taper Capability", value: "±30° Taper Angle for Clearance Relief" },
      { label: "Dielectric System", value: "Deionized Water Closed-Loop Filtration" },
      { label: "Measurement", value: "Sub-Micron Digital Optical Measuring System" },
    ],
  },
  {
    slug: "jig-fixtures-manufacturing",
    name: "Jig & Fixtures Manufacturing",
    desc: "Custom assembly, welding, and inspection fixtures engineered for fail-safe component orientation, repeatability, and ergonomic operator workflow.",
    overview:
      "We design and build bespoke industrial jigs and fixtures that optimize manufacturing throughput and eliminate human assembly error. Our tooling includes pneumatic clamping fixtures, robotic welding jigs, CMM checking fixtures, and hydraulic holding nests engineered from hardened alloy steels with modular wear pads.",
    image: "/images/products/jig-fixtures-manufacturing.webp",
    thumb: "/images/products/jig-fixtures-manufacturing.webp",
    number: "07",
    category: "Tooling & Fixtures",
    tolerances: "±0.008 mm",
    materials: "Mild Steel C45, OHNS, Aluminium 6061, Hard Bronze",
    hardness: "Case Hardened Pins & Pads (55 – 60 HRC)",
    surfaceFinish: "Black Oxide / Electroless Nickel Plating",
    maxDimensions: "Up to 1800 × 1200 × 900 mm",
    inspection: "Complete CMM Coordinate Verification & Calibration",
    leadTime: "2 – 4 Weeks",
    price: "Engineered on Requirement",
    usage: "Workpiece locating, clamping, and inspection for automated assembly lines.",
    keyFeatures: [
      "Poka-Yoke (mistake-proofing) physical locating pins preventing misloaded parts",
      "Pneumatic and hydraulic automated toggle clamps with sensor feedback",
      "Hardened, interchangeable wear pads and rest buttons for extended field life",
      "Ergonomic counterbalanced frames designed for operator safety and reduced cycle fatigue",
    ],
    applications: [
      "Automotive Robotic Welding & Spot-Welding Fixtures",
      "CNC Machining Multi-Part Hydraulic Clamping Tombstones",
      "Final Quality Inspection & Dial Gauge Checking Jigs",
      "Precision Sub-Assembly Press & Riveting Stations",
    ],
    technicalSpecs: [
      { label: "Fixture Type", value: "Welding, Machining, Assembly & Inspection Fixtures" },
      { label: "Base Construction", value: "Heavy Stress-Relieved Welded Fabricated Frame / Solid C45" },
      { label: "Locating Elements", value: "Hardened OHNS Diamond & Round Locating Pins (60 HRC)" },
      { label: "Clamping Mechanism", value: "Destaco Manual Toggles / Festo Pneumatic Swing Clamps" },
      { label: "Surface Treatment", value: "Chemical Blackening / Hard Anodize / Electroless Nickel" },
      { label: "Dimensional Report", value: "Comprehensive CMM Inspection Certificate Provided" },
      { label: "Modularity", value: "Standardized Grid Pattern for Rapid Retooling" },
    ],
  },
  {
    slug: "precision-machine-components",
    name: "Precision Machine Components",
    desc: "Custom CNC-turned and milled precision components fabricated to sub-micron tolerances for demanding industrial assemblies and OEM machinery.",
    overview:
      "Jay Tech Industries manufactures critical build-to-print mechanical components for industrial machinery, hydraulic systems, and automated machinery builders. Operating advanced CNC turning centers and milling cells, we deliver high-concentricity shafts, threaded flanges, bushings, and guide pins with certified material traceability.",
    image: "/images/products/precision-machine-components.webp",
    thumb: "/images/products/precision-machine-components.webp",
    number: "08",
    category: "Precision Components",
    tolerances: "±0.004 mm",
    materials: "SS316L, SS304, EN19, EN24, Brass, Delrin, PEEK",
    hardness: "Case Hardened / Nitrided / Induction Hardened",
    surfaceFinish: "Ra 0.2 µm Cylindrically Ground / Burnished",
    maxDimensions: "Turning: Ø10 mm to Ø350 mm × 800 mm Length",
    inspection: "100% In-Process Gauging & Digital Air Micrometer",
    leadTime: "1 – 3 Weeks",
    price: "Direct OEM Volume Pricing",
    usage: "Precision mechanical drives, spindles, pistons, and fluid control manifolds.",
    keyFeatures: [
      "Multi-axis CNC turn-mill execution achieving complete parts in a single setup",
      "Cylindrical grinding and superfinishing for tight seal journal bearing seats",
      "Full material test certificate (MTC) and ultrasonic flaw detection traceability",
      "Precision thread whirling and internal spline broaching capabilities",
    ],
    applications: [
      "Industrial Pumps, Valves & Compressors",
      "Aerospace Actuation Systems & Engine Mounts",
      "High-Speed Textile & Printing Machine Rollers",
      "Defence Mechanical Drives & Transmissions",
    ],
    technicalSpecs: [
      { label: "Concentricity & Runout", value: "Within 0.005 mm TIR" },
      { label: "Threads", value: "Metric, UNC, UNF, BSP, NPT to Class 6H/6g Standard" },
      { label: "Certifications", value: "EN 10204 3.1 MTC + Full Dimensional CMM Report" },
      { label: "Packaging", value: "Anti-Rust VCI Vacuum Packaging & Individual Protective Sleeves" },
      { label: "Turning Capacity", value: "Diameter: Ø10 mm to Ø350 mm × Length: 800 mm" },
      { label: "Milling Accuracy", value: "Positional Accuracy within ±0.004 mm" },
      { label: "Quality Standard", value: "ISO 9001:2015 Continuous Quality Compliance" },
    ],
  },
];

export function getProductBySlug(slug: string): ProductItem | undefined {
  if (
    slug === "plastic-die-moulding" ||
    slug === "plastic-moulding-die" ||
    slug === "injection-die-moulding" ||
    slug === "plastic-injection-die" ||
    slug === "plastic-injection-moulding-die"
  ) {
    return productsData.find((p) => p.slug === "injection-moulding-die");
  }
  if (slug === "rubber-moulding-die") {
    return productsData.find((p) => p.slug === "rubber-die-moulding");
  }
  return productsData.find((p) => p.slug === slug);
}

export function getAllProductSlugs(): string[] {
  return productsData.map((p) => p.slug);
}
