"use client";

import clsx from "clsx";
import { type PointerEvent, type ReactNode, useRef } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  /** Inclinación máxima en grados */
  maxTilt?: number;
}

/**
 * Tarjeta con inclinación 3D que sigue el cursor + brillo especular que
 * recorre la superficie, como una pieza impresa bajo la luz. Solo actúa con
 * mouse (no en táctil) y se desactiva con prefers-reduced-motion.
 */
export const TiltCard = ({ children, className, maxTilt = 7 }: TiltCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const frame = useRef(0);

  const reset = () => {
    const el = ref.current;
    if (!el) return;
    cancelAnimationFrame(frame.current);
    el.style.transition = "transform .5s cubic-bezier(.22,1,.36,1)";
    el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)";
    el.style.setProperty("--glare-o", "0");
  };

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || e.pointerType !== "mouse") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      el.style.transition = "transform .06s linear";
      el.style.transform = `perspective(900px) rotateX(${(-(py - 0.5) * maxTilt).toFixed(2)}deg) rotateY(${((px - 0.5) * maxTilt).toFixed(2)}deg) scale(1.015)`;
      el.style.setProperty("--glare-x", `${(px * 100).toFixed(1)}%`);
      el.style.setProperty("--glare-y", `${(py * 100).toFixed(1)}%`);
      el.style.setProperty("--glare-o", "1");
    });
  };

  return (
    <div
      ref={ref}
      onPointerMove={onPointerMove}
      onPointerLeave={reset}
      className={clsx("relative", className)}
    >
      {children}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300"
        style={{
          opacity: "var(--glare-o, 0)",
          background:
            "radial-gradient(440px circle at var(--glare-x, 50%) var(--glare-y, 50%), rgba(255,255,255,.30), transparent 55%)",
        }}
      />
    </div>
  );
};
