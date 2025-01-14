/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "360px",
      sm: "768px",
      md: "905px",
      lg: "1240px",
      xl: "1440px",
    },
    extend: {},
    spacing: {
      4.5: "1.125rem",
      headerHeightMobile: "var(--headerHeightMobile)",
      headerHeightDesktop: "var(--headerHeightDesktop)",
    },
    colors: {
      primary: {
        100: "hsl(26, 100%, 55%)",
        200: "hsl(25, 100%, 94%)",
       
      },
      secondary: {
        100: "#93FF6D",
        200: "#2BA900",
      },
      neutral: {
        100: "hsl(220, 13%, 13%)",
        200: "hsl(219, 9%, 45%)",
        300: "hsl(220, 14%, 75%)",
        400: "hsl(223, 64%, 98%)",
      },
      gray: {
        EFEFEF: "#EFEFEF",
      },
      error: '#FF003D'
    },
  },
  plugins: [],
}