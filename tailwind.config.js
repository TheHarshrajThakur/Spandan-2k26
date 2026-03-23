/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // CSS-var mapped tokens (used as fallbacks)
        base: 'var(--c-bg)',
        surface: 'var(--c-surface)',

        // Dark palette
        'neon-pink':  '#FF2E97',
        'elec-blue':  '#3AF2FF',
        'vio-glow':   '#8A2BE2',

        // Light palette
        'soft-purple': '#7C3AED',
        'soft-blue':   '#2563EB',
        'soft-pink':   '#EC4899',

        // Shared vibrant swatches (used for event cards etc)
        violet: '#7C3AED',
        'violet-light': '#A78BFA',
        pink: '#EC4899',
        'pink-light': '#F472B6',
        cyan: '#06B6D4',
        amber: '#F59E0B',
        emerald: '#10B981',
        blue: '#3B82F6',
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        display: ['Orbitron', 'sans-serif'],
        body:    ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      animation: {
        'float':        'float 5s ease-in-out infinite',
        'glow-pulse':   'glowPulse 3s ease-in-out infinite',
        'spin-slow':    'spin 8s linear infinite',
        'marquee':      'marquee 20s linear infinite',
      },
    },
  },
  plugins: [],
}
