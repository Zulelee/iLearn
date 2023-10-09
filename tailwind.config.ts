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
      
    }
  },
  plugins: [],
}
export default config
