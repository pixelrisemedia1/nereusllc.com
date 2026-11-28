export default function Footer() {
  return (
    <footer className="bg-primary border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <span className="font-heading text-2xl font-bold text-white tracking-wide">
              NEREUS
            </span>
            <span className="text-white/40 text-sm font-body ml-2 tracking-widest uppercase">
              LLC
            </span>
            <p className="font-body text-white/50 text-sm leading-relaxed mt-4 max-w-xs">
              A United States-based commodity trading company specializing in plywood,
              aluminum, bronze, and copper.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-body text-white text-sm font-semibold tracking-wider uppercase mb-4">
              Quick Links
            </p>
            <div className="space-y-3">
              {[
                { label: "About", href: "#about" },
                { label: "Products", href: "#products" },
                { label: "Contact", href: "#contact" },
              ].map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="block font-body text-white/50 text-sm hover:text-white transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="font-body text-white text-sm font-semibold tracking-wider uppercase mb-4">
              Contact
            </p>
            <div className="space-y-3">
              <a
                href="mailto:info@nereusllc.com"
                className="block font-body text-white/50 text-sm hover:text-white transition-colors"
              >
                info@nereusllc.com
              </a>
              <a
                href="mailto:a.tsudikman@nereusllc.com"
                className="block font-body text-white/50 text-sm hover:text-white transition-colors"
              >
                a.tsudikman@nereusllc.com
              </a>
              <p className="font-body text-white/50 text-sm">
                United States
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-white/30 text-xs">
            © {new Date().getFullYear()} Nereus LLC. All rights reserved.
          </p>
          <p className="font-body text-white/30 text-xs">
            International Commodity Trading
          </p>
        </div>
      </div>
    </footer>
  );
}