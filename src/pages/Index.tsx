import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Capacity from "@/components/Capacity";
import Facilities from "@/components/Facilities";
import Gallery from "@/components/Gallery";
import Relaxation from "@/components/Relaxation";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <About />
      <Capacity />
      <Facilities />
      <Gallery />
      <Relaxation />
      <Location />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
