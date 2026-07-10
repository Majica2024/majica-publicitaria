import { Reveal } from "@/components/fx";
import Image from "next/image";

/**
 * Franja de clientes con logos reales: SVG oficiales (Honda, Chevrolet,
 * Bajaj, Auteco — Wikimedia) y marcas locales recortadas de piezas producidas
 * por Majica. Marquesina continua, monocroma con color al hover; se pausa al
 * pasar el cursor y con prefers-reduced-motion.
 */
const clients = [
  { name: "Honda Motos", logo: "/assets/logos/honda.svg", h: "h-10 md:h-11" },
  { name: "Chevrolet", logo: "/assets/logos/chevrolet.svg", h: "h-9 md:h-10" },
  { name: "Auteco", logo: "/assets/logos/auteco.svg", h: "h-9 md:h-10" },
  { name: "Bajaj", logo: "/assets/logos/bajaj.svg", h: "h-10 md:h-11" },
  { name: "Fedesoft", logo: "/assets/logos/fedesoft.png", h: "h-8 md:h-9" },
  { name: "Cenisoft", logo: "/assets/logos/cenisoft.png", h: "h-8 md:h-9" },
  { name: "Nero Motori", logo: "/assets/logos/nero.png", h: "h-10 md:h-11" },
];

export const TrustBar = () => {
  return (
    <section aria-label="Clientes que confían en Majica" className="pb-4 pt-10">
      <Reveal>
        <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.18em] text-brand-ink-soft">
          Marcas que ya se imprimen con Majica
        </p>
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="flex w-max animate-marquee-slow items-center hover:[animation-play-state:paused]">
            {Array.from({ length: 4 }, (_, copy) => (
              <ul
                key={copy}
                aria-hidden={copy === 1}
                className="flex shrink-0 items-center"
              >
                {clients.map(({ name, logo, h }) => (
                  <li key={name} className="flex h-16 shrink-0 items-center px-10">
                    <Image
                      src={logo}
                      alt={`Logo de ${name}`}
                      width={160}
                      height={56}
                      className={`${h} w-auto object-contain opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0`}
                    />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
};
