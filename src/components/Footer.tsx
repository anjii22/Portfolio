const Footer = () => {
  return (
    <footer className="relative overflow-hidden py-8 border-t border-border">
      {/* Gradient wave effect */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-full" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          <p className="text-muted-foreground">
            © 2025 Anjana. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
