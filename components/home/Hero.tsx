"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full h-[100svh] overflow-hidden bg-charcoal">
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.5, ease: "easeOut", delay: 1.5 }}
      >
        <Image
          src="/images/about-hero.png"
          alt="Marlin Cay"
          fill
          priority
          className="object-contain md:object-cover object-top md:object-center"
        />
        {/* Subtle dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/30 md:bg-black/30" />
      </motion.div>

      <div className="relative z-10 h-full container mx-auto px-6 md:px-12 flex flex-col justify-end pb-24 md:pb-32">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 2.2 }}
          >
            <p className="text-gold text-[11px] md:text-[13px] uppercase tracking-[0.25em] mb-6">
              Marlin Cay
            </p>
            <h1 className="text-white font-serif text-4xl sm:text-5xl md:text-7xl lg:text-[90px] leading-[1.1] mb-8 hyphens-auto break-words">
              VISAKHAPATNAM'S ONLY <br />
              SEA VIEW DINING.
            </h1>
            <p className="text-white/80 text-[11px] md:text-[13px] uppercase tracking-[0.2em] mb-12">
              Bheemili &middot; Visakhapatnam
            </p>
            
            <Link href="/about">
              <Button variant="outline" className="border-white/50 text-white hover:bg-white hover:text-charcoal hover:border-white">
                DISCOVER MARLIN CAY &rarr;
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3.5 }}
      >
        <span className="text-[9px] uppercase tracking-[0.3em] opacity-80">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/80 to-transparent" />
        </motion.div>
      </motion.div>

      {/* Initial White Screen Reveal */}
      <motion.div 
        className="fixed inset-0 z-[60] bg-white flex flex-col items-center justify-center pointer-events-none"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut", delay: 1 }}
      >
        <motion.h2 
          className="font-serif text-4xl md:text-6xl text-gold tracking-[0.1em] mb-4"
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8 }}
        >
          MARLIN CAY
        </motion.h2>
        <motion.p
          className="text-charcoal/70 uppercase tracking-[0.25em] text-[10px] md:text-xs"
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Your sea view dining experience
        </motion.p>
      </motion.div>
    </section>
  );
}
