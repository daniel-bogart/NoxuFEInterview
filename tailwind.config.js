/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        "noxu-red": "#DC2626",
        "noxu-orange": "#F0671A",
      },
      keyframes: {
        rotate: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        rotateReverse: {
          from: { transform: "rotate(360deg)" },
          to: { transform: "rotate(0deg)" },
        },
      },
      animation: {
        rotate: "rotate 0.5s linear",
        "rotate-reverse": "rotateReverse 1s linear",
      },
    },
  },
  plugins: [],
};
