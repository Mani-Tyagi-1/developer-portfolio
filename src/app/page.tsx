"use client";

import React, { useState } from "react";
import { ParticleCanvas } from "@/components/cinematic/ParticleCanvas";
import { QuantumCore } from "@/components/cinematic/QuantumCore";
import { CameraController } from "@/components/cinematic/CameraController";
import { EasterEggController } from "@/components/cinematic/EasterEggController";

import { Scene1Awakening } from "@/components/scenes/Scene1Awakening";
import { Scene2WhoAmI } from "@/components/scenes/Scene2WhoAmI";
import { Scene3CodeAlive } from "@/components/scenes/Scene3CodeAlive";
import { Scene4Projects } from "@/components/scenes/Scene4Projects";
import { Scene5Skills } from "@/components/scenes/Scene5Skills";
import { Scene6HowIThink } from "@/components/scenes/Scene6HowIThink";
import { Scene7Numbers } from "@/components/scenes/Scene7Numbers";
import { Scene8WhyWork } from "@/components/scenes/Scene8WhyWork";
import { Scene9Finale } from "@/components/scenes/Scene9Finale";

export default function Home() {
  const [isOverclocked, setIsOverclocked] = useState(false);
  const [triggerEasterEggModal, setTriggerEasterEggModal] = useState(false);

  const handleOverclockTrigger = () => {
    setIsOverclocked(true);
    setTriggerEasterEggModal(true);
    setTimeout(() => setIsOverclocked(false), 10000);
  };

  return (
    <div className="relative w-full overflow-hidden select-none">
      {/* Living Particle Canvas Background — single optimized instance */}
      <ParticleCanvas isOverclocked={isOverclocked} />

      {/* Mutating Persistent Quantum Core */}
      <QuantumCore onOverclockTrigger={handleOverclockTrigger} />

      {/* Secret Easter Egg & Overclock Controller */}
      <EasterEggController
        externalTrigger={triggerEasterEggModal}
        onCloseExternal={() => setTriggerEasterEggModal(false)}
      />

      {/* Virtual Camera Container */}
      <CameraController>
        <div className="relative w-full space-y-16">
          {/* Chapter 01: The Awakening */}
          <Scene1Awakening />

          {/* Chapter 02: Who Am I? */}
          <Scene2WhoAmI />

          {/* Chapter 03: Code Comes Alive */}
          <Scene3CodeAlive />

          {/* Chapter 04: Projects Showcase */}
          <Scene4Projects />

          {/* Chapter 05: Skills Laboratory */}
          <Scene5Skills />

          {/* Chapter 06: How I Think */}
          <Scene6HowIThink />

          {/* Chapter 07: Quantum Numbers */}
          <Scene7Numbers />

          {/* Chapter 08: Why Work With Me */}
          <Scene8WhyWork />

          {/* Chapter 09: The Finale */}
          <Scene9Finale />
        </div>
      </CameraController>
    </div>
  );
}
