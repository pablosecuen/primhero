/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      scrollbar: ["rounded"],
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      filter: {
        "drop-shadow-black-opacity-50": "drop-shadow(0 0 4px rgba(0, 0, 0, 0.5))",
        "drop-shadow-black-opacity-50-lg": "drop-shadow(0 0 8px rgba(0, 0, 0, 0.5))",
        "drop-shadow-black-opacity-50-xl": "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.5))",
        "drop-shadow-black-opacity-50-2xl": "drop-shadow(0 6px 12px rgba(0, 0, 0, 0.5))",
        "drop-shadow-black-opacity-50-3xl": "drop-shadow(0 8px 16px rgba(0, 0, 0, 0.5))",
      },
      colors: {
        primary: "#212529",
        secondary: "#fab500",
      },
      transitionProperty: {
        height: "height",
        width: "width",
        spacing: "margin, padding",
      },
      backgroundImage: {
        image1: "url('../assets/background/background11.png')",
        image2: "url('../assets/background/background2.svg')",
        metal: "url('../assets/background/metal1.jpg')",
        metal2: "url('../assets/background/metal2.jpg')",
      },
      fontFamily: {
        sans: ["Barlow", "sans-serif"],
        condensed: ["Barlow Condensed", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-filters", "tailwind-scrollbar")],
};
