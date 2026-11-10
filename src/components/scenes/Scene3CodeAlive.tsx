"use client";

import React, { useState, useEffect, useRef } from "react";
import { soundFx } from "@/lib/audio";
import { GlassCard } from "@/components/ui/GlassCard";
import { Terminal, Play, GitCommit, CheckCircle, FileCode, Cpu, Layers } from "lucide-react";

const CODE_LINES = [
  'import { Canvas, useFrame } from "@react-three/fiber";',
  'import { GSAP, ScrollTrigger } from "gsap/all";',
  '',
  'export function CinematicExperience() {',
  '  const sceneRef = useRef(null);',
  '  ',
  '  useFrame(({ clock }) => {',
  '    const elapsedTime = clock.getElapsedTime();',
  '    sceneRef.current.rotation.y = elapsedTime * 0.25;',
  '    sceneRef.current.position.z = Math.sin(elapsedTime) * 0.5;',
  '  });',
  '',
  '  return (',
  '    <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>',
  '      <ambientLight intensity={0.8} />',
  '      <mesh ref={sceneRef}>',
  '        <icosahedronGeometry args={[2.5, 12]} />',
  '        <shaderMaterial uTime={elapsedTime} color="#00f0ff" />',
  '      </mesh>',
  '    </Canvas>',
  '  );',
  '}'
];

const TERMINAL_LOGS = [
  { text: "⚡ [compiler] Next.js 15.1 App Router loaded", type: "info" },
  { text: "✔ [git] commit -m 'feat: custom WebGL shader pipeline'", type: "git" },
  { text: "✔ [test] 42/42 unit tests passed (0.12s)", type: "success" },
  { text: "🚀 [deploy] Edge deployment live at https://manityagi.dev", type: "success" },
];

export const Scene3CodeAlive: React.FC = () => {
  const [displayedCode, setDisplayedCode] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState("CinematicExperience.tsx");
  const [executionRunning, setExecutionRunning] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  // Only trigger typewriter animation when section enters viewport
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let index = 0;
    const interval = setInterval(() => {
      if (index < CODE_LINES.length) {
        const nextLine = CODE_LINES[index] ?? "";
        setDisplayedCode((prev) => [...prev, nextLine]);
        soundFx.playType();
        index++;
      } else {
        clearInterval(interval);
      }
    }, 120);

    return () => clearInterval(interval);
  }, [hasStarted]);

  const handleRunCode = () => {
    soundFx.playClick();
    setExecutionRunning(true);
    setTimeout(() => {
      setExecutionRunning(false);
      soundFx.playTransition();
    }, 1500);
  };

  return (
    <section
      id="scene-3"
      ref={sectionRef}
      className="relative min-h-screen py-24 px-6 max-w-7xl mx-auto flex flex-col justify-center"
    >
      {/* Chapter Tag */}
      <div className="flex flex-col items-center text-center mb-12">
        <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-2">
          CHAPTER 03 // ARCHITECTURE IN MOTION
        </span>
        <h2 className="text-3xl sm:text-5xl font-bold font-mono tracking-tight text-white">
          Code <span className="text-gradient-cyan">Comes Alive</span>
        </h2>
        <p className="text-gray-400 font-sans text-sm sm:text-base max-w-xl mt-3">
          Behind every pixel is clean, modular, production-ready engineering written to withstand heavy traffic.
        </p>
      </div>

      {/* Futuristic IDE Workspace Window */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* IDE Editor Window */}
        <div className="lg:col-span-8">
          <GlassCard glowColor="rgba(0, 240, 255, 0.2)" className="border border-cyan-500/30 overflow-hidden">
            {/* Top Editor Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-black/40 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-4 text-xs font-mono text-gray-400 flex items-center gap-1.5">
                  <FileCode className="w-3.5 h-3.5 text-cyan-400" />
                  src/components/3d/{activeTab}
                </span>
              </div>

              <button
                onClick={handleRunCode}
                onMouseEnter={() => soundFx.playHover()}
                data-cursor-text="RUN"
                className="flex items-center gap-2 px-3 py-1 rounded bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 text-xs font-mono hover:bg-cyan-500/30 transition-all cursor-pointer"
              >
                <Play className="w-3 h-3 fill-cyan-400" />
                <span>{executionRunning ? "COMPILING..." : "EXECUTE"}</span>
              </button>
            </div>

            {/* Code Content */}
            <div className="p-6 font-mono text-xs sm:text-sm bg-black/50 overflow-x-auto min-h-[340px] text-gray-300">
              {displayedCode.map((line, i) => {
                const str = line ?? "";
                return (
                  <div key={i} className="flex gap-4 items-center hover:bg-white/[0.02] py-0.5 px-1 rounded">
                    <span className="w-6 text-right text-gray-600 select-none text-xs">{i + 1}</span>
                    <span className="whitespace-pre">
                      {str.includes("import") ? (
                        <span className="text-purple-400">{str}</span>
                      ) : str.includes("export") || str.includes("return") ? (
                        <span className="text-cyan-300 font-semibold">{str}</span>
                      ) : str.includes("//") ? (
                        <span className="text-gray-500 italic">{str}</span>
                      ) : (
                        str
                      )}
                    </span>
                  </div>
                );
              })}
            </div>
          </GlassCard>
        </div>

        {/* Live Terminal & Pipeline Telemetry */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          {/* Terminal Console Log */}
          <GlassCard glowColor="rgba(16, 185, 129, 0.2)" className="p-6 border border-emerald-500/30 flex-1">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 border-b border-white/10 pb-3 mb-4">
              <Terminal className="w-4 h-4" />
              <span>TERMINAL TELEMETRY</span>
            </div>
            <div className="space-y-3 font-mono text-xs">
              {TERMINAL_LOGS.map((log, i) => (
                <div key={i} className="flex items-start gap-2 text-gray-300">
                  {log.type === "success" ? (
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  ) : log.type === "git" ? (
                    <GitCommit className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  ) : (
                    <Cpu className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                  )}
                  <span>{log.text}</span>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* Quick Metrics Badge */}
          <GlassCard glowColor="rgba(157, 78, 221, 0.2)" className="p-6 border border-purple-500/30">
            <div className="flex items-center justify-between text-xs font-mono text-purple-300 mb-2">
              <span className="flex items-center gap-1.5">
                <Layers className="w-4 h-4" />
                FRAMEWORK ENGINE
              </span>
              <span className="text-emerald-400 font-bold">100 / 100</span>
            </div>
            <p className="text-xs text-gray-400 font-sans">
              Optimized for React 19 Concurrent Mode, WebGL Shaders & Zero Layout Shift.
            </p>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};
