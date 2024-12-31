/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{html,js,jsx,tsx,ts}"],
  theme: {
    extend: {
      fontFamily:{
        primary: "Manrope",
      },
      colors: {
        primary: {
          lightCyan: 'hsl(193, 38%, 86%)', // Primary color
          neonGreen: ' hsl(150, 100%, 66%)',   // Lighter variant
        },
        neutral: {
          grayBlue: 'hsl(217, 19%, 38%)', // Secondary color
          darkGB: 'hsl(217, 19%, 24%)',   // Lighter variant
          darkBlue: 'hsl(218, 23%, 16%)',    // Darker variant
        },
      },
    },
  },
  plugins: [],
}

