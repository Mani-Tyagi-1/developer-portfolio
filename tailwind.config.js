/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: "#09090B",
        canvas: "#09090B",
        surface: {
          DEFAULT: "#121215",
          card: "#121215",
          border: "#27272A",
          hover: "#3F3F46",
          dark: "#09090B",
        },
        technical: {
          bg: "#09090B",
          card: "#121215",
          border: "#27272A",
          hoverBorder: "#3F3F46",
          textPrimary: "#FAFAFA",
          textSecondary: "#A1A1AA",
          accentEmerald: "#10B981",
          accentSky: "#38BDF8",
        },
        accent: {
          emerald: "#10B981",
          sky: "#38BDF8",
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'JetBrains Mono', 'Fira Code', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.025em',
      },
    },
  },
  plugins: [],
};
