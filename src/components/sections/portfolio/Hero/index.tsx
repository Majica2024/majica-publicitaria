import { HighlightSection } from "@/components/ui/HighlightSection";
import { redHatDisplay } from "@/utils";
import { clsx } from "clsx";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import styles from "./Hero.module.css";

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
    <section className={styles.hero}>
      <div className={styles.container}>
        <article className={styles.headSection}>
          <HighlightSection span='Nuestros servicios' />
          <h3 className={clsx(redHatDisplay.className, styles.headTitle)}>
            <span>Todo lo que</span>
            <span className={styles.highlight}>ofrecemos:</span>
          </h3>
        </article>
        <article className={styles.bodyHero}>
          <picture className={styles.imageWrapper}>
            <Image
              src='/assets/images/PortfolioHero.png'
              alt='Equipo de trabajo'
              width={100}
              height={100}
              sizes='(width > 768px) 100vw, 50vw'
            />
          </picture>
          <article className={styles.servicesListHero}>
            <article className={styles.headSection}>
              <HighlightSection span='Nuestros servicios' />
              <h3 className={clsx(redHatDisplay.className, styles.headTitle)}>
                <span>Todo lo que</span>
                <span className={styles.highlight}>ofrecemos:</span>
              </h3>
            </article>
            <div className={styles.content}>
              <ul className={styles.servicesList}>
                {services.map((service) => (
                  <li key={service} className={styles.serviceItem}>
                    <ArrowRight className={styles.arrow} />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </article>
      </div>
    </section>
  );
};
