"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { useLightbox } from "@/context/LightboxContext";

export default function Dining() {
  const { openLightbox } = useLightbox();

  return (
    <section className="bg-white py-32 md:py-48">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <p className="text-gold text-[11px] uppercase tracking-[0.25em] mb-8">
              THE TASTE OF THE COAST
            </p>
            <h2 className="font-serif text-5xl md:text-7xl lg:text-[80px] text-charcoal leading-[1.1]">
              Fresh flavours. <br className="hidden md:block" />
              Long lunches. <br className="hidden md:block" />
              Golden evenings.
            </h2>
          </motion.div>
        </div>

        <div 
          className="relative aspect-[16/10] md:aspect-[21/9] w-full overflow-hidden mb-16 md:mb-24 rounded-2xl cursor-pointer"
          onClick={() => openLightbox("/images/sea-view-night.png")}
        >
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-full h-full"
          >
            <Image 
              src="/images/sea-view-night.png"
              alt="Dining by the coast"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
