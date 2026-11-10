"use client";

import React, { useState } from "react";
import { ArrowUpRight, Github, Linkedin, Menu, X } from "lucide-react";

export const CommandNavbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-3 sm:top-4 left-0 right-0 z-50 px-3 sm:px-6 pointer-events-none">
      <div className="max-w-6xl mx-auto rounded-full border border-zinc-800 bg-zinc-950/80 backdrop-blur-md px-3.5 py-2 sm:px-5 sm:py-3 flex items-center justify-between shadow-xl shadow-black/50 pointer-events-auto">
        {/* Left: Monogram + Name */}
        <a
          href="#hero"
          className="flex items-center gap-2 sm:gap-2.5 group focus:outline-none flex-shrink-0"
        >
          <div className="w-7 h-7 sm:w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center font-mono font-bold text-[11px] sm:text-xs text-zinc-100 group-hover:border-zinc-700 transition-colors">
            MT
          </div>
          <span className="font-semibold text-xs sm:text-sm tracking-tight text-zinc-100 group-hover:text-white transition-colors">
            Mani Tyagi
          </span>
        </a>

        {/* Center: Live Status Indicator Pill (Desktop) */}
        <div className="hidden lg:inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800/80 bg-zinc-900/60 text-xs font-mono text-zinc-300">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span>Available for Software Engineering Roles</span>
        </div>

        {/* Right: Anchor links & Resume button */}
        <div className="flex items-center gap-2.5 sm:gap-5">
          <nav className="hidden md:flex items-center gap-4 sm:gap-5 text-xs font-medium text-zinc-400">
            <a
              href="#case-study"
              className="hover:text-zinc-100 transition-colors py-1"
            >
              Case Study
            </a>
            <a
              href="#projects"
              className="hover:text-zinc-100 transition-colors py-1"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="hover:text-zinc-100 transition-colors py-1"
            >
              Capabilities
            </a>
            <a
              href="#timeline"
              className="hover:text-zinc-100 transition-colors py-1"
            >
              Timeline
            </a>
          </nav>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-100 text-zinc-950 text-[11px] sm:text-xs font-semibold hover:bg-white transition-colors shadow-sm flex-shrink-0"
          >
            <span>Resume<span className="hidden xs:inline"> PDF</span></span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 focus:outline-none flex-shrink-0"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden max-w-6xl mx-auto mt-2 rounded-2xl border border-zinc-800 bg-zinc-950/95 backdrop-blur-xl p-4 shadow-2xl pointer-events-auto space-y-3 animate-fadeIn">
          <div className="flex items-center gap-2 px-2 py-1 text-xs font-mono text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>Available for Full-Time Roles</span>
          </div>

          <div className="h-px bg-zinc-800/80 my-1" />

          <nav className="flex flex-col space-y-1 text-sm text-zinc-300">
            <a
              href="#case-study"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg hover:bg-zinc-900 hover:text-white transition-colors flex items-center justify-between"
            >
              <span>Case Study</span>
              <span className="text-xs font-mono text-zinc-500">&gt; 01</span>
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg hover:bg-zinc-900 hover:text-white transition-colors flex items-center justify-between"
            >
              <span>Featured Projects</span>
              <span className="text-xs font-mono text-zinc-500">&gt; 02</span>
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg hover:bg-zinc-900 hover:text-white transition-colors flex items-center justify-between"
            >
              <span>Technical Capabilities</span>
              <span className="text-xs font-mono text-zinc-500">&gt; 03</span>
            </a>
            <a
              href="#timeline"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg hover:bg-zinc-900 hover:text-white transition-colors flex items-center justify-between"
            >
              <span>Career History &amp; Education</span>
              <span className="text-xs font-mono text-zinc-500">&gt; 04</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg hover:bg-zinc-900 hover:text-white transition-colors flex items-center justify-between"
            >
              <span>Contact Console</span>
              <span className="text-xs font-mono text-zinc-500">&gt; 05</span>
            </a>
          </nav>

          <div className="h-px bg-zinc-800/80 my-1" />

          <div className="flex items-center justify-between px-2 pt-1 text-xs text-zinc-400 font-mono">
            <a
              href="https://github.com/Mani-Tyagi-1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-zinc-100 py-1"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <span>•</span>
            <a
              href="https://www.linkedin.com/in/mani-tyagi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-zinc-100 py-1"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <span>•</span>
            <a
              href="mailto:manityagi1919@gmail.com"
              className="inline-flex items-center gap-1.5 hover:text-zinc-100 py-1"
            >
              <span>Email</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
