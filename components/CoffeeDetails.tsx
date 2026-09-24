"use client";

import React from "react";
import { motion } from "framer-motion";
import { NARASUS_GOLD } from "@/data/products";
import { Sparkles, ShieldCheck, Award, Flame } from "lucide-react";

export const CoffeeDetails: React.FC = () => {
  const { detailsSection, stats } = NARASUS_GOLD;
  const icons = [Award, ShieldCheck, Flame, Sparkles];

  return (
    <section
      id="details"
      className="relative w-full py-28 px-4 sm:px-6 lg:px-8 border-t border-[#6F4E37]/30 overflow-hidden"
    >
      {/* Background Image - 100% visible with zero overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/images/our-coffee-bg.jpg"
          alt="Our Coffee Background"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-[2px] bg-[#6F4E37]" />
              <span className="text-xs uppercase tracking-[0.3em] text-[#C49A6C] font-semibold drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                {detailsSection.subtitle}
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-[1.05] drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              COFFEE WITH <br />
              <span className="bg-gradient-to-r from-[#C49A6C] via-[#EAD7C3] to-[#6F4E37] bg-clip-text text-transparent">
                CHARACTER.
              </span>
            </h2>

            <p className="mt-6 text-base sm:text-lg text-[#F4E3C1] font-normal leading-relaxed max-w-xl drop-shadow-[0_1px_4px_rgba(0,0,0,0.95)]">
              {detailsSection.description}
            </p>

            <div className="mt-8 flex items-center gap-6">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white tracking-wider drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
                  100%
                </span>
                <span className="text-xs uppercase tracking-widest text-[#C49A6C] font-semibold drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
                  Pure Indian Beans
                </span>
              </div>
              <div className="w-[1px] h-10 bg-[#6F4E37]/60" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white tracking-wider drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
                  -40°C
                </span>
                <span className="text-xs uppercase tracking-widest text-[#C49A6C] font-semibold drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
                  Cryo-Lock Drying
                </span>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {detailsSection.attributes.map((attr, index) => {
              const IconComponent = icons[index % icons.length];
              return (
                <motion.div
                  key={attr.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.12,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="p-6 rounded-2xl bg-[#21100A]/40 border border-[#6F4E37]/30 hover:border-[#6F4E37] transition-all duration-300 hover:shadow-[0_10px_30px_rgba(111,78,55,0.2)] group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#21100A] border border-[#6F4E37]/40 flex items-center justify-center text-[#6F4E37] mb-4 group-hover:scale-110 group-hover:border-[#6F4E37] group-hover:bg-[#6F4E37] group-hover:text-white transition-all duration-300">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold uppercase tracking-wider text-white group-hover:text-[#EAD7C3] transition-colors">
                    {attr.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#F4E3C1]/70 font-light leading-relaxed">
                    {attr.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="mt-20 pt-12 border-t border-[#6F4E37]/30 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="p-6 rounded-xl bg-[#120A06]/60 border border-[#6F4E37]/30 hover:border-[#6F4E37] transition-colors"
            >
              <span className="text-2xl sm:text-3xl font-extrabold text-[#C49A6C] tracking-tight block">
                {stat.value}
              </span>
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#F4E3C1]/70 font-medium mt-2 block">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoffeeDetails;
