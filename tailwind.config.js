/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}"
    ],
    theme: {
      extend: {
        colors: {
          brand: {
            50: "#fff7f8",
            100: "#ffecef",
            200: "#ffd0d8",
            300: "#ffa6b5",
            400: "#ff6d89",
            500: "#ee3a61",
            600: "#cc204d",
            700: "#a31641",
            800: "#7f1438",
            900: "#681234"
          }
        },
        fontFamily: {
          display: ["'Playfair Display'", "serif"],
          sans: ["Inter", "system-ui", "sans-serif"]
        },
        boxShadow: {
          card: "0 10px 30px -10px rgba(0,0,0,0.25)"
        }
      }
    },
    plugins: []
  };