import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { QrCode, MapPin, Calendar, Shield, Eye, AlertTriangle, Clock } from "lucide-react";

import ashwagandhaImg from "@/assets/products/ashwagandha.jpg";
import brahmiImg from "@/assets/products/brahmi.jpg";
import turmericImg from "@/assets/products/turmeric.jpg";
import neemImg from "@/assets/products/neem.jpg";
import tulsiImg from "@/assets/products/tulsi.jpg";
import shatavariImg from "@/assets/products/shatavari.jpg";
import amlaImg from "@/assets/products/amla.jpg";
import gingerImg from "@/assets/products/ginger.jpg";
import haritakiImg from "@/assets/products/haritaki.jpg";
import guduchiImg from "@/assets/products/guduchi.jpg";

const products = [
  {
    id: 1,
    name: "Ashwagandha Root",
    image: ashwagandhaImg,
    description: "Premium quality adaptogenic herb known for stress relief and vitality enhancement.",
    origin: "Rajasthan, India",
    harvestDate: "October 2024",
    verificationStatus: "verified",
    qrCode: "ASH001-2024-RAJ",
    benefits: ["Stress Relief", "Energy Boost", "Immunity"]
  },
  {
    id: 2,
    name: "Brahmi Leaf",
    image: brahmiImg,
    description: "Fresh organic Brahmi leaves for cognitive enhancement and mental clarity.",
    origin: "Kerala, India",
    harvestDate: "November 2024",
    verificationStatus: "pending",
    qrCode: "BRA002-2024-KER",
    benefits: ["Memory Enhancement", "Mental Clarity", "Focus"]
  },
  {
    id: 3,
    name: "Turmeric Powder",
    image: turmericImg,
    description: "Pure organic turmeric powder with high curcumin content for anti-inflammatory benefits.",
    origin: "Tamil Nadu, India",
    harvestDate: "September 2024",
    verificationStatus: "verified",
    qrCode: "TUR003-2024-TN",
    benefits: ["Anti-inflammatory", "Antioxidant", "Joint Health"]
  },
  {
    id: 4,
    name: "Neem Leaf",
    image: neemImg,
    description: "Fresh neem leaves with natural antibacterial and purifying properties.",
    origin: "Maharashtra, India",
    harvestDate: "October 2024",
    verificationStatus: "unverified",
    qrCode: "NEE004-2024-MAH",
    benefits: ["Skin Health", "Natural Purifier", "Immunity"]
  },
  {
    id: 5,
    name: "Tulsi Leaf",
    image: tulsiImg,
    description: "Sacred holy basil leaves for respiratory health and spiritual wellness.",
    origin: "Uttar Pradesh, India",
    harvestDate: "November 2024",
    verificationStatus: "verified",
    qrCode: "TUL005-2024-UP",
    benefits: ["Respiratory Health", "Stress Relief", "Immunity"]
  },
  {
    id: 6,
    name: "Shatavari Root",
    image: shatavariImg,
    description: "Premium Shatavari roots for women's health and hormonal balance.",
    origin: "Himachal Pradesh, India",
    harvestDate: "August 2024",
    verificationStatus: "pending",
    qrCode: "SHA006-2024-HP",
    benefits: ["Women's Health", "Hormonal Balance", "Vitality"]
  },
  {
    id: 7,
    name: "Amla Fruit",
    image: amlaImg,
    description: "Fresh vitamin C rich amla fruits for immune support and antioxidant benefits.",
    origin: "Odisha, India",
    harvestDate: "December 2024",
    verificationStatus: "verified",
    qrCode: "AML007-2024-OD",
    benefits: ["Vitamin C", "Immunity", "Hair Health"]
  },
  {
    id: 8,
    name: "Ginger Root",
    image: gingerImg,
    description: "Organic fresh ginger roots for digestive health and natural warmth.",
    origin: "Karnataka, India",
    harvestDate: "October 2024",
    verificationStatus: "unverified",
    qrCode: "GIN008-2024-KAR",
    benefits: ["Digestive Health", "Anti-nausea", "Warming"]
  },
  {
    id: 9,
    name: "Haritaki Powder",
    image: haritakiImg,
    description: "Pure Haritaki powder for digestive cleansing and detoxification.",
    origin: "Assam, India",
    harvestDate: "September 2024",
    verificationStatus: "verified",
    qrCode: "HAR009-2024-AS",
    benefits: ["Digestive Health", "Detox", "Cleansing"]
  },
  {
    id: 10,
    name: "Guduchi Stem",
    image: guduchiImg,
    description: "Fresh Guduchi stems for immune support and liver health enhancement.",
    origin: "West Bengal, India",
    harvestDate: "November 2024",
    verificationStatus: "pending",
    qrCode: "GUD010-2024-WB",
    benefits: ["Immunity", "Liver Health", "Detox"]
  }
];

const Products = () => {
  const handleVerifyProduct = (product: any) => {
    // Simulated verification - in real app would open QR scanner or verification modal
    const statusMessage = product.verificationStatus === "verified" 
      ? `✓ Blockchain Verified`
      : product.verificationStatus === "pending"
      ? `⏳ Verification Pending`
      : `❌ Not Verified`;
    alert(`Verifying ${product.name}\nQR Code: ${product.qrCode}\nStatus: ${statusMessage}`);
  };

  const getVerificationBadge = (status: string) => {
    switch (status) {
      case "verified":
        return { icon: Shield, text: "Verified", className: "bg-green-100 text-green-800 border-green-200" };
      case "pending":
        return { icon: Clock, text: "Pending", className: "bg-yellow-100 text-yellow-800 border-yellow-200" };
      case "unverified":
        return { icon: AlertTriangle, text: "Unverified", className: "bg-red-100 text-red-800 border-red-200" };
      default:
        return { icon: Shield, text: "Unknown", className: "bg-gray-100 text-gray-800 border-gray-200" };
    }
  };

  return (
    <section id="products" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6">
            <span className="text-sm font-medium">🌿 Verified Products</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Premium Ayurvedic Herbs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Each product is blockchain-verified from farm to your hands, ensuring authenticity, quality, and fair farmer compensation.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-floating transition-all duration-300 overflow-hidden">
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3">
                  {(() => {
                    const badge = getVerificationBadge(product.verificationStatus);
                    return (
                      <Badge className={`${badge.className} border`}>
                        <badge.icon className="w-3 h-3 mr-1" />
                        {badge.text}
                      </Badge>
                    );
                  })()}
                </div>
                <div className="absolute top-3 left-3">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="bg-background/90 hover:bg-background"
                    onClick={() => handleVerifyProduct(product)}
                  >
                    <QrCode className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {product.name}
                </CardTitle>
                <CardDescription className="text-sm line-clamp-2">
                  {product.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Product Details */}
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>{product.origin}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>Harvested: {product.harvestDate}</span>
                  </div>
                </div>

                {/* Benefits */}
                <div className="flex flex-wrap gap-1">
                  {product.benefits.map((benefit, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {benefit}
                    </Badge>
                  ))}
                </div>

                {/* Barcode-style QR Code */}
                <div className="bg-muted/50 p-3 rounded text-center">
                  <p className="text-xs text-muted-foreground mb-2">Product Barcode</p>
                  <div className="bg-white p-2 rounded border inline-block">
                    <div className="flex items-center justify-center gap-px mb-1">
                      {/* Generate barcode-like pattern */}
                      {Array.from({ length: 12 }, (_, i) => (
                        <div
                          key={i}
                          className="bg-black"
                          style={{
                            width: Math.random() > 0.5 ? '2px' : '1px',
                            height: '20px'
                          }}
                        />
                      ))}
                    </div>
                    <p className="text-xs font-mono text-gray-700">{product.qrCode}</p>
                  </div>
                </div>

                {/* Action Button */}
                <Button 
                  className="w-full" 
                  variant="outline"
                  onClick={() => handleVerifyProduct(product)}
                >
                  <Eye className="w-4 h-4 mr-2" />
                  Verify Product
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-card p-8 rounded-lg shadow-card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Want to verify a product you purchased?
            </h3>
            <p className="text-muted-foreground mb-6">
              Use our mobile app to scan QR codes and trace your product's complete journey from farm to your hands.
            </p>
            <Button variant="hero" size="lg">
              <QrCode className="w-5 h-5 mr-2" />
              Download Verification App
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;