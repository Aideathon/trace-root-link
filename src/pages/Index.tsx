import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import HowItWorks from "@/components/HowItWorks";
import Demo from "@/components/Demo";
import Impact from "@/components/Impact";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Contact from "@/components/Contact";
import DownloadCTA from "@/components/DownloadCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Products />
        <HowItWorks />
        <Demo />
        <Impact />
        <Testimonials />
        <About />
        <Contact />
        <DownloadCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
