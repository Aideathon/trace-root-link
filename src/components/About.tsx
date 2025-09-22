import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Leaf, Globe } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Trust & Transparency",
      description: "Every product is blockchain-verified from farm to consumer, ensuring complete transparency in the supply chain."
    },
    {
      icon: Users,
      title: "Farmer Empowerment",
      description: "Direct farmer payments through smart contracts eliminate middlemen and ensure fair compensation."
    },
    {
      icon: Leaf,
      title: "Authenticity Guaranteed",
      description: "Combat counterfeit herbs with immutable blockchain records and GPS-tracked harvesting data."
    },
    {
      icon: Globe,
      title: "Global Standards",
      description: "Meeting international quality standards while preserving traditional Ayurvedic knowledge and practices."
    }
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6">
            <span className="text-sm font-medium">🌱 About GeoHerbs</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Revolutionizing Ayurvedic Supply Chains
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            GeoHerbs combines ancient wisdom with modern technology, creating a transparent, 
            trustworthy ecosystem for Ayurvedic herbs that benefits farmers, manufacturers, and consumers alike.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              Founded with the vision to restore trust in Ayurvedic medicine, GeoHerbs addresses the 
              critical challenges of authenticity verification, fair farmer compensation, and supply 
              chain transparency in the traditional medicine industry.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Through blockchain technology and IoT integration, we create an immutable record of 
              every herb's journey from soil to shelf, ensuring consumers receive genuine products 
              while farmers receive fair compensation for their precious crops.
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">Our Impact</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-card rounded-lg">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Farmers Empowered</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg">
                <div className="text-2xl font-bold text-primary">50K+</div>
                <div className="text-sm text-muted-foreground">Products Verified</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg">
                <div className="text-2xl font-bold text-primary">25+</div>
                <div className="text-sm text-muted-foreground">Manufacturing Partners</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg">
                <div className="text-2xl font-bold text-primary">99.9%</div>
                <div className="text-sm text-muted-foreground">Authenticity Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="text-center group hover:shadow-floating transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-lg primary-gradient flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;