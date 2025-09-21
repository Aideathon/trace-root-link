import { TrendingUp, Users, ShieldCheck, Globe } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Impact = () => {
  const benefits = [
    {
      stakeholder: "Farmers",
      icon: Users,
      color: "text-accent",
      bgColor: "bg-accent/10",
      benefits: [
        "30% increase in income through fair pricing",
        "Direct market access without middlemen",
        "Real-time market price information",
        "Digital payment security & tracking"
      ],
      metric: "10,000+",
      metricLabel: "Farmers Empowered"
    },
    {
      stakeholder: "Consumers",
      icon: ShieldCheck,
      color: "text-primary",
      bgColor: "bg-primary/10",
      benefits: [
        "100% authentic product guarantee",
        "Complete supply chain transparency",
        "Quality certification verification",
        "Direct connection to source farmers"
      ],
      metric: "1M+",
      metricLabel: "Products Verified"
    },
    {
      stakeholder: "Industry & Government",
      icon: Globe,
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      benefits: [
        "Real-time supply chain visibility",
        "Automated compliance monitoring",
        "Export quality standardization",
        "Policy effectiveness analytics"
      ],
      metric: "99.9%",
      metricLabel: "Compliance Rate"
    }
  ];

  const impactStats = [
    {
      number: "₹50Cr+",
      label: "Direct Payments to Farmers",
      description: "Eliminating middleman commissions"
    },
    {
      number: "95%",
      label: "Fraud Reduction",
      description: "Through blockchain verification"
    },
    {
      number: "40%",
      label: "Time Saved",
      description: "In quality verification processes"
    },
    {
      number: "15+",
      label: "States Covered",
      description: "Across India's major herb regions"
    }
  ];

  return (
    <section id="stakeholders" className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Real Impact, Real Results
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how GeoHerbs is transforming the lives of farmers, building consumer trust, 
            and strengthening the entire herb supply chain ecosystem.
          </p>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {impactStats.map((stat, index) => (
            <Card key={index} className="text-center shadow-card hover:shadow-floating transition-shadow">
              <CardContent className="pt-8 pb-6">
                <div className="text-3xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-foreground mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stakeholder Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} className="shadow-card hover:shadow-floating transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 rounded-full ${benefit.bgColor} flex items-center justify-center mx-auto mb-4`}>
                    <Icon className={`w-8 h-8 ${benefit.color}`} />
                  </div>
                  <CardTitle className="text-xl font-semibold">
                    {benefit.stakeholder}
                  </CardTitle>
                  <CardDescription className="text-center">
                    <span className={`text-2xl font-bold ${benefit.color}`}>
                      {benefit.metric}
                    </span>
                    <br />
                    <span className="text-sm text-muted-foreground">
                      {benefit.metricLabel}
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {benefit.benefits.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-2">
                        <div className={`w-2 h-2 rounded-full ${benefit.color.replace('text-', 'bg-')} mt-2 flex-shrink-0`}></div>
                        <span className="text-sm text-muted-foreground">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom Message */}
        <div className="text-center mt-16">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Building Trust Through Technology
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              GeoHerbs isn't just about tracking products—it's about creating a sustainable ecosystem 
              where farmers prosper, consumers trust, and the ancient wisdom of Ayurveda continues 
              to benefit humanity for generations to come.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;