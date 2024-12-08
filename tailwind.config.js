// tailwind.config.js
export default {
  darkMode: "class",
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
        palatinateLight: "#ded3df",
        pink: "#F8A9C0",
        green: "#193111",
        lightGreen: "#d1d6cf",
        lime: "#D9E3B9",
        brown: "#562615",
        darkBrown: "#4C411F",
        lightBrown: "#c9c6bc",
        yellow: "#FEEDAE",
        tangerine: "#F3A172",
        indigo: "#1C4161",
        lightIndigo: "#bbc6d0",
        blue: "#C6D8E5",
        lightblue: "",
        darkPrimaryText: "#ffffff",
        darkSecondaryText: "#e4e4e4",
        darkTileColor: "#262626",
      },
    },
  },
  plugins: [],
};
