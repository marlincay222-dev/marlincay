"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { gallery } from "@/data/gallery";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="bg-white min-h-screen pt-32 pb-32">
      <div className="container mx-auto px-6 md:px-12 text-center mb-24">
        <motion.p 
          className="text-[11px] uppercase tracking-[0.3em] text-gold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          GALLERY
        </motion.p>
        <motion.h1 
          className="font-serif text-5xl md:text-7xl lg:text-[90px] text-charcoal leading-[1.1]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          MOMENTS IN TIME.
        </motion.h1>
      </div>
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-[300px] md:auto-rows-[400px]">
          {gallery.map((item, index) => {
            let spanClasses = "col-span-1 md:col-span-4 row-span-1";
            if (item.size === "large") spanClasses = "col-span-1 md:col-span-8 row-span-1 md:row-span-2";
            else if (item.size === "horizontal") spanClasses = "col-span-1 md:col-span-8 row-span-1";
            else if (item.size === "vertical") spanClasses = "col-span-1 md:col-span-4 row-span-1 md:row-span-2";

            return (
              <motion.div
                key={item.id}
                className={cn("relative group cursor-pointer overflow-hidden", spanClasses)}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 + (index % 4) * 0.1 }}
                onClick={() => setSelectedImage(item.image)}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-[2s] group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-charcoal/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-white/95 backdrop-blur-sm flex items-center justify-center cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
          >
            <div className="absolute top-8 right-8 flex items-center gap-4 text-charcoal z-[110]">
              <span className="text-[11px] uppercase tracking-[0.2em]">ESC</span>
              <button 
                onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
                className="hover:text-gold transition-colors p-2"
              >
                <X size={28} strokeWidth={1} />
              </button>
            </div>
            <motion.div 
              className="relative w-[90vw] h-[85vh] max-w-6xl max-h-screen"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Fullscreen gallery image"
                fill
                sizes="100vw"
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
