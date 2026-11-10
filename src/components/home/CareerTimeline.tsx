"use client";

import React from "react";
import {
  Terminal,
  Briefcase,
  GraduationCap,
  Award,
  CheckCircle2,
  ExternalLink,
  Code,
  Trophy
} from "lucide-react";

export const CareerTimeline: React.FC = () => {
  return (
    <section
      id="timeline"
      className="relative py-16 sm:py-24 px-3 sm:px-6 max-w-6xl mx-auto border-t border-zinc-900 scroll-mt-24"
    >
      {/* SECTION HEADER */}
      <div className="flex flex-col items-start mb-10 sm:mb-14 text-left">
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-md border border-zinc-800 bg-zinc-900/60 text-zinc-400 text-[10px] sm:text-xs font-mono uppercase tracking-wider sm:tracking-widest mb-3 shadow-sm">
          <Terminal className="w-3.5 h-3.5 flex-shrink-0" />
          <span>&gt; 04 // PROFESSIONAL TIMELINE &amp; RECOGNITION</span>
        </div>

        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-100 mb-3 break-words">
          Career History &amp; Education
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-zinc-400 max-w-2xl leading-relaxed">
          Documented trajectory of commercial engineering responsibility, computer science fundamentals, and competitive algorithmic problem solving.
        </p>
      </div>

      {/* VERTICAL TIMELINE CONTAINER */}
      <div className="relative border-l border-zinc-800 ml-3 sm:ml-6 pl-5 sm:pl-8 space-y-8 sm:space-y-12">
        {/* NODE 1: WORK EXPERIENCE */}
        <div className="relative group">
          {/* Timeline Node Marker */}
          <div className="absolute -left-[27px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-zinc-950 border-2 border-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.4)]" />

          <div className="rounded-2xl border border-zinc-800 bg-[#121215] hover:border-[#3F3F46] transition-all duration-300 p-4 sm:p-7 shadow-xl">
            {/* Header: Date Badge & Location */}
            <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-3 mb-3.5 sm:mb-4">
              <span className="font-mono text-[10px] sm:text-xs text-emerald-400 bg-emerald-950/40 border border-emerald-800/50 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md font-medium">
                Feb 2025 – Present
              </span>
              <span className="text-[10px] sm:text-xs font-mono text-zinc-500">
                Chandigarh, India • Full-Time
              </span>
            </div>

            {/* Role & Company */}
            <div className="mb-3.5 sm:mb-4">
              <h3 className="text-lg sm:text-2xl font-bold text-zinc-100 tracking-tight flex items-center gap-2">
                <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 flex-shrink-0" />
                <span>Junior Full Stack Developer</span>
              </h3>
              <div className="text-xs sm:text-base font-medium text-zinc-300 mt-1">
                Vedic Vaibhav Dot Com Pvt. Ltd.
              </div>
            </div>

            {/* Core Responsibilities */}
            <ul className="space-y-2 text-xs sm:text-sm font-sans text-zinc-300">
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-mono mt-0.5 flex-shrink-0">&gt;</span>
                <span className="leading-relaxed">
                  Architecting and maintaining <strong className="text-zinc-100 font-semibold">4 production platforms</strong> serving <strong className="text-zinc-100 font-semibold">100K+ active users</strong> with high-concurrency uptime.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-mono mt-0.5 flex-shrink-0">&gt;</span>
                <span className="leading-relaxed">
                  Designed a <strong className="text-zinc-100 font-semibold">25+ module centralized administration platform</strong> managing revenue, bookings, orders, and employee payroll from scratch.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-mono mt-0.5 flex-shrink-0">&gt;</span>
                <span className="leading-relaxed">
                  Elevated production Lighthouse performance scores from <strong className="text-zinc-100 font-semibold">~30 to 90+</strong> via dynamic code splitting and critical CSS rendering optimizations.
                </span>
              </li>
            </ul>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-1 sm:gap-1.5 pt-4 mt-4 border-t border-zinc-800/80">
              {["Next.js", "React.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "Razorpay", "PhonePe", "Redis", "RBAC"].map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-mono bg-zinc-900 border border-zinc-800 text-zinc-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* NODE 2: ACADEMIC EDUCATION */}
        <div className="relative group">
          {/* Timeline Node Marker */}
          <div className="absolute -left-[27px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-zinc-950 border-2 border-zinc-500" />

          <div className="rounded-2xl border border-zinc-800 bg-[#121215] hover:border-[#3F3F46] transition-all duration-300 p-4 sm:p-7 shadow-xl">
            {/* Header: Date Badge & Location */}
            <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-3 mb-3.5 sm:mb-4">
              <span className="font-mono text-[10px] sm:text-xs text-zinc-400 bg-zinc-900 border border-zinc-800 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md">
                2021 – 2025
              </span>
              <span className="text-[10px] sm:text-xs font-mono text-zinc-500">
                Punjab, India • Undergraduate
              </span>
            </div>

            {/* Degree & University */}
            <div className="mb-3.5 sm:mb-4">
              <h3 className="text-lg sm:text-2xl font-bold text-zinc-100 tracking-tight flex items-center gap-2">
                <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-sky-400 flex-shrink-0" />
                <span>B.Tech in Computer Science &amp; Engineering</span>
              </h3>
              <div className="text-xs sm:text-base font-medium text-zinc-300 mt-1">
                IK Gujral Punjab Technical University
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-1">
              <div className="p-3 sm:p-3.5 rounded-xl border border-zinc-800/80 bg-zinc-950/60">
                <div className="text-[9.5px] sm:text-[10px] font-mono uppercase text-zinc-500">DEGREE PERFORMANCE</div>
                <div className="text-base sm:text-lg font-bold font-mono text-zinc-100 mt-0.5">8.7 / 10.0 CGPA</div>
                <div className="text-[11px] sm:text-xs text-zinc-400 mt-1 font-sans">
                  Core focus on Data Structures, Algorithms, DBMS, Operating Systems &amp; Computer Networks.
                </div>
              </div>

              <div className="p-3 sm:p-3.5 rounded-xl border border-zinc-800/80 bg-zinc-950/60">
                <div className="text-[9.5px] sm:text-[10px] font-mono uppercase text-zinc-500">SENIOR SECONDARY (CLASS XII)</div>
                <div className="text-base sm:text-lg font-bold font-mono text-zinc-100 mt-0.5">97% Aggregate</div>
                <div className="text-[11px] sm:text-xs text-zinc-400 mt-1 font-sans">
                  Saharanpur Public School • Council for the Indian School Certificate Examinations (ISC).
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* NODE 3: PROBLEM SOLVING & CERTIFICATIONS */}
        <div className="relative group">
          {/* Timeline Node Marker */}
          <div className="absolute -left-[27px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-zinc-950 border-2 border-amber-400 shadow-[0_0_10px_rgba(245,158,11,0.3)]" />

          <div className="rounded-2xl border border-zinc-800 bg-[#121215] hover:border-[#3F3F46] transition-all duration-300 p-4 sm:p-7 shadow-xl">
            {/* Header: Badge */}
            <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-3 mb-3.5 sm:mb-4">
              <span className="font-mono text-[10px] sm:text-xs text-amber-400 bg-amber-950/40 border border-amber-800/50 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md font-medium">
                Problem Solving &amp; Verification
              </span>
              <span className="text-[10px] sm:text-xs font-mono text-zinc-500">
                Algorithmic Track Records
              </span>
            </div>

            <div className="mb-3.5 sm:mb-4">
              <h3 className="text-lg sm:text-2xl font-bold text-zinc-100 tracking-tight flex items-center gap-2">
                <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 flex-shrink-0" />
                <span>Competitive Programming &amp; Badges</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {/* LeetCode Track */}
              <div className="p-3 sm:p-4 rounded-xl border border-zinc-800/80 bg-zinc-950/60 space-y-1.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-zinc-200">
                    <Code className="w-3.5 h-3.5 text-amber-400" />
                    <span>LeetCode</span>
                  </div>
                  <span className="text-[9.5px] sm:text-[10px] font-mono text-emerald-400">300+ SOLVED</span>
                </div>
                <p className="text-[11px] sm:text-xs text-zinc-400 font-sans leading-relaxed">
                  Solved 300+ problems across Array Trees, DP, Graphs, and Hash Maps. Earned official SQL 50 and algorithmic mastery badges.
                </p>
              </div>

              {/* HackerRank Track */}
              <div className="p-3 sm:p-4 rounded-xl border border-zinc-800/80 bg-zinc-950/60 space-y-1.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-zinc-200">
                    <Award className="w-3.5 h-3.5 text-amber-400" />
                    <span>HackerRank &amp; Training</span>
                  </div>
                  <span className="text-[9.5px] sm:text-[10px] font-mono text-amber-400">GOLD LEVEL</span>
                </div>
                <p className="text-[11px] sm:text-xs text-zinc-400 font-sans leading-relaxed">
                  Achieved Gold Level in Java &amp; Problem Solving (Certified Basic SQL). Completed Industrial Training at Kuhada Technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
