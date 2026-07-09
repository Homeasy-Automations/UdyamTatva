"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full z-50 nav-glass">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 md:px-6 py-2">
        {/* Logo — doubles as Home */}
        <Link
          href="/"
          className="flex items-center p-2 rounded-md transition-opacity duration-200 hover:opacity-80"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/images/UdyamTatvaLogo.webp"
            alt="Udyam Tatva — Home"
            width={220}
            height={50}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative py-1 text-lg font-normal transition-colors duration-200",
                  isActive
                    ? "text-primary"
                    : "text-on-primary-fixed hover:text-primary"
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-[2px] bg-primary transition-all duration-300",
                    isActive ? "w-full" : "w-0"
                  )}
                />
              </Link>
            );
          })}
        </div>

         {/* Desktop CTAs
        <div className="hidden md:flex gap-3">
          <Button variant="outline" size="sm">
            Login
          </Button>
          <Button variant="primary" size="sm" shadow>
            Start Building
          </Button>
        </div> */}

        {/* Hamburger Menu (mobile only, no CTAs anywhere now) */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span
            className={cn(
              "block w-6 h-0.5 bg-on-primary-fixed transition-all duration-300",
              menuOpen && "translate-y-2 rotate-45"
            )}
          />
          <span
            className={cn(
              "block w-6 h-0.5 bg-on-primary-fixed transition-all duration-300",
              menuOpen && "opacity-0"
            )}
          />
          <span
            className={cn(
              "block w-6 h-0.5 bg-on-primary-fixed transition-all duration-300",
              menuOpen && "-translate-y-2 -rotate-45"
            )}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden bg-surface border-t-2 border-primary transition-all duration-300 ease-in-out",
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 border-t-0"
        )}
      >
        <div className="px-6 py-6 flex flex-col gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-base font-normal py-2.5 border-b border-on-primary-fixed/10 last:border-none transition-colors duration-200",
                  isActive ? "text-primary" : "text-on-primary-fixed"
                )}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}