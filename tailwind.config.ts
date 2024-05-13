import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',    // Small devices (e.g., phones)
        'md': '768px',    // Medium devices (e.g., tablets)
        'lg': '1024px',   // Large devices (e.g., laptops)
        'xl': '1280px',   // Extra large devices (e.g., desktops)
        '2xl': '1536px',  // Extra extra large devices (e.g., large desktops)
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
