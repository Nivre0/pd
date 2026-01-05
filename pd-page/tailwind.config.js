/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#182B52",      // Hintergrund
        accent: "#AF3231",       // Verzierung
        accentText: "#BAB766",   // Verzierung/Schrift
      },
    },
  },
  plugins: [],
};
