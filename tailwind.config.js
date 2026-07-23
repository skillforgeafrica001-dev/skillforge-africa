/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'glass-white': '#f8f9fb',
        'glowy-blue': '#00a8ff',
        'dark-bg': '#0f1419',
        'card-dark': '#1a1f2e',
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #1a1f2e 0%, #2d3748 100%)',
        'gradient-blue': 'linear-gradient(135deg, #00a8ff 0%, #0088cc 100%)',
      },
      boxShadow: {
        'glow-blue': '0 0 20px rgba(0, 168, 255, 0.3)',
      },
    },
  },
  plugins: [],
};