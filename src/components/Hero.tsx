import { Button } from "@/components/ui/button";
import { Play, Download, ArrowRight } from "lucide-react";
import heroFarm from "@/assets/hero-farm.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroFarm}
          alt="Sustainable herb farming with blockchain technology"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/20 text-accent border border-accent/30 mb-8 animate-fade-up">
            <span className="text-sm font-medium">🌿 Blockchain-Powered Transparency</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-up">
            Trace Every Herb.{" "}
            <span className="text-accent">Empower</span>{" "}
            Every Farmer.
          </h1>

          {/* Subtext */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed animate-fade-up max-w-2xl">
            GeoHerbs uses blockchain technology to ensure authenticity, fair payments, 
            and transparency in the Ayurvedic herb supply chain.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up">
            <Button variant="accent" size="xl" className="group">
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Explore Products
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              <Download className="w-5 h-5 mr-2" />
              Download App
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex items-center gap-8 text-white/80 animate-fade-up">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span className="text-sm">10,000+ Verified Farmers</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span className="text-sm">1M+ Products Traced</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span className="text-sm">99.9% Transparency</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-20 right-10 hidden lg:block animate-float">
        <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-accent/30">
          <div className="w-8 h-8 bg-accent rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;