"use client";

import { Button } from "@/components/ui/Button";
import { Paragraph } from "@/components/ui/Paragraph";
import { redHatDisplay } from "@/utils";
import { clsx } from "clsx";
import Image from "next/image";
import styles from "./Services.module.css";

export const Services = () => {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.servicesContainer}>
        <picture className={styles.servicesImage}>
          <Image
            src='/assets/images/service-banner.png'
            alt='Business Cards'
            width={100}
            height={800}
            sizes='(width > 768px) 100vw, 50vw'
            className={styles.mainImage}
          />
        </picture>
        <div className={clsx(redHatDisplay.className, styles.servicesText)}>
          <div className={styles.servicesContainer}>
            <h2 className={styles.servicesTitle}>
              <span className={styles.knowText}>Conoce nuestro</span>
              <div className={styles.titleWrapper}>
                <span className={styles.catalogText}>Catálogo de</span>
                <span className={styles.servicesHighlight}>servicios</span>
              </div>
            </h2>
            <Paragraph width='100%'>
              <span>
                Cada proyecto cuenta una historia única de creatividad y
                precisión.
              </span>
              <span>
                Sumérgete en nuestro portafolio y descubre cómo transformamos
                ideas en resultados.
              </span>
            </Paragraph>
            <Button span='Ver portafolio' href='/portfolio' />
          </div>
        </div>
      </div>
    </section>
  );
};
