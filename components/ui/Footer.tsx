import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site";

export default function Footer() {
  const navLinks = [
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <footer className="bg-white text-charcoal pt-32 pb-12 border-t border-gold/20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-16 md:gap-0 mb-32">
          
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="/" className="flex items-center gap-4 group mb-6">
              <div className="relative w-16 h-16 md:w-20 md:h-20 overflow-hidden rounded-full border border-gold/30 bg-white shadow-sm transition-transform duration-500 group-hover:scale-105">
                <Image 
                  src="/images/logo.jpeg" 
                  alt="Marlin Cay Logo" 
                  fill 
                  className="object-contain"
                />
              </div>
              <span className="font-serif text-3xl tracking-widest text-gold transition-opacity group-hover:opacity-80">
                MARLIN CAY
              </span>
            </Link>
            <p className="text-[11px] uppercase tracking-[0.2em] text-charcoal/60 max-w-[200px]">
              {siteConfig.location}
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-4 text-center md:text-right max-w-xl">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[11px] uppercase tracking-[0.15em] hover:text-gold transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>
            
            <div className="flex gap-8 mt-12 text-charcoal/60">
              <Link href={siteConfig.socials.instagram} className="hover:text-gold transition-colors text-[11px] uppercase tracking-wider">Instagram</Link>
              <Link href={siteConfig.socials.facebook} className="hover:text-gold transition-colors text-[11px] uppercase tracking-wider">Facebook</Link>
              <Link href={siteConfig.socials.twitter} className="hover:text-gold transition-colors text-[11px] uppercase tracking-wider">Twitter</Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-[11px] uppercase tracking-[0.1em] text-charcoal/40 pt-8 border-t border-charcoal/10 gap-4 md:gap-0">
          <p>&copy; {new Date().getFullYear()} MARLIN CAY. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-gold transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-gold transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
