"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { experiences } from "@/data/experiences";

export default function ExperiencesPage() {
  return (
    <div className="bg-light min-h-screen">
      <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden flex items-center justify-center">
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <Image
            src="/images/placeholders/hero-experiences.jpg"
            alt="Experiences at Marlin Cay"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>

        <div className="relative z-10 text-center text-white mt-16 px-6">
          <motion.p 
            className="text-[11px] uppercase tracking-[0.3em] text-gold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            EXPERIENCES
          </motion.p>
          <motion.h1 
            className="font-serif text-5xl md:text-7xl lg:text-[90px] leading-[1.1] mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            LEAVE THE <br /> ORDINARY BEHIND.
          </motion.h1>
        </div>
      </section>

      <section className="py-32 md:py-48 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            {experiences.map((exp, index) => (
              <Link key={exp.id} href={`/experiences/${exp.id}`}>
                <motion.div 
                  className="group flex flex-col cursor-pointer"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                >
                  <div className="relative aspect-square md:aspect-[4/5] w-full overflow-hidden mb-8">
                    <Image
                      src={exp.image}
                      alt={exp.title}
                      fill
                      className="object-cover transition-transform duration-[2s] group-hover:scale-[1.03]"
                    />
                  </div>
                  
                  <h3 className="font-serif text-4xl text-charcoal mb-4 transition-colors group-hover:text-gold">{exp.title}</h3>
                  <p className="text-charcoal/70 font-light text-lg leading-relaxed max-w-md">
                    {exp.description}
                  </p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
