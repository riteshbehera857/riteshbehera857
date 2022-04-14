module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      zIndex: {
        "1": "1"
      },
      colors: {
        primary: "#313bac",
        secondary: "#312c40",
        body: "#EFE5FF",
        body_text: "#000"
      },
      fontSize: {
        'xxl': ['25rem',
          {
            lineHeight: '22rem'
          }]
      },
      fontFamily: {
        body: ["Poppins"],
        secondaryBody: ["DM Sans"],
      }
    },
  },
  plugins: [],
}