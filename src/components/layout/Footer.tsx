const FOOTER_LINKS = ["Privacy", "Terms", "Linkedin", "Instagram"];

export function Footer() {
  return (
    <footer className="bg-on-primary-fixed flex flex-col md:flex-row justify-between items-center w-full px-10 py-12 gap-8">
      <div className="text-3xl font-black text-white italic font-headline">
        Udyam Tatva
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {FOOTER_LINKS.map((link) => (
          <a
            key={link}
            href="#"
            className="text-white opacity-60 hover:opacity-100 transition-none text-sm uppercase tracking-widest font-bold font-body"
          >
            {link}
          </a>
        ))}
      </div>

      <div className="text-xs uppercase tracking-widest text-white opacity-40 font-bold font-body">
        © 2024 Udyam Tatva. Built for the Bold.
      </div>
    </footer>
  );
}
