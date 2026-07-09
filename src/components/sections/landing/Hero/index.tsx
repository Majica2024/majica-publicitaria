import { Button } from "@/components/ui/Button";
import { WHATSAPP_DEFAULT_MESSAGE, bricolage, whatsappLink } from "@/utils";
import clsx from "clsx";
import Image from "next/image";
import { IoLogoWhatsapp } from "react-icons/io";

const proof = [
  { value: "11", label: "líneas de servicio" },
  { value: "+100", label: "proyectos entregados" },
  { value: "Bogotá", label: "y toda Colombia" },
];

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-majica-dark pt-20">
      {/* Resplandor coral decorativo, esquina superior derecha */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-brand-coral/30 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-24 h-[360px] w-[360px] rounded-full bg-brand-teal/20 blur-[120px]"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-[1.1fr_1fr] md:gap-6 md:px-8 md:py-24">
        <article className="flex flex-col items-start gap-6 md:gap-8">
          <p className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-on-ink-soft">
            <span aria-hidden="true" className="h-px w-8 bg-brand-coral" />
            Agencia de publicidad e impresión
          </p>

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

          <p className="max-w-lg text-base leading-relaxed text-brand-on-ink-soft md:text-lg">
            Avisos, gran formato, P.O.P y 8 líneas más de producción
            publicitaria. Diseñamos, imprimimos e instalamos para que tu marca
            se imponga.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Button
              span="Cotizar por WhatsApp"
              href={whatsappLink(WHATSAPP_DEFAULT_MESSAGE)}
              variant="whatsapp"
              external
              icon={<IoLogoWhatsapp size={20} aria-hidden="true" />}
            />
            <Button span="Ver portafolio" href="/portafolio" variant="ghost-dark" />
          </div>

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
        </article>

        <div className="relative hidden md:block">
          <Image
            src="/assets/images/hero.webp"
            alt="Equipo de Majica instalando impresión publicitaria de gran formato"
            width={800}
            height={1000}
            sizes="(max-width: 768px) 0px, 45vw"
            priority
            className="h-[560px] w-full rounded-2xl object-cover object-top shadow-2xl [mask-image:linear-gradient(to_bottom,black_82%,transparent_100%)]"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-3 -left-3 h-24 w-24 rounded-2xl border-2 border-brand-coral/60"
          />
        </div>
      </div>
    </section>
  );
};
