/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "Rubik-Vinyl": ["Rubik Vinyl", "Lobster"],
        Condensed: ["Roboto Condensed", "Roboto", "sans-serif"],
      },
      keyframes: {
        shake: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(7deg)" },
          "20%": { transform: "rotate(-4deg)" },
          "30%": { transform: "rotate(7deg)" },
          "40%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(5.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
      },
      animation: {
        "shake-image": "shake 20s linear infinite",
      },
    },
    plugins: [],
  },
};
