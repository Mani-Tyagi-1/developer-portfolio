export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  accentColor: string; // Hex or CSS color
  glowColor: string;
  gradient: string;
  description: string;
  longDescription: string;
  techStack: string[];
  metrics: { label: string; value: string }[];
  deviceType: "laptop" | "phone" | "tablet";
  previewCodeSnippet: string;
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

export const PROJECTS: ProjectItem[] = [
  {
    id: "aura-engine",
    title: "Aura Spatial Engine",
    subtitle: "AI-Powered Realtime Creative Canvas & Generative Workspace",
    category: "AI & Interactive Web",
    year: "2026",
    accentColor: "#00f0ff",
    glowColor: "rgba(0, 240, 255, 0.4)",
    gradient: "from-cyan-500/20 via-blue-600/10 to-transparent",
    description: "Spatial canvas platform blending WebGL 3D graphics, real-time node pipelines, and generative AI design systems.",
    longDescription: "Aura Spatial Engine revolutionizes how designers and developers interact with AI model pipelines. Engineered with custom WebGL shaders, React Three Fiber, and high-frequency WebSocket sync, it processes complex 3D scenes in sub-16ms frames.",
    techStack: ["Next.js 15", "React Three Fiber", "TypeScript", "Tailwind CSS", "GSAP", "WebSockets"],
    metrics: [
      { label: "Render Frame Rate", value: "60 FPS" },
      { label: "Active Users", value: "45,000+" },
      { label: "Latency", value: "< 12ms" }
    ],
    deviceType: "laptop",
    previewCodeSnippet: `// Aura Canvas Render Pipeline
const auraEngine = new AuraSpatialCanvas({
  precision: "highp",
  antialias: true,
  nodes: [GenerativeDiffusionNode, WebGLShaderNode]
});
auraEngine.mount("#spatial-canvas");`,
    liveUrl: "https://example.com/aura",
    githubUrl: "https://github.com/manityagi/aura-engine",
    featured: true,
  },
  {
    id: "vortex-defense",
    title: "Vortex Threat Protocol",
    subtitle: "Cybersecurity & Autonomous Threat Intelligence Dashboard",
    category: "Cybersecurity & Realtime Systems",
    year: "2025",
    accentColor: "#10b981",
    glowColor: "rgba(16, 185, 129, 0.4)",
    gradient: "from-emerald-500/20 via-teal-600/10 to-transparent",
    description: "Enterprise security visualizer inspecting real-time packet telemetry, anomaly detection, and automated honeypot defenses.",
    longDescription: "Built for high-stakes enterprise defense, Vortex Threat Protocol visualizes global server traffic with 3D map telemetry, instant DDoS mitigation triggers, and cryptographic log auditing.",
    techStack: ["React 19", "Next.js", "Python / FastAPI", "Tailwind CSS", "D3.js", "WebSockets"],
    metrics: [
      { label: "Threats Neutralized", value: "2.4M/mo" },
      { label: "Packet Throughput", value: "10 Gbps" },
      { label: "Uptime", value: "99.99%" }
    ],
    deviceType: "laptop",
    previewCodeSnippet: `// Vortex Live Anomaly Inspector
const socket = new SecurityStream("wss://vortex.defense/v1/feed");
socket.on("anomaly", (payload) => {
  VortexGraph.highlightNode(payload.ipSource, { color: "#ff0055" });
});`,
    liveUrl: "https://example.com/vortex",
    githubUrl: "https://github.com/manityagi/vortex-protocol",
    featured: true,
  },
  {
    id: "nexus-terminal",
    title: "Nexus Quant Terminal",
    subtitle: "High-Frequency Algorithmic Trading & Analytics Suite",
    category: "FinTech & Realtime Data",
    year: "2025",
    accentColor: "#f59e0b",
    glowColor: "rgba(245, 158, 11, 0.4)",
    gradient: "from-amber-500/20 via-orange-600/10 to-transparent",
    description: "Institutional-grade financial charting suite with custom WebGL order-book depth maps and automated strategy execution.",
    longDescription: "Nexus Quant Terminal renders microsecond ticker feeds using hardware-accelerated Canvas WebGL charts, multi-threaded worker pipelines, and low-latency strategy backtesters.",
    techStack: ["Next.js", "TypeScript", "Canvas WebGL", "Tailwind CSS", "WebWorkers", "REST API"],
    metrics: [
      { label: "Daily Volume Tracked", value: "$1.8B" },
      { label: "Chart Render Time", value: "0.8ms" },
      { label: "Indicators Supported", value: "120+" }
    ],
    deviceType: "phone",
    previewCodeSnippet: `// Nexus WebGL Chart Buffer Sync
const chart = new QuantDepthChart(canvasRef.current);
chart.pushOrderBook({
  bids: [[64200, 1.45], [64195, 3.20]],
  asks: [[64210, 0.90], [64215, 2.15]]
});`,
    liveUrl: "https://example.com/nexus",
    githubUrl: "https://github.com/manityagi/nexus-terminal",
    featured: true,
  },
  {
    id: "synapse-3d",
    title: "Synapse Spatial Web3",
    subtitle: "Immersive 3D Marketplace & Interactive Metaverse Portal",
    category: "Spatial Web & 3D Commerce",
    year: "2024",
    accentColor: "#9d4edd",
    glowColor: "rgba(157, 78, 221, 0.4)",
    gradient: "from-purple-500/20 via-indigo-600/10 to-transparent",
    description: "Next-generation 3D spatial storefront with dynamic raymarched lighting and web-based AR product inspection.",
    longDescription: "Synapse merges physical retail tactile feelings with digital speed. Powered by Three.js GLTF streaming, custom PBR material shaders, and seamless Framer Motion page transitions.",
    techStack: ["Next.js", "Three.js", "GSAP", "Tailwind CSS", "Ethers.js", "Framer Motion"],
    metrics: [
      { label: "3D Asset Compression", value: "85%" },
      { label: "Conversion Lift", value: "+38%" },
      { label: "AR Load Speed", value: "0.4s" }
    ],
    deviceType: "tablet",
    previewCodeSnippet: `// Synapse GLTF Shader Material Injector
useFrame((state) => {
  meshRef.current.material.uniforms.uTime.value = state.clock.getElapsedTime();
});`,
    liveUrl: "https://example.com/synapse",
    githubUrl: "https://github.com/manityagi/synapse-3d",
    featured: true,
  }
];
