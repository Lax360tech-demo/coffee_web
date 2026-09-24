"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ShoppingBag, Sparkles } from "lucide-react";

interface NavbarProps {
  onOrderClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOrderClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About us", href: "#details" },
    { label: "Products", href: "#products" },
    { label: "Manufacturing", href: "#manufacturing" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleOrder = () => {
    setMobileMenuOpen(false);
    if (onOrderClick) {
      onOrderClick();
    } else {
      const target = document.querySelector("#contact");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#080503]/95 backdrop-blur-xl py-3 shadow-[0_4px_30px_rgba(0,0,0,0.85)]"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, "#hero")}
            className="flex items-center group focus:outline-none focus:ring-2 focus:ring-[#D6A15B]/50 rounded-full"
            aria-label="Narasu's Since 1926 Home"
          >
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 md:w-[50px] md:h-[50px] rounded-full bg-white p-1 border-2 border-[#D6A15B]/60 shadow-[0_0_15px_rgba(214,161,91,0.3)] flex items-center justify-center overflow-hidden flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
              <img
                src="/images/navbar-logo.jpg"
                alt="Narasu's Since 1926"
                className="w-full h-full object-contain"
              />
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-xs uppercase tracking-[0.2em] text-white hover:text-[#F4E3C1] transition-colors duration-200 font-bold relative group py-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)]"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#D6A15B] to-[#F4E3C1] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={handleOrder}
              className="relative inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-[0.16em] text-[#080503] bg-gradient-to-r from-[#D6A15B] via-[#E4B574] to-[#B87532] shadow-[0_0_20px_rgba(214,161,91,0.4)] hover:shadow-[0_0_30px_rgba(214,161,91,0.7)] hover:scale-105 active:scale-95 transition-all duration-300 group overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-1.5 font-bold text-[#080503]">
                <ShoppingBag className="w-3.5 h-3.5 transition-transform group-hover:-rotate-12" />
                Order Now
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={handleOrder}
              aria-label="Order Narasu's Gold"
              className="p-2 rounded-full bg-gradient-to-r from-[#D6A15B] to-[#B87532] text-[#080503] shadow-[0_0_10px_rgba(214,161,91,0.4)] hover:scale-105 transition-transform font-bold"
            >
              <ShoppingBag className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-[#F4E3C1] focus:outline-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
          onClick={() => setMobileMenuOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 w-[80%] max-w-sm h-full bg-[#120A06] border-l border-[#3A1C10] p-8 flex flex-col justify-between shadow-2xl transition-transform duration-300 transform ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-[#3A1C10]/60">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white p-0.5 border border-[#D6A15B]/50 overflow-hidden shadow-sm flex items-center justify-center flex-shrink-0">
                  <img
                    src="/images/navbar-logo.jpg"
                    alt="Narasu's Since 1926"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="font-extrabold tracking-widest text-[#F4E3C1] text-sm">
                  NARASU&apos;S <span className="text-[#D6A15B]">GOLD</span>
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:text-[#D6A15B] p-1"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-6 mt-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-base font-bold tracking-wider text-white hover:text-[#F4E3C1] transition-colors py-1 flex items-center justify-between"
                >
                  {link.label}
                  <span className="text-xs text-[#D6A15B] font-bold">→</span>
                </a>
              ))}
            </nav>
          </div>

          <div className="pt-6 border-t border-[#3A1C10]/60">
            <button
              onClick={handleOrder}
              className="w-full py-3.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] text-[#080503] bg-gradient-to-r from-[#D6A15B] via-[#E4B574] to-[#B87532] shadow-[0_0_20px_rgba(214,161,91,0.5)] flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              Order Narasu&apos;s Gold
            </button>
            <p className="text-center text-[11px] text-[#F4E3C1]/80 font-medium uppercase tracking-widest mt-4">
              Salem, Tamil Nadu • Since 1926
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
