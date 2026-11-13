"use client";

import React, { useState } from "react";
import {
  Copy,
  Check,
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
  Terminal,
  Send
} from "lucide-react";

export const ContactFooter: React.FC = () => {
  const [copied, setCopied] = useState<boolean>(false);
  const emailAddress = "manityagi1919@gmail.com";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <footer
      id="contact"
      className="relative py-16 sm:py-24 px-3 sm:px-6 max-w-6xl mx-auto border-t border-zinc-900 scroll-mt-24"
    >
      {/* Central Terminal-Style Contact Box */}
      <div className="rounded-2xl sm:rounded-3xl border border-zinc-800 bg-[#121215] p-5 sm:p-12 text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
        {/* Subtle Ambient Radial Highlight */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 sm:w-96 h-28 sm:h-32 bg-emerald-500/5 blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-5 sm:space-y-6">
          {/* Eyebrow Status */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/80 text-[10px] sm:text-xs font-mono text-zinc-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>AVAILABLE FOR SENIOR &amp; FULL-STACK ROLES</span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-100 max-w-2xl mx-auto break-words">
            Let&apos;s Build Reliable Software.
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-base text-zinc-400 max-w-xl mx-auto font-sans leading-relaxed">
            Looking for a full stack engineer with production experience in Next.js, Node.js, and RBAC? Available for full-time roles, distributed architecture challenges, and high-impact web products.
          </p>

          {/* Action Controls — Touch-Friendly & Responsive Stacking */}
          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center gap-2.5 sm:gap-3.5 pt-2">
            {/* Copy Email Button */}
            <button
              type="button"
              onClick={handleCopyEmail}
              className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-3 sm:py-2.5 rounded-xl font-mono text-xs font-semibold transition-all duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-zinc-400 ${
                copied
                  ? "bg-emerald-500 text-zinc-950 border border-emerald-400"
                  : "bg-zinc-100 text-zinc-950 hover:bg-white border border-transparent"
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 flex-shrink-0" />
                  <span>Email Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 flex-shrink-0" />
                  <span className="truncate">Copy: {emailAddress}</span>
                </>
              )}
            </button>

            <div className="flex items-center gap-2.5 w-full sm:w-auto">
              {/* Direct Mailto */}
              <a
                href={`mailto:${emailAddress}`}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl border border-zinc-800 bg-zinc-900 text-zinc-300 hover:border-zinc-700 hover:text-white font-mono text-xs transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email</span>
              </a>

              {/* LinkedIn Outbound */}
              <a
                href="https://www.linkedin.com/in/mani-tyagi-dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl border border-zinc-800 bg-zinc-900 text-zinc-300 hover:border-zinc-700 hover:text-white font-mono text-xs transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 text-zinc-500" />
              </a>

              {/* GitHub Outbound */}
              <a
                href="https://github.com/Mani-Tyagi-1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl border border-zinc-800 bg-zinc-900 text-zinc-300 hover:border-zinc-700 hover:text-white font-mono text-xs transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3 text-zinc-500" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright & Telemetry Strip */}
      <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] sm:text-xs font-mono text-zinc-500 text-center sm:text-left">
        <div>
          © 2026 Mani Tyagi. Built with Next.js, TypeScript, and Tailwind CSS.
        </div>
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>FCP &lt; 0.8s • CLS 0.00</span>
          </span>
          <span>•</span>
          <a href="#hero" className="hover:text-zinc-300 transition-colors py-1">
            Back to Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
};
