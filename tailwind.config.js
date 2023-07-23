/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ja,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "twitter-blue": "#1DA1F2",
      },
    },
  },
  plugins: [],
}

