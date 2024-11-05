import { Hero } from "@/components/sections/landing/Hero";
import styles from "./page.module.css";

const Home = () => {
  return (
    <div className={styles.page}>
      <Hero />
    </div>
  );
};

export default Home;
