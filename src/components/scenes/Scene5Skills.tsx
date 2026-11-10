"use client";

import React, { useState } from "react";
import { soundFx } from "@/lib/audio";
import { SKILLS, SkillNode } from "@/lib/skillsData";
import { GlassCard } from "@/components/ui/GlassCard";
import { Atom, Code2, Cpu, Database, Layers, Palette, Server, ShieldCheck, Sparkles, Wand2, FileCode, Box } from "lucide-react";

const CATEGORIES = ["ALL", "Frontend", "Frameworks", "Motion & 3D", "AI & Security", "Backend & DB"];

export const Scene5Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [activeSkill, setActiveSkill] = useState<SkillNode>(SKILLS[0]);

  const filteredSkills = activeCategory === "ALL"
    ? SKILLS
    : SKILLS.filter((s) => s.category === activeCategory);

  const renderIcon = (name: string) => {
    switch (name) {
      case "Code2": return <Code2 className="w-5 h-5" />;
      case "FileCode": return <FileCode className="w-5 h-5" />;
      case "Atom": return <Atom className="w-5 h-5" />;
      case "Layers": return <Layers className="w-5 h-5" />;
      case "Sparkles": return <Sparkles className="w-5 h-5" />;
      case "Wand2": return <Wand2 className="w-5 h-5" />;
      case "Box": return <Box className="w-5 h-5" />;
      case "Palette": return <Palette className="w-5 h-5" />;
      case "BrainCircuit": return <Cpu className="w-5 h-5" />;
      case "ShieldCheck": return <ShieldCheck className="w-5 h-5" />;
      case "Server": return <Server className="w-5 h-5" />;
      case "Database": return <Database className="w-5 h-5" />;
      default: return <Code2 className="w-5 h-5" />;
    }
  };

  return (
    <section id="scene-5" className="relative min-h-screen py-24 px-6 max-w-7xl mx-auto flex flex-col justify-center">
      {/* Chapter Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-2">
          CHAPTER 05 // DIGITAL LABORATORY
        </span>
        <h2 className="text-3xl sm:text-5xl font-bold font-mono tracking-tight text-white">
          Skills <span className="text-gradient-cyan">Constellation</span>
        </h2>
        <p className="text-gray-400 font-sans text-sm sm:text-base max-w-xl mt-3">
          An interconnected galaxy of modern tools, animation engines, frameworks, and defense protocols.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              soundFx.playClick();
              setActiveCategory(cat);
            }}
            onMouseEnter={() => soundFx.playHover()}
            data-cursor-text={cat}
            className={`px-4 py-2 rounded-full text-xs font-mono transition-all border ${
              activeCategory === cat
                ? "bg-cyan-500/20 text-cyan-300 border-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.3)] font-bold"
                : "glass-panel text-gray-400 border-white/10 hover:text-white hover:bg-white/5"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Skill Node Grid */}
        <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4">
          {filteredSkills.map((sk) => {
            const isSelected = activeSkill.id === sk.id;
            return (
              <div
                key={sk.id}
                onClick={() => {
                  soundFx.playClick();
                  setActiveSkill(sk);
                }}
                onMouseEnter={() => soundFx.playHover()}
                data-cursor-text={sk.name}
                className={`p-4 rounded-xl glass-panel border cursor-pointer transition-all duration-300 flex flex-col items-start gap-3 group relative overflow-hidden ${
                  isSelected
                    ? "border-cyan-400 bg-cyan-500/10 shadow-[0_0_25px_rgba(0,240,255,0.2)] -translate-y-1"
                    : "border-white/10 hover:border-white/20 hover:bg-white/5"
                }`}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center border transition-transform group-hover:scale-110"
                  style={{
                    borderColor: sk.color,
                    backgroundColor: `${sk.color}15`,
                    color: sk.color,
                  }}
                >
                  {renderIcon(sk.iconName)}
                </div>

                <div>
                  <h4 className="text-xs font-mono font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {sk.name}
                  </h4>
                  <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">
                    {sk.category}
                  </span>
                </div>

                {/* Progress Mini Bar */}
                <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden mt-1">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${sk.proficiency}%`,
                      backgroundColor: sk.color,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Skill Telemetry Spotlight */}
        <div className="lg:col-span-5 sticky top-28">
          <GlassCard glowColor={`${activeSkill.color}40`} className="p-8 border border-cyan-500/30">
            <div className="flex items-center gap-4 mb-6">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center border shadow-lg"
                style={{
                  borderColor: activeSkill.color,
                  backgroundColor: `${activeSkill.color}20`,
                  color: activeSkill.color,
                }}
              >
                {renderIcon(activeSkill.iconName)}
              </div>
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase font-bold tracking-wider">
                  {activeSkill.category}
                </span>
                <h3 className="text-2xl font-bold font-mono text-white">{activeSkill.name}</h3>
              </div>
            </div>

            <p className="text-gray-300 text-sm font-sans leading-relaxed mb-6">
              {activeSkill.description}
            </p>

            {/* Proficiency Meter */}
            <div className="space-y-2 mb-6">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-gray-400 uppercase">Mastery Index</span>
                <span className="font-bold text-white">{activeSkill.proficiency}%</span>
              </div>
              <div className="w-full bg-black/60 h-2.5 rounded-full p-0.5 border border-white/10 overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-700 shadow-[0_0_10px_currentColor]"
                  style={{
                    width: `${activeSkill.proficiency}%`,
                    backgroundColor: activeSkill.color,
                  }}
                />
              </div>
            </div>

            {/* Connected Node Badges */}
            <div className="border-t border-white/10 pt-4">
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block mb-2">
                SYNAPSE INTEGRATIONS
              </span>
              <div className="flex flex-wrap gap-2">
                {activeSkill.connections.map((connId) => {
                  const target = SKILLS.find((s) => s.id === connId);
                  return (
                    <span
                      key={connId}
                      className="px-3 py-1 rounded bg-white/5 border border-white/10 text-xs font-mono text-cyan-300"
                    >
                      ⚡ {target?.name || connId}
                    </span>
                  );
                })}
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};
