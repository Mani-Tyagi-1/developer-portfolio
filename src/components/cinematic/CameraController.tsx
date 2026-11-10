"use client";

import React, { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

interface CameraControllerProps {
  children: React.ReactNode;
}

export const CameraController: React.FC<CameraControllerProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current) return;

    // Apply continuous virtual camera parallax scrubbing across scenes
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray<HTMLElement>("section");
      
      sections.forEach((section, i) => {
        gsap.fromTo(
          section,
          {
            scale: 0.96,
            opacity: 0.8,
            rotationX: 2,
          },
          {
            scale: 1,
            opacity: 1,
            rotationX: 0,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              end: "top 20%",
              scrub: 1,
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full transition-transform duration-300 [perspective:1200px]"
    >
      {children}
    </div>
  );
};
