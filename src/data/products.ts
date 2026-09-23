
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
}

export const productsData: ProductItem[] = [
  {
    slug: "injection-moulding-die",
    name: "Injection Moulding Die",
    desc: "Custom engineered injection moulding dies designed for high repeatability, thermal balance, and tight-tolerance plastic components.",
    overview:
      "Our injection moulding dies are purpose-built for high-volume thermoplastic and engineering polymer processing. We combine hot runner/cold runner flow analysis, precision CNC electrode EDM machining, and hardened cavity inserts to deliver minimal flash, exceptional thermal consistency, and dependable cycle times across millions of shots.",
    image: "/images/products/injection-moulding-die.jpg",
    thumb: "/images/products/injection-moulding-die.jpg",
    number: "01",
    category: "Moulding Dies",
    tolerances: "±0.005 mm",
    materials: "H13, P20, 2311, 2738, NAK80",
    hardness: "48 – 54 HRC (Vacuum Treated)",
    surfaceFinish: "SPI A2 Mirror Polish / VDI Texture",
    maxDimensions: "Up to 1200 × 900 × 750 mm",
    inspection: "100% CMM & Coordinate Measurement",
    leadTime: "2 – 4 Weeks",
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
    ],
  },
  {
    slug: "blow-moulding-die",
    name: "Blow Moulding Die",
    desc: "Purpose-built blow moulding tooling for durable, uniform wall-thickness bottles, containers, and industrial packaging.",
    overview:
      "Jay Tech Industries designs and manufactures high-performance extrusion and stretch blow moulding dies. We engineer precision pinch-off cut-offs, rapid neck-ring calibration, and optimized cavity venting to guarantee uniform material distribution, structural seam integrity, and leak-free closures for high-speed automated packaging lines.",
    image: "/images/products/blow-moulding-die.jpg",
    thumb: "/images/products/blow-moulding-die.jpg",
    number: "02",
    category: "Moulding Dies",
    tolerances: "±0.008 mm",
    materials: "Aluminium 7075-T6, Beryllium Copper, P20",
    hardness: "Hard Anodized / 38 – 42 HRC Inserts",
    surfaceFinish: "Micro-sandblasted Cavity Venting",
    maxDimensions: "Up to 1000 × 700 × 600 mm",
    inspection: "Optical Contour Projector & CMM",
    leadTime: "2 – 3 Weeks",
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
      { label: "Wall Uniformity", value: "Controlled within ±0.05 mm across bottle height" },
      { label: "Neck Calibration", value: "Interchangeable Precision Cut Ring" },
      { label: "Cooling Design", value: "Turbulent Flow Gun-Drilled Waterways" },
    ],
  },
  {
    slug: "plastic-moulding-die",
    name: "Plastic Moulding Die",
    desc: "High-precision plastic moulding dies crafted for complex multi-cavity geometries and long production lifespans.",
    overview:
      "Crafted with microscopic precision on our high-speed VMC and CNC wire cut equipment, our general plastic moulding dies cover complex custom profiles, threaded components, unscrewing cores, and slide-action geometries with flawless parting-line match and zero flash.",
    image: "/images/products/plastic-moulding-die.jpg",
    thumb: "/images/products/plastic-moulding-die.jpg",
    number: "03",
    category: "Moulding Dies",
    tolerances: "±0.005 mm",
    materials: "DIN 1.2316, 1.2083 (Stainless Mould Steel), P20",
    hardness: "50 – 54 HRC (Corrosion Resistant)",
    surfaceFinish: "Mirror Finish Ra 0.2",
    maxDimensions: "Up to 800 × 600 × 500 mm",
    inspection: "Coordinate Measurement & Surface Profilometer",
    leadTime: "2 – 3 Weeks",
    keyFeatures: [
      "Corrosion-resistant stainless mould inserts for corrosive flame-retardant resins",
      "Precision rack-and-pinion mechanical unscrewing mechanisms for internal threads",
      "Multi-slide angle pins for deep side-action undercuts",
      "Precision parting-line shut-offs preventing micro-burrs",
    ],
    applications: [
      "Consumer Electronics Caps & Knobs",
      "Rigid Industrial Pipe Fittings & Valves",
      "Sanitary Ware & Plumbing Accessories",
      "Telecom Connector Plugs & Modems",
    ],
    technicalSpecs: [
      { label: "Cavity Configuration", value: "2 to 32 Cavity Balanced Feed" },
      { label: "Corrosion Protection", value: "High Chromium DIN 1.2083 Hardened Core" },
      { label: "Slide Actuation", value: "Hardened Angle Pins with Bronze Wear Plates" },
      { label: "Gating Style", value: "Pinpoint / Edge / Film Gating" },
    ],
  },
  {
    slug: "rubber-moulding-die",
    name: "Rubber Moulding Die",
    desc: "Heavy-duty compression and transfer rubber moulds manufactured to resist wear and maintain strict dimensional accuracy.",
    overview:
      "Engineered to withstand the demanding thermal and mechanical pressures of rubber vulcanization, our rubber compression and transfer moulds are built with robust high-carbon steels. We calculate thermal expansion coefficients precisely to ensure finished rubber elastomeric parts shrink accurately to print.",
    image: "/images/products/rubber-moulding-die.jpg",
    thumb: "/images/products/rubber-moulding-die.jpg",
    number: "04",
    category: "Moulding Dies",
    tolerances: "±0.010 mm",
    materials: "EN31, D2, EN24, P20",
    hardness: "56 – 60 HRC",
    surfaceFinish: "Hard Chrome Plated / Electropolished",
    maxDimensions: "Up to 1100 × 900 × 400 mm",
    inspection: "CMM Coordinate Inspection & Pin Gauging",
    leadTime: "2 – 3 Weeks",
    keyFeatures: [
      "Hard chrome plating prevents rubber compound adhesion and chemical attack",
      "Pre-calculated shrinkage compensations for NBR, EPDM, Silicone, and Viton",
      "Tear-trim flash grooves for effortless manual or automated deflashing",
      "Heavy-duty bolster plates to eliminate platen deflection during clamping",
    ],
    applications: [
      "Automotive Bushings, Engine Mounts & O-Rings",
      "Industrial Diaphragms & Gaskets",
      "Hydraulic & Pneumatic Cylinder Seals",
      "Vibration Isolation Pads for Heavy Machinery",
    ],
    technicalSpecs: [
      { label: "Mould Type", value: "Compression Mould / Transfer Mould / Cold Runner Rubber" },
      { label: "Plating", value: "Hard Chrome 25 Micron Polished" },
      { label: "Elastomer Compatibility", value: "Silicone, Viton, EPDM, Nitrile, Neoprene, Natural Rubber" },
      { label: "Thermal Heating", value: "Integrated Cartridge Heater or Steam Platen Ready" },
    ],
  },
  {
    slug: "plastic-injection-die",
    name: "Plastic Injection Moulding Die",
    desc: "Advanced runner and gate design dies tailored for precision engineering plastics and automotive components.",
    overview:
      "Designed specifically for high-stress engineering resins (PA66, PBT, Polycarbonate, POM), our precision plastic injection dies incorporate multi-stage hot runners, wear-resistant carbide gates, and automated core pulling cylinders to manufacture critical mechanical assemblies.",
    image: "/images/products/plastic-injection-die.jpg",
    thumb: "/images/products/plastic-injection-die.jpg",
    number: "05",
    category: "Moulding Dies",
    tolerances: "±0.005 mm",
    materials: "H13, NAK80, Böhler M310",
    hardness: "50 – 54 HRC",
    surfaceFinish: "SPI A1 Optical / High Polish",
    maxDimensions: "Up to 1000 × 800 × 650 mm",
    inspection: "100% CMM Report & First Article Inspection (FAI)",
    leadTime: "3 – 4 Weeks",
    keyFeatures: [
      "Hydraulic core pulling systems for complex internal passages",
      "Tungsten carbide gate bushes preventing erosion from glass-filled resins",
      "Uniform heating manifold balancing fill across all cavities",
      "Complete 2D/3D documentation and spare insert drawing support",
    ],
    applications: [
      "Automotive Underbody Clips, Sensors & Housings",
      "Precision Gears & Ratchet Mechanisms",
      "Aerospace Cabin Fasteners & Trims",
      "Electrical Circuit Breaker Frames",
    ],
    technicalSpecs: [
      { label: "Resin Suitability", value: "Glass-filled PA66, PEEK, PBT, POM, ABS, PC" },
      { label: "Gate Technology", value: "Valve Gate Hot Runner / Needle Shut-Off" },
      { label: "Alignment", value: "Tapered Side Interlocks + Precision Guide Pillars" },
    ],
  },
  {
    slug: "sheet-metal-cutting-die",
    name: "Sheet Metal Cutting Die",
    desc: "Power press punching, piercing, and bracket cutting dies built for high-speed stamping and clean shearing edges.",
    overview:
      "We design and build progressive, compound, and single-stroke sheet metal blanking and cutting dies. Built from premium high-speed tool steels with tight clearance calculations, our tooling delivers clean shear edges, burr-free profiles, and extended regrind intervals.",
    image: "/images/products/sheet-metal-cutting-die.jpg",
    thumb: "/images/products/sheet-metal-cutting-die.jpg",
    number: "06",
    category: "Cutting Dies",
    tolerances: "±0.005 mm (Clearance matched to material thickness)",
    materials: "D2, D3, HCHCr, High Speed Steel (HSS), Hard Alloy",
    hardness: "60 – 64 HRC (Cryogenically Treated)",
    surfaceFinish: "Precision Ground & Wire EDM Fine Finish",
    maxDimensions: "Bed Size up to 1500 × 900 mm",
    inspection: "Optical Profile Projector & Height Gauge",
    leadTime: "2 – 3 Weeks",
    keyFeatures: [
      "Segmented punch and die plates for convenient selective sharpening",
      "Precision ball-bearing guide pillar sets ensuring zero punch deflection",
      "Spring/urethane stripper design preventing sheet marring and distortion",
      "Over 100,000 strokes between sharpening cycles",
    ],
    applications: [
      "Automotive Structural Brackets & Reinforcements",
      "Electrical Stamping Laminations & Busbars",
      "Enclosure Panels, Chassis & Mounting Plates",
      "Appliance Hardware & Hinges",
    ],
    technicalSpecs: [
      { label: "Tool Architecture", value: "Progressive Die / Compound Blanking / Piercing Die" },
      { label: "Cutting Edge Steel", value: "AISI D2 / Vanadis 4 Extra Powder Metallurgy" },
      { label: "Strip Feed", value: "Mechanical / Pneumatic Servo Feeder Compatible" },
      { label: "Clearance Range", value: "5% – 10% of Sheet Thickness, CNC Wire-EDM Cut" },
    ],
  },
  {
    slug: "vmc-machining-job-work",
    name: "VMC Machining Job Work",
    desc: "3-axis & 4-axis vertical machining center (VMC) milling services delivering micro-level precision on complex components.",
    overview:
      "Our contract VMC milling facility provides high-speed, rigid 3-axis and 4-axis machining for prototypes and volume production batches. Equipped with modern spindle tooling, Renishaw probing, and CAM path optimization, we handle intricate geometries in ferrous, non-ferrous, and superalloys.",
    image: "/images/products/vmc-machining-job-work.jpg",
    thumb: "/images/products/vmc-machining-job-work.jpg",
    number: "07",
    category: "Job Work",
    tolerances: "±0.005 mm",
    materials: "Aluminium (6061, 7075), SS304, SS316, Mild Steel, EN Series, Brass",
    hardness: "As Machined or Heat Treated up to 55 HRC",
    surfaceFinish: "Ra 0.4 – Ra 1.6",
    maxDimensions: "X: 1000 mm, Y: 600 mm, Z: 550 mm",
    inspection: "In-process Probing & CMM Final Inspection",
    leadTime: "3 – 7 Days",
    keyFeatures: [
      "High-speed 12,000 RPM spindles for mirror surface milling in aluminium alloys",
      "4th axis rotary indexer for complex angular and radial features in single setup",
      "In-situ part probing reducing setup error and guaranteeing true positional tolerances",
      "Custom pneumatic and hydraulic workholding fixtures for volume repeatability",
    ],
    applications: [
      "Aerospace Machined Housings & Wing Ribs",
      "Motorsport Gearbox Casings & Uprights",
      "Semiconductor Vacuum Chambers & Flanges",
      "Medical Robotic Arms & Actuator Blocks",
    ],
    technicalSpecs: [
      { label: "Machining Capacity", value: "3-Axis & 4-Axis Simultaneous CNC VMC" },
      { label: "Spindle Speeds", value: "Up to 12,000 RPM Rigid Tapping" },
      { label: "Repeatability", value: "±0.003 mm True Position" },
      { label: "Lot Sizes", value: "Prototypes (1-10 pcs) to Production (1,000+ pcs)" },
    ],
  },
  {
    slug: "edm-drill-wire-cut-job-work",
    name: "EDM Drill & Wire Cut Job Work",
    desc: "Controlled spark erosion and CNC wire-cut EDM job work for hardened steels, fine holes, and intricate profiles.",
    overview:
      "For conductive metals that cannot be milled by conventional rotary tooling, our CNC wire electrical discharge machining (EDM) and hole drill services provide spark erosion precision. We slice through hardened tool steels, carbide, and titanium with zero mechanical tool pressure and taper control.",
    image: "/images/products/edm-drill-wire-cut-job-work.jpg",
    thumb: "/images/products/edm-drill-wire-cut-job-work.jpg",
    number: "08",
    category: "Job Work",
    tolerances: "±0.003 mm",
    materials: "Tungsten Carbide, Hardened Tool Steel (up to 65 HRC), Titanium, Inconel",
    hardness: "Any Hardness (Electrically Conductive Material)",
    surfaceFinish: "Ra 0.2 – Ra 0.8 Spark Erosion Finish",
    maxDimensions: "Travel: 600 × 400 × 350 mm",
    inspection: "Laser Micrometer & Video Measuring System (VMS)",
    leadTime: "2 – 5 Days",
    keyFeatures: [
      "Ultra-fine wire cutting down to 0.15 mm diameter for sharp internal corners",
      "4-axis independent UV taper cutting up to ±30 degrees",
      "Micro-hole drilling from Ø0.3 mm for start holes and cooling passages",
      "Zero thermal distortion or surface stress compared to grinding",
    ],
    applications: [
      "Extrusion Dies & Spline Broaches",
      "Punches, Stripper Plates & Die Inserts",
      "Precision Gears, Keyways & Internal Splines",
      "Turbine Blade Root Geometry & Slotting",
    ],
    technicalSpecs: [
      { label: "Wire Diameters", value: "0.20 mm / 0.25 mm High-Tensile Brass Wire" },
      { label: "Taper Capability", value: "±30° Multi-Axis Independent CNC" },
      { label: "Smallest Internal Radius", value: "R 0.12 mm" },
      { label: "Submerged Cutting", value: "Constant Dielectric Temperature Control" },
    ],
  },
  {
    slug: "jig-fixtures-manufacturing",
    name: "Jig & Fixtures Manufacturing",
    desc: "Custom manufacturing fixtures, workholding systems, and inspection gauges designed to secure parts and improve repeatability.",
    overview:
      "We design and build production-ready mechanical, pneumatic, and hydraulic workholding jigs, welding fixtures, assembly nests, and Go/No-Go checking gauges. Every fixture is engineered according to your part drawing to clamp securely, eradicate vibration, and streamline factory cycle times.",
    image: "/images/products/jig-fixtures-manufacturing.jpg",
    thumb: "/images/products/jig-fixtures-manufacturing.jpg",
    number: "09",
    category: "Tooling & Fixtures",
    tolerances: "±0.005 mm (Locating Pins)",
    materials: "Tool Steel, Mild Steel, Hardened EN31, Aluminium 6061, Bronze",
    hardness: "58 – 62 HRC (Locators & Wear Pads)",
    surfaceFinish: "Black Oxide / Hard Anodized / Precision Ground",
    maxDimensions: "Fixture Bases up to 1800 × 1200 mm",
    inspection: "Full CMM Inspection with Pin-Gauge Verification",
    leadTime: "1 – 3 Weeks",
    keyFeatures: [
      "Foolproof 'Poka-Yoke' locating pins preventing operator part misorientation",
      "Hardened wear pads and replaceable locator bushings for prolonged factory life",
      "Pneumatic/hydraulic toggle clamping for rapid 5-second part loading",
      "Calibrated dial indicator mounting points for quick line verification",
    ],
    applications: [
      "CNC Machining & VMC Milling Workholding Fixtures",
      "Robotic & Manual MIG/TIG Welding Fixtures",
      "Automotive Body-in-White (BIW) Checking Gauges",
      "Electronics Assembly Press & Inspection Jigs",
    ],
    technicalSpecs: [
      { label: "Fixture Types", value: "Machining, Welding, Assembly & Inspection Fixtures" },
      { label: "Actuation", value: "Manual Toggle, Pneumatic Cylinder, Hydraulic Power" },
      { label: "Locating Elements", value: "Hardened & Ground Diamond / Round Locators" },
      { label: "Traceability", value: "Laser-Marked Station Numbers & Calibrated Datum Points" },
    ],
  },
  {
    slug: "precision-machine-components",
    name: "Precision Machine Components",
    desc: "Close-tolerance components engineered for dependable fit, fine surface finish, and repeatable assembly performance.",
    overview:
      "We produce custom mechanical shafts, flanges, bushings, manifolds, valve bodies, and aerospace brackets to rigorous customer specifications. Our comprehensive quality process verifies concentricity, runout, thread depth, and surface roughness before dispatch.",
    image: "/images/products/precision-machine-components.jpg",
    thumb: "/images/products/precision-machine-components.jpg",
    number: "10",
    category: "Precision Components",
    tolerances: "±0.003 mm to ±0.008 mm",
    materials: "SS304, SS316L, EN8, EN24, 17-4PH, Brass, Bronze, Aluminium 7075",
    hardness: "Normalized, Hardened & Tempered, or Case Hardened",
    surfaceFinish: "Ra 0.2 (Cylindrical Ground) / Ra 0.8 (Milled)",
    maxDimensions: "Turning: Ø350 × 1000 mm | Milling: 1000 × 600 mm",
    inspection: "100% Dimensional Inspection with Co-ordinate Measuring Machine",
    leadTime: "1 – 2 Weeks",
    keyFeatures: [
      "Rigid tolerance control on critical bearing journals and mating diameters",
      "Burr-free micro deburring and automated ultrasonic cleaning prior to pack",
      "Surface treatment options: Hard Chrome, Nickel, Anodize, Zinc-Nickel, Blackening",
      "Material test certificates (MTC) and dimensional inspection sheets with every batch",
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
    ],
  },
];

export function getProductBySlug(slug: string): ProductItem | undefined {
  return productsData.find((p) => p.slug === slug);
}

export function getAllProductSlugs(): string[] {
  return productsData.map((p) => p.slug);
}
