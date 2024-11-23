/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      white: "#ffffff",
      black: "#000000",
      beige: "#dddbcc",
      blue: "#7097d3",
      orange: "#daa45e",
      green: "#65bb65",
      green2: "#47d63a",
      "light-green": "#58c26f",
      aqua: "#00ffff",
      "dark-aqua": "#6ab699",
      "light-aqua": "#a4d8cb",
      "dark-gray": "#7a7878",
      "gray-hover": "#5f5959",
      gray: "#e6e1e1",
      "light-gray": "#f7eded",
      primary: "#1d4ed8",
      secondary: "#9333ea",
      accent: "#f97316",
      success: "#10b981",
      warning: "#facc15",
      error: "#ef4444",
      "dark-blue": "#1e293b",
      "soft-blue": "#3b82f6",
      "soft-gray": "#9ca3af",
      "dark-gray-2": "#374151",
      "light-beige": "#f5f5dc",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [require("postcss-nesting")],
};
