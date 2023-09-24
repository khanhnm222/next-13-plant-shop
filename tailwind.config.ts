import type { Config } from 'tailwindcss'
const defaultTheme = require('tailwindcss/defaultTheme')

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        'primary': '#284139',
        'secondary': '#E9BA9E'
      },
      colors: {
        'brand-green': {
          DEFAULT: '#284139',
          100: 'hsl(152, 24%, 32%)',
          300: '#28413A',
          500: '#28413A',
          600: '#28413A',
          800: '#284139'
        },
        'brand-grey': {
          300: '#828282',
          DEFAULT: '#898989',
          500: '#B5B5B5',
          600: '#5E5E5E',
          800: '#383838',
        },
        'brand-beige': {
          100: '#E5E5E5',
          200: '#E3D9CD',
          300: '#EAE5E0',
          DEFAULT: '#E9BA9E',
        },
        'brand-white': {
          DEFAULT: '#fff'
        },
        brandbeige: '#E9BA9E',
        'brand-brown-500': '#4E3924',
        'brand-orange': '#FF6721',
      },
      borderColor: {
        'primary': '#284139',
        'secondary': '#E9BA9E'
      },
      screens: {
        'xs': {'min': '200px', 'max': '439px'},
        // => @media (min-width: 200px and max-width: 439px) { ... }
       ...defaultTheme.screens,
      },
    },
  },
  plugins: [],
}
export default config
