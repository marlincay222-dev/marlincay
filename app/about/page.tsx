"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden flex items-center justify-center bg-charcoal">
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <Image
            src="/images/about-hero.png"
            alt="Marlin Cay Story"
            fill
            priority
            className="object-cover opacity-60"
            sizes="100vw"
          />
        </motion.div>

        <div className="relative z-10 text-center text-white mt-16 px-6">
          <motion.p 
            className="text-[11px] uppercase tracking-[0.3em] text-gold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            OUR STORY
          </motion.p>
          <motion.h1 
            className="font-serif text-5xl md:text-7xl lg:text-[90px] leading-[1.1] mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            A SANCTUARY <br /> BY THE SEA.
          </motion.h1>
        </div>
      </section>

      {/* The Vision */}
      <section className="py-32 md:py-48 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h2 className="font-serif text-4xl md:text-5xl text-charcoal leading-tight mb-12">
                "Our philosophy is simple: to create spaces where time slows down, and the ocean takes center stage."
              </h2>
              <div className="w-[1px] h-24 bg-gold/50 mx-auto mb-12" />
              <p className="text-charcoal/70 text-lg md:text-xl font-light leading-relaxed">
                Marlin Cay was born from a desire to redefine luxury hospitality along the eastern seaboard of India. Nestled on the pristine shores of Visakhapatnam, we offer more than just a destination—we offer an escape. Every detail, from the architecture that honors the natural landscape to our world-class dining, has been meticulously crafted to cultivate moments of genuine connection and celebration.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Coast */}
      <section className="py-32 md:py-48 bg-light">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24">
            <motion.div 
              className="w-full lg:w-1/2 relative aspect-square md:aspect-[4/5] overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
            >
              <Image
                src="/images/placeholders/hero-experiences.jpg"
                alt="The Coast"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-[2s] hover:scale-105"
              />
            </motion.div>
            
            <motion.div 
              className="w-full lg:w-1/2 flex flex-col items-start"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <p className="text-[11px] uppercase tracking-[0.2em] text-gold mb-6">The Location</p>
              <h3 className="font-serif text-5xl md:text-6xl text-charcoal mb-8">THE COAST.</h3>
              <p className="text-charcoal/70 font-light text-lg md:text-xl leading-relaxed mb-10">
                Steeped in history and framed by the Bay of Bengal, the coast is a place of untouched beauty. The rhythm of the waves and the golden sands provide a canvas for the Marlin Cay experience. Whether you're here to celebrate life's biggest milestones or simply to find quiet luxury, the coast welcomes you.
              </p>
              
              <Link href="/gallery">
                <Button variant="outline">VIEW THE GALLERY &rarr;</Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="bg-white py-32 md:py-48 text-center border-b border-gold/10">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-serif text-5xl md:text-7xl text-charcoal leading-[1.05] mb-12">
              DISCOVER <br className="hidden md:block" /> THE DIFFERENCE.
            </h2>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <Link href="/events">
                <Button variant="outline">PLAN YOUR EVENT &rarr;</Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline">GET IN TOUCH &rarr;</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
