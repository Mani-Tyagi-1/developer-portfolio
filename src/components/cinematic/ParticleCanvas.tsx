"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  baseAlpha: number;
  color: string;
}

interface ParticleCanvasProps {
  isOverclocked?: boolean;
}

export const ParticleCanvas: React.FC<ParticleCanvasProps> = ({ isOverclocked = false }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = width / 2;
    let mouseY = height / 2;

    const particles: Particle[] = [];
    // Reduced particle count — cap at 80 (was 120)
    const particleCount = isOverclocked ? 150 : Math.min(Math.floor((width * height) / 20000), 80);

    const defaultColors = ["#00f0ff", "#0066ff", "#9d4edd", "#ffffff", "#10b981"];
    const overclockColors = ["#ff00ff", "#00f0ff", "#fbbf24", "#ff0055", "#00ff66"];

    const colors = isOverclocked ? overclockColors : defaultColors;

    for (let i = 0; i < particleCount; i++) {
      const alpha = Math.random() * 0.6 + 0.1;
      const speedMultiplier = isOverclocked ? 1.5 : 0.4;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * speedMultiplier,
        vy: (Math.random() - 0.5) * speedMultiplier,
        radius: Math.random() * (isOverclocked ? 3 : 1.8) + 0.5,
        alpha,
        baseAlpha: alpha,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    // --- Spatial grid for O(n) neighbor lookups instead of O(n²) ---
    const maxDist = isOverclocked ? 140 : 110;
    const maxDistSq = maxDist * maxDist;
    const cellSize = maxDist;

    let gridCols = 0;
    let gridRows = 0;
    let grid: number[][] = [];

    const rebuildGridDimensions = () => {
      gridCols = Math.ceil(width / cellSize) || 1;
      gridRows = Math.ceil(height / cellSize) || 1;
    };

    rebuildGridDimensions();

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      rebuildGridDimensions();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    const lineAlphaMultiplier = isOverclocked ? 0.25 : 0.12;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Rebuild spatial grid each frame
      const totalCells = gridCols * gridRows;
      grid = [];
      for (let c = 0; c < totalCells; c++) {
        grid[c] = [];
      }

      // Update particles & assign to grid cells
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Mouse proximity reaction
        const dxMouse = p.x - mouseX;
        const dyMouse = p.y - mouseY;
        const distMouseSq = dxMouse * dxMouse + dyMouse * dyMouse;
        if (distMouseSq < 25600) { // 160 * 160
          const distMouse = Math.sqrt(distMouseSq);
          p.alpha = Math.min(1, p.baseAlpha + (1 - distMouse / 160) * 0.7);
        } else {
          p.alpha = p.baseAlpha;
        }

        // Assign to grid cell
        const col = Math.min(Math.floor(p.x / cellSize), gridCols - 1);
        const row = Math.min(Math.floor(p.y / cellSize), gridRows - 1);
        grid[row * gridCols + col].push(i);
      }

      // Draw particles (no shadowBlur — huge perf save)
      ctx.globalAlpha = 1;
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
      }

      // Draw connection lines using spatial grid (only check neighbor cells)
      ctx.lineWidth = 0.5;
      for (let row = 0; row < gridRows; row++) {
        for (let col = 0; col < gridCols; col++) {
          const cellIdx = row * gridCols + col;
          const cell = grid[cellIdx];

          // Check current cell + right + bottom + bottom-right neighbors
          const neighborOffsets = [
            [0, 0], [0, 1], [1, 0], [1, 1], [1, -1]
          ];

          for (const [dr, dc] of neighborOffsets) {
            const nr = row + dr;
            const nc = col + dc;
            if (nr < 0 || nr >= gridRows || nc < 0 || nc >= gridCols) continue;

            const neighborCell = grid[nr * gridCols + nc];
            const isSameCell = dr === 0 && dc === 0;

            for (let a = 0; a < cell.length; a++) {
              const p1 = particles[cell[a]];
              const startB = isSameCell ? a + 1 : 0;

              for (let b = startB; b < neighborCell.length; b++) {
                const p2 = particles[neighborCell[b]];
                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const distSq = dx * dx + dy * dy;

                if (distSq < maxDistSq) {
                  const dist = Math.sqrt(distSq);
                  ctx.beginPath();
                  ctx.moveTo(p1.x, p1.y);
                  ctx.lineTo(p2.x, p2.y);
                  ctx.strokeStyle = p1.color;
                  ctx.globalAlpha = (1 - dist / maxDist) * lineAlphaMultiplier * p1.alpha;
                  ctx.stroke();
                }
              }
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isOverclocked]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-85"
    />
  );
};
