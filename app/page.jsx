import Work from "@/components/Work";
import About from "@/components/ui/About";
import Cta from "@/components/ui/Cta";
import Hero from "@/components/ui/Hero";
import Reviews from "@/components/ui/Reviews";
import Services from "@/components/ui/Services";

export default function Home() {
  return (
    <>
      <Hero />

      <About />
      <Services />
      <Work />
      <Cta />
    </>
  );
}
