import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import HowItWorks from "@/components/HowItWorks";
import Demo from "@/components/Demo";
import Impact from "@/components/Impact";
import Testimonials from "@/components/Testimonials";
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
        <DownloadCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
