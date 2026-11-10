"use client";

import React, { useEffect, useState, useRef } from "react";
import { soundFx } from "@/lib/audio";
import { ChevronDown, Sparkles, Terminal } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";

const PHRASES = [
  "My name is Mani Tyagi.",
  "I build experiences.",
  "I create products people remember."
];

export const Scene1Awakening: React.FC = () => {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [showSubtext, setShowSubtext] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentPhrase = PHRASES[phraseIndex];

    if (isTyping) {
      if (text.length < currentPhrase.length) {
        timeout = setTimeout(() => {
          setText(currentPhrase.slice(0, text.length + 1));
          soundFx.playType();
        }, 80);
      } else {
        // Pause at end of phrase
        if (phraseIndex < PHRASES.length - 1) {
          timeout = setTimeout(() => setIsTyping(false), 1600);
        } else {
          // Final phrase completed
          setShowSubtext(true);
        }
      }
    } else {
      // Erasing
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(text.slice(0, -1));
          soundFx.playType();
        }, 40);
      } else {
        setIsTyping(true);
        setPhraseIndex((prev) => prev + 1);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isTyping, phraseIndex]);

  const scrollToNext = () => {
    soundFx.playTransition();
    const nextEl = document.getElementById("scene-2");
    if (nextEl) {
      nextEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="scene-1"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden select-none"
    >
      {/* Glow Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-500/20 via-blue-600/10 to-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Terminal Tag Header */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-8 shadow-[0_0_20px_rgba(0,240,255,0.2)]">
          <Terminal className="w-4 h-4 animate-pulse" />
          <span>CHAPTER 01 // THE AWAKENING</span>
        </div>

        {/* Typewriter Main Headline */}
        <div className="h-32 sm:h-40 flex items-center justify-center">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold font-mono tracking-tight text-white leading-tight">
            {text}
            <span className="inline-block w-1.5 sm:w-2.5 h-8 sm:h-12 ml-2 bg-cyan-400 animate-pulse shadow-[0_0_12px_#00f0ff]" />
          </h1>
        </div>

        {/* Subtitle & CTA button */}
        <div
          className={`transition-all duration-1000 transform flex flex-col items-center gap-6 mt-4 ${
            showSubtext ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-base sm:text-xl text-gray-400 max-w-2xl font-sans font-light leading-relaxed">
            Senior Creative Developer & Frontend Architect engineering immersive digital cinema, custom WebGL graphics, and ultra-high performance web products.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <MagneticButton
              onClick={scrollToNext}
              cursorText="EXPLORE"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-mono text-sm font-semibold shadow-[0_0_30px_rgba(0,240,255,0.4)] hover:shadow-[0_0_50px_rgba(0,240,255,0.7)] transition-all flex items-center gap-3 group"
            >
              <span>ENTER THE EXPERIENCE</span>
              <Sparkles className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
            </MagneticButton>
          </div>
        </div>
      </div>

      {/* Scroll Down Hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group" onClick={scrollToNext}>
        <span className="text-[11px] font-mono tracking-widest text-cyan-400/80 group-hover:text-cyan-300 transition-colors uppercase">
          SCROLL TO UNLOCK STORY
        </span>
        <ChevronDown className="w-5 h-5 text-cyan-400 animate-bounce" />
      </div>
    </section>
  );
};
