import { Reveal } from "@/components/fx";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { bricolage } from "@/utils";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

const INSTAGRAM_URL = "https://www.instagram.com/majicapublicitaria";

/**
 * Grid curado con producción real del taller. Imágenes locales optimizadas
 * en lugar del embed oficial de Meta (~1 MB de scripts) para no castigar el LCP.
 */
const posts = [
  { image: "/assets/images/work/ig-juliao.webp", alt: "Arco floral impreso para la vitrina de Juliao Boticarios" },
  { image: "/assets/images/work/ig-nero.webp", alt: "Gorra bordada para Nero Motori" },
  { image: "/assets/images/work/ig-aggremax.webp", alt: "Botilitos de bambú personalizados para AggreMax" },
  { image: "/assets/images/work/ig-stem.webp", alt: "Camisetas Futuro STEM sublimadas para Cenisoft y Fedesoft" },
  { image: "/assets/images/work/ig-honda.webp", alt: "Señaléticas de escritorio para asesores Honda" },
  { image: "/assets/images/work/ig-bordado.webp", alt: "Detalle de bordado de alta densidad en gorra" },
];

export const InstagramSection = () => {
  return (
    <section className="bg-majica-dark">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            align="left"
            onDark
            eyebrow="El taller, en vivo"
            title={
              <>
                Cada semana sale producción nueva{" "}
                <span className="text-brand-coral">del taller</span>
              </>
            }
            description="Síguenos y mira los proyectos en proceso, materiales y resultados reales."
          />
          <Link
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={clsx(
              bricolage.className,
              "inline-flex min-h-[48px] shrink-0 items-center gap-2.5 rounded-full border-[1.5px] border-brand-on-ink-soft/60 px-7 py-3 font-semibold text-brand-on-ink transition-colors duration-200 hover:border-brand-coral hover:text-brand-coral",
            )}
          >
            <FaInstagram size={20} aria-hidden="true" />
            @majicapublicitaria
          </Link>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-6">
          {posts.map(({ image, alt }, index) => (
            <li key={image}>
              <Reveal delay={index * 70}>
              <Link
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${alt} — ver en Instagram`}
                className="group relative block aspect-square overflow-hidden rounded-xl"
              >
                <Image
                  src={image}
                  alt={alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  loading="lazy"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-brand-ink/0 text-white opacity-0 transition-all duration-300 group-hover:bg-brand-ink/50 group-hover:opacity-100">
                  <FaInstagram size={26} aria-hidden="true" />
                </span>
              </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
