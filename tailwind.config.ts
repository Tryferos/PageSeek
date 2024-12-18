import type {Config} from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        ['wotfardRg']: ['var(--font-wotfard-regular)', 'Arial', 'sans-serif'],
        ['wotfardMd']: ['var(--font-wotfard-medium)', 'Arial', 'sans-serif'],
        ['wotfardSb']: ['var(--font-wotfard-semibold)', 'Arial', 'sans-serif'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        secondary: '#334155',
      },
      scale: {
        101: '1.01',
        102: '1.02',
        103: '1.03',
        104: '1.04',
        105: '1.05',
      },
      boxShadow: {
        'book-result': '0px 0px 10px rgba(0, 0, 0, 0.1)',
        'book-result-hover': '0px 0px 16px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
};
export default config;
