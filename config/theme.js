import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
  colors: {},
  breakpoints: ['30em', '48em', '62em', '80em'],
  fonts: {
    heading:
      'Roboto, Microsoft JhengHei, -apple-system, system-ui, BlinkMacSystemFont, Avenir Next, sans-serif',
    body: 'Roboto, Microsoft JhengHei, -apple-system, system-ui, BlinkMacSystemFont, sans-serif',
    mono: 'Roboto, Menlo, monospace',
  },
  fontSizes: {
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
});

export default customTheme;
