import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ['wotfardRg']: ['var(--font-wotfard-regular)', 'Arial', 'sans-serif'],
        ['wotfardMd']: ['var(--font-wotfard-medium)', 'Arial', 'sans-serif'],
        ['wotfardSb']: ['var(--font-wotfard-semibold)', 'Arial', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
