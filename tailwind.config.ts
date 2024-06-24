import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "fh-blue": {
          "50": "#effefd",
          "100": "#c9fefa",
          "200": "#92fdf6",
          "300": "#54f4ef",
          "400": "#21e0e0",
          "500": "#08c1c4",
          "600": "#03989e",
          "700": "#07797e",
          "800": "#0b5f64",
          "900": "#0f4d52",
          "950": "#012d32",
        },

        "fh-gold": {
          "50": "#fcfaea",
          "100": "#f7f3ca",
          "200": "#f1e597",
          "300": "#e8d15c",
          "400": "#e0bc2f",
          "500": "#cda221",
          "600": "#b4811a",
          "700": "#905e18",
          "800": "#784b1b",
          "900": "#66401d",
          "950": "#3b210d",
        },
      },
    },
  },
  plugins: [],
};
export default config;
