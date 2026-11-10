"use client";

import React, { useEffect, useState } from "react";
import { soundFx } from "@/lib/audio";
import { Modal } from "@/components/ui/Modal";
import { Flame, Sparkles, Trophy, Zap, Terminal } from "lucide-react";

interface EasterEggControllerProps {
  externalTrigger?: boolean;
  onCloseExternal?: () => void;
}

export const EasterEggController: React.FC<EasterEggControllerProps> = ({
  externalTrigger,
  onCloseExternal,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [keyBuffer, setKeyBuffer] = useState("");

  const triggerOverclockMode = async () => {
    soundFx.playOverclock();
    setIsOpen(true);
    if (typeof window !== "undefined") {
      try {
        const confettiModule = await import("canvas-confetti");
        const confetti = confettiModule.default;
        confetti({
          particleCount: 150,
          spread: 100,
          origin: { y: 0.5 },
          colors: ["#ff00ff", "#00f0ff", "#fbbf24", "#10b981"],
        });
      } catch {
        // fallback ignored
      }
    }
  };

  useEffect(() => {
    if (externalTrigger) {
      triggerOverclockMode();
    }
  }, [externalTrigger]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA"
      ) {
        return;
      }

      const char = e.key.toUpperCase();
      if (char.length === 1 && /[A-Z]/.test(char)) {
        const nextBuf = (keyBuffer + char).slice(-8);
        setKeyBuffer(nextBuf);

        if (
          nextBuf.includes("MANI") ||
          nextBuf.includes("AWWW") ||
          nextBuf.includes("OVER")
        ) {
          triggerOverclockMode();
          setKeyBuffer("");
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [keyBuffer]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        setIsOpen(false);
        if (onCloseExternal) onCloseExternal();
      }}
      title="SECRET OVERCLOCK MODE UNLOCKED!"
    >
      <div className="space-y-6 text-center py-4 select-none">
        <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-pink-500 via-purple-600 to-cyan-400 border border-cyan-300 flex items-center justify-center mx-auto shadow-[0_0_50px_#ff00ff] animate-bounce">
          <Flame className="w-10 h-10 text-white" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono text-cyan-400 uppercase font-bold tracking-widest">
            SECRET ACHIEVEMENT DISCOVERED
          </span>
          <h3 className="text-3xl font-extrabold font-mono text-gradient-cyan">
            OVERCLOCK ENGINE ENGAGED
          </h3>
          <p className="text-sm font-sans text-gray-300 max-w-md mx-auto">
            You unlocked Mani Tyagi&apos;s secret developer state! Hyper-speed WebGL canvas render pipelines, 120 FPS motion physics, and ultra-high-frequency WebSockets activated.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 glass-panel p-4 rounded-2xl border border-cyan-500/30 text-left font-mono text-xs">
          <div>
            <span className="text-gray-400 block text-[10px]">CPU ARCHITECTURE</span>
            <span className="text-cyan-300 font-bold">M3 MAX QUANTUM</span>
          </div>
          <div>
            <span className="text-gray-400 block text-[10px]">RENDER SPEED</span>
            <span className="text-emerald-400 font-bold">0.4ms / FRAME</span>
          </div>
          <div>
            <span className="text-gray-400 block text-[10px]">PASSION LEVEL</span>
            <span className="text-purple-400 font-bold">OVER 9000!</span>
          </div>
        </div>

        <button
          onClick={() => {
            soundFx.playClick();
            setIsOpen(false);
            if (onCloseExternal) onCloseExternal();
          }}
          className="px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 to-cyan-500 text-white font-mono text-xs font-bold tracking-wider uppercase shadow-[0_0_30px_rgba(255,0,255,0.4)] hover:shadow-[0_0_50px_rgba(0,240,255,0.8)] transition-all cursor-pointer"
        >
          RESUME CINEMATIC JOURNEY
        </button>
      </div>
    </Modal>
  );
};
