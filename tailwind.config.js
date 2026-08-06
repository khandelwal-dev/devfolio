/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './data/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        paper: '#f5f2ea',
        paper2: '#efeadd',
        ink: '#1a1a1a',
        lime: '#c6ff3d',
        limeSoft: '#d6ff6d',
      },
      fontFamily: {
        mono: ['var(--font-jetbrains)', 'monospace'],
        display: ['var(--font-space)', 'sans-serif'],
        serifi: ['var(--font-instrument)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      keyframes: {
        blink: { '50%': { opacity: 0 } },
        marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
        fadeUp: { from: { opacity: 0, transform: 'translateY(14px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        },
      },
      animation: {
        blink: 'blink 1s step-start infinite',
        marquee: 'marquee 30s linear infinite',
        fadeUp: 'fadeUp 0.6s ease both',
        glitch: 'glitch 0.3s linear',
      },
    },
  },
  plugins: [],
};
