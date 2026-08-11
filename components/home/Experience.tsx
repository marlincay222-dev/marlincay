"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLightbox } from "@/context/LightboxContext";
import { cn } from "@/lib/utils";

const experiences = [
  {
    id: "dine",
    number: "01",
    title: "BY THE SEA, WITH A DRINK",
    description: "Your sea view dining experience.",
    image: "/images/bar-dining.png",
    link: "/menu"
  },
  {
    id: "celebrate",
    number: "02",
    title: "CELEBRATE",
    description: "Our space you celebrate.",
    image: "/images/celebrate.jpg",
    link: "/events"
  }
];

export default function Experience() {
  const { openLightbox } = useLightbox();

  return (
    <section className="bg-white py-32 md:py-48">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col gap-24 md:gap-40">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <Link
                href={exp.link}
                className={cn(
                  "flex flex-col md:flex-row items-center gap-12 md:gap-24 group cursor-pointer",
                  index % 2 !== 0 && "md:flex-row-reverse"
                )}
              >
                <div 
                  className="w-full md:w-[60%] overflow-hidden relative aspect-[4/3] md:aspect-[5/4] rounded-2xl"
                  onClick={(e) => {
                    e.preventDefault();
                    openLightbox(exp.image);
                  }}
                >
                  <Image
                    src={exp.image}
                    alt={exp.title}
                    fill
                    className={cn(
                      "transition-transform duration-[1.5s] ease-out group-hover:scale-[1.04]",
                      exp.id === "leadership" ? "object-contain" : "object-cover"
                    )}
                  />
                </div>
                
                <div className="w-full md:w-[40%] flex flex-col items-start transition-transform duration-700 group-hover:translate-x-2">
                  <span className="text-gold font-serif text-xl md:text-2xl mb-4 opacity-80">{exp.number}</span>
                  <h3 className="font-serif text-5xl md:text-7xl text-charcoal mb-6">{exp.title}</h3>
                  <p className="text-charcoal/70 text-lg mb-4 font-light uppercase tracking-widest text-[13px]">{exp.description}</p>
                  
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
