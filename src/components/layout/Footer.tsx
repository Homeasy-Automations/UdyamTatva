"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-on-primary-fixed flex flex-col md:flex-row justify-between items-center w-full px-10 py-12 gap-8">
      {/* Left side: Logo & Copyright */}
      <div className="flex flex-col items-center md:items-start gap-1.5 text-center md:text-left">
        <div className="text-3xl font-black text-white italic font-headline">
          Udyam Tatva
        </div>
        <div className="text-xs uppercase tracking-widest text-white opacity-40 font-bold font-body">
          © {new Date().getFullYear()} Udyam Tatva. Built for the Bold.
        </div>
      </div>

      {/* Center: Footer Links */}
      <div className="flex flex-wrap justify-center gap-8">
        <Link
          href="/privacy"
          className="text-white opacity-60 hover:opacity-100 transition-opacity text-sm uppercase tracking-widest font-bold font-body"
        >
          Privacy
        </Link>

        <Link
          href="/terms"
          className="text-white opacity-60 hover:opacity-100 transition-opacity text-sm uppercase tracking-widest font-bold font-body"
        >
          Terms
        </Link>

        <a
          href="https://in.linkedin.com/company/udyam-tatva"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white opacity-60 hover:opacity-100 transition-opacity text-sm uppercase tracking-widest font-bold font-body"
        >
          LinkedIn
        </a>

        <a
          href="https://www.instagram.com/udyamtatva/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white opacity-60 hover:opacity-100 transition-opacity text-sm uppercase tracking-widest font-bold font-body"
        >
          Instagram
        </a>
      </div>

      {/* Right side: Made with ❤️ By KYNYX SOLUTIONS. */}
      <a
        href="https://kynyx.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs md:text-sm font-bold tracking-wide text-white flex items-center gap-1.5 font-headline hover:opacity-90 transition-opacity"
      >
        <span>Made with</span>
        <span className="text-red-500 inline-block">❤️</span>
        <span>By</span>
        <span className="text-secondary-container font-black uppercase tracking-wider hover:underline">
          KYNYX SOLUTIONS.
        </span>
      </a>
    </footer>
  );
}
