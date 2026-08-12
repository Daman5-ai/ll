import type { Config } from "tailwindcss";

/**
 * Design system tokens.
 * Palette concept: "working ledger" — a data analyst's paper grid, not a
 * generic SaaS gradient. Ink on paper in light mode; paper on ink in dark
 * mode. One growth-signal accent (deep emerald) for progress/skill states,
 * one warm amber for achievements/highlights. See README "Design System"
 * section for the full rationale.
 */
const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#FAFAF7",
        ink: "#0B1120",
        signal: {
          DEFAULT: "#1F6F5C",
          light: "#2E8E75",
          dim: "#164E40",
        },
        amber: {
          DEFAULT: "#C98A2C",
          light: "#E0A94F",
        },
        slate: {
          DEFAULT: "#475569",
          soft: "#64748B",
        },
        gridline: {
          light: "#E2E8F0",
          dark: "#1E293B",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "grid-light":
          "linear-gradient(#E2E8F0 1px, transparent 1px), linear-gradient(90deg, #E2E8F0 1px, transparent 1px)",
        "grid-dark":
          "linear-gradient(#1E293B 1px, transparent 1px), linear-gradient(90deg, #1E293B 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "32px 32px",
      },
      animation: {
        "caret-blink": "caret-blink 1s step-end infinite",
        "fade-up": "fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
      keyframes: {
        "caret-blink": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
