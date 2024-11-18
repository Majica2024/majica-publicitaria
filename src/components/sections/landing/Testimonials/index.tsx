// Testimonials.tsx
import { Card } from "@/components/ui/Card";
import { HighlightSection } from "@/components/ui/HighlightSection";
import { Paragraph } from "@/components/ui/Paragraph";
import { testimonials } from "@/data";
import { redHatDisplay } from "@/utils";
import { clsx } from "clsx";
import styles from "./Testimonials.module.css";

export const Testimonials = () => {
  return (
    <section className={styles.testimonials}>
      <article className={styles.testimonialsHead}>
        <HighlightSection span='Testimonios' />
        <h2 className={styles.sectionTitle}>
          Historias de <span className={styles.highlight}>éxito</span>{" "}
          profesional
        </h2>
        <h3 className={styles.subtitle}>
          ¡Historias de éxito que marcan la diferencia!
        </h3>
        <Paragraph>
          Explora cómo hemos ayudado a nuestros clientes a destacar con
          soluciones de impresión personalizadas y de alto impacto.
        </Paragraph>
      </article>

      <div className={styles.testimonialBody}>
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
      <h3 className={clsx(redHatDisplay.className, styles.testimonialFooter)}>
        ¡En Majica queremos evolucionar contigo!
      </h3>
    </section>
  );
};
