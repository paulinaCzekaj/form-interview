import type { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    primary: '#0083fd', // button
    base: '#1D3461', // background
    secondary: '#FFFFFF', // wrapper
    focus: '#0083fd',
    border: '#1D346130', // base + opacity 30%
    error: '#d32f2f',
  },
  heights: {
    smallButton: '24px',
    mediumButton: '48px',
    input: '48px',
    wrapper: '374px',
  },
  widths: {
    wrapper: '1030px',
  },
  breakpoints: {
    desktop: '1024px',
    mobile: '768px',
  },
};
