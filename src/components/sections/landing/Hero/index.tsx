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
    <section className='relative min-h-screen w-full bg-hero-banner bg-cover bg-center bg-no-repeat'>
      <div
        className='absolute inset-0 before:absolute before:inset-0 before:bg-black/40 md:relative'
        style={{
          backgroundImage: "url('/assets/images/foto-banner.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className='absolute inset-0 bg-black/40 md:hidden' />

      <div className='relative mx-auto flex max-w-7xl flex-col-reverse items-center px-4 py-16 md:min-h-screen md:flex-row md:items-center md:justify-between md:py-0'>
        <article className='z-10 flex gap-4 md:gap-10 w-full flex-col items-start md:w-5/12 md:px-0'>
          {isLogoVisible && <LogoComponent size='2.5rem' />}
          <h1 className='flex flex-col gap-4 md:gap-8'>
            <span
              className={clsx(
                redHatDisplay.className,
                "block text-3xl font-bold text-white md:text-majica-text-primary md:text-5xl lg:text-6xl",
              )}
            >
              Transforma
              <br className='md:hidden' /> tus ideas
            </span>
            <div
              className={clsx(
                poppins.className,
                " flex flex-col text-2xl font-medium text-white md:text-majica-primary md:text-4xl lg:text-5xl",
              )}
            >
              <span>En impresiones</span>
              <span>
                de
                <span className='text-majica-primary font-bold md:font-normal'>
                  {" "}
                  impacto
                </span>
              </span>
            </div>
          </h1>
          <h3 className='flex flex-col text-base text-white md:mb-8 md:text-majica-text-light md:text-xl'>
            <span> Descubre como podemos</span>
            <span className='text-majica-primary md:text-majica-secondary font-bold text-base'>
              dar vida a tu marca
            </span>
          </h3>
          <Button span='¡Cotiza ahora!' href='/#contacto' />
        </article>
        <div className='relative'>
          <Image
            src={HeroFoto.src}
            alt='Hero Banner'
            className='h-auto w-full object-contain md:h-[700px] md:w-auto md:object-cover [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)] hidden md:block'
            width={800}
            height={800}
            sizes='(max-width: 768px) 100vw, 50vw'
            priority
          />
        </div>
      </div>
    </section>
  );
};
