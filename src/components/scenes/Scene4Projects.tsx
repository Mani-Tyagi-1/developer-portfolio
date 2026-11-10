"use client";

import React, { useState } from "react";
import { soundFx } from "@/lib/audio";
import { PROJECTS, ProjectItem } from "@/lib/projectsData";
import { GlassCard } from "@/components/ui/GlassCard";
import { Modal } from "@/components/ui/Modal";
import { ExternalLink, Github, Monitor, Smartphone, Tablet, Code2, Sparkles, Layers } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";

export const Scene4Projects: React.FC = () => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [selectedModalProject, setSelectedModalProject] = useState<ProjectItem | null>(null);

  const currentProject = PROJECTS[activeProjectIndex];

  const handleNextProject = () => {
    soundFx.playTransition();
    setActiveProjectIndex((prev) => (prev + 1) % PROJECTS.length);
  };

  const handlePrevProject = () => {
    soundFx.playTransition();
    setActiveProjectIndex((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);
  };

  return (
    <section id="scene-4" className="relative min-h-screen py-24 px-6 max-w-7xl mx-auto flex flex-col justify-center">
      {/* Chapter Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-2">
          CHAPTER 04 // FEATURED WORKS
        </span>
        <h2 className="text-3xl sm:text-5xl font-bold font-mono tracking-tight text-white">
          Cinematic <span className="text-gradient-cyan">Projects</span>
        </h2>
        <p className="text-gray-400 font-sans text-sm sm:text-base max-w-xl mt-3">
          Every project is built as an unforgettable digital experience engineered for scale and speed.
        </p>
      </div>

      {/* Project Switcher Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
        {PROJECTS.map((proj, idx) => (
          <button
            key={proj.id}
            onClick={() => {
              soundFx.playClick();
              setActiveProjectIndex(idx);
            }}
            onMouseEnter={() => soundFx.playHover()}
            data-cursor-text={proj.title}
            className={`px-4 py-2 rounded-full text-xs font-mono transition-all border ${
              activeProjectIndex === idx
                ? "bg-cyan-500/20 text-cyan-300 border-cyan-400 shadow-[0_0_20px_rgba(0,240,255,0.3)] font-bold"
                : "glass-panel text-gray-400 border-white/10 hover:text-white hover:bg-white/5"
            }`}
          >
            0{idx + 1}. {proj.title}
          </button>
        ))}
      </div>

      {/* Main Project Showcase Card */}
      <GlassCard
        glowColor={currentProject.glowColor}
        className="p-6 sm:p-12 border border-cyan-500/30 relative overflow-hidden transition-all duration-700"
      >
        {/* Dynamic Glow Spot */}
        <div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full blur-[120px] pointer-events-none transition-colors duration-700"
          style={{ backgroundColor: currentProject.accentColor, opacity: 0.15 }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Details & Specs */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-400">
                {currentProject.year}
              </span>
              <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                {currentProject.category}
              </span>
            </div>

            <h3 className="text-3xl sm:text-5xl font-bold font-mono text-white tracking-tight leading-tight">
              {currentProject.title}
            </h3>

            <p className="text-sm font-mono text-cyan-300">
              {currentProject.subtitle}
            </p>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-sans">
              {currentProject.description}
            </p>

            {/* Metrics Grid */}
            <div className="grid grid-cols-3 gap-3 border-y border-white/10 py-4">
              {currentProject.metrics.map((m) => (
                <div key={m.label} className="text-left">
                  <div className="text-lg sm:text-xl font-bold font-mono text-white" style={{ color: currentProject.accentColor }}>
                    {m.value}
                  </div>
                  <div className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Tech Stack Badges */}
            <div className="flex flex-wrap gap-2">
              {currentProject.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <MagneticButton
                onClick={() => setSelectedModalProject(currentProject)}
                cursorText="INSPECT"
                className="px-6 py-3 rounded-full bg-cyan-500/20 border border-cyan-400/50 text-cyan-300 font-mono text-xs font-semibold hover:bg-cyan-500/30 transition-all flex items-center gap-2"
              >
                <Code2 className="w-4 h-4" />
                <span>INSPECT CODE & ARCHITECTURE</span>
              </MagneticButton>
            </div>
          </div>

          {/* Right Column: Interactive 3D Device Frame Preview */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <div
              className="relative w-full max-w-md aspect-[16/10] glass-panel rounded-2xl p-4 border border-white/20 shadow-2xl transition-transform duration-500 hover:rotate-1 hover:scale-105 group cursor-pointer"
              style={{
                boxShadow: `0 20px 50px -10px ${currentProject.glowColor}`,
              }}
              onClick={() => setSelectedModalProject(currentProject)}
              data-cursor-text="VIEW"
            >
              {/* Laptop Header Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                <span className="text-[10px] font-mono text-gray-400 flex items-center gap-1">
                  {currentProject.deviceType === "laptop" ? (
                    <Monitor className="w-3 h-3 text-cyan-400" />
                  ) : currentProject.deviceType === "phone" ? (
                    <Smartphone className="w-3 h-3 text-emerald-400" />
                  ) : (
                    <Tablet className="w-3 h-3 text-purple-400" />
                  )}
                  https://{currentProject.id}.dev
                </span>
              </div>

              {/* Device Graphic Canvas Simulator */}
              <div className="w-full h-48 sm:h-56 rounded-xl bg-black/60 border border-white/5 flex flex-col items-center justify-center p-6 text-center relative overflow-hidden group-hover:border-cyan-500/40 transition-colors">
                <div
                  className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity"
                  style={{
                    background: `radial-gradient(circle at center, ${currentProject.accentColor}, transparent 70%)`,
                  }}
                />
                <Sparkles className="w-8 h-8 mb-3 animate-pulse" style={{ color: currentProject.accentColor }} />
                <h4 className="text-base font-mono font-bold text-white mb-1">{currentProject.title}</h4>
                <p className="text-xs text-gray-400 font-mono">Interactive 3D WebGL Canvas Render</p>
                <span className="mt-4 px-3 py-1 rounded bg-white/10 text-[10px] font-mono text-cyan-300 border border-white/10">
                  CLICK FOR DEEP DIVE
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Stepper Controls */}
        <div className="flex items-center justify-between mt-10 pt-6 border-t border-white/10">
          <button
            onClick={handlePrevProject}
            onMouseEnter={() => soundFx.playHover()}
            data-cursor-text="PREV"
            className="text-xs font-mono text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-2 cursor-pointer"
          >
            ← PREVIOUS PROJECT
          </button>
          <span className="text-xs font-mono text-cyan-400 font-bold">
            0{activeProjectIndex + 1} / 0{PROJECTS.length}
          </span>
          <button
            onClick={handleNextProject}
            onMouseEnter={() => soundFx.playHover()}
            data-cursor-text="NEXT"
            className="text-xs font-mono text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-2 cursor-pointer"
          >
            NEXT PROJECT →
          </button>
        </div>
      </GlassCard>

      {/* Project Inspector Detail Modal */}
      {selectedModalProject && (
        <Modal
          isOpen={!!selectedModalProject}
          onClose={() => setSelectedModalProject(null)}
          title={selectedModalProject.title}
        >
          <div className="space-y-6">
            <p className="text-gray-300 text-sm font-sans leading-relaxed">
              {selectedModalProject.longDescription}
            </p>

            {/* Code Snippet Box */}
            <div className="glass-panel p-4 rounded-xl border border-white/10 bg-black/70">
              <div className="flex items-center justify-between text-xs font-mono text-gray-400 mb-2 border-b border-white/10 pb-2">
                <span>Architecture Blueprint</span>
                <span className="text-cyan-400">TypeScript / React 19</span>
              </div>
              <pre className="text-xs font-mono text-cyan-300 overflow-x-auto p-2">
                <code>{selectedModalProject.previewCodeSnippet}</code>
              </pre>
            </div>

            {/* Direct Links */}
            <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10">
              <a
                href={selectedModalProject.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-full bg-cyan-500 text-black font-mono text-xs font-bold flex items-center gap-2 hover:bg-cyan-400 transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                <span>LAUNCH DEMO</span>
              </a>
              <a
                href={selectedModalProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-full glass-panel text-white font-mono text-xs font-bold flex items-center gap-2 hover:border-cyan-400 transition-all"
              >
                <Github className="w-4 h-4" />
                <span>GITHUB REPO</span>
              </a>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};
