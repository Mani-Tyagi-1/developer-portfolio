"use client";

import React, { useState } from "react";
import { soundFx } from "@/lib/audio";
import { GlassCard } from "@/components/ui/GlassCard";
import { Lightbulb, Search, PenTool, Code, CheckCircle, Rocket, ArrowRight } from "lucide-react";

interface WorkflowStep {
  num: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  deliverables: string[];
}

const STEPS: WorkflowStep[] = [
  {
    num: "01",
    title: "Idea & Discovery",
    subtitle: "Architectural Vision",
    description: "Understanding the brand objective, target audience psychology, and core user goals before writing a single line of code.",
    icon: <Lightbulb className="w-6 h-6 text-yellow-400" />,
    deliverables: ["Product Requirements Document", "Technical Feasibility Analysis", "User Journey Flow"]
  },
  {
    num: "02",
    title: "Deep Research",
    subtitle: "Benchmark & Strategy",
    description: "Analyzing competitor web apps, selecting optimal stack dependencies, and establishing strict performance budgets.",
    icon: <Search className="w-6 h-6 text-cyan-400" />,
    deliverables: ["Tech Stack Blueprint", "Performance Target Specs", "Shader / Motion Prototype"]
  },
  {
    num: "03",
    title: "Design System",
    subtitle: "Aesthetics & Micro-Animations",
    description: "Crafting custom glassmorphism design tokens, dark color harmonies, typography scale, and fluid GSAP animation timings.",
    icon: <PenTool className="w-6 h-6 text-purple-400" />,
    deliverables: ["Figma Design Tokens", "Motion Curve Specs", "Component Hierarchy"]
  },
  {
    num: "04",
    title: "Development",
    subtitle: "Clean Code Engineering",
    description: "Building responsive React 19 / Next.js 15 components with strict TypeScript types, WebGL shaders, and Lenis smooth scrolling.",
    icon: <Code className="w-6 h-6 text-blue-400" />,
    deliverables: ["Modular React Components", "GSAP ScrollTrigger Timelines", "State Management Engine"]
  },
  {
    num: "05",
    title: "Testing & Audit",
    subtitle: "Zero Flaw Guarantee",
    description: "Running cross-browser end-to-end tests, Lighthouse 100 audits, accessibility keyboard checks, and 60 FPS profiling.",
    icon: <CheckCircle className="w-6 h-6 text-emerald-400" />,
    deliverables: ["Lighthouse 100 Scorecard", "WCAG AA Accessibility Audit", "FPS Stress Test Log"]
  },
  {
    num: "06",
    title: "Global Launch",
    subtitle: "Vercel Edge Optimization",
    description: "Deploying to global CDN edge servers with automated CI/CD pipeline triggers and analytics tracking.",
    icon: <Rocket className="w-6 h-6 text-red-400" />,
    deliverables: ["Edge CDN Deployment", "SEO Metadata Structured Data", "Continuous Monitoring"]
  }
];

export const Scene6HowIThink: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const current = STEPS[activeStep];

  return (
    <section id="scene-6" className="relative min-h-screen py-24 px-6 max-w-7xl mx-auto flex flex-col justify-center">
      {/* Chapter Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-2">
          CHAPTER 06 // WORKFLOW METHODOLOGY
        </span>
        <h2 className="text-3xl sm:text-5xl font-bold font-mono tracking-tight text-white">
          How <span className="text-gradient-cyan">I Think</span>
        </h2>
        <p className="text-gray-400 font-sans text-sm sm:text-base max-w-xl mt-3">
          A systematic, battle-tested engineering process that turns ambitious ideas into flawless production web apps.
        </p>
      </div>

      {/* Stepper Pipeline Navigation Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
        {STEPS.map((step, idx) => {
          const isActive = activeStep === idx;
          return (
            <button
              key={step.num}
              onClick={() => {
                soundFx.playClick();
                setActiveStep(idx);
              }}
              onMouseEnter={() => soundFx.playHover()}
              data-cursor-text={step.title}
              className={`p-3 rounded-xl glass-panel border transition-all text-left flex flex-col justify-between h-24 cursor-pointer ${
                isActive
                  ? "border-cyan-400 bg-cyan-500/20 shadow-[0_0_20px_rgba(0,240,255,0.3)] translate-y-[-2px]"
                  : "border-white/10 hover:border-white/20 hover:bg-white/5"
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <span className="text-xs font-mono font-bold text-cyan-400">{step.num}</span>
                {isActive && <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />}
              </div>
              <span className="text-xs font-mono font-bold text-white leading-tight">
                {step.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Step Feature Stage */}
      <GlassCard glowColor="rgba(0, 240, 255, 0.2)" className="p-8 sm:p-12 border border-cyan-500/30">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-2xl sm:text-4xl font-mono font-bold text-cyan-400">
                {current.num}
              </span>
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                {current.icon}
              </div>
              <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">
                {current.subtitle}
              </span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-bold font-mono text-white">
              {current.title}
            </h3>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-sans">
              {current.description}
            </p>

            {/* Deliverables Checklist */}
            <div className="border-t border-white/10 pt-6">
              <span className="text-xs font-mono text-cyan-300 uppercase tracking-wider block mb-3">
                KEY DELIVERABLES & OUTCOMES
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {current.deliverables.map((del) => (
                  <div
                    key={del}
                    className="p-3 rounded-lg bg-black/40 border border-white/10 text-xs font-mono text-gray-300 flex items-center gap-2"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex items-center justify-center">
            <div className="w-full aspect-square rounded-2xl bg-black/50 border border-cyan-500/20 p-8 flex flex-col items-center justify-center text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/5 to-transparent pointer-events-none" />
              <div className="w-20 h-20 rounded-full bg-cyan-500/10 border border-cyan-400/40 flex items-center justify-center mb-4 shadow-[0_0_30px_rgba(0,240,255,0.3)]">
                {current.icon}
              </div>
              <span className="text-sm font-mono font-bold text-white">STAGE {current.num}</span>
              <span className="text-xs font-mono text-cyan-400 mt-1">{current.subtitle}</span>
            </div>
          </div>
        </div>
      </GlassCard>
    </section>
  );
};
