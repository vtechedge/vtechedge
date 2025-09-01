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
      primary: "#0070f3",
      // Your custom colors will be added here
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
