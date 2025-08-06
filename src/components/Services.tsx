import { Card, CardContent } from "@/components/ui/card";
import { Home, Building, Palette, ShoppingBag, Lightbulb, Layout } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Design",
      description: "Complete home makeovers, room redesigns, and new construction interior planning.",
      features: ["Living rooms & bedrooms", "Kitchens & bathrooms", "Whole home design"]
    },
    {
      icon: Building,
      title: "Commercial Design",
      description: "Office spaces, retail stores, restaurants, and hospitality design solutions.",
      features: ["Office design", "Retail spaces", "Restaurant interiors"]
    },
    {
      icon: Palette,
      title: "Color Consultation",
      description: "Expert color palette selection to create the perfect mood and atmosphere.",
      features: ["Color schemes", "Paint selection", "Accent planning"]
    },
    {
      icon: ShoppingBag,
      title: "Furniture Selection",
      description: "Curated furniture and decor selection that matches your style and budget.",
      features: ["Custom furniture", "Decor sourcing", "Art curation"]
    },
    {
      icon: Lightbulb,
      title: "Lighting Design",
      description: "Strategic lighting solutions to enhance ambiance and functionality.",
      features: ["Ambient lighting", "Task lighting", "Accent lighting"]
    },
    {
      icon: Layout,
      title: "Space Planning",
      description: "Optimize your space layout for maximum functionality and flow.",
      features: ["Floor plans", "Traffic flow", "Storage solutions"]
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Our Design Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From initial consultation to final installation, we offer comprehensive interior design services to bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-medium transition-all duration-300 border-border bg-card">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-gold-foreground" />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-gold transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {service.description}
                    </p>
                  </div>

                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-gold rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;