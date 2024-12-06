// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Red Hat Text"', "sans-serif"], // Make Red Hat Text the base font
        Tangerine: ["Tangerine", "cursive"],
        OldStandardTT: ["Old Standard TT"],
      },
      screens: {
        miniPhones: "390px",
        Phones: "430px",
      },
      colors: {
        palatinate: "#51205B",
        wisteria: "#D4C8ED",
        palatinateDark: "#582560",
        pink: "#F8A9C0",
        green: "#193111",
        lime: "#D9E3B9",
        brown: "#562615",
        darkBrown: "#4C411F",
        yellow: "#FEEDAE",
        tangerine: "#F3A172",
        indigo: "#1C4161",
        blue: "#C6D8E5",
      },
    },
  },
  plugins: [],
};
