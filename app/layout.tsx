import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { EnquireModalProvider } from "@/context/EnquireModalContext";
import EnquireModal from "@/components/ui/EnquireModal";
import { LightboxProvider } from "@/context/LightboxContext";
import Lightbox from "@/components/ui/Lightbox";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marlin Cay Beach Resorts | Luxury Beach Resort in Visakhapatnam",
  description: "Experience Marlin Cay, a premium coastal destination in Visakhapatnam, where the sea becomes the backdrop for stays, dining and unforgettable celebrations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} antialiased`}
    >
      <body className="font-sans bg-background text-foreground min-h-screen flex flex-col selection:bg-gold selection:text-white">
        <LightboxProvider>
          <EnquireModalProvider>
            <SmoothScroll>
              <Navbar />
              <main className="flex-grow">
                {children}
              </main>
              <Footer />
              <EnquireModal />
              <Lightbox />
            </SmoothScroll>
          </EnquireModalProvider>
        </LightboxProvider>
      </body>
    </html>
  );
}
