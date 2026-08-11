"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  return (
    <section className="bg-light py-32 md:py-48">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2
            className="text-gold text-[11px] uppercase tracking-[0.25em]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            WORDS FROM OUR GUESTS
          </motion.h2>
        </div>

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24 justify-center">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="flex-1 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: index * 0.2 }}
            >
              <div className="text-gold mb-8 tracking-[0.2em] text-sm">
                ★★★★★
              </div>
              <p className="font-serif text-2xl md:text-3xl text-charcoal leading-snug mb-8">
                "{testimonial.text}"
              </p>
              <p className="text-[11px] uppercase tracking-[0.2em] text-charcoal/60">
                &mdash; {testimonial.author}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
