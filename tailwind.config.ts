import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3490dc',
          light: '#6cb2eb',
          dark: '#1d4f91',
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        alert: {
          DEFAULT: '#ff8800', // Base alert orange color
          50: '#fff4e0',    // Very light shade for backgrounds
          100: '#ffe6b3',   // Light shade for hover backgrounds
          200: '#ffcc80',   // Light shade for borders
          300: '#ffb34d',   // Light shade for text
          400: '#ff9a1a',   // Base shade for main elements
          500: '#ff8800',   // Default shade (base)
          600: '#e67a00',   // Darker shade for emphasis
          700: '#cc6d00',   // Dark shade for text
          800: '#b36000',   // Darker shade for borders
          900: '#994c00',   // Darkest shade for text and borders
        },
        red: {
          DEFAULT: '#e3342f', // Base red color
          light: '#ef5753',   // Lighter shade for hover backgrounds
          dark: '#cc1f1a',    // Darker shade for emphasis
          50: '#ffeded',      // Very light shade for backgrounds
          100: '#ffd2d2',     // Light shade for hover backgrounds
          200: '#ffb3b3',     // Light shade for borders
          300: '#ff9393',     // Light shade for text
          400: '#ff7373',     // Base shade for main elements
          500: '#ff5353',     // Default shade (base)
          600: '#cc4242',     // Darker shade for emphasis
          700: '#993131',     // Dark shade for text
          800: '#662121',     // Darker shade for borders
          900: '#331010',     // Darkest shade for text and borders
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
