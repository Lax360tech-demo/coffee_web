"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Maximize2, X, Camera } from "lucide-react";

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  tag: string;
  description: string;
  image: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "The Morning Pour",
    category: "The Perfect Cup",
    tag: "Artisanal Brew",
    description: "Freshly brewed Narasu's signature coffee with dense golden crema, served beside freshly roasted beans.",
    image: "/images/gallery/gallery-1-cup-on-table.jpg",
  },
  {
    id: "g2",
    title: "Cryo-Lock™ Granules",
    category: "Roast & Crystallization",
    tag: "Salem Craft",
    description: "Master roasted high-elevation beans alongside sub-zero vacuum crystallized coffee granules.",
    image: "/images/gallery/gallery-2-roastery-beans.jpg",
  },
  {
    id: "g3",
    title: "The Roastery Counter",
    category: "Atmosphere",
    tag: "Heritage Ambiance",
    description: "Atmospheric dark wood showcase illuminated with warm spotlights and rising aromatic steam.",
    image: "/images/gallery/gallery-3-showcase-counter.jpg",
  },
  {
    id: "g4",
    title: "Narasu's Gold Royal Jar",
    category: "Signature Collection",
    tag: "Airtight Glass",
    description: "The iconic 100% pure freeze-dried coffee jar preserving volatile aromatic oils.",
    image: "/images/gallery/gallery-4-jar-reveal.jpg",
  },
  {
    id: "g5",
    title: "Shade-Grown Plantation",
    category: "Estate Origin",
    tag: "High Elevation",
    description: "Sunlight filtering through canopy trees onto ripening red Arabica and Robusta cherries.",
    image: "/images/gallery/gallery-5-plantation.jpg",
  },
  {
    id: "g6",
    title: "Precision Packaging Line",
    category: "Modern Manufacturing",
    tag: "Automated Line",
    description: "High-speed hermetic packaging at our Salem facility locking in freshness directly from roasting.",
    image: "/images/gallery/gallery-6-packaging.jpg",
  },
];

export const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const categories = [
    "All",
    "The Perfect Cup",
    "Roast & Crystallization",
    "Estate Origin",
    "Signature Collection",
  ];

  const filteredItems =
    activeFilter === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section
      id="gallery"
      className="relative w-full py-28 px-4 sm:px-6 lg:px-8 border-t border-[#6F4E37]/30 overflow-hidden scroll-mt-16"
    >
      {/* Background Image - 100% visible with zero heavy black overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/images/gallery-bg.jpg"
          alt="Coffee Gallery Background"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Soft dark edge gradients for smooth section transitions */}
      <div className="absolute top-0 left-0 right-0 h-16 sm:h-24 bg-gradient-to-b from-[#080503]/70 via-[#080503]/20 to-transparent pointer-events-none z-[1]" />
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 bg-gradient-to-t from-[#080503]/70 via-[#080503]/20 to-transparent pointer-events-none z-[1]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A0C08]/90 border border-[#6F4E37]/50 mb-4 shadow-[0_4px_20px_rgba(0,0,0,0.6)]">
            <Camera className="w-3.5 h-3.5 text-[#C49A6C]" />
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-cream drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
              Visual Moments
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            COFFEE <br />
            <span className="bg-gradient-to-r from-[#C49A6C] via-[#EAD7C3] to-[#6F4E37] bg-clip-text text-transparent">
              GALLERY
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#F4E3C1] font-normal leading-relaxed max-w-2xl mx-auto drop-shadow-[0_1px_4px_rgba(0,0,0,0.95)]">
            A visual tribute to the heritage of South Indian coffee craft. From early morning plantation harvests to the golden warmth of every brewed cup.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  activeFilter === cat
                    ? "bg-[#6F4E37] text-white shadow-[0_0_20px_rgba(111,78,55,0.5)] border border-[#C49A6C]"
                    : "bg-[#180E0A] text-cream/70 hover:text-white border border-[#6F4E37]/30 hover:border-[#6F4E37]/70"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative rounded-3xl overflow-hidden bg-[#120A06] border border-[#6F4E37]/35 hover:border-[#C49A6C] transition-all duration-500 shadow-[0_10px_35px_rgba(0,0,0,0.7)] hover:shadow-[0_20px_50px_rgba(111,78,55,0.3)] flex flex-col cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/60">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#120A06] via-transparent to-transparent opacity-80" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#080503]/85 border border-[#6F4E37]/50 backdrop-blur-md">
                    <Sparkles className="w-3 h-3 text-[#C49A6C]" />
                    <span className="text-[10px] font-bold tracking-[0.2em] text-cream uppercase">
                      {item.tag}
                    </span>
                  </div>

                  {/* Quick Expand Icon Button */}
                  <div className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#080503]/85 text-cream/70 hover:text-white border border-[#6F4E37]/40 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#C49A6C] block mb-1.5">
                      {item.category}
                    </span>

                    <h3 className="text-xl font-black uppercase text-white tracking-tight mb-2 group-hover:text-[#EAD7C3] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs text-cream/75 font-light leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#6F4E37]/30 flex items-center justify-between text-[11px] text-[#C49A6C]">
                    <span className="font-mono tracking-wider">Narasu's Since 1926</span>
                    <span className="text-cream/50 group-hover:text-white group-hover:translate-x-1 transition-all">
                      View Frame &rarr;
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative z-10 w-full max-w-4xl max-h-[90vh] rounded-3xl bg-[#120A06] border border-[#6F4E37]/60 overflow-hidden shadow-2xl flex flex-col"
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#080503]/85 text-cream/80 hover:text-white border border-[#6F4E37]/50 backdrop-blur-md transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative w-full max-h-[60vh] bg-black flex items-center justify-center overflow-hidden">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-full object-contain max-h-[60vh]"
                />
              </div>

              <div className="p-6 sm:p-8 bg-gradient-to-b from-[#180E0A] to-[#120A06] border-t border-[#6F4E37]/30">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#21100A] border border-[#6F4E37]/40 text-[10px] uppercase font-bold text-[#C49A6C]">
                    {selectedItem.tag}
                  </span>
                  <span className="text-xs text-cream/50 font-mono tracking-wider">
                    {selectedItem.category}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight mb-2">
                  {selectedItem.title}
                </h3>

                <p className="text-xs sm:text-sm text-cream/80 font-light leading-relaxed">
                  {selectedItem.description}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export const CoffeeShopSection = GallerySection;
export default GallerySection;
