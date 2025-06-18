module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      mob: "375px",
      tablet: "768px",
      laptop: "1024px",
      desktop: "1280px",
      laptopl: "1440px",
    },
    extend: {
      keyframes: {
        scrollRight: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }, 
        },
      },
      animation: {
        scrollRight: "scrollRight 30s linear infinite",
      },
    },
  },
  plugins: [],
};
