/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        textColor: "#5C00B3",
        primaryColor: "#9524FF",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/img/Vector 1.svg')",
      },
      container: {
        screens: [],
      },
    },
  },
  plugins: [],
};
