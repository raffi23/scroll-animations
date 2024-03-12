/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "body-primary": "#b1b2b2",
        "body-secondary": "#a9a9a9",
        accent: "#dddcdd",
      },
    },
  },
  plugins: [],
};
