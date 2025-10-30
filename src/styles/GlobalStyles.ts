import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        background-color: ${({ theme }) => theme.colors.base};
        color: ${({ theme }) => theme.colors.base};
        font-family: Helvetica, Arial, sans-serif;
        font-size: 16px;
        line-height: 1.5;
        height: 100vh;
    }

    #root {
        height: 100%;
    }

    main {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
