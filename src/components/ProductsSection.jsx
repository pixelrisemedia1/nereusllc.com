import { motion } from "framer-motion";

const products = [
  {
    name: "Plywood",
    image: import.meta.env.BASE_URL + "assets/plywood.webp",
    description:
      "Premium-grade plywood sourced from trusted mills — available in birch, hardwood, and marine-grade varieties for construction and manufacturing.",
  },
  {
    name: "Aluminum",
    image: import.meta.env.BASE_URL + "assets/aluminium.webp",
    description:
      "High-quality aluminum sheets, coils, and extrusions for aerospace, automotive, and industrial applications. Multiple alloy grades available.",
  },
  {
    name: "Bronze",
    image: import.meta.env.BASE_URL + "assets/bronze.webp",
    description:
      "Durable bronze alloys in ingots, bars, and custom forms — ideal for marine hardware, bearings, and decorative architectural elements.",
  },
  {
    name: "Copper",
    image: import.meta.env.BASE_URL + "assets/copper.webp",
    description:
      "Pure copper cathodes, pipes, sheets, and wire rod. Sourced from certified producers for electrical, plumbing, and industrial use.",
  },
];

export default function ProductsSection() {
  return (
    <section id="products" className="py-24 lg:py-32 bg-primary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-secondary text-sm tracking-[0.25em] uppercase mb-4">
            What We Trade
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Our Core Products
          </h2>
          <p className="font-body text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            We specialize in four key commodities — sourced globally and delivered
            with uncompromising standards of quality.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-sm bg-white/5 backdrop-blur-sm border border-white/10 hover:border-secondary/40 transition-all duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={`${p.name} — Nereus LLC`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <h3 className="font-heading text-2xl lg:text-3xl font-bold text-white mb-2">
                  {p.name}
                </h3>
                <p className="font-body text-white/60 text-sm leading-relaxed">
                  {p.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}