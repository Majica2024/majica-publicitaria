"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

export interface HeroSlide {
  type: "image" | "video";
  src: string;
  poster?: string;
  alt: string;
}

const INTERVAL_MS = 7000;

/**
 * Fondo del hero como slider full-bleed con crossfade: mezcla fotos y videos
 * del taller. El video activo se reproduce (silencioso) y el resto se pausa;
 * con prefers-reduced-motion no hay auto-avance ni autoplay, solo los puntos
 * de navegación manual. El texto del hero vive fuera, por encima.
 */
export const HeroSlider = ({ slides }: { slides: HeroSlide[] }) => {
  const [active, setActive] = useState(0);
  const [reduced, setReduced] = useState(false);
  const [paused, setPaused] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  // Auto-avance (pausable por hover y desactivado con reduced motion)
  useEffect(() => {
    if (reduced || paused) return;
    timer.current = setInterval(
      () => setActive((current) => (current + 1) % slides.length),
      INTERVAL_MS,
    );
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [reduced, paused, slides.length]);

  // Reproduce solo el video de la escena activa; reintenta al volver a la pestaña
  useEffect(() => {
    const playActive = () => {
      videoRefs.current.forEach((video, index) => {
        if (!video) return;
        if (index === active && !reduced && !document.hidden) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      });
    };
    playActive();
    document.addEventListener("visibilitychange", playActive);
    return () => document.removeEventListener("visibilitychange", playActive);
  }, [active, reduced]);

  const goTo = useCallback((index: number) => setActive(index), []);

  return (
    <div
      className="absolute inset-0"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((slide, index) => {
        const isActive = index === active;
        return (
          <div
            key={slide.src}
            aria-hidden={!isActive}
            className="absolute inset-0 transition-opacity duration-1000 ease-out"
            style={{ opacity: isActive ? 1 : 0 }}
          >
            {slide.type === "video" ? (
              <video
                ref={(el) => {
                  videoRefs.current[index] = el;
                }}
                src={slide.src}
                poster={slide.poster}
                autoPlay={index === 0}
                muted
                loop
                playsInline
                preload={index === 0 ? "auto" : "metadata"}
                aria-label={slide.alt}
                className="h-full w-full object-cover"
              />
            ) : (
              <div
                className={
                  isActive ? "h-full w-full motion-safe:animate-hero-zoom" : "h-full w-full"
                }
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  sizes="100vw"
                  priority={index <= 1}
                  className="object-cover"
                />
              </div>
            )}
          </div>
        );
      })}

      {/* Puntos de navegación */}
      <div className="absolute bottom-6 right-6 z-10 flex gap-2 md:right-10">
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => goTo(index)}
            aria-label={`Ver escena ${index + 1}: ${slide.alt}`}
            aria-current={index === active}
            className="flex h-11 w-6 items-center justify-center"
          >
            <span
              className={
                index === active
                  ? "h-2 w-6 rounded-full bg-brand-coral transition-all duration-300"
                  : "h-2 w-2 rounded-full bg-white/50 transition-all duration-300 hover:bg-white/80"
              }
            />
          </button>
        ))}
      </div>
    </div>
  );
};
