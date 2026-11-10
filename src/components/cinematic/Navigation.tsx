"use client";

import React, { useState, useEffect } from "react";
import { soundFx } from "@/lib/audio";
import { useActiveScene } from "@/hooks/useActiveScene";
import { Sparkles, Terminal } from "lucide-react";

const CHAPTERS = [
  { id: "scene-1", num: "01", title: "Awakening" },
  { id: "scene-2", num: "02", title: "Story" },
  { id: "scene-3", num: "03", title: "Workspace" },
  { id: "scene-4", num: "04", title: "Projects" },
  { id: "scene-5", num: "05", title: "Laboratory" },
  { id: "scene-6", num: "06", title: "Mindset" },
  { id: "scene-7", num: "07", title: "Metrics" },
  { id: "scene-8", num: "08", title: "Impact" },
  { id: "scene-9", num: "09", title: "Finale" },
];

export const Navigation: React.FC = () => {
  const activeSceneIndex = useActiveScene();
  const activeChapter = String(activeSceneIndex).padStart(2, "0");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    soundFx.playTransition();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 px-6 py-4 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-white/5 shadow-2xl" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand / Logo */}
        <button
          onClick={() => scrollToSection("scene-1")}
          onMouseEnter={() => soundFx.playHover()}
          className="flex items-center gap-3 group cursor-pointer"
          data-cursor-text="HOME"
        >
          <div className="w-9 h-9 rounded-xl glass-panel flex items-center justify-center border border-cyan-500/30 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_#00f0ff] transition-all">
            <Terminal className="w-4 h-4 text-cyan-400" />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-sm font-semibold font-mono tracking-tight text-white group-hover:text-cyan-400 transition-colors">
              Mani Tyagi
            </span>
            <span className="text-[10px] font-mono text-cyan-400/70 tracking-wider">
              CREATIVE DEVELOPER
            </span>
          </div>
        </button>

        {/* Chapter Indicator Dots (Desktop) */}
        <nav className="hidden md:flex items-center gap-1.5 glass-panel px-4 py-2 rounded-full border border-white/10">
          {CHAPTERS.map((ch) => (
            <button
              key={ch.id}
              onClick={() => scrollToSection(ch.id)}
              onMouseEnter={() => soundFx.playHover()}
              data-cursor-text={ch.title}
              className={`px-3 py-1 rounded-full text-xs font-mono transition-all duration-300 ${
                activeChapter === ch.num
                  ? "bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 shadow-[0_0_10px_rgba(0,240,255,0.3)] font-bold"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <span className="text-[10px] opacity-60 mr-1">{ch.num}</span>
              {ch.title}
            </button>
          ))}
        </nav>

        {/* Hire Status Badge */}
        <button
          onClick={() => scrollToSection("scene-9")}
          onMouseEnter={() => soundFx.playHover()}
          data-cursor-text="CONNECT"
          className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono hover:border-emerald-400 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all cursor-pointer"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="hidden sm:inline">AVAILABLE FOR HIRE</span>
          <Sparkles className="w-3.5 h-3.5" />
        </button>
      </div>
    </header>
  );
};
