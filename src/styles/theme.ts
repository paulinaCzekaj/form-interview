import type { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    base: '#1D3461', // background
    primary: '#0083FD', // button
    secondary: '#E8F0F8', // wrapper
    focus: '#0083FD', // primary
    border: '#A0A0A0', // border + placeholder
    error: '#c1272D',
    white: '#FFFFFF',
  },
  heights: {
    smallButton: '24px',
    mediumButton: '48px',
    input: '48px',
    wrapper: '444px',
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
