"use client";

import React, { useState, useRef } from "react";
import { soundFx } from "@/lib/audio";
import { useActiveScene } from "@/hooks/useActiveScene";
import { Sparkles, Zap, Flame } from "lucide-react";

interface QuantumCoreProps {
  onOverclockTrigger?: () => void;
}

export const QuantumCore: React.FC<QuantumCoreProps> = ({ onOverclockTrigger }) => {
  const activeSceneIndex = useActiveScene();
  const [clickCount, setClickCount] = useState(0);
  const [isOverclocked, setIsOverclocked] = useState(false);
  const coreRef = useRef<HTMLDivElement | null>(null);

  const handleCoreClick = () => {
    soundFx.playClick();
    const nextCount = clickCount + 1;
    setClickCount(nextCount);

    if (nextCount >= 3) {
      soundFx.playOverclock();
      setIsOverclocked(true);
      if (onOverclockTrigger) onOverclockTrigger();
      setTimeout(() => setIsOverclocked(false), 8000);
      setClickCount(0);
    }
  };

  // State configurations per scene
  const getCoreStyles = () => {
    if (isOverclocked) {
      return {
        scale: "scale-125 rotate-180",
        color: "from-pink-500 via-purple-500 to-cyan-400",
        glow: "shadow-[0_0_80px_#ff00ff]",
        label: "OVERCLOCK MODE ACTIVE",
      };
    }

    switch (activeSceneIndex) {
      case 1:
        return {
          scale: "scale-100",
          color: "from-cyan-400 via-blue-500 to-indigo-600",
          glow: "shadow-[0_0_50px_#00f0ff]",
          label: "QUANTUM CORE // ONLINE",
        };
      case 2:
        return {
          scale: "scale-110",
          color: "from-blue-500 via-cyan-400 to-teal-400",
          glow: "shadow-[0_0_60px_#0066ff]",
          label: "TIMELINE CONDUIT",
        };
      case 3:
        return {
          scale: "scale-90 rotate-45",
          color: "from-emerald-400 via-teal-500 to-cyan-400",
          glow: "shadow-[0_0_40px_#10b981]",
          label: "CODE HOLOGRAPHIC CORE",
        };
      case 4:
        return {
          scale: "scale-115",
          color: "from-purple-500 via-indigo-500 to-cyan-400",
          glow: "shadow-[0_0_70px_#9d4edd]",
          label: "3D VIEWPORT LENS",
        };
      case 5:
        return {
          scale: "scale-105",
          color: "from-cyan-300 via-blue-600 to-purple-500",
          glow: "shadow-[0_0_55px_#00f0ff]",
          label: "SKILLS GALAXY HUB",
        };
      case 6:
        return {
          scale: "scale-95",
          color: "from-yellow-400 via-amber-500 to-orange-500",
          glow: "shadow-[0_0_45px_#f59e0b]",
          label: "WORKFLOW PRISM",
        };
      case 7:
        return {
          scale: "scale-110",
          color: "from-amber-400 via-yellow-300 to-cyan-400",
          glow: "shadow-[0_0_65px_#fbbf24]",
          label: "QUANTUM GENERATOR",
        };
      case 8:
        return {
          scale: "scale-125",
          color: "from-white via-cyan-300 to-blue-500",
          glow: "shadow-[0_0_80px_#ffffff]",
          label: "KINETIC BEACON",
        };
      case 9:
        return {
          scale: "scale-130 animate-pulse",
          color: "from-cyan-400 via-purple-600 to-pink-500",
          glow: "shadow-[0_0_90px_#00f0ff]",
          label: "FINALE PORTAL",
        };
      default:
        return {
          scale: "scale-100",
          color: "from-cyan-400 to-blue-500",
          glow: "shadow-[0_0_50px_#00f0ff]",
          label: "QUANTUM CORE",
        };
    }
  };

  const currentStyles = getCoreStyles();

  return (
    <div
      ref={coreRef}
      onClick={handleCoreClick}
      onMouseEnter={() => soundFx.playHover()}
      data-cursor-text={isOverclocked ? "OVERCLOCK!" : "CORE"}
      className="fixed bottom-6 left-6 z-40 flex items-center gap-3 px-4 py-2.5 rounded-full glass-panel hover:border-cyan-400/50 transition-all duration-500 cursor-pointer group select-none"
    >
      {/* Mutating 3D Glowing Core Orb */}
      <div
        className={`w-6 h-6 rounded-full bg-gradient-to-tr ${currentStyles.color} ${currentStyles.glow} ${currentStyles.scale} transition-all duration-700 flex items-center justify-center`}
      >
        {isOverclocked ? (
          <Flame className="w-3.5 h-3.5 text-white animate-spin" />
        ) : (
          <Sparkles className="w-3 h-3 text-white group-hover:rotate-180 transition-transform duration-500" />
        )}
      </div>

      <div className="flex flex-col text-left">
        <span className="text-[10px] font-mono text-cyan-400 font-bold tracking-widest uppercase">
          {currentStyles.label}
        </span>
        <span className="text-[9px] font-mono text-gray-400">
          {isOverclocked ? "HYPERDRIVE ENGAGED" : "CLICK 3X FOR OVERCLOCK"}
        </span>
      </div>
    </div>
  );
};
