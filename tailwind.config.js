/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        wizard: "#80BCB5",
        black: "#80BCB5",
        horror: "#80BCB5",
        dashbg: "#002824",
        dashfix: "#003D36",
        hover: "#F5F5DC",
      },
      fontFamily: {
        sans: ["poppins", "sans-serif"],
      },
      spacing: {
        180: "32rem",
      },
    },
  },
  plugins: [],
};
