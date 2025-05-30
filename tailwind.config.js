/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        themeorange: '#FF6F00',
        themered: '#FF1744',
        themelime: '#76FF03',
        themelilac: '#D500F9',
        themeteal: '#00BFA5',
        thememint: '#00E676',
        themenavy: '#304FFE',
        themelightblue: '#2979FF',
      },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    }
    },
  },
  plugins: [],
}
