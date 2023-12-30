/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./plugins/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-work-sans)", "system-ui", "sans-serif"],
        default: ["var(--font-work-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
