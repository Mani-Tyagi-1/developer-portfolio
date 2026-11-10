"use client";

import React from "react";
import {
  Terminal,
  Layout,
  Server,
  Database,
  Shield,
  Layers,
  Cpu,
  Lock,
  Zap,
  Globe,
  GitBranch,
  CreditCard
} from "lucide-react";

interface CapabilityCategory {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  accent: string;
  skills: { name: string; highlight?: boolean }[];
  bulletPoints: string[];
}

const CAPABILITIES: CapabilityCategory[] = [
  {
    id: "frontend",
    title: "Frontend & Client Systems",
    subtitle: "UI Architecture & Performance",
    icon: <Layout className="w-4 h-4 text-sky-400" />,
    accent: "text-sky-400",
    skills: [
      { name: "Next.js (App Router)", highlight: true },
      { name: "React.js", highlight: true },
      { name: "TypeScript", highlight: true },
      { name: "JavaScript (ES6+)" },
      { name: "Redux Toolkit" },
      { name: "Tailwind CSS" },
      { name: "Core Web Vitals", highlight: true },
      { name: "Responsive Design" }
    ],
    bulletPoints: [
      "SSR / ISR hybrid rendering pipelines and server action handlers",
      "Dynamic bundle splitting, asset compression, and 0.00 CLS stability",
      "Custom hook state abstractions and predictable client state reconciliation"
    ]
  },
  {
    id: "backend",
    title: "Backend & Distributed APIs",
    subtitle: "Serverless & Service Layers",
    icon: <Server className="w-4 h-4 text-emerald-400" />,
    accent: "text-emerald-400",
    skills: [
      { name: "Node.js", highlight: true },
      { name: "Express.js", highlight: true },
      { name: "RESTful Architecture", highlight: true },
      { name: "Microservices" },
      { name: "Custom Middleware", highlight: true },
      { name: "Webhook Handlers", highlight: true },
      { name: "Rate Limiting" },
      { name: "Input Validation" }
    ],
    bulletPoints: [
      "Modular middleware architecture verifying authentication tokens before business logic",
      "Idempotent webhook ingestion with cryptographic signature validation",
      "Robust error handling matrices and structured request logging"
    ]
  },
  {
    id: "database",
    title: "Data Modeling & Persistence",
    subtitle: "NoSQL & Structured Engines",
    icon: <Database className="w-4 h-4 text-amber-400" />,
    accent: "text-amber-400",
    skills: [
      { name: "MongoDB", highlight: true },
      { name: "Mongoose ORM", highlight: true },
      { name: "Firebase Firestore" },
      { name: "Complex Aggregation Pipelines", highlight: true },
      { name: "Compound Indexing", highlight: true },
      { name: "Cursor Pagination" },
      { name: "In-Memory Caching" }
    ],
    bulletPoints: [
      "Compound indexing strategies on multi-tenant partition keys lowering DB CPU loads",
      "Cursor-based pagination feeds avoiding high-skip latency in deep records",
      "Aggregation pipelines engineered for multi-tier commission ledger computations"
    ]
  },
  {
    id: "security",
    title: "Security, Payments & Cloud",
    subtitle: "Transaction & Access Controls",
    icon: <Shield className="w-4 h-4 text-emerald-400" />,
    accent: "text-emerald-400",
    skills: [
      { name: "Razorpay Webhooks", highlight: true },
      { name: "PhonePe Gateways", highlight: true },
      { name: "Role-Based Access Control (RBAC)", highlight: true },
      { name: "JWT Authentication", highlight: true },
      { name: "Git & GitHub Actions" },
      { name: "DigitalOcean" },
      { name: "Postman" },
      { name: "Linux" }
    ],
    bulletPoints: [
      "Fine-grained hierarchical RBAC restricting vertical access across 25+ business modules",
      "HMAC-SHA256 signature verification preventing phantom payments and ghost orders",
      "Automated CI/CD deployment pipelines on Linux / DigitalOcean droplet infrastructure"
    ]
  }
];

export const TechnicalCapabilities: React.FC = () => {
  return (
    <section
      id="skills"
      className="relative py-16 sm:py-24 px-3 sm:px-6 max-w-6xl mx-auto border-t border-zinc-900 scroll-mt-24"
    >
      {/* SECTION HEADER */}
      <div className="flex flex-col items-start mb-8 sm:mb-12 text-left">
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-md border border-zinc-800 bg-zinc-900/60 text-zinc-400 text-[10px] sm:text-xs font-mono uppercase tracking-wider sm:tracking-widest mb-3 shadow-sm">
          <Terminal className="w-3.5 h-3.5 flex-shrink-0" />
          <span>&gt; 03 // INFRASTRUCTURE &amp; DOMAIN EXPERTISE</span>
        </div>

        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-100 mb-3 break-words">
          Technical Capabilities &amp; Stack
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-zinc-400 max-w-2xl leading-relaxed">
          Categorized across engineering tiers. Zero arbitrary percentage bars — every capability is grounded in production deployment, state synchronization, and operational resilience.
        </p>
      </div>

      {/* 4-CARD RESPONSIVE GRID (2 cols on desktop, 1 on mobile) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {CAPABILITIES.map((cap) => (
          <div
            key={cap.id}
            className="group rounded-2xl border border-zinc-800 bg-[#121215] hover:border-[#3F3F46] transition-all duration-300 p-4 sm:p-7 flex flex-col justify-between shadow-xl"
          >
            <div className="space-y-4 sm:space-y-5">
              {/* Card Header */}
              <div className="flex items-center justify-between pb-3 border-b border-zinc-800/80">
                <div className="flex items-center gap-2 sm:gap-2.5">
                  <div className="w-7 h-7 sm:w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center flex-shrink-0">
                    {cap.icon}
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-lg font-bold text-zinc-100 tracking-tight">
                      {cap.title}
                    </h3>
                    <span className="text-[11px] sm:text-xs font-mono text-zinc-400">
                      {cap.subtitle}
                    </span>
                  </div>
                </div>

                <span className="text-[9px] sm:text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400 flex-shrink-0">
                  TIER
                </span>
              </div>

              {/* Stack Chips */}
              <div className="flex flex-wrap gap-1 sm:gap-1.5 pt-0.5">
                {cap.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md text-[10px] sm:text-xs font-mono transition-colors ${
                      skill.highlight
                        ? "bg-zinc-900 border border-zinc-700 text-zinc-200 font-medium"
                        : "bg-zinc-950/60 border border-zinc-800/80 text-zinc-400"
                    }`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>

              {/* Engineering Focus Bullets */}
              <div className="space-y-1.5 pt-2 border-t border-zinc-800/50">
                <div className="text-[9.5px] sm:text-[10px] font-mono uppercase tracking-wider text-zinc-500">
                  SYSTEM RESPONSIBILITIES:
                </div>
                <ul className="space-y-1 text-[11px] sm:text-xs text-zinc-400 font-sans">
                  {cap.bulletPoints.map((bp, i) => (
                    <li key={i} className="flex items-start gap-1.5 sm:gap-2">
                      <span className="text-emerald-400 font-mono mt-0.5 flex-shrink-0">&gt;</span>
                      <span className="leading-relaxed">{bp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
