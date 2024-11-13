import {
  Contact,
  Hero,
  Services,
  Testimonials,
} from "@/components/sections/landing";
import styles from "./page.module.css";

const Home = () => {
  return (
    <div className={styles.page}>
      <Hero />
      <Services />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;
