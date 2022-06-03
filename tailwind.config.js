module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
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
          "50": "var(--primary-50)",
          "100": "var(--primary-100)",
          "200": "var(--primary-200)",
          "300": "var(--primary-300)",
          "400": "var(--primary-400)",
          "500": "var(--primary-500)",
          "600": "var(--primary-600)",
          "700": "var(--primary-700)",
          "800": "var(--primary-800)",
          "900": "var(--primary-900)",
          "dark": "var(--primary-dark)",
        },
        danger: {
          "50": "var(--danger-50)",
          "100": "var(--danger-100)",
          "200": "var(--danger-200)",
          "300": "var(--danger-300)",
          "400": "var(--danger-400)",
          "500": "var(--danger-500)",
          "600": "var(--danger-600)",
          "700": "var(--danger-700)",
          "800": "var(--danger-800)",
          "900": "var(--danger-900)"
        },
      },
      variables: {
        DEFAULT: {
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
          danger: {
            "50": "#FEE2E2",
            "100": "#FECACA",
            "200": "#FCA5A5",
            "300": "#F87171",
            "400": "#F87171",
            "500": "#EF4444",
            "600": "#B91C1C",
            "700": "#991B1B",
            "800": "#7F1D1D",
            "900": "#DC2626",
          }
        },
      },
    },
  },
  plugins: [
    require('@mertasan/tailwindcss-variables'),
  ],
}
