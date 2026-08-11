"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { dining } from "@/data/dining";

export default function DiningPage() {
  return (
    <div className="bg-light min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden flex items-center justify-center">
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <Image
            src="/images/placeholders/hero-dining.jpg"
            alt="Dining at Marlin Cay"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>

        <div className="relative z-10 text-center text-white mt-16 px-6">
          <motion.p 
            className="text-[11px] uppercase tracking-[0.3em] text-gold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            THE TASTE OF THE COAST
          </motion.p>
          <motion.h1 
            className="font-serif text-5xl md:text-7xl lg:text-[90px] leading-[1.1] mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            FRESH FLAVOURS. <br /> LONG LUNCHES.
          </motion.h1>
          <motion.p
            className="font-serif text-4xl md:text-5xl italic text-gold font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Golden evenings.
          </motion.p>
        </div>
      </section>

      {/* Dining Experiences */}
      <section className="py-32 md:py-48 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col gap-32 md:gap-48">
            {dining.map((venue, index) => (
              <div key={venue.id} className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24`}>
                <motion.div 
                  className="w-full lg:w-1/2 relative aspect-square md:aspect-[4/5] group overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1 }}
                >
                  <Image
                    src={venue.image}
                    alt={venue.name}
                    fill
                    className="object-cover transition-transform duration-[2s] group-hover:scale-[1.03]"
                  />
                  <div className={`absolute -z-10 w-full h-full border border-gold/30 top-8 ${index % 2 !== 0 ? '-right-8' : '-left-8'} hidden md:block`} />
                </motion.div>
                
                <motion.div 
                  className="w-full lg:w-1/2 flex flex-col items-start"
                  initial={{ opacity: 0, x: index % 2 !== 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, delay: 0.2 }}
                >
                  <p className="text-[11px] uppercase tracking-[0.2em] text-gold mb-4">{venue.category}</p>
                  <h3 className="font-serif text-5xl md:text-6xl text-charcoal mb-8">{venue.name}</h3>
                  <p className="text-charcoal/70 font-light text-lg md:text-xl leading-relaxed mb-12 max-w-lg">
                    {venue.description}
                  </p>
                  
                  <Link href="/dining/menu">
                    <Button variant="outline">EXPLORE MENU &rarr;</Button>
                  </Link>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
