import { motion } from "framer-motion";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";

const contacts = [
  {
    label: "General Inquiries",
    email: "info@nereusllc.com",
  },
  {
    label: "Direct Contact",
    email: "a.tsudikman@nereusllc.com",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-body text-secondary text-sm tracking-[0.25em] uppercase mb-4">
              Get in Touch
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
              Let's Discuss
              <br />
              Your Needs
            </h2>
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-10">
              Whether you're sourcing materials for a large-scale project or
              exploring new supply partnerships, we're ready to help. Reach out
              and our team will respond promptly.
            </p>

            <div className="flex items-start gap-3 mb-8">
              <div className="w-10 h-10 rounded-sm bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <p className="font-body text-sm font-semibold text-foreground">
                  Headquarters
                </p>
                <p className="font-body text-sm text-muted-foreground">
                  United States
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right — contact cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-6 lg:pt-12"
          >
            {contacts.map((c) => (
              <a
                key={c.email}
                href={`mailto:${c.email}`}
                className="group block p-8 rounded-sm border border-border bg-card hover:border-secondary/40 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-sm bg-secondary/10 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-secondary" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-secondary transition-colors" />
                </div>
                <p className="font-body text-xs text-muted-foreground tracking-wider uppercase mb-1">
                  {c.label}
                </p>
                <p className="font-body text-lg font-medium text-foreground group-hover:text-secondary transition-colors">
                  {c.email}
                </p>
              </a>
            ))}

            <div className="p-8 rounded-sm bg-primary text-white">
              <p className="font-body text-sm text-white/60 mb-2">
                Prefer a quick note?
              </p>
              <p className="font-heading text-xl font-semibold mb-4">
                Email us directly and we'll get back to you within 24 hours.
              </p>
              <a
                href="mailto:info@nereusllc.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-white font-body text-sm tracking-wider rounded-sm hover:bg-secondary/90 transition-colors"
              >
                Send Email
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}