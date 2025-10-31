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
        letter-spacing: 0;
    }

    main {
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        max-width: 100vw;
        padding: 24px;
        
        @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
            padding: 16px;
        }
    }
    
    h2 {
      font-weight: 700;
      font-size: 2.25rem;
    }

    h5 {
       font-size: 1.5rem;
    }
`;
