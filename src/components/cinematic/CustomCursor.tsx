"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export const CustomCursor: React.FC = () => {
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 350 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  // Track previous hover state to avoid redundant setState calls
  const prevHoveredRef = useRef(false);
  const prevTextRef = useRef("");

  useEffect(() => {
    if (typeof window === "undefined") return;

    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactiveEl = target.closest("a, button, [data-cursor], .interactive-hover");
      if (interactiveEl) {
        const customPrompt = interactiveEl.getAttribute("data-cursor-text") || "";
        // Only call setState if the value actually changed
        if (!prevHoveredRef.current) {
          setIsHovered(true);
          prevHoveredRef.current = true;
        }
        if (prevTextRef.current !== customPrompt) {
          setCursorText(customPrompt);
          prevTextRef.current = customPrompt;
        }
      } else {
        if (prevHoveredRef.current) {
          setIsHovered(false);
          prevHoveredRef.current = false;
        }
        if (prevTextRef.current !== "") {
          setCursorText("");
          prevTextRef.current = "";
        }
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [cursorX, cursorY]);

  if (isTouch) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Outer Magnetic Ring */}
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center rounded-full border border-cyan-400/50 bg-cyan-500/10 backdrop-blur-[1px] pointer-events-none"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovered ? (cursorText ? 80 : 50) : 32,
          height: isHovered ? (cursorText ? 80 : 50) : 32,
          scale: isClicking ? 0.8 : 1,
          borderColor: isHovered ? "rgba(0, 240, 255, 0.8)" : "rgba(0, 240, 255, 0.4)",
          backgroundColor: isHovered ? "rgba(0, 240, 255, 0.15)" : "rgba(0, 102, 255, 0.05)",
        }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
      >
        {cursorText && (
          <span className="text-[10px] font-mono tracking-wider font-semibold text-cyan-200 uppercase px-2 text-center select-none">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Core Glowing Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#00f0ff] pointer-events-none"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 0 : isClicking ? 1.5 : 1,
          opacity: isHovered ? 0 : 1,
        }}
      />
    </div>
  );
};
