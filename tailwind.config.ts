import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // 1. YOUR CUSTOM BRAND COLORS
      colors: {
        brand: {
          purple: {
            DEFAULT: '#7C3AED',
            light: '#A855F7',
          },
          magenta: {
            DEFAULT: '#FF66C4',
            light: '#F472B6',
          },
          indigo: {
            DEFAULT: '#1A0033', // Deep Indigo / Midnight Blue
            light: '#2D0066',
          },
          pink: '#FF5CA7',
        }
      },
      
      // 2. YOUR CUSTOM GRADIENTS
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-purple': 'linear-gradient(to right, #7C3AED, #A855F7)',
        'gradient-magenta': 'linear-gradient(to right, #FF66C4, #F472B6)',
        'gradient-indigo': 'linear-gradient(to bottom right, #1A0033, #2D0066)',
        'gradient-vibrant': 'linear-gradient(to right, #7C3AED, #FF5CA7)', // Mixed purple to pink!
      },

      // 3. YOUR FONTS (Already perfectly set up!)
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        sora: ['Sora', 'sans-serif'],
        syne: ['Syne', 'sans-serif'],
        satisfy: ['Satisfy', 'cursive'],
      },

      // 4. YOUR EXACT FONT SIZES
      fontSize: {
        'size-15': '15px',
        'size-16': '16px',
        'size-18': '18px',
        'size-22': '22px',
        'size-42': '42px',
        'size-60': '60px',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    styled: true, 
    themes: ['light', 'dark', 'emerald'],
  },
};

export default config;