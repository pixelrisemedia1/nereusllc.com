import { motion } from "framer-motion";
import { Globe, Shield, Truck, Handshake } from "lucide-react";

const ABOUT_IMG = "${import.meta.env.BASE_URL}assets/warehouse.webp";

const stats = [
  { icon: Globe, label: "Global Reach", desc: "Serving markets worldwide" },
  { icon: Shield, label: "Quality Assured", desc: "Rigorous quality control" },
  { icon: Truck, label: "Reliable Logistics", desc: "On-time delivery, every time" },
  { icon: Handshake, label: "Trusted Partners", desc: "Long-standing relationships" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <img
              src={import.meta.env.BASE_URL + "assets/warehouse.webp"}
              alt="Nereus LLC warehouse operations"
              className="w-full rounded-sm shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/10 rounded-sm hidden lg:block" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p className="font-body text-secondary text-sm tracking-[0.25em] uppercase mb-4">
              About Nereus LLC
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
              Building Bridges in
              <br />
              Global Trade
            </h2>
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-6">
              Based in the United States, Nereus LLC is a commodity trading company
              specializing in plywood, aluminum, bronze, and copper. We connect
              producers and manufacturers across continents, ensuring consistent
              quality and competitive pricing.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-10">
              With deep expertise in raw materials sourcing and international logistics,
              we serve as a dependable link in the global supply chain. Our commitment
              to transparency and reliability has earned us the trust of partners worldwide.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((s) => (
                <div key={s.label} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-sm bg-secondary/10 flex items-center justify-center">
                    <s.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-body text-sm font-semibold text-foreground">
                      {s.label}
                    </p>
                    <p className="font-body text-xs text-muted-foreground">
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}