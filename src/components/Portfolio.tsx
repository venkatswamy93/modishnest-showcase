import { useState } from "react";
import { Button } from "@/components/ui/button";
import portfolioBedroom from "@/assets/portfolio-bedroom.jpg";
import portfolioDining from "@/assets/portfolio-dining.jpg";
import portfolioKitchen from "@/assets/portfolio-kitchen.jpg";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Residential", "Commercial", "Modern", "Classic"];

  const projects = [
    {
      id: 1,
      title: "Modern Bedroom Retreat",
      category: "Residential",
      style: "Modern",
      image: portfolioBedroom,
      description: "A serene bedroom design with clean lines and warm wood accents"
    },
    {
      id: 2,
      title: "Elegant Dining Room",
      category: "Residential", 
      style: "Classic",
      image: portfolioDining,
      description: "Sophisticated dining space with marble and contemporary lighting"
    },
    {
      id: 3,
      title: "Contemporary Kitchen",
      category: "Residential",
      style: "Modern", 
      image: portfolioKitchen,
      description: "Clean, functional kitchen design with brass accents"
    }
  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => 
        project.category === activeFilter || project.style === activeFilter
      );

  return (
    <section id="portfolio" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Our Recent Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of stunning interior design projects that showcase our commitment to excellence and attention to detail.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              onClick={() => setActiveFilter(filter)}
              className="transition-all"
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl shadow-soft bg-background border border-border">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs px-2 py-1 bg-accent rounded-full text-accent-foreground">
                      {project.category}
                    </span>
                    <span className="text-xs px-2 py-1 bg-gold/10 text-gold rounded-full">
                      {project.style}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-gold transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;