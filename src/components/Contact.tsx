import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      color: "text-blue-600"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["hello@modishnest.com", "projects@modishnest.com"],
      color: "text-green-600"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Design Street", "Creative District, CD 12345"],
      color: "text-red-600"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"],
      color: "text-purple-600"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Let's Create Something Beautiful Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your space? Get in touch with us today for a consultation and let's bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-soft border-border">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        First Name *
                      </label>
                      <Input placeholder="John" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Last Name *
                      </label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <Input type="email" placeholder="john@example.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Phone
                      </label>
                      <Input placeholder="+1 (555) 123-4567" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Project Type
                    </label>
                    <select className="w-full px-3 py-2 border border-border rounded-md bg-background">
                      <option>Select a service</option>
                      <option>Residential Design</option>
                      <option>Commercial Design</option>
                      <option>Color Consultation</option>
                      <option>Space Planning</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Project Details *
                    </label>
                    <Textarea 
                      placeholder="Tell us about your project, timeline, and budget..." 
                      rows={5}
                    />
                  </div>

                  <Button size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="shadow-soft border-border">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg bg-accent ${info.color}`}>
                      <info.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{info.title}</h3>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-muted-foreground text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card className="shadow-soft border-border bg-gradient-accent">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-gold-foreground mb-2">
                  Free Consultation
                </h3>
                <p className="text-gold-foreground/80 text-sm mb-4">
                  Schedule a complimentary 30-minute consultation to discuss your project needs.
                </p>
                <Button variant="secondary" size="sm" className="w-full">
                  Book Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;