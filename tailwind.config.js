/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      body: 'Roboto, Microsoft JhengHei, -apple-system, system-ui, BlinkMacSystemFont, sans-serif',
      mono: 'Roboto, Menlo, monospace',
    },
    screens: {
      sm: '30em',
      md: '48em',
      lg: '62em',
      xl: '80em',
    },
    fontSize: {
      xxs: '0.5rem',
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '8xl': '6rem',
    },
    extend: {},
  },
  plugins: [],
}

