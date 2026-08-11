"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "./Button";
import { Menu, X } from "lucide-react";
import { useEnquireModal } from "@/context/EnquireModalContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openModal } = useEnquireModal();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Contact", href: "/contact" }
  ];

  // When mobile menu is open, prevent body scroll
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled || isMobileMenuOpen
            ? "bg-white text-charcoal py-4 shadow-sm border-b border-gold/10"
            : "bg-transparent text-white py-6"
        )}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link 
            href="/" 
            className="flex items-center gap-3 transition-opacity hover:opacity-90"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="relative w-12 h-12 md:w-20 md:h-20 overflow-hidden rounded-full border border-gold/30 bg-white shadow-md">
              <Image 
                src="/images/logo.jpeg" 
                alt="Marlin Cay Logo" 
                fill 
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className={cn(
                "font-serif text-2xl md:text-4xl tracking-widest transition-colors",
                isScrolled || isMobileMenuOpen ? "text-gold" : "text-gold"
              )}>
                MARLIN CAY
              </span>
              <span className={cn(
                "text-[9px] md:text-[11px] uppercase tracking-[0.3em] font-light mt-1",
                isScrolled || isMobileMenuOpen ? "text-charcoal/70" : "text-white/80"
              )}>
                BEACH RESORT
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-[11px] uppercase tracking-[0.15em] hover:text-gold transition-colors relative group",
                  isScrolled ? "text-charcoal" : "text-white"
                )}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>



          <button 
            className="lg:hidden text-gold z-50 relative"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu (Fullscreen) */}
      <div 
        className={cn(
          "fixed inset-0 bg-white z-40 flex flex-col justify-center items-center transition-all duration-700 ease-in-out",
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      >
        <div className="flex flex-col items-center gap-10 text-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-serif text-4xl text-charcoal hover:text-gold transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}

        </div>
      </div>
    </>
  );
}
