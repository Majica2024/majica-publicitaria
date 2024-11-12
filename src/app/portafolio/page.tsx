"use client";

import { AcrylicNotices } from "@/components/sections/portfolio/AcrylicNotices";
import { Hero } from "@/components/sections/portfolio/Hero";
import styles from "./Portfolio.module.css";

const Portfolio = () => {
  return (
    <section className={styles.portfolio}>
      <Hero />
      <AcrylicNotices />
    </section>
  );
};

export default Portfolio;
