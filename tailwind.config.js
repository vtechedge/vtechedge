import { default as Clamp } from "./src/utils/Clamp";

/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    colors: {
      // Primary Brand Colors (Blue-Gray Family) - Professional & Trustworthy
      primary: {
        DEFAULT: '#415A77',     // Main brand color
        50: '#f0f4f8',
        100: '#d9e2ec',
        200: '#b8c5d1',
        300: '#9fb3c8',
        400: '#7c98b3',
        500: '#415A77',         // Base
        600: '#344861',         // Hover states
        700: '#2c3e50',         // Darker variant
        800: '#274c77',         // Footer/accents
        900: '#1b263b',         // Very dark
      },

      // Accent Colors (Bright Blue for CTAs) - Action & Engagement
      accent: {
        DEFAULT: '#2563eb',     // Tailwind blue-600 (vibrant)
        light: '#3b82f6',       // blue-500
        dark: '#1e3a8a',        // blue-900
        hover: '#1d4ed8',       // blue-700
      },

      // Dark Theme Colors (for Coming Soon & dark sections)
      dark: {
        DEFAULT: '#0d1b2a',
        800: '#1b263b',
        700: '#415a77',
        600: '#778da9',
        100: '#e0e1dd',
      },

      // Neutral/Gray Scale
      neutral: {
        bg: '#ececec',          // Light backgrounds
      }
    },
  },
};
export const plugins = [
  function ({ addUtilities }) {
    addUtilities({
      ".padding-x": {
        "padding-left": Clamp(0.5, 11.37),
        "padding-right": Clamp(0.5, 11.37),
      },
      ".margin-x": {
        "margin-left": Clamp(0.5, 15),
        "margin-right": Clamp(0.5, 15),
      },
    });
  },
];
export const safelist = [
  "border-gray-200",
  "border-gray-100",
  "text-gray-500",
  "text-gray-600",
  "text-gray-700",
  "text-gray-800",
  "text-gray-900",
  "bg-gray-100",
  "bg-gray-200",
  "bg-gray-300",
  "bg-gray-400",
  "bg-gray-500",
  "bg-gray-600",
  "bg-gray-700",
  "bg-gray-800",
  "bg-gray-900",
];
