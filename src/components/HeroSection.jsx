import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HERO_IMG = "${import.meta.env.BASE_URL}assets/hero.webp";

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={import.meta.env.BASE_URL + "assets/hero.webp"}
          alt="Global shipping port at golden hour"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-body text-secondary text-sm tracking-[0.3em] uppercase mb-6"
        >
          Trusted Global Trading Partner
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-8"
        >
          Raw Materials,
          <br />
          <span className="text-secondary">Refined Service</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-body text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12"
        >
          Nereus LLC specializes in the international trading of plywood, aluminum,
          bronze, and copper — delivering quality materials to businesses across the globe.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#products"
            className="px-8 py-4 bg-secondary text-white font-body text-sm tracking-wider uppercase rounded-sm hover:bg-secondary/90 transition-colors duration-300"
          >
            Explore Products
          </a>
          <a
            href="#about"
            className="px-8 py-4 border border-white/30 text-white font-body text-sm tracking-wider uppercase rounded-sm hover:bg-white/10 transition-colors duration-300"
          >
            Learn More
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors"
      >
        <ArrowDown className="w-5 h-5 animate-bounce" />
      </motion.a>
    </section>
  );
}