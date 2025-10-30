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
    breakpoints: {
      desktop: string;
      mobile: string;
    };
  }
}
