import { Reveal } from "@/components/fx";
import { bricolage } from "@/utils";
import clsx from "clsx";
import Image from "next/image";

/**
 * Franja de clientes: logos oficiales (SVG) para las marcas que los tienen
 * y wordmarks tipográficos consistentes para el resto. Marquesina continua,
 * monocroma con color al hover; pausada con prefers-reduced-motion.
 */
type Client =
  | { name: string; logo: string; width: number }
  | { name: string; wordmark: string };

const clients: Client[] = [
  { name: "Honda Motos", logo: "/assets/logos/honda.svg", width: 96 },
  { name: "Chevrolet", logo: "/assets/logos/chevrolet.svg", width: 132 },
  { name: "Bajaj", logo: "/assets/logos/bajaj.svg", width: 72 },
  { name: "SYM", wordmark: "SYM" },
  { name: "Fedesoft", wordmark: "fedesoft" },
  { name: "Cenisoft", wordmark: "cenisoft" },
  { name: "Nero Motori", wordmark: "NERO MOTORI" },
  { name: "Shimoto", wordmark: "shimoto" },
  { name: "Cassaflex P&L", wordmark: "Cassaflex" },
  { name: "AggreMax", wordmark: "AggreMax" },
  { name: "Juliao Boticarios", wordmark: "Juliao" },
  { name: "Auteco", wordmark: "AUTECO" },
  { name: "Huevos Kikes", wordmark: "Kikes" },
];

const ClientItem = ({ client }: { client: Client }) => (
  <li className="flex h-14 shrink-0 items-center px-9">
    {"logo" in client ? (
      <Image
        src={client.logo}
        alt={`Logo de ${client.name}`}
        width={client.width}
        height={48}
        className="h-10 w-auto object-contain opacity-55 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 md:h-11"
      />
    ) : (
      <span
        title={client.name}
        className={clsx(
          bricolage.className,
          "whitespace-nowrap text-xl font-bold tracking-tight text-brand-ink/50 transition-colors duration-300 hover:text-brand-ink md:text-2xl",
        )}
      >
        {client.wordmark}
      </span>
    )}
  </li>
);

export const TrustBar = () => {
  return (
    <section
      aria-label="Clientes que confían en Majica"
      className="py-14"
    >
      <Reveal>
        <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.18em] text-brand-ink-soft">
          Marcas que ya se imprimen con Majica
        </p>
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="flex w-max animate-marquee-slow items-center">
            {[0, 1].map((copy) => (
              <ul
                key={copy}
                aria-hidden={copy === 1}
                className="flex shrink-0 items-center"
              >
                {clients.map((client) => (
                  <ClientItem key={client.name} client={client} />
                ))}
              </ul>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
};
