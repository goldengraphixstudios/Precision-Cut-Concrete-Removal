import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "concrete-white": "#F8FAFC",
        "concrete-gray": "#E5E7EB",
        steel: "#0F172A",
        asphalt: "#111827",
        safety: "#F97316",
        ember: "#EA580C",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Oswald", "sans-serif"],
        body: ["var(--font-body)", "Inter", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(249, 115, 22, 0.35), 0 18px 32px rgba(15, 23, 42, 0.12)",
        card: "0 16px 40px rgba(15, 23, 42, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
