"use client";

import React, { useState } from "react";
import { soundFx } from "@/lib/audio";
import { GlassCard } from "@/components/ui/GlassCard";
import { Code, Layers, Cpu, Shield, Rocket, Sparkles, CheckCircle2 } from "lucide-react";

interface Milestone {
  year: string;
  tech: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  highlights: string[];
}

const MILESTONES: Milestone[] = [
  {
    year: "2020",
    tech: "HTML & CSS",
    title: "The Initial Spark",
    description: "Fell in love with the magic of turning raw markup into visual canvas structures. Mastered semantic HTML5 layout architecture and CSS responsive fundamentals.",
    icon: <Code className="w-5 h-5 text-orange-400" />,
    color: "#f97316",
    highlights: ["Semantic HTML5", "CSS Grid & Flexbox", "Responsive Design"]
  },
  {
    year: "2021",
    tech: "JavaScript (ESNext)",
    title: "Unlocking Dynamic Logic",
    description: "Dived deep into browser event loops, asynchronous DOM manipulation, closures, and custom canvas animations.",
    icon: <Sparkles className="w-5 h-5 text-yellow-400" />,
    color: "#eab308",
    highlights: ["Event Loop Mechanics", "Async / Await Pipelines", "DOM Engine Tuning"]
  },
  {
    year: "2022",
    tech: "React Architecture",
    title: "Component Mastery",
    description: "Shifted from vanilla scripts to declarative state trees. Engineered complex single-page apps with custom hook abstractions and state stores.",
    icon: <Layers className="w-5 h-5 text-cyan-400" />,
    color: "#06b6d4",
    highlights: ["Custom Hook Architecture", "Reconciliation Tuning", "Redux / Zustand"]
  },
  {
    year: "2023",
    tech: "Next.js Full-Stack",
    title: "Production Scaling",
    description: "Adopted Next.js App Router for hybrid server-client rendering, SEO dominance, API route microservices, and edge runtime deployments.",
    icon: <Rocket className="w-5 h-5 text-white" />,
    color: "#3b82f6",
    highlights: ["Server Actions", "Edge Deployment", "Lighthouse 100 Performance"]
  },
  {
    year: "2024",
    tech: "AI & Neural Canvas",
    title: "Intelligent UX Integration",
    description: "Incorporated LLM streaming endpoints, vector search embeddings, and generative canvas pipelines into consumer-facing platforms.",
    icon: <Cpu className="w-5 h-5 text-purple-400" />,
    color: "#a855f7",
    highlights: ["OpenAI / Claude API", "Vector Embeddings", "Generative WebGL UI"]
  },
  {
    year: "2025",
    tech: "Cybersecurity Systems",
    title: "Hardened Resilience",
    description: "Integrated zero-trust authentication, OWASP threat vulnerability audits, and real-time security telemetry monitors.",
    icon: <Shield className="w-5 h-5 text-emerald-400" />,
    color: "#10b981",
    highlights: ["Threat Telemetry", "OWASP Security Standards", "Encrypted Payloads"]
  },
  {
    year: "2026",
    tech: "Building Premium Products",
    title: "The Present & Future",
    description: "Combining high-frequency web performance, 3D WebGL motion, and AI logic to craft digital cinema websites visitors never forget.",
    icon: <Sparkles className="w-5 h-5 text-cyan-300 animate-pulse" />,
    color: "#00f0ff",
    highlights: ["GSAP Scroll Scenes", "WebGL Shader Artistry", "Awwwards Standard UI"]
  }
];

export const Scene2WhoAmI: React.FC = () => {
  const [selectedMilestone, setSelectedMilestone] = useState<number>(MILESTONES.length - 1);

  return (
    <section id="scene-2" className="relative min-h-screen py-24 px-6 max-w-7xl mx-auto flex flex-col justify-center">
      {/* Chapter Tag */}
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-2">
          CHAPTER 02 // MY EVOLUTION
        </span>
        <h2 className="text-3xl sm:text-5xl font-bold font-mono tracking-tight text-white">
          Who Am I? <span className="text-gradient-cyan">The Story</span>
        </h2>
        <p className="text-gray-400 font-sans text-sm sm:text-base max-w-xl mt-3">
          I didn&apos;t just learn code. I forged a relentless passion for creating digital masterworks step by step.
        </p>
      </div>

      {/* Interactive Horizontal / Vertical Timeline Stepper */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Timeline Stepper Column */}
        <div className="lg:col-span-5 space-y-4">
          {MILESTONES.map((m, idx) => {
            const isSelected = selectedMilestone === idx;
            return (
              <div
                key={m.year}
                onClick={() => {
                  soundFx.playClick();
                  setSelectedMilestone(idx);
                }}
                onMouseEnter={() => soundFx.playHover()}
                data-cursor-text={m.tech}
                className={`p-4 rounded-xl cursor-pointer transition-all duration-300 flex items-center gap-4 glass-panel border ${
                  isSelected
                    ? "border-cyan-400 bg-cyan-500/10 shadow-[0_0_25px_rgba(0,240,255,0.2)] translate-x-2"
                    : "border-white/5 hover:border-white/20 hover:bg-white/5"
                }`}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center border"
                  style={{ borderColor: m.color, backgroundColor: `${m.color}15` }}
                >
                  {m.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-cyan-400 font-bold">{m.year}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-gray-300">
                      {m.tech}
                    </span>
                  </div>
                  <h4 className="text-sm font-semibold text-white font-mono mt-0.5">{m.title}</h4>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Milestone Detail Spotlight */}
        <div className="lg:col-span-7 sticky top-28">
          {MILESTONES[selectedMilestone] && (
            <GlassCard
              glowColor={`${MILESTONES[selectedMilestone].color}35`}
              className="p-8 sm:p-10 border border-cyan-500/30 relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-4xl sm:text-6xl font-mono font-bold text-white/10 select-none">
                  {MILESTONES[selectedMilestone].year}
                </span>
                <span
                  className="px-4 py-1.5 rounded-full text-xs font-mono font-semibold uppercase tracking-wider border"
                  style={{
                    color: MILESTONES[selectedMilestone].color,
                    borderColor: MILESTONES[selectedMilestone].color,
                    backgroundColor: `${MILESTONES[selectedMilestone].color}15`
                  }}
                >
                  {MILESTONES[selectedMilestone].tech}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-mono text-white mb-4">
                {MILESTONES[selectedMilestone].title}
              </h3>

              <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-sans mb-8">
                {MILESTONES[selectedMilestone].description}
              </p>

              <div className="border-t border-white/10 pt-6">
                <h5 className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-4">
                  KEY SKILLS ACQUIRED
                </h5>
                <div className="flex flex-wrap gap-3">
                  {MILESTONES[selectedMilestone].highlights.map((h) => (
                    <div
                      key={h}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-cyan-300"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </GlassCard>
          )}
        </div>
      </div>
    </section>
  );
};
