import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "About", href: "#about" },
    { label: "Products", href: "#products" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-3">
            <span className="font-heading text-2xl font-bold text-white tracking-wide">
              NEREUS
            </span>
            <span className="text-white/50 text-sm font-body tracking-widest uppercase">
              LLC
            </span>
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-white/70 hover:text-white font-body text-sm tracking-wider uppercase transition-colors duration-300"
              >
                {l.label}
              </a>
            ))}
            <a
              href="mailto:info@nereusllc.com"
              className="px-5 py-2.5 bg-secondary text-white font-body text-sm tracking-wider rounded-sm hover:bg-secondary/90 transition-colors duration-300"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-primary border-t border-white/10 px-6 py-6 space-y-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-white/70 hover:text-white font-body text-sm tracking-wider uppercase"
            >
              {l.label}
            </a>
          ))}
          <a
            href="mailto:info@nereusllc.com"
            className="block text-center px-5 py-2.5 bg-secondary text-white font-body text-sm tracking-wider rounded-sm"
          >
            Get in Touch
          </a>
        </div>
      )}
    </nav>
  );
}