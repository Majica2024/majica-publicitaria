import { Parallax, Reveal } from "@/components/fx";
import { Button } from "@/components/ui/Button";
import { WHATSAPP_DEFAULT_MESSAGE, bricolage, whatsappLink } from "@/utils";
import clsx from "clsx";
import { BadgeCheck, ChevronDown, Truck } from "lucide-react";
import { IoLogoWhatsapp } from "react-icons/io";
import { HeroSlider, type HeroSlide } from "./HeroSlider";

const proof = [
  { value: "12", label: "líneas de servicio" },
  { value: "+100", label: "proyectos entregados" },
  { value: "Bogotá", label: "y toda Colombia" },
];

const slides: HeroSlide[] = [
  {
    type: "video",
    src: "/assets/videos/hero-bordado.mp4",
    poster: "/assets/videos/hero-bordado-poster.jpg",
    alt: "Bordado de alta densidad producido en el taller de Majica",
  },
  {
    type: "image",
    src: "/assets/images/work/hero-honda-wide.webp",
    alt: "Arco inflable y banderas producidas por Majica en un concesionario Honda",
  },
  {
    type: "image",
    src: "/assets/images/work/hero-motoxpert.webp",
    alt: "Avisos acrílicos iluminados para MotoXperts y Phelon & Moore",
  },
  {
    type: "video",
    src: "/assets/videos/hero-botilitos.mp4",
    poster: "/assets/videos/hero-botilitos-poster.jpg",
    alt: "Botilitos y kit corporativo Nero Motori",
  },
  {
    type: "image",
    src: "/assets/images/work/hero-boricario.webp",
    alt: "Tablero decorativo instalado para Juliao Boticarios",
  },
  {
    type: "image",
    src: "/assets/images/work/hero-nero-bolsas.webp",
    alt: "Bolsas en drill estampadas para Nero Motori",
  },
];

export const Hero = () => {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-majica-dark">
      {/* Fondo full-bleed: slider de trabajo real (fotos + videos) con parallax */}
      <Parallax speed={0.14} className="absolute inset-0 [&>div]:h-full">
        <div className="relative h-full w-full">
          <HeroSlider slides={slides} />
        </div>
      </Parallax>

      {/* Veladuras para legibilidad: lateral izquierda + viñeta inferior */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-majica-dark/95 via-majica-dark/70 to-majica-dark/20"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-majica-dark/90 via-transparent to-majica-dark/40"
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 pb-24 pt-28 md:px-8">
        <Parallax speed={-0.05}>
          <article className="flex max-w-2xl flex-col items-start gap-6 md:gap-8">
            <Reveal>
              <p className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-on-ink-soft">
                <span aria-hidden="true" className="h-px w-8 bg-brand-coral" />
                Agencia de publicidad e impresión
              </p>
            </Reveal>

            <Reveal delay={100}>
              <h1
                className={clsx(
                  bricolage.className,
                  "max-w-[14ch] text-balance text-[2.7rem] font-bold leading-[1.03] tracking-tight text-brand-on-ink md:text-6xl lg:text-7xl",
                )}
              >
                Transforma tus ideas en{" "}
                <span className="text-brand-coral">impresiones</span> de{" "}
                <span className="text-brand-teal">impacto</span>
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="max-w-lg text-base leading-relaxed text-brand-on-ink-soft md:text-lg">
                Avisos, gran formato, P.O.P, textiles y 8 líneas más de
                producción publicitaria. Diseñamos, imprimimos e instalamos
                para que tu marca se imponga.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="flex flex-wrap items-center gap-4">
                <Button
                  span="Cotizar por WhatsApp"
                  href={whatsappLink(WHATSAPP_DEFAULT_MESSAGE)}
                  variant="whatsapp"
                  external
                  icon={<IoLogoWhatsapp size={20} aria-hidden="true" />}
                />
                <Button
                  span="Ver portafolio"
                  href="/portafolio"
                  variant="ghost-dark"
                />
              </div>
            </Reveal>

            <Reveal delay={420}>
              <dl className="mt-4 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/15 pt-6">
                {proof.map(({ value, label }) => (
                  <div key={label}>
                    <dt className="sr-only">{label}</dt>
                    <dd
                      className={clsx(
                        bricolage.className,
                        "text-2xl font-bold tracking-tight text-brand-on-ink",
                      )}
                    >
                      {value}
                    </dd>
                    <dd className="text-sm text-brand-on-ink-soft">{label}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </article>
        </Parallax>
      </div>

      {/* Chips flotantes sobre la foto (solo desktop) */}
      <div className="absolute right-[14%] top-[24%] hidden animate-float lg:block">
        <span
          className={clsx(
            bricolage.className,
            "flex items-center gap-2 rounded-full bg-brand-paper/95 px-4 py-2.5 text-sm font-semibold text-brand-ink shadow-xl backdrop-blur",
          )}
        >
          <BadgeCheck size={17} className="text-brand-teal-ink" aria-hidden="true" />
          Instalación incluida
        </span>
      </div>
      <div className="absolute bottom-[26%] right-[6%] hidden animate-float-delayed lg:block">
        <span
          className={clsx(
            bricolage.className,
            "flex items-center gap-2 rounded-full bg-brand-coral px-4 py-2.5 text-sm font-semibold text-white shadow-xl",
          )}
        >
          <Truck size={17} aria-hidden="true" />
          Entregas en todo el país
        </span>
      </div>

      {/* Señal de scroll */}
      <a
        href="#servicios"
        aria-label="Bajar al catálogo de servicios"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-brand-on-ink-soft transition-colors hover:text-brand-on-ink"
      >
        <ChevronDown size={30} className="motion-safe:animate-cue" aria-hidden="true" />
      </a>
    </section>
  );
};
