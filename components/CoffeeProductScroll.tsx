"use client";

import React, { useRef, useEffect, useCallback } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import CoffeeTextOverlays from "./CoffeeTextOverlays";

interface CoffeeProductScrollProps {
  onLoadingProgress?: (progress: number) => void;
  onLoaded?: () => void;
}

const TOTAL_FRAMES = 120;
const imageCache: (HTMLImageElement | null)[] = new Array(TOTAL_FRAMES).fill(null);

export const CoffeeProductScroll: React.FC<CoffeeProductScrollProps> = ({
  onLoadingProgress,
  onLoaded,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const lastDrawnFrameRef = useRef<number>(-1);
  const requestedFrameRef = useRef<number>(0);
  const isLoadedRef = useRef<boolean>(false);

  // Framer Motion useScroll targeting the 500vh hero container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const renderImage = useCallback(
    (
      ctx: CanvasRenderingContext2D,
      canvas: HTMLCanvasElement,
      img: HTMLImageElement
    ) => {
      const cw = canvas.width;
      const ch = canvas.height;

      ctx.clearRect(0, 0, cw, ch);

      const iw = img.naturalWidth;
      const ih = img.naturalHeight;
      if (!iw || !ih) return;

      // Base cover scaling fills the canvas
      const baseScale = Math.max(cw / iw, ch / ih);
      // Controlled zoom provides bleed in the Y axis so we can shift the product
      // downward below the navbar while maintaining 100% canvas coverage and zero edge gaps.
      const isDesktop = cw > 768;
      const zoom = isDesktop ? 1.18 : 1.10;
      const scale = baseScale * zoom;

      const nw = iw * scale;
      const nh = ih * scale;

      // Exact horizontal center in the viewport across all 120 frames (no horizontal drift or side offset)
      const dx = (cw - nw) / 2;

      // Maintain current vertical positioning below navbar
      const baseDy = (ch - nh) / 2;
      const maxSafeShiftY = (nh - ch) / 2;
      const desiredShiftDownY = isDesktop ? ch * 0.045 : ch * 0.025;
      const shiftY = Math.min(desiredShiftDownY, maxSafeShiftY);
      const dy = baseDy + shiftY;

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(img, dx, dy, nw, nh);
    },
    []
  );

  const drawFrame = useCallback(
    (frameIndex: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext("2d", { alpha: false });
      if (!ctx) return;

      const safeIndex = Math.max(0, Math.min(TOTAL_FRAMES - 1, frameIndex));
      requestedFrameRef.current = safeIndex;

      const img = imageCache[safeIndex];

      if (img && img.complete && img.naturalWidth > 0) {
        renderImage(ctx, canvas, img);
        lastDrawnFrameRef.current = safeIndex;
        return;
      }

      // Nearest loaded frame fallback across all 120 frames
      let fallbackImg: HTMLImageElement | null = null;
      let minDistance = Infinity;

      for (let i = 0; i < TOTAL_FRAMES; i++) {
        const candidate = imageCache[i];
        if (candidate && candidate.complete && candidate.naturalWidth > 0) {
          const dist = Math.abs(i - safeIndex);
          if (dist < minDistance) {
            minDistance = dist;
            fallbackImg = candidate;
          }
        }
      }

      if (fallbackImg) {
        renderImage(ctx, canvas, fallbackImg);
      }
    },
    [renderImage]
  );

  const updateCanvasSize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = Math.round(window.innerWidth * dpr);
    const height = Math.round(window.innerHeight * dpr);

    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
    }

    const currentFrame =
      lastDrawnFrameRef.current >= 0 ? lastDrawnFrameRef.current : 0;
    drawFrame(currentFrame);
  }, [drawFrame]);

  // Preload all 120 frames
  useEffect(() => {
    let loadedCount = imageCache.filter(
      (img) => img && img.complete && img.naturalWidth > 0
    ).length;

    const updateProgress = () => {
      const pct = Math.min(100, Math.round((loadedCount / TOTAL_FRAMES) * 100));
      if (onLoadingProgress) {
        onLoadingProgress(pct);
      }
      if (loadedCount >= TOTAL_FRAMES && !isLoadedRef.current) {
        isLoadedRef.current = true;
        if (onLoaded) onLoaded();
      }
    };

    const loadFrame = (index: number): Promise<void> => {
      if (
        imageCache[index] &&
        imageCache[index]!.complete &&
        imageCache[index]!.naturalWidth > 0
      ) {
        updateProgress();
        return Promise.resolve();
      }

      return new Promise((resolve) => {
        const frameNumber = index + 1;
        const img = new Image();
        img.src = `/images/coffee/${frameNumber}.webp`;

        img.onload = () => {
          imageCache[index] = img;
          loadedCount++;
          updateProgress();
          if (index === 0 && lastDrawnFrameRef.current === -1) {
            drawFrame(0);
          } else if (index === requestedFrameRef.current) {
            drawFrame(index);
          }
          resolve();
        };

        img.onerror = () => {
          const fallback = new Image();
          fallback.src = `/images/coffee/${frameNumber}.jpg`;
          fallback.onload = () => {
            imageCache[index] = fallback;
            loadedCount++;
            updateProgress();
            if (index === 0 && lastDrawnFrameRef.current === -1) {
              drawFrame(0);
            } else if (index === requestedFrameRef.current) {
              drawFrame(index);
            }
            resolve();
          };
          fallback.onerror = () => {
            loadedCount++;
            updateProgress();
            resolve();
          };
        };
      });
    };

    updateCanvasSize();

    // Priority load frame 1 (index 0) first for instantaneous first paint
    loadFrame(0).then(() => {
      drawFrame(0);
      const remaining = Array.from(
        { length: TOTAL_FRAMES - 1 },
        (_, i) => i + 1
      );
      Promise.all(remaining.map((idx) => loadFrame(idx)));
    });
  }, [drawFrame, onLoaded, onLoadingProgress, updateCanvasSize]);

  // Framer Motion useMotionValueEvent: synchronizes frame changes on useScroll updates
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const frameIndex = Math.min(
      TOTAL_FRAMES - 1,
      Math.max(0, Math.floor(latest * (TOTAL_FRAMES - 1)))
    );
    if (frameIndex !== lastDrawnFrameRef.current) {
      drawFrame(frameIndex);
    }
  });

  // Direct native scroll listener ensures 0ms latency synchronization across all browsers
  const updateScroll = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const totalDistance = rect.height - window.innerHeight;
    if (totalDistance <= 0) return;

    // rect.top is 0 at top of hero, and becomes negative as user scrolls through 500vh
    const progress = Math.max(0, Math.min(1, -rect.top / totalDistance));

    const frameIndex = Math.min(
      TOTAL_FRAMES - 1,
      Math.max(0, Math.floor(progress * (TOTAL_FRAMES - 1)))
    );

    if (frameIndex !== lastDrawnFrameRef.current) {
      drawFrame(frameIndex);
    }
  }, [drawFrame]);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    const onResize = () => {
      updateCanvasSize();
      updateScroll();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });

    // Initial position measurement
    updateCanvasSize();
    updateScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [updateCanvasSize, updateScroll]);

  return (
    <div
      ref={containerRef}
      id="hero"
      className="relative w-full bg-[#080503]"
      style={{ height: "500vh" }}
    >
      <div
        className="w-full bg-[#080503]"
        style={{
          position: "sticky",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <canvas
          ref={canvasRef}
          style={{
            width: "100%",
            height: "100%",
            display: "block",
            pointerEvents: "none",
            userSelect: "none",
          }}
        />

        <CoffeeTextOverlays scrollYProgress={scrollYProgress} />
      </div>
    </div>
  );
};

export default CoffeeProductScroll;
