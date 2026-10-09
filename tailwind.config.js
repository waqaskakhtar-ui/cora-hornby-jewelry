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
          950: '#070606',
          900: '#0C0A09',
          850: '#12100E',
          800: '#171513',
          700: '#1F1C18',
          600: '#2A2621'
        },
        espresso: {
          950: '#110D0A',
          900: '#18130E',
          800: '#231B15',
          700: '#32271E'
        },
        alabaster: {
          50: '#FCFBF8',
          100: '#F7F5EE',
          200: '#EFECE2',
          300: '#E4DFD2'
        },
        pearl: '#EAE6DD',
        luxeGold: '#C5A869',
        editorial: {
          dark: '#0E0D0C',
          charcoal: '#171615',
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
        serif: ['"Cormorant Garamond"', '"Playfair Display"', '"Italiana"', 'Georgia', 'serif'],
        editorial: ['"Cormorant Garamond"', 'Georgia', 'serif']
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
