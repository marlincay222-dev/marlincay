"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function FinalCTA() {
  return (
    <section className="bg-white pb-32 md:pb-48 pt-16 border-b border-gold/10">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="font-serif text-6xl md:text-8xl lg:text-[110px] text-charcoal leading-[1.05] mb-16">
            YOUR NEXT <br />
            ESCAPE AWAITS.
          </h2>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Link href="/dining">
              <Button variant="outline">EXPLORE DINING &rarr;</Button>
            </Link>
            <Link href="/events">
              <Button variant="outline">PLAN YOUR EVENT &rarr;</Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
