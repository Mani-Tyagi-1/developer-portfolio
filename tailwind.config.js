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
        background: "#030308",
        surface: {
          DEFAULT: "#0b0c16",
          dark: "#07080f",
          card: "#121424",
          border: "#1e2238"
        },
        primary: {
          DEFAULT: "#3b82f6",
          glow: "#60a5fa",
          neon: "#00f0ff"
        },
        electric: {
          blue: "#0066ff",
          cyan: "#00f0ff",
          purple: "#9d4edd",
          emerald: "#10b981",
          amber: "#f59e0b"
        }
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'Inter', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'Fira Code', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-spin': 'spin 12s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(2deg)' },
        }
      },
      boxShadow: {
        'neon-blue': '0 0 25px rgba(0, 102, 255, 0.4), 0 0 50px rgba(0, 240, 255, 0.2)',
        'neon-purple': '0 0 25px rgba(157, 78, 221, 0.4), 0 0 50px rgba(236, 72, 153, 0.2)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      }
    },
  },
  plugins: [],
};
