"use client";

import React, { useState } from "react";
import {
  ExternalLink,
  Github,
  Terminal,
  CheckCircle2,
  Layers,
  ShieldCheck,
  Cpu,
  Database,
  ArrowUpRight,
  Sliders,
  Mail,
  Lock,
  Zap,
  ShoppingBag,
  Building2,
  GraduationCap
} from "lucide-react";

export const FeaturedProjects: React.FC = () => {
  // Interactive preview state for Card 2 (Modricka unit filters)
  const [selectedUnitType, setSelectedUnitType] = useState<string>("3+KK");

  return (
    <section
      id="projects"
      className="relative py-16 sm:py-24 px-3 sm:px-6 max-w-6xl mx-auto border-t border-zinc-900 scroll-mt-24"
    >
      {/* SECTION HEADER */}
      <div className="flex flex-col items-start mb-8 sm:mb-12 text-left">
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-md border border-zinc-800 bg-zinc-900/60 text-emerald-400 text-[10px] sm:text-xs font-mono uppercase tracking-wider sm:tracking-widest mb-3 shadow-sm">
          <Terminal className="w-3.5 h-3.5 flex-shrink-0" />
          <span>&gt; 02 // INDEPENDENT SYSTEMS &amp; PRODUCTION WORK</span>
        </div>

        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-100 mb-3 break-words">
          Featured Engineering Projects
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-zinc-400 max-w-2xl leading-relaxed">
          Production-ready web applications, transaction engines, and modular interfaces engineered with modern stacks. Every card articulates system architecture, engineering trade-offs, and verification proofs.
        </p>
      </div>

      {/* RESPONSIVE PROJECT GRID: 2 cols on desktop for Projects 1 & 2, wide 1 col for Project 3 */}
      <div className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* CARD 1: FULL-STACK E-COMMERCE & TRANSACTION PLATFORM */}
          <div className="group rounded-2xl border border-zinc-800 bg-[#121215] hover:border-[#3F3F46] transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl">
            {/* Mock Header Bar */}
            <div className="border-b border-zinc-800/80 px-4 py-2.5 sm:px-5 sm:py-3 bg-zinc-950/60 flex items-center justify-between">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                <span className="text-[10px] sm:text-[11px] font-mono text-zinc-400 ml-1 sm:ml-2">
                  checkout-engine.sys // v1.4
                </span>
              </div>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[9.5px] sm:text-[10px] font-mono bg-emerald-950/40 text-emerald-400 border border-emerald-800/40">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                LIVE
              </span>
            </div>

            {/* Card Content */}
            <div className="p-4 sm:p-7 space-y-5 sm:space-y-6 flex-1 flex flex-col justify-between">
              <div className="space-y-3.5 sm:space-y-4">
                {/* Category Badge & Icon */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] sm:text-xs text-sky-400 bg-sky-950/40 border border-sky-800/50 px-2 sm:px-2.5 py-0.5 rounded">
                    TRANSACTIONAL FULL-STACK SYSTEM
                  </span>
                  <ShoppingBag className="w-4 h-4 text-zinc-500 flex-shrink-0" />
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="text-lg sm:text-2xl font-bold tracking-tight text-zinc-100 mb-1.5 sm:mb-2">
                    Full-Stack E-Commerce &amp; Order Management Engine
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
                    Production-ready commercial web application featuring dynamic catalog navigation, persistent cart synchronization, and an administrative order management dashboard.
                  </p>
                </div>

                {/* Interactive Transaction Architecture Visual */}
                <div className="p-3 sm:p-3.5 rounded-xl border border-zinc-800/80 bg-zinc-950 font-mono text-[10px] sm:text-[11px] space-y-1.5 text-zinc-300">
                  <div className="text-zinc-500 text-[9px] sm:text-[10px] pb-1 border-b border-zinc-800/60 flex items-center justify-between">
                    <span>// HMAC_SHA256 WEBHOOK VALIDATION</span>
                    <span className="text-emerald-400">IDEMPOTENT</span>
                  </div>
                  <div className="text-zinc-400 truncate">
                    <span className="text-sky-400">POST</span> /api/webhooks/razorpay
                  </div>
                  <div className="text-zinc-500 text-[9.5px] sm:text-[10px] truncate">
                    Signature: <span className="text-emerald-400">crypto.timingSafeEqual(hash, sig)</span>
                  </div>
                  <div className="text-zinc-400 text-[9.5px] sm:text-[10px]">
                    State: <span className="text-zinc-200">PAID</span> • Stock Lock: <span className="text-zinc-200">DECREMENT_ATOMIC</span>
                  </div>
                </div>

                {/* Engineering Highlights */}
                <div className="space-y-2 pt-1">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">
                    CORE SYSTEM ARCHITECTURE:
                  </div>
                  <ul className="space-y-1.5 text-xs font-sans text-zinc-300">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 font-mono mt-0.5">&gt;</span>
                      <span>
                        <strong className="text-zinc-100 font-medium">Idempotent Webhook Verification:</strong> Razorpay integration with server-side HMAC validation preventing ghost orders.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 font-mono mt-0.5">&gt;</span>
                      <span>
                        <strong className="text-zinc-100 font-medium">Session &amp; Inventory Sync:</strong> Secure RESTful endpoints with JWT session auth and indexed MongoDB stock lookups.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 font-mono mt-0.5">&gt;</span>
                      <span>
                        <strong className="text-zinc-100 font-medium">Operations Dashboard:</strong> Centralized admin view for inventory adjustments, order status, and customer audit logs.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Tech Chips & Actions */}
              <div className="pt-4 sm:pt-6 border-t border-zinc-800/80 space-y-3.5 sm:space-y-4">
                <div className="flex flex-wrap gap-1 sm:gap-1.5">
                  {["React.js", "Node.js", "Express.js", "MongoDB", "Razorpay", "Tailwind CSS"].map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-mono bg-zinc-900 border border-zinc-800 text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2.5 sm:gap-3 pt-1">
                  <a
                    href="https://e-commerce-eight-ruddy.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2 sm:py-1.5 rounded-lg bg-zinc-100 text-zinc-950 font-semibold text-xs hover:bg-white transition-colors shadow-sm"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href="https://github.com/Mani-Tyagi-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2 sm:py-1.5 rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-300 font-medium text-xs hover:border-zinc-700 hover:text-white transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Source Code</span>
                    <ArrowUpRight className="w-3 h-3 text-zinc-500" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 2: MODRICKA – REAL ESTATE & LIVING SPACE SHOWCASE */}
          <div className="group rounded-2xl border border-zinc-800 bg-[#121215] hover:border-[#3F3F46] transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl">
            {/* Mock Header Bar */}
            <div className="border-b border-zinc-800/80 px-4 py-2.5 sm:px-5 sm:py-3 bg-zinc-950/60 flex items-center justify-between">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                <span className="text-[10px] sm:text-[11px] font-mono text-zinc-400 ml-1 sm:ml-2">
                  modricka-inventory.db // sync
                </span>
              </div>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[9.5px] sm:text-[10px] font-mono bg-emerald-950/40 text-emerald-400 border border-emerald-800/40">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                LIVE
              </span>
            </div>

            {/* Card Content */}
            <div className="p-4 sm:p-7 space-y-5 sm:space-y-6 flex-1 flex flex-col justify-between">
              <div className="space-y-3.5 sm:space-y-4">
                {/* Category Badge & Icon */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] sm:text-xs text-emerald-400 bg-emerald-950/40 border border-emerald-800/50 px-2 sm:px-2.5 py-0.5 rounded">
                    DYNAMIC ASSET &amp; DATA PLATFORM
                  </span>
                  <Building2 className="w-4 h-4 text-zinc-500 flex-shrink-0" />
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="text-lg sm:text-2xl font-bold tracking-tight text-zinc-100 mb-1.5 sm:mb-2">
                    Modricka Living Space &amp; Property Showcase
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
                    Interactive property discovery web platform showcasing residential developments in Brno, Czech Republic with dynamic unit filtering and inquiry capture.
                  </p>
                </div>

                {/* Interactive Filter UI Frame */}
                <div className="p-3 sm:p-3.5 rounded-xl border border-zinc-800/80 bg-zinc-950 font-mono text-[10px] sm:text-[11px] space-y-2 text-zinc-300">
                  <div className="text-zinc-500 text-[9px] sm:text-[10px] pb-1 border-b border-zinc-800/60 flex items-center justify-between">
                    <span>// DYNAMIC MULTI-VARIABLE INVENTORY FILTER</span>
                    <span className="text-emerald-400">&lt; 8ms</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="text-zinc-400 text-[9.5px] sm:text-[10px]">Filter:</span>
                    <div className="flex flex-wrap gap-1">
                      {["1+KK", "2+KK", "3+KK", "Penthouse"].map((unit) => (
                        <button
                          key={unit}
                          onClick={() => setSelectedUnitType(unit)}
                          className={`px-2 py-0.5 rounded text-[9.5px] sm:text-[10px] transition-colors ${
                            selectedUnitType === unit
                              ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold"
                              : "bg-zinc-900 text-zinc-400 hover:text-zinc-200 border border-zinc-800"
                          }`}
                        >
                          {unit}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="text-zinc-400 text-[9.5px] sm:text-[10px] flex items-center justify-between pt-0.5">
                    <span className="truncate">Active: <span className="text-zinc-200">{selectedUnitType}</span></span>
                    <span className="text-emerald-400 flex-shrink-0">60 FPS Render</span>
                  </div>
                </div>

                {/* Engineering Highlights */}
                <div className="space-y-2 pt-1">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">
                    CORE SYSTEM ARCHITECTURE:
                  </div>
                  <ul className="space-y-1.5 text-xs font-sans text-zinc-300">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 font-mono mt-0.5">&gt;</span>
                      <span>
                        <strong className="text-zinc-100 font-medium">Real-Time Ingestion:</strong> Firebase Firestore integration for dynamic unit specs and client inquiry storage.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 font-mono mt-0.5">&gt;</span>
                      <span>
                        <strong className="text-zinc-100 font-medium">High-Performance Rendering:</strong> Responsive picture elements engineered to maintain 60fps scrolling on mobile devices.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 font-mono mt-0.5">&gt;</span>
                      <span>
                        <strong className="text-zinc-100 font-medium">Client-Side Filtering:</strong> React state hooks for multi-variable real-time dimension and garden filtering with zero UI lag.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Tech Chips & Actions */}
              <div className="pt-4 sm:pt-6 border-t border-zinc-800/80 space-y-3.5 sm:space-y-4">
                <div className="flex flex-wrap gap-1 sm:gap-1.5">
                  {["React.js", "Tailwind CSS", "Firebase", "REST APIs", "Responsive Design"].map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-mono bg-zinc-900 border border-zinc-800 text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2.5 sm:gap-3 pt-1">
                  <a
                    href="https://modricka.realyx.cz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2 sm:py-1.5 rounded-lg bg-zinc-100 text-zinc-950 font-semibold text-xs hover:bg-white transition-colors shadow-sm"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href="https://github.com/Mani-Tyagi-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2 sm:py-1.5 rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-300 font-medium text-xs hover:border-zinc-700 hover:text-white transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Source Code</span>
                    <ArrowUpRight className="w-3 h-3 text-zinc-500" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CARD 3: MILESOFSMILE – INSTITUTIONAL PORTAL & ADMISSION GATEWAY (Full-Width Card) */}
        <div className="group rounded-2xl border border-zinc-800 bg-[#121215] hover:border-[#3F3F46] transition-all duration-300 overflow-hidden shadow-xl">
          {/* Mock Header Bar */}
          <div className="border-b border-zinc-800/80 px-4 py-2.5 sm:px-5 sm:py-3 bg-zinc-950/60 flex items-center justify-between">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
              <span className="text-[10px] sm:text-[11px] font-mono text-zinc-400 ml-1 sm:ml-2">
                milesofsmile-portal // institutional-gateway
              </span>
            </div>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[9.5px] sm:text-[10px] font-mono bg-emerald-950/40 text-emerald-400 border border-emerald-800/40">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              LIVE
            </span>
          </div>

          <div className="p-4 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            {/* Left 8 cols: Project Details */}
            <div className="lg:col-span-8 space-y-4 sm:space-y-5">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <span className="font-mono text-[10px] sm:text-xs text-zinc-400 bg-zinc-900 border border-zinc-800 px-2 sm:px-2.5 py-0.5 rounded">
                  COMPONENT ARCHITECTURE &amp; INQUIRY PIPELINE
                </span>
                <span className="text-zinc-600 hidden sm:inline">•</span>
                <span className="text-xs font-mono text-zinc-500 flex items-center gap-1">
                  <GraduationCap className="w-3.5 h-3.5" />
                  Academic Gateway
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-3xl font-bold tracking-tight text-zinc-100 mb-2">
                  MilesOfSmile Institutional Web Portal &amp; Admission Gateway
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans max-w-3xl">
                  Component-driven academic web portal featuring an event showcase system, faculty directory, and an automated prospective student inquiry pipeline engineered for maximum uptime and zero maintenance overhead.
                </p>
              </div>

              {/* Engineering Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-2">
                <div className="p-3 sm:p-3.5 rounded-xl border border-zinc-800/70 bg-zinc-950/50">
                  <div className="w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-sky-400 mb-2">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <h4 className="text-xs font-semibold text-zinc-200 mb-1">Automated Inquiry Pipeline</h4>
                  <p className="text-[11px] text-zinc-400 font-sans leading-relaxed">
                    Integrated EmailJS with client-side regex input sanitization, routing leads directly without SMTP server dependencies.
                  </p>
                </div>

                <div className="p-3 sm:p-3.5 rounded-xl border border-zinc-800/70 bg-zinc-950/50">
                  <div className="w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-emerald-400 mb-2">
                    <Layers className="w-3.5 h-3.5" />
                  </div>
                  <h4 className="text-xs font-semibold text-zinc-200 mb-1">Atomic Component Design</h4>
                  <p className="text-[11px] text-zinc-400 font-sans leading-relaxed">
                    Decoupled component architecture built with Tailwind CSS, maximizing reuse across events and academic directories.
                  </p>
                </div>

                <div className="p-3 sm:p-3.5 rounded-xl border border-zinc-800/70 bg-zinc-950/50">
                  <div className="w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-emerald-400 mb-2">
                    <Zap className="w-3.5 h-3.5" />
                  </div>
                  <h4 className="text-xs font-semibold text-zinc-200 mb-1">Strict Layout Stability</h4>
                  <p className="text-[11px] text-zinc-400 font-sans leading-relaxed">
                    Explicit dimension containers maintaining a flawless 0.00 CLS score across desktop, tablet, and mobile browsers.
                  </p>
                </div>
              </div>

              {/* Tech Chips */}
              <div className="flex flex-wrap gap-1 sm:gap-1.5 pt-2">
                {["React.js", "Tailwind CSS", "EmailJS", "Component UI", "Form Validation", "Core Web Vitals"].map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-mono bg-zinc-900 border border-zinc-800 text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Right 4 cols: Telemetry Badge & CTAs */}
            <div className="lg:col-span-4 rounded-xl border border-zinc-800 bg-zinc-950/70 p-4 sm:p-5 space-y-3.5 sm:space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-zinc-800 text-xs font-mono">
                <span className="text-zinc-500 uppercase tracking-wider text-[10px]">VERIFIED PERFORMANCE</span>
                <span className="text-emerald-400 font-bold">100% RELIABLE</span>
              </div>

              <div className="space-y-2 font-mono text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-zinc-400 text-[11px] sm:text-xs">Cumulative Layout Shift</span>
                  <span className="text-emerald-400 font-bold">0.00 CLS</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-400 text-[11px] sm:text-xs">Inquiry Routing Latency</span>
                  <span className="text-zinc-200">&lt; 400ms</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-400 text-[11px] sm:text-xs">SMTP Server Overhead</span>
                  <span className="text-emerald-400 font-bold">$0 Infra</span>
                </div>
              </div>

              <div className="pt-2 border-t border-zinc-800 flex flex-col sm:flex-row lg:flex-col gap-2 sm:gap-2.5">
                <a
                  href="https://www.milesofsmile.com.au/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-zinc-100 text-zinc-950 font-semibold text-xs hover:bg-zinc-200 transition-colors shadow-sm"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href="https://github.com/Mani-Tyagi-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-300 font-medium text-xs hover:border-zinc-700 hover:text-white transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Inspect Source Code</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-500" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
