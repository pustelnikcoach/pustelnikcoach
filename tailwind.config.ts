import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B0F0D",
        emerald: {
          DEFAULT: "#0F4C3A",
          light: "#1A6B52",
          dark: "#093024",
        },
        graphite: "#1C2622",
        bone: "#E8E6E1",
        mute: "#7A8580",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(2.5rem, 6vw, 4.5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2rem, 4vw, 3rem)", { lineHeight: "1.1", letterSpacing: "-0.015em" }],
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(ellipse 60% 50% at 20% 20%, rgba(26, 107, 82, 0.18), transparent 60%)",
        "ink-graphite": "linear-gradient(180deg, #0B0F0D 0%, #1C2622 100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
