import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        slideInRight: {
          '0%': { transform: 'translateX(100%) scale(0.95)', opacity: '0' },
          '70%': { transform: 'translateX(0) scale(1.05)', opacity: '1' },
          '90%': { transform: 'translateX(2%) scale(1.02)' },
          '100%': { transform: 'translateX(0) scale(1)' },
        },
      },
      animation: {
        slideInRight: 'slideInRight 0.6s ease-out forwards',
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
