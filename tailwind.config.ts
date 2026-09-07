import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        foreground: "var(--foreground)",
        background: "var(--background)",
        surface: "var(--surface)",
        primary: {
          DEFAULT: "var(--primary)",
          dark: "var(--primary-dark)"
        },
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        "text-secondary": "var(--text-secondary)",
        border: "var(--border)",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        'premium': '0 1px 3px rgba(0,0,0,0.02), 0 4px 12px rgba(0,0,0,0.04)',
        'premium-hover': '0 4px 20px rgba(0,0,0,0.08), 0 8px 32px rgba(0,0,0,0.06)',
      }
    },
  },
  plugins: [],
};

export default config;
