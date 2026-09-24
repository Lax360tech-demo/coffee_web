"use client";

import React from "react";
import { Instagram, Facebook, Youtube } from "lucide-react";

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const SOCIAL_LINKS = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/narasuscoffee/",
    icon: Instagram,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/narasuscoffee/",
    icon: Facebook,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@narasuscoffee",
    icon: Youtube,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/919443201926",
    icon: WhatsAppIcon,
  },
];

export const Footer: React.FC = () => {
  const handleScrollTo = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      id="footer"
      className="relative w-full bg-[#080503] border-t border-[#6F4E37]/30 pt-20 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[300px] bg-[#6F4E37]/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-[#6F4E37]/25">
          {/* Brand Logo & Heritage Info */}
          <div className="lg:col-span-4 flex flex-col">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo("#hero");
              }}
              className="inline-flex items-center gap-3 mb-4 group focus:outline-none"
              aria-label="Narasu's Since 1926 Home"
            >
              <div className="relative w-11 h-11 sm:w-12 sm:h-12 md:w-[50px] md:h-[50px] rounded-full bg-white p-1 border-2 border-[#D6A15B]/60 shadow-[0_0_15px_rgba(214,161,91,0.3)] flex items-center justify-center overflow-hidden flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                <img
                  src="/images/navbar-logo.jpg"
                  alt="Narasu's Since 1926"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-extrabold tracking-[0.22em] text-lg text-white">
                NARASU&apos;S <span className="text-[#C49A6C]">GOLD</span>
              </span>
            </a>

            <p className="text-sm text-cream/70 font-light leading-relaxed max-w-sm">
              Rich coffee crafted for memorable moments. Celebrating India&apos;s
              finest coffee heritage with freeze-dried precision.
            </p>

            <div className="mt-6 text-xs text-[#C49A6C] font-mono tracking-wider">
              EST. 1926 • SALEM, TAMIL NADU, INDIA
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#C49A6C] font-bold mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs text-cream/75">
              <li>
                <button
                  onClick={() => handleScrollTo("#hero")}
                  className="hover:text-[#C49A6C] transition-colors text-left"
                >
                  Our Coffee
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo("#manufacturing")}
                  className="hover:text-[#C49A6C] transition-colors text-left"
                >
                  Manufacturing
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo("#products")}
                  className="hover:text-[#C49A6C] transition-colors text-left"
                >
                  Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo("#gallery")}
                  className="hover:text-[#C49A6C] transition-colors text-left"
                >
                  Gallery
                </button>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#C49A6C] font-bold mb-4">
              Support
            </h4>
            <ul className="space-y-2.5 text-xs text-cream/75">
              <li>
                <button
                  onClick={() => handleScrollTo("#contact")}
                  className="hover:text-[#C49A6C] transition-colors text-left"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo("#products")}
                  className="hover:text-[#C49A6C] transition-colors text-left"
                >
                  Shipping Info
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo("#footer")}
                  className="hover:text-[#C49A6C] transition-colors text-left"
                >
                  Returns & Replacements
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo("#details")}
                  className="hover:text-[#C49A6C] transition-colors text-left"
                >
                  FAQs
                </button>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#C49A6C] font-bold mb-4">
              Connect With Us
            </h4>
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="w-10 h-10 rounded-full bg-[#180E0A] border border-[#6F4E37]/40 flex items-center justify-center text-cream/80 hover:text-white hover:bg-[#6F4E37] hover:border-[#C49A6C] shadow-[0_4px_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(196,154,108,0.4)] hover:scale-110 active:scale-95 transition-all duration-300 group"
                  >
                    <Icon className="w-4 h-4 transition-transform group-hover:scale-110" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream/40">
          <p>© {new Date().getFullYear()} Narasu&apos;s Coffee Company. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-cream/70 transition-colors">
              Privacy Policy
            </span>
            <span className="hover:text-cream/70 transition-colors">
              Terms of Service
            </span>
            <span className="hover:text-cream/70 transition-colors">
              FSSAI Lic. No. 10012042000088
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
