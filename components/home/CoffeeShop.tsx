"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import { useLightbox } from "@/context/LightboxContext";

export default function CoffeeShop() {
  const { openLightbox } = useLightbox();

  return (
    <section className="bg-white pt-32 md:pt-48 pb-16 md:pb-32 overflow-hidden">
      {/* 1. Main Split Layout */}
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-0">
          
          {/* Left: Cinematic Image */}
          <div 
            className="w-full lg:w-7/12 relative aspect-[4/5] md:aspect-[16/10] lg:aspect-square overflow-hidden pr-0 lg:pr-16 rounded-2xl cursor-pointer"
            onClick={() => openLightbox("/images/coffee-hero.png")}
          >
            <motion.div
              className="w-full h-full relative"
              initial={{ opacity: 0, scale: 1.06 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <Image 
                src="/images/coffee-hero.png"
                alt="Marlin Cay Coffee Shop"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* Vertical Divider (Desktop) */}
          <div className="hidden lg:flex flex-col justify-center h-[500px]">
            <motion.div 
              className="w-[1px] bg-gold"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
            />
          </div>

          {/* Right: Content */}
          <div className="w-full lg:w-5/12 lg:pl-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            >
              <p className="text-gold text-[11px] uppercase tracking-[0.25em] mb-6">
                THE COFFEE SHOP
              </p>
              <h2 className="font-serif text-5xl md:text-7xl lg:text-[70px] text-charcoal leading-[1.1] mb-10">
                COFFEE, <br />
                WITH A VIEW.
              </h2>
              <p className="text-charcoal/70 text-lg md:text-xl font-light leading-relaxed mb-12">
                Slow mornings, beautifully brewed coffee and the sea just beyond the table.
              </p>
              
              <Link href="/coffee-shop" className="group inline-flex items-center gap-4 text-[11px] uppercase tracking-[0.2em] text-charcoal hover:text-gold transition-colors">
                EXPLORE THE COFFEE SHOP 
                <ArrowRight size={16} className="text-gold transition-transform duration-500 ease-out group-hover:translate-x-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* 2. Coffee Shop Experience Highlights */}
      <div className="container mx-auto px-6 md:px-12 mt-32 md:mt-48">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {[
            { num: "01", label: "FRESHLY BREWED", desc: "Crafted with precision for the perfect cup." },
            { num: "02", label: "COASTAL MORNINGS", desc: "Start your day with the rhythm of the waves." },
            { num: "03", label: "SLOW AFTERNOONS", desc: "Unwind with gentle sea breezes." },
            { num: "04", label: "GOLDEN EVENINGS", desc: "Sunset hues and warm, rich aromas." },
          ].map((item, i) => (
            <motion.div 
              key={item.num}
              className="flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
            >
              <div className="w-full h-[1px] bg-gold/30 mb-8" />
              <span className="text-gold font-serif text-2xl md:text-3xl mb-4">{item.num}</span>
              <h4 className="text-charcoal text-[11px] uppercase tracking-[0.2em] mb-4">{item.label}</h4>
              <p className="text-charcoal/70 font-light text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 3. Image Strip */}
      <div className="w-full mt-32 md:mt-48 overflow-hidden relative">
        <motion.div 
          className="flex gap-4 md:gap-8 px-4 md:px-12 w-max"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          {/* Image 1: Close up */}
          <div 
            className="relative w-[60vw] md:w-[400px] aspect-square rounded-2xl overflow-hidden cursor-pointer"
            onClick={() => openLightbox("/images/coffee-1.png")}
          >
            <Image src="/images/coffee-1.png" alt="Coffee Details" fill className="object-cover" />
          </div>
          {/* Image 2: Atmosphere */}
          <div 
            className="relative w-[80vw] md:w-[600px] aspect-[16/9] rounded-2xl overflow-hidden cursor-pointer"
            onClick={() => openLightbox("/images/coffee-2.png")}
          >
            <Image src="/images/coffee-2.png" alt="Café Atmosphere" fill className="object-cover" />
          </div>
          {/* Image 3: Seating */}
          <div 
            className="relative w-[50vw] md:w-[350px] aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer"
            onClick={() => openLightbox("/images/coffee-3.png")}
          >
            <Image src="/images/coffee-3.png" alt="Ocean Seating" fill className="object-cover" />
          </div>
          {/* Image 4: Evening */}
          <div 
            className="relative w-[70vw] md:w-[500px] aspect-[3/2] rounded-2xl overflow-hidden cursor-pointer"
            onClick={() => openLightbox("/images/placeholders/coffee-4.jpg")}
          >
            <Image src="/images/placeholders/coffee-4.jpg" alt="Evening Atmosphere" fill className="object-cover" />
          </div>
        </motion.div>
      </div>

      {/* 4. Final CTA */}
      <div className="container mx-auto px-6 md:px-12 mt-32 md:mt-48 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="flex justify-center mb-8">
            <div className="relative w-48 h-24">
              <Image 
                src="/images/m-coffee-logo.jpeg" 
                alt="M Coffee Logo" 
                fill 
                className="object-contain" 
              />
            </div>
          </div>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-[70px] text-charcoal leading-[1.1] mb-16">
            YOUR COFFEE. <br />
            YOUR MOMENT. <br />
            YOUR VIEW.
          </h2>
          <Link href="/coffee-shop">
            <Button variant="outline" className="border-gold text-charcoal hover:bg-gold hover:text-white hover:border-gold">
              VISIT THE COFFEE SHOP &rarr;
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
