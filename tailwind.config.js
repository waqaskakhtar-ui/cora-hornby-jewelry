/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Strict Theme Color System
        cora: {
          bg: '#f8f4e7',
          text: '#4e342e',
          border: '#4e342e',
          accent: '#cc5500',
          'accent-hover': '#b34700',
          'dark-bg': '#000000',
          'dark-text': '#ffffff',
          'dark-border': '#ffffff',
          'dark-accent': '#2c3480',
          'dark-accent-hover': '#3b46a3',
        },
        sand: {
          50: '#FAF9F5',
          100: '#F5F4EE',
          200: '#EBE9DF',
          300: '#DDD8CB',
          400: '#C2BCAB',
          900: '#141412'
        },
        obsidian: {
          950: '#0A0909',
          900: '#0F0E0D',
          850: '#141312',
          800: '#1A1917',
          700: '#24221F',
          600: '#2E2B27'
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Montserrat"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Playfair Display"', '"Montserrat"', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        'ultra-tight': '-0.06em',
        'tightest': '-0.04em',
        'super-wide': '0.25em'
      }
    },
  },
  plugins: [],
}
