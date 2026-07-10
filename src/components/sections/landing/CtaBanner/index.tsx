import { Parallax, Reveal } from "@/components/fx";
import { services } from "@/data/services";
import { WHATSAPP_DEFAULT_MESSAGE, bricolage, whatsappLink } from "@/utils";
import clsx from "clsx";
import Link from "next/link";
import { IoLogoWhatsapp } from "react-icons/io";

/**
 * Banner de conversión de alto impacto: tipografía gigante delineada en
 * movimiento al fondo (rodillo de imprenta a gran escala) + CTA directo.
 */
export const CtaBanner = () => {
  const line = services.map((s) => s.shortName.toUpperCase());

  return (
    <section
      aria-label="Cotiza tu proyecto"
      className="relative overflow-hidden bg-gradient-to-br from-brand-coral via-[#E06A57] to-[#28283D] py-24 md:py-32"
    >
      {/* Tipografía gigante delineada desplazándose al fondo */}
      <Parallax speed={0.1} className="absolute inset-x-0 top-6 md:top-2">
        <div aria-hidden="true" className="flex w-max animate-marquee-slow">
          {Array.from({ length: 4 }, (_, copy) => (
            <p
              key={copy}
              className={clsx(
                bricolage.className,
                "shrink-0 whitespace-nowrap text-[7rem] font-extrabold leading-none text-transparent md:text-[11rem]",
                "[-webkit-text-stroke:1.5px_rgba(255,255,255,0.22)]",
              )}
            >
              {line.join(" ✚ ")} ✚{" "}
            </p>
          ))}
        </div>
      </Parallax>

      <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-8 px-4 text-center">
        <Reveal>
          <h2
            className={clsx(
              bricolage.className,
              "text-balance text-4xl font-bold leading-[1.06] tracking-tight text-white md:text-6xl",
            )}
          >
            ¿Listo para imprimir{" "}
            <span className="relative inline-block">
              en grande
              <span
                aria-hidden="true"
                className="absolute -bottom-1 left-0 h-[6px] w-full rounded-full bg-brand-teal"
              />
            </span>
            ?
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
            Cuéntanos tu idea hoy y recibe propuesta con diseño, materiales y
            tiempos de instalación. Sin compromiso.
          </p>
        </Reveal>
        <Reveal delay={240}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href={whatsappLink(WHATSAPP_DEFAULT_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className={clsx(
                bricolage.className,
                "inline-flex min-h-[52px] items-center gap-2.5 rounded-full bg-white px-8 py-3.5 text-base font-bold text-brand-ink shadow-xl transition-transform duration-200 hover:scale-[1.04] active:scale-[0.98]",
              )}
            >
              <IoLogoWhatsapp size={21} className="text-brand-whatsapp" aria-hidden="true" />
              Cotizar ahora por WhatsApp
            </Link>
            <Link
              href="/#contacto"
              className={clsx(
                bricolage.className,
                "inline-flex min-h-[52px] items-center rounded-full border-[1.5px] border-white/50 px-8 py-3.5 text-base font-semibold text-white transition-colors duration-200 hover:border-white hover:bg-white/10",
              )}
            >
              Prefiero el formulario
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
