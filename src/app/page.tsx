import {
  Contact,
  Hero,
  Services,
  Testimonials,
} from "@/components/sections/landing";

const Home = () => {
  return (
    <div className="w-full min-h-screen">
      <Hero />
      <Services />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;
