"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NARASUS_GOLD } from "@/data/products";
import {
  ShoppingBag,
  Check,
  Truck,
  RotateCcw,
  Sparkles,
  Plus,
  Minus,
} from "lucide-react";

export const BuyNowSection: React.FC = () => {
  const { buyNowSection, price, mrp, savings } = NARASUS_GOLD;
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 3000);
  };

  return (
    <section
      id="buy-now"
      className="relative w-full py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#080503] via-[#120A06] to-[#080503] border-t border-[#6F4E37]/30 overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-[#6F4E37]/25 via-[#8C6246]/15 to-transparent rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#21100A] border border-[#6F4E37]/40 mb-4 shadow-[0_0_20px_rgba(111,78,55,0.2)]">
            <Sparkles className="w-3.5 h-3.5 text-[#6F4E37]" />
            <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-cream">
              Direct from Plantation
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight">
            BRING HOME <br />
            <span className="bg-gradient-to-r from-[#C49A6C] via-[#EAD7C3] to-[#6F4E37] bg-clip-text text-transparent">
              THE GOLD.
            </span>
          </h2>

          <p className="mt-4 text-base text-cream/70 font-light">
            Elevate your everyday coffee ritual. Sealed in airtight glass to
            preserve golden crystallization and fresh roast fragrance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#080503]/80 border border-[#6F4E37]/35 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.85)] backdrop-blur-xl">
          <div className="lg:col-span-6 relative flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden bg-gradient-to-b from-[#21100A]/60 via-[#120A06] to-[#080503] border border-[#6F4E37]/30 flex items-center justify-center p-6 group">
              <div className="absolute inset-0 bg-[#6F4E37]/20 opacity-30 group-hover:opacity-60 transition-opacity blur-2xl" />
              <img
                src="/images/coffee/120.webp"
                alt="Narasu's Gold Freeze Dried Coffee Jar"
                className="relative z-10 w-full h-full object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)] group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-[#080503]/85 border border-[#6F4E37]/50 text-[10px] font-bold uppercase tracking-widest text-[#C49A6C]">
                Official Jar • 50g
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs uppercase tracking-[0.25em] text-[#C49A6C] font-bold">
                  {buyNowSection.type}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#6F4E37]" />
                <span className="text-xs tracking-wider text-cream/60">
                  50g Glass Jar
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight">
                {buyNowSection.name}
              </h3>

              <div className="mt-4 flex items-baseline gap-4">
                <span className="text-4xl sm:text-5xl font-black text-[#C49A6C] tracking-tight">
                  {price}
                </span>
                <span className="text-lg text-cream/40 line-through font-light">
                  {mrp}
                </span>
                <span className="px-3 py-1 rounded-full bg-[#6F4E37]/25 border border-[#6F4E37]/50 text-xs font-bold text-[#EAD7C3]">
                  {savings}
                </span>
              </div>
              <p className="text-xs text-cream/50 mt-1">Inclusive of all taxes</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {buyNowSection.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-[#21100A] border border-[#6F4E37]/35 text-[11px] font-medium text-cream/80 tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex items-center gap-6">
                <span className="text-xs uppercase tracking-widest text-cream/70 font-semibold">
                  Quantity:
                </span>
                <div className="inline-flex items-center rounded-full bg-[#120A06] border border-[#6F4E37]/40 p-1">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 rounded-full flex items-center justify-center text-cream hover:text-[#C49A6C] hover:bg-[#21100A] transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-10 text-center font-bold text-sm text-white">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 rounded-full flex items-center justify-center text-cream hover:text-[#C49A6C] hover:bg-[#21100A] transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="mt-8">
                <button
                  onClick={handleAddToCart}
                  className="w-full relative overflow-hidden py-4 px-8 rounded-full font-bold uppercase tracking-[0.2em] text-sm text-white bg-[#6F4E37] hover:bg-[#855D42] shadow-[0_0_25px_rgba(111,78,55,0.5)] hover:shadow-[0_0_40px_rgba(111,78,55,0.8)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 group"
                >
                  <ShoppingBag className="w-4 h-4 transition-transform group-hover:rotate-12" />
                  <span>
                    {isAdded ? "Added to Cart!" : "Add to Cart"} — ₹{180 * quantity}
                  </span>
                </button>
              </div>

              <AnimatePresence>
                {isAdded && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-4 p-3 rounded-xl bg-emerald-950/70 border border-emerald-500/40 text-emerald-200 text-xs flex items-center gap-2"
                  >
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>
                      Added {quantity}x Narasu&apos;s Gold Freeze Dried Coffee (50g) to your cart!
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="mt-8 pt-6 border-t border-[#6F4E37]/30 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-cream/70">
              <div className="flex items-start gap-2.5">
                <Truck className="w-4 h-4 text-[#6F4E37] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">
                    Secure Dispatch
                  </span>
                  <span>{buyNowSection.deliveryPromise}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <RotateCcw className="w-4 h-4 text-[#6F4E37] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">
                    Peace of Mind
                  </span>
                  <span>{buyNowSection.returnPolicy}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuyNowSection;
