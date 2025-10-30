import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      base: string; // background
      primary: string; // button
      secondary: string; // wrapper
      focus: string;
      border: string;
      error: string;
      white: string;
      black: string;
    };
    heights: {
      smallButton: string;
      mediumButton: string;
      input: string;
      wrapper: string;
    };
    widths: {
      wrapper: string;
    };
    sizes: {
      borderRadius: string;
    };
    breakpoints: {
      desktop: string;
      mobile: string;
    };
  }
}
