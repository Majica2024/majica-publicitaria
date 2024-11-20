"use client";

import { PortfolioSection } from "@/components/sections/portfolio";
import { Hero } from "@/components/sections/portfolio/Hero";
import { PortfolioSectionInformation } from "@/data";
import "../globals.css";

const Portfolio = () => {
  return (
    <section className='portfolio'>
      <Hero />
      {PortfolioSectionInformation.map((section) => (
        <PortfolioSection
          key={section.id}
          title={section.title}
          spanTitle={section.spanTitle}
          spanColor={section.spanColor}
          background={section.background}
          image={section.image}
          paragraph={section.paragraph}
          button={section.button}
        />
      ))}
    </section>
  );
};

export default Portfolio;
