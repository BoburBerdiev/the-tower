/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        'brown': '#8F8170',
        'iron':"#59657A",
        'customGrey': '#808080'
      },
      fontFamily: {
        // app.js ga qarab font ulansin
        elegance: ['var(--font-el_messiri)'],
        // roboto: ['var(--font-roboto)'],
        // inter: ['var(--font-inter)'],
        roboto: ['var(--font-alegreya_sans)'],
        alegreya: ['var(--font-alegreya_sans)'],
        openSans: ['var(--font-open-sans)']
      },
    },
  },
  plugins: [],
}