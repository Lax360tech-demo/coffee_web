"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import CoffeeProductScroll from "@/components/CoffeeProductScroll";
import CoffeeDetails from "@/components/CoffeeDetails";
import CraftSection from "@/components/CraftSection";
import ManufacturingSection from "@/components/FreshnessSection";
import GallerySection from "@/components/CoffeeShopSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { Sparkles } from "lucide-react";

export default function Home() {
  const [loadingProgress, setLoadingProgress] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (loadingProgress >= 100) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [loadingProgress]);

  useEffect(() => {
    const safetyTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(safetyTimer);
  }, []);

  const handleOrderScroll = () => {
    const target = document.querySelector("#contact");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="relative min-h-screen bg-[#080503] text-white selection:bg-[#B87532] selection:text-white">
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#080503]"
          >
            <div className="absolute w-72 h-72 rounded-full bg-[#D6A15B]/10 blur-[100px] pointer-events-none" />

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="relative z-10 flex flex-col items-center text-center px-4"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#3A1C10] to-[#120A06] border border-[#D6A15B]/40 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(214,161,91,0.25)]">
                <Sparkles className="w-6 h-6 text-[#D6A15B] animate-pulse" />
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-[0.25em] uppercase text-white mb-2">
                NARASU&apos;S <span className="text-[#D6A15B]">GOLD</span>
              </h2>

              <p className="text-xs tracking-[0.3em] uppercase text-cream/70 font-mono mb-8">
                BREWING THE EXPERIENCE...
              </p>

              <div className="w-56 sm:w-72 h-1 bg-[#21100A] rounded-full overflow-hidden border border-[#D6A15B]/20 relative">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#D6A15B] via-[#F4E3C1] to-[#B87532]"
                  style={{ width: `${Math.max(10, loadingProgress)}%` }}
                  transition={{ ease: "easeOut", duration: 0.2 }}
                />
              </div>

              <span className="text-[11px] font-mono text-[#D6A15B]/80 tracking-widest mt-3">
                {loadingProgress}%
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Navbar onOrderClick={handleOrderScroll} />

      <CoffeeProductScroll
        onLoadingProgress={(pct) => setLoadingProgress(pct)}
        onLoaded={() => setLoadingProgress(100)}
      />

      <CoffeeDetails />

      <CraftSection />

      <ManufacturingSection />

      <GallerySection />

      <ContactSection />

      <Footer />
    </main>
  );
}
