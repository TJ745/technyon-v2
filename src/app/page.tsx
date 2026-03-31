import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Products from "@/components/sections/Products";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Stats />
      <Products />
      <Testimonials />
      <Contact />
    </>
  );
}
