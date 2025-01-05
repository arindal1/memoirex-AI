/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // dark: '#1c1c1c',
        // lavender: '#ddd6fe',
        // offwhite: '#f1f1f1'

        // dark: '#070f2b',
        // navy: '#1b1a55',
        // cold: '#535c91',
        // light: '#9290c3'

        dark: '#131010',
        brown: '#543a14',
        beige: '#f0bb78',
        light: '#fff0dc'

      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        spaceMono: ['"Space Mono"', 'monospace']
      },
      screens: {
        'ssm': '340px',
        'xs': '420px'
      },
    },
  },
  plugins: [],
}
