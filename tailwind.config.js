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
        'aa': '344px',  // 344x882
        'ab': '360px',  // 360x740
        'bb': '375px',  // 375x667
        'bc': '390px',  // 390x844
        'cc': '414px',  // 414x896
        'cd': '412px',  // 412x915
        'dd': '430px',  // 430x932
        'de': '491px',  // 491x1091
      }
    },
  },
  plugins: [],
}
