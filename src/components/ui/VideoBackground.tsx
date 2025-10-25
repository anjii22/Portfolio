import { useEffect, useState } from "react";

const VideoBackground = () => {
  const [blurActive, setBlurActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById("hero-section")?.offsetHeight || 0;
      setBlurActive(window.scrollY > heroHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 z-0">
      <div 
        className="absolute w-full h-full"
        style={{
          backgroundImage: 'url("/Orb.gif")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Blur overlay only when scrolled past hero */}
      <div
        className={`absolute inset-0 transition-all duration-700 ${
          blurActive ? "backdrop-blur-[10px] bg-black/80" : "backdrop-blur-0 bg-black/10"
        }`}
      />
    </div>
  );
};

export default VideoBackground;
