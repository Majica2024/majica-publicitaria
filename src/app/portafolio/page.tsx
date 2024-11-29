"use client";

import { PortfolioSection } from "@/components/sections/portfolio";
import { Hero } from "@/components/sections/portfolio/Hero";
import { PortfolioSectionInformation } from "@/data";
import "../globals.css";

const Portfolio = () => {
  return (
    <section className='flex flex-col mt-40'>
      <Hero />
      {PortfolioSectionInformation.map((section) => (
        <PortfolioSection
          key={section.id}
          title={section.title}
          spanTitle={section.spanTitle}
          spanTitleColor={section.spanTitleColor}
          background={section.background}
          image={section.image}
          paragraph={section.paragraph}
          button={section.button}
          imageBorder={section.id % 2 === 1}
          index={section.id}
        />
      ))}
    </section>
  );
};

export default Portfolio;
