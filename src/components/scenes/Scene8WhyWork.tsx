"use client";

import React, { useState } from "react";
import { soundFx } from "@/lib/audio";
import { GlassCard } from "@/components/ui/GlassCard";
import { CheckCircle2, ShieldAlert, Sparkles, Zap } from "lucide-react";

const PRINCIPLES = [
  {
    title: "Cinematic Aesthetics",
    desc: "Every interaction is custom designed to wow visitors at first glance with rich lighting, smooth motion, and glassmorphism.",
    icon: <Sparkles className="w-5 h-5 text-cyan-400" />
  },
  {
    title: "100/100 Performance",
    desc: "Zero bloated scripts. Lazy loading, edge CDN caching, sub-16ms frames, and optimized asset delivery.",
    icon: <Zap className="w-5 h-5 text-yellow-400" />
  },
  {
    title: "Production Ready",
    desc: "Strict TypeScript architecture, clean modular code, responsive across all devices, and enterprise security compliance.",
    icon: <CheckCircle2 className="w-5 h-5 text-emerald-400" />
  }
];

export const Scene8WhyWork: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="scene-8" className="relative min-h-screen py-24 px-6 max-w-7xl mx-auto flex flex-col justify-center select-none">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/10 via-purple-600/10 to-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Chapter Tag */}
      <div className="flex flex-col items-center text-center mb-16 relative z-10">
        <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-2">
          CHAPTER 08 // THE STATEMENT
        </span>
        <h2 className="text-3xl sm:text-5xl font-bold font-mono tracking-tight text-white">
          Why Work <span className="text-gradient-cyan">With Me</span>
        </h2>
      </div>

      {/* Kinetic Typography Statements */}
      <div className="relative z-10 space-y-8 max-w-4xl mx-auto text-center mb-16">
        <h3 className="text-3xl sm:text-5xl md:text-6xl font-bold font-mono text-gray-400 tracking-tight leading-tight">
          &ldquo;I don&apos;t just build websites.&rdquo;
        </h3>
        <h3 className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-mono text-gradient-cyan tracking-tight leading-tight">
          &ldquo;I build experiences.&rdquo;
        </h3>
        <h3 className="text-3xl sm:text-5xl md:text-6xl font-bold font-mono text-white tracking-tight leading-tight">
          &ldquo;I build products people enjoy using.&rdquo;
        </h3>
      </div>

      {/* 3 Core Value Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        {PRINCIPLES.map((p, idx) => (
          <GlassCard
            key={p.title}
            glowColor="rgba(0, 240, 255, 0.2)"
            className="p-8 border border-white/10 hover:border-cyan-400/40 transition-all cursor-pointer"
          >
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
              {p.icon}
            </div>
            <h4 className="text-xl font-bold font-mono text-white mb-3">{p.title}</h4>
            <p className="text-sm text-gray-300 font-sans leading-relaxed">{p.desc}</p>
          </GlassCard>
        ))}
      </div>
    </section>
  );
};
