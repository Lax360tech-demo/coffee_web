"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

export const FinalCtaSection: React.FC = () => {
  const handleCtaClick = () => {
    const target = document.querySelector("#products");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full py-36 px-4 sm:px-6 lg:px-8 bg-[#080503] border-t border-[#6F4E37]/30 overflow-hidden">
      <div className="absolute inset-0 -skew-y-3 bg-gradient-to-r from-[#120A06] via-[#21100A] to-[#120A06] border-y border-[#6F4E37]/30 scale-110 pointer-events-none" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[500px] bg-gradient-to-r from-[#6F4E37]/30 via-[#8C6246]/20 to-transparent rounded-full blur-[170px] pointer-events-none" />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-[#6F4E37]/50 animate-particle-1 blur-[1px]" />
        <div className="absolute top-3/4 right-1/4 w-2 h-2 rounded-full bg-[#6F4E37]/50 animate-particle-2 blur-[1px]" />
        <div className="absolute top-1/2 right-1/3 w-4 h-4 rounded-full bg-[#6F4E37]/40 animate-particle-3 blur-[2px]" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#21100A]/90 border border-[#6F4E37]/50 backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(111,78,55,0.3)]"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#6F4E37]" />
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-cream">
            The Pinnacle of Coffee
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tight text-white leading-[0.95]"
        >
          ONE CUP. <br />
          <span className="bg-gradient-to-r from-[#C49A6C] via-[#EAD7C3] to-[#6F4E37] bg-clip-text text-transparent">
            ENDLESS MOMENTS.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-xl sm:text-2xl text-cream/90 font-light tracking-wide italic"
        >
          &ldquo;Rich coffee. Golden moments.&rdquo;
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <button
            onClick={handleCtaClick}
            className="w-full sm:w-auto px-10 py-4 rounded-full text-xs font-bold uppercase tracking-[0.22em] text-white bg-[#6F4E37] hover:bg-[#855D42] shadow-[0_0_30px_rgba(111,78,55,0.55)] hover:shadow-[0_0_50px_rgba(111,78,55,0.85)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 group"
          >
            <span>Experience Narasu&apos;s Gold</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
