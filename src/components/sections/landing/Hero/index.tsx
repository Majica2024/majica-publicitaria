import { Button } from "@/components/ui/Button";
import { LogoComponent } from "@/components/ui/LogoComponent";
import HeroFoto from "../../../../../public/assets/images/foto-banner.png";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <article className={styles.content}>
        <LogoComponent />
        <h1>
          <span>Transforma tus ideas</span>
          <span>En impresiones de impacto</span>
        </h1>
        <h3>
          <span>Descubre como podemos </span>
          <span>dar vida a tu marca</span>
        </h3>
        <Button span='¡Cotiza ahora!' href='/' />
      </article>
      <picture className={styles.photo}>
        <img src={HeroFoto.src} alt='Hero Banner' />
      </picture>
    </section>
  );
};
