export interface ProductStat {
  label: string;
  value: string;
}

export interface StorySection {
  id: string;
  label: string;
  heading: string;
  description: string;
  highlight?: string;
}

export interface CraftStage {
  step: string;
  title: string;
  desc: string;
  detail: string;
}

export interface ShopMoment {
  period: "MORNING" | "AFTERNOON" | "EVENING";
  title: string;
  text: string;
  time: string;
  note: string;
}

export interface ProductAttribute {
  title: string;
  desc: string;
}

export interface ProductData {
  id: string;
  name: string;
  productType: string;
  tagline: string;
  price: string;
  mrp: string;
  savings: string;
  folderPath: string;
  themeColor: string;
  gradient: string;
  description: string;
  features: string[];
  stats: ProductStat[];
  storySections: StorySection[];
  detailsSection: {
    heading: string;
    subtitle: string;
    description: string;
    attributes: ProductAttribute[];
  };
  craftStages: CraftStage[];
  freshnessSection: {
    heading: string;
    tagline: string;
    stats: { value: string; label: string }[];
  };
  shopMoments: ShopMoment[];
  buyNowSection: {
    heading: string;
    name: string;
    type: string;
    price: string;
    tags: string[];
    deliveryPromise: string;
    returnPolicy: string;
  };
}

export const NARASUS_GOLD: ProductData = {
  id: "narasus-gold",
  name: "Narasu's Gold",
  productType: "Freeze Dried Coffee",
  tagline: "Rich. Smooth. Unforgettable.",
  price: "₹180",
  mrp: "₹210",
  savings: "Save ₹30 (14% OFF)",
  folderPath: "/images/coffee",
  themeColor: "#D6A15B",
  gradient: "linear-gradient(135deg, #080503 0%, #3A1C10 50%, #B87532 100%)",
  description:
    "Experience the rich aroma and smooth character of carefully crafted freeze dried coffee, designed to bring a premium coffee moment to every cup.",
  features: [
    "100% Premium Coffee",
    "Freeze Dried",
    "Rich Coffee Aroma",
    "Smooth Taste",
    "Easy to Prepare",
    "Premium Coffee Experience",
  ],
  stats: [
    { label: "Net Quantity", value: "50g" },
    { label: "Crafting Process", value: "Freeze Dried" },
    { label: "Sensory Profile", value: "Rich Aroma" },
    { label: "Brew Time", value: "Instant Preparation" },
  ],
  storySections: [
    {
      id: "01",
      label: "01 / THE AROMA",
      heading: "WAKE UP\nTO SOMETHING\nRICH.",
      description:
        "An unmistakable coffee aroma that turns an ordinary moment into something memorable.",
      highlight: "Cryogenic Freshness",
    },
    {
      id: "02",
      label: "02 / THE CRAFT",
      heading: "CRAFTED\nFOR THE\nPERFECT CUP.",
      description:
        "Carefully crafted freeze dried coffee designed to preserve its rich character and aroma.",
      highlight: "Artisanal Roasting",
    },
    {
      id: "03",
      label: "03 / THE GOLD",
      heading: "RICHNESS\nIN EVERY\nGRANULE.",
      description:
        "Deep coffee character with a smooth finish in every cup.",
      highlight: "Pure Soluble Crystals",
    },
    {
      id: "04",
      label: "04 / THE EXPERIENCE",
      heading: "MAKE EVERY\nCUP\nMATTER.",
      description:
        "From the first aroma to the final sip, enjoy a coffee moment worth remembering.",
      highlight: "Golden Moments",
    },
  ],
  detailsSection: {
    heading: "COFFEE WITH CHARACTER.",
    subtitle: "A Heritage of South Indian Excellence",
    description:
      "Crafted with over 90 years of master coffee blending heritage from Salem, Tamil Nadu. Narasu's Gold captures the full-bodied spirit of plantation-grown beans, cryogenically crystallized to preserve volatile aroma molecules that conventional drying destroys.",
    attributes: [
      {
        title: "Freeze Dried",
        desc: "Sub-zero vacuum dehydration locks in authentic coffee aroma and nuanced acidity.",
      },
      {
        title: "Premium Coffee",
        desc: "100% pure selected coffee beans hand-harvested from high-altitude hill slopes.",
      },
      {
        title: "Rich Aroma",
        desc: "Unmatched fragrance with undertones of toasted hazelnut, cocoa, and caramelized sugar.",
      },
      {
        title: "Smooth Finish",
        desc: "A velvety, balanced cup with a clean lingering golden aftertaste and zero harsh bitterness.",
      },
    ],
  },
  craftStages: [
    {
      step: "01",
      title: "SELECT",
      desc: "Carefully selected coffee beans.",
      detail:
        "Harvested at peak red ripeness from premier shade-grown Indian plantations for optimal sugar balance.",
    },
    {
      step: "02",
      title: "CRAFT",
      desc: "Processed to preserve the coffee's rich character.",
      detail:
        "Slow-roasted under golden curves to caramelize core sugars before gentle pressurized extraction.",
    },
    {
      step: "03",
      title: "FREEZE DRY",
      desc: "Crafted into convenient freeze dried coffee granules.",
      detail:
        "Flash-frozen at -40°C in an ultra-low pressure vacuum chamber, leaving crystalline gold granules.",
    },
  ],
  freshnessSection: {
    heading: "THE AROMA\nSTAYS WITH YOU.",
    tagline:
      "Rich aroma. Smooth character. Coffee made for everyday moments.",
    stats: [
      { value: "100%", label: "Pure Soluble Coffee" },
      { value: "-40°C", label: "Cryogenic Vacuum Lock" },
      { value: "1000+", label: "Sensory Aroma Compounds" },
    ],
  },
  shopMoments: [
    {
      period: "MORNING",
      title: "Awaken with Intent",
      text: "Start slow with a warm cup.",
      time: "06:00 AM – 09:00 AM",
      note: "Pairs effortlessly with hot milk or as a bold Americano.",
    },
    {
      period: "AFTERNOON",
      title: "Midday Vitality",
      text: "Recharge with rich coffee character.",
      time: "01:00 PM – 03:30 PM",
      note: "The perfect pick-me-up pour to rekindle sharp focus.",
    },
    {
      period: "EVENING",
      title: "Twilight Comfort",
      text: "End the day with something comforting.",
      time: "05:00 PM – 07:30 PM",
      note: "A soothing companion for golden hour conversations.",
    },
  ],
  buyNowSection: {
    heading: "BRING HOME\nTHE GOLD.",
    name: "Narasu's Gold",
    type: "Freeze Dried Coffee",
    price: "₹180",
    tags: [
      "Premium Coffee",
      "Freeze Dried",
      "Freshly Packed",
      "Secure Packaging",
    ],
    deliveryPromise: "Packed carefully before dispatch.",
    returnPolicy: "Easy replacement for damaged deliveries.",
  },
};
