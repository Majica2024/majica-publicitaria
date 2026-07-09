"use client";

import { type ReactNode, useEffect, useRef } from "react";

interface ParallaxProps {
  children: ReactNode;
  /**
   * Velocidad relativa al scroll. Positivo: el elemento se queda atrás
   * (fondo); negativo: se adelanta (primer plano). Rango útil: -0.3 a 0.3.
   */
  speed?: number;
  className?: string;
}

/**
 * Parallax por scroll medido sobre un wrapper estático (el hijo es el que se
 * transforma, así la medición nunca entra en bucle). rAF + listener pasivo;
 * inerte con prefers-reduced-motion.
 */
export const Parallax = ({ children, speed = 0.15, className }: ParallaxProps) => {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = outer.getBoundingClientRect();
      const offset =
        (rect.top + rect.height / 2 - window.innerHeight / 2) * speed;
      inner.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [speed]);

  return (
    <div ref={outerRef} className={className}>
      <div ref={innerRef} style={{ willChange: "transform" }}>
        {children}
      </div>
    </div>
  );
};
