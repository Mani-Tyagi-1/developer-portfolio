"use client";

import React, { useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { soundFx } from "@/lib/audio";

export const AudioToggle: React.FC = () => {
  const [muted, setMuted] = useState(soundFx.isMuted);

  const handleToggle = () => {
    const nextState = soundFx.toggleMute();
    setMuted(nextState);
  };

  return (
    <button
      onClick={handleToggle}
      onMouseEnter={() => soundFx.playHover()}
      data-cursor-text="AUDIO"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3 px-4 py-2.5 rounded-full glass-panel hover:border-cyan-400/40 transition-all duration-300 group cursor-pointer"
      aria-label="Toggle Sound Effects"
    >
      <div className="relative flex items-center justify-center w-5 h-5 text-cyan-400">
        {muted ? (
          <VolumeX className="w-4 h-4 text-gray-500" />
        ) : (
          <Volume2 className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
        )}
      </div>

      {/* Live Equalizer Bars */}
      {!muted && (
        <div className="flex items-end gap-1 h-3">
          <span className="w-0.5 bg-cyan-400 rounded-full animate-[bounce_1s_infinite_100ms] h-full" />
          <span className="w-0.5 bg-cyan-300 rounded-full animate-[bounce_1.2s_infinite_300ms] h-2/3" />
          <span className="w-0.5 bg-cyan-400 rounded-full animate-[bounce_0.8s_infinite_200ms] h-full" />
        </div>
      )}

      <span className="text-xs font-mono font-medium tracking-wider text-gray-300 group-hover:text-cyan-400 transition-colors uppercase">
        {muted ? "Mute" : "Sound On"}
      </span>
    </button>
  );
};
