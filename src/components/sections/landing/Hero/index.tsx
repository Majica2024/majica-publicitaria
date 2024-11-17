"use client";
import { Button } from "@/components/ui/Button";
import { LogoComponent } from "@/components/ui/LogoComponent";
import { useLogoComponent } from "@/hooks/useMenuToggle";
import { poppins, redHatDisplay } from "@/utils";
import { clsx } from "clsx";
import HeroFoto from "../../../../../public/assets/images/foto-banner.png";
import styles from "./Hero.module.css";

export const Hero = () => {
  const { isLogoVisible } = useLogoComponent();
  return (
    <section className={styles.hero}>
      <article className={styles.content}>
        <article>
          {isLogoVisible && <LogoComponent size='1.5rem' />}
          <h1 className={styles.headText}>
            <span
              className={clsx(redHatDisplay.className, styles.transformIdeas)}
            >
              Transforma tus ideas
            </span>
            <div className={clsx(poppins.className, styles.impact)}>
              <span>En impresiones de </span>
              <span>impacto</span>
            </div>
          </h1>
          <h3 className={styles.bodyText}>
            <span>Descubre como podemos </span>
            <span>dar vida a tu marca</span>
          </h3>
          <Button span='¡Cotiza ahora!' href='/' />
        </article>
      </article>
      <picture className={styles.photo}>
        <img src={HeroFoto.src} alt='Hero Banner' />
      </picture>
    </section>
  );
};
