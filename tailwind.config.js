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
        },
        editorial: {
          dark: '#111111',
          charcoal: '#1A1A1A',
          stone: '#5E5C57',
          muted: '#8A867E',
          line: '#E3DFD5',
          lineDark: '#2C2B28',
          brass: '#B09462',
          druzy: '#6B7A82'
        }
      },
      fontFamily: {
        sans: ['"Montserrat"', '"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        content: ['"Montserrat"', 'sans-serif'],
        display: ['"Syne"', '"Montserrat"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        serif: ['"Playfair Display"', 'Georgia', 'serif']
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
