export interface FooterFeature {
  titleTop: string;
  titleBottom: string;
}

export interface FooterPhone {
  display: string;
  raw: string;
}

export const footerData = {
  eyebrow: "ESTABLISHED IN 2007 // BUILT FOR A STRONGER TOMORROW",
  headlinePre: "PARTNER FOR",
  headlinePost: "ENGINEERING SOLUTIONS.",
  subtitleLine1: "Established in 2007. Precision components. Reliable processes.",
  subtitleLine2: "A stronger tomorrow, together.",
  features: [
    { titleTop: "PRECISION", titleBottom: "COMPONENTS" },
    { titleTop: "RELIABLE", titleBottom: "PARTNERSHIP" },
    { titleTop: "REAL-WORLD", titleBottom: "IMPACT" },
  ] as FooterFeature[],
  contactKicker: "CONTACT / AHMEDABAD",
  companyName: "JayTech Industries",
  addressLines: [
    "A-54/1, Bileshwar Industrial Estate,",
    "Opp. GVMM, Odhav,",
    "Ahmedabad, Gujarat – 382418, India",
  ],
  phoneDisplay: "+91 97243 24427 / +91 99742 96091 / +91 97243 24426",
  phoneRaw: "+919724324427",
  phoneSecondaryRaw: "+919974296091",
  phoneTertiaryRaw: "+919724324426",
  phones: [
    { display: "+91 97243 24427", raw: "+919724324427" },
    { display: "+91 99742 96091", raw: "+919974296091" },
    { display: "+91 97243 24426", raw: "+919724324426" },
  ] as FooterPhone[],
  email: "jaytech_81@yahoo.co.in",
  googleMapsUrl: "https://maps.google.com/?q=A-54%2F1+Bileshwar+Industrial+Estate+Odhav+Ahmedabad",
  locationTagline: "Precision engineering · Odhav, Ahmedabad · Est. 2007",
  precisionBadge: "BUILT ON PRECISION",
  copyrightYear: 2026,
  craftedByName: "TruVixoo",
  craftedByUrl: "https://truvixoo.com",
};
