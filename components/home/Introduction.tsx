"use client";

import { motion } from "framer-motion";

export default function Introduction() {
  return (
    <section className="bg-white py-32 md:py-48 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <p className="text-gold text-[11px] uppercase tracking-[0.25em] mb-8">
              THE MARLIN CAY EXPERIENCE
            </p>
            <h2 className="text-charcoal font-serif text-4xl md:text-6xl lg:text-7xl leading-tight mb-12">
              WHERE THE OCEAN <br className="hidden md:block" />
              BECOMES YOUR BACKDROP.
            </h2>
            <div className="w-[1px] h-20 bg-gold/50 mx-auto mb-12" />
            <p className="text-charcoal/70 text-[17px] md:text-[19px] font-light leading-relaxed max-w-2xl mx-auto">
              Set along the shores of Visakhapatnam, Marlin Cay brings together the beauty of the coast, refined hospitality and unforgettable celebrations.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
