/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // 'hero-pattern': "url('./src/Assets/Banner.jpg')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      }
    }
  },
  plugins: [],
}

