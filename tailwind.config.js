/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js,}"],
  darkMode: "class",
  theme: {

    fontFamily: {
      'sans': ['Roboto', 'sans-serif'],
      "lato":["lato", 'sans-serif']
    },
    extend: {
        colors: {
        "color-primary": "#27ae60",
        "color-secondary": "#192a56",
        "color-white": "#fff",
        "color-violet": "#A427DF",
        "color-black": "#292929cc",
        "semiblack": "#FFFFFF1A",
        "color-facebook":"#1877F2",
        "color-twitter": "#1DA1F2",
        "color-pinterest": "#E60023",
        "color-gmail": "#4285F4",
        "color-insta": "#FD1D1D",
        "color-dark": "#020d18",
        "text-dark" : "#A4BF5B",
        "bg-green" : "#242A14",
        "text-olivedark": "#192F01",
        "dmode-olive": "#192F01",
        "dmode-white": "#FFFFFF",
        "dmode-lightolive": "#DED369"
      },
      
      boxShadow: {
        "box-shadow": "0 .5rem 1.5rem rgba(0,0,0,.1)"
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
      },
    },
  },
  plugins: [],
};
