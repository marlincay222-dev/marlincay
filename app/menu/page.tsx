"use client";

import { useState } from "react";
import { menuData } from "@/data/menu";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState(menuData[0].id);

  const activeData = menuData.find(cat => cat.id === activeCategory);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#FAFAFA] flex flex-col items-center">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl md:text-7xl text-charcoal mb-4">OUR MENU</h1>
          <p className="text-charcoal/70 uppercase tracking-widest text-[11px] md:text-sm">
            Discover the flavors of the coast
          </p>
        </div>

        {/* Category Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16">
          {menuData.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "text-sm md:text-base tracking-[0.15em] uppercase pb-2 border-b-2 transition-colors font-light",
                activeCategory === category.id 
                  ? "border-gold text-charcoal font-normal" 
                  : "border-transparent text-charcoal/50 hover:text-charcoal/80 hover:border-gold/30"
              )}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Content */}
        <div className="max-w-5xl mx-auto bg-white p-8 md:p-16 lg:p-20 shadow-xl border border-gold/10 rounded-2xl relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-gold/40 to-transparent"></div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {activeData?.sections.map((section, idx) => (
                <div key={idx} className="mb-16 last:mb-0">
                  <div className="flex items-center gap-6 mb-10">
                    <div className="h-[1px] flex-grow bg-gold/20"></div>
                    <h2 className="font-serif text-2xl md:text-3xl text-charcoal tracking-wider text-center">
                      {section.title}
                    </h2>
                    <div className="h-[1px] flex-grow bg-gold/20"></div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                    {section.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex flex-col border-b border-charcoal/5 pb-4">
                        <div className="flex justify-between items-baseline gap-4">
                          <h3 className="text-charcoal font-medium tracking-wide uppercase text-sm md:text-base flex items-center gap-2">
                            <span className={cn(
                              "inline-block w-2 h-2 rounded-full",
                              item.isVeg ? "bg-green-600" : "bg-red-600"
                            )}></span>
                            {item.name}
                          </h3>
                          <div className="text-gold font-serif text-lg">
                            {item.price}
                          </div>
                        </div>
                        {item.description && (
                          <p className="text-charcoal/60 text-xs md:text-sm mt-1 font-light italic">
                            {item.description}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center mt-20">
          <Link href="/">
            <Button variant="outline" className="border-gold text-charcoal hover:bg-gold hover:text-white hover:border-gold">
              &larr; RETURN HOME
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
