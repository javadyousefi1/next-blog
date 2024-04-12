import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },  
    extend: {
      colors: {
        "blue": "var(--color-blue)",
        "white": "var(--color-white)",
        "black": "var(--color-black)",
        "dark-gray": "var(--color-dark-gray)",
        "gray": "var(--color-gray)",
        "ligth-gray1": "var(--color-light-gray1)",
        "ligth-gray2": "var(--color-light-gray2)",
      },
      boxShadow: {
        'custom-shadow': '0 0 10px #e9dddded',
      },
    },
  },
  plugins: [],
}; 
export default config;
