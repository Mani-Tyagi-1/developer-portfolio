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

    // Subtle fade reveal without 3D rotation or scaling shifts to ensure CLS is 0.00
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray<HTMLElement>("section:not(#hero)");
      
      sections.forEach((section) => {
        gsap.fromTo(
          section,
          {
            opacity: 0.88,
          },
          {
            opacity: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 90%",
              end: "top 35%",
              scrub: 0.5,
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
      className="relative w-full"
    >
      {children}
    </div>
  );
};
