import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import farmersPortrait from "@/assets/farmers-portrait.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Udhaya Kumar.S",
      role: "Turmeric Farmer, Mysore",
      image: farmersPortrait,
      quote: "GeoHerbs changed my life! I now get fair prices for my organic turmeric and can track payments in real-time. My family's income has increased by 40% this year.",
      rating: 5,
      category: "farmer"
    },
    {
      name: "Dr.Afreen Fathima",
      role: "Ayurvedic Practitioner & Consumer",
      quote: "As a practitioner, I need authentic herbs for my patients. GeoHerbs gives me complete confidence in the quality and source of every product I prescribe.",
      rating: 5,
      category: "consumer"
    },
    {
      name: "Krishna",
      role: "Ayurvedic Manufacturer",
      quote: "The transparency and traceability GeoHerbs provides has improved our export quality standards. Our international clients trust our products more than ever.",
      rating: 5,
      category: "manufacturer"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Stories of Trust & Success
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from the farmers, consumers, and businesses who are experiencing 
            the transformative power of transparent supply chains.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-card hover:shadow-floating transition-shadow duration-300 relative overflow-hidden">
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote className="w-12 h-12 text-primary" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Quote */}
                <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  {testimonial.image && (
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  )}
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                    testimonial.category === 'farmer' ? 'bg-accent/10 text-accent' :
                    testimonial.category === 'consumer' ? 'bg-primary/10 text-primary' :
                    'bg-secondary/10 text-secondary'
                  }`}>
                    {testimonial.category}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-primary mb-2">4.8★</div>
              <div className="text-sm text-muted-foreground">Average App Rating</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
