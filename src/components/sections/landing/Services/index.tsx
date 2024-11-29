"use client";

import { Button } from "@/components/ui/Button";
import { Paragraph } from "@/components/ui/Paragraph";
import { redHatDisplay } from "@/utils";
import { clsx } from "clsx";
import Image from "next/image";

export const Services = () => {
  return (
    <section className='relative min-h-[80vh] overflow-hidden bg-gradient-to-b from-white to-majica-coral-l px-6 py-12 md:min-h-dvh md:px-4'>
      <div className="absolute inset-0 bg-[url('/assets/images/lines.svg')] bg-contain" />

      <div className='relative mx-auto grid h-full max-w-7xl grid-cols-1 items-center md:grid-cols-2 md:gap-12'>
        <div className='relative mb-8 aspect-[3/4] w-full md:mb-0 md:-ml-20 md:aspect-[3/4]'>
          <Image
            src='/assets/images/service-banner.png'
            alt='Business Cards'
            fill
            priority
            sizes='(min-width: 768px) 50vw, 100vw'
            className='rounded-lg object-cover shadow-lg md:rounded-none md:shadow-none'
            style={{
              transform: "perspective(1000px) rotateY(5deg)",
              transformOrigin: "left center",
            }}
          />
        </div>

        <div
          className={clsx(
            redHatDisplay.className,
            "flex justify-center md:justify-end",
          )}
        >
          <div className='flex max-w-xl flex-col items-center gap-6 text-center md:items-end md:text-right'>
            <h2 className='flex flex-col items-center md:items-end'>
              <span className='text-xl font-normal md:text-2xl'>
                Conoce nuestro
              </span>
              <div className='flex flex-col text-4xl md:text-5xl font-bold'>
                <span>Catálogo de</span>
                <span className='text-majica-secondary'>servicios</span>
              </div>
            </h2>

            <Paragraph className='max-w-sm text-center md:text-right'>
              Cada proyecto cuenta una historia única de creatividad y
              precisión. Sumérgete en nuestro portafolio y descubre cómo
              transformamos ideas en resultados.
            </Paragraph>

            <Button span='Ver portafolio' href='/portafolio' />
          </div>
        </div>
      </div>
    </section>
  );
};
