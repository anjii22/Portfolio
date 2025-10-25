import { useEffect, useRef, useState } from "react";

interface Skill {
  name: string;
  level: number;
  icon: string;
}

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skills: Skill[] = [
    { name: "Java", level: 90, icon: "☕" },
    { name: "JavaScript", level: 85, icon: "⚡" },
    { name: "Python", level: 80, icon: "🐍" },
    { name: "SQL", level: 85, icon: "🗄️" },
    { name: "C/C++", level: 75, icon: "⚙️" },
    { name: "HTML/CSS", level: 95, icon: "🎨" },
    { name: "Spring Boot", level: 85, icon: "🍃" },
    { name: "React", level: 90, icon: "⚛️" },
    { name: "Docker", level: 80, icon: "🐳" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="min-h-screen flex items-center py-20 relative overflow-hidden"
    >
      <div className="absolute top-20 left-20 w-[600px] h-[600px] bg-spotlight-primary" />
      <div className="absolute bottom-20 right-20 w-[600px] h-[600px] bg-spotlight-secondary" />
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className={`text-5xl font-bold text-center mb-16 transition-all duration-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <span className="bg-gradient-full bg-clip-text text-transparent">My Skills</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`group p-6 bg-card/30 backdrop-blur-xl border-2 border-border rounded-2xl hover:border-primary transition-all duration-300 hover:shadow-glow-primary hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: `${index * 0.001}s`
              }}
            >
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="text-6xl group-hover:scale-110 transition-transform duration-300 group-hover:animate-float">
                  {skill.icon}
                </div>
                <span className="text-xl font-semibold bg-gradient-full bg-clip-text text-transparent">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
