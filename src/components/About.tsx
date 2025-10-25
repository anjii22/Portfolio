import anjanaPortrait from "@/assets/anjana-portrait.jpg";
import { Card } from "@/components/ui/card";
import { Code2, Rocket, Users, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Technologies",
      description: "Full-stack development with modern frameworks",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimized, scalable solutions",
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "Cutting-edge tech adoption",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Team-driven development",
    },
  ];

  return (
    <section id="about" className="min-h-screen flex items-center py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-spotlight-primary opacity-40" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="flex justify-center animate-fade-in opacity-0 [animation-delay:0.2s] [animation-fill-mode:forwards]">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-full rounded-full blur-2xl opacity-50 animate-glow" />
              <img
                src={anjanaPortrait}
                alt="Anjana Pinnawala"
                className="relative w-80 h-80 rounded-full object-cover border-4 border-primary shadow-glow-primary hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
          
          <div className="animate-fade-in opacity-0 [animation-delay:0.4s] [animation-fill-mode:forwards]">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-full bg-clip-text text-transparent">About Me</span>
            </h2>
            <p className="text-lg text-white leading-relaxed">
              I'm an Undergraduate Software Engineering student passionate about building modern 
              web applications and scalable systems. With a solid foundation in computer science and a strong drive for 
              continuous learning, I strive to turn ideas into efficient, high-quality software solutions.
            </p>
            <p className="text-lg text-white leading-relaxed mt-4">
              Throughout my academic journey, I've gained hands-on experience across both frontend and backend development, 
              allowing me to create well-rounded, full-stack applications that deliver great performance and user experience.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <Card
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary transition-all duration-300 hover:shadow-glow-primary hover:scale-105 group animate-fade-in opacity-0 [animation-fill-mode:forwards] flex flex-col items-center text-center"
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                >
                <Icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform mx-auto" />
                <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
                <p className="text-muted-foreground text-sm">{highlight.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
