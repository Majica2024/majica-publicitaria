import { redHatDisplay } from "@/app/layout";
import { Paragraph } from "@/components/ui/Paragraph";
import type { TestimonialCardProps } from "@/types/ui";
import Image from "next/image";
import styles from "./Card.module.css";

export const Card = ({ testimonial }: TestimonialCardProps) => {
  const { title, subtitle, image, description } = testimonial;
  return (
    <div className={styles.testimonialCard}>
      <picture className={styles.logoContainer}>
        <Image
          src={image}
          alt={title}
          className={styles.logo}
          width={100}
          height={100}
        />
      </picture>
      <h4 className={styles.cardTitle}>{title}</h4>
      <h5 className={styles.cardSubtitle}>{subtitle}</h5>
      <Paragraph size='0.8rem' className={redHatDisplay.className}>
        {description}
      </Paragraph>
    </div>
  );
};
