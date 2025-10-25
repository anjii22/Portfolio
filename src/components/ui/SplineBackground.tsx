import Spline from "@splinetool/react-spline";
import { useState } from "react";

const SplineBackground = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="fixed inset-0 -z-10 transition-opacity duration-1000" style={{ opacity: isLoaded ? 1 : 0 }}>
      <Spline
        scene="https://prod.spline.design/e0rdDNFcjdT8K65H/scene.splinecode"
        className="w-full h-full pointer-events-none select-none"
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};

export default SplineBackground;
