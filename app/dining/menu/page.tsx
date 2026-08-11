"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { menuData } from "@/data/menu";
import { cn } from "@/lib/utils";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState(menuData[0].id);

  // Smooth scroll to category
  const scrollToCategory = (id: string) => {
    setActiveCategory(id);
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Update active tab on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = menuData.map(cat => document.getElementById(cat.id));
      const scrollPosition = window.scrollY + 150; // offset

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          if (activeCategory !== menuData[i].id) {
            setActiveCategory(menuData[i].id);
          }
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeCategory]);

  return (
    <div className="bg-light min-h-screen pt-32 md:pt-48 pb-32">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center mb-24">
          <motion.p 
            className="text-[11px] uppercase tracking-[0.3em] text-gold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Culinary Excellence
          </motion.p>
          <motion.h1 
            className="font-serif text-5xl md:text-7xl text-charcoal"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            THE MENU
          </motion.h1>
          <div className="w-[1px] h-16 bg-gold/50 mx-auto mt-12" />
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative">
          
          {/* Sticky Sidebar Navigation (Desktop) / Sticky Top Tabs (Mobile) */}
          <div className="lg:w-1/4">
            <div className="sticky top-24 z-30">
              {/* Mobile Tabs */}
              <div className="flex lg:hidden overflow-x-auto pb-4 gap-6 no-scrollbar border-b border-charcoal/10">
                {menuData.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => scrollToCategory(category.id)}
                    className={cn(
                      "whitespace-nowrap text-[11px] uppercase tracking-[0.15em] transition-colors pb-2 border-b-2",
                      activeCategory === category.id 
                        ? "text-charcoal border-charcoal font-medium" 
                        : "text-charcoal/50 border-transparent hover:text-charcoal"
                    )}
                  >
                    {category.title}
                  </button>
                ))}
              </div>

              {/* Desktop Sidebar */}
              <div className="hidden lg:flex flex-col gap-6 border-l border-charcoal/10 pl-8">
                {menuData.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => scrollToCategory(category.id)}
                    className={cn(
                      "text-left text-[11px] uppercase tracking-[0.2em] transition-all duration-300 relative group",
                      activeCategory === category.id 
                        ? "text-charcoal font-medium" 
                        : "text-charcoal/50 hover:text-charcoal hover:translate-x-2"
                    )}
                  >
                    {activeCategory === category.id && (
                      <motion.div 
                        layoutId="activeIndicator"
                        className="absolute -left-[33px] top-1/2 -translate-y-1/2 w-[2px] h-full bg-charcoal" 
                      />
                    )}
                    {category.title}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Menu Content */}
          <div className="lg:w-3/4">
            {menuData.map((category, index) => (
              <motion.div 
                key={category.id}
                id={category.id}
                className="mb-32 scroll-mt-32"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-6 mb-16">
                  <h2 className="font-serif text-4xl md:text-5xl text-charcoal">{category.title}</h2>
                  <div className="h-[1px] flex-1 bg-charcoal/10" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
                  {category.subcategories.map((subcat, subIndex) => (
                    <div key={subIndex} className="flex flex-col">
                      <h3 className="text-[11px] uppercase tracking-[0.25em] text-gold mb-8 pb-4 border-b border-gold/20">
                        {subcat.name}
                      </h3>
                      <ul className="flex flex-col gap-6">
                        {subcat.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex justify-between items-end gap-4 group">
                            <span className="text-charcoal font-medium text-sm tracking-wide group-hover:text-gold transition-colors">
                              {item.name}
                            </span>
                            <div className="flex-1 border-b border-dotted border-charcoal/20 mb-1 opacity-50" />
                            <span className="text-charcoal/80 font-serif text-lg tabular-nums">
                              {item.price}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
