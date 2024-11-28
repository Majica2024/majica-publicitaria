"use client";

import { HighlightSection } from "@/components/ui/HighlightSection";
import { redHatDisplay } from "@/utils";
import { clsx } from "clsx";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const services = [
  "Avisos Acrílicos",
  "Impresión gran formato",
  "Señalización",
  "Plotter de corte",
  "Porta Pendones",
  "Inflables o Dummies",
  "Sublimación textil",
  "Corte y grabado láser",
  "Tropezones & exhibidores",
  "Bastidores",
  "Estructuras metálicas",
];

export const Hero = () => {
  return (
    <section className="bg-[url('/assets/images/bg-lines.svg')] py-16">
      <div className="container mx-auto px-4 md:px-8">
        {/* Mobile Header */}
        <article className="mb-12 text-center md:hidden">
          <HighlightSection span="Nuestros servicios" />
          <h3 className={clsx(
            redHatDisplay.className,
            "flex flex-col text-4xl font-bold"
          )}>
            <span>Todo lo que</span>
            <span className="text-majica-secondary">ofrecemos:</span>
          </h3>
        </article>

        <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-16">
          {/* Imagen */}
          <div className="relative w-full md:w-1/2">
            <Image
              src="/assets/images/PortfolioHero.png"
              alt="Equipo de trabajo"
              width={600}
              height={600}
              className="w-full object-contain [mask-image:linear-gradient(to_bottom,white_70%,transparent)]"
              priority
            />
          </div>

          {/* Lista de servicios */}
          <div className="flex flex-col md:w-1/2">
            {/* Desktop Header */}
            <article className="hidden md:block">
              <HighlightSection span="Nuestros servicios" />
              <h3 className={clsx(
                redHatDisplay.className,
                "flex flex-col text-4xl font-bold"
              )}>
                <span>Todo lo que</span>
                <span className="text-majica-secondary">ofrecemos:</span>
              </h3>
            </article>

            {/* Lista */}
            <div className="mt-8">
              <ul className="flex flex-col gap-4">
                {services.map((service) => (
                  <li key={service} className="flex items-center gap-2 text-lg text-majica-text-light">
                    <ArrowRight className="h-5 w-5 text-majica-primary" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
