import { 
  Smartphone, 
  Monitor, 
  Users, 
  Building, 
  MapPin, 
  Camera, 
  CreditCard, 
  TrendingUp,
  BarChart3,
  Shield,
  QrCode,
  Star,
  Eye,
  FileCheck
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const stakeholderFeatures = [
    {
      title: "Farmer App",
      icon: Smartphone,
      color: "text-accent",
      bgColor: "bg-accent/10",
      features: [
        { icon: MapPin, text: "GPS Harvest Logging" },
        { icon: Camera, text: "Image Capture & Quality" },
        { icon: CreditCard, text: "Payment Tracking" },
        { icon: TrendingUp, text: "Market Price Updates" }
      ]
    },
    {
      title: "Manufacturer Portal",
      icon: Monitor,
      color: "text-primary",
      bgColor: "bg-primary/10",
      features: [
        { icon: BarChart3, text: "Batch Tracking Analytics" },
        { icon: Shield, text: "Quality Control Systems" },
        { icon: Eye, text: "Supply Chain Analytics" },
        { icon: FileCheck, text: "Smart Contract Integration" }
      ]
    },
    {
      title: "Consumer App",
      icon: Users,
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      features: [
        { icon: QrCode, text: "QR Code Scanning" },
        { icon: MapPin, text: "Product Journey Visualization" },
        { icon: Star, text: "Reviews & Ratings" },
        { icon: Shield, text: "Authenticity Verification" }
      ]
    },
    {
      title: "Government Dashboard",
      icon: Building,
      color: "text-accent",
      bgColor: "bg-accent/10",
      features: [
        { icon: Eye, text: "Supply Chain Oversight" },
        { icon: FileCheck, text: "Compliance Monitoring" },
        { icon: BarChart3, text: "Policy Analytics" },
        { icon: TrendingUp, text: "Export Standards Tracking" }
      ]
    }
  ];

  return (
    <section id="features" className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Features for Every Stakeholder
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive tools designed specifically for farmers, manufacturers, 
            consumers, and government agencies in the herb supply chain.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stakeholderFeatures.map((stakeholder, index) => {
            const StakeholderIcon = stakeholder.icon;
            return (
              <Card key={index} className="shadow-card hover:shadow-floating transition-shadow duration-300 border-0 bg-card">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 rounded-full ${stakeholder.bgColor} flex items-center justify-center mx-auto mb-4`}>
                    <StakeholderIcon className={`w-8 h-8 ${stakeholder.color}`} />
                  </div>
                  <CardTitle className="text-xl font-semibold">
                    {stakeholder.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {stakeholder.features.map((feature, featureIndex) => {
                    const FeatureIcon = feature.icon;
                    return (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <FeatureIcon className={`w-4 h-4 ${stakeholder.color} flex-shrink-0`} />
                        <span className="text-sm text-muted-foreground">
                          {feature.text}
                        </span>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Key Benefits */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              100% Transparency
            </h3>
            <p className="text-muted-foreground">
              Complete visibility into every step of the supply chain with immutable blockchain records.
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <CreditCard className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Fair Payments
            </h3>
            <p className="text-muted-foreground">
              Automated smart contracts ensure farmers receive fair compensation for quality produce.
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Eye className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Real-time Tracking
            </h3>
            <p className="text-muted-foreground">
              Monitor products in real-time from harvest to consumer with GPS and IoT integration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;