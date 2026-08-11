"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { events } from "@/data/events";

export default function EventsPage() {
  return (
    <div className="bg-charcoal text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden flex items-center justify-center">
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <Image
            src="/images/placeholders/hero-events.jpg"
            alt="Events at Marlin Cay"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>

        <div className="relative z-10 text-center mt-16 px-6">
          <motion.p 
            className="text-[11px] uppercase tracking-[0.3em] text-gold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            CELEBRATIONS
          </motion.p>
          <motion.h1 
            className="font-serif text-5xl md:text-7xl lg:text-[90px] leading-[1.1] mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            LET THE BAY <br /> SET THE SCENE.
          </motion.h1>
        </div>
      </section>

      {/* Events List */}
      <section className="py-32 md:py-48 bg-charcoal">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col gap-32 md:gap-40">
            {events.map((event, index) => (
              <div key={event.id} className="group flex flex-col md:flex-row items-center gap-12 md:gap-24">
                <motion.div 
                  className={`w-full md:w-1/2 relative aspect-[4/3] overflow-hidden ${index % 2 !== 0 ? 'md:order-2' : ''}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1 }}
                >
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-[2s] group-hover:scale-[1.03]"
                  />
                </motion.div>
                
                <motion.div 
                  className={`w-full md:w-1/2 flex flex-col items-start ${index % 2 !== 0 ? 'md:order-1' : ''}`}
                  initial={{ opacity: 0, x: index % 2 !== 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, delay: 0.2 }}
                >
                  <h3 className="font-serif text-4xl md:text-5xl text-white mb-6">{event.title}</h3>
                  <p className="text-white/70 font-light text-lg md:text-xl leading-relaxed mb-10 max-w-md">
                    {event.description}
                  </p>
                  
                  <Button variant="outline" className="border-white/50 text-white hover:bg-white hover:text-charcoal hover:border-white">
                    ENQUIRE ABOUT THIS
                  </Button>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
