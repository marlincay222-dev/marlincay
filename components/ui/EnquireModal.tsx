"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEnquireModal } from "@/context/EnquireModalContext";
import { Button } from "./Button";
import { useEffect } from "react";

export default function EnquireModal() {
  const { isModalOpen, closeModal } = useEnquireModal();

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  return (
    <AnimatePresence>
      {isModalOpen && (
        <>
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[100] bg-charcoal/20 backdrop-blur-sm cursor-pointer"
            onClick={closeModal}
          />

          {/* Slide-out Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.5, ease: "circOut" }}
            className="fixed top-0 right-0 z-[110] h-full w-full max-w-md bg-light shadow-2xl overflow-y-auto"
          >
            <div className="relative p-8 md:p-12">
              <button
                onClick={closeModal}
                className="absolute top-8 right-8 text-charcoal/50 hover:text-charcoal transition-colors"
                aria-label="Close"
              >
                <X size={32} strokeWidth={1} />
              </button>

              <div className="mt-12">
                <p className="text-[11px] uppercase tracking-[0.2em] text-gold mb-4">
                  Marlin Cay
                </p>
                <h2 className="font-serif text-4xl text-charcoal mb-8">ENQUIRE</h2>
                <p className="text-charcoal/70 font-light text-sm leading-relaxed mb-12">
                  Please provide your details below, and our dedicated team will contact you shortly to curate your perfect experience.
                </p>

                <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.15em] text-charcoal/60">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full border-b border-charcoal/20 py-2 bg-transparent focus:outline-none focus:border-gold transition-colors text-charcoal placeholder:text-charcoal/30"
                      placeholder="Jane Doe"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.15em] text-charcoal/60">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full border-b border-charcoal/20 py-2 bg-transparent focus:outline-none focus:border-gold transition-colors text-charcoal placeholder:text-charcoal/30"
                      placeholder="jane@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.15em] text-charcoal/60">Phone Number</label>
                    <input 
                      type="tel" 
                      className="w-full border-b border-charcoal/20 py-2 bg-transparent focus:outline-none focus:border-gold transition-colors text-charcoal placeholder:text-charcoal/30"
                      placeholder="+91 00000 00000"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.15em] text-charcoal/60">Enquiry Type</label>
                    <select className="w-full border-b border-charcoal/20 py-2 bg-transparent focus:outline-none focus:border-gold transition-colors appearance-none cursor-pointer text-charcoal">
                      <option>Dining & Reservations</option>
                      <option>Private Event</option>
                      <option>Wedding</option>
                      <option>Corporate Retreat</option>
                      <option>General Enquiry</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.15em] text-charcoal/60">Message (Optional)</label>
                    <textarea 
                      rows={3}
                      className="w-full border-b border-charcoal/20 py-2 bg-transparent focus:outline-none focus:border-gold transition-colors text-charcoal placeholder:text-charcoal/30 resize-none"
                      placeholder="Tell us more about your requirements..."
                    />
                  </div>

                  <Button variant="outline" className="w-full mt-8" onClick={() => {
                    alert("Thank you for your enquiry. We will be in touch shortly.");
                    closeModal();
                  }}>
                    SUBMIT ENQUIRY &rarr;
                  </Button>
                </form>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
