"use client";

import React, { useRef, useEffect, useCallback } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import CoffeeTextOverlays from "./CoffeeTextOverlays";

interface CoffeeProductScrollProps {
  onLoadingProgress?: (progress: number) => void;
  onLoaded?: () => void;
  onInitialReady?: () => void;
}

const TOTAL_FRAMES = 120;
const imageCache: (HTMLImageElement | null)[] = new Array(TOTAL_FRAMES).fill(null);
const inFlightRequests = new Set<number>();

export const CoffeeProductScroll: React.FC<CoffeeProductScrollProps> = ({
  onLoadingProgress,
  onLoaded,
  onInitialReady,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const lastDrawnFrameRef = useRef<number>(-1);
  const requestedFrameRef = useRef<number>(0);
  const isLoadedRef = useRef<boolean>(false);
  const requestFrameLoadRef = useRef<((index: number) => void) | null>(null);

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

      // On-demand load trigger for current scroll target and immediate neighbors
      if (requestFrameLoadRef.current) {
        requestFrameLoadRef.current(safeIndex);
      }

      const img = imageCache[safeIndex];

      if (img && img.complete && img.naturalWidth > 0) {
        renderImage(ctx, canvas, img);
        lastDrawnFrameRef.current = safeIndex;
        return;
      }

      // Nearest loaded frame fallback across all 120 frames (guarantees zero blank frames)
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

  // Single frame loader with deduplication and async decoding
  const loadSingleFrame = useCallback(
    (index: number): Promise<HTMLImageElement | null> => {
      if (index < 0 || index >= TOTAL_FRAMES) return Promise.resolve(null);

      const existing = imageCache[index];
      if (existing && existing.complete && existing.naturalWidth > 0) {
        return Promise.resolve(existing);
      }

      if (inFlightRequests.has(index)) {
        return Promise.resolve(null);
      }

      inFlightRequests.add(index);

      return new Promise((resolve) => {
        const frameNumber = index + 1;
        const img = new Image();
        img.decoding = "async";
        img.src = `/images/coffee/${frameNumber}.webp`;

        img.onload = () => {
          imageCache[index] = img;
          inFlightRequests.delete(index);
          if (index === 0 && lastDrawnFrameRef.current === -1) {
            drawFrame(0);
          } else if (index === requestedFrameRef.current) {
            drawFrame(index);
          }
          resolve(img);
        };

        img.onerror = () => {
          const fallback = new Image();
          fallback.decoding = "async";
          fallback.src = `/images/coffee/${frameNumber}.jpg`;
          fallback.onload = () => {
            imageCache[index] = fallback;
            inFlightRequests.delete(index);
            if (index === 0 && lastDrawnFrameRef.current === -1) {
              drawFrame(0);
            } else if (index === requestedFrameRef.current) {
              drawFrame(index);
            }
            resolve(fallback);
          };
          fallback.onerror = () => {
            inFlightRequests.delete(index);
            resolve(null);
          };
        };
      });
    },
    [drawFrame]
  );

  // Hook on-demand scroll frame loader
  useEffect(() => {
    requestFrameLoadRef.current = (targetIndex: number) => {
      const neighbors = [
        targetIndex,
        targetIndex + 1,
        targetIndex + 2,
        targetIndex + 3,
        targetIndex - 1,
      ];
      for (const idx of neighbors) {
        if (
          idx >= 0 &&
          idx < TOTAL_FRAMES &&
          !imageCache[idx] &&
          !inFlightRequests.has(idx)
        ) {
          loadSingleFrame(idx);
        }
      }
    };
  }, [loadSingleFrame]);

  // Progressive frame loading: Instant frame 0 paint, followed by non-blocking background queue
  useEffect(() => {
    let cancelled = false;

    updateCanvasSize();

    // Priority 1: Load frame 0 immediately for instant Hero display
    loadSingleFrame(0).then(() => {
      if (cancelled) return;
      drawFrame(0);

      // Immediately signal readiness so user is not blocked
      if (onInitialReady) onInitialReady();
      if (onLoadingProgress) onLoadingProgress(100);
      if (onLoaded && !isLoadedRef.current) {
        isLoadedRef.current = true;
        onLoaded();
      }

      // Priority 2: Progressive background loading in non-blocking batches
      const loadProgressively = async () => {
        // Immediate scroll buffer (frames 1 to 10)
        for (let i = 1; i <= Math.min(10, TOTAL_FRAMES - 1); i++) {
          if (cancelled) return;
          await loadSingleFrame(i);
        }

        // Remaining frames in small concurrent batches of 3
        const BATCH_SIZE = 3;
        for (let i = 11; i < TOTAL_FRAMES; i += BATCH_SIZE) {
          if (cancelled) return;
          const batch: Promise<HTMLImageElement | null>[] = [];
          for (let j = 0; j < BATCH_SIZE && i + j < TOTAL_FRAMES; j++) {
            const idx = i + j;
            if (!imageCache[idx] && !inFlightRequests.has(idx)) {
              batch.push(loadSingleFrame(idx));
            }
          }
          if (batch.length > 0) {
            await Promise.all(batch);
          }
          // Yield to browser execution thread so scroll remains 100% fluid
          await new Promise((resolve) => setTimeout(resolve, 30));
        }
      };

      loadProgressively();
    });

    return () => {
      cancelled = true;
    };
  }, [
    drawFrame,
    loadSingleFrame,
    onInitialReady,
    onLoaded,
    onLoadingProgress,
    updateCanvasSize,
  ]);

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
