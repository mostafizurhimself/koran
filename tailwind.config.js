module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "576px",
        md: "768px",
        lg: "1024px",
        // xl: "1200px",
      }
    },

    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          "50": "#e8f9f1",
          "100": "#77d9ab",
          "200": "#61d29d",
          "300": "#4acc8f",
          "400": "#34c581",
          "500": "#1dbf73",
          "600": "#1aac68",
          "700": "#17995c",
          "800": "#148651",
          "900": "#117345",
          "dark": "#03130b",
        },
      }
    },
  },
  plugins: [],
}
