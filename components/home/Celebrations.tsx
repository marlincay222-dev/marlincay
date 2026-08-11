"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { events } from "@/data/events";

export default function Celebrations() {
  return (
    <section className="bg-charcoal text-white py-32 md:py-48">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24 mb-24 md:mb-32">
          <div className="w-full md:w-5/12">
            <motion.h2 
              className="font-serif text-5xl md:text-7xl leading-[1.1] mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              CELEBRATIONS <br />
              AT MARLIN CAY
            </motion.h2>
          </div>
          
          <div className="w-full md:w-7/12 md:pt-4">
            <motion.p 
              className="text-white/80 text-xl md:text-2xl font-light leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            >
              From intimate gatherings to unforgettable landmark celebrations, let the Bay set the scene.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-20 md:mb-32">
          {events.slice(0, 4).map((event, index) => (
            <motion.div 
              key={event.id}
              className="group relative overflow-hidden aspect-[4/5] md:aspect-[3/4]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut", delay: index * 0.1 }}
            >
              <Image 
                src={event.image}
                alt={event.title}
                fill
                className="object-cover transition-transform duration-[2s] group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent flex flex-col justify-end p-8 md:p-12">
                <h3 className="font-serif text-3xl md:text-4xl text-white mb-4">{event.title}</h3>
                <p className="text-white/70 font-light md:text-lg">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center border-t border-white/20 pt-16 md:pt-24">
          <Link href="/events">
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-charcoal">
              PLAN YOUR EVENT &rarr;
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
