/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      lg: "1028px",
    },
    extend: {
      transitionProperty: {
        padding: "padding",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
