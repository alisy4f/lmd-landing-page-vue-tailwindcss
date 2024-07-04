/** @type {import('tailwindcss').Config} */
export default {
  content: [
    'index.html',
    './src/**/*.{vue,js,jsx,ts,tsx}',
  ],
  mode: 'jit',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
      },
    },
    extend: {
      colors: {
        primary: {
          100: '#017BB4',
          200: '#015079'
        },
        secondary: '#FF693A'
      }
    },
  },
}

