"use client";

import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { FlagshipCaseStudy } from "@/components/home/FlagshipCaseStudy";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { TechnicalCapabilities } from "@/components/home/TechnicalCapabilities";
import { CareerTimeline } from "@/components/home/CareerTimeline";
import { ContactFooter } from "@/components/layout/ContactFooter";
import { CameraController } from "@/components/cinematic/CameraController";

export default function Home() {
  return (
    <div className="relative w-full overflow-hidden bg-[#09090B] text-[#FAFAFA]">
      {/* Subtle Dot Grid Background Pattern */}
      <div className="fixed inset-0 dot-grid-pattern pointer-events-none -z-10" />

      {/* Main Experience Stream */}
      <CameraController>
        <div className="relative w-full space-y-4">
          {/* Section 1: The Command-Bar Hero & Telemetry Console */}
          <HeroSection />

          {/* Section 2: Flagship Production Architecture Deep-Dive (Vedic Vaibhav) */}
          <FlagshipCaseStudy />

          {/* Section 3: Featured Engineering Projects Grid */}
          <FeaturedProjects />

          {/* Section 4: Technical Capabilities Matrix */}
          <TechnicalCapabilities />

          {/* Section 5: Professional Timeline & Recognition */}
          <CareerTimeline />

          {/* Footer: Get In Touch & Outbound Links */}
          <ContactFooter />
        </div>
      </CameraController>
    </div>
  );
}
