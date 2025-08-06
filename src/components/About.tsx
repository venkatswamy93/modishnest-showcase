import { CheckCircle, Users, Home, Award } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Users,
      title: "Expert Team",
      description: "Certified interior designers with 15+ years of experience"
    },
    {
      icon: Home,
      title: "Full Service",
      description: "From concept design to final installation and styling"
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized for excellence in residential and commercial design"
    }
  ];

  const values = [
    "Personalized design approach tailored to your lifestyle",
    "High-quality materials and sustainable design practices",
    "On-time delivery and budget-conscious solutions",
    "Comprehensive project management from start to finish"
  ];

  return (
    <section id="about" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold">
                Creating Beautiful Spaces That
                <span className="block text-gold">Tell Your Story</span>
              </h2>
              
              <p className="text-lg text-muted-foreground">
                Founded in 2008, InDesign has been transforming homes and commercial spaces across the region. Our passion for innovative design and attention to detail has earned us recognition as one of the leading interior design firms.
              </p>
              
              <p className="text-muted-foreground">
                We believe that great design is not just about aesthetics—it's about creating functional, comfortable spaces that enhance the way you live and work. Our collaborative approach ensures that every project reflects your unique personality and lifestyle needs.
              </p>
            </div>

            <div className="space-y-3">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-background rounded-xl p-6 shadow-soft border border-border">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-gold-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;