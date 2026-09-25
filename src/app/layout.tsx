import type { Metadata, Viewport } from "next";
import { Manrope, Barlow_Condensed } from "next/font/google";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import "../styles.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jaytechindustries.in"),
  title: "Jay Tech Industries | Precision Engineering Ahmedabad",
  description: "Precision machining, CNC components, dies, moulds, jigs, fixtures and engineering solutions from Odhav, Ahmedabad.",
  authors: [{ name: "Jay Tech Industries" }],
  icons: {
    icon: "/favicon.webp",
    shortcut: "/favicon.webp",
    apple: "/favicon.webp",
  },
  openGraph: {
    title: "Jay Tech Industries | Precision Engineering",
    description: "Precision machining, tools, dies, moulds, fixtures and engineering solutions from Ahmedabad.",
    type: "website",
    siteName: "Jay Tech Industries",
    images: [
      {
        url: "/images/jay-tech-industries-logo.webp",
        width: 1200,
        height: 630,
        alt: "Jay Tech Industries - Precision Engineering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jay Tech Industries | Precision Engineering",
    description: "Precision machining, tools, dies, moulds, fixtures and engineering solutions from Ahmedabad.",
    images: ["/images/jay-tech-industries-logo.webp"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${barlowCondensed.variable}`}>
      <body className="antialiased">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
