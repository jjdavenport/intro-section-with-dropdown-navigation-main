/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        almostwhite: "hsl(0, 0%, 98%)",
        mediumgray: "hsl(0, 0%, 41%)",
        almostblack: "hsl(0, 0%, 8%)",
      },
      fontFamily: {
        custom: ["epilogue", "sans-serif"],
      },
    },
  },
  plugins: [],
};
