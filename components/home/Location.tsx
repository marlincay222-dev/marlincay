"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";

export default function Location() {
  return (
    <section className="bg-white py-32 md:py-48">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <p className="text-gold text-[11px] uppercase tracking-[0.25em] mb-8">
              LOCATION
            </p>
            <h2 className="font-serif text-5xl md:text-7xl text-charcoal mb-12">
              FIND YOUR WAY <br />
              TO THE BAY.
            </h2>
            
            <div className="flex flex-col items-center gap-2 mb-16 text-charcoal/70 uppercase tracking-[0.2em] text-[11px] md:text-[13px] leading-loose">
              <p className="font-serif text-2xl md:text-3xl text-charcoal normal-case tracking-normal mb-4">{siteConfig.name}</p>
              {siteConfig.location.split(", ").map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>

            <Link href="/contact">
              <Button variant="outline">GET DIRECTIONS &rarr;</Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
