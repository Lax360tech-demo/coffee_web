"use client";

import React from "react";
import { motion, MotionValue, useTransform } from "framer-motion";
import { NARASUS_GOLD } from "@/data/products";
import { Sparkles, ArrowDown } from "lucide-react";

interface CoffeeTextOverlaysProps {
  scrollYProgress: MotionValue<number>;
}

export const CoffeeTextOverlays: React.FC<CoffeeTextOverlaysProps> = ({
  scrollYProgress,
}) => {
  const heroOpacity = useTransform(scrollYProgress, [0, 0.08, 0.14], [1, 1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.14], [0, -40]);

  const s1Opacity = useTransform(
    scrollYProgress,
    [0.15, 0.21, 0.31, 0.36],
    [0, 1, 1, 0]
  );
  const s1Y = useTransform(
    scrollYProgress,
    [0.15, 0.21, 0.31, 0.36],
    [40, 0, 0, -40]
  );

  const s2Opacity = useTransform(
    scrollYProgress,
    [0.38, 0.44, 0.54, 0.59],
    [0, 1, 1, 0]
  );
  const s2Y = useTransform(
    scrollYProgress,
    [0.38, 0.44, 0.54, 0.59],
    [40, 0, 0, -40]
  );

  const s3Opacity = useTransform(
    scrollYProgress,
    [0.61, 0.67, 0.76, 0.81],
    [0, 1, 1, 0]
  );
  const s3Y = useTransform(
    scrollYProgress,
    [0.61, 0.67, 0.76, 0.81],
    [40, 0, 0, -40]
  );

  const s4Opacity = useTransform(
    scrollYProgress,
    [0.83, 0.88, 0.96, 1],
    [0, 1, 1, 0]
  );
  const s4Y = useTransform(
    scrollYProgress,
    [0.83, 0.88, 0.96, 1],
    [40, 0, 0, -30]
  );

  const sections = NARASUS_GOLD.storySections;

  return (
    <div className="absolute inset-0 pointer-events-none z-20 flex flex-col justify-between p-6 sm:p-12 md:p-16">
      {/* SECTION 00: HERO TITLE */}
      <motion.div
        style={{ opacity: heroOpacity, y: heroY }}
        className="w-full h-full flex flex-col items-center justify-center text-center absolute inset-0 px-4 pt-36 sm:pt-40 md:pt-44 pb-12"
      >
        <div className="max-w-4xl mx-auto flex flex-col items-center mt-10 sm:mt-14 md:mt-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A0C08]/90 border border-[#D6A15B]/50 backdrop-blur-md mb-3 sm:mb-4 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
            <Sparkles className="w-3.5 h-3.5 text-[#F4E3C1] animate-pulse" />
            <span className="text-[11px] font-bold tracking-[0.28em] uppercase text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
              NARASU&apos;S GOLD
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#D6A15B]" />
            <span className="text-[10px] tracking-[0.2em] text-[#F4E3C1] uppercase font-semibold drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
              {NARASUS_GOLD.productType}
            </span>
          </div>

          {/* REPLACED VISUAL: Official Narasu's Since 1926 Brand Logo */}
          <div className="my-3 sm:my-4 flex items-center justify-center">
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-60 lg:h-60 aspect-square rounded-full bg-white p-2.5 sm:p-3 border-2 border-[#D6A15B]/60 shadow-[0_10px_40px_rgba(0,0,0,0.5),0_0_35px_rgba(214,161,91,0.35)] transition-transform duration-500 hover:scale-105 flex items-center justify-center overflow-hidden">
              <img
                src="/images/narasus-since-1926.jpg"
                alt="Narasu's Since 1926"
                className="w-full h-full object-contain"
              />
            </div>
            <h1 className="sr-only">Narasu&apos;s Since 1926 — The Gold Standard of Coffee</h1>
          </div>

          <div className="mt-3 sm:mt-4 max-w-xl px-5 py-2.5 rounded-2xl bg-[#080503]/75 backdrop-blur-md border border-[#D6A15B]/35 shadow-[0_8px_30px_rgba(0,0,0,0.65)]">
            <p className="text-xs sm:text-sm md:text-base text-white font-medium tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)]">
              Experience the rich aroma and smooth character of carefully crafted
              freeze dried coffee granules.
            </p>
          </div>

          <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row items-center gap-4 pointer-events-auto">
            <button
              onClick={() => {
                const target = document.querySelector("#details");
                if (target) target.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full text-xs uppercase tracking-[0.2em] font-bold text-[#080503] bg-gradient-to-r from-[#D6A15B] via-[#F4E3C1] to-[#B87532] shadow-[0_0_25px_rgba(214,161,91,0.5)] hover:shadow-[0_0_35px_rgba(214,161,91,0.8)] hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Discover the Experience
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </button>
          </div>

          <div className="mt-6 sm:mt-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#080503]/70 backdrop-blur-md border border-[#D6A15B]/30 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
            <span className="text-[#F4E3C1] text-xs font-semibold tracking-[0.25em] uppercase drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
              Scroll to explore
            </span>
            <span className="text-[#D6A15B] font-bold animate-bounce text-xs">↓</span>
          </div>
        </div>
      </motion.div>

      {/* SECTION 01: THE AROMA (LEFT) */}
      <motion.div
        style={{ opacity: s1Opacity, y: s1Y }}
        className="absolute top-1/2 -translate-y-1/2 left-4 sm:left-6 md:left-8 lg:left-12 xl:left-16 max-w-[280px] sm:max-w-[320px] md:max-w-[350px] lg:max-w-sm xl:max-w-md pointer-events-auto"
      >
        <div className="p-6 sm:p-7 rounded-2xl bg-[#080503]/80 backdrop-blur-xl border border-[#D6A15B]/30 shadow-[0_20px_60px_rgba(0,0,0,0.85)]">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#D6A15B]">
              {sections[0].label}
            </span>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-[#D6A15B]/40 to-transparent" />
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-white leading-[1.05] tracking-tight">
            WAKE UP <br />
            <span className="text-[#D6A15B]">TO SOMETHING</span> <br />
            RICH.
          </h2>

          <p className="mt-3 text-xs sm:text-sm text-[#F4E3C1] font-normal leading-relaxed">
            {sections[0].description}
          </p>

          <div className="mt-5 flex items-center gap-3 pt-3 border-t border-coffee-brown/40">
            <div className="w-2 h-2 rounded-full bg-[#D6A15B] animate-ping" />
            <span className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-[#D6A15B] font-semibold">
              Aroma Cryo-Lock™ Technology
            </span>
          </div>
        </div>
      </motion.div>

      {/* SECTION 02: THE CRAFT (RIGHT) */}
      <motion.div
        style={{ opacity: s2Opacity, y: s2Y }}
        className="absolute top-1/2 -translate-y-1/2 right-4 sm:right-6 md:right-8 lg:right-12 xl:right-16 max-w-[280px] sm:max-w-[320px] md:max-w-[350px] lg:max-w-sm xl:max-w-md pointer-events-auto"
      >
        <div className="p-6 sm:p-7 rounded-2xl bg-[#080503]/80 backdrop-blur-xl border border-[#D6A15B]/30 shadow-[0_20px_60px_rgba(0,0,0,0.85)]">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#D6A15B]">
              {sections[1].label}
            </span>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-[#D6A15B]/40 to-transparent" />
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-white leading-[1.05] tracking-tight">
            CRAFTED <br />
            <span className="text-[#D6A15B]">FOR THE</span> <br />
            PERFECT CUP.
          </h2>

          <p className="mt-3 text-xs sm:text-sm text-[#F4E3C1] font-normal leading-relaxed">
            {sections[1].description}
          </p>

          <div className="mt-5 flex items-center gap-3 pt-3 border-t border-coffee-brown/40">
            <div className="w-2 h-2 rounded-full bg-caramel animate-pulse" />
            <span className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-[#D6A15B] font-semibold">
              Sub-Zero Vacuum Crystallization
            </span>
          </div>
        </div>
      </motion.div>

      {/* SECTION 03: THE GOLD (LEFT) */}
      <motion.div
        style={{ opacity: s3Opacity, y: s3Y }}
        className="absolute top-1/2 -translate-y-1/2 left-4 sm:left-6 md:left-8 lg:left-12 xl:left-16 max-w-[280px] sm:max-w-[320px] md:max-w-[350px] lg:max-w-sm xl:max-w-md pointer-events-auto"
      >
        <div className="p-6 sm:p-7 rounded-2xl bg-[#080503]/80 backdrop-blur-xl border border-[#D6A15B]/30 shadow-[0_20px_60px_rgba(0,0,0,0.85)]">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#D6A15B]">
              {sections[2].label}
            </span>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-[#D6A15B]/40 to-transparent" />
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-white leading-[1.05] tracking-tight">
            RICHNESS <br />
            <span className="text-[#D6A15B]">IN EVERY</span> <br />
            GRANULE.
          </h2>

          <p className="mt-3 text-xs sm:text-sm text-[#F4E3C1] font-normal leading-relaxed">
            {sections[2].description}
          </p>

          <div className="mt-5 grid grid-cols-2 gap-3 pt-3 border-t border-coffee-brown/40">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#F4E3C1]/80 font-medium block">
                Crystals
              </span>
              <span className="text-xs sm:text-sm font-bold text-[#D6A15B]">
                100% Soluble Gold
              </span>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#F4E3C1]/80 font-medium block">
                Acidity
              </span>
              <span className="text-xs sm:text-sm font-bold text-[#D6A15B]">
                Silky Balanced
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* SECTION 04: THE EXPERIENCE (RIGHT) */}
      <motion.div
        style={{ opacity: s4Opacity, y: s4Y }}
        className="absolute top-1/2 -translate-y-1/2 right-4 sm:right-6 md:right-8 lg:right-12 xl:right-16 max-w-[280px] sm:max-w-[320px] md:max-w-[350px] lg:max-w-sm xl:max-w-md pointer-events-auto"
      >
        <div className="p-6 sm:p-7 rounded-2xl bg-[#080503]/85 backdrop-blur-xl border border-[#D6A15B]/30 shadow-[0_25px_70px_rgba(0,0,0,0.9)]">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[11px] font-bold tracking-[0.35em] uppercase text-[#D6A15B]">
              {sections[3].label}
            </span>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-[#D6A15B]/40 to-transparent" />
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-white leading-[1.05] tracking-tight">
            MAKE EVERY CUP <br />
            <span className="text-[#D6A15B]">MATTER.</span>
          </h2>

          <p className="mt-3 text-xs sm:text-sm text-[#F4E3C1] font-normal leading-relaxed">
            {sections[3].description}
          </p>

          <div className="mt-5 pt-3 border-t border-coffee-brown/40">
            <button
              onClick={() => {
                const target = document.querySelector("#products");
                if (target) target.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full px-5 py-3 rounded-full text-xs font-bold uppercase tracking-[0.2em] text-[#080503] bg-gradient-to-r from-[#D6A15B] to-caramel shadow-[0_0_20px_rgba(214,161,91,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all text-center block"
            >
              Bring Home Narasu&apos;s Gold — ₹180
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CoffeeTextOverlays;
