"use client";

import React, { useRef, useCallback } from "react";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = "",
  glowColor = "rgba(0, 240, 255, 0.15)",
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current || !glowRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      glowRef.current.style.background = `radial-gradient(600px circle at ${x}px ${y}px, ${glowColor}, transparent 40%)`;
      glowRef.current.style.opacity = "1";
    },
    [glowColor]
  );

  const handleMouseLeave = useCallback(() => {
    if (glowRef.current) {
      glowRef.current.style.opacity = "0";
    }
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative glass-panel rounded-2xl overflow-hidden transition-all duration-300 ${className}`}
    >
      {/* Interactive Cursor Radial Spotlight — updated via DOM ref, zero re-renders */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute -inset-px rounded-2xl transition-opacity duration-300"
        style={{ opacity: 0 }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};
