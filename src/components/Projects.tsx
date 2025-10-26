import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

// Project imports
import ccmm1 from "@/assets/ccmm/ccmm1.png";
import ccmm2 from "@/assets/ccmm/ccmm2.png";
import ccmm3 from "@/assets/ccmm/ccmm3.png";
import ccmm4 from "@/assets/ccmm/ccmm4.png";
import ccmm5 from "@/assets/ccmm/ccmm5.png";
import ccmm6 from "@/assets/ccmm/ccmm6.png";
import ccmm7 from "@/assets/ccmm/ccmm7.png";
import ccmm8 from "@/assets/ccmm/ccmm8.png";
import ccmm9 from "@/assets/ccmm/ccmm9.png";

import food1 from "@/assets/food_express/food1.png";
import food2 from "@/assets/food_express/food2.png";
import food3 from "@/assets/food_express/food3.png";
import food4 from "@/assets/food_express/food4.png";
import food5 from "@/assets/food_express/food5.png";
import food6 from "@/assets/food_express/food6.png";
import food7 from "@/assets/food_express/food7.png";

import eco1 from "@/assets/ecosphere/ecosphere1.png";
import eco2 from "@/assets/ecosphere/ecosphere2.png";
import eco3 from "@/assets/ecosphere/ecosphere3.png";
import eco4 from "@/assets/ecosphere/ecosphere4.png";

import hms1 from "@/assets/hms/hms1.png";
import hms2 from "@/assets/hms/hms2.png";
import hms3 from "@/assets/hms/hms3.png";
import hms4 from "@/assets/hms/hms4.png";

import legend1 from "@/assets/legendary store/LSsnap_1.png";
import legend2 from "@/assets/legendary store/LSsnap_2.png";
import legend3 from "@/assets/legendary store/LSsnap_6.png";
import legend4 from "@/assets/legendary store/LSsnap_7.png";

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
      stack: "Java, Spring Boot, React, Typescript",
      images: [ccmm1, ccmm2, ccmm3, ccmm4, ccmm5, ccmm6, ccmm7, ccmm8, ccmm9],
      link: "https://github.com/BilalR4M/CodeComplexityMeasuringMachine",
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
      title: "Ecosphere",
      description:
        "A mobile app promoting sustainable living through sponsoring tree planting, waste managing, and community challenges.",
      stack: "Flutter, Firebase",
      images: [eco1, eco2, eco3, eco4],
      link: "https://github.com/anjii22/ecosphere",
    },
    {
      title: "Hospital Management System",
      description:
        "An integrated hospital management system for patient records, appointment scheduling, staff management, and billing.",
      stack: "C++, SQL",
      images: [hms1, hms2, hms3, hms4],
      link: "https://github.com/anjii22/hospital-management-system",
    },
    {
      title: "Online Game Movie & Music Store",
      description:
        "A web platform for browsing, purchasing, and playing games, watching movies, and listening to music with personal recommendations.",
      stack: "HTML, CSS, PHP, MySQL",
      images: [legend1, legend2, legend3, legend4],
      link: "https://github.com/anjii22/legendary-store",
    },
  ];

  useEffect(() => {
    const titleObserver = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    if (titleRef.current) titleObserver.observe(titleRef.current);

    const observers = projectRefs.current.map((ref, index) => {
      if (!ref) return null;
      const observer = new IntersectionObserver(
        ([entry]) => entry.isIntersecting && setActiveIndex(index),
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

  const renderStack = (stack?: string) => {
    if (!stack) return null;
    return (
      <div className="flex flex-wrap gap-2 mt-4">
        {stack.split(",").map((tech, i) => (
          <span
            key={i}
            className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-primary/80 to-blue-500/60 text-white font-medium shadow-sm"
          >
            {tech.trim()}
          </span>
        ))}
      </div>
    );
  };

  const isDashboardProject = (title: string) =>
    title.includes("Code Complexity") || title.includes("Hospital");

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
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-glow-primary bg-black">
                    <Swiper
                      modules={[Pagination, Autoplay]}
                      pagination={{ clickable: true }}
                      autoplay={{ delay: 3000, disableOnInteraction: false }}
                      loop
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
                            className={`w-full h-full ${
                              isDashboardProject(project.title)
                                ? "object-contain"
                                : "object-cover"
                            } transition-transform duration-700 hover:scale-[1.03]`}
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
                  </p>

                  {renderStack(project.stack)}

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      className="mt-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      View Project <ExternalLink className="ml-2 w-4 h-4" />
                    </Button>
                  </a>
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
