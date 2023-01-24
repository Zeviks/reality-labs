/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./app/**/*.{html,js,jsx}",
    "./components/**/*.{html,js,jsx}",
    "./sections/**/*.{html,js,jsx}",
    "./styles/**/*.{js,jsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "primary-black": "#020B18",
        "secondary-white": "#c7c7c7",
        "main-900": "#190A01",
        "main-800": "#632903",
        "main-700": "#943E05",
        "main-600": "#C65306",
        "main-500": "#F76809",
        "main-400": "#F98639",
        "main-300": "#FAA46B",
        "main-200": "#FCC29C",
        "main-100": "#FDE1CE",
      },
      transitionTimingFunction: {
        "out-flex": "cubic-bezier(0.05, 0.6, 0.4, 0.9)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
