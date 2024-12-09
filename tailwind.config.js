/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black1: "#000000",

        gray: "#363738",

        white1: "#ffffff",
        white2: "#f5f5f5",
        white3: "#fdfaf1",
        white4: "#fafafa",

        button1: "#DB4444",
        button2: "#00FF66",

        hoverButton1: "#c97575",
        hoverButton2: "#00dd66",
        hover3: "#a9bcdf",

        bg: "#ffffff",
      },
    },
  },
  plugins: [],
};
