import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    
    extend: {
      //Made themes for figma project
      colors: {
        myPink:"#F98585",
        myBlack: "#21243D",
        heroelipse: "#dfd8d8",
        recentBackground: "#F4E2E2",
        footerBackground: "#FAF5F5",
        background: "#f6f1f1",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
