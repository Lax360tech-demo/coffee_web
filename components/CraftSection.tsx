"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  MessageSquare,
  Star,
  Check,
  ArrowRight,
  ShieldCheck,
  Eye,
  X,
} from "lucide-react";

export interface CategoryItem {
  id: "coffee" | "tea" | "food" | "rudhram";
  name: string;
  subtitle: string;
  icon: string;
}

export interface ProductItem {
  id: string;
  name: string;
  badge: string;
  category: "coffee" | "tea" | "food" | "rudhram";
  productType: string;
  weight: string;
  description: string;
  price: string;
  mrp: string;
  savings: string;
  image: string;
  features: string[];
  rating: number;
  reviewsCount: number;
  detailLabel?: string;
  detailValue?: string;
  notes: string;
}

export const CATEGORIES: CategoryItem[] = [
  {
    id: "coffee",
    name: "Coffee",
    subtitle: "Freeze Dried & Traditional Salem Filter Blends",
    icon: "/images/categories/category-coffee.webp",
  },
  {
    id: "tea",
    name: "Tea",
    subtitle: "High-Grown Nilgiri CTC Dust & Whole Orthodox Leaf",
    icon: "/images/categories/category-tea.webp",
  },
  {
    id: "food",
    name: "Food",
    subtitle: "Traditional Bilona Ghee, Spices & Pantry Staples",
    icon: "/images/categories/category-food.webp",
  },
  {
    id: "rudhram",
    name: "Rudhram",
    subtitle: "Artisanal Botanical & Ayurvedic Herbal Wellness Bars",
    icon: "/images/categories/category-rudhram.webp",
  },
];

export const PRODUCTS: ProductItem[] = [
  // ==================== COFFEE CATEGORY ====================
  {
    id: "gold-50g",
    name: "Narasu's Gold",
    badge: "Bestseller",
    category: "coffee",
    productType: "Freeze Dried Coffee",
    weight: "50g Glass Jar",
    description:
      "Sub-zero vacuum crystallized granules with Cryo-Lock™ aroma preservation. A velvety, balanced cup with notes of caramel and hazelnut.",
    price: "₹180",
    mrp: "₹210",
    savings: "14% OFF",
    image: "/images/products/product-1-gold-50g.webp",
    features: ["Cryo-Lock™ Drying", "100% Pure Coffee", "Instant Velvety Crema"],
    rating: 4.9,
    reviewsCount: 1480,
    detailLabel: "Roast",
    detailValue: "Signature Gold Roast",
    notes: "Caramel, Roasted Hazelnut & Cocoa",
  },
  {
    id: "gold-100g",
    name: "Gold Royal Reserve",
    badge: "Premium Reserve",
    category: "coffee",
    productType: "Freeze Dried Coffee",
    weight: "100g Glass Jar",
    description:
      "Specially selected high-elevation shade-grown beans. Deep aromatic body with toasted cocoa finish and rich golden crema.",
    price: "₹340",
    mrp: "₹395",
    savings: "14% OFF",
    image: "/images/products/product-2-gold-royal-100g.webp",
    features: ["High-Altitude Beans", "Double Crystallized", "Airtight Golden Seal"],
    rating: 4.9,
    reviewsCount: 920,
    detailLabel: "Roast",
    detailValue: "Medium Dark Roast",
    notes: "Dark Chocolate, Honey & Warm Spice",
  },
  {
    id: "instastrong",
    name: "Narasu's InstaStrong",
    badge: "Bold & Intense",
    category: "coffee",
    productType: "Soluble Intense Blend",
    weight: "100g Value Pack",
    description:
      "A bold South Indian instant coffee crafted for morning wake-up intensity. Delivers a robust full-bodied kick with milk or black.",
    price: "₹160",
    mrp: "₹185",
    savings: "14% OFF",
    image: "/images/products/product-3-instastrong.webp",
    features: ["Intense Morning Roast", "Full-Bodied Decoction", "Rich Frothy Cup"],
    rating: 4.8,
    reviewsCount: 850,
    detailLabel: "Roast",
    detailValue: "Dark French Roast",
    notes: "Molasses, Roasted Walnut & Earthy Woods",
  },
  {
    id: "heritage-deluxe",
    name: "Deluxe Filter Coffee",
    badge: "Heritage Since 1926",
    category: "coffee",
    productType: "Traditional Filter Blend",
    weight: "200g Fresh Pack",
    description:
      "The timeless Salem recipe combining plantation Arabica with select chicory for the legendary South Indian degree coffee ritual.",
    price: "₹145",
    mrp: "₹170",
    savings: "15% OFF",
    image: "/images/products/product-4-deluxe-filter.webp",
    features: ["80:20 Heritage Recipe", "Slow Drip Decoction", "Authentic Salem Taste"],
    rating: 5.0,
    reviewsCount: 2100,
    detailLabel: "Roast",
    detailValue: "Traditional Filter Roast",
    notes: "Toasted Chicory, Malt & Dark Cane Sugar",
  },

  // ==================== TEA CATEGORY ====================
  {
    id: "tea-royal-dust",
    name: "Narasu's Royal Dust Tea",
    badge: "Brisk & Strong",
    category: "tea",
    productType: "CTC Dust Tea",
    weight: "500g Fresh Pack",
    description:
      "High-grown Nilgiri CTC dust tea producing a deep ruby-amber liquor, brisk body, and invigorating malty strength for the perfect morning chai.",
    price: "₹190",
    mrp: "₹220",
    savings: "14% OFF",
    image: "/images/products/tea-1-royal-dust.webp",
    features: ["Nilgiri High-Grown", "Deep Amber Liquor", "Ideal with Fresh Milk"],
    rating: 4.9,
    reviewsCount: 1120,
    detailLabel: "Grade",
    detailValue: "Premium Superfine Dust",
    notes: "Malty, Brisk Tannins & Warm Amber",
  },
  {
    id: "tea-classic-leaf",
    name: "Narasu's Classic Leaf Tea",
    badge: "Whole Orthodox Leaf",
    category: "tea",
    productType: "Orthodox Leaf Tea",
    weight: "250g Tin Canister",
    description:
      "Handpicked whole orthodox tea leaves from high-altitude South Indian estates. Delivers gentle floral notes with brilliant clarity and golden hue.",
    price: "₹260",
    mrp: "₹295",
    savings: "12% OFF",
    image: "/images/products/tea-2-classic-leaf.webp",
    features: ["Whole Orthodox Leaf", "Golden Liquor Clarity", "Airtight Keepsake Tin"],
    rating: 4.8,
    reviewsCount: 740,
    detailLabel: "Grade",
    detailValue: "Golden Flowery Orange Pekoe",
    notes: "Floral Orchid, Muscatel & Mild Honey",
  },
  {
    id: "tea-masala-chai",
    name: "Royal Masala Chai",
    badge: "Hand-Spiced Recipe",
    category: "tea",
    productType: "Spiced CTC Tea",
    weight: "250g Resealable Pouch",
    description:
      "Robust estate tea leaves blended with freshly crushed green cardamom, Ceylon cinnamon, cloves, ginger, and star anise for authentic warmth.",
    price: "₹210",
    mrp: "₹240",
    savings: "13% OFF",
    image: "/images/products/tea-3-masala-chai.webp",
    features: ["7 Authentic Spices", "Immunity Boosting", "Zesty Aromatic Kick"],
    rating: 4.9,
    reviewsCount: 980,
    detailLabel: "Spices",
    detailValue: "Cardamom, Cinnamon & Clove",
    notes: "Green Cardamom, Cinnamon Bark & Pungent Clove",
  },
  {
    id: "tea-nilgiri-green",
    name: "Nilgiri Green Tea",
    badge: "Antioxidant Rich",
    category: "tea",
    productType: "Loose Leaf Green Tea",
    weight: "100g Vintage Tin",
    description:
      "Pure mountain-grown young green tea leaves gently steamed to preserve vital polyphenols and refreshing vegetal sweetness without bitterness.",
    price: "₹230",
    mrp: "₹265",
    savings: "13% OFF",
    image: "/images/products/tea-4-nilgiri-green.webp",
    features: ["Non-Fermented Leaf", "Rich in Polyphenols", "Delicate Spring Aroma"],
    rating: 4.8,
    reviewsCount: 650,
    detailLabel: "Origin",
    detailValue: "Nilgiri Blue Mountains",
    notes: "Fresh Spring Grass, Dew & Sweet Jasmine",
  },

  // ==================== FOOD CATEGORY ====================
  {
    id: "food-pure-ghee",
    name: "Narasu's Pure Cow Ghee",
    badge: "Bilona Method",
    category: "food",
    productType: "Clarified Cow Butter",
    weight: "500g Glass Jar",
    description:
      "Traditional slow-cooked golden ghee prepared from farm-fresh grass-fed cow milk with a naturally granular texture and heavenly nutty aroma.",
    price: "₹420",
    mrp: "₹480",
    savings: "13% OFF",
    image: "/images/products/food-1-pure-ghee.webp",
    features: ["Granular Danedar Texture", "100% Pure Cow Milk", "Rich Nutty Aroma"],
    rating: 5.0,
    reviewsCount: 1640,
    detailLabel: "Method",
    detailValue: "Traditional Bilona Churned",
    notes: "Caramelized Butter, Nutty Aroma & Golden Richness",
  },
  {
    id: "food-roasted-vermicelli",
    name: "Roasted Vermicelli",
    badge: "100% Durum Wheat",
    category: "food",
    productType: "Seviyan / Semiya",
    weight: "400g Fresh Pack",
    description:
      "Uniformly pre-roasted golden durum wheat semolina vermicelli. Non-sticky and quick cooking, ideal for classic South Indian semiya payasam and savoury upma.",
    price: "₹75",
    mrp: "₹85",
    savings: "12% OFF",
    image: "/images/products/food-2-roasted-vermicelli.webp",
    features: ["Pre-Roasted Golden", "Non-Sticky Strands", "High Durum Protein"],
    rating: 4.8,
    reviewsCount: 520,
    detailLabel: "Grain",
    detailValue: "100% Hard Durum Wheat",
    notes: "Toasted Wheat, Golden Crisp & Delicate Texture",
  },
  {
    id: "food-sambar-powder",
    name: "Salem Sambar Powder",
    badge: "Heritage Salem Spice",
    category: "food",
    productType: "Stone-Ground Masala",
    weight: "250g Pouch",
    description:
      "Authentic heritage spice blend stone-ground with Salem Guntur chillies, coriander seeds, fenugreek, and roasted dals for traditional banquet-style sambar.",
    price: "₹110",
    mrp: "₹125",
    savings: "12% OFF",
    image: "/images/products/food-3-sambar-powder.webp",
    features: ["Stone-Ground Recipe", "Zero Preservatives", "Authentic Salem Flavour"],
    rating: 4.9,
    reviewsCount: 890,
    detailLabel: "Style",
    detailValue: "Salem Traditional Blend",
    notes: "Salem Red Chillies, Toasted Coriander & Hing",
  },
  {
    id: "food-sesame-oil",
    name: "Cold-Pressed Sesame Oil",
    badge: "Wood-Pressed Gingelly",
    category: "food",
    productType: "Pure Gingelly Oil",
    weight: "500ml Amber Bottle",
    description:
      "Extracted from black sesame seeds crushed with traditional palm jaggery in wooden chekku press. Preserves authentic pungent aroma and healthy lignans.",
    price: "₹240",
    mrp: "₹275",
    savings: "13% OFF",
    image: "/images/products/food-4-sesame-oil.webp",
    features: ["Traditional Vaagai Chekku", "Palm Jaggery Extracted", "Raw Unrefined"],
    rating: 4.9,
    reviewsCount: 610,
    detailLabel: "Press",
    detailValue: "Wood Chekku Cold Press",
    notes: "Toasted Sesame, Earthy Pungency & Sweet Jaggery Understone",
  },

  // ==================== RUDHRAM CATEGORY ====================
  {
    id: "rudhram-sandal-soap",
    name: "Sandalwood Herbal Soap",
    badge: "Pure Mysore Sandal",
    category: "rudhram",
    productType: "Artisan Bath Bar",
    weight: "100g Herbal Bar",
    description:
      "Handcrafted cold-process Ayurvedic bath bar enriched with pure Mysore sandalwood oil, shea butter, and organic botanical extracts for deep cooling comfort.",
    price: "₹130",
    mrp: "₹150",
    savings: "13% OFF",
    image: "/images/products/rudhram-1-sandal-soap.webp",
    features: ["Pure Sandalwood Oil", "Cold-Process Cured", "Skin Cooling Comfort"],
    rating: 4.9,
    reviewsCount: 780,
    detailLabel: "Key Herb",
    detailValue: "Mysore Sandalwood & Shea",
    notes: "Mysore Sandalwood, Warm Cedar & Sacred Forest",
  },
  {
    id: "rudhram-rosemary-soap",
    name: "Rosemary & Cinnamon Soap",
    badge: "Botanical Scrub",
    category: "rudhram",
    productType: "Exfoliating Herbal Bar",
    weight: "110g Artisan Bar",
    description:
      "Invigorating artisan scrub bar formulated with fresh wild rosemary sprigs, crushed Ceylon cinnamon bark, and cold-pressed almond oil to renew tired skin.",
    price: "₹135",
    mrp: "₹155",
    savings: "13% OFF",
    image: "/images/products/rudhram-2-rosemary-soap.webp",
    features: ["Crushed Cinnamon Scrub", "Fresh Rosemary Infusion", "Deep Skin Renewal"],
    rating: 5.0,
    reviewsCount: 690,
    detailLabel: "Key Herb",
    detailValue: "Wild Rosemary & Cinnamon",
    notes: "Ceylon Cinnamon, Pine Rosemary & Spiced Bark",
  },
  {
    id: "rudhram-neem-soap",
    name: "Neem & Vetiver Purifying Bar",
    badge: "Ayurvedic Detox",
    category: "rudhram",
    productType: "Therapeutic Bath Bar",
    weight: "100g Detox Bar",
    description:
      "Therapeutic cleansing bar containing hand-harvested organic neem leaves, cooling wild vetiver (khus) roots, and virgin coconut oil for blemish-free skin.",
    price: "₹120",
    mrp: "₹140",
    savings: "14% OFF",
    image: "/images/products/rudhram-3-neem-soap.webp",
    features: ["Organic Neem Leaf", "Wild Khus Roots", "Purifying Antibacterial"],
    rating: 4.8,
    reviewsCount: 540,
    detailLabel: "Key Herb",
    detailValue: "Organic Neem & Khus Vetiver",
    notes: "Earthy Vetiver, Green Neem & Rain-Soaked Earth",
  },
  {
    id: "rudhram-kumkumadi-soap",
    name: "Kumkumadi Glow Bar",
    badge: "Kashmiri Saffron",
    category: "rudhram",
    productType: "Luxury Radiance Bar",
    weight: "100g Glow Bar",
    description:
      "Ancient Ayurvedic beauty bar steeped in authentic Kumkumadi Tailam with Grade-A Kashmiri saffron, Indian lotus, and licorice for a luminous natural complexion.",
    price: "₹160",
    mrp: "₹185",
    savings: "14% OFF",
    image: "/images/products/rudhram-4-kumkumadi-soap.webp",
    features: ["Kumkumadi Tailam", "Kashmiri Saffron", "Golden Radiance"],
    rating: 4.9,
    reviewsCount: 910,
    detailLabel: "Key Herb",
    detailValue: "Kashmiri Saffron & Lotus",
    notes: "Kashmiri Saffron, Lotus Petal & Royal Sandalwood",
  },
];

export interface CraftSectionProps {
  onEnquire?: (productName: string) => void;
}

export const ProductsSection: React.FC<CraftSectionProps> = ({ onEnquire }) => {
  const [selectedCategory, setSelectedCategory] = useState<"coffee" | "tea" | "food" | "rudhram">("coffee");
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [enquiryNotification, setEnquiryNotification] = useState<string | null>(null);

  const filteredProducts = PRODUCTS.filter(
    (product) => product.category === selectedCategory
  );

  const activeCategoryInfo = CATEGORIES.find((c) => c.id === selectedCategory);

  const handleEnquire = (product: ProductItem) => {
    setEnquiryNotification(
      `Product enquiry set to: ${product.name}! Redirecting to Contact form...`
    );
    if (onEnquire) {
      onEnquire(product.name);
    }
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("narasus-product-enquire", {
          detail: { productName: product.name },
        })
      );
      const target = document.querySelector("#contact");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
    setTimeout(() => setEnquiryNotification(null), 4000);
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
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
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
            Select a category to explore our masterfully crafted range — from sub-zero
            freeze-dried coffee and brisk mountain teas to traditional farm foods and
            Ayurvedic Rudhram bars.
          </p>
        </div>

        {/* Category Selection Filter Bar - Matching screenshot interaction */}
        <div className="flex flex-col items-center justify-center mb-12 sm:mb-16">
          <div className="grid grid-cols-4 gap-3 sm:gap-6 md:gap-8 max-w-xl w-full px-2">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className="group flex flex-col items-center focus:outline-none transition-transform duration-300 active:scale-95"
                  aria-pressed={isActive}
                  aria-label={`Filter by ${cat.name}`}
                >
                  {/* Rounded square card matching screenshot */}
                  <div
                    className={`relative w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-2xl sm:rounded-3xl p-1.5 sm:p-2.5 transition-all duration-300 flex items-center justify-center overflow-hidden ${
                      isActive
                        ? "bg-[#21100A] ring-2 ring-[#C49A6C] shadow-[0_0_25px_rgba(196,154,108,0.55)] scale-105"
                        : "bg-[#140A06]/90 ring-1 ring-[#6F4E37]/40 hover:ring-[#C49A6C]/50 hover:bg-[#1E0F09] hover:scale-102"
                    }`}
                  >
                    <img
                      src={cat.icon}
                      alt={cat.name}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-contain filter drop-shadow-md group-hover:scale-105 transition-transform duration-300 rounded-xl sm:rounded-2xl"
                    />

                    {isActive && (
                      <motion.div
                        layoutId="activeCategoryGlow"
                        className="absolute inset-0 bg-gradient-to-t from-[#C49A6C]/25 via-transparent to-transparent pointer-events-none"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                  </div>

                  {/* Category Label */}
                  <span
                    className={`mt-2.5 sm:mt-3 text-xs sm:text-base font-bold tracking-wide transition-colors ${
                      isActive
                        ? "text-[#EAD7C3] drop-shadow-[0_1px_3px_rgba(196,154,108,0.6)]"
                        : "text-cream/65 group-hover:text-cream"
                    }`}
                  >
                    {cat.name}
                  </span>

                  {/* Active Indicator Bar */}
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryBar"
                      className="w-8 sm:w-10 h-0.5 sm:h-1 bg-[#C49A6C] rounded-full mt-1 sm:mt-1.5 shadow-[0_0_8px_#C49A6C]"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Category Description Tag */}
          {activeCategoryInfo && (
            <motion.p
              key={activeCategoryInfo.id}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-6 text-xs sm:text-sm font-mono text-[#C49A6C] uppercase tracking-widest text-center"
            >
              Showing {activeCategoryInfo.name} • {activeCategoryInfo.subtitle}
            </motion.p>
          )}
        </div>

        {/* Dynamic Product Grid with Smooth Switching Transition */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7"
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative rounded-3xl bg-[#120A06]/85 backdrop-blur-md border border-[#6F4E37]/40 hover:border-[#C49A6C] transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)] hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden p-5"
              >
                {/* Card Top: Badges & Details */}
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
                      {product.productType}
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

                {/* Card Footer: Price, Savings & View Details */}
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

                  {/* View Details button - Enquire Now removed per user request */}
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="w-full py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider text-cream/85 hover:text-white bg-[#21100A] hover:bg-[#33180F] border border-[#6F4E37]/40 hover:border-[#C49A6C]/60 transition-all text-center flex items-center justify-center gap-2 group-hover:bg-[#2A140D]"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#C49A6C]" />
                    <span>View Details</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom Guarantee Banner */}
        <div className="mt-14 p-6 rounded-2xl bg-[#120A06]/80 backdrop-blur-md border border-[#6F4E37]/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#21100A] border border-[#6F4E37]/40 flex items-center justify-center text-[#6F4E37] flex-shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.85)]">
                Guaranteed Freshness & Heritage Purity
              </h4>
              <p className="text-xs text-cream/70 font-light drop-shadow-[0_1px_2px_rgba(0,0,0,0.85)]">
                Directly packed from our Salem roasteries and kitchens since 1926.
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              if (onEnquire) onEnquire("Custom Bulk Order / Wholesale");
              if (typeof window !== "undefined") {
                window.dispatchEvent(
                  new CustomEvent("narasus-product-enquire", {
                    detail: { productName: "Custom Bulk Order / Wholesale" },
                  })
                );
                const target = document.querySelector("#contact");
                if (target) target.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest text-white bg-[#6F4E37] hover:bg-[#855D42] transition-colors flex-shrink-0"
          >
            <span>Custom Bulk Enquiries</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Enquiry Toast Notification */}
      <AnimatePresence>
        {enquiryNotification && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 bg-[#1A0C08] border border-[#C49A6C] px-5 py-3.5 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.8)] flex items-center gap-3 max-w-sm"
          >
            <div className="w-8 h-8 rounded-full bg-[#6F4E37] flex items-center justify-center text-white flex-shrink-0">
              <Check className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-white uppercase tracking-wider">Product Selected</p>
              <p className="text-[11px] text-[#F4E3C1]">{enquiryNotification}</p>
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
                    {selectedProduct.productType} • {selectedProduct.weight}
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
                    {selectedProduct.detailLabel && selectedProduct.detailValue && (
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#6F4E37]" />
                        <span><strong>{selectedProduct.detailLabel}:</strong> {selectedProduct.detailValue}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#6F4E37]" />
                      <span><strong>Key Notes:</strong> {selectedProduct.notes}</span>
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
                      handleEnquire(selectedProduct);
                    }}
                    className="w-full py-3 rounded-full text-xs font-bold uppercase tracking-widest text-white bg-gradient-to-r from-[#6F4E37] to-[#855D42] hover:from-[#855D42] hover:to-[#A37453] shadow-[0_4px_20px_rgba(111,78,55,0.4)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4 text-[#EAD7C3]" />
                    Enquire About {selectedProduct.name}
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
