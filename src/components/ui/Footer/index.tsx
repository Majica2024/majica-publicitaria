import { pages } from "@/data/navigation";
import { services } from "@/data/services";
import { WHATSAPP_DEFAULT_MESSAGE, bricolage, whatsappLink } from "@/utils";
import clsx from "clsx";
import Link from "next/link";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

export const Footer = () => {
  return (
    <footer className="bg-majica-dark text-brand-on-ink">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div className="flex flex-col gap-4">
            <p className={clsx(bricolage.className, "text-2xl font-bold")}>
              majica<span className="text-brand-coral">.</span>
            </p>
            <p className="max-w-xs text-sm leading-relaxed text-brand-on-ink-soft">
              Agencia de publicidad e impresión en Bogotá. Diseñamos,
              producimos e instalamos piezas que hacen visible tu marca.
            </p>
            <div className="mt-2 flex gap-3">
              <Link
                href="https://www.instagram.com/majicapublicitaria"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de Majica Publicitaria"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-brand-coral hover:text-brand-coral"
              >
                <FaInstagram size={19} />
              </Link>
              <Link
                href={whatsappLink(WHATSAPP_DEFAULT_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp de Majica Publicitaria"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-brand-whatsapp hover:text-brand-whatsapp"
              >
                <IoLogoWhatsapp size={19} />
              </Link>
            </div>
          </div>

          <nav aria-label="Enlaces del sitio" className="flex flex-col gap-3">
            <p className={clsx(bricolage.className, "mb-1 text-sm font-bold uppercase tracking-[0.14em] text-brand-on-ink-soft")}>
              Sitio
            </p>
            {pages.map(({ name, url }) => (
              <Link
                key={name}
                href={url}
                className="w-fit text-sm text-brand-on-ink-soft transition-colors hover:text-brand-on-ink"
              >
                {name}
              </Link>
            ))}
            <Link
              href="/#contacto"
              className="w-fit text-sm text-brand-on-ink-soft transition-colors hover:text-brand-on-ink"
            >
              Contacto
            </Link>
          </nav>

          <nav aria-label="Servicios destacados" className="flex flex-col gap-3">
            <p className={clsx(bricolage.className, "mb-1 text-sm font-bold uppercase tracking-[0.14em] text-brand-on-ink-soft")}>
              Servicios
            </p>
            {services.slice(0, 6).map((service) => (
              <Link
                key={service.slug}
                href="/#servicios"
                className="w-fit text-sm text-brand-on-ink-soft transition-colors hover:text-brand-on-ink"
              >
                {service.name}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <p className={clsx(bricolage.className, "mb-1 text-sm font-bold uppercase tracking-[0.14em] text-brand-on-ink-soft")}>
              Hablemos
            </p>
            <a
              href="mailto:ventas@majicapublicitaria.com"
              className="w-fit text-sm text-brand-on-ink-soft transition-colors hover:text-brand-on-ink"
            >
              ventas@majicapublicitaria.com
            </a>
            <p className="text-sm text-brand-on-ink-soft">Bogotá, Colombia</p>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 text-xs text-brand-on-ink-soft md:flex-row">
          <p>© 2026 Majica Publicitaria. Derechos reservados.</p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-6">
            <span className="flex items-center gap-1.5">
              <FaLinkedin size={14} aria-hidden="true" />
              Diseñado por{" "}
              <Link
                className="underline transition-colors hover:text-brand-on-ink"
                href="https://www.linkedin.com/in/auracristina0693/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Aura Cristina Salazar
              </Link>
            </span>
            <span className="flex items-center gap-1.5">
              <FaLinkedin size={14} aria-hidden="true" />
              Desarrollado por{" "}
              <Link
                className="underline transition-colors hover:text-brand-on-ink"
                href="https://www.linkedin.com/in/soysergiogonza/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sergio González
              </Link>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
