"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    enquiryType: "Dining",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to send message.");
      
      setIsSuccess(true);
      setFormData({ firstName: "", lastName: "", email: "", phone: "", enquiryType: "Dining", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-light min-h-screen pt-40 pb-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 md:gap-32">
          
          <div className="w-full md:w-5/12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <p className="text-gold text-[11px] uppercase tracking-[0.3em] mb-6">
                GET IN TOUCH
              </p>
              <h1 className="font-serif text-5xl md:text-7xl text-charcoal leading-[1.1] mb-12">
                PLAN YOUR <br /> ESCAPE.
              </h1>
              
              <div className="space-y-12">
                <div>
                  <h3 className="text-[11px] uppercase tracking-[0.2em] text-charcoal/60 mb-4">Location</h3>
                  <p className="font-serif text-2xl text-charcoal">{siteConfig.name}</p>
                  <p className="text-charcoal/80 font-light mt-2 max-w-xs leading-relaxed">{siteConfig.location}</p>
                </div>
                
                <div>
                  <h3 className="text-[11px] uppercase tracking-[0.2em] text-charcoal/60 mb-4">Contact</h3>
                  <p className="font-light text-charcoal/80 hover:text-gold transition-colors block mb-2 cursor-pointer">{siteConfig.contact.email}</p>
                  <p className="font-light text-charcoal/80 hover:text-gold transition-colors block cursor-pointer">{siteConfig.contact.phone}</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="w-full md:w-7/12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="bg-white p-8 md:p-16 shadow-[0_0_40px_rgba(0,0,0,0.03)] border border-gold/10"
            >
              <form className="space-y-10" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-3 relative group">
                    <label className="text-[11px] uppercase tracking-[0.2em] text-charcoal/60">First Name</label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required className="w-full border-b border-charcoal/20 py-2 bg-transparent focus:outline-none transition-colors rounded-none" />
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-focus-within:w-full"></span>
                  </div>
                  <div className="space-y-3 relative group">
                    <label className="text-[11px] uppercase tracking-[0.2em] text-charcoal/60">Last Name</label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required className="w-full border-b border-charcoal/20 py-2 bg-transparent focus:outline-none transition-colors rounded-none" />
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-focus-within:w-full"></span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-3 relative group">
                    <label className="text-[11px] uppercase tracking-[0.2em] text-charcoal/60">Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full border-b border-charcoal/20 py-2 bg-transparent focus:outline-none transition-colors rounded-none" />
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-focus-within:w-full"></span>
                  </div>
                  <div className="space-y-3 relative group">
                    <label className="text-[11px] uppercase tracking-[0.2em] text-charcoal/60">Phone</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full border-b border-charcoal/20 py-2 bg-transparent focus:outline-none transition-colors rounded-none" />
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-focus-within:w-full"></span>
                  </div>
                </div>

                <div className="space-y-3 relative group">
                  <label className="text-[11px] uppercase tracking-[0.2em] text-charcoal/60">Enquiry Type</label>
                  <select name="enquiryType" value={formData.enquiryType} onChange={handleChange} className="w-full border-b border-charcoal/20 py-2 bg-transparent focus:outline-none transition-colors appearance-none rounded-none cursor-pointer">
                    <option>Dining</option>
                    <option>Wedding</option>
                    <option>Private Event</option>
                    <option>Corporate Event</option>
                    <option>Other</option>
                  </select>
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-focus-within:w-full"></span>
                </div>
                
                <div className="space-y-3 relative group">
                  <label className="text-[11px] uppercase tracking-[0.2em] text-charcoal/60">Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} required rows={4} className="w-full border-b border-charcoal/20 py-2 bg-transparent focus:outline-none transition-colors resize-none rounded-none"></textarea>
                  <span className="absolute bottom-1 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-focus-within:w-full"></span>
                </div>
                
                {error && (
                  <div className="text-red-500 text-sm">{error}</div>
                )}
                {isSuccess && (
                  <div className="text-green-600 text-sm">Thank you! Your message has been sent successfully.</div>
                )}
                
                <div className="pt-8 flex justify-end">
                  <Button variant="primary" type="submit" disabled={isSubmitting} className="w-full md:w-auto">
                    {isSubmitting ? "SENDING..." : "SEND ENQUIRY \u2192"}
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
