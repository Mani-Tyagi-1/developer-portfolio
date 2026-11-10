# Mani Tyagi — Cinematic Storytelling Portfolio

An interactive digital cinema experience and developer portfolio built with Next.js 15, React 19, GSAP, Framer Motion, and Tailwind CSS.

## 🚀 Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **UI & Runtime:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [GSAP (GreenSock)](https://gsap.com/) & [Framer Motion](https://www.framer.com/motion/)
- **Smooth Scrolling:** [Lenis](https://lenis.darkroom.engineering/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)

## 🛠️ Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18.17+ or later) and [pnpm](https://pnpm.io/) installed.

### Installation

```bash
pnpm install
```

### Running Locally

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the portfolio.

### Building for Production

```bash
pnpm build
pnpm start
```

## 📁 Project Structure

```
├── src/
│   ├── app/                # Next.js App Router (pages, layout, styles)
│   ├── components/
│   │   ├── cinematic/      # Audio toggle, cursor, navigation, canvas & effects
│   │   ├── scenes/         # Cinematic portfolio scenes
│   │   └── ui/             # Reusable UI components (GlassCard, MagneticButton, Modal)
│   ├── hooks/              # Custom React hooks
│   └── lib/                # Audio engine, GSAP config, projects & skills data
├── public/                 # Static assets
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── next.config.mjs         # Next.js configuration
```

## 📄 License

This project is private and proprietary.
