"use client";

import { Parallax, Reveal } from "@/components/fx";
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

interface ProductionReelProps {
  variant?: "cards" | "ambient";
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
export const ProductionReel = ({ variant = "cards" }: ProductionReelProps) => {
  const containerRef = useRef<HTMLElement | null>(null);

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

  if (variant === "ambient") {
    return (
      <section
        ref={(node) => {
          containerRef.current = node;
        }}
        aria-label="Producción real en movimiento"
        className="relative isolate overflow-hidden bg-brand-ink px-4 py-24 text-brand-on-ink md:px-8 md:py-32"
      >
        <Parallax
          speed={0.14}
          className="pointer-events-none absolute inset-x-0 top-[-12%] -z-10 h-[124%]"
        >
          <div className="grid h-full min-h-[560px] grid-cols-2 gap-3 opacity-20 mix-blend-screen md:grid-cols-4 md:gap-4">
            {reels.map((reel, index) => (
              <video
                key={reel.src}
                src={reel.src}
                poster={reel.poster}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-hidden="true"
                className={clsx(
                  "h-full w-full object-cover saturate-125",
                  index % 2 === 0 ? "translate-y-10" : "-translate-y-8",
                )}
              />
            ))}
          </div>
        </Parallax>
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(240,134,118,0.28),transparent_34%),linear-gradient(90deg,rgba(40,40,61,0.96),rgba(40,40,61,0.72),rgba(40,40,61,0.96))]"
        />

        <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 text-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-coral">
              Producción en vivo
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2
              className={clsx(
                bricolage.className,
                "max-w-4xl text-balance text-4xl font-bold leading-[1.05] md:text-6xl",
              )}
            >
              Tu marca también puede verse así, mientras la hacemos realidad
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="max-w-2xl text-base leading-relaxed text-brand-on-ink-soft md:text-lg">
              Bordado, sublimación y personalización real del taller como fondo:
              movimiento sutil, textura de trabajo y piezas terminadas con carácter.
            </p>
          </Reveal>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-[92rem] px-4 py-16 md:px-8 md:py-24">
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
        ref={(node) => {
          containerRef.current = node;
        }}
        className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:gap-8"
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
                  className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
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
