"use client";

import { PortfolioSection } from "@/components/sections/portfolio";
import { Hero } from "@/components/sections/portfolio/Hero";
import { PortfolioSectionInformation } from "@/data";
import styles from "./Portfolio.module.css";

const Portfolio = () => {
  return (
    <section className={styles.portfolio}>
      <Hero />
      {PortfolioSectionInformation.map((section) => (
        <PortfolioSection
          key={section.id}
          title={section.title}
          spanTitle={section.spanTitle}
          image={section.image}
          paragraph={section.paragraph}
          button={section.button}
        />
      ))}
    </section>
  );
};

export default Portfolio;
