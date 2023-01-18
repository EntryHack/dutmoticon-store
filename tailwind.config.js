/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ['"Onest"', '"Pretendard Variable"', "sans-serif"],
      pretendard: ['"Pretendard Variable"', "sans-serif"],
    },
    extend: {
      colors: {
        brand: "#126fff",
      },
    },
  },
  plugins: [],
};
