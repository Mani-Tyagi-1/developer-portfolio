export interface SkillNode {
  id: string;
  name: string;
  category: "Frontend" | "Frameworks" | "Motion & 3D" | "AI & Security" | "Backend & DB";
  proficiency: number; // 0 - 100
  color: string;
  iconName: string;
  connections: string[]; // Connected skill IDs
  description: string;
}

export const SKILLS: SkillNode[] = [
  {
    id: "js",
    name: "JavaScript (ESNext)",
    category: "Frontend",
    proficiency: 98,
    color: "#f7df1e",
    iconName: "Code2",
    connections: ["ts", "react", "node"],
    description: "Core language mastery: Event loop, asynchronous pipelines, Web APIs, performance optimization."
  },
  {
    id: "ts",
    name: "TypeScript",
    category: "Frontend",
    proficiency: 95,
    color: "#3178c6",
    iconName: "FileCode",
    connections: ["js", "react", "next"],
    description: "Strict type design, generics, utility types, compile-time architecture safety."
  },
  {
    id: "react",
    name: "React 19",
    category: "Frameworks",
    proficiency: 96,
    color: "#61dafb",
    iconName: "Atom",
    connections: ["next", "r3f", "framer"],
    description: "Server components, custom hooks, concurrent mode, dynamic reconciliation."
  },
  {
    id: "next",
    name: "Next.js (App Router)",
    category: "Frameworks",
    proficiency: 95,
    color: "#ffffff",
    iconName: "Layers",
    connections: ["react", "tailwind", "node"],
    description: "Server Actions, SSG/ISR/SSR architecture, routing optimization, edge functions."
  },
  {
    id: "gsap",
    name: "GSAP & ScrollTrigger",
    category: "Motion & 3D",
    proficiency: 94,
    color: "#88ce02",
    iconName: "Sparkles",
    connections: ["lenis", "react", "r3f"],
    description: "Pinned scroll scenes, complex timeline scrubbing, SVG morphing, text reveals."
  },
  {
    id: "framer",
    name: "Framer Motion",
    category: "Motion & 3D",
    proficiency: 92,
    color: "#e100ff",
    iconName: "Wand2",
    connections: ["react", "gsap"],
    description: "Layout animations, spring physics, gestures, fluid page transitions."
  },
  {
    id: "r3f",
    name: "Three.js / WebGL",
    category: "Motion & 3D",
    proficiency: 88,
    color: "#00f0ff",
    iconName: "Box",
    connections: ["react", "gsap"],
    description: "Custom GLSL shaders, camera controls, particle systems, 3D model loaders."
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "Frontend",
    proficiency: 98,
    color: "#38bdf8",
    iconName: "Palette",
    connections: ["next", "react"],
    description: "Custom design systems, responsive tokens, glassmorphism, keyframe utilities."
  },
  {
    id: "ai",
    name: "AI & LLM Integration",
    category: "AI & Security",
    proficiency: 90,
    color: "#a855f7",
    iconName: "BrainCircuit",
    connections: ["next", "node", "cyber"],
    description: "Prompt engineering, RAG pipelines, OpenAI / Anthropic SDKs, vector embeddings."
  },
  {
    id: "cyber",
    name: "Cybersecurity & Audit",
    category: "AI & Security",
    proficiency: 86,
    color: "#10b981",
    iconName: "ShieldCheck",
    connections: ["node", "ai"],
    description: "OWASP vulnerability defense, JWT/OAuth2 flows, encrypted payload handling, threat scanning."
  },
  {
    id: "node",
    name: "Node.js & Express",
    category: "Backend & DB",
    proficiency: 90,
    color: "#68a063",
    iconName: "Server",
    connections: ["js", "mongo", "firebase"],
    description: "REST & GraphQL APIs, microservices, cluster worker queues, streaming data."
  },
  {
    id: "mongo",
    name: "MongoDB & Firebase",
    category: "Backend & DB",
    proficiency: 88,
    color: "#47a248",
    iconName: "Database",
    connections: ["node", "next"],
    description: "Document schema modeling, realtime subscriptions, indexing strategies."
  }
];
