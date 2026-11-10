"use client";

import React, { useState } from "react";
import {
  ShieldCheck,
  Zap,
  Server,
  Layers,
  CheckCircle2,
  Lock,
  RefreshCw,
  Gauge,
  ChevronDown,
  ChevronUp,
  Terminal,
  Activity,
  ArrowRight,
  ExternalLink,
  Code2,
  Cpu,
  FileCode,
  Database
} from "lucide-react";

interface ChallengeSolutionItem {
  id: string;
  number: string;
  title: string;
  challenge: string;
  solution: string;
  icon: React.ReactNode;
  tags: string[];
}

const CHALLENGES: ChallengeSolutionItem[] = [
  {
    id: "rbac",
    number: "01",
    title: "Fine-Grained Multi-Tier RBAC",
    challenge:
      "Securing 25+ sensitive operational modules across Super Admins, multi-level affiliates, and internal staff without leaking vertical data or degrading request throughput.",
    solution:
      "Engineered hierarchical middleware validating cryptographically signed JWT payload scopes against cached vertical-level access trees in Redis before touching business controllers.",
    icon: <Lock className="w-4 h-4 text-emerald-400" />,
    tags: ["JWT Scopes", "Redis Bitmasks", "Zero-Trust Architecture"]
  },
  {
    id: "webhooks",
    number: "02",
    title: "Webhook Idempotency & Payment Consistency",
    challenge:
      "Preventing phantom orders, double-payouts, and race conditions caused by intermittent network retries across Razorpay and PhonePe high-concurrency checkout flows.",
    solution:
      "Implemented strict HMAC-SHA256 signature verification combined with a transactional idempotency event ledger in MongoDB, guaranteeing exactly-once state transitions.",
    icon: <RefreshCw className="w-4 h-4 text-sky-400" />,
    tags: ["HMAC Verification", "Idempotency Ledger", "Razorpay / PhonePe"]
  },
  {
    id: "queries",
    number: "03",
    title: "Query Performance & Core Web Vitals",
    challenge:
      "Unindexed multi-collection aggregation queries causing 85%+ database CPU spikes and sluggish storefront response times that held mobile Lighthouse scores down at ~30.",
    solution:
      "Re-architected compound indices with tenant-partition keys, replaced offset pagination with cursor-based feeds, and implemented dynamic Next.js chunk splitting to achieve Lighthouse 90+.",
    icon: <Gauge className="w-4 h-4 text-emerald-400" />,
    tags: ["Cursor Pagination", "Compound Indexing", "FCP < 0.8s"]
  }
];

const TECH_STACK_CHIPS = [
  "Next.js",
  "React.js",
  "TypeScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Razorpay",
  "PhonePe",
  "Redis",
  "Webhooks",
  "Tailwind CSS"
];

export const FlagshipCaseStudy: React.FC = () => {
  const [activeChallengeId, setActiveChallengeId] = useState<string>("rbac");
  const [isDeepDiveExpanded, setIsDeepDiveExpanded] = useState<boolean>(false);
  const [schematicView, setSchematicView] = useState<"ascii" | "nodes">("nodes");

  return (
    <section
      id="case-study"
      className="relative py-16 sm:py-24 px-3 sm:px-6 max-w-6xl mx-auto border-t border-zinc-900 scroll-mt-24"
    >
      {/* SECTION HEADER */}
      <div className="flex flex-col items-start mb-8 sm:mb-10 text-left">
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-md border border-zinc-800 bg-zinc-900/60 text-emerald-400 text-[10px] sm:text-xs font-mono uppercase tracking-wider sm:tracking-widest mb-3 shadow-sm">
          <Terminal className="w-3.5 h-3.5 flex-shrink-0" />
          <span>&gt; 01 // PRODUCTION ARCHITECTURE DEEP DIVE</span>
        </div>

        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-100 mb-3 break-words">
          Centralized Enterprise Admin &amp; Operations Platform
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-zinc-400 max-w-3xl leading-relaxed">
          Architecting a multi-tenant operations backbone handling 25+ business modules, payment verification, and RBAC across 4 production platforms serving{" "}
          <span className="text-zinc-200 font-medium">100K+ active users</span> at{" "}
          <span className="text-zinc-200 font-medium">Vedic Vaibhav</span>.
        </p>
      </div>

      {/* MAIN CONTAINER CARD: #121215 with border 1px solid #27272A */}
      <div className="rounded-2xl border border-zinc-800 bg-[#121215] overflow-hidden shadow-2xl">
        {/* Top Console Status Bar */}
        <div className="border-b border-zinc-800 px-4 py-3 sm:px-5 sm:py-3.5 bg-zinc-950/70 flex flex-wrap items-center justify-between gap-2.5 text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300 text-[10px] sm:text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              SYSTEM OVERVIEW: VEDIC VAIBHAV CORE
            </span>
          </div>

          <div className="flex items-center gap-2 text-[11px] sm:text-xs text-zinc-400">
            <span className="text-emerald-400 font-semibold">100% HEALTHY</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-300">PROD-CLUSTER</span>
          </div>
        </div>

        {/* 2-COLUMN SPLIT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-zinc-800">
          {/* LEFT COLUMN: SYSTEM TOPOLOGY CANVAS (7 cols) */}
          <div className="lg:col-span-7 p-4 sm:p-7 flex flex-col justify-between space-y-6">
            <div>
              {/* Window Header with 3 Dots */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-zinc-800/80">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 sm:gap-1.5">
                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <span className="text-[11px] sm:text-xs font-mono text-zinc-400 ml-1 sm:ml-2">
                    topology-v2.5.sys // data-flow
                  </span>
                </div>

                {/* View Switcher: Node Tree (Default) vs ASCII Diagram */}
                <div className="inline-flex rounded-md border border-zinc-800 bg-zinc-900/80 p-0.5 text-[10px] sm:text-[11px] font-mono">
                  <button
                    onClick={() => setSchematicView("nodes")}
                    className={`px-2 py-0.5 rounded transition-colors ${
                      schematicView === "nodes"
                        ? "bg-zinc-800 text-zinc-100 font-medium"
                        : "text-zinc-400 hover:text-zinc-200"
                    }`}
                  >
                    Node Tree
                  </button>
                  <button
                    onClick={() => setSchematicView("ascii")}
                    className={`px-2 py-0.5 rounded transition-colors ${
                      schematicView === "ascii"
                        ? "bg-zinc-800 text-zinc-100 font-medium"
                        : "text-zinc-400 hover:text-zinc-200"
                    }`}
                  >
                    ASCII Diagram
                  </button>
                </div>
              </div>

              {/* Diagram Window */}
              {schematicView === "ascii" ? (
                <div>
                  <div className="text-[10px] text-zinc-500 sm:hidden block pb-1.5 font-mono">
                    ← Swipe horizontally to inspect full schematic →
                  </div>
                  <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-3 sm:p-5 font-mono text-[9.5px] sm:text-xs overflow-x-auto text-zinc-300 shadow-inner select-text">
                    <pre className="leading-relaxed text-zinc-300">
{`+-------------------------------------------------------------+
| CLIENT REQUEST INGESTION (4 Distinct Customer Storefronts)  |
+-------------------------------------------------------------+
                              │
                              ▼  (JWT Handshake / Bearer Auth)
+-------------------------------------------------------------+
| DYNAMIC RBAC GATEWAY MIDDLEWARE                             |
| [Super Admin]  [Partner Vertical]  [Affiliate]  [Staff Org] |
+-------------------------------------------------------------+
                              │
               ┌──────────────┴──────────────┐
               ▼                             ▼
+-----------------------------+ +-----------------------------+
| 25+ ADMIN BUSINESS MODULES  | | AFFILIATE REVENUE ENGINE    |
| • Operations & Bookings     | | • Multi-Tier Commission Tree|
| • Attendance & Payroll      | | • Realtime Audit Records    |
| • User & Franchise Matrix   | | • Automated Payout Queues   |
+-----------------------------+ +-----------------------------+
               └──────────────┬──────────────┘
                              ▼
+-------------------------------------------------------------+
| OPTIMIZED DATA PERSISTENCE LAYER                            |
| • MongoDB Compound Indexes (Tenant-Partition Keys)          |
| • Redis Distributed Session Cache (<12ms Access)            |
| • Cursor-Based Paginated Aggregation Pipelines              |
+-------------------------------------------------------------+
                              ▲
                              │  (HMAC-SHA256 Signature Audit)
+-------------------------------------------------------------+
| TRANSACTIONAL WEBHOOK INGESTION ENGINE                      |
| [Razorpay Webhook Stream]       [PhonePe Webhook Stream]    |
| • Deduplication Event Ledger    • 0% Dropped Transitions    |
+-------------------------------------------------------------+`}
                    </pre>
                  </div>
                </div>
              ) : (
                <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4 sm:p-5 space-y-2.5 font-mono text-xs shadow-inner">
                  {/* Node 1: Ingestion */}
                  <div className="p-3 rounded-lg border border-zinc-800 bg-zinc-900/60 hover:border-zinc-700 transition-colors flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                      <div>
                        <div className="text-zinc-100 font-semibold text-[11px] sm:text-xs">
                          1. Multi-Platform Ingestion Layer
                        </div>
                        <div className="text-[10px] text-zinc-500 font-sans">
                          4 Distinct Customer-Facing Web Platforms
                        </div>
                      </div>
                    </div>
                    <span className="text-[9px] sm:text-[10px] text-zinc-400 font-mono px-2 py-0.5 rounded bg-zinc-950 border border-zinc-800">
                      100K+ USERS
                    </span>
                  </div>

                  {/* Flow Arrow */}
                  <div className="flex items-center justify-center gap-1.5 text-zinc-600 text-[10px]">
                    <span className="h-2.5 w-px bg-zinc-800" />
                    <span>JWT Handshake &amp; Bearer Session</span>
                    <span className="h-2.5 w-px bg-zinc-800" />
                  </div>

                  {/* Node 2: Security & RBAC */}
                  <div className="p-3 rounded-lg border border-emerald-500/30 bg-emerald-950/15 hover:border-emerald-500/50 transition-colors flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-6 h-6 rounded bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 flex-shrink-0">
                        <Lock className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-emerald-300 font-semibold text-[11px] sm:text-xs">
                          2. Dynamic Multi-Tenant RBAC Gateway
                        </div>
                        <div className="text-[10px] text-emerald-400/80 font-sans">
                          Super Admin • Partner Verticals • Affiliates • Staff Orgs
                        </div>
                      </div>
                    </div>
                    <span className="text-[9px] sm:text-[10px] text-emerald-400 font-mono px-2 py-0.5 rounded bg-emerald-950/40 border border-emerald-800/50">
                      ZERO-TRUST
                    </span>
                  </div>

                  {/* Flow Split */}
                  <div className="flex items-center justify-center gap-2 text-zinc-600 text-[10px]">
                    <span className="h-2 w-px bg-zinc-800" />
                    <span>Scoped Vertical Execution</span>
                    <span className="h-2 w-px bg-zinc-800" />
                  </div>

                  {/* Node 3: Core Business Modules Dual Branches */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div className="p-3 rounded-lg border border-zinc-800 bg-zinc-900/60 hover:border-zinc-700 transition-colors space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-semibold text-zinc-200">25+ Admin Modules</span>
                        <Layers className="w-3.5 h-3.5 text-zinc-500" />
                      </div>
                      <div className="text-[10px] text-zinc-400 font-sans leading-relaxed">
                        Order booking, inventory management, user matrix, and employee payroll engine.
                      </div>
                    </div>

                    <div className="p-3 rounded-lg border border-zinc-800 bg-zinc-900/60 hover:border-zinc-700 transition-colors space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-semibold text-zinc-200">Affiliate Engine</span>
                        <Activity className="w-3.5 h-3.5 text-zinc-500" />
                      </div>
                      <div className="text-[10px] text-zinc-400 font-sans leading-relaxed">
                        Hierarchical multi-tier commission tree, real-time audit logs, automated payout queue.
                      </div>
                    </div>
                  </div>

                  {/* Flow Arrow */}
                  <div className="flex items-center justify-center gap-1.5 text-zinc-600 text-[10px]">
                    <span className="h-2 w-px bg-zinc-800" />
                    <span>Indexed Tenant Queries &amp; In-Memory Cache</span>
                    <span className="h-2 w-px bg-zinc-800" />
                  </div>

                  {/* Node 4: Persistence & Indexing */}
                  <div className="p-3 rounded-lg border border-zinc-800/90 bg-zinc-900/50 hover:border-zinc-700 transition-colors flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-6 h-6 rounded bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 flex-shrink-0">
                        <Database className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-zinc-200 font-semibold text-[11px] sm:text-xs">
                          3. Optimized MongoDB + Redis Cache
                        </div>
                        <div className="text-[10px] text-zinc-400 font-sans">
                          Compound index on tenant keys • Cursor-based pagination feeds
                        </div>
                      </div>
                    </div>
                    <span className="text-[9px] sm:text-[10px] text-amber-400 font-mono px-2 py-0.5 rounded bg-amber-950/30 border border-amber-800/40">
                      &lt; 38ms P95
                    </span>
                  </div>

                  {/* Node 5: Webhooks & Idempotency */}
                  <div className="p-2.5 sm:p-3 rounded-lg border border-sky-800/50 bg-sky-950/15 flex items-center justify-between text-zinc-400">
                    <div className="flex items-center gap-2 text-[10px] sm:text-[11px]">
                      <RefreshCw className="w-3.5 h-3.5 text-sky-400 animate-spin-slow" />
                      <span className="text-zinc-300 font-medium">Razorpay &amp; PhonePe Webhook Queue</span>
                    </div>
                    <span className="text-emerald-400 text-[9.5px] sm:text-[10px] font-mono">
                      0% Ghost Orders
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Production Tech Chips */}
            <div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 mb-2">
                PRODUCTION TECHNOLOGY STACK
              </div>
              <div className="flex flex-wrap gap-1 sm:gap-1.5">
                {TECH_STACK_CHIPS.map((chip) => (
                  <span
                    key={chip}
                    className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md border border-zinc-800/80 bg-zinc-900/70 text-zinc-300 font-mono text-[10px] sm:text-xs hover:border-zinc-700 hover:text-white transition-colors"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: TECHNICAL SPECIFICATION & IMPACT (5 cols) */}
          <div className="lg:col-span-5 p-4 sm:p-7 flex flex-col justify-between space-y-6">
            <div>
              {/* The Core Challenge Box */}
              <div className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-4 mb-4 sm:mb-5">
                <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-wider mb-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  THE CORE CHALLENGE
                </div>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
                  Fragmented state across 4 distinct customer-facing storefronts led to booking-payment discrepancies, un-audited commission disputes, and high database CPU latency under peak checkout traffic.
                </p>
              </div>

              {/* 3 Core Engineering Solutions Accordion */}
              <div className="space-y-2.5 sm:space-y-3">
                <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-zinc-500">
                  KEY TECHNICAL SOLUTIONS &amp; ARCHITECTURAL TRADE-OFFS
                </div>

                {CHALLENGES.map((item) => {
                  const isActive = activeChallengeId === item.id;
                  return (
                    <div
                      key={item.id}
                      className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                        isActive
                          ? "border-zinc-700 bg-zinc-900/60"
                          : "border-zinc-800/70 bg-zinc-950/30 hover:border-zinc-800 hover:bg-zinc-900/30"
                      }`}
                    >
                      <button
                        onClick={() => setActiveChallengeId(isActive ? "" : item.id)}
                        className="w-full p-3 sm:p-3.5 flex items-center justify-between text-left focus:outline-none"
                      >
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs text-zinc-500 font-bold">
                            {item.number}
                          </span>
                          <span className="text-xs sm:text-sm font-semibold text-zinc-200">
                            {item.title}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
                          {item.icon}
                          {isActive ? (
                            <ChevronUp className="w-3.5 h-3.5 text-zinc-400" />
                          ) : (
                            <ChevronDown className="w-3.5 h-3.5 text-zinc-500" />
                          )}
                        </div>
                      </button>

                      {isActive && (
                        <div className="px-3 pb-3 sm:px-3.5 sm:pb-3.5 pt-1 space-y-2 text-xs font-sans border-t border-zinc-800/60">
                          <div>
                            <span className="text-zinc-500 font-mono uppercase tracking-wider text-[10px] block mb-0.5">
                              Constraint:
                            </span>
                            <p className="text-zinc-400 leading-relaxed text-[11px] sm:text-xs">{item.challenge}</p>
                          </div>
                          <div>
                            <span className="text-emerald-400 font-mono uppercase tracking-wider text-[10px] block mb-0.5">
                              Engineering Solution:
                            </span>
                            <p className="text-zinc-200 leading-relaxed text-[11px] sm:text-xs">{item.solution}</p>
                          </div>
                          <div className="flex flex-wrap gap-1 pt-1">
                            {item.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-1.5 py-0.5 rounded text-[9.5px] sm:text-[10px] font-mono bg-zinc-800/60 text-zinc-300 border border-zinc-700/50"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Expand Deep-Dive Toggle Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setIsDeepDiveExpanded(!isDeepDiveExpanded)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800/60 hover:text-white text-zinc-300 text-[11px] sm:text-xs font-mono transition-colors"
              >
                <span>
                  {isDeepDiveExpanded
                    ? "Collapse Technical Post-Mortem Spec ↑"
                    : "Expand Full Architecture Deep-Dive / Modal Spec ↓"}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* EXPANDABLE DEEP-DIVE TECHNICAL SPECIFICATION DRAWER */}
        {isDeepDiveExpanded && (
          <div className="border-t border-zinc-800 p-4 sm:p-8 bg-zinc-950/90 space-y-6 animate-fadeIn">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-800 pb-3">
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-zinc-300 font-bold">
                  PRODUCTION CODE ARCHITECTURE &amp; VERIFICATION
                </span>
              </div>
              <span className="text-[10px] sm:text-xs font-mono text-zinc-500">VEDIC VAIBHAV CORE V2.5</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {/* Spec Item 1: Webhook Idempotency Router */}
              <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-3.5 sm:p-4 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-sky-400 font-semibold text-[11px] sm:text-xs truncate">// webhookLedger.ts</span>
                  <span className="text-zinc-500 text-[10px]">IDEMPOTENCY: STRICT</span>
                </div>
                <div className="p-3 rounded-lg bg-black/60 border border-zinc-800 font-mono text-[10px] sm:text-[11px] text-zinc-300 overflow-x-auto">
                  <pre>
{`export async function handleWebhookEvent(req: Request) {
  const signature = req.headers["x-razorpay-signature"];
  const rawBody = await req.text();
  
  // 1. Cryptographic HMAC validation
  const isValid = verifyHMAC(rawBody, signature, SECRET);
  if (!isValid) throw new SecurityException("INVALID_SIGNATURE");

  // 2. Atomic Event Deduplication Ledger
  const { eventId, paymentId } = JSON.parse(rawBody);
  const lock = await mongoLedger.createUnique({
    _id: \`evt_\${eventId}_\${paymentId}\`,
    status: "PROCESSING",
    receivedAt: Date.now()
  });

  // 3. Exactly-once fulfillment dispatch
  await fulfillBookingTransaction(lock.paymentId);
}`}
                  </pre>
                </div>
                <p className="text-[11px] sm:text-xs font-sans text-zinc-400">
                  Guarantees network retransmissions from Razorpay and PhonePe cannot trigger multiple booking allocations or corrupt affiliate commission balances.
                </p>
              </div>

              {/* Spec Item 2: RBAC Matrix Validator */}
              <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-3.5 sm:p-4 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-emerald-400 font-semibold text-[11px] sm:text-xs truncate">// verifyTenantScope.ts</span>
                  <span className="text-zinc-500 text-[10px]">SCOPE: HIERARCHICAL</span>
                </div>
                <div className="p-3 rounded-lg bg-black/60 border border-zinc-800 font-mono text-[10px] sm:text-[11px] text-zinc-300 overflow-x-auto">
                  <pre>
{`export function verifyTenantScope(allowedTiers: RoleTier[]) {
  return async (req: AuthRequest, res: Response, next: NextFunction) => {
    const { role, tenantVertical, sessionBitmask } = req.session;

    // Super Admin global privilege bypass
    if (role === "SUPER_ADMIN") return next();

    // Verify tenant vertical partition matches resource
    const requestedVertical = req.params.verticalId;
    if (tenantVertical !== requestedVertical) {
      return res.status(403).json({ error: "FORBIDDEN_VERTICAL" });
    }

    // Bitwise check for action permission
    if ((sessionBitmask & REQUIRED_ACTION_BIT) === 0) {
      return res.status(403).json({ error: "INSUFFICIENT_BITMASK" });
    }

    next();
  };
}`}
                  </pre>
                </div>
                <p className="text-[11px] sm:text-xs font-sans text-zinc-400">
                  Enforces vertical isolation across the 4 platform divisions so partner accounts are mathematically restricted to their own operational silo.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* METRICS FOOTER STRIP (Within the Card) */}
        <div className="border-t border-zinc-800 bg-zinc-950/80 p-4 sm:p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4">
            {/* Metric 1 */}
            <div className="p-3 sm:p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/60 flex flex-col justify-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold font-mono text-zinc-100 tracking-tight">
                100K+
              </div>
              <div className="text-[11px] sm:text-xs font-sans text-zinc-400 mt-0.5">
                Active Users
              </div>
            </div>

            {/* Metric 2 */}
            <div className="p-3 sm:p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/60 flex flex-col justify-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold font-mono text-zinc-100 tracking-tight">
                25+
              </div>
              <div className="text-[11px] sm:text-xs font-sans text-zinc-400 mt-0.5">
                Modules Built
              </div>
            </div>

            {/* Metric 3 */}
            <div className="p-3 sm:p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/60 flex flex-col justify-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold font-mono text-emerald-400 tracking-tight">
                0%
              </div>
              <div className="text-[11px] sm:text-xs font-sans text-zinc-400 mt-0.5">
                Webhook Drops
              </div>
            </div>

            {/* Metric 4 */}
            <div className="p-3 sm:p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/60 flex flex-col justify-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold font-mono text-emerald-400 tracking-tight">
                90+
              </div>
              <div className="text-[11px] sm:text-xs font-sans text-zinc-400 mt-0.5">
                Lighthouse Score
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
