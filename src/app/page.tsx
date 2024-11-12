import Contact from "@/components/sections/landing/Contact";
import { Hero } from "@/components/sections/landing/Hero";
import { Services } from "@/components/sections/landing/Services";
import Team from "@/components/sections/landing/Team";
import Testimonials from "@/components/sections/landing/Testimonials";
import styles from "./page.module.css";

const Home = () => {
  return (
    <div className={styles.page}>
      <Hero />
      <Services />
      <Testimonials />
      <Team />
      <Contact />
    </div>
  );
};

export default Home;
