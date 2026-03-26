import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        sora: ['Sora', 'sans-serif'],
        syne: ['Syne', 'sans-serif'],
        satisfy: ['Satisfy', 'cursive'],
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    styled: true, // This line is added to enable styled mode for DaisyUI
    themes: ['light', 'dark', 'emerald'],
  },
};

export default config;
