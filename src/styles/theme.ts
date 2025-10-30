import type { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    primary: '#0083FD', // button
    base: '#1D3461', // background
    secondary: '#E8F0F8', // wrapper
    focus: '#0083FD',
    border: '#A0A0A0', // border + placeholder
    error: '#c1272D',
    white: '#FFFFFF',
    black: '#000000', // text
  },
  heights: {
    smallButton: '24px',
    mediumButton: '48px',
    input: '48px',
    wrapper: '426px',
  },
  widths: {
    wrapper: '1030px',
  },
  sizes: {
    borderRadius: '8px',
  },
  breakpoints: {
    desktop: '1024px',
    mobile: '768px',
  },
};
