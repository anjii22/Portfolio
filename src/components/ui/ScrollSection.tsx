"use client";
import React from "react";
import { useScrollAnimation } from "./useScrollAnimation";

interface ScrollSectionProps {
  children: React.ReactNode;
  threshold?: number;
  delay?: number;
}

const ScrollSection: React.FC<ScrollSectionProps> = ({
  children,
  threshold = 0.2,
  delay = 0,
}) => {
  const { ref, isVisible } = useScrollAnimation(threshold);

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-[100ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
        isVisible
          ? "opacity-100 translate-y-0 blur-0"
          : "opacity-30 translate-y-10 blur-sm"
      }`}
      style={{
        transitionDelay: isVisible ? `${delay}s` : "0s",
      }}
    >
      {children}
    </div>
  );
};

export default ScrollSection;
