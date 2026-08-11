"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { experiences } from "@/data/experiences";

export default function ExperiencesSection() {
  return (
    <section className="bg-light py-32 md:py-48">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <p className="text-gold text-[11px] uppercase tracking-[0.25em] mb-8">
              EXPERIENCES
            </p>
            <h2 className="font-serif text-5xl md:text-7xl text-charcoal">
              LEAVE THE ORDINARY BEHIND.
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut", delay: index * 0.15 }}
              className="flex flex-col group cursor-pointer"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden mb-8">
                <Image 
                  src={exp.image}
                  alt={exp.title}
                  fill
                  className="object-cover transition-transform duration-[2s] group-hover:scale-105"
                />
              </div>
              <h3 className="font-serif text-3xl text-charcoal mb-4 transition-colors group-hover:text-gold">{exp.title}</h3>
              <p className="text-charcoal/70 font-light text-sm md:text-base leading-relaxed">{exp.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link href="/experiences">
            <Button variant="outline">VIEW ALL EXPERIENCES &rarr;</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
