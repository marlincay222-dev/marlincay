"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { localDiscovery } from "@/data/local-discovery";

export default function LocalDiscoveryPage() {
  return (
    <div className="bg-light min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden flex items-center justify-center bg-charcoal">
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <Image
            src="/images/local-discovery/hero.jpg"
            alt="Visakhapatnam Local Discovery"
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
            LOCAL DISCOVERY
          </motion.p>
          <motion.h1 
            className="font-serif text-5xl md:text-7xl lg:text-[90px] leading-[1.1] mb-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            THE JEWEL OF <br /> THE EAST COAST.
          </motion.h1>
          <motion.p
            className="text-white/80 font-light text-sm md:text-base tracking-widest uppercase mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Visakhapatnam &middot; Andhra Pradesh
          </motion.p>
        </div>
      </section>

      {/* Destinations List */}
      <section className="py-32 md:py-48 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col gap-32 md:gap-48">
            {localDiscovery.map((dest, index) => (
              <div key={dest.id} className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24`}>
                <motion.div 
                  className="w-full lg:w-1/2 relative aspect-[4/3] md:aspect-[5/4] overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1 }}
                >
                  <Image
                    src={dest.image}
                    alt={dest.title}
                    fill
                    className="object-cover"
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
                  <p className="text-[11px] uppercase tracking-[0.2em] text-gold mb-4">{dest.distance}</p>
                  <h3 className="font-serif text-4xl md:text-5xl text-charcoal mb-8 leading-tight">{dest.title}</h3>
                  <p className="text-charcoal/70 font-light text-lg md:text-xl leading-relaxed max-w-lg mb-10">
                    {dest.description}
                  </p>
                  
                  <div className="w-12 h-[1px] bg-charcoal/20" />
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Concierge Call to Action */}
      <section className="bg-light py-32 md:py-48 border-t border-gold/10">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-serif text-4xl md:text-6xl text-charcoal leading-tight mb-8">
              CURATE YOUR ITINERARY
            </h2>
            <p className="text-charcoal/70 font-light text-lg md:text-xl leading-relaxed mb-12">
              Our concierge team is dedicated to curating bespoke excursions that uncover the true essence of Visakhapatnam. From private guided tours of the ancient Buddhist complexes to sunset drives along the coast, let us arrange every detail of your local discovery.
            </p>
            
            <Link href="/contact">
              <Button variant="outline">CONTACT CONCIERGE &rarr;</Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
