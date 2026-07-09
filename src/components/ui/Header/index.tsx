"use client";

import { LogoComponent } from "@/components/ui/LogoComponent";
import { pages } from "@/data/navigation";
import { bricolage } from "@/utils";
import clsx from "clsx";
import { X, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cierra el menú al navegar y bloquea el scroll del fondo mientras está abierto
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header
      className={clsx(
        "fixed top-0 z-50 w-full bg-brand-paper/90 backdrop-blur-md transition-shadow duration-300",
        (scrolled || isMenuOpen) && "shadow-[0_1px_0_0_rgba(40,40,61,0.08)]",
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-8">
        <Link href="/" aria-label="Majica Publicitaria — inicio">
          <LogoComponent size="2.5rem" />
        </Link>

        <nav aria-label="Navegación principal" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {pages.map(({ name, url }) => (
              <li key={name}>
                <Link
                  href={url}
                  className={clsx(
                    "text-[15px] font-medium text-brand-ink-soft transition-colors hover:text-brand-ink",
                    pathname === url && "text-brand-ink",
                  )}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/#contacto"
            className={clsx(
              bricolage.className,
              "hidden min-h-[44px] items-center rounded-full bg-brand-coral px-6 py-2.5 text-[15px] font-semibold text-white transition-all duration-200 hover:bg-brand-coral-ink md:inline-flex",
            )}
          >
            Cotiza ahora
          </Link>
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="menu-movil"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            className="flex h-11 w-11 items-center justify-center rounded-full text-brand-ink md:hidden"
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav
          id="menu-movil"
          aria-label="Navegación móvil"
          className="h-[calc(100dvh-5rem)] bg-brand-paper px-6 pt-6 md:hidden"
        >
          <ul className="flex flex-col gap-2">
            {pages.map(({ name, url }) => (
              <li key={name}>
                <Link
                  href={url}
                  onClick={() => setIsMenuOpen(false)}
                  className={clsx(
                    bricolage.className,
                    "block rounded-xl px-4 py-4 text-2xl font-semibold text-brand-ink transition-colors hover:bg-brand-coral-soft",
                  )}
                >
                  {name}
                </Link>
              </li>
            ))}
            <li className="mt-4">
              <Link
                href="/#contacto"
                onClick={() => setIsMenuOpen(false)}
                className={clsx(
                  bricolage.className,
                  "block rounded-full bg-brand-coral px-6 py-4 text-center text-lg font-semibold text-white",
                )}
              >
                Cotiza ahora
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};
