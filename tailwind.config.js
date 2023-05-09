/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bannerImage': "url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png')"
      }
    },
  },
  plugins: [],
}
