/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      lg: "1028px",
      xl: '1600px'
    },
    extend: {
      transitionProperty: {
        padding: "padding",
        position: "position",
      },
      backgroundImage: {
        "hp-image1":
          "url('https://images.pexels.com/photos/1423600/pexels-photo-1423600.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        "hp-image2":
          "url('https://images.pexels.com/photos/1179229/pexels-photo-1179229.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        "hp-image3":
          "url('https://images.pexels.com/photos/886051/pexels-photo-886051.jpeg?auto=compress&cs=tinysrgb&w=1600')",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
