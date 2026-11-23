/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#030712', // ultra deep black
          900: '#060B18', // deep futuristic navy/charcoal
          850: '#0A1024',
          800: '#0E1630',
          750: '#141E3D',
          700: '#1B264F',
          600: '#2C3B6F',
        },
        cyber: {
          blue: '#00F0FF',
          cyan: '#06B6D4',
          violet: '#8B5CF6',
          purple: '#A855F7',
          pink: '#EC4899',
          gold: '#F59E0B',
          emerald: '#10B981',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['Space Grotesk', 'Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -5px rgba(6, 182, 212, 0.45), 0 0 10px -2px rgba(0, 240, 255, 0.3)',
        'glow-blue': '0 0 30px -5px rgba(0, 112, 243, 0.4), 0 0 12px -2px rgba(6, 182, 212, 0.25)',
        'glow-violet': '0 0 30px -5px rgba(139, 92, 246, 0.45), 0 0 12px -2px rgba(168, 85, 247, 0.3)',
        'glow-gold': '0 0 35px -5px rgba(245, 158, 11, 0.45), 0 0 15px -2px rgba(251, 191, 36, 0.3)',
        'glass-card': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'gradient-x': 'gradientX 15s ease infinite',
        'spin-slow': 'spin 25s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        gradientX: {
          '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'left center' },
          '50%': { 'background-size': '200% 200%', 'background-position': 'right center' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
