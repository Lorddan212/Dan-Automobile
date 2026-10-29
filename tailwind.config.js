/** @type {import('tailwindcss').Config} */
export default {
  // Source detection is explicit in src/index.css; retain the existing theme here.
  theme: {
    extend: {
      colors: {
        luxury: {
          obsidian: "#05070c",
          graphite: "#0d1118",
          slate: "#171d28",
          mist: "#d7ddea",
          silver: "#8e98ab",
          gold: "#c9a45c",
          blue: "#7dd3fc"
        }
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        display: ["Roboto", "sans-serif"]
      },
      boxShadow: {
        luxury: "0 30px 80px rgba(0, 0, 0, 0.45)"
      }
    }
  },
  plugins: []
};
