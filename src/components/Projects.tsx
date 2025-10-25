import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

//import project images
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";
import project4 from "@/assets/project4.jpg";
import project5 from "@/assets/project5.jpg";

//Food Express
import food1 from "@/assets/food_express/food1.png";
import food2 from "@/assets/food_express/food2.png";
import food3 from "@/assets/food_express/food3.png";
import food4 from "@/assets/food_express/food4.png";
import food5 from "@/assets/food_express/food5.png";
import food6 from "@/assets/food_express/food6.png";
import food7 from "@/assets/food_express/food7.png";

interface Project {
  title: string;
  description: string;
  stack?: string;
  images: string[];
  link: string;
}

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const projects: Project[] = [
    {
      title: "Code Complexity Measuring Machine",
      description:
        "A comprehensive analytics dashboard for developers with real-time code metrics, syntax analysis, and performance insights.",
      stack: "Java, Spring Boot, React",
      images: [project1, project2, project3],
      link: "#",
    },
    {
      title: "Food Express",
      description:
        "A modern food ordering platform with seamless checkout, order tracking, menu browsing, and personalized recommendations.",
      stack: "MERN Stack, Docker",
      images: [food1, food2, food3, food4, food5, food6, food7],
      link: "https://github.com/anjii22/Food_Express",
    },
    {
      title: "Hotel Management System",
      description:
        "A complete hotel management solution for room booking, guest management, staff coordination, and billing.",
      stack: "MERN Stack",
      images: [project3],
      link: "#",
    },
    {
      title: "Hospital Management System",
      description:
        "An integrated hospital management system for patient records, appointment scheduling, staff management, and billing.",
      stack: "C++, SQL",
      images: [project4],
      link: "#",
    },
    {
      title: "Online Game & Music Store",
      description:
        "A web platform for browsing, purchasing, and playing games and music with user accounts and recommendations.",
      stack: "HTML, CSS, JavaScript",
      images: [project5],
      link: "#",
    },
  ];

  useEffect(() => {
    const titleObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (titleRef.current) titleObserver.observe(titleRef.current);

    const observers = projectRefs.current.map((ref, index) => {
      if (!ref) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveIndex(index);
        },
        { threshold: 0.6 }
      );
      observer.observe(ref);
      return observer;
    });

    return () => {
      titleObserver.disconnect();
      observers.forEach((o) => o?.disconnect());
    };
  }, []);

  return (
    <section id="projects" className="min-h-screen py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-spotlight-secondary opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <h2
          ref={titleRef}
          className={`text-5xl font-bold text-center mb-20 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="bg-gradient-full bg-clip-text text-transparent">
            My Projects
          </span>
        </h2>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => (projectRefs.current[index] = el)}
              className={`transition-all duration-700 ${
                activeIndex === index
                  ? "opacity-100 translate-y-0"
                  : "opacity-30 translate-y-10"
              }`}
            >
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Image Carousel */}
                <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-glow-primary">
                    <Swiper
                      modules={[Pagination, Autoplay]}
                      pagination={{ clickable: true }}
                      autoplay={{ delay: 3000, disableOnInteraction: false }}
                      loop={true}
                      className="w-full h-full"
                    >
                      {project.images.map((img, i) => (
                        <SwiperSlide
                          key={i}
                          className="flex items-center justify-center bg-black"
                        >
                          <img
                            src={img}
                            alt={`${project.title} ${i + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>

                {/* Project Details */}
                <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
                  <h3 className="text-4xl font-bold mb-4 bg-gradient-full bg-clip-text text-transparent">
                    {project.title}
                  </h3>
                  <p className="text-lg text-white mb-6 leading-relaxed">
                    {project.description}
                    {project.stack && (
                      <>
                        <br />
                        <br />
                        <span className="font-semibold text-blue-500">
                          Stack:
                        </span>{" "}
                        {project.stack}
                      </>
                    )}
                  </p>

                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    View Project <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
