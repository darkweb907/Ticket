export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Neutral: "hsl(0, 0%, 100%)",
        SNeutral: "hsl(252, 6%, 83%)",
        MNeutral: "hsl(245, 15%, 58%)",
        XNeutral: "hsl(245, 19%, 35%)",
        BNeutral: "hsl(248, 70%, 10%)",
        Orange: "hsl(7, 88%, 67%)",
        BOrange: "hsl(7, 71%, 60%)",
        GOrange: "linear-gradient(to right, hsl(7, 86%, 67%), hsl(0, 0%, 100%))",
      },
      backgroundImage: {
        GOrange: "linear-gradient(to right, hsl(7, 86%, 67%), hsl(0, 0%, 100%))",
      },
    },
  },
  plugins: [],
}
