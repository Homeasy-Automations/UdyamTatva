"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { NAV_LINKS } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 nav-glass">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-0 md:px-0 py-0">
        
        {/* Logo */}
        <Link href="/" className="flex items-center p-2">
          <Image
            src="/images/UdyamTatvaLogo.webp"
            alt="Udyam Tatva Logo"
            width={220}
            height={50}
            className="object-contain"
            priority
          />
          {/* Optional Text Logo */}
          {/*
          <span className="text-xl font-semibold text-primary">
            Udyam Tatva
          </span>
          */}
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xl text-on-primary-fixed hover:text-primary transition-colors duration-200 text-sm font-normal"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex gap-3">
          <Button variant="outline" size="sm">
            Login
          </Button>
          <Button variant="primary" size="sm" shadow>
            Start Building
          </Button>
        </div>

        {/* Hamburger Menu */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
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
      {menuOpen && (
        <div className="md:hidden bg-surface border-t-2 border-primary px-6 py-6 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-on-primary-fixed text-base font-normal"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col gap-3 mt-4">
            <Button
              variant="outline"
              size="md"
              className="w-full justify-center font-normal"
            >
              Login to us
            </Button>
            <Button
              variant="primary"
              size="md"
              shadow
              className="w-full justify-center font-normal"
            >
              Start Building
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}