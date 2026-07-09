import { Reveal } from "@/components/fx";
import Image from "next/image";

const clients = [
  { name: "Fedesoft", image: "/assets/images/fedesoft.webp" },
  { name: "Auteco", image: "/assets/images/auteco.webp" },
  { name: "Huevos Kikes", image: "/assets/images/kikes.webp" },
  { name: "Softic", image: "/assets/images/softic.webp" },
];

export const TrustBar = () => {
  return (
    <section
      aria-label="Clientes que confían en Majica"
      className="mx-auto max-w-7xl px-4 py-14 md:px-8"
    >
      <Reveal>
        <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.18em] text-brand-ink-soft">
          Marcas que confían en Majica
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-x-14 gap-y-8">
          {clients.map(({ name, image }) => (
            <li key={name}>
              <Image
                src={image}
                alt={`Logo de ${name}`}
                width={140}
                height={70}
                className="h-12 w-auto object-contain opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 md:h-14"
              />
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
};
