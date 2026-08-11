"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function CoffeeShopPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden flex items-center justify-center bg-charcoal">
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <Image
            src="/images/placeholders/hero-coffee.jpg"
            alt="Marlin Cay Coffee Shop"
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
            THE COFFEE SHOP
          </motion.p>
          <motion.h1 
            className="font-serif text-5xl md:text-7xl lg:text-[90px] leading-[1.1] mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            COFFEE, <br /> WITH A VIEW.
          </motion.h1>
        </div>
      </section>

      {/* 2. About the Coffee Shop */}
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
                "We believe that the best conversations happen slowly, over perfectly brewed coffee, accompanied by the gentle sound of the sea."
              </h2>
              <div className="w-[1px] h-24 bg-gold/50 mx-auto mb-12" />
              <p className="text-charcoal/70 text-lg md:text-xl font-light leading-relaxed">
                The Marlin Cay Coffee Shop is a coastal sanctuary designed for those who appreciate the art of slow living. Situated right on the Bheemili coast, our café offers a curated selection of premium blends in an environment that feels both luxurious and entirely relaxed. 
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. The Atmosphere (Split Layout) */}
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
                src="/images/placeholders/coffee-2.jpg"
                alt="Café Atmosphere"
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
              <p className="text-[11px] uppercase tracking-[0.2em] text-gold mb-6">The Atmosphere</p>
              <h3 className="font-serif text-5xl md:text-6xl text-charcoal mb-8">COASTAL ELEGANCE.</h3>
              <p className="text-charcoal/70 font-light text-lg md:text-xl leading-relaxed mb-10">
                Immerse yourself in a space where modern coastal design meets timeless luxury. With expansive windows inviting the ocean breeze and warm, inviting interiors, every seat offers a moment of tranquility. 
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. The Experience */}
      <section className="py-32 md:py-48 bg-white border-t border-gold/10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-24">
             <p className="text-gold text-[11px] uppercase tracking-[0.25em] mb-6">
                THE EXPERIENCE
             </p>
             <h2 className="font-serif text-5xl md:text-6xl text-charcoal mb-8">MORE THAN COFFEE.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { title: "MORNING RITUALS", desc: "Begin your day as the sun rises over the Bay of Bengal, with a cup crafted precisely to your liking." },
              { title: "AFTERNOON RESPITE", desc: "Find shade and solace during the sun-drenched hours with our refreshing iced selections." },
              { title: "EVENING CALM", desc: "Wind down as the coastal sky turns gold, accompanied by the rich aromas of our evening blends." }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="w-12 h-[1px] bg-gold mb-8" />
                <h4 className="text-charcoal text-[13px] uppercase tracking-[0.2em] mb-6">{item.title}</h4>
                <p className="text-charcoal/70 font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Menu (CMS Ready / Coming Soon) */}
      <section className="py-32 md:py-48 bg-charcoal text-white text-center">
        <div className="container mx-auto px-6 md:px-12">
           <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="max-w-2xl mx-auto"
            >
              <p className="text-gold text-[11px] uppercase tracking-[0.25em] mb-8">Curated Selection</p>
              <h2 className="font-serif text-5xl md:text-6xl mb-12">THE MENU</h2>
              
              <div className="border border-white/20 p-16 md:p-24 bg-white/5 backdrop-blur-sm">
                 <p className="text-[13px] uppercase tracking-[0.3em] text-white/70">
                    MENU COMING SOON
                 </p>
              </div>
           </motion.div>
        </div>
      </section>

      {/* 6. Gallery */}
      <section className="py-8 md:py-16 bg-white">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
           {[1, 2, 3, 4].map((num) => (
             <div key={num} className="relative aspect-square">
               <Image src={`/images/placeholders/coffee-${num}.jpg`} alt={`Coffee Shop Gallery ${num}`} fill className="object-cover hover:opacity-90 transition-opacity" />
             </div>
           ))}
        </div>
      </section>

      {/* 7. Location & Final CTA */}
      <section className="bg-white py-32 md:py-48 text-center border-t border-gold/10">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-gold text-[11px] uppercase tracking-[0.25em] mb-6">Visit Us</p>
            <h2 className="font-serif text-5xl md:text-7xl text-charcoal leading-[1.05] mb-8">
              BHEEMILI, <br className="hidden md:block" /> VISAKHAPATNAM.
            </h2>
            <p className="text-charcoal/70 font-light text-lg mb-16 max-w-xl mx-auto">
              Join us at the Marlin Cay Coffee Shop for an unparalleled coastal café experience.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <Link href="/contact">
                <Button variant="outline" className="border-gold text-charcoal hover:bg-gold hover:text-white hover:border-gold">GET DIRECTIONS &rarr;</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
