export interface NavItem {
  label: string;
  href: string;
}

export const navigationData: NavItem[] = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Products", href: "/#products" },
  { label: "Contact", href: "/#contact" },
];

export const companyConfig = {
  name: "Jay Tech Industries",
  logo: "/images/jay-tech-industries-logo.webp",
  logoWhite: "/images/jay-tech-industries-logo-white.webp",
  phone: "+91 97243 24427",
  phoneRaw: "+919724324427",
  phoneSecondary: "+91 99742 96091",
  phoneSecondaryRaw: "+919974296091",
  phoneTertiary: "+91 97243 24426",
  phoneTertiaryRaw: "+919724324426",
  phones: [
    { display: "+91 97243 24427", raw: "+919724324427" },
    { display: "+91 99742 96091", raw: "+919974296091" },
    { display: "+91 97243 24426", raw: "+919724324426" },
  ],
  email: "info@jaytechindustries.com",
  address: "A-54/1, Bileshwar Industrial Estate, Opp. GVMM, Odhav, Ahmedabad, Gujarat – 382418, India",
  googleMapsUrl: "https://maps.google.com/?q=A-54%2F1+Bileshwar+Industrial+Estate+Odhav+Ahmedabad",
};
