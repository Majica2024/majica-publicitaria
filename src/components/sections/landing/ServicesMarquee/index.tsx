import { services } from "@/data/services";
import { bricolage } from "@/utils";
import clsx from "clsx";
import Link from "next/link";

/**
 * Cinta tipo «rodillo de impresión» con las 11 líneas de servicio,
 * separadas por marcas de registro (✚) como en un pliego de imprenta.
 * La animación se detiene con prefers-reduced-motion (globals.css).
 */
export const ServicesMarquee = () => {
  const items = services.map((s) => s.shortName);

  return (
    <Link
      href="/#servicios"
      aria-label={`Nuestros servicios: ${items.join(", ")}. Ir al catálogo`}
      className="block overflow-hidden border-y border-brand-line bg-white py-4"
    >
      <div
        aria-hidden="true"
        className="flex w-max animate-marquee hover:[animation-play-state:paused]"
      >
        {Array.from({ length: 4 }, (_, copy) => (
          <ul
            key={copy}
            className={clsx(
              bricolage.className,
              "flex shrink-0 items-center text-sm font-semibold uppercase tracking-[0.14em] text-brand-ink-soft",
            )}
          >
            {items.map((name) => (
              <li key={name} className="flex items-center">
                <span className="px-6">{name}</span>
                <span className="text-brand-coral">✚</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </Link>
  );
};
