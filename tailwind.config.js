/** @type {import('tailwindcss').Config} */
export default {
  content: ["./lib/**/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        deepSapphire: "#154593",
        aquaticBlue: "#40b9e4",
        dodgerBlue: "#16637F",
        midnightBlue: "#0F172A",
        ceruleanBlue: "#2563EB",
        steelBlue: "#94A3B8",
        mediumSeaGreen: "#42C75E",
        goldenrod: "#F6A723",
        rust: "#C75A42",
        aliceBlue: "#F1F5F9",
        ivory: "#FFFBEB",
        ghostWhite: "#F8FAFC",
        coral: "#F15568",
        slateGray: "#64748B",
        gainsboro: "#E2E8F0",
        lightBlue: "#EFF6FF",
        lightGray: "#FAFAFA",
      },
    },
    fontFamily: {
      sans: "Inter, Noto Sans Arabic, sans-serif",
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require("tailwind-scrollbar-hide"),
  ],
};
