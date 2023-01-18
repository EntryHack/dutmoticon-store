/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ['"Onest"', '"Pretendard Variable"', "sans-serif"],
      pretendard: ['"Pretendard Variable"', "sans-serif"],
    },
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      "0.5xl": { max: "1151px" },
      lg: { max: "1023px" },
      "0.5lg": { max: "895px" },
      md: { max: "767px" },
      "0.5md": { max: "703px" },
      sm: { max: "639px" },
      xs: { max: "511px" },
      xxs: { max: "383px" },
    },
    extend: {
      colors: {
        brand: "#126fff",
      },
    },
  },
  plugins: [],
};
