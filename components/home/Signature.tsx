"use client";

import { motion } from "framer-motion";

export default function Signature() {
  return (
    <section className="bg-white py-32 md:py-64 relative overflow-hidden flex items-center justify-center">
      {/* Subtle ocean-inspired motion background effect */}
      <motion.div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        animate={{
          background: [
            "linear-gradient(to right, rgba(184,148,69,0) 0%, rgba(184,148,69,0.05) 50%, rgba(184,148,69,0) 100%)",
            "linear-gradient(to right, rgba(184,148,69,0) 20%, rgba(184,148,69,0.1) 70%, rgba(184,148,69,0) 100%)",
            "linear-gradient(to right, rgba(184,148,69,0) 0%, rgba(184,148,69,0.05) 50%, rgba(184,148,69,0) 100%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        style={{ backgroundSize: "200% 200%" }}
      />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.h2 
          className="font-serif text-5xl md:text-8xl lg:text-[120px] text-charcoal leading-[1.1] tracking-tight"
          initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          THE SEA IS <br />
          <span className="text-gold italic pr-4 font-light">OUR SIGNATURE.</span>
        </motion.h2>
      </div>
    </section>
  );
}
