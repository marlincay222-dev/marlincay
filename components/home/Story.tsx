"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLightbox } from "@/context/LightboxContext";

export default function Story() {
  const { openLightbox } = useLightbox();

  return (
    <section className="bg-light py-32 md:py-48">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          className="flex flex-col md:flex-row items-center gap-16 md:gap-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Portrait Image */}
          <div 
            className="w-full md:w-[45%] lg:w-[40%] overflow-hidden relative aspect-[3/4] md:aspect-[4/5] rounded-2xl cursor-pointer"
            onClick={() => openLightbox("/images/dhanya-new.png")}
          >
            <Image
              src="/images/dhanya-new.png"
              alt="Dhanya Chinnam"
              fill
              className="object-contain bg-white transition-transform duration-[1.5s] ease-out hover:scale-[1.04]"
            />
          </div>
          
          {/* Story Content */}
          <div className="w-full md:w-[55%] lg:w-[60%] flex flex-col items-start">
            <span className="text-gold font-serif text-xl md:text-2xl mb-4 opacity-80">03</span>
            <h3 className="font-serif text-5xl md:text-7xl lg:text-[80px] text-charcoal leading-[1.1] mb-8">
              THE STORY BEHIND MCOFFEE
            </h3>
            <p className="text-charcoal/70 text-lg mb-8 font-light uppercase tracking-widest text-[13px]">
              <span className="font-medium text-charcoal">Dhanya Chinnam</span> 
              <span className="mx-2 opacity-50">&middot;</span> 
              <span className="text-gold">Director of Operations</span>
            </p>
            
            <div className="flex flex-col gap-6 text-charcoal/80 font-light text-lg md:text-xl leading-relaxed max-w-2xl">
              <p>
                What began as a love for coffee and meaningful conversations became a dream for Dhanya Chinnam. Inspired by the joy that a simple cup of coffee can bring, she set out to create MCoffee—a café where people could relax, connect, and feel at home.
              </p>
              <p>
                Built with passion, dedication, and a commitment to quality, every cup served at MCoffee reflects her vision of creating memorable experiences. Today, MCoffee is more than just a café—it's a welcoming space where friendships grow, ideas come to life, and every guest is treated like family.
              </p>
              <p className="font-serif italic text-2xl mt-4 text-charcoal">
                "Every cup tells a story. Welcome to MCoffee."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
