/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
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
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        background: "hsl(var(--background))",
        "background-50": "hsl(var(--background-50))",
        foreground: "hsl(var(--foreground))",
        tprimary: "hsl(var(--tprimary))",
        "tprimary-50": "hsl(var(--tprimary-50))",
        "tprimary-100": "hsl(var(--tprimary-100))",
        "tprimary-200": "hsl(var(--tprimary-200))",
        "tprimary-300": "hsl(var(--tprimary-300))",
        "tprimary-400": "hsl(var(--tprimary-400))",
        accent: "hsl(var(--accent))",
        "accent-100": "hsl(var(--accent-100))",
        "accent-50": "hsl(var(--accent-50))",
      },
      borderRadius: {
        primary: "var(--radius)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}