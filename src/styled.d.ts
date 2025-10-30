import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      base: string; // background
      primary: string; // button
      secondary: string; // wrapper
      focus: string;
      border: string;
    };
    height: {
      button: string;
      input: string;
    };
  }
}
