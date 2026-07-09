"use client";

import { Reveal } from "@/components/fx";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { bricolage } from "@/utils";
import clsx from "clsx";
import { useEffect, useRef } from "react";

interface Reel {
  src: string;
  poster: string;
  title: string;
  client: string;
}

const reels: Reel[] = [
  {
    src: "/assets/videos/nero-bordado.mp4",
    poster: "/assets/videos/nero-bordado-poster.jpg",
    title: "Bordado de alta densidad",
    client: "Nero Motori",
  },
  {
    src: "/assets/videos/honda-gorras.mp4",
    poster: "/assets/videos/honda-gorras-poster.jpg",
    title: "Gorras corporativas",
    client: "Honda",
  },
  {
    src: "/assets/videos/aggremax-mugs.mp4",
    poster: "/assets/videos/aggremax-mugs-poster.jpg",
    title: "Mugs personalizados",
    client: "AggreMax",
  },
  {
    src: "/assets/videos/shimoto-polos.mp4",
    poster: "/assets/videos/shimoto-polos-poster.jpg",
    title: "Polos bordados",
    client: "Shimoto",
  },
];

/**
 * Reel de producción: videos reales del taller. Se reproducen en silencio
 * solo mientras están en el viewport (IntersectionObserver); con
 * prefers-reduced-motion no hay autoplay y se muestran los controles.
 */
export const ProductionReel = () => {
  const containerRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const videos = Array.from(container.querySelectorAll("video"));
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      for (const video of videos) {
        video.autoplay = false;
        video.pause();
        video.controls = true;
      }
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        }
      },
      { threshold: 0.35 },
    );
    for (const video of videos) io.observe(video);
    return () => io.disconnect();
  }, []);

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
      <Reveal>
        <SectionHeading
          eyebrow="Producción en vivo"
          title={
            <>
              El taller, <span className="text-brand-coral-ink">en movimiento</span>
            </>
          }
          description="Así se ve tu marca mientras la producimos: bordado, sublimación y personalización reales, sin retoques."
        />
      </Reveal>

      <ul
        ref={containerRef}
        className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {reels.map((reel, index) => (
          <li key={reel.src}>
            <Reveal delay={index * 90} className="h-full">
              <figure className="group relative h-full overflow-hidden rounded-2xl border border-brand-line bg-brand-ink shadow-[0_16px_40px_-22px_rgba(40,40,61,0.4)]">
                <video
                  src={reel.src}
                  poster={reel.poster}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label={`Video de producción: ${reel.title} para ${reel.client}`}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 bg-gradient-to-t from-brand-ink/90 to-transparent p-4 pt-10">
                  <span>
                    <span
                      className={clsx(
                        bricolage.className,
                        "block text-sm font-bold text-brand-on-ink",
                      )}
                    >
                      {reel.title}
                    </span>
                    <span className="text-xs text-brand-on-ink-soft">
                      {reel.client}
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="mb-0.5 h-2 w-2 shrink-0 animate-pulse rounded-full bg-brand-coral"
                  />
                </figcaption>
              </figure>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
};
