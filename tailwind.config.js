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
    },
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          "50": "#cceee1",
          "100": "#66cda4",
          "200": "#4dc495",
          "300": "#33bc85",
          "400": "#1ab376",
          "500": "#00ab67",
          "600": "#009a5d",
          "700": "#008952",
          "800": "#007848",
          "900": "#00673e",
          "dark": "00110a",
        },
      }
    },
  },
  plugins: [],
}
