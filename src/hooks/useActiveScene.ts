"use client";

import { useState, useEffect, useSyncExternalStore } from "react";

const SCENE_COUNT = 9;

let activeScene = 1;
const listeners = new Set<() => void>();

function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

function getSnapshot() {
  return activeScene;
}

function setActiveScene(index: number) {
  if (activeScene !== index) {
    activeScene = index;
    listeners.forEach((cb) => cb());
  }
}

// Single IntersectionObserver shared across all consumers
let observerInitialized = false;

function initObserver() {
  if (observerInitialized || typeof window === "undefined") return;
  observerInitialized = true;

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          const match = id.match(/^scene-(\d+)$/);
          if (match) {
            setActiveScene(Number(match[1]));
          }
        }
      }
    },
    { threshold: 0.3 }
  );

  // Observe once DOM is ready
  const tryObserve = () => {
    for (let i = 1; i <= SCENE_COUNT; i++) {
      const el = document.getElementById(`scene-${i}`);
      if (el) observer.observe(el);
    }
  };

  // Retry briefly in case scenes haven't mounted yet
  tryObserve();
  requestAnimationFrame(tryObserve);
}

/**
 * Shared hook that tracks which scene section is currently visible.
 * Uses a single IntersectionObserver instead of multiple scroll event listeners.
 * Zero forced reflows, hardware-accelerated.
 */
export function useActiveScene(): number {
  useEffect(() => {
    initObserver();
  }, []);

  return useSyncExternalStore(subscribe, getSnapshot, () => 1);
}

