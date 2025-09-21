import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  Smartphone, 
  Download, 
  Apple, 
  Mail, 
  ArrowRight,
  CheckCircle,
  Leaf
} from "lucide-react";
import { useState } from "react";

const DownloadCTA = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter signup logic would go here
    setIsSubscribed(true);
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  return (
    <section className="section-padding hero-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <span className="text-lg font-medium">Ready to Join the Revolution?</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Download GeoHerbs Today
            </h2>
            
            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              Join thousands of farmers, manufacturers, and consumers who are already 
              experiencing the benefits of transparent, blockchain-powered herb traceability.
            </p>

            {/* App Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 flex items-center justify-center"
              >
                <Apple className="w-5 h-5 mr-2" />
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 flex items-center justify-center"
              >
                <Smartphone className="w-5 h-5 mr-2" />
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </Button>
            </div>

            {/* Key Benefits */}
            <div className="space-y-3">
              {[
                "Real-time harvest tracking",
                "Instant payment notifications",
                "Quality verification tools",
                "Direct market access"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-white/90">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter Signup Card */}
          <Card className="shadow-floating bg-white">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 primary-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-2">
                  Stay Updated
                </h3>
                <p className="text-muted-foreground">
                  Get the latest updates on GeoHerbs features, success stories, 
                  and industry insights delivered to your inbox.
                </p>
              </div>

              <form onSubmit={handleNewsletterSignup} className="space-y-4">
                <div>
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-12"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubscribed}
                >
                  {isSubscribed ? (
                    <>
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Subscribed!
                    </>
                  ) : (
                    <>
                      Subscribe to Newsletter
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </>
                  )}
                </Button>
              </form>

              {/* Additional Info */}
              <div className="mt-6 text-center">
                <p className="text-xs text-muted-foreground">
                  Join 50,000+ subscribers. No spam, unsubscribe anytime.
                </p>
              </div>

              {/* Download Stats */}
              <div className="mt-8 grid grid-cols-2 gap-4 text-center border-t pt-6">
                <div>
                  <div className="text-2xl font-bold text-primary">150K+</div>
                  <div className="text-sm text-muted-foreground">Downloads</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">4.8★</div>
                  <div className="text-sm text-muted-foreground">App Rating</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DownloadCTA;