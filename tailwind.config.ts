// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    // add other paths as needed
  ],
  theme: {
    extend: {
      colors: {
        foreground: "var(--foreground)",
        background: "var(--background)",
        primary: "var(--primary)",
        "primary-dark": "var(--primary-dark)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        surface: "var(--surface)",
        "text-secondary": "var(--text-secondary)",
        border: "var(--border)",
        gold: "var(--gold)",
        "gold-light": "var(--gold-light)",
      },
      fontFamily: {
        heading: ["var(--font-heading)"],
        body: ["var(--font-body)"],
      },
    },
  },
  plugins: [],
};
