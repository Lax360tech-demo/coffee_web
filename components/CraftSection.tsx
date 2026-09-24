"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ShoppingBag,
  Star,
  Check,
  ArrowRight,
  ShieldCheck,
  Eye,
  X,
} from "lucide-react";

interface ProductItem {
  id: string;
  name: string;
  badge: string;
  category: string;
  weight: string;
  description: string;
  price: string;
  mrp: string;
  savings: string;
  image: string;
  features: string[];
  rating: number;
  reviewsCount: number;
  roastLevel: string;
  notes: string;
}

const PRODUCTS: ProductItem[] = [
  {
    id: "gold-50g",
    name: "Narasu's Gold",
    badge: "Bestseller",
    category: "Freeze Dried Coffee",
    weight: "50g Glass Jar",
    description:
      "Sub-zero vacuum crystallized granules with Cryo-Lock™ aroma preservation. A velvety, balanced cup with notes of caramel and hazelnut.",
    price: "₹180",
    mrp: "₹210",
    savings: "14% OFF",
    image: "/images/products/product-1-gold-50g.jpg",
    features: ["Cryo-Lock™ Drying", "100% Pure Coffee", "Instant Velvety Crema"],
    rating: 4.9,
    reviewsCount: 1480,
    roastLevel: "Signature Gold",
    notes: "Caramel, Roasted Hazelnut & Cocoa",
  },
  {
    id: "gold-100g",
    name: "Gold Royal Reserve",
    badge: "Premium Reserve",
    category: "Freeze Dried Coffee",
    weight: "100g Glass Jar",
    description:
      "Specially selected high-elevation shade-grown beans. Deep aromatic body with toasted cocoa finish and rich golden crema.",
    price: "₹340",
    mrp: "₹395",
    savings: "14% OFF",
    image: "/images/products/product-2-gold-royal-100g.jpg",
    features: ["High-Altitude Beans", "Double Crystallized", "Airtight Golden Seal"],
    rating: 4.9,
    reviewsCount: 920,
    roastLevel: "Medium Dark Roast",
    notes: "Dark Chocolate, Honey & Warm Spice",
  },
  {
    id: "instastrong",
    name: "Narasu's InstaStrong",
    badge: "Bold & Intense",
    category: "Soluble Intense Blend",
    weight: "100g Value Pack",
    description:
      "A bold South Indian instant coffee crafted for morning wake-up intensity. Delivers a robust full-bodied kick with milk or black.",
    price: "₹160",
    mrp: "₹185",
    savings: "14% OFF",
    image: "/images/products/product-3-instastrong.jpg",
    features: ["Intense Morning Roast", "Full-Bodied Decoction", "Rich Frothy Cup"],
    rating: 4.8,
    reviewsCount: 850,
    roastLevel: "Dark Roast",
    notes: "Molasses, Roasted Walnut & Earthy Woods",
  },
  {
    id: "heritage-deluxe",
    name: "Deluxe Filter Coffee",
    badge: "Heritage Since 1926",
    category: "Traditional Filter Blend",
    weight: "200g Fresh Pack",
    description:
      "The timeless Salem recipe combining plantation Arabica with select chicory for the legendary South Indian degree coffee ritual.",
    price: "₹145",
    mrp: "₹170",
    savings: "15% OFF",
    image: "/images/products/product-4-deluxe-filter.jpg",
    features: ["80:20 Heritage Recipe", "Slow Drip Decoction", "Authentic Salem Taste"],
    rating: 5.0,
    reviewsCount: 2100,
    roastLevel: "Traditional Filter Roast",
    notes: "Toasted Chicory, Malt & Dark Cane Sugar",
  },
];

export const ProductsSection: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [orderNotification, setOrderNotification] = useState<string | null>(null);

  const handleOrder = (product: ProductItem) => {
    setOrderNotification(`Order placed for ${product.name} (${product.weight})!`);
    setTimeout(() => setOrderNotification(null), 3500);
  };

  return (
    <section
      id="products"
      className="relative w-full py-28 px-4 sm:px-6 lg:px-8 border-t border-[#6F4E37]/30 overflow-hidden"
    >
      {/* Background Image - 100% visible with zero black overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/images/products-bg.jpg"
          alt="Products Background"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A0C08]/85 backdrop-blur-md border border-[#6F4E37]/50 mb-4 shadow-[0_4px_20px_rgba(0,0,0,0.6)]">
            <Sparkles className="w-3.5 h-3.5 text-[#C49A6C]" />
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-cream drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
              Signature Collection
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            OUR <br />
            <span className="bg-gradient-to-r from-[#C49A6C] via-[#EAD7C3] to-[#6F4E37] bg-clip-text text-transparent">
              PRODUCTS
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#F4E3C1] font-normal leading-relaxed max-w-2xl mx-auto drop-shadow-[0_1px_4px_rgba(0,0,0,0.95)]">
            Discover our masterfully crafted coffee range. From cryogenically frozen
            golden granules to heritage South Indian filter blends.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative rounded-3xl bg-[#120A06]/80 backdrop-blur-md border border-[#6F4E37]/40 hover:border-[#C49A6C] transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)] hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden p-5"
            >
              {/* Card Top: Badges & Category */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#21100A] border border-[#6F4E37]/40 text-[10px] uppercase tracking-wider font-bold text-[#C49A6C]">
                    {product.badge}
                  </span>
                  <span className="text-[11px] font-mono text-cream/70 tracking-wider drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                    {product.weight}
                  </span>
                </div>

                {/* Product Image Frame */}
                <div className="relative w-full aspect-square rounded-2xl bg-[#080503]/50 border border-[#6F4E37]/30 backdrop-blur-sm overflow-hidden flex items-center justify-center p-4 mb-4 group-hover:border-[#6F4E37]/70 transition-colors">
                  <div className="absolute inset-0 bg-[#6F4E37]/15 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    decoding="async"
                    className="relative z-10 w-full h-full object-contain filter drop-shadow-[0_10px_25px_rgba(0,0,0,0.85)] group-hover:scale-105 transition-transform duration-500"
                  />
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="absolute bottom-3 right-3 z-20 p-2 rounded-full bg-[#080503]/85 text-cream/70 hover:text-white hover:bg-[#6F4E37] border border-[#6F4E37]/40 transition-all opacity-0 group-hover:opacity-100 shadow-lg"
                    aria-label={`Quick view ${product.name}`}
                  >
                    <Eye className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Rating & Category */}
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] uppercase tracking-widest text-[#C49A6C] font-semibold">
                    {product.category}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] text-[#C49A6C]">
                    <Star className="w-3 h-3 fill-[#C49A6C] text-[#C49A6C]" />
                    <span className="font-bold">{product.rating}</span>
                    <span className="text-cream/40 text-[10px]">
                      ({product.reviewsCount})
                    </span>
                  </div>
                </div>

                {/* Product Title */}
                <h3 className="text-xl font-black uppercase tracking-tight text-white mb-2 group-hover:text-[#EAD7C3] transition-colors drop-shadow-[0_1px_3px_rgba(0,0,0,0.85)]">
                  {product.name}
                </h3>

                {/* Short Description */}
                <p className="text-xs text-cream/70 font-light leading-relaxed mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* Feature Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {product.features.slice(0, 2).map((feat) => (
                    <span
                      key={feat}
                      className="px-2 py-0.5 rounded-md bg-[#21100A]/70 border border-[#6F4E37]/30 text-[10px] text-cream/80"
                    >
                      {feat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer: Price & Details */}
              <div className="pt-4 border-t border-[#6F4E37]/30">
                <div className="flex items-baseline justify-between mb-3.5">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-black text-[#C49A6C]">
                      {product.price}
                    </span>
                    <span className="text-xs text-cream/40 line-through">
                      {product.mrp}
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-[#EAD7C3] px-2 py-0.5 rounded bg-[#6F4E37]/30 border border-[#6F4E37]/40">
                    {product.savings}
                  </span>
                </div>

                <button
                  onClick={() => setSelectedProduct(product)}
                  className="w-full py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider text-cream/80 hover:text-white bg-[#21100A] hover:bg-[#33180F] border border-[#6F4E37]/40 transition-all text-center"
                >
                  Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="mt-14 p-6 rounded-2xl bg-[#120A06]/80 backdrop-blur-md border border-[#6F4E37]/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#21100A] border border-[#6F4E37]/40 flex items-center justify-center text-[#6F4E37] flex-shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.85)]">
                Guaranteed Freshness & Purity
              </h4>
              <p className="text-xs text-cream/70 font-light drop-shadow-[0_1px_2px_rgba(0,0,0,0.85)]">
                Directly packed from our Salem roastery to lock in volatile roasted oils.
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              const target = document.querySelector("#footer");
              if (target) target.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest text-white bg-[#6F4E37] hover:bg-[#855D42] transition-colors"
          >
            <span>Explore Offers</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Order Toast Notification */}
      <AnimatePresence>
        {orderNotification && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 bg-[#1A0C08] border border-[#C49A6C] px-5 py-3.5 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.8)] flex items-center gap-3"
          >
            <div className="w-8 h-8 rounded-full bg-[#6F4E37] flex items-center justify-center text-white">
              <Check className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-white uppercase tracking-wider">Item Added</p>
              <p className="text-[11px] text-[#F4E3C1]">{orderNotification}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Quick View Product Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative z-10 w-full max-w-2xl rounded-3xl bg-[#120A06] border border-[#6F4E37]/60 p-6 sm:p-8 shadow-2xl overflow-hidden text-left"
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 p-2 text-cream/60 hover:text-white rounded-full bg-[#21100A] border border-[#6F4E37]/40 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                <div className="relative aspect-square rounded-2xl bg-gradient-to-b from-[#21100A] to-[#080503] border border-[#6F4E37]/40 flex items-center justify-center p-6">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-full object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)]"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#6F4E37] text-[10px] font-bold uppercase text-white tracking-wider">
                    {selectedProduct.badge}
                  </span>
                </div>

                <div>
                  <span className="text-xs uppercase tracking-widest text-[#C49A6C] font-semibold block mb-1">
                    {selectedProduct.category} • {selectedProduct.weight}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight mb-2">
                    {selectedProduct.name}
                  </h3>

                  <div className="flex items-center gap-2 mb-3 text-xs text-[#C49A6C]">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#C49A6C] text-[#C49A6C]" />
                      ))}
                    </div>
                    <span className="text-cream/50">({selectedProduct.reviewsCount} reviews)</span>
                  </div>

                  <p className="text-xs sm:text-sm text-cream/75 font-light leading-relaxed mb-4">
                    {selectedProduct.description}
                  </p>

                  <div className="space-y-2 mb-5 text-xs text-cream/80">
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#6F4E37]" />
                      <span><strong>Roast:</strong> {selectedProduct.roastLevel}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#6F4E37]" />
                      <span><strong>Tasting Notes:</strong> {selectedProduct.notes}</span>
                    </div>
                  </div>

                  <div className="flex items-baseline gap-3 mb-5">
                    <span className="text-3xl font-black text-[#C49A6C]">
                      {selectedProduct.price}
                    </span>
                    <span className="text-sm text-cream/40 line-through">
                      {selectedProduct.mrp}
                    </span>
                    <span className="text-xs font-bold text-[#EAD7C3] px-2 py-0.5 rounded bg-[#6F4E37]/30 border border-[#6F4E37]/40">
                      {selectedProduct.savings}
                    </span>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedProduct(null);
                      handleOrder(selectedProduct);
                    }}
                    className="w-full py-3 rounded-full text-xs font-bold uppercase tracking-widest text-white bg-[#6F4E37] hover:bg-[#855D42] shadow-[0_4px_20px_rgba(111,78,55,0.4)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    Order Narasu&apos;s Now
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export const CraftSection = ProductsSection;
export default ProductsSection;
