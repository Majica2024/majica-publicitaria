"use client";

import { Button } from "@/components/ui/Button";
import { Paragraph } from "@/components/ui/Paragraph";
import { redHatDisplay } from "@/utils";
import { clsx } from "clsx";
import Image from "next/image";

export const Services = () => {
  return (
    <section className="bg-gradient-to-b from-white to-majica-coral-light py-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 bg-[url('/assets/images/bg-lines.svg')] px-4 md:flex-row">
        {/* Imagen */}
        <picture className="hidden md:block md:w-1/2">
          <Image
            src="/assets/images/service-banner.png"
            alt="Business Cards"
            width={100}
            height={800}
            sizes="(width > 768px) 100vw, 50vw"
            className="h-full w-full object-cover"
          />
        </picture>

        {/* Contenido */}
        <div className={clsx(
          redHatDisplay.className,
          "flex flex-1 items-center justify-center"
        )}>
          <div className="flex flex-col items-end text-right">
            <h2 className="flex flex-col items-end">
              <span className="text-2xl font-normal">
                Conoce nuestro
              </span>
              <div className="flex flex-col text-5xl text-right">
                <span>Catálogo de</span>
                <span className="text-majica-secondary leading-tight">
                  servicios
                </span>
              </div>
            </h2>

            <Paragraph width="100%">
              <span className="block">
                Cada proyecto cuenta una historia única de creatividad y
                precisión.
              </span>
              <span className="block">
                Sumérgete en nuestro portafolio y descubre cómo transformamos
                ideas en resultados.
              </span>
            </Paragraph>

            <Button span="Ver portafolio" href="/portfolio" />
          </div>
        </div>
      </div>
    </section>
  );
};
