/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        ink: "#141313",
        ivory: "#F7F0E5",
        linen: "#E9DCCB",
        bronze: "#B8864B",
        clay: "#8A5D3B",
        moss: "#40564B",
        midnight: "#172326",
        mist: "#EEF2EC"
      },
      boxShadow: {
        luxury: "0 24px 80px rgba(20, 19, 19, 0.12)",
        soft: "0 18px 45px rgba(20, 19, 19, 0.08)",
      },
    },
  },
  plugins: [],
};
