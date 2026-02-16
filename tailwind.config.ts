import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        display: ["Quicksand", "sans-serif"],
        body: ["Nunito", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        info: {
          DEFAULT: "hsl(var(--info))",
          foreground: "hsl(var(--info-foreground))",
        },
        highlight: {
          DEFAULT: "hsl(var(--highlight))",
          foreground: "hsl(var(--highlight-foreground))",
        },
        pink: {
          DEFAULT: "hsl(var(--pink))",
          foreground: "hsl(var(--pink-foreground))",
        },
        lime: {
          DEFAULT: "hsl(var(--lime))",
          foreground: "hsl(var(--lime-foreground))",
        },
        turquoise: {
          DEFAULT: "hsl(var(--turquoise))",
          foreground: "hsl(var(--turquoise-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
        "float-delayed": {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-12px) rotate(3deg)" },
        },
        "bounce-soft": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "wiggle": {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        "wiggle-slow": {
          "0%, 100%": { transform: "rotate(-5deg)" },
          "50%": { transform: "rotate(5deg)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "bounce-rotate": {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "25%": { transform: "translateY(-6px) rotate(5deg)" },
          "50%": { transform: "translateY(-10px) rotate(0deg)" },
          "75%": { transform: "translateY(-6px) rotate(-5deg)" },
        },
        "sway": {
          "0%, 100%": { transform: "translateX(0) rotate(0deg)" },
          "25%": { transform: "translateX(4px) rotate(2deg)" },
          "75%": { transform: "translateX(-4px) rotate(-2deg)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.02)" },
        },
        "pulse-grow": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.15)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-scale": {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "slide-in-left": {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "pop": {
          "0%": { transform: "scale(0)" },
          "50%": { transform: "scale(1.2)" },
          "100%": { transform: "scale(1)" },
        },
        "crawl-left-right": {
          "0%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(80px)" },
          "50%": { transform: "translateX(200px)" },
          "75%": { transform: "translateX(120px)" },
          "100%": { transform: "translateX(0)" },
        },
        "flutter-left": {
          "0%, 100%": { transform: "rotateY(0deg)" },
          "50%": { transform: "rotateY(70deg)" },
        },
        "flutter-right": {
          "0%, 100%": { transform: "rotateY(0deg)" },
          "50%": { transform: "rotateY(-70deg)" },
        },
        "butterfly-bob": {
          "0%, 100%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(5px, -4px)" },
          "50%": { transform: "translate(0, -8px)" },
          "75%": { transform: "translate(-5px, -4px)" },
        },
        "leg-walk-1": {
          "0%, 100%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(20deg)" },
        },
        "leg-walk-2": {
          "0%, 100%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(-20deg)" },
        },
        "bee-swipe": {
          "0%": { transform: "translateX(0)", opacity: "0" },
          "5%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { transform: "translateX(calc(100vw + 160px))", opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 4s ease-in-out infinite",
        "float-delayed": "float-delayed 5s ease-in-out infinite",
        "bounce-soft": "bounce-soft 2s ease-in-out infinite",
        "wiggle": "wiggle 2.5s ease-in-out infinite",
        "wiggle-slow": "wiggle-slow 3s ease-in-out infinite",
        "spin-slow": "spin-slow 8s linear infinite",
        "bounce-rotate": "bounce-rotate 3s ease-in-out infinite",
        "sway": "sway 2.5s ease-in-out infinite",
        "pulse-soft": "pulse-soft 3s ease-in-out infinite",
        "pulse-grow": "pulse-grow 2s ease-in-out infinite",
        "fade-in-up": "fade-in-up 0.7s ease-out forwards",
        "fade-in-scale": "fade-in-scale 0.5s ease-out forwards",
        "slide-in-left": "slide-in-left 0.6s ease-out forwards",
        "slide-in-right": "slide-in-right 0.6s ease-out forwards",
        "shimmer": "shimmer 2s linear infinite",
        "pop": "pop 0.4s ease-out forwards",
        "crawl-1": "crawl-left-right 16s ease-in-out infinite",
        "flutter-left": "flutter-left 0.3s ease-in-out infinite",
        "flutter-right": "flutter-right 0.3s ease-in-out infinite",
        "butterfly-hover": "butterfly-bob 3s ease-in-out infinite",
        "leg-1": "leg-walk-1 0.4s ease-in-out infinite",
        "leg-2": "leg-walk-2 0.4s ease-in-out infinite",
        "bee-flyby": "bee-swipe 3s ease-in-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
