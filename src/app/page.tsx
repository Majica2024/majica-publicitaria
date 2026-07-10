import {
  Contact,
  CtaBanner,
  Hero,
  InstagramSection,
  Process,
  ServicesGrid,
  ServicesMarquee,
  Testimonials,
  TrustBar,
} from "@/components/sections/landing";
import { ProductionReel } from "@/components/sections/portfolio";

const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <ServicesMarquee />
      <TrustBar />
      <ProductionReel />
      <ServicesGrid />
      <Process />
      <Testimonials />
      <CtaBanner />
      <InstagramSection />
      <Contact />
    </div>
  );
};

export default Home;
