/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        surface: "var(--color-surface)",
        teal: {
          DEFAULT: "var(--color-teal)",
          dim: "var(--color-teal-dim)",
        },
        border: "var(--color-border)",
      },
      fontFamily: {
        heading: ["'Barlow'", "sans-serif"],
        body: ["'Barlow'", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "9999px",
      },
    },
  },
  plugins: [],
}
