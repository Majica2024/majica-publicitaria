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

const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <ServicesMarquee />
      <TrustBar />
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
