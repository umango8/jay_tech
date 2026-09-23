export interface NavItem {
  label: string;
  href: string;
}

export const navigationData: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Industries", href: "#industries" },
  { label: "Quality", href: "#quality" },
  { label: "Contact", href: "#contact" },
];

export const companyConfig = {
  name: "Jay Tech Industries",
  logo: "/images/jay-tech-industries-logo.png",
  logoWhite: "/images/jay-tech-industries-logo-white.png",
  phone: "+91 97243 24427",
  phoneRaw: "+919724324427",
  email: "info@jaytechindustries.com",
  address: "A-54/1, Bileshwar Industrial Estate, Opp. GVMM, Odhav, Ahmedabad, Gujarat – 382415, India",
  googleMapsUrl: "https://maps.google.com/?q=A-54%2F1+Bileshwar+Industrial+Estate+Odhav+Ahmedabad",
};
