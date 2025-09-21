import { Sprout, Database, Factory, ShoppingCart, ChevronRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Sprout,
      title: "Farmer Logs Harvest",
      description: "Farmers use our mobile app to log harvest details with GPS location, photos, and quality metrics.",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: Database,
      title: "Blockchain Records",
      description: "All data is immutably recorded on the blockchain, creating an unalterable digital identity for each batch.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Factory,
      title: "Manufacturer Processes",
      description: "Manufacturers track processing steps, quality tests, and transformations while maintaining chain of custody.",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: ShoppingCart,
      title: "Consumer Verifies",
      description: "End consumers scan QR codes to view the complete journey from farm to product with full transparency.",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
  ];

  return (
    <section id="how-it-works" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How GeoHerbs Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our blockchain-powered platform creates an unbreakable chain of trust 
            from seed to shelf, ensuring transparency at every step.
          </p>
        </div>

        {/* Workflow Steps */}
        <div className="relative">
          {/* Desktop View */}
          <div className="hidden lg:flex items-center justify-between">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex items-center">
                  {/* Step */}
                  <div className="flex flex-col items-center text-center max-w-xs">
                    <div className={`w-20 h-20 rounded-full ${step.bgColor} flex items-center justify-center mb-6 shadow-card`}>
                      <Icon className={`w-10 h-10 ${step.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow (except for last item) */}
                  {index < steps.length - 1 && (
                    <div className="flex items-center mx-8">
                      <ChevronRight className="w-8 h-8 text-primary animate-pulse" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile View */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex items-start space-x-4">
                  <div className={`flex-shrink-0 w-16 h-16 rounded-full ${step.bgColor} flex items-center justify-center shadow-card`}>
                    <Icon className={`w-8 h-8 ${step.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 text-primary border border-primary/20">
            <span className="text-sm font-medium">🔗 Powered by Secure Blockchain Technology</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;