// Estilização global da página.

import { createGlobalStyle, styled } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', 'Arial', 'sans-serif';

        &:focus {
            outline: ${( { theme } ) => theme.colors.purple400};
        }
    }

    * {
        transition: .1s ease-in-out;
    }

    body {
        background-color: ${({ theme }) => theme.colors.background};
    }

    button {
        cursor: pointer;
    }

    hr {
        border: 1px solid ${({ theme }) => theme.colors.secundary};
    }

    a {
        color: ${({ theme }) => theme.colors.purple400};
        text-decoration: none;
    }

    ::-webkit-scrollbar {
        width: 5px;
    }

    ::-webkit-scrollbar-track {
        background: ${({ theme }) => theme.colors.black800}; 
    }

    ::-webkit-scrollbar-thumb {
        background: #888; 
        border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #555; 
    }

    @media (max-width: 1366px) {
        html {
            font-size: 85%;
        }
    }
`