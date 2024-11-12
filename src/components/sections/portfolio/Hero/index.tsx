import { HighlightSection } from "@/components/ui/HighlightSection";
import { ArrowRight } from "lucide-react";
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
        <div className={styles.imageWrapper}>
          <img
            src='/assets/images/PortfolioHero.png'
            alt='Equipo de trabajo'
            className={styles.image}
          />
        </div>

        <div className={styles.content}>
          <HighlightSection span='Nuestros servicios' />
          <h3 className={styles.title}>
            <span>Todo lo que</span>
            <span className={styles.highlight}>ofrecemos</span>:
          </h3>

          <ul className={styles.servicesList}>
            {services.map((service, index) => (
              <li key={index} className={styles.serviceItem}>
                <ArrowRight className={styles.arrow} />
                <span>{service}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
