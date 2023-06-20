/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF0000",
        secondary: "#283FA4",
        accent: "#0000FF",
      },
      screens: {
        xs: "360px", // Define the breakpoint for xs screen size
      },
    },
  },
  variants: {},
  plugins: [],
};
