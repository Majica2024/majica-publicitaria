"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";

interface RevealProps {
  children: ReactNode;
  /** Retraso en ms para escalonar entradas en grids */
  delay?: number;
  className?: string;
  /** Desplazamiento vertical inicial en px */
  y?: number;
}

/**
 * Revela el contenido con fade + desplazamiento cuando entra al viewport.
 * Solo anima transform/opacity y se desactiva con prefers-reduced-motion.
 */
export const Reveal = ({ children, delay = 0, className, y = 28 }: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -48px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : `translateY(${y}px)`,
        transition: `opacity .65s ease-out ${delay}ms, transform .65s cubic-bezier(.22,1,.36,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};
