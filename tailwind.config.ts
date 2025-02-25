import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx,css}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx,css}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx,css}",
    "*",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Adicionando Poppins como fonte
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        blue:"#1572D3",
        gray300:"#ACACAC",
        gray500:"#747474",
        gray700:"#484848",
        gray900:"#3E3E3E",
        black800:"#242424",
        black900:"#272727",
      },

    },

  },
  plugins: [],
} satisfies Config;
