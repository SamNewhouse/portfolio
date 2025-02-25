import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/presentation/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-roboto-mono)"],
      },
    },
  },
};

export default config;
