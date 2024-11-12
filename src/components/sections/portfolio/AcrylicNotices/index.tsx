import { Button } from "@/components/ui/Button";
import Image from "next/image";
import styles from "./AcrylicNotices.module.css";

export const AcrylicNotices = () => {
  return (
    <section className={styles.AcrylicNotices}>
      <article className={styles.text}>
        <h2 className={styles.title}>
          Avisos <span className={styles.AcrylicTitleSpan}>Acrílicos</span>
        </h2>
        <p className={styles.description}>
          Ideamos, construimos e implementamos sistemas de software y
          plataformas tecnológicas que responden a las tendencias y necesidades
          de la industria. Además, desarrollamos soluciones y aplicaciones
          móviles en IOS y Android, con diferentes lenguajes y tecnologías
          vigentes.
        </p>
        <Button span='Solicitar servicio' href='/' />
      </article>
      <picture className={styles.picture}>
        <Image
          src='/assets/images/Melisa.png'
          alt=''
          width={100}
          height={100}
        />
      </picture>
    </section>
  );
};
