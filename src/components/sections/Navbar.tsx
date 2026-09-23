"use client";

import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navigationData, companyConfig } from "@/data/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur-lg">
      <div className="mx-auto grid h-20 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-5 px-5 lg:px-8">
        <a href="/#home" aria-label={`${companyConfig.name} home`} className="min-w-0">
          <img
            src={companyConfig.logo}
            alt={companyConfig.name}
            className="h-12 w-auto max-w-[220px] object-contain object-left sm:h-14 sm:max-w-[280px]"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
          {navigationData.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-xs font-semibold text-foreground transition-colors hover:text-brand-orange"
            >
              {label}
            </a>
          ))}
          <Button asChild variant="orange">
            <a href="/#quote">
              Request a Quote <ArrowRight className="size-4" />
            </a>
          </Button>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          aria-label="Open navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <nav
          className="border-t border-border bg-background px-5 py-4 lg:hidden"
          aria-label="Mobile navigation"
        >
          {navigationData.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="block border-b border-border py-3 text-sm font-semibold"
            >
              {label}
            </a>
          ))}
          <Button asChild variant="orange" className="mt-4 w-full">
            <a href="#quote" onClick={() => setMenuOpen(false)}>
              Request a Quote
            </a>
          </Button>
        </nav>
      )}
    </header>
  );
}
