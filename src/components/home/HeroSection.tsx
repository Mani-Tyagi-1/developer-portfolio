"use client";

import React from "react";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Terminal, Users, Layers, Zap } from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-center pt-24 sm:pt-32 pb-14 sm:pb-20 px-4 sm:px-6 max-w-6xl mx-auto"
    >
      {/* Background Dot-Grid Mask & Ambient Spotlight */}
      <div className="absolute inset-0 dot-grid-pattern pointer-events-none -z-10" />
      <div className="absolute inset-0 ambient-spotlight pointer-events-none -z-10" />

      {/* Hero Content — Left Aligned, Technical Editorial Stance */}
      <div className="max-w-4xl text-left">
        {/* Eyebrow Terminal Tag with Blinking Cursor */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1.5 rounded-md border border-zinc-800 bg-zinc-900/80 text-emerald-400 text-[10px] sm:text-xs font-mono tracking-wider sm:tracking-widest uppercase mb-5 sm:mb-6 shadow-sm max-w-full">
          <Terminal className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
          <span className="truncate">&gt; MANI_TYAGI // FULL_STACK_ENGINEER</span>
          <span className="inline-block w-1.5 h-3 bg-emerald-400/90 ml-0.5 animate-pulse flex-shrink-0" />
        </div>

        {/* Main Heading with Editorial Metallic Gradient */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4rem] font-extrabold tracking-tight sm:tracking-[-0.035em] leading-[1.18] sm:leading-[1.12] mb-5 sm:mb-6 max-w-4xl break-words">
          <span className="bg-gradient-to-b from-white via-zinc-100 to-zinc-400/90 bg-clip-text text-transparent">
            Architecting high-reliability admin engines, transactional webhooks, and scalable web platforms.
          </span>
        </h1>

        {/* Context Subheading */}
        <p className="text-sm sm:text-base md:text-lg text-zinc-400 max-w-2xl font-sans leading-relaxed mb-8 sm:mb-10">
          Full Stack Developer with 1.5+ years of production experience across Next.js, TypeScript, Node.js, and MongoDB.
          Currently owning admin architectures, fine-grained RBAC, and payment pipelines serving{" "}
          <span className="text-zinc-100 font-semibold underline decoration-zinc-700 underline-offset-4">
            100K+ users
          </span>{" "}
          at{" "}
          <span className="text-zinc-100 font-semibold underline decoration-zinc-700 underline-offset-4">
            Vedic Vaibhav Dot Com Pvt. Ltd.
          </span>
        </p>

        {/* Action Buttons — Mobile Full Width & Touch-Friendly */}
        <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-4 mb-12 sm:mb-14">
          {/* Primary CTA */}
          <a
            href="#case-study"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 sm:py-2.5 rounded-xl sm:rounded-lg bg-zinc-100 text-zinc-950 font-semibold text-xs sm:text-sm hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-zinc-400 w-full sm:w-auto"
          >
            <span>Explore Flagship Case Study</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            {/* Secondary CTA */}
            <a
              href="https://github.com/Mani-Tyagi-1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-3.5 sm:px-4 py-2.5 rounded-xl sm:rounded-lg border border-zinc-800 bg-zinc-900/90 text-zinc-200 font-medium text-xs sm:text-sm hover:border-zinc-700 hover:bg-zinc-800/90 hover:text-white transition-all shadow-sm focus:outline-none"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
            </a>

            {/* Tertiary CTA */}
            <a
              href="https://www.linkedin.com/in/mani-tyagi-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-3.5 sm:px-4 py-2.5 rounded-xl sm:rounded-lg border border-zinc-800 bg-zinc-900/90 text-zinc-300 font-medium text-xs sm:text-sm hover:border-zinc-700 hover:bg-zinc-800/90 hover:text-white transition-all shadow-sm focus:outline-none"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
            </a>
          </div>
        </div>
      </div>

      {/* Telemetry Strip (Proof of Work Strip) */}
      <div className="w-full">
        <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-zinc-500 mb-2.5">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>SYSTEM TELEMETRY // PRODUCTION METRICS</span>
          </div>
          <span className="text-zinc-600 hidden md:inline">LIVE TELEMETRY FEED</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 rounded-xl border border-zinc-800 bg-zinc-950/80 overflow-hidden divide-y md:divide-y-0 md:divide-x divide-zinc-800 shadow-xl">
          {/* Box 1 */}
          <div className="p-4 sm:p-6 flex flex-col justify-between hover:bg-zinc-900/30 transition-colors group">
            <div className="flex items-center justify-between text-zinc-500 mb-2 sm:mb-3">
              <span className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-zinc-400 group-hover:text-zinc-300 transition-colors">
                Scale &amp; Reach
              </span>
              <Users className="w-4 h-4 text-zinc-500 group-hover:text-zinc-300 transition-colors" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold font-mono text-zinc-100 tracking-tight mb-1">
                100K+
              </div>
              <div className="text-xs font-sans text-zinc-400">
                Active Users Served Across 4 Platforms
              </div>
            </div>
          </div>

          {/* Box 2 */}
          <div className="p-4 sm:p-6 flex flex-col justify-between hover:bg-zinc-900/30 transition-colors group">
            <div className="flex items-center justify-between text-zinc-500 mb-2 sm:mb-3">
              <span className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-zinc-400 group-hover:text-zinc-300 transition-colors">
                Architecture
              </span>
              <Layers className="w-4 h-4 text-zinc-500 group-hover:text-zinc-300 transition-colors" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold font-mono text-zinc-100 tracking-tight mb-1">
                25+ Modules
              </div>
              <div className="text-xs font-sans text-zinc-400">
                Centralized Admin Architecture Built
              </div>
            </div>
          </div>

          {/* Box 3 */}
          <div className="p-4 sm:p-6 flex flex-col justify-between hover:bg-zinc-900/30 transition-colors group">
            <div className="flex items-center justify-between text-zinc-500 mb-2 sm:mb-3">
              <span className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-emerald-400">
                Core Web Vitals
              </span>
              <Zap className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold font-mono text-emerald-400 tracking-tight mb-1">
                30 → 90+
              </div>
              <div className="text-xs font-sans text-zinc-400">
                Lighthouse Performance Elevation (FCP &lt; 0.8s)
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
