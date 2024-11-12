import { redHatDisplay } from "@/app/layout";
import { HighlightSection } from "@/components/ui/HighlightSection";
import { Paragraph } from "@/components/ui/Paragraph";
import Image from "next/image";
import styles from "./Testimonials.module.css";

const testimonials = [
  {
    id: 1,
    title: "Rompe tráfico",
    subtitle: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In facilisis enim id orci sollicitudin, vel feugiat tortor vehicula. Integer sed nisl amet nisl interdum maximus",
  },
  {
    id: 2,
    title: "Rompe tráfico",
    subtitle: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In facilisis enim id orci sollicitudin, vel feugiat tortor vehicula. Integer sed nisl amet nisl interdum maximus",
  },
  {
    id: 3,
    title: "Rompe tráfico",
    subtitle: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In facilisis enim id orci sollicitudin, vel feugiat tortor vehicula. Integer sed nisl amet nisl interdum maximus",
  },
  {
    id: 4,
    title: "Rompe tráfico",
    subtitle: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In facilisis enim id orci sollicitudin, vel feugiat tortor vehicula. Integer sed nisl amet nisl interdum maximus",
  },
];

const Testimonials = () => {
  return (
    <section className={styles.testimonials}>
      <article className={styles.testimonialsHead}>
        <HighlightSection span='Testimonios' />
        <h2 className={styles.mainTitle}>
          Historias de <span className={styles.highlight}>éxito</span>{" "}
          profesional
        </h2>
        <h3 className={styles.subtitle}>
          ¡Historias de éxito que marcan la diferencia!
        </h3>
        <Paragraph width='100%'>
          Explora cómo hemos ayudado a nuestros clientes a destacar con
          soluciones de impresión personalizadas y de alto impacto. Desde la
          creatividad hasta la ejecución, cada historia de éxito refleja nuestro
          compromiso en cada detalle.
        </Paragraph>
      </article>
      <div className={styles.testimonialGrid}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className={styles.testimonialCard}>
            <div className={styles.logoContainer}>
              <Image
                src='/assets/images/MajicaLogo.png'
                alt='Majica Logo'
                className={styles.logo}
                width={100}
                height={100}
              />
            </div>
            <h4 className={styles.cardTitle}>{testimonial.title}</h4>
            <h5 className={styles.cardSubtitle}>{testimonial.subtitle}</h5>
            <Paragraph size='0.8rem' className={redHatDisplay.className}>
              {testimonial.description}
            </Paragraph>
          </div>
        ))}
      </div>
      <h3>¡En Majica queremos evolucionar contigo! </h3>
    </section>
  );
};

export default Testimonials;
