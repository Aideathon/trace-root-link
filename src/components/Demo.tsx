import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  QrCode, 
  MapPin, 
  Calendar, 
  User, 
  CheckCircle, 
  Smartphone,
  ArrowRight,
  Play
} from "lucide-react";
import mobileApp from "@/assets/mobile-app.jpg";

const Demo = () => {
  const [currentStep, setCurrentStep] = useState(0);
  
  const demoSteps = [
    {
      title: "Farmer Logs Harvest",
      description: "Kishor logs his turmeric harvest from vellore farm",
      data: {
        farmer: "Kishor",
        location: "vellore,Tamil Nadu",
        product: "Organic Turmeric",
        quantity: "250 kg",
        date: "March 15, 2024",
        quality: "Grade A"
      }
    },
    {
      title: "Processing & Verification",
      description: "Batch processed and verified by certified manufacturer",
      data: {
        processor: "Venkatesh Pvt Ltd",
        batchId: "TUR-MYS-240315-001",
        processing: "Dried & Powdered",
        quality: "Certified Organic",
        date: "March 18, 2024",
        status: "Quality Approved"
      }
    },
    {
      title: "Consumer Verification",
      description: "End consumer scans QR code to verify authenticity",
      data: {
        product: "Pure Turmeric Powder 100g",
        verification: "100% Authentic",
        journey: "Farm to Product in 5 days",
        farmer: "Kishor,vellore",
        certifications: "Organic, Fair Trade",
        rating: "4.9/5 stars"
      }
    }
  ];

  return (
    <section id="demo" className="section-padding bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            See GeoHerbs in Action
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience how our platform tracks a real turmeric batch from harvest 
            to your kitchen with complete transparency.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Interactive Demo */}
          <div className="space-y-6">
            {/* Step Selector */}
            <div className="flex space-x-2 mb-8">
              {demoSteps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStep(index)}
                  className={`flex-1 h-2 rounded-full transition-colors ${
                    index <= currentStep ? "bg-primary" : "bg-border"
                  }`}
                />
              ))}
            </div>

            {/* Current Step Content */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-2">
                  {demoSteps[currentStep].title}
                </h3>
                <p className="text-muted-foreground">
                  {demoSteps[currentStep].description}
                </p>
              </div>

              {/* Data Display */}
              <Card className="shadow-card border-l-4 border-l-primary">
                <CardContent className="pt-6">
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(demoSteps[currentStep].data).map(([key, value]) => (
                      <div key={key} className="space-y-1">
                        <dt className="text-sm font-medium text-muted-foreground capitalize">
                          {key.replace(/([A-Z])/g, ' $1')}
                        </dt>
                        <dd className="text-sm text-foreground font-medium flex items-center">
                          {key === 'status' || key === 'verification' ? (
                            <CheckCircle className="w-4 h-4 text-accent mr-2" />
                          ) : null}
                          {value}
                        </dd>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Navigation */}
              <div className="flex justify-between">
                <Button
                  variant="outline"
                  onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                  disabled={currentStep === 0}
                >
                  Previous
                </Button>
                <Button
                  variant="default"
                  onClick={() => setCurrentStep(Math.min(demoSteps.length - 1, currentStep + 1))}
                  disabled={currentStep === demoSteps.length - 1}
                >
                  Next
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>

          {/* Visual Demo */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={mobileApp}
                alt="GeoHerbs mobile app interface showing QR scanning and verification"
                className="w-full max-w-md mx-auto rounded-2xl shadow-floating"
              />
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-accent text-white p-3 rounded-full shadow-card animate-float">
                <QrCode className="w-6 h-6" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-primary text-white p-3 rounded-full shadow-card animate-float" style={{ animationDelay: '1s' }}>
                <CheckCircle className="w-6 h-6" />
              </div>
            </div>

            {/* Background Gradient */}
            <div className="absolute inset-0 primary-gradient opacity-10 rounded-3xl -z-10 transform rotate-3"></div>
          </div>
        </div>

        {/* Live Demo CTA */}
        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto shadow-floating primary-gradient text-white">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center justify-center">
                <Play className="w-6 h-6 mr-2" />
                Try Live Demo
              </CardTitle>
              <CardDescription className="text-white/90">
                Scan this QR code with your phone to experience the full GeoHerbs consumer app
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center">
                <QrCode className="w-20 h-20 text-primary" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Demo;
