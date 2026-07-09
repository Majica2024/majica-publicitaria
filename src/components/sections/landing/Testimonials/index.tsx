import { Reveal, TiltCard } from "@/components/fx";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/data";
import { bricolage } from "@/utils";
import clsx from "clsx";
import Image from "next/image";

const webpImage = (path: string) =>
  path
    .replace("/fedesoft.png", "/fedesoft.webp")
    .replace("/softic.png", "/softic.webp")
    .replace("/Auteco.png", "/auteco.webp")
    .replace("/kikes.png", "/kikes.webp");

export const Testimonials = () => {
  return (
    <section id="casos-de-exito" className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="Casos de éxito"
          title={
            <>
              Marcas que ya se{" "}
              <span className="text-brand-coral-ink">imprimen con Majica</span>
            </>
          }
          description="Proyectos reales de sublimación, P.O.P y gran formato para empresas que vuelven a cotizar."
        />
      </Reveal>

      <ul className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
        {testimonials.map((testimonial, index) => (
          <li key={testimonial.id}>
            <Reveal delay={(index % 2) * 110} className="h-full">
            <TiltCard
              maxTilt={4}
              className="flex h-full flex-col gap-5 rounded-2xl border border-brand-line bg-white p-8"
            >
            <div className="flex items-center justify-between gap-4">
              <Image
                src={webpImage(testimonial.image)}
                alt={`Logo de ${testimonial.client}`}
                width={110}
                height={56}
                className="h-11 w-auto object-contain"
              />
              <span
                className={clsx(
                  bricolage.className,
                  "rounded-full bg-brand-teal-soft px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-teal-ink",
                )}
              >
                {testimonial.title}
              </span>
            </div>
            <blockquote className="text-[15px] leading-relaxed text-brand-ink-soft">
              “{testimonial.description}”
            </blockquote>
            <footer
              className={clsx(
                bricolage.className,
                "mt-auto text-sm font-bold text-brand-ink",
              )}
            >
              {testimonial.client}
            </footer>
            </TiltCard>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
};
