"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Factory } from "lucide-react";

export const ManufacturingSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [videoSrc, setVideoSrc] = useState<string | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // IntersectionObserver to lazy-load the 9.5MB video only when approaching this section (350px margin)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVideoSrc("/videos/manufacturing.mp4");
            if (videoRef.current) {
              const video = videoRef.current;
              video.muted = true;
              video.defaultMuted = true;
              video.play().catch(() => {});
            }
          } else {
            // Pause when out of view to conserve CPU/GPU
            if (videoRef.current) {
              videoRef.current.pause();
            }
          }
        });
      },
      { rootMargin: "350px 0px", threshold: 0.05 }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (videoSrc && videoRef.current) {
      const video = videoRef.current;
      video.muted = true;
      video.defaultMuted = true;
      video.load();
      video.play().catch(() => {});
    }
  }, [videoSrc]);

  return (
    <section
      ref={sectionRef}
      id="manufacturing"
      className="relative w-full min-h-[85vh] sm:min-h-[95vh] lg:min-h-[100vh] py-32 sm:py-40 px-4 sm:px-6 lg:px-8 border-t border-[#6F4E37]/30 overflow-hidden flex items-center justify-center scroll-mt-16"
    >
      {/* Cinematic Full-Width Background Video - Lazy-loaded, Continuous Muted Autoplay Loop with No Controls */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          preload="none"
          className="w-full h-full object-cover object-center"
        >
          {videoSrc && <source src={videoSrc} type="video/mp4" />}
          Your browser does not support the video tag.
        </video>

        {/* Subtle, non-obscuring overlays for text legibility and smooth edge blending */}
        <div className="absolute inset-0 bg-[#080503]/25 pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#080503] via-[#080503]/40 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#080503] via-[#080503]/40 to-transparent pointer-events-none" />
      </div>

      {/* Clean, Non-Overcrowding Manufacturing Headline */}
      <div className="max-w-4xl mx-auto text-center relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A0C08]/85 border border-[#6F4E37]/50 backdrop-blur-md mb-5 shadow-[0_4px_20px_rgba(0,0,0,0.6)]"
        >
          <Factory className="w-3.5 h-3.5 text-[#C49A6C]" />
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-cream drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
            Salem Roastery Facility
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]"
        >
          MANUFACTURING <br />
          <span className="bg-gradient-to-r from-[#C49A6C] via-[#EAD7C3] to-[#6F4E37] bg-clip-text text-transparent">
            EXCELLENCE
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 text-base sm:text-lg text-[#F4E3C1] font-normal leading-relaxed max-w-2xl mx-auto drop-shadow-[0_2px_6px_rgba(0,0,0,0.95)]"
        >
          From high-elevation shade-grown plantations to our automated Salem packaging line,
          experience the precision behind every grain of Narasu&apos;s Coffee.
        </motion.p>
      </div>
    </section>
  );
};

export const FreshnessSection = ManufacturingSection;
export default ManufacturingSection;
