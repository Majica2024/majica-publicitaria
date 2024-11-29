// Card.tsx
import { Paragraph } from "@/components/ui/Paragraph";
import type { TestimonialCardProps } from "@/types/ui";
import { redHatDisplay } from "@/utils";
import { clsx } from "clsx";
import Image from "next/image";
import styles from "./Card.module.css";

export const Card = ({ testimonial }: TestimonialCardProps) => {
  const { title, client, image, description } = testimonial;
  return (
    <article className={styles.testimonialCard}>
      <div className={styles.logoContainer}>
        <Image
          src={image}
          alt={`Testimonio de ${title} - ${client}`}
          className={styles.logo}
          width={100}
          height={100}
          loading='lazy'
        />
      </div>
      <h4 className={clsx(styles.cardTitle, redHatDisplay.className)}>
        {title}
      </h4>
      <h5 className={styles.cardSubtitle}>Cliente: {client}</h5>
      <Paragraph size='0.875rem' className={redHatDisplay.className}>
        {description}
      </Paragraph>
    </article>
  );
};
