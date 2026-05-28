/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Zellor Zen Labs - Botanical Biotech Theme
        'theme-bg': '#FBFAF6',
        'theme-text': '#0F2A3F',

        // Primary Palette - Sage Teal (botanical zen)
        'brand': {
          DEFAULT: '#4A8478',
          50: '#F2F7F5',
          100: '#E0ECE7',
          200: '#BFD7CE',
          300: '#94BAAE',
          400: '#6A9C8D',
          500: '#4A8478',
          600: '#3C6C62',
          700: '#305850',
          800: '#264640',
          900: '#1B3531',
        },

        // Secondary & Neutral - Deep Navy
        'charcoal': {
          DEFAULT: '#0F2A3F',
          50: '#F4F6F8',
          100: '#E5EAEF',
          200: '#C3CDD6',
          300: '#94A4B2',
          400: '#5F7488',
          500: '#3C5269',
          600: '#243C54',
          700: '#192F44',
          800: '#14304B',
          900: '#0F2A3F',
        },

        // Backgrounds & Accents
        'cream': '#FBFAF6',
        'blush-light': '#E0ECE7',
        'warm-white': '#FDFCF8',
        'sage-mist': '#D5E4DD',
        'navy-deep': '#0F2A3F',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['"Cormorant Garamond"', 'Playfair Display', 'serif'],
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'serif'],
        display: ['"Cormorant Garamond"', 'serif'],
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.03)',
        'DEFAULT': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.02)',
        // Soft white card shadow
        'soft': '0 4px 20px rgba(0, 0, 0, 0.04), 0 2px 8px rgba(0, 0, 0, 0.02)',
        'luxury': '0 8px 30px rgba(0, 0, 0, 0.08), 0 4px 10px rgba(0, 0, 0, 0.04)',
      },
      borderRadius: {
        'none': '0',
        'sm': '0.25rem',
        'DEFAULT': '0.5rem',
        'md': '0.75rem',
        'lg': '1rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        'full': '9999px',
      },
      animation: {
        'fadeIn': 'fadeIn 0.6s ease-out',
        'slideUp': 'slideUp 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 8s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundImage: {
        'zellor-gradient': 'linear-gradient(180deg, #0F2A3F 0%, #1E4A52 50%, #4A8478 100%)',
        'zellor-gradient-horizontal': 'linear-gradient(90deg, #0F2A3F 0%, #4A8478 100%)',
        'zen-veil': 'radial-gradient(ellipse at top, rgba(74,132,120,0.08), transparent 60%)',
      },
    },
  },
  plugins: [],
}
