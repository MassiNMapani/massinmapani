import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#0f0d12",
        ink: "#f6f2ec",
        stone: "#d8cec2",
        rose: "#e65293",
        panel: "#17141f"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
        serif: ["var(--font-serif)", "Georgia", "serif"]
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(230,82,147,0.4), 0 20px 60px rgba(230,82,147,0.2)",
        soft: "0 24px 56px rgba(0,0,0,0.25)"
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(120deg, rgba(230,82,147,0.16), rgba(253,176,95,0.1) 45%, rgba(101,80,255,0.12))"
      }
    }
  },
  plugins: []
};

export default config;
