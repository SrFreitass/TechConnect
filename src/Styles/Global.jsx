// Estilização global da página.

import { createGlobalStyle, styled } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', 'Arial', 'sans-serif';
    }

    body {
        background-color: ${({ theme }) => theme.colors.background};
    }

    button {
        cursor: pointer;
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
`