import { useEffect, useRef, useState } from "react";
import { Linkedin, Github, Mail } from "lucide-react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/anjana-pinnawala-b5aa51318/",
      gradient: "from-[#0077B5] to-primary",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/anjii22",
      gradient: "from-[#333] to-secondary",
    },
    {
      name: "Email",
      icon: Mail,
      url: "anjanapinnawala22@gmail.com",
      gradient: "from-accent to-primary",
    },
  ];

  return (
    <section ref={sectionRef} id="contact" className="min-h-screen flex items-center py-20 relative overflow-hidden">
      {/* <div className="absolute inset-0 bg-spotlight-primary opacity-50" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-spotlight-secondary" /> */}
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className={`text-5xl font-bold mb-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="bg-gradient-full bg-clip-text text-transparent">Let's Connect!</span>
          </h2>
          
          <p className={`text-xl text-white mb-12 transition-all duration-700 delay-150 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            I'm always excited to connect and collaborate whether it's about new projects, 
            innovative ideas, or opportunities to bring your vision to life. Feel free to reach out, I'd love to chat!
          </p>

          <div className="flex justify-center gap-6 flex-wrap">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl blur-lg opacity-0 group-hover:opacity-75 transition-opacity duration-300" />
                  <div className="relative bg-card/50 backdrop-blur-xl border-2 border-border group-hover:border-primary p-8 rounded-2xl transition-all duration-300 group-hover:shadow-glow-primary group-hover:scale-110">
                    <Icon className="w-12 h-12 text-primary group-hover:scale-110 transition-transform duration-300 mx-auto mb-4" />
                    <span className="text-lg font-semibold">{link.name}</span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
