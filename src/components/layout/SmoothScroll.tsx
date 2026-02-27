"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import Lenis from "lenis";

interface SmoothScrollProps {
  children: React.ReactNode;
}

interface LenisDebugState {
  active: boolean;
  reducedMotion: boolean;
  scroll: number;
  velocity: number;
  direction: number;
}

const LenisContext = createContext<LenisDebugState | null>(null);

export function useLenisDebug() {
  return useContext(LenisContext);
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const [state, setState] = useState<LenisDebugState>({
    active: false,
    reducedMotion: false,
    scroll: 0,
    velocity: 0,
    direction: 0,
  });

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      lerp: 0.08,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.1,
      easing: (t) => 1 - Math.pow(1 - t, 3),
    });

    document.documentElement.classList.add("lenis");
    setState((prev) => ({
      ...prev,
      active: true,
      reducedMotion: prefersReducedMotion,
    }));

    const onScroll = (event: { scroll: number; velocity: number; direction: number }) => {
      setState((prev) => ({
        ...prev,
        scroll: Math.round(event.scroll),
        velocity: Number(event.velocity.toFixed(2)),
        direction: event.direction,
      }));
    };

    lenis.on("scroll", onScroll);

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.off("scroll", onScroll);
      lenis.destroy();
      document.documentElement.classList.remove("lenis");
    };
  }, []);

  const value = useMemo(() => state, [state]);

  return <LenisContext.Provider value={value}>{children}</LenisContext.Provider>;
}
