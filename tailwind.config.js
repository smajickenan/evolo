export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      fontFamily: {
        lexend: ['Lexend', 'sans-serif'],
      },
      fontFamily: {
        libre: ['Lexend', 'sans-serif'],
        popins: ['"Poppins"', 'sans-serif']
      },
      animation: {
        "meteor-effect": "meteor 60s linear infinite",
      },
      keyframes: {
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-1000px)",
            opacity: "0",
          },
        },
      },
      colors: {
        navy: '#023157',
        'off-white': '#edf0f2',
        gray: '#d2d2d2',
        'sky-blue': '#6fa8d6',
      },
    },
  },
  plugins: [],
}
