const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Spotlight effects */}
      <div className="absolute inset-0 bg-spotlight-primary opacity-60" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-spotlight-secondary" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in opacity-0 [animation-delay:0.2s] [animation-fill-mode:forwards]">
          Hi, I'm Anjana {" "}<br />
          <span className="bg-gradient-full bg-clip-text text-transparent">
             Software Engineer
          </span>
          
        </h1>
        {/* <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-fade-in opacity-0 [animation-delay:0.5s] [animation-fill-mode:forwards]">
          Building immersive, modern, and high-performance software solutions.
        </p> */}
      </div>
    </section>
  );
};

export default Hero;
