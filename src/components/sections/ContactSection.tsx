"use client";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const CONTACT_DETAILS = [
  { icon: "mail", label: "info@udyamtatva.com" },
  { icon: "call", label: "+91 80029 00812" },
  // { icon: "location_on", label: "Bangalore, India" },
];

export function ContactSection() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 px-6 md:px-10 bg-surface-container-low overflow-hidden"
    >
      <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Info */}
        <div className="reveal">
          <Badge variant="gold">Get In Touch</Badge>
          <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mt-6 mb-6 leading-none font-headline">
            LET&apos;S <span className="text-primary">TALK.</span>
          </h2>
          <p className="text-on-surface-variant text-lg mb-10 max-w-md font-body">
            Founder, investor, or enabler — express your interest and we&apos;ll
            route you to the right entry point.
          </p>

          <div className="space-y-6">
            {CONTACT_DETAILS.map((c) => (
              <div key={c.label} className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary text-2xl">
                  {c.icon}
                </span>
                <span className="font-bold font-body">{c.label}</span>
              </div>
            ))}
          </div>

          <Button variant="primary" size="lg" shadow className="mt-10">
            Schedule a 20-min Call
          </Button>
        </div>

        {/* Form */}
        <form className="reveal reveal-delay-1 bg-white border-4 border-on-background p-8 md:p-10 space-y-6">
          <div>
            <label className="block text-xs font-black uppercase tracking-widest mb-2 font-headline">
              Name
            </label>
            <input
              type="text"
              className="w-full border-4 border-on-background px-4 py-3 font-body focus:outline-none focus:border-primary"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-xs font-black uppercase tracking-widest mb-2 font-headline">
              Email
            </label>
            <input
              type="email"
              className="w-full border-4 border-on-background px-4 py-3 font-body focus:outline-none focus:border-primary"
              placeholder="you@startup.com"
            />
          </div>
          <div>
            <label className="block text-xs font-black uppercase tracking-widest mb-2 font-headline">
              I am a...
            </label>
            <select className="w-full border-4 border-on-background px-4 py-3 font-body focus:outline-none focus:border-primary">
              <option>Founder</option>
              <option>Investor</option>
              <option>Enabler</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-black uppercase tracking-widest mb-2 font-headline">
              Message
            </label>
            <textarea
              rows={4}
              className="w-full border-4 border-on-background px-4 py-3 font-body focus:outline-none focus:border-primary"
              placeholder="Tell us where you're at."
            />
          </div>
          <Button
            type="submit"
            variant="primary"
            size="lg"
            shadow
            className="w-full justify-center"
          >
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
}
