import { Parallax, Reveal } from "@/components/fx";
import { Button } from "@/components/ui/Button";
import { WHATSAPP_DEFAULT_MESSAGE, bricolage, whatsappLink } from "@/utils";
import clsx from "clsx";
import { BadgeCheck, Truck } from "lucide-react";
import Image from "next/image";
import { IoLogoWhatsapp } from "react-icons/io";

const proof = [
  { value: "12", label: "líneas de servicio" },
  { value: "+100", label: "proyectos entregados" },
  { value: "Bogotá", label: "y toda Colombia" },
];

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-majica-dark pt-20">
      {/* Capas de resplandor con parallax: fondo respira y se separa al hacer scroll */}
      <Parallax
        speed={0.22}
        className="pointer-events-none absolute -right-32 -top-32"
      >
        <div
          aria-hidden="true"
          className="h-[460px] w-[460px] animate-glow-pulse rounded-full bg-brand-coral/30 blur-[120px]"
        />
      </Parallax>
      <Parallax
        speed={-0.14}
        className="pointer-events-none absolute -bottom-40 -left-24"
      >
        <div
          aria-hidden="true"
          className="h-[400px] w-[400px] animate-glow-pulse rounded-full bg-brand-teal/20 blur-[120px]"
        />
      </Parallax>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-[1.1fr_1fr] md:gap-6 md:px-8 md:py-24">
        <article className="flex flex-col items-start gap-6 md:gap-8">
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
                "max-w-[14ch] text-balance text-[2.6rem] font-bold leading-[1.04] tracking-tight text-brand-on-ink md:text-6xl lg:text-7xl",
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
              producción publicitaria. Diseñamos, imprimimos e instalamos para
              que tu marca se imponga.
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
            <dl className="mt-4 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/10 pt-6">
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

        <div className="relative hidden md:block">
          <Parallax speed={-0.06}>
            <Image
              src="/assets/images/work/hero-honda.webp"
              alt="Arco inflable y banderas producidas por Majica en la fachada de un concesionario Honda"
              width={800}
              height={1000}
              sizes="(max-width: 768px) 0px, 45vw"
              priority
              className="h-[560px] w-full rounded-2xl object-cover shadow-2xl [mask-image:linear-gradient(to_bottom,black_82%,transparent_100%)]"
            />
          </Parallax>

          {/* Chips flotantes sobre la foto: refuerzan la promesa sin ocupar layout */}
          <div className="absolute -left-6 top-10 animate-float">
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
          <div className="absolute -right-2 bottom-24 animate-float-delayed">
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

          <div
            aria-hidden="true"
            className="absolute -bottom-3 -left-3 h-24 w-24 rounded-2xl border-2 border-brand-coral/60"
          />
        </div>
      </div>
    </section>
  );
};
