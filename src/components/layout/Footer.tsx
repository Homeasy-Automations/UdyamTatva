"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-on-primary-fixed flex flex-col md:flex-row justify-between items-center w-full px-10 py-12 gap-8">
      {/* Logo */}
      <div className="text-3xl font-black text-white italic font-headline">
        Udyam Tatva
      </div>

      {/* Footer Links */}
      <div className="flex flex-wrap justify-center gap-8">

        <Link
          href="/privacy"
          className="text-white opacity-60 hover:opacity-100 transition-none text-sm uppercase tracking-widest font-bold font-body"
        >
          Privacy
        </Link>

        <Link
          href="/terms"
          className="text-white opacity-60 hover:opacity-100 transition-none text-sm uppercase tracking-widest font-bold font-body"
        >
          Terms
        </Link>

        <a
          href="https://in.linkedin.com/company/udyam-tatva"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white opacity-60 hover:opacity-100 transition-none text-sm uppercase tracking-widest font-bold font-body"
        >
          LinkedIn
        </a>

        <a
          href="https://www.instagram.com/udyamtatva/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white opacity-60 hover:opacity-100 transition-none text-sm uppercase tracking-widest font-bold font-body"
        >
          Instagram
        </a>

      </div>

      {/* Copyright */}
      <div className="text-xs uppercase tracking-widest text-white opacity-40 font-bold font-body">
        © {new Date().getFullYear()} Udyam Tatva. Built for the Bold.
      </div>
    </footer>
  );
}
