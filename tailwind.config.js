// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Red Hat Text"', "sans-serif"], // Make Red Hat Text the base font
        Tangerine: ["Tangerine", "cursive"],
      },
    },
  },
  plugins: [],
};
