"use client";

import React, { useState, useEffect, useRef } from "react";
import { soundFx } from "@/lib/audio";
import { GlassCard } from "@/components/ui/GlassCard";
import { Coffee, Code, Layers, Sparkles, Trophy } from "lucide-react";

interface MetricItem {
  id: string;
  label: string;
  targetValue: number;
  suffix: string;
  icon: React.ReactNode;
  color: string;
  description: string;
}

const STATS: MetricItem[] = [
  {
    id: "projects",
    label: "Projects Completed",
    targetValue: 40,
    suffix: "+",
    icon: <Trophy className="w-6 h-6 text-yellow-400" />,
    color: "#eab308",
    description: "Production web applications, WebGL visualizers, and full-stack clients."
  },
  {
    id: "tech",
    label: "Technologies Mastered",
    targetValue: 15,
    suffix: "+",
    icon: <Layers className="w-6 h-6 text-cyan-400" />,
    color: "#00f0ff",
    description: "Frameworks, animation engines, databases, and cybersecurity tools."
  },
  {
    id: "hours",
    label: "Hours of Pure Code",
    targetValue: 4500,
    suffix: "+",
    icon: <Code className="w-6 h-6 text-purple-400" />,
    color: "#a855f7",
    description: "Dedicated focus crafting UI physics, shaders, and clean frontend logic."
  },
  {
    id: "coffee",
    label: "Espresso Cups Consumed",
    targetValue: 1200,
    suffix: "+",
    icon: <Coffee className="w-6 h-6 text-amber-500" />,
    color: "#f59e0b",
    description: "Fueling long night debugging sessions and pixel-perfect polish."
  }
];

export const Scene7Numbers: React.FC = () => {
  const [counts, setCounts] = useState<{ [key: string]: number }>({
    projects: 0,
    tech: 0,
    hours: 0,
    coffee: 0,
  });
  const [hasStarted, setHasStarted] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  // Trigger counter only when section enters viewport
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const duration = 2000;
    const steps = 40; // slightly fewer steps for smoothness
    const intervalTime = duration / steps;

    let stepCount = 0;
    const timer = setInterval(() => {
      stepCount++;
      const progress = stepCount / steps;

      setCounts({
        projects: Math.floor(40 * Math.min(progress, 1)),
        tech: Math.floor(15 * Math.min(progress, 1)),
        hours: Math.floor(4500 * Math.min(progress, 1)),
        coffee: Math.floor(1200 * Math.min(progress, 1)),
      });

      if (stepCount % 10 === 0) {
        soundFx.playHover();
      }

      if (stepCount >= steps) {
        clearInterval(timer);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [hasStarted]);

  return (
    <section
      id="scene-7"
      ref={sectionRef}
      className="relative min-h-screen py-24 px-6 max-w-7xl mx-auto flex flex-col justify-center"
    >
      {/* Chapter Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-2">
          CHAPTER 07 // QUANTUM STATS
        </span>
        <h2 className="text-3xl sm:text-5xl font-bold font-mono tracking-tight text-white">
          Numbers <span className="text-gradient-cyan">That Matter</span>
        </h2>
        <p className="text-gray-400 font-sans text-sm sm:text-base max-w-xl mt-3">
          Behind every metric is relentless dedication, continuous learning, and obsession with quality.
        </p>
      </div>

      {/* Grid of Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {STATS.map((st) => (
          <GlassCard
            key={st.id}
            glowColor={`${st.color}35`}
            className="p-8 border border-white/10 flex flex-col justify-between group hover:border-cyan-400/40 transition-all cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center border shadow-md group-hover:scale-110 transition-transform"
                  style={{
                    borderColor: st.color,
                    backgroundColor: `${st.color}15`,
                  }}
                >
                  {st.icon}
                </div>
                <Sparkles className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors" />
              </div>

              <div className="text-4xl sm:text-5xl font-bold font-mono text-white tracking-tight mb-2 flex items-baseline">
                <span>{counts[st.id]?.toLocaleString()}</span>
                <span style={{ color: st.color }}>{st.suffix}</span>
              </div>

              <h4 className="text-sm font-mono font-semibold text-cyan-300 mb-3">
                {st.label}
              </h4>
            </div>

            <p className="text-xs text-gray-400 font-sans leading-relaxed border-t border-white/10 pt-4">
              {st.description}
            </p>
          </GlassCard>
        ))}
      </div>
    </section>
  );
};
