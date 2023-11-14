import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors:{
      "purple" : "#925FE2",
      "black" : "#1C1D21",
      "white": "#ffffff",
      "grey": "#E0E0E0",
      "greySilver": "#C0C0C0",
      "darkSilver": "#383838",
      "lightblue": "#6A9BC3",
    }
  },
  daisyui: {
      themes: [
        {
        mytheme: {
          
          "primary": "#925FE2",
                  
          "secondary": "#1C1D21",
                  
          "accent": "#6b7280",
                  
          "neutral": "#241b32",
                  
          "base-100": "#222444",
                  
          "info": "#7c99ee",
                  
          "success": "#60dca0",
                  
          "warning": "#f2b53a",
                  
          "error": "#f4452a",
          },
        },
      ],
    },
  plugins: [require("daisyui")],
}
export default config
