"use client";
import { Button } from "@/components/ui/Button";
import { LogoComponent } from "@/components/ui/LogoComponent";
import { useLogoComponent } from "@/hooks/useMenuToggle";
import { poppins, redHatDisplay } from "@/utils";
import { clsx } from "clsx";
import Image from "next/image";
import HeroFoto from "../../../../../public/assets/images/foto-banner.png";

export const Hero = () => {
  const { isLogoVisible } = useLogoComponent();
  return (
    <section className="relative min-h-screen w-full bg-white px-4 py-16 md:py-0">
      <div className="mx-auto flex max-w-7xl flex-col items-center md:min-h-screen md:flex-row md:justify-between">
        {/* Contenido */}
        <article className="z-10 mb-12 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:text-left">
          {isLogoVisible && <LogoComponent size="1.5rem" />}
          
          {/* Heading */}
          <h1 className="mb-6">
            <span className={clsx(
              redHatDisplay.className,
              "block text-4xl font-bold text-majica-primary md:text-5xl lg:text-6xl"
            )}>
              Transforma tus ideas
            </span>
            <div className={clsx(
              poppins.className,
              "mt-2 text-3xl font-semibold text-majica-text-primary md:text-4xl lg:text-5xl"
            )}>
              <span>En impresiones de </span>
              <span className="block md:inline">impacto</span>
            </div>
          </h1>

          {/* Subtítulo */}
          <h3 className="mb-8 text-lg text-majica-text-light md:text-xl">
            <span>Descubre como podemos </span>
            <span className="block md:inline">dar vida a tu marca</span>
          </h3>

          {/* Botón */}
          <Button span="¡Cotiza ahora!" href="/" />
        </article>

        {/* Imagen */}
        <div className="relative w-full md:w-1/2">
          <Image
            src={HeroFoto.src}
            alt="Hero Banner"
            className="h-auto w-full object-cover"
            width={600}
            height={600}
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </section>
  );
};
