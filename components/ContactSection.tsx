"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Sparkles,
  User,
  MessageSquare,
  Coffee,
  ChevronDown,
} from "lucide-react";
import { PRODUCTS, CATEGORIES } from "@/components/CraftSection";

interface FormData {
  name: string;
  email: string;
  phone: string;
  productEnquiry: string;
  message: string;
}

interface ContactSectionProps {
  selectedProduct?: string;
  onClearProduct?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  selectedProduct = "",
  onClearProduct,
}) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    productEnquiry: selectedProduct || "",
    message: "",
  });

  const [lastEnquiredProduct, setLastEnquiredProduct] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync with prop when passed
  React.useEffect(() => {
    if (selectedProduct !== undefined) {
      setFormData((prev) => ({ ...prev, productEnquiry: selectedProduct }));
    }
  }, [selectedProduct]);

  // Decoupled window event listener for seamless product enquiry triggers
  React.useEffect(() => {
    const handleCustomProductEnquire = (event: Event) => {
      const customEvent = event as CustomEvent<{ productName: string }>;
      if (customEvent.detail && customEvent.detail.productName) {
        setFormData((prev) => ({
          ...prev,
          productEnquiry: customEvent.detail.productName,
        }));
      }
    };

    window.addEventListener("narasus-product-enquire", handleCustomProductEnquire);
    return () => {
      window.removeEventListener("narasus-product-enquire", handleCustomProductEnquire);
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleClearProduct = () => {
    setFormData((prev) => ({ ...prev, productEnquiry: "" }));
    if (onClearProduct) onClearProduct();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLastEnquiredProduct(formData.productEnquiry);
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        productEnquiry: "",
        message: "",
      });
      if (onClearProduct) onClearProduct();
    }, 800);
  };

  return (
    <section
      id="contact"
      className="relative w-full py-28 px-4 sm:px-6 lg:px-8 border-t border-[#6F4E37]/30 overflow-hidden scroll-mt-16"
    >
      {/* Background Image - clearly visible across the entire section without heavy dark overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/images/contact-bg.jpg"
          alt="Contact Section Background"
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
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A0C08]/90 border border-[#6F4E37]/50 mb-4 shadow-[0_4px_20px_rgba(0,0,0,0.6)]">
            <Sparkles className="w-3.5 h-3.5 text-[#C49A6C]" />
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-cream">
              Order & Inquiries
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            CONNECT WITH <br />
            <span className="bg-gradient-to-r from-[#C49A6C] via-[#EAD7C3] to-[#6F4E37] bg-clip-text text-transparent">
              NARASU&apos;S
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#F4E3C1] font-normal leading-relaxed max-w-2xl mx-auto drop-shadow-[0_1px_4px_rgba(0,0,0,0.95)]">
            Place an order for our signature coffee collection, enquire about wholesale,
            or speak directly with our Salem roastery team.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Roastery Info & Order Perks */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-between rounded-3xl bg-gradient-to-b from-[#180E0A] via-[#120A06] to-[#0A0503] border border-[#6F4E37]/40 p-6 sm:p-8 shadow-[0_15px_40px_rgba(0,0,0,0.7)]"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#21100A] border border-[#6F4E37]/40 text-xs text-[#C49A6C] font-semibold mb-6">
                <Coffee className="w-3.5 h-3.5" />
                <span>Salem Heritage Roastery</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight mb-4">
                Fresh Direct From <br />
                <span className="text-[#C49A6C]">Tamil Nadu</span>
              </h3>

              <p className="text-xs sm:text-sm text-cream/75 font-light leading-relaxed mb-8">
                Every tin and jar is packed fresh at our historic facility in Salem,
                preserving the pure aromatics of high-altitude Indian beans.
              </p>

              {/* Direct Info List */}
              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-[#080503]/50 border border-[#6F4E37]/25">
                  <div className="w-8 h-8 rounded-xl bg-[#21100A] border border-[#6F4E37]/40 flex items-center justify-center text-[#C49A6C] flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">Roastery & HQ</h4>
                    <p className="text-cream/70 text-xs mt-0.5">
                      Narasu&apos;s Coffee Co., Post Box No. 701, Salem — 636 007, Tamil Nadu, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-[#080503]/50 border border-[#6F4E37]/25">
                  <div className="w-8 h-8 rounded-xl bg-[#21100A] border border-[#6F4E37]/40 flex items-center justify-center text-[#C49A6C] flex-shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">Order Hotline</h4>
                    <p className="text-cream/70 text-xs mt-0.5 font-mono">
                      +91 (0427) 244-1926 / +91 94432 01926
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-[#080503]/50 border border-[#6F4E37]/25">
                  <div className="w-8 h-8 rounded-xl bg-[#21100A] border border-[#6F4E37]/40 flex items-center justify-center text-[#C49A6C] flex-shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">Email Dispatch</h4>
                    <p className="text-cream/70 text-xs mt-0.5">
                      care@narasuscoffee.in / orders@narasuscoffee.in
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-[#080503]/50 border border-[#6F4E37]/25">
                  <div className="w-8 h-8 rounded-xl bg-[#21100A] border border-[#6F4E37]/40 flex items-center justify-center text-[#C49A6C] flex-shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">Dispatch Hours</h4>
                    <p className="text-cream/70 text-xs mt-0.5">
                      Monday to Saturday: 9:00 AM – 6:30 PM IST
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#6F4E37]/30 flex items-center justify-between text-[11px] text-[#C49A6C] font-mono">
              <span>EST. 1926</span>
              <span>100% PURE INDIAN COFFEE</span>
            </div>
          </motion.div>

          {/* Right Column: Premium Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 rounded-3xl bg-gradient-to-b from-[#180E0A] via-[#120A06] to-[#0A0503] border border-[#6F4E37]/40 p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.85)] flex flex-col justify-center"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-black uppercase text-white tracking-tight">
                Send an Order Enquiry
              </h3>
              <p className="text-xs sm:text-sm text-cream/70 font-light mt-1">
                Fill out the form below and our team will get back to confirm your order details.
              </p>
            </div>

            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success-box"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="p-8 rounded-2xl bg-[#21100A]/80 border border-[#C49A6C]/60 text-center flex flex-col items-center justify-center my-6"
                >
                  <div className="w-14 h-14 rounded-full bg-[#6F4E37] text-white flex items-center justify-center mb-4 shadow-[0_0_25px_rgba(196,154,108,0.5)]">
                    <CheckCircle2 className="w-8 h-8 text-[#F4E3C1]" />
                  </div>
                  <h4 className="text-xl font-bold uppercase text-white tracking-wide mb-2">
                    Enquiry Received!
                  </h4>
                  <p className="text-xs sm:text-sm text-cream/80 max-w-md mb-6 leading-relaxed">
                    {lastEnquiredProduct
                      ? `Thank you for your enquiry about ${lastEnquiredProduct}. Our team will review your order details and contact you within 2 business hours.`
                      : `Thank you for reaching out to Narasu's Coffee. Our team will review your message and contact you within 2 business hours.`}
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#6F4E37] hover:bg-[#855D42] transition-all shadow-md"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Select Product Dropdown */}
                  <div>
                    <label
                      htmlFor="contact-product"
                      className="block text-[11px] font-bold uppercase tracking-wider text-cream/90 mb-2"
                    >
                      Select Product
                    </label>
                    <div className="relative flex items-center">
                      <div className="absolute left-4 text-[#C49A6C]/80 pointer-events-none z-10">
                        <Coffee className="w-4 h-4" />
                      </div>
                      <select
                        id="contact-product"
                        name="productEnquiry"
                        value={formData.productEnquiry}
                        onChange={handleChange}
                        className="w-full pl-11 pr-10 py-3.5 rounded-xl bg-[#080503]/80 border border-[#6F4E37]/45 text-xs sm:text-sm text-white focus:outline-none focus:border-[#C49A6C] focus:ring-1 focus:ring-[#C49A6C] transition-all shadow-inner appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-[#120A06] text-cream/40">
                          Select a Product
                        </option>
                        {CATEGORIES.map((cat) => {
                          const catProducts = PRODUCTS.filter(
                            (p) => p.category === cat.id
                          );
                          if (catProducts.length === 0) return null;
                          return (
                            <optgroup
                              key={cat.id}
                              label={cat.name}
                              className="bg-[#1A0C08] text-[#C49A6C] font-bold"
                            >
                              {catProducts.map((product) => (
                                <option
                                  key={product.id}
                                  value={product.name}
                                  className="bg-[#120A06] text-white font-normal"
                                >
                                  {product.name}
                                </option>
                              ))}
                            </optgroup>
                          );
                        })}
                        <optgroup
                          label="General / Other"
                          className="bg-[#1A0C08] text-[#C49A6C] font-bold"
                        >
                          <option
                            value="Custom Bulk Order / Wholesale"
                            className="bg-[#120A06] text-white font-normal"
                          >
                            Custom Bulk Order / Wholesale
                          </option>
                        </optgroup>
                        {formData.productEnquiry &&
                          !PRODUCTS.some((p) => p.name === formData.productEnquiry) &&
                          formData.productEnquiry !== "Custom Bulk Order / Wholesale" && (
                            <option
                              value={formData.productEnquiry}
                              className="bg-[#120A06] text-white font-normal"
                            >
                              {formData.productEnquiry}
                            </option>
                          )}
                      </select>
                      <div className="absolute right-4 text-[#C49A6C]/70 pointer-events-none z-10">
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Name Input */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-[11px] font-bold uppercase tracking-wider text-cream/90 mb-2"
                    >
                      Your Name <span className="text-[#C49A6C]">*</span>
                    </label>
                    <div className="relative flex items-center">
                      <div className="absolute left-4 text-[#C49A6C]/70 pointer-events-none">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        required
                        className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-[#080503]/80 border border-[#6F4E37]/45 text-xs sm:text-sm text-white placeholder:text-cream/35 focus:outline-none focus:border-[#C49A6C] focus:ring-1 focus:ring-[#C49A6C] transition-all shadow-inner"
                      />
                    </div>
                  </div>

                  {/* Email & Phone Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email Input */}
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-[11px] font-bold uppercase tracking-wider text-cream/90 mb-2"
                      >
                        Email Address <span className="text-[#C49A6C]">*</span>
                      </label>
                      <div className="relative flex items-center">
                        <div className="absolute left-4 text-[#C49A6C]/70 pointer-events-none">
                          <Mail className="w-4 h-4" />
                        </div>
                        <input
                          id="contact-email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="name@example.com"
                          required
                          className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-[#080503]/80 border border-[#6F4E37]/45 text-xs sm:text-sm text-white placeholder:text-cream/35 focus:outline-none focus:border-[#C49A6C] focus:ring-1 focus:ring-[#C49A6C] transition-all shadow-inner"
                        />
                      </div>
                    </div>

                    {/* Phone Number Input */}
                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="block text-[11px] font-bold uppercase tracking-wider text-cream/90 mb-2"
                      >
                        Phone Number
                      </label>
                      <div className="relative flex items-center">
                        <div className="absolute left-4 text-[#C49A6C]/70 pointer-events-none">
                          <Phone className="w-4 h-4" />
                        </div>
                        <input
                          id="contact-phone"
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-[#080503]/80 border border-[#6F4E37]/45 text-xs sm:text-sm text-white placeholder:text-cream/35 focus:outline-none focus:border-[#C49A6C] focus:ring-1 focus:ring-[#C49A6C] transition-all shadow-inner"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Message Input */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-[11px] font-bold uppercase tracking-wider text-cream/90 mb-2"
                    >
                      Message / Order Details <span className="text-[#C49A6C]">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute left-4 top-3.5 text-[#C49A6C]/70 pointer-events-none">
                        <MessageSquare className="w-4 h-4" />
                      </div>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us what products you want to order (e.g. Narasu's Gold 50g, Deluxe Filter 200g) or ask any questions..."
                        required
                        className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-[#080503]/80 border border-[#6F4E37]/45 text-xs sm:text-sm text-white placeholder:text-cream/35 focus:outline-none focus:border-[#C49A6C] focus:ring-1 focus:ring-[#C49A6C] transition-all resize-none shadow-inner"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-white bg-gradient-to-r from-[#6F4E37] via-[#855D42] to-[#6F4E37] hover:from-[#855D42] hover:to-[#A37454] border border-[#C49A6C]/50 shadow-[0_4px_25px_rgba(111,78,55,0.45)] hover:shadow-[0_4px_35px_rgba(196,154,108,0.5)] hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="animate-pulse">Processing Order Enquiry...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-[#EAD7C3]" />
                        <span>Submit Order Enquiry</span>
                      </>
                    )}
                  </button>

                  <p className="text-center text-[10px] text-cream/50">
                    🔒 Your information is secure and only used to fulfill your coffee request.
                  </p>
                </form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
