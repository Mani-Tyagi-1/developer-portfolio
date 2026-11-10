"use client";

import React, { useState } from "react";
import { soundFx } from "@/lib/audio";
import { GlassCard } from "@/components/ui/GlassCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Modal } from "@/components/ui/Modal";
import { Mail, Github, Linkedin, Twitter, Sparkles, Send, Copy, Check } from "lucide-react";

export const Scene9Finale: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const emailAddress = "manityagi.dev@gmail.com";

  const triggerConfetti = async () => {
    if (typeof window === "undefined") return;
    try {
      const confettiModule = await import("canvas-confetti");
      const confetti = confettiModule.default;
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#00f0ff", "#0066ff", "#9d4edd", "#ffffff"]
      });
    } catch {
      // fallback
    }
  };

  const handleCopyEmail = () => {
    soundFx.playClick();
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    triggerConfetti();
    setTimeout(() => setCopied(false), 3000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundFx.playTransition();
    setFormSubmitted(true);
    triggerConfetti();
  };

  return (
    <section id="scene-9" className="relative min-h-screen py-24 px-6 max-w-7xl mx-auto flex flex-col justify-center select-none">
      {/* Deep Glow Spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-cyan-500/20 via-blue-600/10 to-purple-600/20 rounded-full blur-[180px] pointer-events-none" />

      {/* Chapter Tag */}
      <div className="flex flex-col items-center text-center mb-12 relative z-10">
        <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-2">
          CHAPTER 09 // THE FINALE
        </span>
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-mono text-white tracking-tight leading-tight max-w-3xl">
          Let&apos;s build something <span className="text-gradient-cyan">extraordinary.</span>
        </h2>
        <p className="text-gray-300 font-sans text-base sm:text-lg max-w-xl mt-4">
          Whether you need an Awwwards-worthy portfolio, an AI spatial web app, or high-performance frontend architecture—let&apos;s collaborate.
        </p>
      </div>

      {/* Main Magnetic CTA Stage */}
      <div className="relative z-10 flex flex-col items-center gap-8 mb-16">
        <MagneticButton
          onClick={() => {
            soundFx.playClick();
            setIsModalOpen(true);
          }}
          cursorText="CONNECT"
          className="px-10 py-5 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-mono text-base font-bold shadow-[0_0_50px_rgba(0,240,255,0.5)] hover:shadow-[0_0_80px_rgba(0,240,255,0.8)] transition-all flex items-center gap-3 group"
        >
          <span>START A PROJECT</span>
          <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </MagneticButton>

        {/* Direct Quick Copy Email Bar */}
        <div className="flex items-center gap-3 glass-panel px-5 py-2.5 rounded-full border border-white/10">
          <Mail className="w-4 h-4 text-cyan-400" />
          <span className="text-xs font-mono text-gray-300">{emailAddress}</span>
          <button
            onClick={handleCopyEmail}
            onMouseEnter={() => soundFx.playHover()}
            data-cursor-text="COPY"
            className="ml-2 p-1.5 rounded-full bg-white/5 hover:bg-cyan-500/20 text-cyan-400 transition-colors cursor-pointer"
            aria-label="Copy email address"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Social Links Footer */}
      <div className="relative z-10 flex flex-wrap items-center justify-center gap-6 pt-12 border-t border-white/10 max-w-2xl mx-auto w-full">
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          onMouseEnter={() => soundFx.playHover()}
          data-cursor-text="GITHUB"
          className="flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-cyan-400 transition-colors"
        >
          <Github className="w-4 h-4" />
          <span>GitHub</span>
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
          onMouseEnter={() => soundFx.playHover()}
          data-cursor-text="LINKEDIN"
          className="flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-cyan-400 transition-colors"
        >
          <Linkedin className="w-4 h-4" />
          <span>LinkedIn</span>
        </a>
        <a
          href="https://x.com"
          target="_blank"
          rel="noreferrer"
          onMouseEnter={() => soundFx.playHover()}
          data-cursor-text="TWITTER"
          className="flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-cyan-400 transition-colors"
        >
          <Twitter className="w-4 h-4" />
          <span>Twitter / X</span>
        </a>
      </div>

      <div className="text-center mt-12 text-[11px] font-mono text-gray-500">
        © 2026 Mani Tyagi — Engineered with Next.js 15, GSAP & WebGL Shaders.
      </div>

      {/* Contact Form Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Send a Direct Message">
        {formSubmitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center mx-auto text-emerald-400">
              <Sparkles className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-bold font-mono text-white">Message Transmitted!</h4>
            <p className="text-sm font-sans text-gray-300">
              Thank you for reaching out. I will get back to you within 24 hours.
            </p>
            <button
              onClick={() => {
                setFormSubmitted(false);
                setIsModalOpen(false);
              }}
              className="px-6 py-2.5 rounded-full bg-cyan-500 text-black font-mono text-xs font-bold"
            >
              CLOSE WINDOW
            </button>
          </div>
        ) : (
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-mono text-gray-400 mb-1">Your Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Sarah Jenkins"
                className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white font-mono text-sm focus:border-cyan-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-gray-400 mb-1">Your Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="sarah@company.com"
                className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white font-mono text-sm focus:border-cyan-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-gray-400 mb-1">Project Details / Message</label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell me about your project, timeline, and goals..."
                className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white font-mono text-sm focus:border-cyan-400 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-mono text-xs font-bold tracking-wider uppercase hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>TRANSMIT MESSAGE</span>
            </button>
          </form>
        )}
      </Modal>
    </section>
  );
};
